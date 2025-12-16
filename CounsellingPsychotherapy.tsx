import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import MiniMapWidget from "@/components/shared/MiniMapWidget";
import { 
  Heart, 
  Brain, 
  Users, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle,
  MessageCircle,
  Calendar,
  Star,
  Award,
  User,
  GraduationCap
} from "lucide-react";
import { useState } from "react";

const CounsellingPsychotherapy = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferredTime: '',
    message: ''
  });

  const therapyTypes = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Evidence-based therapy for depression, anxiety, PTSD, and behavioral issues",
      benefits: ["Practical problem-solving skills", "Emotional regulation", "Thought pattern correction"],
      duration: "12-20 sessions",
      suitableFor: "Depression, anxiety, phobias, eating disorders"
    },
    {
      title: "Dialectical Behavior Therapy (DBT)",
      description: "Specialized therapy for emotional regulation and interpersonal effectiveness",
      benefits: ["Distress tolerance", "Mindfulness skills", "Interpersonal effectiveness"],
      duration: "6 months - 1 year",
      suitableFor: "Borderline personality disorder, self-harm, emotional dysregulation"
    },
    {
      title: "Psychodynamic Therapy",
      description: "Insight-oriented therapy exploring unconscious patterns and past experiences",
      benefits: ["Self-awareness", "Relationship patterns", "Root cause understanding"],
      duration: "Open-ended",
      suitableFor: "Personality disorders, relationship issues, recurring patterns"
    },
    {
      title: "Acceptance and Commitment Therapy (ACT)",
      description: "Mindfulness-based therapy focusing on psychological flexibility and values-based living",
      benefits: ["Mindfulness skills", "Value clarification", "Behavioral flexibility"],
      duration: "12-16 sessions",
      suitableFor: "Chronic pain, anxiety, depression"
    },
    {
      title: "Gestalt Therapy",
      description: "Present-focused therapy emphasizing awareness and personal responsibility",
      benefits: ["Self-awareness", "Emotional processing", "Present moment focus"],
      duration: "Variable",
      suitableFor: "Personal growth, relationship issues, trauma recovery"
    },
    {
      title: "Narrative Therapy",
      description: "Therapy that views people as separate from their problems and focuses on life stories",
      benefits: ["Reauthoring life stories", "Problem externalization", "Identity reconstruction"],
      duration: "8-15 sessions",
      suitableFor: "Identity issues, life transitions, cultural concerns"
    },
    {
      title: "Solution-Focused Brief Therapy (SFBT)",
      description: "Goal-oriented therapy focusing on solutions rather than problems",
      benefits: ["Quick results", "Goal achievement", "Resource identification"],
      duration: "3-8 sessions",
      suitableFor: "Specific goals, behavioral changes, crisis intervention"
    },
    {
      title: "Family & Couples Therapy",
      description: "Systemic approach to relationship and family dynamics",
      benefits: ["Communication skills", "Conflict resolution", "Family bonding"],
      duration: "8-16 sessions",
      suitableFor: "Marital issues, family conflicts, parenting challenges"
    },
    {
      title: "Play Therapy",
      description: "Specialized therapy for children using play as therapeutic medium",
      benefits: ["Emotional expression", "Trauma processing", "Social skills"],
      duration: "12-24 sessions",
      suitableFor: "Children with behavioral issues, trauma, developmental concerns"
    },
    {
      title: "EMDR Therapy",
      description: "Eye Movement Desensitization for trauma and PTSD recovery",
      benefits: ["Trauma processing", "Memory reprocessing", "Emotional healing"],
      duration: "6-12 sessions",
      suitableFor: "PTSD, trauma, phobias, panic disorders"
    },
    {
      title: "Mindfulness-Based Stress Reduction (MBSR)",
      description: "Structured program combining mindfulness meditation and yoga",
      benefits: ["Stress reduction", "Emotional regulation", "Physical wellness"],
      duration: "8-week program",
      suitableFor: "Chronic stress, anxiety, chronic pain, medical conditions"
    },
    {
      title: "Interpersonal Therapy (IPT)",
      description: "Structured therapy focusing on improving interpersonal relationships",
      benefits: ["Relationship skills", "Communication improvement", "Social functioning"],
      duration: "12-16 sessions",
      suitableFor: "Depression, eating disorders, relationship difficulties"
    }
  ];

  const teamMembers = [
    {
      name: "Clinical Psychologist",
      title: "Clinical Psychologist, M.Phil Clinical Psychology",
      specialization: "CBT, DBT, Trauma Therapy",
      experience: "15+ years",
      image: "/placeholder.svg"
    },
    {
      name: "Counselling Psychologist",
      title: "Counselling Psychologist, MA Psychology",
      specialization: "Family Therapy, Relationship Counselling",
      experience: "12+ years",
      image: "/placeholder.svg"
    },
    {
      name: "Child Psychologist",
      title: "Child Psychologist, M.Phil Child Psychology",
      specialization: "Play Therapy, ADHD, Autism Spectrum",
      experience: "10+ years",
      image: "/placeholder.svg"
    },
    {
      name: "Clinical Social Worker",
      title: "Licensed Clinical Social Worker",
      specialization: "Recovery Counselling, Group Therapy",
      experience: "8+ years",
      image: "/placeholder.svg"
    },
    {
      name: "Neuropsychologist",
      title: "Neuropsychologist, PhD Psychology",
      specialization: "Cognitive Assessment, Dementia Care",
      experience: "14+ years",
      image: "/placeholder.svg"
    },
    {
      name: "Marriage & Family Therapist",
      title: "Marriage & Family Therapist",
      specialization: "Couples Therapy, Pre-marital Counselling",
      experience: "9+ years",
      image: "/placeholder.svg"
    }
  ];

  const sessionInfo = [
    {
      type: "Individual Counselling",
      duration: "30-60 minutes",
      price: "₹500 - ₹800",
      description: "One-on-one therapy sessions tailored to your needs"
    },
    {
      type: "Couples Therapy", 
      duration: "60 minutes",
      price: "₹1500 - ₹2000",
      description: "Joint sessions for relationship and marital issues"
    },
    {
      type: "Family Therapy",
      duration: "60-90 minutes",
      price: "Starting at ₹1800",
      description: "Multi-member family sessions for systemic issues"
    },
    {
      type: "Group Therapy",
      duration: "90 minutes",
      price: "Starting at ₹500",
      description: "Peer support groups for shared experiences"
    },
    {
      type: "Child Therapy",
      duration: "45 minutes",
      price: "₹600 - ₹800",
      description: "Age-appropriate therapy for children and adolescents"
    },
    {
      type: "Online Counselling",
      duration: "30 minutes",
      price: "Starting at ₹700",
      description: "Secure video sessions from comfort of your home"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const whatsappNumber = "919037899299";
  const whatsappMessage = "Hi, I would like to book a counselling session at Mindful Rejuvenation.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sand-50 pt-[72px]">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 bg-gradient-to-r from-forest-600 to-sage-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-sage-100 text-sage-800 hover:bg-sage-100">
            Professional Counselling & Psychotherapy in Kochi
          </Badge>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-montserrat leading-tight">
            Counselling & Psychotherapy Services in Kerala
          </h1>
          <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
            Expert counselling services, psychotherapy sessions, clinical psychology, behavioral therapy, 
            cognitive therapy, family counselling, marriage therapy, child psychology, adolescent counselling, 
            trauma therapy, grief counselling, stress management, relationship counselling in Kochi, Kerala. 
            Sessions starting at ₹800 with experienced clinical psychologists and licensed therapists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-forest-600 hover:bg-sand-100">
              Book a Session
            </Button>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_top"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-600">
                WhatsApp Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Therapy Types Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-600 mb-4 font-montserrat">
              Types of Therapy & Counselling Available
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of evidence-based therapeutic approaches tailored to your specific needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {therapyTypes.map((therapy, index) => (
              <Card 
                key={index} 
                id={index === 0 ? "ptsd" : undefined}
                className="hover:shadow-lg transition-shadow border-l-4 border-l-sage-600 scroll-mt-24"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-forest-600">{therapy.title}</CardTitle>
                  <CardDescription>{therapy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-forest-600 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {therapy.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-sage-600 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span><strong>Duration:</strong> {therapy.duration}</span>
                      <span><strong>Best for:</strong> {therapy.suitableFor}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Sessions Work */}
      <section className="py-16 px-4 bg-sage-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-600 mb-4 font-montserrat">
              How Our Counselling Sessions Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional, confidential, and compassionate therapy sessions designed for your comfort and progress
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-8 w-8 text-sage-600 mx-auto mb-2" />
                <CardTitle className="text-lg">1. Book Session</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Schedule online, call us, or WhatsApp for appointment booking
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <User className="h-8 w-8 text-sage-600 mx-auto mb-2" />
                <CardTitle className="text-lg">2. Initial Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Comprehensive evaluation to understand your needs and goals
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="h-8 w-8 text-sage-600 mx-auto mb-2" />
                <CardTitle className="text-lg">3. Therapy Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Customized treatment plan with clear goals and timelines
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-8 w-8 text-sage-600 mx-auto mb-2" />
                <CardTitle className="text-lg">4. Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Regular monitoring and adjustment of therapy approach
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Session Types & Pricing */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-forest-600 mb-6 text-center">
              Session Types & Pricing
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sessionInfo.map((session, index) => (
                <Card key={index} className="border-l-4 border-l-sage-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-forest-600">{session.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">{session.description}</p>
                      <div className="flex justify-between">
                        <span className="text-sm"><strong>Duration:</strong> {session.duration}</span>
                      </div>
                      <div className="text-lg font-bold text-sage-600">{session.price}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Counselling Team */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-600 mb-4 font-montserrat">
              Our Expert Counselling & Psychology Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Licensed clinical psychologists, counselling psychologists, marriage & family therapists, 
              child psychologists, and specialized counselors with extensive experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-sage-100 mx-auto mb-4 flex items-center justify-center">
                    <User className="h-12 w-12 text-sage-600" />
                  </div>
                  <CardTitle className="text-lg text-forest-600">{member.name}</CardTitle>
                  <CardDescription className="text-sm font-medium">{member.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Specialization:</strong> {member.specialization}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Form */}
      <section className="py-16 px-4 bg-forest-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-600 mb-4 font-montserrat">
              Book Your Counselling Session
            </h2>
            <p className="text-gray-600">
              Take the first step towards better mental health. Our team is here to support you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-forest-600">Appointment Request Form</CardTitle>
                <CardDescription>Fill out the form and we'll contact you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Service Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual Counselling</SelectItem>
                      <SelectItem value="couples">Couples Therapy</SelectItem>
                      <SelectItem value="family">Family Therapy</SelectItem>
                      <SelectItem value="child">Child Psychology</SelectItem>
                      <SelectItem value="group">Group Therapy</SelectItem>
                      <SelectItem value="online">Online Counselling</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Preferred Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Brief description of your concerns (optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                  />
                  <Button type="submit" className="w-full bg-sage-600 hover:bg-sage-700">
                    Request Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-forest-600">Get in Touch</CardTitle>
                <CardDescription>Multiple ways to reach us for immediate support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-700">WhatsApp Consultation</p>
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_top"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 underline"
                    >
                      +91 90378 99299
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-sage-600" />
                  <div>
                    <p className="font-semibold">24/7 Helpline</p>
                    <p className="text-gray-600">+91 90378 99299, +91 73061 50312</p>
                  </div>
                </div>

                {/* Locations */}
                <div className="space-y-6">
                  <h4 className="font-semibold text-forest-600">Our Locations:</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 text-sm">
                      <MapPin className="h-4 w-4 text-sage-600 mt-1" />
                      <div>
                        <p className="font-medium">Karukutty, Angamaly Facility</p>
                        <p className="text-gray-600">Comprehensive mental health care</p>
                      </div>
                    </div>
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.4352625194133!2d76.38062927455447!3d10.226435569098447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0801a2f4087abb%3A0x6a49af56d0f421e9!2sMindful%20Rejuvenation-%20De%20addiction%20Centre%20In%20Kochi%20Ernakulam%20Mental%20Hospital%20Psychiatric%20Ernakulam!5e0!3m2!1sen!2sin!4v1749128796259!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Karukutty, Angamaly Facility Location"
                      ></iframe>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 text-sm">
                      <MapPin className="h-4 w-4 text-sage-600 mt-1" />
                      <div>
                        <p className="font-medium">Vaduthala, Kochi Facility</p>
                        <p className="text-gray-600">Full-service mental health center</p>
                      </div>
                    </div>
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.991040971443!2d76.27355727455223!3d10.017597372732697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dc5dc02de8f%3A0xc7cd995fdc4a5e30!2sMindful%20Rejuvenation%20Hospital-%20Psychiatry%2C%20Rehabilitation%20and%20Dementia%20care%20Deaddiction%20Kochi%20Psychiatry%20Hospital!5e0!3m2!1sen!2sin!4v1749128829604!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Vaduthala, Kochi Facility Location"
                      ></iframe>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 text-sm">
                      <MapPin className="h-4 w-4 text-sage-600 mt-1" />
                      <div>
                        <p className="font-medium">Kaloor, Kochi Facility</p>
                        <p className="text-gray-600">OP services, therapies, counselling & consultations</p>
                        <p className="text-gray-600">Phone: +91 81291 99903/02</p>
                      </div>
                    </div>
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2020394496594!2d76.29569227455208!3d10.000163373032883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d576c3a921d%3A0x20a9a1ca6b63af41!2sMindful%20Life%20%2F%20Psychiatric%20Hospital%20Ernakulam%20Family%20Counselling%20Centre%20Kochi!5e0!3m2!1sen!2sin!4v1749128856945!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Kaloor, Kochi Facility Location"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Emergency */}
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-700">Crisis Support</p>
                  <p className="text-red-600 text-sm">If you're in crisis, call our 24/7 helpline immediately</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <MiniMapWidget title="Get therapy and counselling at our Vaduthala, Kochi center" />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default CounsellingPsychotherapy;
