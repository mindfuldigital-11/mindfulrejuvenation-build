import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import { 
  Briefcase, 
  Users, 
  Heart, 
  TrendingUp, 
  GraduationCap, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Mail,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { buildWhatsAppUrl, getBestWhatsAppLink } from "@/lib/whatsapp";

// WhatsApp helpers moved to shared lib

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    qualification: "",
    coverLetter: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.position) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let resumeUrl = null;

      // Upload resume if provided
      if (resumeFile) {
        const fileExt = resumeFile.name.split('.').pop();
        const fileName = `${crypto.randomUUID()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(filePath, resumeFile, {
            cacheControl: '3600',
            upsert: false
          });

        if (uploadError) {
          throw new Error('Failed to upload resume');
        }

        resumeUrl = filePath;
      }

      // Save to database
      const { error } = await supabase
        .from('career_applications')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            position: formData.position,
            experience: formData.experience,
            qualification: formData.qualification,
            cover_letter: formData.coverLetter,
            resume_url: resumeUrl,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        qualification: "",
        coverLetter: "",
      });
      setResumeFile(null);
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or send your resume via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openPositions = [
    {
      title: "Psychiatrist",
      type: "Full-time",
      location: "Kochi, Kerala",
      description: "Join our team of mental health professionals providing compassionate psychiatric care.",
      requirements: ["MBBS with MD/DNB Psychiatry", "Valid medical license", "2+ years experience preferred"],
    },
    {
      title: "Clinical Psychologist",
      type: "Full-time",
      location: "Kochi, Kerala",
      description: "Provide psychological assessments, therapy, and counseling to patients.",
      requirements: ["M.Phil/PhD in Clinical Psychology", "RCI registration", "Experience in CBT/DBT preferred"],
    },
    {
      title: "Psychiatric Nurse",
      type: "Full-time",
      location: "Kochi, Kerala",
      description: "Provide nursing care to patients with mental health conditions.",
      requirements: ["B.Sc/GNM Nursing", "Valid nursing license", "Experience in psychiatric nursing"],
    },
    {
      title: "Counselor / Therapist",
      type: "Full-time/Part-time",
      location: "Kochi, Kerala",
      description: "Provide individual and group counseling sessions.",
      requirements: ["MA in Psychology/Counseling", "2+ years counseling experience", "Knowledge of various therapy modalities"],
    },
    {
      title: "Social Worker",
      type: "Full-time",
      location: "Kochi, Kerala",
      description: "Support patients and families with social services and community resources.",
      requirements: ["MSW degree", "Experience in healthcare setting", "Knowledge of Kerala social services"],
    },
    {
      title: "Medical Intern",
      type: "Internship",
      location: "Kochi, Kerala",
      description: "Gain hands-on experience in psychiatric and mental health care.",
      requirements: ["Currently pursuing/completed MBBS", "Interest in psychiatry", "6-12 month commitment"],
    },
    {
      title: "MSW Intern - Psychiatric Social Work",
      type: "Internship",
      location: "Kochi, Kerala",
      description: "Practical training in psychiatric social work and mental health interventions.",
      requirements: ["Currently pursuing/completed MSW", "Interest in mental health", "3-6 month commitment"],
    },
    {
      title: "MSc Psychology Intern",
      type: "Internship",
      location: "Kochi, Kerala",
      description: "Applied psychology internship with exposure to clinical settings.",
      requirements: ["Currently pursuing MSc Psychology", "Basic counseling skills", "3-6 month commitment"],
    },
    {
      title: "Clinical Psychology Intern",
      type: "Internship",
      location: "Kochi, Kerala",
      description: "Clinical training in psychological assessment and therapeutic interventions.",
      requirements: ["M.Phil/PhD Clinical Psychology student", "Knowledge of psychometric tests", "6-12 month commitment"],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Meaningful Work",
      description: "Make a real difference in people's mental health and well-being",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Professional development opportunities and continuous learning",
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Work with experienced mental health professionals",
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Access to workshops, certifications, and skill development",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-sand-50 pt-[72px]">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-forest-700 via-forest-600 to-sage-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 px-4 py-2">
            Join Our Team
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
            Build Your Career in Mental Healthcare
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Join Kerala's leading mental health institution and make a meaningful impact in people's lives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-forest-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Send className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10"
            >
              <a 
                href={buildWhatsAppUrl("Hi! I want to apply for a position at Mindful Rejuvenation. I'll send my resume and cover letter.")}
                onClick={(e) => {
                  e.preventDefault();
                  const url = getBestWhatsAppLink("Hi! I want to apply for a position at Mindful Rejuvenation. I'll send my resume and cover letter.");
                  console.info("[WhatsApp] navigating to", url);
                  window.location.href = url;
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Resume via WhatsApp
              </a>
            </Button>
          </div>
          <p className="text-sm text-white/80 text-center mt-4">
            If WhatsApp doesn't open, <a className="underline hover:text-white" href={buildWhatsAppUrl()} onClick={(e) => { e.preventDefault(); const url = getBestWhatsAppLink(); console.info("[WhatsApp] navigating to", url); window.location.href = url; }}>tap here</a>
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-600 mb-4 font-montserrat">
              Why Work With Us?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Be part of a compassionate team dedicated to transforming mental healthcare in Kerala
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 bg-gradient-to-br from-sage-50 to-forest-50 rounded-full">
                        <Icon className="h-8 w-8 text-forest-600" />
                      </div>
                    </div>
                    <h3 className="font-bold text-forest-600 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-sage-50 to-sand-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-600 mb-4 font-montserrat">
              Open Positions
            </h2>
            <p className="text-gray-600 text-lg">
              Explore career opportunities and internships at Mindful Rejuvenation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={position.type === "Internship" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}>
                      {position.type}
                    </Badge>
                    <Briefcase className="h-5 w-5 text-forest-600" />
                  </div>
                  <CardTitle className="text-forest-600 font-montserrat">{position.title}</CardTitle>
                  <CardDescription className="flex items-center text-gray-600 mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {position.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-forest-600 mb-2 text-sm">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-sage-600 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="w-full bg-sage-600 hover:bg-sage-700"
                    onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Apply for this Position
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-3xl">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-forest-600 to-sage-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-montserrat">Application Form</CardTitle>
              <CardDescription className="text-gray-100">
                Fill out the form below or send your resume directly via WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 90378 99299"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applied For *</Label>
                    <Select onValueChange={(value) => handleSelectChange('position', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        {openPositions.map((position, index) => (
                          <SelectItem key={index} value={position.title}>
                            {position.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="e.g., 5 years"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="qualification">Highest Qualification</Label>
                    <Input
                      id="qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      placeholder="e.g., MBBS, MD, M.Phil"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Upload Resume (PDF, DOC, DOCX - Max 5MB)</Label>
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        if (file.size > 5 * 1024 * 1024) {
                          toast({
                            title: "File Too Large",
                            description: "Resume must be less than 5MB",
                            variant: "destructive",
                          });
                          e.target.value = '';
                          return;
                        }
                        setResumeFile(file);
                      }
                    }}
                    className="cursor-pointer"
                  />
                  {resumeFile && (
                    <p className="text-sm text-sage-600">
                      Selected: {resumeFile.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter / Why do you want to join us?</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself and why you'd be a great fit..."
                    rows={6}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-forest-600 hover:bg-forest-700"
                    disabled={isSubmitting}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                  <Button 
                    asChild
                    type="button"
                    variant="outline"
                    className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-50"
                  >
                    <a
                      href={buildWhatsAppUrl("Hi! I want to apply for a position at Mindful Rejuvenation. I'll send my resume and cover letter.")}
                      onClick={(e) => {
                        e.preventDefault();
                        const url = getBestWhatsAppLink("Hi! I want to apply for a position at Mindful Rejuvenation. I'll send my resume and cover letter.");
                        console.info("[WhatsApp] navigating to", url);
                        window.location.href = url;
                      }}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Send via WhatsApp
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  If WhatsApp doesn't open, <a className="text-forest-600 underline hover:text-forest-700" href={buildWhatsAppUrl()} onClick={(e) => { e.preventDefault(); const url = getBestWhatsAppLink(); console.info("[WhatsApp] navigating to", url); window.location.href = url; }}>tap here</a>
                </p>

                <p className="text-sm text-gray-500 text-center">
                  Applications will be sent to: <strong>mindfulrejuvenation@gmail.com</strong>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-sage-100 to-sand-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-forest-600 mb-4 font-montserrat">
            Have Questions About Careers?
          </h3>
          <p className="text-gray-600 mb-6">
            Reach out to our HR team for any queries about positions, internships, or the application process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:hr@mindfulrejuvenation.in" className="flex items-center text-forest-600 hover:text-forest-700 font-medium">
              <Mail className="mr-2 h-5 w-5" />
              hr@mindfulrejuvenation.in
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a href="mailto:mindfulrejuvenation@gmail.com" className="flex items-center text-forest-600 hover:text-forest-700 font-medium">
              <Mail className="mr-2 h-5 w-5" />
              mindfulrejuvenation@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Careers;
