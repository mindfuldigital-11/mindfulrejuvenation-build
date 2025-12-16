import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Award, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Patients Treated", color: "text-forest-600" },
  { icon: Clock, value: "24/7", label: "Emergency Care", color: "text-sage-600" },
  { icon: Award, value: "15+", label: "Years Experience", color: "text-forest-600" },
  { icon: Heart, value: "100%", label: "Confidential Care", color: "text-sage-600" }
];

export const StatsSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-sage-50 to-forest-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <Icon className={`h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-2 sm:mb-3 ${stat.color}`} />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
