import Navigation from "@/components/Navigation";
import VideoCompressorHeroSection from "@/components/VideoCompressorHeroSection";
import VideoCompressorFileUpload from "@/components/VideoCompressorFileUpload";
import VideoCompressorFAQSection from "@/components/VideoCompressorFAQSection";
import Footer from "@/components/Footer";

const VideoCompressor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <VideoCompressorHeroSection />
      <VideoCompressorFileUpload />
      
      {/* Features Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              <span className="gradient-text">Why Choose</span>{" "}
              <span className="text-foreground">Our Video Compressor?</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">100% Private</h3>
                <p className="text-sm text-muted-foreground">
                  Videos never leave your device. All processing happens in your browser.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Fast Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Powered by FFmpeg WASM for near-native compression speed.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎬</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Quality Preserved</h3>
                <p className="text-sm text-muted-foreground">
                  Smart compression algorithms maintain visual quality while reducing size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Free Online Video Compressor - Reduce Video File Size
            </h2>
            <p className="text-muted-foreground mb-4">
              PDFinity's Video Compressor is a powerful, free tool that allows you to reduce video file sizes 
              directly in your browser. Whether you need to compress videos for email attachments, social media 
              uploads, or to save storage space, our tool makes it quick and easy.
            </p>
            
            <h3 className="text-xl font-display font-bold text-foreground mb-3">
              How It Works
            </h3>
            <p className="text-muted-foreground mb-4">
              Our video compressor uses FFmpeg, the industry-standard video processing library, compiled to 
              WebAssembly for browser-based execution. This means your videos are processed entirely on your 
              device - they're never uploaded to any server, ensuring complete privacy and security.
            </p>
            
            <h3 className="text-xl font-display font-bold text-foreground mb-3">
              Supported Formats
            </h3>
            <p className="text-muted-foreground mb-4">
              Upload videos in MP4, MOV, AVI, MKV, or WebM formats. The compressed output is always in MP4 
              format for maximum compatibility across all devices and platforms including iOS, Android, 
              Windows, and Mac.
            </p>
            
            <h3 className="text-xl font-display font-bold text-foreground mb-3">
              Compression Options
            </h3>
            <ul className="text-muted-foreground mb-4 list-disc list-inside">
              <li><strong>High Compression:</strong> Reduces file size by up to 70% - ideal for sharing online</li>
              <li><strong>Balanced:</strong> ~50% reduction with excellent quality - recommended for most uses</li>
              <li><strong>Low Compression:</strong> ~30% reduction with best quality - for professional content</li>
            </ul>
          </div>
        </div>
      </section>

      <VideoCompressorFAQSection />
      <Footer />
    </div>
  );
};

export default VideoCompressor;
