import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { RotateCcw, Clock, CreditCard, AlertTriangle } from 'lucide-react';

const RefundCancellation = () => {
  useEffect(() => {
    // SEO optimization
    document.title = 'Refund & Cancellation Policy | Mindful Rejuvenation';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Understand our refund and cancellation policies for mental health services, consultations, and wellness programs at Mindful Rejuvenation.');
    }

    // Add structured data for the refund policy page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Refund & Cancellation Policy",
      "description": "Refund and cancellation policy for Mindful Rejuvenation mental health services",
      "url": `${window.location.origin}/refund-cancellation`,
      "publisher": {
        "@type": "Organization",
        "name": "Mindful Rejuvenation",
        "url": window.location.origin
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-sage-100 pt-[72px]">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-sage-800 mb-4">Refund & Cancellation Policy</h1>
            <p className="text-lg text-sage-600">
              Our policies for appointment cancellations, refunds, and service modifications
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sage-800">
                  <Clock className="h-6 w-6 text-sage-600" />
                  Appointment Cancellation Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sage-700 space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Individual Consultations</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>24+ hours notice:</strong> Full refund or free rescheduling</li>
                    <li><strong>6-24 hours notice:</strong> 50% refund or free rescheduling</li>
                    <li><strong>Less than 6 hours:</strong> No refund, rescheduling with 25% fee</li>
                    <li><strong>No-show:</strong> Full payment charged, no refund</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Group Therapy Sessions</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>48+ hours notice:</strong> Full refund or session transfer</li>
                    <li><strong>24-48 hours notice:</strong> 75% refund or session transfer</li>
                    <li><strong>Less than 24 hours:</strong> 25% refund, no session transfer</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sage-800">
                  <CreditCard className="h-6 w-6 text-sage-600" />
                  Refund Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sage-700 space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Refund Timeline</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Credit/Debit Cards: 5-7 business days</li>
                    <li>UPI/Digital Wallets: 1-3 business days</li>
                    <li>Net Banking: 3-5 business days</li>
                    <li>Cash payments: Immediate refund at facility</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Refund Method</h4>
                  <p>
                    Refunds will be processed through the same payment method used for the original transaction. 
                    In case of payment gateway issues, refunds may be processed via bank transfer to the 
                    registered account.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sage-800">
                  <RotateCcw className="h-6 w-6 text-sage-600" />
                  Service-Specific Policies
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sage-700 space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Inpatient Services</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cancellation before admission: 75% refund (25% administrative fee)</li>
                    <li>Discharge within 24 hours: 50% refund for unused days</li>
                    <li>Medical emergency discharge: Case-by-case review for refund</li>
                    <li>Voluntary discharge after 24 hours: No refund for unused portion</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Wellness Programs & Packages</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Before program start: Full refund minus processing fee (₹500)</li>
                    <li>Within first week: 75% refund</li>
                    <li>After first week: 50% refund for remaining sessions</li>
                    <li>After 50% completion: No refund available</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Digital Services & Products</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Digital assessments: No refund after access/download</li>
                    <li>Online consultations: Same as individual consultation policy</li>
                    <li>Educational materials: 7-day refund period if not accessed</li>
                    <li>Mobile app subscriptions: Refund for unused months</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sage-800">
                  <AlertTriangle className="h-6 w-6 text-sage-600" />
                  Emergency & Special Circumstances
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sage-700 space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Medical Emergencies</h4>
                  <p>
                    In case of medical emergencies preventing attendance, full refund or rescheduling 
                    will be provided upon submission of medical documentation.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Natural Disasters/Force Majeure</h4>
                  <p>
                    Services cancelled due to natural disasters, government restrictions, or other 
                    force majeure events will receive full refund or complimentary rescheduling.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Provider Unavailability</h4>
                  <p>
                    If our healthcare provider is unavailable and we cannot provide a suitable 
                    alternative, full refund will be processed immediately.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sage-800">Non-Refundable Items</CardTitle>
              </CardHeader>
              <CardContent className="text-sage-700 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Processing and administrative fees</li>
                  <li>Third-party service charges (payment gateway fees)</li>
                  <li>Prescription medications once dispensed</li>
                  <li>Completed diagnostic tests and reports</li>
                  <li>Downloaded digital content and accessed materials</li>
                  <li>No-show appointments and consultations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sage-800">How to Request Cancellation/Refund</CardTitle>
              </CardHeader>
              <CardContent className="text-sage-700 space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Contact Methods</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                     <li>Phone: +917306150312 (9 AM to 6 PM, Mon-Sat)</li>
                     <li>Email: pro@mindfulrejuvenation.in</li>
                    <li>In-person: Visit our reception desk</li>
                    <li>Patient portal: Online cancellation system</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Required Information</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Appointment booking ID or invoice number</li>
                    <li>Patient name and contact details</li>
                    <li>Reason for cancellation/refund request</li>
                    <li>Preferred refund method</li>
                    <li>Supporting documentation (if applicable)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sage-800">Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="text-sage-700 space-y-4">
                <p>
                  If you're not satisfied with our refund decision, you may escalate the matter to our 
                  Patient Care Manager within 15 days of the decision. All disputes will be handled 
                  according to applicable consumer protection laws and our internal grievance procedures.
                </p>
                
                <div className="mt-4">
                   <p><strong>Patient Care Manager:</strong> pro@mindfulrejuvenation.in</p>
                   <p><strong>Phone:</strong> +917306150312</p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-sage-600 mt-8">
              <p>Last updated: December 2024</p>
              <p className="mt-2">
                This policy is subject to change. Please check this page regularly for updates.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundCancellation;