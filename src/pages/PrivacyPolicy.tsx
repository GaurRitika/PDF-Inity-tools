import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Mail, MapPin, Calendar, FileText, Cookie, Lock, Users, RefreshCw, Eye, Trash2, Server } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "December 4, 2025";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy - PDF Tools Pro | Your Privacy Matters</title>
        <meta name="description" content="Read our Privacy Policy to understand how PDF Tools Pro handles your data. We prioritize your privacy with automatic file deletion and no data storage." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pdftools.pro/privacy-policy" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we handle your information when you use our free PDF and image tools.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">

            {/* Introduction */}
            <PolicySection
              icon={<FileText className="w-5 h-5" />}
              title="Introduction"
            >
              <p>
                Welcome to PDF Tools Pro! We provide free online tools for PDF manipulation and image processing, including PDF Merge, PDF Split, PDF Compressor, PDF to Word, Word to PDF, PDF to JPG, JPG to PDF, Image Compressor, and Background Remover.
              </p>
              <p>
                We are committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data. By using our services, you agree to the terms outlined in this policy.
              </p>
              <p>
                <strong>No account or signup is required</strong> to use any of our tools. We believe in providing accessible, hassle-free services to everyone.
              </p>
            </PolicySection>

            {/* Information We Collect */}
            <PolicySection
              icon={<Eye className="w-5 h-5" />}
              title="Information We Collect"
            >
              <h4 className="font-semibold text-foreground mb-3">Automatically Collected Information</h4>
              <p>When you visit our website, we may automatically collect certain technical information, including:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Browser type and version</li>
                <li>Device type (desktop, mobile, tablet)</li>
                <li>Operating system</li>
                <li>IP address (anonymized where possible)</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referral source (how you found our website)</li>
              </ul>

              <h4 className="font-semibold text-foreground mb-3 mt-6">Uploaded Files</h4>
              <p>
                When you use our tools, you may upload PDF files, images, or documents. These files are processed entirely in your browser or temporarily on our secure servers. <strong>We do not permanently store, view, share, or sell your uploaded files.</strong>
              </p>

              <h4 className="font-semibold text-foreground mb-3 mt-6">No Personal Information Required</h4>
              <p>
                We do not require you to create an account, provide your name, email address, or any other personal information to use our services.
              </p>
            </PolicySection>

            {/* How We Use Information */}
            <PolicySection
              icon={<Server className="w-5 h-5" />}
              title="How We Use Information"
            >
              <p>The limited information we collect is used solely for:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Providing and improving our PDF and image processing services</li>
                <li>Analyzing website usage to enhance user experience</li>
                <li>Ensuring website security and preventing abuse</li>
                <li>Displaying relevant advertisements through Google AdSense</li>
                <li>Complying with legal obligations</li>
              </ul>
              <p className="mt-4">
                We do <strong>not</strong> sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </PolicySection>

            {/* How Uploaded Files Are Handled */}
            <PolicySection
              icon={<Trash2 className="w-5 h-5" />}
              title="How Uploaded Files Are Handled"
            >
              <p>Your file security is our top priority. Here's how we handle your uploads:</p>
              <div className="bg-secondary/50 rounded-xl p-6 mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lock className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">Automatic Deletion</h5>
                    <p className="text-sm text-muted-foreground">All uploaded files are automatically deleted from our servers within minutes of processing. We do not retain your files.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">No Human Access</h5>
                    <p className="text-sm text-muted-foreground">Your files are processed automatically. No human ever views, reads, or accesses your uploaded content.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">No Sharing</h5>
                    <p className="text-sm text-muted-foreground">We never share, sell, or transfer your files to any third party under any circumstances.</p>
                  </div>
                </div>
              </div>
            </PolicySection>

            {/* Cookies & Analytics */}
            <PolicySection
              icon={<Cookie className="w-5 h-5" />}
              title="Cookies & Analytics Usage"
            >
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how visitors use our website</li>
                <li>Improve our services based on usage patterns</li>
                <li>Serve relevant advertisements</li>
              </ul>
              <p className="mt-4">
                <strong>Types of cookies we use:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-2">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand website usage (e.g., Google Analytics)</li>
                <li><strong>Advertising Cookies:</strong> Used to display relevant ads (e.g., Google AdSense)</li>
              </ul>
              <p className="mt-4">
                You can control cookie preferences through your browser settings. However, disabling certain cookies may affect website functionality.
              </p>
            </PolicySection>

            {/* Third-Party Tools / AdSense */}
            <PolicySection
              icon={<Users className="w-5 h-5" />}
              title="Third-Party Services & Google AdSense"
            >
              <p>We use third-party services to enhance our website and display advertisements:</p>
              
              <h4 className="font-semibold text-foreground mb-3 mt-6">Google AdSense</h4>
              <p>
                We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and web beacons to collect information about your visits to this and other websites to provide targeted advertisements.
              </p>
              <p className="mt-3">
                Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting{" "}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google Ads Settings
                </a>.
              </p>

              <h4 className="font-semibold text-foreground mb-3 mt-6">Google Analytics</h4>
              <p>
                We use Google Analytics to analyze website traffic and usage patterns. This helps us understand how visitors interact with our website and improve our services. Google Analytics collects information anonymously and reports website trends without identifying individual visitors.
              </p>

              <p className="mt-6 text-sm text-muted-foreground">
                For more information about how Google uses data, please visit{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google's Privacy Policy
                </a>.
              </p>
            </PolicySection>

            {/* Data Security */}
            <PolicySection
              icon={<Lock className="w-5 h-5" />}
              title="Data Security Measures"
            >
              <p>We implement industry-standard security measures to protect your data:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li><strong>SSL/TLS Encryption:</strong> All data transmitted between your browser and our servers is encrypted</li>
                <li><strong>Secure File Processing:</strong> Files are processed in isolated, secure environments</li>
                <li><strong>Automatic Deletion:</strong> Uploaded files are automatically deleted after processing</li>
                <li><strong>No Long-term Storage:</strong> We do not maintain databases of user files</li>
                <li><strong>Regular Security Audits:</strong> We regularly review and update our security practices</li>
              </ul>
              <p className="mt-4">
                While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but are committed to protecting your data to the best of our ability.
              </p>
            </PolicySection>

            {/* Children's Privacy */}
            <PolicySection
              icon={<Users className="w-5 h-5" />}
              title="Children's Privacy"
            >
              <p>
                Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.
              </p>
              <p className="mt-3">
                If you are between 13 and 18 years of age, please use our services only with the involvement and consent of a parent or guardian.
              </p>
            </PolicySection>

            {/* User Rights */}
            <PolicySection
              icon={<Shield className="w-5 h-5" />}
              title="User Rights & Controls"
            >
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li><strong>Right to Access:</strong> Request information about data we hold about you</li>
                <li><strong>Right to Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Object:</strong> Object to certain types of data processing</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
              </ul>
              <p className="mt-4">
                Since we do not require account creation and do not store personal files, there is typically minimal personal data associated with your use of our services. To exercise any of these rights, please contact us using the information provided below.
              </p>
            </PolicySection>

            {/* Changes to Policy */}
            <PolicySection
              icon={<RefreshCw className="w-5 h-5" />}
              title="Changes to This Policy"
            >
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>Update the "Last Updated" date at the top of this page</li>
                <li>Post the revised policy on this page</li>
                <li>For significant changes, we may provide additional notice on our homepage</li>
              </ul>
              <p className="mt-4">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </PolicySection>

            {/* Contact Information */}
            <PolicySection
              icon={<Mail className="w-5 h-5" />}
              title="Contact Information"
            >
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please don't hesitate to contact us:
              </p>
              <div className="bg-secondary/50 rounded-xl p-6 mt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-semibold text-foreground">Ritika Gaur</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:devritika.gaur@gmail.com" className="font-semibold text-primary hover:underline">
                        devritika.gaur@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold text-foreground">Noida, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                We aim to respond to all inquiries within 48 hours during business days.
              </p>
            </PolicySection>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Reusable Policy Section Component
interface PolicySectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const PolicySection = ({ icon, title, children }: PolicySectionProps) => (
  <div className="relative">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
        {title}
      </h2>
    </div>
    <div className="prose prose-sm max-w-none text-muted-foreground space-y-4 pl-0 sm:pl-[52px]">
      {children}
    </div>
    <div className="mt-8 border-b border-border/30" />
  </div>
);

export default PrivacyPolicy;
