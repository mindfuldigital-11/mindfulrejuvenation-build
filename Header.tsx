
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Phone, Menu, X, MessageCircle, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { buildWhatsAppUrl, getBestWhatsAppLink } from "@/lib/whatsapp";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Psychiatry Services", href: "/psychiatry-services-kochi" },
    { name: "Dementia Care", href: "/dementia-care-kochi" },
    { name: "Counselling & Psychotherapy", href: "/counselling-psychotherapy-kochi" },
    { name: "Online Tools", href: "/online-tools" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ];

  const isActive = (href: string) => location.pathname === href;

// WhatsApp helpers moved to shared lib

  return (
    <header className="bg-white shadow-lg border-b fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img src="/lovable-uploads/76e26aa4-59c0-4056-b520-f6e7b3b8e6ac.png" alt="Mindful Rejuvenation Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
            <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-forest-800 font-montserrat">Mindful Rejuvenation</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-sage-600 ${
                  isActive(item.href) ? "text-sage-600" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            {/* CTA Buttons - Hidden on mobile, visible on desktop */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Emergency Badge */}
              <div className="flex flex-col items-center space-y-1 md:space-y-2">
                <Badge variant="secondary" className="bg-red-100 text-red-800 px-1 py-0.5 text-xs animate-pulse whitespace-nowrap">
                  <Clock className="h-2 w-2 mr-1" />
                  24/7 Emergency
                </Badge>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="cta-btn border-sage-600 text-sage-600 hover:bg-sage-50 hover:scale-105 transition-all duration-200 text-xs px-2 py-1 h-7 rounded-full sm:rounded-md"
                  >
                    <a href="tel:+917306150312" className="flex items-center leading-none">
                      <Phone className="!h-5 !w-5 mr-1 text-sage-600" strokeWidth={2.25} />
                      <span className="hidden xs:inline">Call</span>
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    asChild
                    className="cta-btn bg-green-600 hover:bg-green-700 text-white hover:scale-105 transition-all duration-200 shadow-lg text-xs px-2 py-1 h-7 rounded-full sm:rounded-md"
                  >
                    <a 
                      href={buildWhatsAppUrl("I would like to enquire about your mental health services")}
                      onClick={(e) => {
                        e.preventDefault();
                        const url = getBestWhatsAppLink("I would like to enquire about your mental health services");
                        console.info("[WhatsApp] navigating to", url);
                        window.location.href = url;
                      }}
                      className="flex items-center leading-none"
                    >
                      <MessageCircle className="!h-5 !w-5 mr-1 text-white" strokeWidth={2.25} />
                      <span className="hidden xs:inline">WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button - Always visible on mobile */}
            <button
              className="lg:hidden p-2 rounded-md transition-colors bg-white border border-gray-200 shadow-sm text-forest-800"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-forest-800" /> : <Menu className="h-6 w-6 text-forest-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-sage-600 px-2 py-1 rounded ${
                    isActive(item.href) ? "text-sage-600 bg-sage-50" : "text-gray-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <div className="text-center">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 px-3 py-1 animate-pulse">
                    <Clock className="h-3 w-3 mr-1" />
                    24/7 Available • 365 Days
                  </Badge>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="cta-btn border-sage-600 text-sage-600 hover:bg-sage-50 w-full"
                >
                  <a href="tel:+917306150312" className="flex items-center leading-none">
                    <Phone className="h-4 w-4 mr-2" />
                    Call +91-7306150312
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  asChild
                  className="cta-btn bg-green-600 hover:bg-green-700 w-full shadow-lg"
                >
                  <a 
                    href={buildWhatsAppUrl("I would like to enquire about your mental health services")}
                    onClick={(e) => {
                      e.preventDefault();
                      const url = getBestWhatsAppLink("I would like to enquire about your mental health services");
                      console.info("[WhatsApp] navigating to", url);
                      window.location.href = url;
                    }}
                    className="flex items-center leading-none"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Enquiry
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };
export default Header;
