import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
interface TeamMember {
  name: string;
  title: string;
  subtitle?: string;
  bio: string;
  expertise?: string[];
  image: string;
}
interface TeamSectionProps {
  teamMembers: TeamMember[];
}
const TeamSection = ({
  teamMembers
}: TeamSectionProps) => {
  // Categorize team members with updated organization
  const psychiatrists = teamMembers.slice(0, 3);
  const clinicalPsychologists = teamMembers.slice(3, 6);
  const licensedMentalHealthTherapists = teamMembers.slice(6, 8); // M.Phil holders - Lintamol, Princy
  const psychologistsCounsellors = teamMembers.slice(8, 9);
  const patientCounsellors = teamMembers.slice(9, 10);
  const mentalHealthNurses = teamMembers.slice(10); // Mental Health Nurses and Care Assistants

  const renderTeamMember = (member: TeamMember, index: number) => <Card key={index} className="max-w-4xl mx-auto overflow-hidden shadow-lg mb-6 md:mb-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 flex-shrink-0">
          <div className="h-64 sm:h-72 md:h-64 overflow-hidden bg-gray-100">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" loading="lazy" />
          </div>
        </div>
        <div className="w-full md:w-3/4 p-4 md:p-6">
          <CardHeader className="p-0 mb-3 md:mb-4">
            <CardTitle className="text-lg md:text-xl font-montserrat text-forest-600 mb-1">
              {member.name}
            </CardTitle>
            <CardDescription className="text-sage-600 font-semibold text-sm md:text-base mb-1">
              {member.title}
            </CardDescription>
            {member.subtitle && <CardDescription className="text-forest-500 font-medium text-xs md:text-sm">
                {member.subtitle}
              </CardDescription>}
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 text-xs md:text-sm">
              {member.bio}
            </p>
            {member.expertise && <div>
                <h4 className="font-semibold text-forest-600 mb-2 text-xs md:text-sm">Areas of Clinical Expertise:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-xs text-gray-600">
                  {member.expertise.map((area, expertiseIndex) => <li key={expertiseIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></div>
                      <span className="flex-1">{area}</span>
                    </li>)}
                </ul>
              </div>}
          </CardContent>
        </div>
      </div>
    </Card>;
  const renderCategorySection = (title: string, members: TeamMember[]) => <div className="mb-8 md:mb-12">
      <div className="text-center mb-4 md:mb-6">
        
        <div className="w-12 md:w-16 h-1 bg-sage-500 mx-auto"></div>
      </div>
      <div className="space-y-4 md:space-y-8">
        {members.map((member, index) => renderTeamMember(member, index))}
      </div>
    </div>;
  return <section className="py-12 md:py-16 px-4 bg-sand-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-forest-600 mb-4 font-montserrat">Our Expert Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Meet our dedicated professionals committed to your mental health journey
          </p>
        </div>
        
        {/* Psychiatrists */}
        {renderCategorySection("Consultant Psychiatrists", psychiatrists)}
        
        {/* Clinical Psychologists */}
        {renderCategorySection("Clinical Psychologists", clinicalPsychologists)}
        
        {/* Licensed Mental Health/Rehabilitation Therapists */}
        {renderCategorySection("Licensed Mental Health / Rehabilitation Therapists", licensedMentalHealthTherapists)}
        
        {/* Psychologists/Counsellors */}
        {renderCategorySection("Psychologists & Counsellors", psychologistsCounsellors)}
        
        {/* Patient Counsellors - Mental Health */}
        {renderCategorySection("Patient Counsellors - Mental Health", patientCounsellors)}
        
        {/* Mental Health Nurses and Care Assistants */}
        {renderCategorySection("Mental Health Nurses & Care Assistants", mentalHealthNurses)}
      </div>
    </section>;
};
export default TeamSection;