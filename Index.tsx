import { lazy, Suspense } from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import EmergencyBanner from "@/components/shared/EmergencyBanner";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { Card, CardContent } from "@/components/ui/card";

// Lazy load heavy components
const FacilityImagesSection = lazy(() => import("@/components/home/FacilityImagesSection").then(m => ({ default: m.FacilityImagesSection })));
const ServicesGrid = lazy(() => import("@/components/home/ServicesGrid").then(m => ({ default: m.ServicesGrid })));
const CentersCarousel = lazy(() => import("@/components/home/CentersCarousel").then(m => ({ default: m.CentersCarousel })));
const TestimonialsSection = lazy(() => import("@/components/home/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const FAQSection = lazy(() => import("@/components/home/FAQSection").then(m => ({ default: m.FAQSection })));
const NewsletterSection = lazy(() => import("@/components/home/NewsletterSection").then(m => ({ default: m.NewsletterSection })));

// Loading fallback component with better skeleton
const SectionLoader = () => (
  <div className="py-12 sm:py-16 px-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-sage-100 to-forest-100 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col pt-[72px]">
      <Header />
      <EmergencyBanner />
      
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <Suspense fallback={<SectionLoader />}>
          <FacilityImagesSection />
        </Suspense>

        {/* Services Section - Lazy Loaded */}
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-sage-50 to-forest-50">
          <div className="container mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-3 sm:mb-4 font-montserrat">
                Comprehensive Mental Health Services
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Expert psychiatric care, counselling, and rehabilitation tailored to your needs
              </p>
            </div>
            <Suspense fallback={<SectionLoader />}>
              <ServicesGrid />
            </Suspense>
          </div>
        </section>

        {/* Centers Section - Lazy Loaded */}
        <section className="py-12 sm:py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-3 sm:mb-4 font-montserrat">
                Our Growing Chain of Mental Health Centers
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A growing chain of professional <strong>mental healthcare specialty hospitals</strong> and <strong>mental wellness & counselling therapy centers</strong> across Kerala. From our <strong>psychiatry hospital in Kochi</strong> and <strong>psychiatry hospital in Ernakulam</strong> to our dedicated <strong>psychiatrist clinics in Kochi</strong>, we're recognized as the <strong>best mental hospital in Kochi</strong> for comprehensive 24/7 psychiatric care, counselling, and rehabilitation services.
              </p>
            </div>
            <Suspense fallback={<SectionLoader />}>
              <CentersCarousel />
            </Suspense>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-forest-50 to-sage-50">
          <div className="container mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-3 sm:mb-4 font-montserrat">
                Why Choose Mindful Rejuvenation?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🏥</div>
                  <h3 className="text-xl font-bold text-forest-700 mb-3">Licensed & Accredited</h3>
                  <p className="text-gray-600">Fully licensed psychiatric hospital with modern infrastructure and expert medical team</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">👨‍⚕️</div>
                  <h3 className="text-xl font-bold text-forest-700 mb-3">Expert Psychiatrists</h3>
                  <p className="text-gray-600">Experienced psychiatrists, psychologists, and counsellors providing evidence-based care</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-bold text-forest-700 mb-3">Complete Confidentiality</h3>
                  <p className="text-gray-600">Strict privacy protocols ensuring your mental health journey remains completely confidential</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">⏰</div>
                  <h3 className="text-xl font-bold text-forest-700 mb-3">24/7 Emergency Care</h3>
                  <p className="text-gray-600">Round-the-clock emergency psychiatric services and crisis intervention available</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🏡</div>
                  <h3 className="text-xl font-bold text-forest-700 mb-3">Comfortable Environment</h3>
                  <p className="text-gray-600">Therapeutic spaces designed for healing and recovery with compassionate care</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">💊</div>
                  <h3 className="text-xl font-bold text-forest-700 mb-3">Holistic Treatment</h3>
                  <p className="text-gray-600">Comprehensive approach combining medication, therapy, and rehabilitation programs</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Lazy Loaded */}
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>

        {/* FAQ Section - Lazy Loaded */}
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>

        {/* Newsletter Section - Lazy Loaded */}
        <Suspense fallback={<SectionLoader />}>
          <NewsletterSection />
        </Suspense>
      </main>

      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
};

export default Index;
