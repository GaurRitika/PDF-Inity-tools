import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Zap, Shield, Globe, CheckCircle, Sparkles, FileText, Image } from "lucide-react";

const AboutUs = () => {
  const tools = [
    { name: "PDF Merge", description: "Combine multiple PDFs into one" },
    { name: "PDF Split", description: "Separate PDF pages" },
    { name: "PDF Compressor", description: "Reduce PDF file size" },
    { name: "PDF to Word", description: "Convert PDF to editable docs" },
    { name: "Word to PDF", description: "Convert Word to PDF" },
    { name: "PDF to JPG", description: "Convert PDF to images" },
    { name: "JPG to PDF", description: "Convert images to PDF" },
    { name: "Image Compressor", description: "Reduce image file sizes" },
    { name: "Background Remover", description: "Remove image backgrounds" },
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed & Efficiency",
      description: "Our tools process files quickly using modern browser technologies, saving you time and effort."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "Your files are processed securely and deleted automatically. We never store or view your content."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Free for Everyone",
      description: "We believe essential tools should be accessible to all. No hidden fees, no premium tiers."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "No Barriers",
      description: "No account required, no email signup, no downloads. Just visit and use our tools instantly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us - PDF Tools Pro | Free PDF & Image Tools</title>
        <meta name="description" content="Learn about PDF Tools Pro - we provide free, secure, and easy-to-use PDF and image processing tools for everyone. No signup required." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pdftools.pro/about" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About PDF Tools Pro
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to make PDF and image processing accessible, fast, and secure for everyone — completely free.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Our Mission
            </h2>
          </div>
          <div className="pl-0 sm:pl-[52px] space-y-4 text-muted-foreground">
            <p>
              PDF Tools Pro was created with a simple vision: <strong className="text-foreground">everyone deserves access to powerful document tools without paying expensive subscription fees or compromising their privacy.</strong>
            </p>
            <p>
              We noticed that many PDF tools online either require expensive subscriptions, force you to create accounts, or worse — keep your files on their servers indefinitely. We decided to build something different.
            </p>
            <p>
              Our tools are designed to be:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span><strong className="text-foreground">100% Free</strong> — No hidden costs, no premium features locked behind paywalls</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Privacy-Focused</strong> — Files are processed and immediately deleted</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span><strong className="text-foreground">No Account Required</strong> — Start using tools instantly without signup</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Fast & Reliable</strong> — Modern technology for quick processing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at PDF Tools Pro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Our Tools
            </h2>
          </div>
          <p className="pl-0 sm:pl-[52px] text-muted-foreground mb-8">
            We offer a comprehensive suite of PDF and image processing tools:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-0 sm:pl-[52px]">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/30"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {index < 7 ? (
                    <FileText className="w-4 h-4 text-primary" />
                  ) : (
                    <Image className="w-4 h-4 text-primary" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{tool.name}</h4>
                  <p className="text-xs text-muted-foreground">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Using our tools is simple and straightforward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <span className="font-display text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Select a Tool</h3>
              <p className="text-sm text-muted-foreground">
                Choose the tool you need from our homepage or navigation menu.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <span className="font-display text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Upload Your File</h3>
              <p className="text-sm text-muted-foreground">
                Drag and drop or click to upload your PDF or image files.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <span className="font-display text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Download Result</h3>
              <p className="text-sm text-muted-foreground">
                Process your file and download the result instantly. Done!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Heart className="w-5 h-5" />
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Built with Love
            </h2>
          </div>
          <div className="pl-0 sm:pl-[52px] space-y-4 text-muted-foreground">
            <p>
              PDF Tools Pro is a passion project created to help people work with documents more efficiently. We're based in <strong className="text-foreground">Noida, India</strong>, and we're committed to keeping our tools free and accessible.
            </p>
            <p>
              We're constantly working to improve our existing tools and add new features. If you have suggestions or feedback, we'd love to hear from you!
            </p>
            <div className="mt-6 p-6 bg-secondary/50 rounded-xl border border-border/30">
              <p className="text-sm">
                <strong className="text-foreground">Questions or feedback?</strong><br />
                Reach out to us at{" "}
                <a href="mailto:devritika.gaur@gmail.com" className="text-primary hover:underline">
                  devritika.gaur@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
