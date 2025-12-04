import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, MapPin, Clock, MessageSquare, HelpCircle, Bug, Lightbulb, Send, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactReasons = [
    {
      icon: <HelpCircle className="w-5 h-5" />,
      title: "General Inquiries",
      description: "Questions about our tools, services, or how things work"
    },
    {
      icon: <Bug className="w-5 h-5" />,
      title: "Report an Issue",
      description: "Let us know if you encounter any bugs or problems"
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Feature Requests",
      description: "Suggest new tools or improvements to existing ones"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Feedback",
      description: "Share your experience using our tools"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us - PDF Tools Pro | Get in Touch</title>
        <meta name="description" content="Contact PDF Tools Pro for questions, feedback, or support. We're here to help with all your PDF and image processing needs." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pdftools.pro/contact" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question, suggestion, or need help? We'd love to hear from you. Reach out and we'll respond as soon as we can.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Name</h3>
                    <p className="text-muted-foreground">Ritika Gaur</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a 
                      href="mailto:devritika.gaur@gmail.com" 
                      className="text-primary hover:underline"
                    >
                      devritika.gaur@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Best for detailed inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Noida, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Response Time</h3>
                    <p className="text-muted-foreground">
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Button */}
              <div className="mt-8">
                <a href="mailto:devritika.gaur@gmail.com">
                  <Button className="w-full sm:w-auto gap-2">
                    <Send className="w-4 h-4" />
                    Send us an Email
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Reasons */}
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6">
                How Can We Help?
              </h2>
              <div className="space-y-4">
                {contactReasons.map((reason, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
            Before You Reach Out
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check if your question is already answered in our tool-specific FAQ sections. Each tool page has detailed answers to common questions.
          </p>
          <div className="bg-background rounded-2xl p-6 border border-border/50 max-w-xl mx-auto">
            <h3 className="font-semibold text-foreground mb-4">Common Questions</h3>
            <ul className="text-left space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong className="text-foreground">Is it really free?</strong> Yes, all our tools are 100% free with no hidden costs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong className="text-foreground">Are my files secure?</strong> Yes, files are processed and automatically deleted. We never store or view your content.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong className="text-foreground">Do I need an account?</strong> No, all tools work without any signup or login.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong className="text-foreground">Is there a file size limit?</strong> Our tools handle files of most reasonable sizes. Very large files may take longer to process.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
              Our Commitment to You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to providing the best free PDF and image tools. Your feedback helps us improve. Whether it's a bug report, feature suggestion, or just a kind word — we appreciate hearing from you.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
