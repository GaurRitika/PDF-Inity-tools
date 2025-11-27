import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FileText, Download, Trash2, FileUp, Scissors, FileDown, ChevronRight, Home } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WordToPdfHeroSection from "@/components/WordToPdfHeroSection";
import WordToPdfFileUpload from "@/components/WordToPdfFileUpload";
import WordToPdfFAQSection from "@/components/WordToPdfFAQSection";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { convertWordToPdf, downloadPdfFile, formatFileSize, ConversionResult } from "@/utils/wordToPdf";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface FileItem {
  file: File;
  status: 'pending' | 'converting' | 'completed' | 'error';
  progress: number;
  result?: ConversionResult;
  error?: string;
}

const WordToPdf = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const { toast } = useToast();

  const handleFileSelected = (selectedFiles: File[]) => {
    const newFiles: FileItem[] = selectedFiles.map(file => ({
      file,
      status: 'pending',
      progress: 0
    }));
    setFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleConvert = async () => {
    if (files.length === 0) return;
    
    setIsConverting(true);
    
    for (let i = 0; i < files.length; i++) {
      if (files[i].status === 'completed') continue;
      
      setFiles(prev => prev.map((f, idx) => 
        idx === i ? { ...f, status: 'converting', progress: 0 } : f
      ));
      
      try {
        const result = await convertWordToPdf(
          files[i].file,
          (progress) => {
            setFiles(prev => prev.map((f, idx) => 
              idx === i ? { ...f, progress } : f
            ));
          }
        );
        
        setFiles(prev => prev.map((f, idx) => 
          idx === i ? { ...f, status: 'completed', progress: 100, result } : f
        ));
      } catch (error) {
        setFiles(prev => prev.map((f, idx) => 
          idx === i ? { ...f, status: 'error', error: 'Conversion failed' } : f
        ));
        
        toast({
          title: "Conversion failed",
          description: `Failed to convert ${files[i].file.name}`,
          variant: "destructive"
        });
      }
    }
    
    setIsConverting(false);
    
    const successCount = files.filter(f => f.status === 'completed' || f.result).length;
    if (successCount > 0) {
      toast({
        title: "Conversion complete!",
        description: `Successfully converted ${successCount} file(s) to PDF.`
      });
    }
  };

  const handleDownload = (fileItem: FileItem) => {
    if (fileItem.result) {
      downloadPdfFile(fileItem.result.blob, fileItem.result.filename);
    }
  };

  const clearAll = () => {
    setFiles([]);
  };

  const pendingFiles = files.filter(f => f.status === 'pending');
  const hasCompletedFiles = files.some(f => f.status === 'completed');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Word to PDF conversion free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Word to PDF converter is completely free to use. There are no hidden charges, no subscription required, and no limits on how many files you can convert."
        }
      },
      {
        "@type": "Question",
        "name": "Will formatting stay the same after conversion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our converter preserves the original formatting of your Word document as much as possible, including fonts, images, tables, and layouts."
        }
      },
      {
        "@type": "Question",
        "name": "Is my file secure during conversion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Your files are processed entirely in your browser using client-side technology. Your documents never leave your device."
        }
      },
      {
        "@type": "Question",
        "name": "Can I convert both DOC and DOCX files?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our converter supports both DOC (older Word format) and DOCX (modern Word format) files."
        }
      }
    ]
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Word to PDF Converter",
    "description": "Convert Word (DOC/DOCX) to PDF online for free. Fast, accurate & secure.",
    "url": "https://pdftools.com/word-to-pdf",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Convert DOC to PDF",
      "Convert DOCX to PDF",
      "Preserve formatting",
      "Batch conversion",
      "No file size limit",
      "No signup required"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Word to PDF Converter — Free DOCX to PDF Tool (Fast & Secure)</title>
        <meta 
          name="description" 
          content="Convert Word (DOC/DOCX) to PDF online for free. Fast, accurate & secure Word to PDF converter — no signup needed. Works on mobile and desktop." 
        />
        <meta name="keywords" content="word to pdf, docx to pdf, convert word to pdf, free word to pdf converter, online word to pdf, doc to pdf, word document to pdf" />
        <link rel="canonical" href="https://pdftools.com/word-to-pdf" />
        <meta property="og:title" content="Word to PDF Converter — Free DOCX to PDF Tool" />
        <meta property="og:description" content="Convert Word documents to PDF online for free. Fast, accurate & secure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pdftools.com/word-to-pdf" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(toolSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1">
                      <Home className="w-4 h-4" />
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="w-4 h-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Word to PDF</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <WordToPdfHeroSection />

          <section className="py-8">
            <WordToPdfFileUpload 
              onFileSelected={handleFileSelected}
              disabled={isConverting}
            />

            {files.length > 0 && (
              <div className="max-w-2xl mx-auto mt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">
                    Files ({files.length})
                  </h3>
                  <Button variant="ghost" size="sm" onClick={clearAll}>
                    Clear all
                  </Button>
                </div>

                <div className="space-y-3">
                  {files.map((fileItem, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl border border-border bg-card"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-blue-500" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground truncate">
                            {fileItem.file.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {formatFileSize(fileItem.file.size)}
                            {fileItem.status === 'completed' && (
                              <span className="text-green-500 ml-2">✓ Converted</span>
                            )}
                            {fileItem.status === 'error' && (
                              <span className="text-destructive ml-2">✗ Failed</span>
                            )}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          {fileItem.status === 'completed' && fileItem.result && (
                            <Button 
                              size="sm" 
                              onClick={() => handleDownload(fileItem)}
                              className="gap-2"
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </Button>
                          )}
                          
                          {fileItem.status !== 'converting' && (
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => removeFile(index)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>

                      {fileItem.status === 'converting' && (
                        <div className="mt-4">
                          <Progress value={fileItem.progress} className="h-2" />
                          <p className="text-sm text-muted-foreground mt-2">
                            Converting... {fileItem.progress}%
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {pendingFiles.length > 0 && (
                  <Button 
                    onClick={handleConvert}
                    disabled={isConverting}
                    className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                  >
                    {isConverting ? 'Converting...' : `Convert ${pendingFiles.length} File(s) to PDF`}
                  </Button>
                )}

                {hasCompletedFiles && !pendingFiles.length && (
                  <div className="text-center p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      All files converted successfully! Click download buttons above.
                    </p>
                  </div>
                )}
              </div>
            )}
          </section>

          {/* How It Works Section */}
          <section className="py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4">
              Steps to Convert Word to PDF
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Convert your Word documents in three easy steps
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Upload Word File",
                  description: "Drag and drop your DOC or DOCX file into the upload area"
                },
                {
                  step: "2",
                  title: "Click Convert",
                  description: "Press the convert button and wait for processing"
                },
                {
                  step: "3",
                  title: "Download PDF",
                  description: "Download your converted PDF file instantly"
                }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Use Our Tool Section */}
          <section className="py-12 md:py-16 bg-accent/30 rounded-3xl px-8 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
              Why Use Our Word to PDF Tool?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "100% Free", desc: "No hidden costs or subscriptions" },
                { title: "Preserves Formatting", desc: "Keeps fonts, images & layouts intact" },
                { title: "Secure & Private", desc: "Files never leave your device" },
                { title: "No Signup Required", desc: "Start converting immediately" },
                { title: "Works Everywhere", desc: "Desktop, tablet & mobile compatible" },
                { title: "Fast Conversion", desc: "Convert in seconds, not minutes" }
              ].map((feature, index) => (
                <div key={index} className="p-6 rounded-xl bg-background border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <WordToPdfFAQSection />

          {/* Related Tools Section */}
          <section className="py-12 md:py-16">
            <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
              Related Tools
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <Link 
                to="/pdf-to-word"
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">PDF to Word</h3>
                <p className="text-sm text-muted-foreground">Convert PDF to DOCX</p>
              </Link>
              
              <Link 
                to="/merge-pdf"
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileUp className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Merge PDF</h3>
                <p className="text-sm text-muted-foreground">Combine multiple PDFs</p>
              </Link>
              
              <Link 
                to="/split-pdf"
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Scissors className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Split PDF</h3>
                <p className="text-sm text-muted-foreground">Extract PDF pages</p>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WordToPdf;
