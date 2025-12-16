
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const MentalHealthCrisisSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-forest-600 mb-4 font-montserrat">The Mental Health Crisis in India</h2>
          <p className="text-gray-600">Understanding the urgency of accessible mental healthcare</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold text-red-600 mb-2">197 Million</h3>
              <p className="text-gray-700">Indians suffering from mental health disorders</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">0.3 per 100,000</h3>
              <p className="text-gray-700">Psychiatrists available in India vs WHO recommended 3 per 100,000</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold text-yellow-600 mb-2">70%</h3>
              <p className="text-gray-700">Of people with mental health issues don't seek treatment</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold text-green-600 mb-2">2.5%</h3>
              <p className="text-gray-700">Of India's health budget allocated to mental health</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            At Mindful Rejuvenation, we're bridging this critical gap by providing accessible, professional mental health care 
            across Kerala. <strong>Every life matters, every mind deserves care.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthCrisisSection;
