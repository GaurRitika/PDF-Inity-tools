import { FileText, ArrowRight } from "lucide-react";

const WordToPdfHeroSection = () => {
  return (
    <section className="text-center py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
          <FileText className="w-4 h-4" />
          <span className="text-sm font-medium">Free Word to PDF Converter</span>
          <ArrowRight className="w-4 h-4" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
          Word to PDF Converter
          <span className="block text-primary">Free & High Quality</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Convert DOC or DOCX files to professional-grade PDFs instantly. 
          100% free, fast & secure.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>No signup required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Preserves formatting</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Works on all devices</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordToPdfHeroSection;
