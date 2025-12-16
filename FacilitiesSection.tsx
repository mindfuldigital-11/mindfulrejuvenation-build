
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const FacilitiesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-forest-600 mb-4 font-montserrat">Our Facilities</h2>
          <p className="text-gray-600">State-of-the-art facilities designed for comfort and healing</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <div className="h-48 bg-sage-200">
              <img src="/placeholder.svg" alt="Private Counseling Room" className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-forest-600">Private Counseling Room</h3>
              <p className="text-sm text-gray-600">Comfortable, confidential spaces for therapy sessions</p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-48 bg-sage-200">
              <img src="/placeholder.svg" alt="Group Therapy Space" className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-forest-600">Group Therapy Space</h3>
              <p className="text-sm text-gray-600">Open, welcoming areas for group sessions and activities</p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-48 bg-sage-200">
              <img src="/placeholder.svg" alt="Memory Clinic" className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-forest-600">Memory Clinic</h3>
              <p className="text-sm text-gray-600">Specialized facility for cognitive assessments</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
