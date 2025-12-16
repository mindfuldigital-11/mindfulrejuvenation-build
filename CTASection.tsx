
import React from 'react';
import CTAButtons from '@/components/shared/CTAButtons';

const CTASection = () => {
  return (
    <section className="py-16 px-4 bg-forest-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 font-montserrat">Ready to Begin Your Journey?</h2>
        <p className="text-xl mb-6">Contact our team today for compassionate, professional care.</p>
        <p className="text-lg mb-8 text-sage-100">
          Email: mindfulrejuvenation@gmail.com | Careers: hr@mindfulrejuvenation.in
        </p>
        <CTAButtons 
          size="lg" 
          show24x7Badge={true}
          className="justify-center"
          callNumber="+917306150312"
          whatsappNumber="+919037899299"
        />
      </div>
    </section>
  );
};

export default CTASection;
