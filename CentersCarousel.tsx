import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, Phone, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const centers = [
  {
    name: "Mindful Rejuvenation Psychiatry Hospital",
    location: "Kochi, Ernakulam",
    address: "Ernakulam, Kerala",
    phone: "+91 730 615 0312",
    image: "/centers/ernakulam-composite.jpg",
    mapUrl: "https://maps.google.com/?q=Mindful+Rejuvenation+Hospital+Kochi+Ernakulam",
    hours: "24/7 Emergency Services"
  },
  {
    name: "Mindful Rejuvenation Psychiatry & Rehabilitation",
    location: "Vaduthala, Kochi",
    address: "Vaduthala, Ernakulam, Kerala",
    phone: "+91 730 615 0312",
    image: "/centers/vaduthala-composite-new.jpg",
    mapUrl: "https://maps.google.com/?q=Mindful+Rejuvenation+Vaduthala+Kochi",
    hours: "24/7 Emergency Services"
  },
  {
    name: "Mindful Rejuvenation Psychiatry Hospital",
    location: "Angamaly, Kerala",
    address: "Angamaly, Ernakulam District, Kerala",
    phone: "+917306150312",
    image: "/centers/cover-composite.jpg",
    mapUrl: "https://maps.google.com/?q=Mindful+Rejuvenation+Angamaly",
    hours: "24/7 Emergency Services"
  }
];

export const CentersCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    // Auto-scroll every 4 seconds
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000);

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
        {centers.map((center, index) => (
          <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
            <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={center.image} 
                  alt={`${center.name} - Mental Health Center in ${center.location}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">{center.name}</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{center.location}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex items-start text-gray-700">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-forest-600" />
                    <span className="line-clamp-2">{center.address}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0 text-forest-600" />
                    <span>{center.hours}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="h-4 w-4 mr-2 flex-shrink-0 text-forest-600" />
                    <a href={`tel:${center.phone}`} className="hover:text-forest-600 transition-colors">
                      {center.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  {index !== 2 && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-xs"
                      onClick={() => window.open(center.mapUrl, '_blank')}
                    >
                      <MapPin className="h-3 w-3 mr-1" />
                      View Map
                    </Button>
                  )}
                  <Button 
                    size="sm" 
                    className={`${index === 2 ? 'w-full' : 'flex-1'} text-xs bg-forest-600 hover:bg-forest-700`}
                    onClick={() => window.open(`tel:${center.phone}`, '_self')}
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};
