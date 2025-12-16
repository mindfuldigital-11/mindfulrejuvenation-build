
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Brain, Users, Building, Video } from "lucide-react";

const CoreServices = () => {
  const coreServices = [
    {
      title: "Psychiatric Consultation",
      description: "In-depth clinical evaluation to accurately diagnose mental health conditions. Personalized care plans include medication management, laboratory referrals, and ongoing monitoring.",
      icon: Brain,
      malayalam: "മാനസികരോഗ കൺസൾട്ടേഷൻ",
      features: ["Clinical evaluation", "Personalized care plans", "Medication management", "Laboratory referrals", "Ongoing monitoring"]
    },
    {
      title: "Outpatient Therapy",
      description: "Individual, family, and group counseling using evidence-based modalities such as Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Trauma-Focused Therapy.",
      icon: Users,
      malayalam: "ഔട്ട്പേഷ്യന്റ് തെറാപ്പി",
      features: ["Individual counseling", "Family therapy", "Group counseling", "CBT & DBT", "Trauma-focused therapy"]
    },
    {
      title: "Inpatient Psychiatric Admissions",
      description: "Short-term, structured stays for acute crises, ensuring safety, stabilization, and intensive support. Includes 24/7 nursing care, daily psychiatry rounds, and group therapy sessions.",
      icon: Building,
      malayalam: "ഇൻപേഷ്യന്റ് സൈക്യാട്രിക് അഡ്മിഷൻ",
      features: ["Acute crisis management", "Safety & stabilization", "24/7 nursing care", "Daily psychiatry rounds", "Group therapy sessions"]
    },
    {
      title: "Telepsychiatry Services",
      description: "Secure, HIPAA-compliant virtual consultations for individuals who cannot visit in person—ideal for remote areas or mobility challenges. All core services available via telehealth.",
      icon: Video,
      malayalam: "ടെലിസൈക്യാട്രി സേവനങ്ങൾ",
      features: ["Virtual consultations", "HIPAA-compliant", "Remote accessibility", "Mobility-friendly", "Full telehealth services"]
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-sage-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-600 mb-4 font-montserrat">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 mb-2">ഞങ്ങളുടെ പ്രധാന സേവനങ്ങൾ</p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health services designed to provide personalized care at every step of your journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {coreServices.map((service, index) => (
            <Card key={index} className="group shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-sage-50 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-forest-500/5 to-sage-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="text-center relative z-10 pb-4">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-forest-100 to-sage-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-10 w-10 text-forest-600" />
                  </div>
                </div>
                <CardTitle className="text-xl text-forest-600 mb-2 group-hover:text-forest-700 transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-sm text-sage-600 font-medium mb-3">{service.malayalam}</p>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-center text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
