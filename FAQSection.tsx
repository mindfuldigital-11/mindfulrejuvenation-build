import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export const FAQSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-forest-50 to-sage-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-3 sm:mb-4 font-montserrat">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Get answers to common questions about our mental health services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-md px-4 sm:px-6 border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-forest-700 hover:text-forest-900 text-sm sm:text-base py-3 sm:py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base leading-relaxed pb-3 sm:pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
