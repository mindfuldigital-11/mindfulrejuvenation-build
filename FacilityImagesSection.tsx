import { Card } from "@/components/ui/card";

const images = [
  {
    src: "/lovable-uploads/42cc5002-58dd-4442-83d5-43efabccb7c4.png",
    alt: "Best Mental Health Hospital Kerala Angamaly - Psychiatric Care Center Kochi",
    title: "Mental Health Hospital",
    subtitle: "Psychiatric Care | Depression Support"
  },
  {
    src: "/lovable-uploads/d879251b-5f00-4b51-8694-ff901b0eacb0.png",
    alt: "Best Psychiatrist Kochi Ernakulam - Dementia Care Center Kerala",
    title: "Psychiatrist Kochi",
    subtitle: "Dementia Care | Anxiety Support"
  },
  {
    src: "/lovable-uploads/932b4728-dfe3-4ed0-86a6-05b2dcf6af3f.png",
    alt: "Counselling Therapy Kerala - Individual Couple Therapy Kochi",
    title: "Counselling Therapy",
    subtitle: "Individual & Couple Therapy"
  },
  {
    src: "/lovable-uploads/d508a9c2-348b-42ad-ad91-be9d3a89630e.png",
    alt: "Mental Health Center Kerala - Psychology Clinic Kochi Ernakulam",
    title: "Mental Health Center",
    subtitle: "Psychology & Wellness Programs"
  }
];

export const FacilityImagesSection = () => {
  return (
    <section className="py-8 sm:py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative h-48 sm:h-56 lg:h-64">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="400"
                  height="256"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6">
                  <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">{image.title}</h3>
                  <p className="text-white/90 text-xs sm:text-sm">{image.subtitle}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
