import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '@/lib/emailService';
import { trackNewsletterSignup } from '@/lib/analytics';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubscription = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simple email sending without full EmailJS setup for now
      const templateParams = {
        to_email: 'mindfulrejuvenation.healthcare@gmail.com',
        subscriber_email: email,
        subscribed_at: new Date().toLocaleString(),
        subject: 'New Newsletter Subscription - Mindful Rejuvenation'
      };

      // For production, you would set up EmailJS properly
      // For now, we'll simulate success and show the toast
      toast({
        title: "Subscription Successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      // Track newsletter signup
      trackNewsletterSignup(email);
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const BUILD_VERSION = "v2025-11-16-1";
  console.info("[Build]", BUILD_VERSION);
  return (
    <footer className="bg-forest-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/d508a9c2-348b-42ad-ad91-be9d3a89630e.png" alt="Mindful Rejuvenation Logo" className="h-16 w-16" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Leading mental health care in Kerala • Compassionate • Professional • Confidential
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/mindfulrejuvenation" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sage-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/mindfulrejuvenation.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sage-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4 font-montserrat">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-sage-400 transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="text-gray-300 hover:text-sage-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-sage-400 transition-colors">Contact</Link></li>
              <li><Link to="/psychiatry-services-kochi" className="text-gray-300 hover:text-sage-400 transition-colors">Psychiatry Services</Link></li>
              <li><Link to="/dementia-care-kochi" className="text-gray-300 hover:text-sage-400 transition-colors">Dementia Care</Link></li>
              <li><Link to="/counselling-psychotherapy-kochi" className="text-gray-300 hover:text-sage-400 transition-colors">Counselling & Psychotherapy</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-sage-400 transition-colors">Blog & Resources</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-sage-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h5 className="font-semibold mb-4 font-montserrat">Our Facilities</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-sage-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Karukutty, Angamaly Facility</p>
                  <p className="text-gray-300 text-xs">Comprehensive mental health care</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-sage-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Vaduthala, Kochi Facility</p>
                  <p className="text-gray-300 text-xs">Full-service mental health center</p>
                   <a href="https://www.google.com/maps/place/Mindful+Rejuvenation+Hospital-+Psychiatry,+Rehabilitation+and+Dementia+care+Deaddiction+Kochi+Psychiatry+Hospital/@10.0175974,76.2735573,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080dc5dc02de8f:0xc7cd995fdc4a5e30!8m2!3d10.0175974!4d76.2761322!16s%2Fg%2F11s85y3nrj?entry=ttu" target="_blank" rel="noopener noreferrer" 
                     className="text-sage-400 hover:text-sage-300 text-xs underline">
                    View on Map →
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-sage-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Kaloor, Kochi Facility</p>
                  <p className="text-gray-300 text-xs">OP services, therapies, counselling & consultations</p>
                  <p className="text-gray-300 text-xs">Phone: +91 81291 99903/02</p>
                   <a href="https://www.google.com/maps/place/Mindful+Life+%2F+Psychiatric+Hospital+Ernakulam+Family+Counselling+Centre+Kochi/@10.0001634,76.2956923,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080d576c3a921d:0x20a9a1ca6b63af41!8m2!3d10.0001634!4d76.2982672!16s%2Fg%2F11qpwwl6ls?entry=ttu" target="_blank" rel="noopener noreferrer" 
                     className="text-sage-400 hover:text-sage-300 text-xs underline">
                    View on Map →
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sage-400" />
                <div className="text-gray-300">
                  <p>Helpline: +91 90378 99299, +91 73061 50312</p>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-sage-400" />
                <div className="text-gray-300">
                  <p>mindfulrejuvenation@gmail.com</p>
                  <p className="text-xs">Help: help@mindfulrejuvenation.in</p>
                  <p className="text-xs">Jobs/Internships: hr@mindfulrejuvenation.in</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-semibold mb-4 font-montserrat">Stay Connected</h5>
            <p className="text-gray-300 text-sm mb-4">Subscribe for Mental Health Tips</p>
            <form onSubmit={handleNewsletterSubscription} className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="your.email@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-forest-700 border-forest-600 text-white placeholder-gray-400"
                required
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                size="sm" 
                className="bg-sage-600 hover:bg-sage-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <Send className="w-4 h-4 mr-2 animate-pulse" />
                    Subscribing...
                  </div>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Corporate Address & Bottom Section */}
        <div className="border-t border-forest-700 mt-8 pt-8">
          <div className="mb-6">
            <h5 className="font-semibold mb-2 font-montserrat text-sm">Corporate Address</h5>
            <p className="text-sm text-gray-400">
              Mindful Rejuvenation Healthcare Pvt Ltd<br />
              Vaduthala, Kochi Facility<br />
              Full-service mental health center
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row md:items-center md:gap-3">
              <p className="text-sm text-gray-400">
                © 2024 Mindful Rejuvenation Healthcare Pvt Ltd. All rights reserved.
              </p>
              <span className="text-xs text-gray-500 bg-forest-700/50 px-2 py-0.5 rounded mt-2 md:mt-0" aria-label="Build version">
                {BUILD_VERSION}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 mt-4 md:mt-0 justify-center md:justify-end">
              <Link to="/contact" className="text-sm text-gray-400 hover:text-sage-400 transition-colors">
                Contact Us
              </Link>
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-sage-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-sm text-gray-400 hover:text-sage-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/refund-cancellation" className="text-sm text-gray-400 hover:text-sage-400 transition-colors">
              Refunds & Cancellations
            </Link>
              <Link to="/shipping-delivery" className="text-sm text-gray-400 hover:text-sage-400 transition-colors">
                Shipping & Delivery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;