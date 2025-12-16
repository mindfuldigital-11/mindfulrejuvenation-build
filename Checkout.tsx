import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Shield, Lock, Calendar, User, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CheckoutItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const Checkout = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Kochi',
    state: 'Kerala',
    pincode: '',
    paymentMethod: 'card',
    acceptTerms: false,
    acceptRefund: false,
    acceptPrivacy: false
  });

  const [cartItems] = useState<CheckoutItem[]>([
    {
      id: '1',
      name: 'Individual Counselling Session',
      description: '50-minute session with licensed therapist',
      price: 2500,
      quantity: 1
    },
    {
      id: '2',
      name: 'Mental Health Assessment',
      description: 'Comprehensive psychological evaluation',
      price: 3500,
      quantity: 1
    }
  ]);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  useEffect(() => {
    // SEO optimization
    document.title = 'Secure Checkout | Mindful Rejuvenation';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Secure online payment for mental health services at Mindful Rejuvenation. Book your consultation and wellness services with confidence.');
    }

    // Add structured data for the checkout page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CheckoutPage",
      "name": "Secure Checkout",
      "description": "Secure payment portal for Mindful Rejuvenation mental health services",
      "url": `${window.location.origin}/checkout`,
      "provider": {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Validate terms acceptance
    if (!formData.acceptTerms || !formData.acceptRefund || !formData.acceptPrivacy) {
      toast({
        title: "Terms & Conditions",
        description: "Please accept all required policies to proceed.",
        variant: "destructive"
      });
      return;
    }

    // Simulate payment processing
    toast({
      title: "Processing Payment",
      description: "Please wait while we process your payment securely...",
    });

    // In a real application, this would integrate with a payment gateway
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: "Your booking has been confirmed. You will receive an email confirmation shortly.",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-sage-100 pt-[72px]">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-sage-800 mb-2">Secure Checkout</h1>
            <div className="flex items-center justify-center gap-2 text-sage-600">
              <Shield className="h-5 w-5" />
              <span>256-bit SSL Encrypted • RBI Compliant</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Billing & Payment */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-sage-500" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="pl-10 mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-sage-500" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="pl-10 mt-1"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">PIN Code</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-sage-600">
                        Secured by industry-standard encryption
                      </span>
                    </div>
                    
                    <div className="grid gap-4">
                      <div className="border rounded-lg p-4 bg-sage-50">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            id="card"
                            name="paymentMethod"
                            value="card"
                            checked={formData.paymentMethod === 'card'}
                            onChange={(e) => setFormData(prev => ({ ...prev, paymentMethod: e.target.value }))}
                            className="text-sage-600"
                          />
                          <label htmlFor="card" className="flex-1 font-medium">
                            Credit/Debit Card
                          </label>
                          <div className="flex gap-2">
                            <Badge variant="outline">Visa</Badge>
                            <Badge variant="outline">MasterCard</Badge>
                            <Badge variant="outline">RuPay</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            id="upi"
                            name="paymentMethod"
                            value="upi"
                            checked={formData.paymentMethod === 'upi'}
                            onChange={(e) => setFormData(prev => ({ ...prev, paymentMethod: e.target.value }))}
                            className="text-sage-600"
                          />
                          <label htmlFor="upi" className="flex-1 font-medium">
                            UPI Payment
                          </label>
                          <div className="flex gap-2">
                            <Badge variant="outline">GPay</Badge>
                            <Badge variant="outline">PhonePe</Badge>
                            <Badge variant="outline">Paytm</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            id="netbanking"
                            name="paymentMethod"
                            value="netbanking"
                            checked={formData.paymentMethod === 'netbanking'}
                            onChange={(e) => setFormData(prev => ({ ...prev, paymentMethod: e.target.value }))}
                            className="text-sage-600"
                          />
                          <label htmlFor="netbanking" className="flex-1 font-medium">
                            Net Banking
                          </label>
                          <Badge variant="outline">All Major Banks</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Terms & Conditions */}
              <Card>
                <CardHeader>
                  <CardTitle>Terms & Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="acceptTerms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => handleCheckboxChange('acceptTerms', checked as boolean)}
                      />
                      <label htmlFor="acceptTerms" className="text-sm leading-relaxed">
                        I agree to the{' '}
                        <Link to="/terms-and-conditions" className="text-sage-600 hover:underline" target="_blank">
                          Terms & Conditions
                        </Link>{' '}
                        and understand the appointment booking policies.
                      </label>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="acceptRefund"
                        checked={formData.acceptRefund}
                        onCheckedChange={(checked) => handleCheckboxChange('acceptRefund', checked as boolean)}
                      />
                      <label htmlFor="acceptRefund" className="text-sm leading-relaxed">
                        I have read and agree to the{' '}
                        <Link to="/refund-cancellation" className="text-sage-600 hover:underline" target="_blank">
                          Refund & Cancellation Policy
                        </Link>.
                      </label>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="acceptPrivacy"
                        checked={formData.acceptPrivacy}
                        onCheckedChange={(checked) => handleCheckboxChange('acceptPrivacy', checked as boolean)}
                      />
                      <label htmlFor="acceptPrivacy" className="text-sm leading-relaxed">
                        I consent to the collection and use of my personal data as outlined in the{' '}
                        <Link to="/privacy-policy" className="text-sage-600 hover:underline" target="_blank">
                          Privacy Policy
                        </Link>.
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div className="space-y-6">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-sage-800">{item.name}</h4>
                          <p className="text-sm text-sage-600">{item.description}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-4 w-4 text-sage-500" />
                            <span className="text-sm text-sage-600">To be scheduled</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">₹{item.price.toLocaleString('en-IN')}</div>
                          <div className="text-sm text-sage-600">Qty: {item.quantity}</div>
                        </div>
                      </div>
                      <Separator />
                    </div>
                  ))}
                  
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-sage-700">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-sage-700">
                      <span>GST (18%)</span>
                      <span>₹{gst.toLocaleString('en-IN')}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold text-sage-800">
                      <span>Total</span>
                      <span>₹{total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-sage-600 hover:bg-sage-700 text-white"
                    size="lg"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Pay Securely
                  </Button>
                  
                  <div className="text-center text-xs text-sage-600 mt-4">
                    <p>🔒 Your payment information is encrypted and secure</p>
                    <p className="mt-1">RBI Guidelines Compliant • PCI DSS Certified</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;