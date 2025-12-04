import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Calendar, AlertTriangle, CheckCircle, XCircle, Scale, Globe, RefreshCw, Mail, MapPin, Users } from "lucide-react";

const TermsOfService = () => {
  const lastUpdated = "December 4, 2025";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service - PDF Tools Pro | Usage Terms</title>
        <meta name="description" content="Read the Terms of Service for PDF Tools Pro. Understand the rules and guidelines for using our free PDF and image processing tools." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pdftools.pro/terms" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Scale className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our services. By using PDF Tools Pro, you agree to these terms.
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

            {/* Acceptance */}
            <TermsSection
              icon={<CheckCircle className="w-5 h-5" />}
              title="Acceptance of Terms"
            >
              <p>
                By accessing or using PDF Tools Pro ("Service", "Website", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
              </p>
              <p>
                These Terms apply to all visitors, users, and others who access or use the Service. We reserve the right to update these Terms at any time, and your continued use of the Service constitutes acceptance of those changes.
              </p>
            </TermsSection>

            {/* Description */}
            <TermsSection
              icon={<FileText className="w-5 h-5" />}
              title="Description of Service"
            >
              <p>PDF Tools Pro provides free online tools for:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>PDF Merge - Combine multiple PDF files</li>
                <li>PDF Split - Separate PDF pages</li>
                <li>PDF Compressor - Reduce PDF file size</li>
                <li>PDF to Word - Convert PDF to editable Word documents</li>
                <li>Word to PDF - Convert Word documents to PDF</li>
                <li>PDF to JPG - Convert PDF pages to images</li>
                <li>JPG to PDF - Convert images to PDF</li>
                <li>Image Compressor - Reduce image file sizes</li>
                <li>Background Remover - Remove image backgrounds</li>
              </ul>
              <p className="mt-4">
                All tools are provided free of charge and do not require account registration.
              </p>
            </TermsSection>

            {/* Acceptable Use */}
            <TermsSection
              icon={<CheckCircle className="w-5 h-5" />}
              title="Acceptable Use"
            >
              <p>You agree to use our Service only for lawful purposes. You may use our tools to:</p>
              <div className="bg-success/5 border border-success/20 rounded-xl p-6 mt-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Process your own files and documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Process files you have permission to modify</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Use tools for personal, educational, or business purposes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Share our website with others</span>
                  </li>
                </ul>
              </div>
            </TermsSection>

            {/* Prohibited Use */}
            <TermsSection
              icon={<XCircle className="w-5 h-5" />}
              title="Prohibited Use"
            >
              <p>You agree NOT to use our Service to:</p>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 mt-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Process illegal, harmful, or offensive content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Upload files containing malware, viruses, or malicious code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Attempt to bypass security measures or exploit vulnerabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Use automated systems to overwhelm our servers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Infringe on intellectual property rights of others</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Resell or redistribute our services without permission</span>
                  </li>
                </ul>
              </div>
            </TermsSection>

            {/* Intellectual Property */}
            <TermsSection
              icon={<Globe className="w-5 h-5" />}
              title="Intellectual Property"
            >
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of PDF Tools Pro and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p>
                You retain all rights to the files you upload and process using our Service. We do not claim any ownership over your content.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </TermsSection>

            {/* User Content */}
            <TermsSection
              icon={<FileText className="w-5 h-5" />}
              title="User Content & Files"
            >
              <p>
                When you upload files to our Service, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>You own or have the necessary rights to the files</li>
                <li>The files do not violate any third-party rights</li>
                <li>The files comply with all applicable laws</li>
                <li>The files do not contain malicious content</li>
              </ul>
              <p className="mt-4">
                As stated in our Privacy Policy, uploaded files are processed automatically and deleted shortly after processing. We do not store, view, or share your files.
              </p>
            </TermsSection>

            {/* Disclaimer */}
            <TermsSection
              icon={<AlertTriangle className="w-5 h-5" />}
              title="Disclaimer of Warranties"
            >
              <div className="bg-secondary/50 rounded-xl p-6">
                <p className="font-semibold text-foreground mb-3">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE"</p>
                <p className="text-muted-foreground">
                  We make no warranties, expressed or implied, regarding the Service, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                  <li>Accuracy, reliability, or completeness of results</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement of third-party rights</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  We recommend keeping backup copies of important files before processing.
                </p>
              </div>
            </TermsSection>

            {/* Limitation of Liability */}
            <TermsSection
              icon={<Scale className="w-5 h-5" />}
              title="Limitation of Liability"
            >
              <p>
                To the maximum extent permitted by law, PDF Tools Pro and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>Loss of data or files</li>
                <li>Loss of profits or business opportunities</li>
                <li>Service interruptions or downtime</li>
                <li>Errors or inaccuracies in processed files</li>
                <li>Unauthorized access to your files (though we implement security measures)</li>
              </ul>
              <p className="mt-4">
                Since our Service is provided free of charge, our total liability for any claims shall not exceed the amount you paid for the Service (which is $0).
              </p>
            </TermsSection>

            {/* Indemnification */}
            <TermsSection
              icon={<Scale className="w-5 h-5" />}
              title="Indemnification"
            >
              <p>
                You agree to defend, indemnify, and hold harmless PDF Tools Pro, its operators, and affiliates from any claims, damages, losses, or expenses (including reasonable attorney's fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Content you upload or process through the Service</li>
              </ul>
            </TermsSection>

            {/* Termination */}
            <TermsSection
              icon={<XCircle className="w-5 h-5" />}
              title="Termination"
            >
              <p>
                We reserve the right to terminate or suspend access to our Service immediately, without prior notice, for any reason, including breach of these Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will cease immediately. Since no account is required, termination typically involves blocking access from specific IP addresses or implementing other technical measures.
              </p>
            </TermsSection>

            {/* Governing Law */}
            <TermsSection
              icon={<Globe className="w-5 h-5" />}
              title="Governing Law"
            >
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of the Service shall be resolved in the courts of Noida, Uttar Pradesh, India.
              </p>
            </TermsSection>

            {/* Changes */}
            <TermsSection
              icon={<RefreshCw className="w-5 h-5" />}
              title="Changes to Terms"
            >
              <p>
                We reserve the right to modify or replace these Terms at any time. We will provide notice of significant changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>Updating the "Last Updated" date at the top of this page</li>
                <li>Posting a notice on our homepage for material changes</li>
              </ul>
              <p className="mt-4">
                Your continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </TermsSection>

            {/* Contact */}
            <TermsSection
              icon={<Mail className="w-5 h-5" />}
              title="Contact Information"
            >
              <p>
                If you have questions about these Terms, please contact us:
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
            </TermsSection>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface TermsSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const TermsSection = ({ icon, title, children }: TermsSectionProps) => (
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

export default TermsOfService;
