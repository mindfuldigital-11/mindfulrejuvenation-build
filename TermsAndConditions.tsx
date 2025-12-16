import { useEffect } from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, AlertTriangle, Mail, Phone } from 'lucide-react';

const TermsAndConditions = () => {
  useEffect(() => {
    // SEO optimization
    document.title = 'Terms and Conditions - Mindful Rejuvenation | Mental Health Services Kochi';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms and Conditions for Mindful Rejuvenation mental health services. Understand our service terms and user responsibilities.');
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms and Conditions - Mindful Rejuvenation",
      "description": "Terms and Conditions for Mindful Rejuvenation mental health services",
      "url": "https://mindfulrejuvenation.in/terms-and-conditions",
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
              <FileText className="w-16 h-16 text-forest-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-xl text-forest-700 max-w-3xl mx-auto">
              Please read these terms carefully before using our mental health services.
            </p>
            <p className="text-sm text-forest-600 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Acceptance of Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600">
                  By accessing our website or using our mental health services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600 mb-4">
                  Mindful Rejuvenation provides comprehensive mental health services including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-forest-600">
                  <li>Psychiatry services and consultation</li>
                  <li>Counselling and psychotherapy</li>
                  <li>Dementia care and support</li>
                  <li>Mental health assessments and treatment</li>
                  <li>Crisis intervention and emergency support</li>
                </ul>
              </CardContent>
            </Card>

            {/* Medical Disclaimer */}
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Medical Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 mb-2">Emergency Situations</h3>
                  <p className="text-red-800 mb-2">
                    If you are experiencing a mental health emergency or having thoughts of self-harm, please contact emergency services immediately or visit your nearest emergency room.
                  </p>
                  <div className="text-red-800">
                    <p><strong>24/7 Emergency Contact:</strong></p>
                    <p>Crisis Helpline: +917306150312</p>
                    <p>WhatsApp Support: +919037899299</p>
                  </div>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-amber-700">
                  <li>Our website content is for informational purposes only and does not constitute medical advice</li>
                  <li>Always consult with qualified healthcare professionals for medical decisions</li>
                  <li>Treatment outcomes may vary from person to person</li>
                  <li>Our services complement but do not replace emergency medical care</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600 mb-4">By using our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-forest-600">
                  <li>Provide accurate and complete information about your health condition</li>
                  <li>Attend scheduled appointments or provide reasonable notice for cancellations</li>
                  <li>Follow treatment recommendations and prescribed medications</li>
                  <li>Maintain confidentiality of other patients you may encounter</li>
                  <li>Use our website and services for lawful purposes only</li>
                  <li>Respect our staff and other patients at all times</li>
                  <li>Pay fees and charges as agreed upon</li>
                </ul>
              </CardContent>
            </Card>

            {/* Appointment and Cancellation Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Appointment and Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-forest-700 mb-2">Scheduling</h3>
                  <ul className="list-disc pl-6 space-y-1 text-forest-600">
                    <li>Appointments can be scheduled through our contact form or by calling us directly</li>
                    <li>We will confirm all appointments via phone or email</li>
                    <li>Please arrive 15 minutes early for your first appointment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-forest-700 mb-2">Cancellations</h3>
                  <ul className="list-disc pl-6 space-y-1 text-forest-600">
                    <li>Please provide at least 24 hours notice for cancellations</li>
                    <li>Late cancellations or no-shows may be subject to fees</li>
                    <li>Emergency situations will be handled on a case-by-case basis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Confidentiality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600 mb-4">
                  We maintain strict confidentiality in accordance with professional ethics and applicable laws:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-forest-600">
                  <li>All patient information is kept strictly confidential</li>
                  <li>Information may only be shared with your explicit written consent</li>
                  <li>Limited exceptions exist for safety concerns or legal requirements</li>
                  <li>We comply with all applicable privacy and healthcare regulations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment and Fees */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Payment and Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-forest-600">
                  <li>Payment is due at the time of service unless other arrangements are made</li>
                  <li>We accept cash, card payments, and insurance (where applicable)</li>
                  <li>Fee schedules are available upon request</li>
                  <li>Outstanding balances may affect future appointment scheduling</li>
                  <li>Financial assistance may be available for qualified patients</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600">
                  While we strive to provide the highest quality care, we cannot guarantee specific treatment outcomes. Our liability is limited to the extent permitted by law. We are not responsible for any indirect, incidental, or consequential damages arising from the use of our services.
                </p>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600">
                  All content on our website, including text, images, logos, and materials, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use our content without explicit written permission.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600">
                  These Terms and Conditions are governed by the laws of India and the state of Kerala. Any disputes arising from these terms or our services will be subject to the jurisdiction of the courts in Kochi, Kerala.
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
                  If you have questions about these Terms and Conditions, please contact us:
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

            {/* Changes to Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the new terms.
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

export default TermsAndConditions;