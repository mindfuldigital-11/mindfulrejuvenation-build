import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { trackNewsletterSignup } from "@/lib/analytics";

export const NewsletterSection = () => {
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
      toast({
        title: "Subscription Successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
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

  return (
    <section className="py-12 sm:py-16 px-4 bg-forest-700 text-white">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 font-montserrat">
          Stay Informed About Mental Health
        </h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-sage-100">
          Subscribe to receive mental health tips, updates, and resources
        </p>
        <form onSubmit={handleNewsletterSubscription} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
          <Input 
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white text-gray-900"
            disabled={isSubmitting}
          />
          <Button 
            type="submit" 
            size="lg"
            disabled={isSubmitting}
            className="bg-sage-500 hover:bg-sage-600 text-white font-semibold w-full sm:w-auto"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      </div>
    </section>
  );
};
