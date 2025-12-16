
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MissionVisionSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-sage-500">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat text-forest-600">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Mindful Rejuvenation Healthcare Pvt Ltd is a leading mental health center in Kochi, Kerala. We provide comprehensive psychiatric care, recovery support, 
                dementia care, and rehabilitation services at our Karukutty, Angamaly facility, Vaduthala, Kochi facility, and Kaloor, Kochi facility.
                Expert psychiatrists, psychologists, and therapy specialists delivering personalized care.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-forest-500">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat text-forest-600">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To be Kerala's premier mental health destination, setting standards in psychiatric care, recovery support, 
                and rehabilitation services. We aim to eliminate mental health stigma while providing accessible, world-class 
                care throughout Kochi, Ernakulam, and surrounding areas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
