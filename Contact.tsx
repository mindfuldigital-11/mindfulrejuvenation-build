
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactForm } from '@/lib/emailService';
import { useState } from "react";
import MapReviews from "@/components/contact/MapReviews";
import { buildWhatsAppUrl, getBestWhatsAppLink } from "@/lib/whatsapp";


const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredTime: "",
    preferredDate: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await sendContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.service,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: formData.message,
        submittedAt: new Date().toLocaleString()
      });
      
      if (success) {
        toast({
          title: "Request Submitted!",
          description: "We'll contact you within 24 hours to confirm your appointment.",
        });
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          service: "", 
          message: "", 
          preferredTime: "",
          preferredDate: ""
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

// WhatsApp helpers moved to shared lib

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sand-50 pt-[72px]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-r from-forest-600 to-sage-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-montserrat leading-tight">Contact Us</h1>
          <p className="text-sm sm:text-lg md:text-xl leading-relaxed">
            Best Mental Health Care in Kerala | Psychiatry Services, Recovery Support, Dementia Care | 
            Expert consultation, therapy, rehabilitation at Karukutty, Vaduthala & Kaloor facilities
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Quick Contact */}
            <Card id="emergency" className="border-l-4 border-l-sage-600 scroll-mt-24">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat text-forest-600">Get Immediate Help</CardTitle>
                <CardDescription>24/7 helpline for mental health emergencies and consultations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-sage-600" />
                  <div>
                    <p className="font-medium">24/7 Helpline</p>
                    <p className="text-gray-600">+91 90378 99299, +91 73061 50312</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-sage-600" />
                  <div>
                    <p className="font-medium">WhatsApp Support</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="mt-1"
                    >
                      <a 
                        href={buildWhatsAppUrl(`Hi, I would like to book an appointment for ${formData.service || 'consultation'}. My name is ${formData.name || '[Your name]'}.`)}
                        onClick={(e) => {
                          e.preventDefault();
                          const url = getBestWhatsAppLink(`Hi, I would like to book an appointment for ${formData.service || 'consultation'}. My name is ${formData.name || '[Your name]'}.`);
                          console.info("[WhatsApp] navigating to", url);
                          window.location.href = url;
                        }}
                      >
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-sage-600" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-gray-600">mindfulrejuvenation@gmail.com</p>
                    <p className="text-sm text-gray-500">Help: help@mindfulrejuvenation.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Form */}
            <Card className="border-l-4 border-l-forest-600">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat text-forest-600">Book Appointment</CardTitle>
                <CardDescription>Schedule your consultation with our mental health experts</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="service">Service Required</Label>
                    <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="psychiatry">Psychiatry Consultation</SelectItem>
                        <SelectItem value="recovery-support">Recovery Support</SelectItem>
                        <SelectItem value="dementia">Dementia Care</SelectItem>
                        <SelectItem value="therapy">Therapy/Counselling</SelectItem>
                        <SelectItem value="rehabilitation">Rehabilitation Services</SelectItem>
                        <SelectItem value="emergency">Mental Health Emergency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Input
                        id="preferredTime"
                        type="time"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your concerns or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="button"
                      asChild
                      className="flex-1 bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800"
                      disabled={isSubmitting}
                    >
                      <a 
                        href={buildWhatsAppUrl(`Hi, I would like to book an appointment for ${formData.service || 'consultation'}. My name is ${formData.name || '[Your name]'}.`)}
                        onClick={(e) => {
                          e.preventDefault();
                          const url = getBestWhatsAppLink(`Hi, I would like to book an appointment for ${formData.service || 'consultation'}. My name is ${formData.name || '[Your name]'}.`);
                          console.info("[WhatsApp] navigating to", url);
                          window.location.href = url;
                        }}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Request via WhatsApp
                      </a>
                    </Button>
                    <Button
                      type="submit"
                      variant="outline"
                      className="flex-1 border-forest-600 text-forest-600 hover:bg-forest-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <Send className="w-4 h-4 mr-2 animate-pulse" />
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Request via Email
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-sage-50 to-sand-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-600 mb-4 font-montserrat">Our Services & Pricing</h2>
            <p className="text-gray-600 text-lg">Comprehensive mental health care with transparent pricing</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Psychiatric Consultations */}
            <Card className="border-t-4 border-t-sage-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-sage-600" />
                </div>
                <CardTitle className="text-xl font-montserrat text-forest-600">Psychiatric Consultations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <p className="text-3xl font-bold text-sage-600">₹800</p>
                  <p className="text-sm text-gray-500">per 30 mins</p>
                </div>
                <p className="text-sm text-gray-600">Expert psychiatric evaluation and medication management</p>
              </CardContent>
            </Card>

            {/* Therapy & Counselling */}
            <Card className="border-t-4 border-t-sand-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-sand-600" />
                </div>
                <CardTitle className="text-xl font-montserrat text-forest-600">Therapy & Counselling</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <p className="text-3xl font-bold text-sand-600">₹1,000</p>
                  <p className="text-sm text-gray-500">per session</p>
                </div>
                <p className="text-sm text-gray-600">Individual and family counselling sessions</p>
              </CardContent>
            </Card>

            {/* In-patient Packages */}
            <Card className="border-t-4 border-t-sage-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-sage-700" />
                </div>
                <CardTitle className="text-xl font-montserrat text-forest-600">In-patient Packages</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <p className="text-3xl font-bold text-sage-700">₹800-5,000</p>
                  <p className="text-sm text-gray-500">per day</p>
                </div>
                <p className="text-sm text-gray-600">24/7 supervised care with medical support</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">All prices are in Indian Rupees (₹). Packages may vary based on individual needs.</p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-forest-600 to-sage-600 hover:from-forest-700 hover:to-sage-700"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Book Consultation Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-sand-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-600 mb-4 font-montserrat">Our Facilities</h2>
            <p className="text-gray-600">Leading mental health care across Kerala with expert psychiatrists, psychologists, and rehabilitation specialists</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Karukutty Facility */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-sage-600" />
                  <CardTitle className="text-lg font-montserrat">Karukutty, Angamaly Facility</CardTitle>
                </div>
                <CardDescription>Comprehensive mental health care center</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Services:</strong> Inpatient care, psychiatry, recovery treatment, rehabilitation</p>
                  <p><strong>Phone:</strong> +91 90378 99299</p>
                  <div className="mt-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.4352625194133!2d76.38062927455447!3d10.226435569098447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0801a2f4087abb%3A0x6a49af56d0f421e9!2sMindful%20Rejuvenation-%20Recovery%20Centre%20In%20Kochi%20Ernakulam%20Mental%20Hospital%20Psychiatric%20Ernakulam!5e0!3m2!1sen!2sin!4v1749128796259!5m2!1sen!2sin" width="100%" height="200" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vaduthala Facility */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-forest-600" />
                  <CardTitle className="text-lg font-montserrat">Vaduthala, Kochi Facility</CardTitle>
                </div>
                <CardDescription>Full-service mental health center</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Services:</strong> Psychiatry, dementia care, therapy, outpatient services</p>
                  <p><strong>Phone:</strong> +91 73061 50312</p>
                  <div className="mt-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.991040971443!2d76.27355727455223!3d10.017597372732697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dc5dc02de8f%3A0xc7cd995fdc4a5e30!2sMindful%20Rejuvenation%20Hospital-%20Psychiatry%2C%20Rehabilitation%20and%20Dementia%20care%20Recovery%20Kochi%20Psychiatry%20Hospital!5e0!3m2!1sen!2sin!4v1749128829604!5m2!1sen!2sin" width="100%" height="200" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kaloor Facility */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-sand-600" />
                  <CardTitle className="text-lg font-montserrat">Kaloor, Kochi Facility</CardTitle>
                </div>
                <CardDescription>Outpatient services & consultations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Services:</strong> OP services, therapies, counselling & consultations</p>
                  <p><strong>Phone:</strong> +91 81291 99903/02</p>
                  <div className="mt-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2020394496594!2d76.29569227455208!3d10.000163373032883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d576c3a921d%3A0x20a9a1ca6b63af41!2sMindful%20Life%20%2F%20Psychiatric%20Hospital%20Ernakulam%20Family%20Counselling%20Centre%20Kochi!5e0!3m2!1sen!2sin!4v1749128856945!5m2!1sen!2sin" width="100%" height="200" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-forest-600 mb-8 font-montserrat">Operating Hours</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Regular Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-forest-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Emergency Support</h3>
                <p className="text-gray-600">24/7 Helpline Available</p>
                <p className="text-gray-600">Mental health crisis support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-forest-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Need Help Right Now?</h2>
          <p className="text-xl mb-8">Our mental health professionals are here to support you 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-forest-600 hover:bg-sand-100"
              onClick={() => window.open('tel:+919037899299')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Emergency Helpline
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-white text-white hover:bg-white hover:text-forest-600"
            >
              <a 
                href={buildWhatsAppUrl("I would like to enquire about your mental health services")}
                onClick={(e) => {
                  e.preventDefault();
                  const url = getBestWhatsAppLink("I would like to enquire about your mental health services");
                  console.info("[WhatsApp] navigating to", url);
                  window.location.href = url;
                }}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Support
              </a>
            </Button>
          </div>
        </div>
      </section>
      <MapReviews />

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Contact;
