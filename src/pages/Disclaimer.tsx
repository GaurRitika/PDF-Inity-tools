import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AlertTriangle, Calendar, FileText, Shield, Scale, Info, Mail, MapPin, Users } from "lucide-react";

const Disclaimer = () => {
  const lastUpdated = "December 4, 2025";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Disclaimer - PDF Tools Pro | Legal Information</title>
        <meta name="description" content="Read our disclaimer to understand the limitations and responsibilities when using PDF Tools Pro's free online tools." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pdftools.pro/disclaimer" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <AlertTriangle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Disclaimer
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Important information about using PDF Tools Pro and the limitations of our services.
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

            {/* General Disclaimer */}
            <DisclaimerSection
              icon={<Info className="w-5 h-5" />}
              title="General Disclaimer"
            >
              <p>
                The information and services provided by PDF Tools Pro ("we", "us", or "our") on this website are for general informational and utility purposes only. All information and tools on the site are provided in good faith.
              </p>
              <p>
                We make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information or tools on the site.
              </p>
              <div className="bg-secondary/50 rounded-xl p-6 mt-4">
                <p className="font-semibold text-foreground">
                  Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site.
                </p>
              </div>
            </DisclaimerSection>

            {/* Service Disclaimer */}
            <DisclaimerSection
              icon={<FileText className="w-5 h-5" />}
              title="Service Disclaimer"
            >
              <p>
                Our PDF and image processing tools are provided "as is" and "as available" without warranties of any kind. While we strive to provide reliable and accurate services, we cannot guarantee:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>100% accuracy in file conversions or processing</li>
                <li>Perfect preservation of formatting in document conversions</li>
                <li>Uninterrupted availability of our services</li>
                <li>Compatibility with all file types or versions</li>
                <li>Specific processing times or speeds</li>
              </ul>
              <p className="mt-4">
                <strong className="text-foreground">Recommendation:</strong> Always keep backup copies of your original files before processing. We are not responsible for any data loss or corruption that may occur during file processing.
              </p>
            </DisclaimerSection>

            {/* No Professional Advice */}
            <DisclaimerSection
              icon={<Scale className="w-5 h-5" />}
              title="Not Professional Advice"
            >
              <p>
                The site and its tools cannot and do not contain professional advice. The tools are provided for utility purposes only and should not be relied upon for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>Legal document preparation or validation</li>
                <li>Official document certification</li>
                <li>Compliance with specific industry standards</li>
                <li>Medical, legal, or financial documentation</li>
              </ul>
              <p className="mt-4">
                For specific professional needs, please consult with appropriate licensed professionals or use officially certified tools designed for such purposes.
              </p>
            </DisclaimerSection>

            {/* File Responsibility */}
            <DisclaimerSection
              icon={<Shield className="w-5 h-5" />}
              title="User Responsibility for Files"
            >
              <p>
                By using our services, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>You are responsible for the content of files you upload</li>
                <li>You have the legal right to process the files you upload</li>
                <li>You will not upload files containing illegal, harmful, or malicious content</li>
                <li>You will not upload files that infringe on others' intellectual property rights</li>
                <li>You are responsible for maintaining backups of your original files</li>
              </ul>
              <p className="mt-4">
                We are not responsible for the content of files uploaded by users or any consequences arising from the processing of such files.
              </p>
            </DisclaimerSection>

            {/* External Links */}
            <DisclaimerSection
              icon={<Info className="w-5 h-5" />}
              title="External Links Disclaimer"
            >
              <p>
                The site may contain links to external websites or content belonging to third parties. We do not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>Investigate, monitor, or verify the accuracy of external content</li>
                <li>Warrant the accuracy of external websites</li>
                <li>Endorse the views expressed on external sites</li>
                <li>Take responsibility for external content or services</li>
              </ul>
              <p className="mt-4">
                We are not responsible for the privacy practices, terms of service, or content of any third-party websites linked from our site.
              </p>
            </DisclaimerSection>

            {/* Advertisements */}
            <DisclaimerSection
              icon={<Info className="w-5 h-5" />}
              title="Advertisements Disclaimer"
            >
              <p>
                Our website displays third-party advertisements through Google AdSense. Please note:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>We do not control the content of advertisements displayed</li>
                <li>Appearance of an ad does not constitute endorsement of the product or service</li>
                <li>We are not responsible for the accuracy of advertising claims</li>
                <li>Ad content is determined by third-party advertising networks</li>
              </ul>
              <p className="mt-4">
                If you click on an advertisement and make a purchase or take any action, you do so at your own risk. We recommend reviewing the advertiser's terms and privacy policy before engaging.
              </p>
            </DisclaimerSection>

            {/* Technical Limitations */}
            <DisclaimerSection
              icon={<AlertTriangle className="w-5 h-5" />}
              title="Technical Limitations"
            >
              <p>
                Our tools have certain technical limitations that users should be aware of:
              </p>
              <div className="bg-secondary/50 rounded-xl p-6 mt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">File Size Limits</h4>
                  <p className="text-sm text-muted-foreground">
                    Very large files may take longer to process or may not be supported. Browser limitations may affect performance with extremely large files.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Format Support</h4>
                  <p className="text-sm text-muted-foreground">
                    While we support common formats, some proprietary or unusual file formats may not be fully compatible with our tools.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Conversion Accuracy</h4>
                  <p className="text-sm text-muted-foreground">
                    Complex formatting, fonts, or layouts may not be perfectly preserved during conversions. Results may vary depending on the source file.
                  </p>
                </div>
              </div>
            </DisclaimerSection>

            {/* Errors and Omissions */}
            <DisclaimerSection
              icon={<Info className="w-5 h-5" />}
              title="Errors and Omissions"
            >
              <p>
                While we have made every effort to ensure that the information and tools on this site are accurate and functional, errors may occur. We:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>Are not responsible for any errors or omissions in the content or services</li>
                <li>Are not liable for any damages arising from the use of information or services</li>
                <li>Reserve the right to make changes and corrections at any time without notice</li>
              </ul>
            </DisclaimerSection>

            {/* Fair Use */}
            <DisclaimerSection
              icon={<Scale className="w-5 h-5" />}
              title="Fair Use"
            >
              <p>
                This site may contain copyrighted material whose use has not always been specifically authorized by the copyright owner. We believe this constitutes a "fair use" of any such material as provided for in copyright law.
              </p>
              <p>
                If you wish to use copyrighted material from this site for purposes of your own that go beyond "fair use," you must obtain permission from the copyright owner.
              </p>
            </DisclaimerSection>

            {/* Contact */}
            <DisclaimerSection
              icon={<Mail className="w-5 h-5" />}
              title="Contact Information"
            >
              <p>
                If you have any questions about this Disclaimer, please contact us:
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
            </DisclaimerSection>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface DisclaimerSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const DisclaimerSection = ({ icon, title, children }: DisclaimerSectionProps) => (
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

export default Disclaimer;
