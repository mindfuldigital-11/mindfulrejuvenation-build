
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Heart, Shield, Activity, Users, MessageSquare } from "lucide-react";

const CareTeam = () => {
  const teamMembers = [
    {
      role: "Psychiatrist",
      malayalam: "മാനസികരോഗ വിദഗ്ധൻ",
      description: "Daily rounds, medication management, and treatment planning",
      icon: Stethoscope,
      color: "bg-blue-100 text-blue-600"
    },
    {
      role: "Clinical Psychologist",
      malayalam: "ക്ലിനിക്കൽ സൈക്കോളജിസ്റ്റ്",
      description: "Individual therapy, assessments, and psychoeducation",
      icon: Heart,
      color: "bg-green-100 text-green-600"
    },
    {
      role: "Ward Nurses",
      malayalam: "വാർഡ് നഴ്സുമാർ",
      description: "24/7 monitoring, medication administration, and daily care",
      icon: Shield,
      color: "bg-purple-100 text-purple-600"
    },
    {
      role: "Occupational Therapist",
      malayalam: "ഒക്യുപേഷണൽ തെറാപ്പിസ്റ്റ്",
      description: "Daily living skills, vocational training, and functional assessments",
      icon: Activity,
      color: "bg-amber-100 text-amber-600"
    },
    {
      role: "Social Worker",
      malayalam: "സോഷ്യൽ വർക്കർ",
      description: "Family support, discharge planning, and community resources",
      icon: Users,
      color: "bg-red-100 text-red-600"
    },
    {
      role: "Professional Counsellor",
      malayalam: "പ്രൊഫഷണൽ കൗൺസിലർ",
      description: "Regular family updates, communication support, and family counselling",
      icon: MessageSquare,
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sage-50 to-forest-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-forest-600 mb-4 font-montserrat">
            Your Dedicated Care Team
          </h2>
          <p className="text-xl text-gray-600">നിങ്ങളുടെ സമർപ്പിത പരിചരണ ടീം</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${member.color}`}>
                  <member.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-forest-600 mb-2">{member.role}</h3>
                <p className="text-sage-600 font-medium mb-4">{member.malayalam}</p>
                <p className="text-gray-700 leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareTeam;
