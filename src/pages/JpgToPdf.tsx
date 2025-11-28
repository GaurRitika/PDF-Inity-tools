import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FileText, Download, Trash2, ChevronRight, GripVertical, Image as ImageIcon } from "lucide-react";
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
  id: string;
  preview: string;
}

const JpgToPdf = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [convertedBlob, setConvertedBlob] = useState<Blob | null>(null);
  const [pageSize, setPageSize] = useState<PageSize>("a4");
  const [orientation, setOrientation] = useState<Orientation>("portrait");
  const { toast } = useToast();

  const handleFilesSelected = (files: File[]) => {
    const validFiles = files.filter((file) => {
      if (!isImageFile(file)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported image format.`,
          variant: "destructive",
        });
        return false;
      }
      return true;
    });

    const newImages: ImageFile[] = validFiles.map((file) => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
    setConvertedBlob(null);
  };

  const removeImage = (id: string) => {
    setImages((prev) => {
      const image = prev.find((img) => img.id === id);
      if (image) {
        URL.revokeObjectURL(image.preview);
      }
      return prev.filter((img) => img.id !== id);
    });
    setConvertedBlob(null);
  };

  const handleConvert = async () => {
    if (images.length === 0) return;

    setIsConverting(true);
    setProgress(0);
    setConvertedBlob(null);

    try {
      const result = await convertImagesToPdf(
        images.map((img) => img.file),
        { pageSize, orientation },
        setProgress
      );

      setConvertedBlob(result.blob);
      toast({
        title: "Conversion complete!",
        description: "Your PDF is ready to download.",
      });
    } catch (error) {
      console.error("Conversion error:", error);
      toast({
        title: "Conversion failed",
        description: "There was an error converting your images. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (convertedBlob) {
      downloadPdfFile(convertedBlob, "converted-images.pdf");
    }
  };

  const clearAll = () => {
    images.forEach((img) => URL.revokeObjectURL(img.preview));
    setImages([]);
    setConvertedBlob(null);
    setProgress(0);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is JPG to PDF conversion free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our JPG to PDF converter is 100% free to use with no hidden costs, watermarks, or signup required.",
        },
      },
      {
        "@type": "Question",
        name: "Can I convert multiple images to one PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! You can upload multiple JPG, JPEG, or PNG images and combine them into a single PDF document.",
        },
      },
      {
        "@type": "Question",
        name: "Will the image quality be preserved?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our converter maintains the original image quality without any compression or quality loss.",
        },
      },
      {
        "@type": "Question",
        name: "Are my files safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your files are completely safe. All processing happens in your browser - your images never leave your device.",
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
          content="jpg to pdf, convert image to pdf, jpeg to pdf online, free jpg to pdf converter, png to pdf, image to pdf converter"
        />
        <meta property="og:title" content="JPG to PDF Converter — Free Online Image to PDF Tool" />
        <meta
          property="og:description"
          content="Convert JPG, JPEG, and PNG images to PDF online for free. Fast, secure, and high-quality converter."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/jpg-to-pdf" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Breadcrumbs */}
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-4 h-4" />
            <li className="text-foreground font-medium">JPG to PDF</li>
          </ol>
        </nav>

        <main className="max-w-7xl mx-auto px-4 pb-16">
          <JpgToPdfHeroSection />

          {images.length === 0 ? (
            <JpgToPdfFileUpload
              onFilesSelected={handleFilesSelected}
              disabled={isConverting}
            />
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Options */}
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Page Size:</span>
                  <Select value={pageSize} onValueChange={(v) => setPageSize(v as PageSize)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a4">A4</SelectItem>
                      <SelectItem value="letter">Letter</SelectItem>
                      <SelectItem value="fit">Fit to Image</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Orientation:</span>
                  <Select value={orientation} onValueChange={(v) => setOrientation(v as Orientation)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="portrait">Portrait</SelectItem>
                      <SelectItem value="landscape">Landscape</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Image list */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    className="relative group bg-card border border-border rounded-xl overflow-hidden shadow-card"
                  >
                    <div className="aspect-square relative">
                      <img
                        src={image.preview}
                        alt={image.file.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => removeImage(image.id)}
                          disabled={isConverting}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-2">
                      <p className="text-xs font-medium text-foreground truncate">
                        {index + 1}. {image.file.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(image.file.size)}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Add more button */}
                <button
                  onClick={() => document.getElementById("add-more-input")?.click()}
                  disabled={isConverting}
                  className="aspect-square border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-50"
                >
                  <ImageIcon className="w-8 h-8" />
                  <span className="text-sm">Add More</span>
                </button>
                <input
                  id="add-more-input"
                  type="file"
                  accept="image/jpeg,image/jpg,image/png"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      handleFilesSelected(Array.from(e.target.files));
                    }
                    e.target.value = "";
                  }}
                />
              </div>

              {/* Progress */}
              {isConverting && (
                <div className="space-y-2">
                  <Progress value={progress} className="h-2" />
                  <p className="text-sm text-center text-muted-foreground">
                    Converting... {progress}%
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" onClick={clearAll} disabled={isConverting}>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear All
                </Button>

                {!convertedBlob ? (
                  <Button onClick={handleConvert} disabled={isConverting || images.length === 0}>
                    <FileText className="w-4 h-4 mr-2" />
                    {isConverting ? "Converting..." : "Convert to PDF"}
                  </Button>
                ) : (
                  <Button onClick={handleDownload}>
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Why use section */}
          <section className="py-16 max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Why Use Our JPG to PDF Tool?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">100% Secure</h3>
                <p className="text-sm text-muted-foreground">
                  All conversion happens in your browser. Files never leave your device.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">
                  Convert multiple images to PDF in seconds with our optimized engine.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">High Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Original image quality is preserved in the final PDF document.
                </p>
              </div>
            </div>
          </section>

          {/* Steps section */}
          <section className="py-12 max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Steps to Create PDF from JPG
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 text-center shadow-card">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold text-foreground mb-2">Upload Images</h3>
                <p className="text-sm text-muted-foreground">
                  Drag and drop your JPG, JPEG, or PNG images or click to browse.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center shadow-card">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold text-foreground mb-2">Choose Options</h3>
                <p className="text-sm text-muted-foreground">
                  Select page size and orientation, then click Convert to PDF.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center shadow-card">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold text-foreground mb-2">Download PDF</h3>
                <p className="text-sm text-muted-foreground">
                  Your PDF is ready! Click Download to save it to your device.
                </p>
              </div>
            </div>
          </section>

          <JpgToPdfFAQSection />

          {/* Related Tools */}
          <section className="py-12 max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
              Related Tools
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/pdf-to-jpg"
                className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 hover:shadow-card-hover transition-all"
              >
                <ImageIcon className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium text-foreground">PDF to JPG</span>
              </Link>
              <Link
                to="/merge-pdf"
                className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 hover:shadow-card-hover transition-all"
              >
                <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium text-foreground">Merge PDF</span>
              </Link>
              <Link
                to="/split-pdf"
                className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 hover:shadow-card-hover transition-all"
              >
                <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium text-foreground">Split PDF</span>
              </Link>
              <Link
                to="/compress-pdf"
                className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 hover:shadow-card-hover transition-all"
              >
                <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium text-foreground">Compress PDF</span>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default JpgToPdf;
