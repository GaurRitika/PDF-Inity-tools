import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FileImage, Download, Trash2, Plus, ChevronRight, Image, FileText, Scissors, FileDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JpgToPdfHeroSection from "@/components/JpgToPdfHeroSection";
import JpgToPdfFileUpload from "@/components/JpgToPdfFileUpload";
import JpgToPdfFAQSection from "@/components/JpgToPdfFAQSection";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  convertImagesToPdf,
  downloadPdfFile,
  formatFileSize,
  isImageFile,
  PageSize,
  Orientation,
} from "@/utils/jpgToPdf";

interface ImageFile {
  file: File;
  preview: string;
}

const JpgToPdf = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [convertedPdf, setConvertedPdf] = useState<Uint8Array | null>(null);
  const [pageSize, setPageSize] = useState<PageSize>("a4");
  const [orientation, setOrientation] = useState<Orientation>("portrait");
  const { toast } = useToast();

  const handleFilesSelected = (files: File[]) => {
    const validFiles = files.filter(isImageFile);
    if (validFiles.length !== files.length) {
      toast({
        title: "Invalid files",
        description: "Some files were not valid images and were skipped.",
        variant: "destructive",
      });
    }

    const newImages = validFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
    setConvertedPdf(null);
  };

  const removeImage = (index: number) => {
    setImages((prev) => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
    setConvertedPdf(null);
  };

  const clearAll = () => {
    images.forEach((img) => URL.revokeObjectURL(img.preview));
    setImages([]);
    setConvertedPdf(null);
    setProgress(0);
  };

  const handleConvert = async () => {
    if (images.length === 0) return;

    setIsConverting(true);
    setProgress(0);

    try {
      const pdfBytes = await convertImagesToPdf(
        images.map((img) => img.file),
        { pageSize, orientation },
        setProgress
      );
      setConvertedPdf(pdfBytes);
      toast({
        title: "Conversion complete",
        description: "Your PDF is ready to download!",
      });
    } catch (error) {
      console.error("Conversion error:", error);
      toast({
        title: "Conversion failed",
        description: "An error occurred during conversion. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!convertedPdf) return;
    downloadPdfFile(convertedPdf, "images-to-pdf.pdf");
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is JPG to PDF conversion free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our JPG to PDF converter is completely free to use with no hidden fees or limits.",
        },
      },
      {
        "@type": "Question",
        name: "Can I convert multiple images?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! You can upload multiple JPG, JPEG, or PNG images and combine them all into a single PDF document.",
        },
      },
      {
        "@type": "Question",
        name: "Will the image quality be preserved?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we preserve the original quality of your images when converting to PDF.",
        },
      },
      {
        "@type": "Question",
        name: "Are my files safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Completely safe. All conversion happens directly in your browser. Your files are never uploaded to our servers.",
        },
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "JPG to PDF Converter",
    description: "Convert JPG, JPEG, and PNG images to PDF online for free.",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <Helmet>
        <title>JPG to PDF Converter — Free Online Image to PDF Tool</title>
        <meta
          name="description"
          content="Convert JPG, JPEG, and PNG images to PDF online for free. Fast, secure, and high-quality JPG to PDF converter — no signup needed."
        />
        <meta
          name="keywords"
          content="jpg to pdf, convert image to pdf, jpeg to pdf online, free jpg to pdf converter, png to pdf, image to pdf"
        />
        <link rel="canonical" href="https://pixel-pdf-joiner.vercel.app/jpg-to-pdf" />
        <meta property="og:title" content="JPG to PDF Converter — Free Online Tool" />
        <meta
          property="og:description"
          content="Convert JPG, JPEG, and PNG images to PDF online for free. Fast and secure."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixel-pdf-joiner.vercel.app/jpg-to-pdf" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">JPG to PDF</span>
          </nav>

          <JpgToPdfHeroSection />

          {images.length === 0 ? (
            <JpgToPdfFileUpload
              onFilesSelected={handleFilesSelected}
              disabled={isConverting}
            />
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Image previews */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">
                    {images.length} image{images.length > 1 ? "s" : ""} selected
                  </h3>
                  <Button variant="outline" size="sm" onClick={clearAll}>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear All
                  </Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="relative group rounded-lg overflow-hidden border border-border"
                    >
                      <img
                        src={img.preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-background/80 px-2 py-1">
                        <p className="text-xs text-muted-foreground truncate">
                          {img.file.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatFileSize(img.file.size)}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Add more button */}
                  <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 hover:bg-accent/50 transition-colors">
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png"
                      multiple
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files) {
                          handleFilesSelected(Array.from(e.target.files));
                        }
                      }}
                    />
                    <Plus className="w-8 h-8 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground">Add More</span>
                  </label>
                </div>
              </div>

              {/* Options */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">PDF Options</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Page Size
                    </label>
                    <Select value={pageSize} onValueChange={(v) => setPageSize(v as PageSize)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a4">A4</SelectItem>
                        <SelectItem value="letter">Letter</SelectItem>
                        <SelectItem value="fit">Fit to Image</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Orientation
                    </label>
                    <Select value={orientation} onValueChange={(v) => setOrientation(v as Orientation)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="portrait">Portrait</SelectItem>
                        <SelectItem value="landscape">Landscape</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Progress */}
              {isConverting && (
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Converting...</span>
                    <span className="text-sm text-muted-foreground">{progress}%</span>
                  </div>
                  <Progress value={progress} />
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {!convertedPdf ? (
                  <Button
                    size="lg"
                    onClick={handleConvert}
                    disabled={isConverting || images.length === 0}
                    className="min-w-[200px]"
                  >
                    <FileImage className="w-5 h-5 mr-2" />
                    {isConverting ? "Converting..." : "Convert to PDF"}
                  </Button>
                ) : (
                  <Button size="lg" onClick={handleDownload} className="min-w-[200px]">
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Why use section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
                Why Use Our JPG to PDF Tool?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <FileImage className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Multiple Images</h3>
                  <p className="text-sm text-muted-foreground">
                    Combine multiple JPG, JPEG, or PNG images into a single PDF document
                  </p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">High Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Preserve original image quality with no compression artifacts
                  </p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Flexible Options</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose page size and orientation to fit your needs
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Steps section */}
          <section className="py-16 px-4 bg-secondary/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
                Steps to Create PDF from JPG
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Upload Images</h3>
                  <p className="text-sm text-muted-foreground">
                    Drag and drop or click to select your JPG, JPEG, or PNG files
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Choose Options</h3>
                  <p className="text-sm text-muted-foreground">
                    Select your preferred page size and orientation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Download PDF</h3>
                  <p className="text-sm text-muted-foreground">
                    Click convert and download your PDF instantly
                  </p>
                </div>
              </div>
            </div>
          </section>

          <JpgToPdfFAQSection />

          {/* Related Tools */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
                Related Tools
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  to="/pdf-to-jpg"
                  className="flex flex-col items-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <Image className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">PDF to JPG</span>
                </Link>
                <Link
                  to="/merge-pdf"
                  className="flex flex-col items-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Merge PDF</span>
                </Link>
                <Link
                  to="/split-pdf"
                  className="flex flex-col items-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <Scissors className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Split PDF</span>
                </Link>
                <Link
                  to="/compress-pdf"
                  className="flex flex-col items-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <FileDown className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Compress PDF</span>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default JpgToPdf;
