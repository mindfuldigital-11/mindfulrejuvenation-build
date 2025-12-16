
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Target, Brain, Heart, Users, Sparkles } from "lucide-react";
import { useState } from "react";

const CareProgram = () => {
  const [isOpen, setIsOpen] = useState(false);

  const programPhases = [
    {
      phase: 1,
      title: "Comprehensive Assessment",
      malayalam: "സമഗ്ര വിലയിരുത്തൽ",
      description: "In-depth psychiatric, psychological, and medical evaluation to create your personalized treatment roadmap",
      color: "border-blue-500",
      icon: Target
    },
    {
      phase: 2,
      title: "Symptom Stabilization",
      malayalam: "ലക്ഷണ സ്ഥിരീകരണം",
      description: "Evidence-based medication management and crisis intervention for immediate symptom relief",
      color: "border-green-500",
      icon: Brain
    },
    {
      phase: 3,
      title: "Active Therapy & Skills",
      malayalam: "സജീവ ചികിത്സയും കഴിവുകളും",
      description: "Individual and group therapy using CBT, DBT, and other evidence-based therapeutic modalities",
      color: "border-amber-500",
      icon: Heart
    },
    {
      phase: 4,
      title: "Functional Recovery",
      malayalam: "പ്രവർത്തനപരമായ വീണ്ടെടുക്കൽ",
      description: "Life skills training, family therapy, and community reintegration preparation",
      color: "border-purple-500",
      icon: Users
    },
    {
      phase: 5,
      title: "Aftercare Planning",
      malayalam: "പരിചരണാനന്തര ആസൂത്രണം",
      description: "Comprehensive discharge plan with ongoing support and relapse prevention strategies",
      color: "border-forest-500",
      icon: Sparkles
    }
  ];

  const handleAdmissionCall = () => {
    window.open('tel:+917306150312', '_self');
  };

  const firstPhase = programPhases[0];
  const remainingPhases = programPhases.slice(1);

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl lg:text-4xl font-bold text-forest-600 mb-3 font-montserrat">
          Customizable Personalized Rehabilitation Programs
        </h3>
        <p className="text-lg text-gray-600 mb-2">
          കസ്റ്റമൈസ് ചെയ്യാവുന്ന വ്യക്തിഗത പുനരധിവാസ പരിപാടികൾ
        </p>
        <p className="text-base text-sage-600 max-w-3xl mx-auto">
          Scientific & Evidence-Based Pathways Tailored to Your Unique Needs
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
        <Card className="bg-gradient-to-br from-sage-50 to-white border-forest-200">
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 text-forest-600 mx-auto mb-3" />
            <h4 className="font-semibold text-forest-600 mb-2">Individualized Plans</h4>
            <p className="text-sm text-gray-600">Duration and intensity customized to your condition and progress</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-sage-50 to-white border-forest-200">
          <CardContent className="p-6 text-center">
            <Brain className="h-8 w-8 text-forest-600 mx-auto mb-3" />
            <h4 className="font-semibold text-forest-600 mb-2">Evidence-Based</h4>
            <p className="text-sm text-gray-600">Scientifically proven therapeutic interventions and protocols</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-sage-50 to-white border-forest-200">
          <CardContent className="p-6 text-center">
            <Heart className="h-8 w-8 text-forest-600 mx-auto mb-3" />
            <h4 className="font-semibold text-forest-600 mb-2">Flexible Duration</h4>
            <p className="text-sm text-gray-600">Programs ranging from 14 days to 90+ days based on clinical needs</p>
          </CardContent>
        </Card>
      </div>

      {/* Treatment Phases */}
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-forest-600 mb-6">5-Phase Recovery Framework</h4>
        
        {/* First Phase - Always Visible */}
        <div className="max-w-md mx-auto mb-8">
          <Card className={`shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-l-4 ${firstPhase.color}`}>
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-forest-600 to-sage-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <firstPhase.icon className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-forest-600 mb-2">{firstPhase.title}</h4>
              <p className="text-sm text-sage-600 font-medium mb-3">{firstPhase.malayalam}</p>
              <p className="text-sm text-gray-700">{firstPhase.description}</p>
            </CardContent>
          </Card>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="mb-6">
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                className="border-forest-600 text-forest-600 hover:bg-forest-50"
              >
                {isOpen ? "Show Less" : "View All 5 Phases"}
                {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-7xl mx-auto">
              {remainingPhases.map((phase, index) => {
                const PhaseIcon = phase.icon;
                return (
                  <Card 
                    key={index + 1} 
                    className={`shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-l-4 ${phase.color} hover:scale-105`}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-forest-600 to-sage-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <PhaseIcon className="h-7 w-7" />
                      </div>
                      <h4 className="text-lg font-bold text-forest-600 mb-2">{phase.title}</h4>
                      <p className="text-sm text-sage-600 font-medium mb-3">{phase.malayalam}</p>
                      <p className="text-sm text-gray-700">{phase.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 italic mb-6 max-w-2xl mx-auto">
                * Treatment duration and program intensity are personalized based on your diagnosis, severity, and progress. Our clinical team continuously monitors and adjusts your care plan for optimal outcomes.
              </p>
              <Button 
                size="lg"
                onClick={handleAdmissionCall}
                className="bg-gradient-to-r from-forest-600 to-sage-600 hover:from-forest-700 hover:to-sage-700 text-white px-8 py-4 text-lg cursor-pointer"
              >
                Learn About Admission Process - Call +91-7306150312
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default CareProgram;
