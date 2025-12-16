
import React from 'react';
import { Award } from "lucide-react";

const LicensedFacilitySection = () => {
  return (
    <section className="py-16 px-4 bg-forest-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-forest-600 mb-8 font-montserrat">Licensed Mental Health Facility</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-l-sage-500">
            <Award className="h-12 w-12 text-sage-600 mx-auto mb-4" />
            <p className="text-lg text-gray-700 mb-4">
              Mindful Rejuvenation is a <strong>licensed mental health facility</strong> operating under the 
              <strong> Kerala State Mental Health Authority (KSMHA)</strong>, ensuring the highest standards 
              of care and regulatory compliance.
            </p>
            <p className="text-gray-600">
              Our license guarantees ethical practices, qualified professionals, and adherence to all 
              state mental health regulations for your safety and wellbeing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensedFacilitySection;
