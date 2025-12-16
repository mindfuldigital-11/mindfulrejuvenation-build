
import CTAButtons from "@/components/shared/CTAButtons";

const HeroSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-r from-forest-600 to-sage-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-montserrat leading-tight">
          Comprehensive Psychiatry Services
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
          Expert mental health care tailored to your individual needs.
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-sage-100">
          സമഗ്ര മാനസികാരോഗ്യ പരിചരണം - കൊച്ചിയിലെ ഏറ്റവും മികച്ച മാനസികരോഗ ചികിത്സാ കേന്ദ്രം
        </p>
        <CTAButtons />
      </div>
    </section>
  );
};

export default HeroSection;
