import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { initGA, trackPageView } from "@/lib/analytics";
import { useScrollToHash } from "@/hooks/useScrollToHash";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const PsychiatryServices = lazy(() => import("./pages/PsychiatryServices"));
const DementiaCare = lazy(() => import("./pages/DementiaCare"));
const CounsellingPsychotherapy = lazy(() => import("./pages/CounsellingPsychotherapy"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDepressionAdults = lazy(() => import("./pages/BlogDepressionAdults"));
const BlogSadnessDepression = lazy(() => import("./pages/BlogSadnessDepression"));
const OnlineTools = lazy(() => import("./pages/OnlineTools"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const ShippingDelivery = lazy(() => import("./pages/ShippingDelivery"));
const RefundCancellation = lazy(() => import("./pages/RefundCancellation"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Careers = lazy(() => import("./pages/Careers"));
const Auth = lazy(() => import("./pages/Auth"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sage-50 to-forest-50">
    <div className="text-center">
      <div className="animate-pulse text-forest-600 text-xl font-montserrat mb-4">Loading...</div>
      <div className="w-16 h-16 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin mx-auto"></div>
    </div>
  </div>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// Analytics and routing component - must be inside BrowserRouter
const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA only if not already initialized by deferred scripts
    if (typeof window.gtag === 'undefined') {
      initGA();
    }
  }, []);

  useEffect(() => {
    const pageTitle = document.title || 'Mindful Rejuvenation';
    trackPageView(location.pathname, pageTitle);
  }, [location]);

  // Enable smooth scrolling to hash anchors
  useScrollToHash();

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
      <Route path="/psychiatry-services-kochi" element={<PsychiatryServices />} />
      <Route path="/dementia-care-kochi" element={<DementiaCare />} />
      <Route path="/counselling-psychotherapy-kochi" element={<CounsellingPsychotherapy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/sadness-vs-depression" element={<BlogSadnessDepression />} />
      <Route path="/blog/depression-adults-teenagers" element={<BlogDepressionAdults />} />
      <Route path="/online-tools" element={<OnlineTools />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/shipping-delivery" element={<ShippingDelivery />} />
      <Route path="/refund-cancellation" element={<RefundCancellation />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/auth" element={<Auth />} />
      
      {/* Legacy route redirects */}
      <Route path="/psychiatry-services" element={<Navigate to="/psychiatry-services-kochi" replace />} />
      <Route path="/dementia-care" element={<Navigate to="/dementia-care-kochi" replace />} />
      <Route path="/counselling-psychotherapy" element={<Navigate to="/counselling-psychotherapy-kochi" replace />} />
      
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  );
};

export default App;
