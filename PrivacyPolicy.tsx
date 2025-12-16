import { useEffect } from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    // SEO optimization
    document.title = 'Privacy Policy - Mindful Rejuvenation | Mental Health Services Kochi';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy Policy for Mindful Rejuvenation mental health services. Learn how we protect your personal information and maintain confidentiality.');
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - Mindful Rejuvenation",
      "description": "Privacy Policy for Mindful Rejuvenation mental health services",
      "url": "https://mindfulrejuvenation.in/privacy-policy",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Mindful Rejuvenation",
        "url": "https://mindfulrejuvenation.in"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-cream-50 pt-[72px]">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Shield className="w-16 h-16 text-forest-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-forest-700 max-w-3xl mx-auto">
              Your privacy and confidentiality are our top priorities. Learn how we protect your personal information.
            </p>
            <p className="text-sm text-forest-600 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-forest max-w-none">
                <p>
                  Mindful Rejuvenation ("we," "our," or "us") is committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mental health services.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-forest-700 mb-2">Personal Information</h3>
                  <ul className="list-disc pl-6 space-y-1 text-forest-600">
                    <li>Name, contact information (email, phone number, address)</li>
                    <li>Medical history and treatment information</li>
                    <li>Insurance information and billing details</li>
                    <li>Emergency contact information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-forest-700 mb-2">Website Usage Information</h3>
                  <ul className="list-disc pl-6 space-y-1 text-forest-600">
                    <li>IP address, browser type, and device information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-forest-600">
                  <li>Provide mental health services and treatment</li>
                  <li>Process appointments and communicate with you</li>
                  <li>Handle billing and insurance claims</li>
                  <li>Improve our services and website functionality</li>
                  <li>Send newsletters and health-related information (with consent)</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-forest-600">
                  We maintain strict confidentiality and only share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-forest-600">
                  <li>With your explicit written consent</li>
                  <li>When required by law or court order</li>
                  <li>To prevent serious harm to you or others</li>
                  <li>With healthcare providers involved in your treatment</li>
                  <li>For insurance claims processing</li>
                  <li>With our trusted service providers under confidentiality agreements</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-forest-600">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Secure servers and regular security updates</li>
                  <li>Access controls and staff training on confidentiality</li>
                  <li>Regular security assessments and audits</li>
                  <li>Compliance with healthcare data protection standards</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-forest-600">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with relevant authorities</li>
                  <li>Receive a copy of your medical records</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600">
                  Our website uses cookies and similar technologies to enhance your browsing experience, analyze website traffic, and provide personalized content. You can control cookie settings through your browser preferences.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600 mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-forest-600">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>mindfulrejuvenation.healthcare@gmail.com</span>
                  </div>
                  <div className="flex items-center text-forest-600">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+917306150312</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Policy Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;