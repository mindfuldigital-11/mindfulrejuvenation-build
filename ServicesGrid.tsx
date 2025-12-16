import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Users, 
  Heart, 
  Shield, 
  Pill, 
  Cross, 
  Hand, 
  Ambulance,
  Star,
  Phone,
  MessageCircle,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Psychiatric Consultation",
    description: "Expert psychiatric assessment and care planning",
    link: "/psychiatry-services-kochi#consultation"
  },
  {
    icon: Users,
    title: "OP Psychiatry Services",
    description: "Outpatient psychiatric care and follow-up",
    link: "/psychiatry-services-kochi#outpatient"
  },
  {
    icon: Star,
    title: "Psychiatry Admissions",
    description: "24/7 inpatient psychiatric care facility",
    link: "/psychiatry-services-kochi#inpatient"
  },
  {
    icon: Phone,
    title: "Telepsychiatry Support",
    description: "Online psychiatric consultations",
    link: "/psychiatry-services-kochi#telepsychiatry"
  },
  {
    icon: MessageCircle,
    title: "Counselling & Therapy",
    description: "Individual and group therapy sessions",
    link: "/counselling-psychotherapy-kochi"
  },
  {
    icon: Heart,
    title: "Rehabilitation Programs",
    description: "Comprehensive mental health rehabilitation",
    link: "/psychiatry-services-kochi#rehabilitation"
  },
  {
    icon: Shield,
    title: "Dementia Care Support",
    description: "Specialized dementia and memory care",
    link: "/dementia-care-kochi"
  },
  {
    icon: Pill,
    title: "Depression Care",
    description: "Evidence-based depression support",
    link: "/psychiatry-services-kochi#depression"
  },
  {
    icon: Cross,
    title: "Anxiety Disorder Care",
    description: "Comprehensive anxiety support programs",
    link: "/psychiatry-services-kochi#anxiety"
  },
  {
    icon: Hand,
    title: "Bipolar Disorder Care",
    description: "Mood stabilization and management",
    link: "/psychiatry-services-kochi#bipolar"
  },
  {
    icon: Brain,
    title: "Schizophrenia Care",
    description: "Specialized psychosis support",
    link: "/psychiatry-services-kochi#schizophrenia"
  },
  {
    icon: Shield,
    title: "OCD Support",
    description: "Obsessive-compulsive disorder therapy",
    link: "/psychiatry-services-kochi#ocd"
  },
  {
    icon: Heart,
    title: "PTSD Counselling",
    description: "Trauma-focused therapy and support",
    link: "/counselling-psychotherapy-kochi#ptsd"
  },
  {
    icon: Ambulance,
    title: "24/7 Emergency Care",
    description: "Round-the-clock crisis intervention",
    link: "/contact#emergency"
  }
];

export const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Link key={index} to={service.link}>
            <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-gradient-to-br from-forest-50 to-sage-50 rounded-full group-hover:from-forest-100 group-hover:to-sage-100 transition-colors">
                    <Icon className="h-8 w-8 text-forest-600" />
                  </div>
                </div>
                <h3 className="font-bold text-forest-600 mb-2 text-base">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{service.description}</p>
                <div className="flex items-center justify-center text-sage-600 text-sm font-medium group-hover:text-forest-600 transition-colors">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
