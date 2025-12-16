
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Clock, ClipboardList, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const DailySchedule = () => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const schedule = [
    { activity: "Morning Wake Up", time: "6:00 AM - 7:00 AM" },
    { activity: "Yoga/Meditation", time: "6:30 AM" },
    { activity: "Reading and Discussion", time: "7:30 AM" },
    { activity: "Morning Assessment", time: "8:00 AM" },
    { activity: "MSC Evaluation", time: "9:00 AM" },
    { activity: "Cognitive Activities", time: "10:00 AM" },
    { activity: "Group Sessions", time: "11:00 AM" },
    { activity: "Individual Therapy Sessions", time: "2:00 PM" },
    { activity: "Wellness Programs", time: "3:00 PM" },
    { activity: "Fitness Programs", time: "4:00 PM" },
    { activity: "Art/Music Therapy", time: "5:00 PM" },
    { activity: "Evening Review", time: "6:00 PM" },
    { activity: "TV/Entertainment", time: "7:00 PM" },
    { activity: "Indoor Games", time: "8:00 PM" }
  ];

  const assessments = [
    "Daily mood and behavior monitoring",
    "Weekly psychiatric evaluations",
    "Cognitive and functional assessments",
    "Sleep and appetite tracking",
    "Family progress updates every 3 days",
    "Medication response monitoring",
    "Discharge readiness evaluations"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-sage-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-forest-600 mb-4 font-montserrat">
            Daily Treatment Schedule & Regular Monitoring
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">ദൈനംദിന ചികിത്സാ പരിപാടിയും നിരന്തര നിരീക്ഷണവും</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Daily Treatment Schedule */}
          <Card className="shadow-xl bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="bg-gradient-to-r from-forest-600 to-sage-600 text-white rounded-t-lg">
              <CardTitle className="text-xl lg:text-2xl flex items-center gap-3">
                <Clock className="h-5 w-5 lg:h-6 lg:w-6" />
                Daily Treatment Schedule
              </CardTitle>
              <p className="text-sage-100 text-sm lg:text-base">ദൈനംദിന ചികിത്സാ പരിപാടി</p>
            </CardHeader>
            <CardContent className="p-6 lg:p-8">
              <div className="space-y-3 lg:space-y-4">
                {schedule.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-sage-50 rounded-xl">
                    <span className="font-medium text-forest-600 text-sm lg:text-base">{item.activity}</span>
                    <span className="text-gray-600 font-semibold text-sm lg:text-base">{item.time}</span>
                  </div>
                ))}
              </div>
              
              <Collapsible open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
                <CollapsibleContent className="mt-4">
                  <div className="space-y-3 lg:space-y-4">
                    {schedule.slice(2).map((item, index) => (
                      <div key={index + 2} className="flex justify-between items-center p-3 bg-sage-50 rounded-xl">
                        <span className="font-medium text-forest-600 text-sm lg:text-base">{item.activity}</span>
                        <span className="text-gray-600 font-semibold text-sm lg:text-base">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
                
                <div className="mt-6 text-center">
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="border-forest-600 text-forest-600 hover:bg-forest-50"
                    >
                      {isScheduleOpen ? "Show Less" : "View Complete Schedule"}
                      {isScheduleOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                    </Button>
                  </CollapsibleTrigger>
                </div>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Assessment Image */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/642e0f6b-577c-4d25-9079-fdff101c7be8.png" 
              alt="Professional psychiatric consultation with patient" 
              className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Regular Assessments & Monitoring */}
          <Card className="shadow-xl bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="bg-gradient-to-r from-forest-600 to-sage-600 text-white rounded-t-lg">
              <CardTitle className="text-xl lg:text-2xl flex items-center gap-3">
                <ClipboardList className="h-5 w-5 lg:h-6 lg:w-6" />
                Regular Assessments & Monitoring
              </CardTitle>
              <p className="text-sage-100 text-sm lg:text-base">നിരന്തര വിലയിരുത്തലും നിരീക്ഷണവും</p>
            </CardHeader>
            <CardContent className="p-6 lg:p-8">
              <div className="space-y-3 lg:space-y-4">
                {assessments.map((assessment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-forest-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm lg:text-base">{assessment}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DailySchedule;
