import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Brain, 
  Users, 
  Heart, 
  Shield, 
  Pill, 
  Cross, 
  Hand, 
  Ambulance,
  Star,
  Phone,
  MessageCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const services = [
  {
    icon: Brain,
    title: "Psychiatric Consultation",
    description: "Expert psychiatric assessment and treatment planning",
    image: "/lovable-uploads/2e303c15-391b-475c-9ca0-caa3ab16e963.png"
  },
  {
    icon: Users,
    title: "OP Psychiatry Services",
    description: "Outpatient psychiatric care and follow-up",
    image: "/lovable-uploads/3014c635-3d79-406e-8213-e75b8e1cf89c.png"
  },
  {
    icon: Star,
    title: "Psychiatry Admissions",
    description: "24/7 inpatient psychiatric care facility",
    image: "/lovable-uploads/36436bcf-bc62-4dc9-8b1f-5b619fc3f7fd.png"
  },
  {
    icon: Phone,
    title: "Telepsychiatry Support",
    description: "Online psychiatric consultations",
    image: "/lovable-uploads/3f7c5e9d-5ac1-49a8-ba02-0c5c00656188.png"
  },
  {
    icon: MessageCircle,
    title: "Counselling & Therapy",
    description: "Individual and group therapy sessions",
    image: "/lovable-uploads/3f9ccdfe-7d3d-4602-98d0-1fc80e44bb7e.png"
  },
  {
    icon: Heart,
    title: "Rehabilitation Programs",
    description: "Comprehensive mental health rehabilitation",
    image: "/lovable-uploads/41bcbaf9-0849-4fb5-8aa8-112c12b44909.png"
  },
  {
    icon: Shield,
    title: "Dementia Care Support",
    description: "Specialized dementia and memory care",
    image: "/lovable-uploads/430ce184-68f9-4305-aa9d-cc1f3eab486d.png"
  },
  {
    icon: Pill,
    title: "Depression Treatment",
    description: "Evidence-based depression therapy",
    image: "/lovable-uploads/44183929-c3cd-4a13-9fc1-5252182c64b0.png"
  },
  {
    icon: Cross,
    title: "Anxiety Disorder Care",
    description: "Comprehensive anxiety treatment programs",
    image: "/lovable-uploads/4627f258-4b29-43ec-80e4-97fe82480cc6.png"
  },
  {
    icon: Hand,
    title: "Bipolar Disorder Care",
    description: "Mood stabilization and management",
    image: "/lovable-uploads/4f6cd83f-39ab-4b48-ab82-7b7a510d7b6e.png"
  },
  {
    icon: Brain,
    title: "Schizophrenia Care",
    description: "Specialized psychosis treatment",
    image: "/lovable-uploads/52132977-4ce2-478e-8fe7-b5fc335d99a0.png"
  },
  {
    icon: Shield,
    title: "OCD Treatment",
    description: "Obsessive-compulsive disorder therapy",
    image: "/lovable-uploads/626bb7a6-d1e4-4675-9ab2-f0afe1c95ffe.png"
  },
  {
    icon: Heart,
    title: "PTSD Counselling",
    description: "Trauma-focused therapy and support",
    image: "/lovable-uploads/62d61371-0174-40c1-9e4c-0b303953aeb9.png"
  },
  {
    icon: Ambulance,
    title: "24/7 Emergency Care",
    description: "Round-the-clock crisis intervention",
    image: "/lovable-uploads/660178f3-90d8-4857-9767-abd7114115da.png"
  }
];

export const ServicesCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    // Auto-scroll every 3 seconds
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden group">
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3 p-2 bg-white/90 backdrop-blur-sm rounded-full">
                    <Icon className="h-5 w-5 text-forest-600" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-forest-600 mb-2 text-sm">{service.title}</h3>
                  <p className="text-gray-600 text-xs line-clamp-2">{service.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};
