import { Helmet } from "react-helmet";
import { Video, Shield, Zap, Gift, ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this video compressor really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our video compressor is completely free. Compress unlimited videos with no hidden costs, watermarks, or file limits."
      }
    },
    {
      "@type": "Question",
      "name": "Is my video data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. All video compression happens directly in your browser. Your videos are never uploaded to any server, ensuring complete privacy and security."
      }
    },
    {
      "@type": "Question",
      "name": "What video formats are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We support MP4, MOV, AVI, MKV, and WebM formats. The compressed output is always in MP4 format for maximum compatibility."
      }
    },
    {
      "@type": "Question",
      "name": "What's the maximum file size I can compress?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can compress videos up to 500MB. Larger files may take longer to process depending on your device's capabilities."
      }
    }
  ]
};

const VideoCompressorHeroSection = () => {
  return (
    <>
      <Helmet>
        <title>Free Video Compressor Online - Reduce Video Size | PDFinity</title>
        <meta name="description" content="Compress videos online for free. Reduce MP4, MOV, AVI, MKV file sizes by up to 70% while maintaining quality. Fast, secure, browser-based compression." />
        <meta name="keywords" content="video compressor, compress video, reduce video size, mp4 compressor, video compression online, free video compressor" />
        <link rel="canonical" href="https://pdfinity.com/compress-video" />
        <meta property="og:title" content="Free Video Compressor - Reduce Video Size Online | PDFinity" />
        <meta property="og:description" content="Compress videos for free directly in your browser. Reduce file sizes up to 70% with no quality loss." />
        <meta property="og:url" content="https://pdfinity.com/compress-video" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Video Compressor Online | PDFinity" />
        <meta name="twitter:description" content="Compress MP4, MOV, AVI videos for free. Fast, secure, and private browser-based compression." />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Video Compressor</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6">
              <Video className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Free Video Compression Tool</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Compress Videos</span>
              <br />
              <span className="text-foreground">Without Quality Loss</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Reduce video file sizes by up to 70% while maintaining excellent quality. 
              100% free, secure, and processed entirely in your browser.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-500" />
                </div>
                <span>100% Private</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-blue-500" />
                </div>
                <span>Fast Processing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Gift className="w-4 h-4 text-purple-500" />
                </div>
                <span>Always Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoCompressorHeroSection;
