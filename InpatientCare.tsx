
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, UserPlus, Activity } from "lucide-react";
import CareProgram from "./CareProgram";

const InpatientCare = () => {
  const inpatientFeatures = [
    {
      title: "24/7 Care",
      description: "Round-the-clock nursing care and psychiatric supervision",
      icon: Clock,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Affordable",
      description: "Transparent pricing with flexible payment options and insurance acceptance",
      icon: CheckCircle,
      color: "bg-blue-100 text-blue-600"
    },
      {
        title: "Personalized",
        description: "Individualized care plans tailored to each patient's specific needs",
        icon: UserPlus,
        color: "bg-amber-100 text-amber-600"
      },
    {
      title: "Regular Updates",
      description: "Dedicated counselors provide daily progress updates to patients and families",
      icon: Activity,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const inpatientIncludes = [
    "Daily psychiatric consultations - ദിവസേന മാനസികരോഗ വിദഗ്ധന്റെ കൂടിയാലോചന",
    "Individual and group therapy sessions - വ്യക്തിഗതവും ഗ്രൂപ്പ് തെറാപ്പി സെഷനുകൾ",
    "Medication management and monitoring - മരുന്ന് മാനേജ്മെൻറും നിരീക്ഷണവും",
    "Nutritious meals and dietary counseling - പോഷകാഹാരവും ഭക്ഷണ കൗൺസിലിംഗും",
    "Recreational and wellness activities - വിനോദ പ്രവർത്തനങ്ങളും വെൽനെസ് പ്രവർത്തനങ്ങളും",
    "Family education and support - കുടുംബ വിദ്യാഭ്യാസവും പിന്തുണയും",
    "Discharge planning and aftercare coordination - ഡിസ്ചാർജ് പ്ലാനിംഗും ആഫ്റ്റർകെയർ കോർഡിനേഷനും",
    "24/7 counselor availability for progress updates - പുരോഗതി അപ്ഡേറ്റുകൾക്കായി 24/7 കൗൺസിലർ ലഭ്യത"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-sage-50 to-forest-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-600 mb-4 font-montserrat">
            Affordable, Personalized Inpatient Care
          </h2>
          <p className="text-xl text-gray-600 mb-8">മിതമായ നിരക്കിൽ വ്യക്തിഗത കിടത്തി പരിചരണം</p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {inpatientFeatures.map((feature, index) => (
            <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-forest-600 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Care Program */}
        <CareProgram />

        {/* What's Included */}
        <Card className="shadow-2xl bg-gradient-to-br from-white to-forest-50 mb-16">
          <CardHeader className="text-center bg-gradient-to-r from-forest-600 to-sage-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold">What's Included in Inpatient Care:</CardTitle>
            <p className="text-xl text-sage-100">കിടത്തി ചികിത്സയിൽ ഉൾപ്പെടുന്നവ:</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inpatientIncludes.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-forest-600 to-sage-600 hover:from-forest-700 hover:to-sage-700 text-white px-8 py-4 text-lg"
              >
                Learn About Admission Process
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InpatientCare;
