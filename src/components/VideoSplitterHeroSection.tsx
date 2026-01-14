import { Scissors } from "lucide-react";
import { Helmet } from "react-helmet";

const VideoSplitterHeroSection = () => {
  return (
    <>
      <Helmet>
        <title>Split Video Online Free – Cut Videos Into Parts | PDFinity</title>
        <meta 
          name="description" 
          content="Split videos online for free. Cut MP4, MOV, AVI videos by time or parts. No signup, no watermark, fast & secure video splitter." 
        />
        <meta 
          name="keywords" 
          content="video splitter online, split video free, cut video online, split mp4, video cutter without watermark, online video trimmer" 
        />
        <link rel="canonical" href="https://pdf-inity.vercel.app/video-splitter" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Split Videos Online – Free & Fast" />
        <meta 
          property="og:description" 
          content="Cut videos by time or parts instantly. No signup, no watermark, privacy-first." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pdf-inity.vercel.app/video-splitter" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Split Videos Online – Free & Fast" />
        <meta 
          name="twitter:description" 
          content="Cut videos by time or parts instantly. No signup, no watermark, privacy-first." 
        />
      </Helmet>

      <section className="relative py-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-background to-purple-500/10" />
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/25 mb-6">
              <Scissors className="w-10 h-10 text-white" />
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
                Split Videos
              </span>{" "}
              Online Free
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-muted-foreground mb-6">
              Cut your videos into multiple parts by time, duration, or equal segments. 
              100% browser-based processing — your files never leave your device.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">100% Browser Processing</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">No File Uploads</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">Free Forever</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">No Watermark</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSplitterHeroSection;
