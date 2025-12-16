import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-3 sm:mb-4 font-montserrat">
            What Our Patients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from patients who found healing and hope at Mindful Rejuvenation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 line-clamp-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-3 sm:pt-4">
                  <p className="font-semibold text-forest-700 text-sm sm:text-base filter blur-[3px] select-none">
                    {testimonial.author}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 italic">Verified Google Review</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
