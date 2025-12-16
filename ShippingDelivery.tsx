import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Truck, Clock, Package, AlertCircle } from 'lucide-react';

const ShippingDelivery = () => {
  useEffect(() => {
    // SEO optimization
    document.title = 'Shipping & Delivery Policy | Mindful Rejuvenation';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about our shipping and delivery policies for digital health services and consultation materials at Mindful Rejuvenation.');
    }

    // Add structured data for the shipping policy page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Shipping & Delivery Policy",
      "description": "Shipping and delivery policy for Mindful Rejuvenation digital health services",
      "url": `${window.location.origin}/shipping-delivery`,
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
            <h1 className="text-4xl font-bold text-sage-800 mb-4">Shipping & Delivery Policy</h1>
            <p className="text-lg text-sage-600">
              Information about delivery of our digital health services and materials
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sage-800">
                  <Package className="h-6 w-6 text-sage-600" />
                  Service Delivery Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sage-700 space-y-4">
                <p>
                  As a mental health and wellness facility, Mindful Rejuvenation primarily provides in-person consultations, 
                  therapy sessions, and treatments at our Kochi facility. However, we also offer digital services and materials 
                  that may be delivered electronically or physically.
                </p>
                <p>
                  This policy outlines how we deliver various services and materials to our patients and clients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sage-800">
                  <Clock className="h-6 w-6 text-sage-600" />
                  Digital Service Delivery
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sage-700 space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Online Consultations</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Video consultations are delivered immediately upon appointment confirmation</li>
                    <li>Session links are sent via email 24 hours before the scheduled time</li>
                    <li>Technical support is available 30 minutes before each session</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Digital Resources</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Assessment tools and worksheets: Instant download after payment</li>
                    <li>Educational materials: Delivered within 2-4 hours of purchase</li>
                    <li>Therapy guides and resources: Available immediately in your patient portal</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sage-800">
                  <Truck className="h-6 w-6 text-sage-600" />
                  Physical Material Delivery
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sage-700 space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Prescription Medications</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Medications are provided through our partner pharmacy network</li>
                    <li>Home delivery available within Kochi city limits</li>
                    <li>Delivery time: 2-4 hours for urgent medications, next day for regular prescriptions</li>
                    <li>Prescription verification required for all medication deliveries</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Wellness Products</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Stress relief kits and wellness packages</li>
                    <li>Delivery within Kochi: 1-2 business days</li>
                    <li>Pan-India delivery: 3-7 business days</li>
                    <li>Free delivery for orders above ₹2,000</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sage-800">
                  <AlertCircle className="h-6 w-6 text-sage-600" />
                  Delivery Areas & Charges
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sage-700 space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Local Delivery (Kochi & Ernakulam)</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Same-day delivery available for urgent items</li>
                    <li>Standard delivery charge: ₹50</li>
                    <li>Express delivery (2-4 hours): ₹150</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Kerala State</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Standard delivery: 2-3 business days</li>
                    <li>Delivery charge: ₹100</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">All India</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Standard delivery: 5-7 business days</li>
                    <li>Express delivery: 3-4 business days</li>
                    <li>Delivery charges vary by location (₹150-₹300)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sage-800">Important Notes</CardTitle>
              </CardHeader>
              <CardContent className="text-sage-700 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>All delivery timelines are estimates and may vary during holidays or unforeseen circumstances</li>
                  <li>We are not responsible for delays caused by incorrect addresses provided by customers</li>
                  <li>Age verification may be required for certain wellness products</li>
                  <li>Prescription medications require valid prescription and identity verification</li>
                  <li>Digital services are delivered to the email address provided during registration</li>
                  <li>Physical delivery requires someone to be present at the delivery address during business hours</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sage-800">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-sage-700">
                <p>For any delivery-related queries, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Phone:</strong> +91 8606 108 108</p>
                  <p><strong>Email:</strong> info@mindfulrejuvenation.in</p>
                  <p><strong>Address:</strong> Mindful Rejuvenation Hospital, Kochi, Kerala</p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-sage-600 mt-8">
              <p>Last updated: December 2024</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingDelivery;