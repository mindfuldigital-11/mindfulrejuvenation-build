
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Award, Phone, MessageCircle, ExternalLink, Star, Zap } from "lucide-react";
import CTAButtons from "@/components/shared/CTAButtons";
import InpatientCTASection from "@/components/shared/InpatientCTASection";
import GallerySection from "@/components/about/GallerySection";
import CoreServices from "@/components/psychiatry/CoreServices";
import InpatientCare from "@/components/psychiatry/InpatientCare";
import EmergencyBanner from "@/components/shared/EmergencyBanner";
import HeroSection from "@/components/psychiatry/HeroSection";
import DailySchedule from "@/components/psychiatry/DailySchedule";
import CareTeam from "@/components/psychiatry/CareTeam";
import LocationMap from "@/components/psychiatry/LocationMap";

import MiniMapWidget from "@/components/shared/MiniMapWidget";

const PsychiatryServices = () => {
  const roomCategories = [
    {
      title: "Sharing Room (2-3 Beds)",
      malayalam: "പങ്കിടൽ മുറി (2-3 കിടക്കകൾ)",
      price: "₹1,000-1,500",
      badge: "Most Affordable",
      popular: false
    },
    {
      title: "Private Room",
      malayalam: "സ്വകാര്യ മുറി",
      price: "₹2,500-3,500",
      badge: "Popular Choice",
      popular: true
    },
    {
      title: "Family Room",
      malayalam: "കുടുംബ മുറി",
      price: "₹3,000-4,000",
      badge: "Premium Comfort",
      popular: false
    }
  ];

  const features = [
    {
      title: "Insurance Accepted",
      malayalam: "ഇൻഷുറൻസ് സ്വീകരിക്കുന്നു",
      description: "We accept most major insurance plans to make care accessible and affordable for all patients.",
      icon: CheckCircle
    },
    {
      title: "Flexible Payment Options",
      malayalam: "വഴക്കമുള്ള പേയ്മെന്റ് ഓപ്ഷനുകൾ",
      description: "Multiple payment methods including EMI options, making quality mental health care financially manageable.",
      icon: Phone
    },
    {
      title: "No Hidden Charges",
      malayalam: "മറഞ്ഞിരിക്കുന്ന ചാർജുകൾ ഇല്ല",
      description: "Complete transparency in pricing with detailed cost breakdown provided upfront to avoid any surprises.",
      icon: Award
    },
    {
      title: "24/7 Family Support",
      malayalam: "24/7 കുടുംബ പിന്തുണ",
      description: "Round-the-clock support and regular updates to families about patient progress and care plans.",
      icon: Clock
    }
  ];

  const conditions = [
    {
      title: "Depression (ഡിപ്രഷൻ)",
      description: "Comprehensive care for all forms of depression including major depressive disorder, persistent depressive disorder, and seasonal affective disorder.",
      treatment: "Evidence-based therapies including CBT, medication management, lifestyle counseling, and support group participation for sustainable recovery.",
      whatsappMessage: "I would like to know more about depression care options and consultation availability."
    },
    {
      title: "Anxiety Disorders (ഉത്കണ്ഠാ രോഗങ്ങൾ)",
      description: "Support for generalized anxiety disorder, panic disorder, social anxiety, phobias, and anxiety-related conditions.",
      treatment: "Combination of cognitive behavioral therapy, exposure therapy, relaxation techniques, and medication when necessary for effective anxiety management.",
      whatsappMessage: "I would like to inquire about anxiety disorder care and therapy options available."
    },
    {
      title: "Bipolar Disorder (ബൈപോളാർ ഡിസോർഡർ)",
      description: "Specialized care for bipolar I, bipolar II, and cyclothymic disorder with mood stabilization focus.",
      treatment: "Mood stabilizers, psychoeducation, family therapy, and lifestyle management to prevent mood episodes and maintain stability.",
      whatsappMessage: "I need information about bipolar disorder care and mood stabilization programs."
    },
    {
      title: "Schizophrenia (സ്കിസോഫ്രീനിയ)",
      description: "Comprehensive care for schizophrenia and related psychotic disorders with focus on symptom management and functional recovery.",
      treatment: "Antipsychotic medications, cognitive behavioral therapy, social skills training, and rehabilitation services for improved quality of life.",
      whatsappMessage: "I would like to know about schizophrenia care options and rehabilitation programs."
    },
    {
      title: "OCD (ഒസിഡി)",
      description: "Specialized support for obsessive-compulsive disorder and related conditions with focus on breaking the cycle of obsessions and compulsions.",
      treatment: "Exposure and Response Prevention (ERP) therapy, cognitive behavioral therapy, and selective medication management for OCD symptom control.",
      whatsappMessage: "I need help with OCD support and would like to know about ERP therapy options."
    },
    {
      title: "PTSD (പിടിഎസ്ഡി)",
      description: "Trauma-focused treatment for post-traumatic stress disorder and acute stress reactions with specialized trauma therapy approaches.",
      treatment: "EMDR therapy, trauma-focused CBT, exposure therapy, and comprehensive support to process and heal from traumatic experiences.",
      whatsappMessage: "I would like to inquire about PTSD treatment and trauma therapy services available."
    }
  ];

  type ConditionCategory = {
    category: string;
    icon: string;
    whatsappMessage?: string;
    conditions?: string[];
    isExternal?: boolean;
  };

  const comprehensiveConditions: ConditionCategory[] = [
    {
      category: "Mood Disorders (മൂഡ് ഡിസോർഡറുകൾ)",
      icon: "🧠",
      whatsappMessage: "I would like to know more about mood disorder treatment options available.",
      conditions: [
        "Major Depressive Disorder - പ്രധാന വിഷാദ രോഗം",
        "Bipolar Disorder (Type I & II) - ബൈപോളാർ ഡിസോർഡർ",
        "Persistent Depressive Disorder - സ്ഥിരമായ വിഷാദ രോഗം",
        "Seasonal Affective Disorder - സീസണൽ അഫക്റ്റീവ് ഡിസോർഡർ",
        "Cyclothymic Disorder - സൈക്ലോതൈമിക് ഡിസോർഡർ",
        "Mood Disorder Due to Medical Condition - വൈദ്യശാസ്ത്രപരമായ അവസ്ഥ മൂലമുള്ള മൂഡ് ഡിസോർഡർ"
      ]
    },
    {
      category: "Anxiety Disorders (ഉത്കണ്ഠാ രോഗങ്ങൾ)",
      icon: "😰",
      whatsappMessage: "I need information about anxiety disorder treatment and therapy options.",
      conditions: [
        "Generalized Anxiety Disorder - സാമാന്യ ഉത്കണ്ഠാ രോഗം",
        "Panic Disorder - പാനിക് ഡിസോർഡർ",
        "Social Anxiety Disorder - സാമൂഹിക ഉത്കണ്ഠാ രോഗം",
        "Specific Phobias - പ്രത്യേക ഭയങ്ങൾ",
        "Agoraphobia - അഗോറാഫോബിയ",
        "Separation Anxiety Disorder - വേർപിരിയൽ ഉത്കണ്ഠാ രോഗം"
      ]
    },
    {
      category: "Psychotic Disorders (സൈക്കോട്ടിക് ഡിസോർഡറുകൾ)",
      icon: "🌀",
      whatsappMessage: "I would like to inquire about psychotic disorder treatment and support services.",
      conditions: [
        "Schizophrenia - സ്കിസോഫ്രീനിയ",
        "Brief Psychotic Disorder - ഹ്രസ്വ സൈക്കോട്ടിക് ഡിസോർഡർ",
        "Schizophreniform Disorder - സ്കിസോഫ്രീനിഫോം ഡിസോർഡർ",
        "Schizoaffective Disorder - സ്കിസോഅഫക്റ്റീവ് ഡിസോർഡർ",
        "Delusional Disorder - ഭ്രമാത്മക ഡിസോർഡർ"
      ]
    },
    {
      category: "Obsessive-Compulsive & Related Disorders (ഒസിഡിയും അനുബന്ധ രോഗങ്ങളും)",
      icon: "🔄",
      whatsappMessage: "I need help with OCD treatment and related disorder therapy options.",
      conditions: [
        "Obsessive-Compulsive Disorder (OCD) - ഒബ്സെസീവ്-കംപൾസീവ് ഡിസോർഡർ",
        "Body Dysmorphic Disorder - ബോഡി ഡിസ്മോർഫിക് ഡിസോർഡർ",
        "Hoarding Disorder - ഹോർഡിംഗ് ഡിസോർഡർ",
        "Trichotillomania - ട്രൈക്കോട്ടിലോമാനിയ",
        "Excoriation Disorder - എക്സ്കോറിയേഷൻ ഡിസോർഡർ"
      ]
    },
    {
      category: "Trauma & Stress-Related Disorders (ട്രോമയും സ്ട്രെസ് അനുബന്ധ രോഗങ്ങളും)",
      icon: "💔",
      whatsappMessage: "I would like to know about trauma therapy and PTSD treatment options.",
      conditions: [
        "Post-Traumatic Stress Disorder (PTSD) - പോസ്റ്റ് ട്രോമാറ്റിക് സ്ട്രെസ് ഡിസോർഡർ",
        "Acute Stress Disorder - അക്യൂട് സ്ട്രെസ് ഡിസോർഡർ",
        "Adjustment Disorders - അഡ്ജസ്റ്റ്മെന്റ് ഡിസോർഡറുകൾ",
        "Reactive Attachment Disorder - റിയാക്ടീവ് അറ്റാച്ച്മെന്റ് ഡിസോർഡർ",
        "Disinhibited Social Engagement Disorder - ഡിസിൻഹിബിറ്റഡ് സോഷ്യൽ എൻഗേജ്മെന്റ് ഡിസോർഡർ"
      ]
    },
    {
      category: "Eating Disorders (ഭക്ഷണ രോഗങ്ങൾ)",
      icon: "🍽️",
      whatsappMessage: "I need information about eating disorder treatment and support programs.",
      conditions: [
        "Anorexia Nervosa - അനോറെക്സിയ നെർവോസ",
        "Bulimia Nervosa - ബുലിമിയ നെർവോസ",
        "Binge Eating Disorder - ബിഞ്ച് ഈറ്റിംഗ് ഡിസോർഡർ",
        "Avoidant/Restrictive Food Intake Disorder - അവോയ്ഡന്റ്/റിസ്ട്രിക്ടീവ് ഫുഡ് ഇൻടേക്ക് ഡിസോർഡർ",
        "Pica - പിക്ക",
        "Rumination Disorder - റുമിനേഷൻ ഡിസോർഡർ"
      ]
    },
    {
      category: "Sleep-Wake Disorders (ഉറക്ക-ഉണർവ് രോഗങ്ങൾ)",
      icon: "😴",
      whatsappMessage: "I would like to inquire about sleep disorder treatment and therapy options.",
      conditions: [
        "Insomnia Disorder - ഇൻസോമ്നിയ ഡിസോർഡർ",
        "Hypersomnolence Disorder - ഹൈപ്പർസോമ്നോലൻസ് ഡിസോർഡർ",
        "Narcolepsy - നാർകോലെപ്സി",
        "Sleep Apnea - സ്ലീപ് അപ്നിയ",
        "Circadian Rhythm Sleep-Wake Disorders - സർക്കാഡിയൻ റിഥം സ്ലീപ്-വേക്ക് ഡിസോർഡറുകൾ",
        "Nightmare Disorder - നൈറ്റ്മേർ ഡിസോർഡർ"
      ]
    },
    {
      category: "Personality Disorders (വ്യക്തിത്വ രോഗങ്ങൾ)",
      icon: "🎭",
      whatsappMessage: "I need information about personality disorder treatment and therapy options.",
      conditions: [
        "Borderline Personality Disorder - ബോർഡർലൈൻ പേഴ്സണാലിറ്റി ഡിസോർഡർ",
        "Antisocial Personality Disorder - ആന്റിസോഷ്യൽ പേഴ്സണാലിറ്റി ഡിസോർഡർ",
        "Narcissistic Personality Disorder - നാർസിസിസ്റ്റിക് പേഴ്സണാലിറ്റി ഡിസോർഡർ",
        "Avoidant Personality Disorder - അവോയ്ഡന്റ് പേഴ്സണാലിറ്റി ഡിസോർഡർ",
        "Dependent Personality Disorder - ഡിപെൻഡന്റ് പേഴ്സണാലിറ്റി ഡിസോർഡർ",
        "Obsessive-Compulsive Personality Disorder - ഒബ്സെസീവ്-കംപൾസീവ് പേഴ്സണാലിറ്റി ഡിസോർഡർ"
      ]
    },
    {
      category: "Neurodevelopmental Disorders (ന്യൂറോഡെവലപ്മെന്റൽ ഡിസോർഡറുകൾ)",
      icon: "🧩",
      whatsappMessage: "I would like to know about neurodevelopmental disorder treatment and support services.",
      conditions: [
        "Attention-Deficit/Hyperactivity Disorder (ADHD) - അറ്റൻഷൻ-ഡെഫിസിറ്റ്/ഹൈപ്പർആക്റ്റിവിറ്റി ഡിസോർഡർ",
        "Autism Spectrum Disorder - ഓട്ടിസം സ്പെക്ട്രം ഡിസോർഡർ",
        "Intellectual Disability - ബൗദ്ധിക വൈകല്യം",
        "Specific Learning Disorder - സ്പെസിഫിക് ലേണിംഗ് ഡിസോർഡർ",
        "Communication Disorders - കമ്യൂണിക്കേഷൻ ഡിസോർഡറുകൾ",
        "Motor Disorders - മോട്ടോർ ഡിസോർഡറുകൾ"
      ]
    }
  ];

  const handleWhatsAppClick = (message: string) => {
    const whatsappUrl = `https://wa.me/919037899299?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sand-50 pt-[72px]">
      <Header />
      
      <EmergencyBanner />
      <div id="consultation"><HeroSection /></div>
      <div id="outpatient"><CoreServices /></div>
      <div id="inpatient"><InpatientCare /></div>
      
      <div id="rehabilitation"><DailySchedule /></div>
      <CareTeam />

      {/* Therapy Session Image */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="/lovable-uploads/881c2df2-344f-44bd-84aa-ae8aadb10142.png" 
              alt="Professional therapy session" 
              className="w-full h-64 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-transparent flex items-center">
              <div className="text-white p-4 lg:p-8 max-w-2xl">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Personalized Mental Health Care</h3>
                <p className="text-base lg:text-lg mb-4">വ്യക്തിഗത മാനസികാരോഗ്യ പരിചരണം</p>
                <p className="text-sage-200 text-sm lg:text-base">Professional, confidential therapy sessions designed to help you overcome challenges and achieve mental wellness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Images Section */}
      <GallerySection />

      {/* Care and Treatment Images */}
      <section className="py-16 px-4 bg-gradient-to-br from-sage-50 to-forest-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div>
              <img 
                src="/lovable-uploads/bfd1569d-28a6-4050-9c67-88e7cb7e3038.png" 
                alt="Group therapy session with elderly patients" 
                className="rounded-2xl shadow-xl w-full h-64 lg:h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-forest-600 mb-4">Specialized Geriatric Care</h3>
              <p className="text-lg lg:text-xl text-gray-600 mb-4">പ്രത്യേക വയോജന പരിചരണം</p>
              <p className="text-gray-700 mb-6 text-sm lg:text-base">
                Our specialized programs for elderly patients focus on maintaining dignity, independence, and quality of life through comprehensive mental health support and therapeutic activities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-forest-600 mb-4">Individual Therapy Sessions</h3>
              <p className="text-lg lg:text-xl text-gray-600 mb-4">വ്യക്തിഗത തെറാപ്പി സെഷനുകൾ</p>
              <p className="text-gray-700 mb-6 text-sm lg:text-base">
                One-on-one therapy sessions with experienced mental health professionals, providing personalized treatment approaches tailored to each patient's unique needs and circumstances.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/lovable-uploads/d4be96e7-e628-4244-9c50-24100bd76370.png" 
                alt="Individual therapy session" 
                className="rounded-2xl shadow-xl w-full h-64 lg:h-auto object-cover"
              />
            </div>
          </div>

          {/* Compassionate Care Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/c4080e0d-bc5e-442e-843f-0b71eeed6298.png" 
                alt="Compassionate medical consultation with elderly patient" 
                className="rounded-2xl shadow-xl w-full h-64 lg:h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-forest-600 mb-4">Compassionate Care & Support</h3>
              <p className="text-lg lg:text-xl text-gray-600 mb-4">കരുണാപൂർവ്വമായ പരിചരണവും പിന്തുണയും</p>
              <p className="text-gray-700 mb-6 text-sm lg:text-base">
                Our dedicated medical professionals provide compassionate, patient-centered care with empathy and understanding, ensuring every individual receives personalized attention and support throughout their care journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inpatient Care Treatment Costs */}
      <section className="py-16 px-4 bg-gradient-to-br from-sage-50 to-forest-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-600 mb-4 font-montserrat">
              Inpatient Care Treatment Costs
            </h2>
            <p className="text-xl text-gray-600">കിടത്തി ചികിത്സ ചെലവുകൾ</p>
            <p className="text-gray-600 max-w-2xl mx-auto">Transparent, affordable pricing for comprehensive psychiatric inpatient care in Kochi</p>
          </div>

          {/* Room Categories & Pricing */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-forest-600 mb-2 text-center">Room Categories & Pricing</h3>
            <p className="text-center text-gray-600 mb-8">വിവിധ മുറി വിഭാഗങ്ങൾ ലഭ്യമാണ്</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roomCategories.map((room, index) => (
                <Card key={index} className={`shadow-xl transition-all duration-300 hover:scale-105 relative ${room.popular ? 'border-forest-500 border-2 bg-gradient-to-br from-forest-50 to-sage-50' : 'bg-gradient-to-br from-white to-gray-50'}`}>
                  {room.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-forest-600 text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl text-forest-600">{room.title}</CardTitle>
                    <p className="text-sm text-gray-600 font-medium">{room.malayalam}</p>
                    <Badge variant="outline" className="w-fit mx-auto mt-3 border-forest-300">{room.badge}</Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-3xl font-bold text-forest-600 mb-2">{room.price}</p>
                    <p className="text-sm text-gray-600">All inclusive daily rate</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Special Features & Benefits */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-forest-600 mb-2 text-center">Special Features & Benefits</h3>
            <p className="text-center text-gray-600 mb-8">പ്രത്യേക സവിശേഷതകൾ</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-white to-sage-50">
                  <CardContent className="flex items-start gap-6 p-8">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-forest-100 rounded-full">
                        <feature.icon className="h-6 w-6 text-forest-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-forest-600 mb-2">{feature.title}</h4>
                      <p className="text-sage-600 font-medium mb-3">{feature.malayalam}</p>
                      <p className="text-gray-700">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <Card className="shadow-xl bg-gradient-to-br from-white to-forest-50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-forest-600">
                What's Included in Daily Cost
              </CardTitle>
              <p className="text-xl text-gray-600">ദിവസേന ചെലവിൽ ഉൾപ്പെടുന്നവ</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg"><strong>Accommodation</strong> (താമസം)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg"><strong>24/7 nursing care</strong> (24 മണിക്കൂർ നഴ്സിംഗ് പരിചരണം)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg"><strong>Daily psychiatric consultation</strong> (ദിവസേന മാനസികരോഗ വിദഗ്ധന്റെ കൂടിയാലോചന)</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg"><strong>Individual & group therapy</strong> (വ്യക്തിഗതവും ഗ്രൂപ്പ് തെറാപ്പിയും)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg"><strong>Recreational activities</strong> (വിനോദ പ്രവർത്തനങ്ങൾ)</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                <p className="text-gray-700 font-medium">
                  * Meals available separately at affordable rates<br/>
                  * ഭക്ഷണം പ്രത്യേകമായി മിതമായ നിരക്കിൽ ലഭ്യമാണ്
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold text-forest-600 mb-6">Get Detailed Cost Information</h3>
            <CTAButtons />
          </div>
        </div>
      </section>

      {/* Conditions We Treat & How We Treat */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-600 mb-4 font-montserrat">
              Conditions We Care For & How We Help
            </h2>
            <p className="text-xl text-gray-600">ഞങ്ങൾ പരിചരിക്കുന്ന അവസ്ഥകളും സഹായ രീതികളും</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conditions.map((condition, index) => {
              // Create section ID from condition title
              const sectionId = condition.title.toLowerCase().split(' ')[0].replace(/[()]/g, '');
              return (
              <Card id={sectionId} key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-sage-50 scroll-mt-20">
                <CardHeader>
                  <CardTitle className="text-xl text-forest-600">{condition.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{condition.description}</CardDescription>
                  <div className="border-t pt-4 mb-6">
                    <h4 className="font-semibold text-forest-600 mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      How We Help:
                    </h4>
                    <p className="text-sm text-gray-700">{condition.treatment}</p>
                  </div>
                  <Button 
                    onClick={() => handleWhatsAppClick(condition.whatsappMessage)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp for {condition.title.split(' ')[0]} Care
                  </Button>
                </CardContent>
              </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold text-forest-600 mb-6">Start Your Care Journey Today</h3>
            <CTAButtons />
          </div>
        </div>
      </section>

      {/* Mental Health Awareness Images */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/lovable-uploads/f4da2c15-c271-47b0-aeb0-a14c99c28939.png" 
                alt="Mental health awareness illustration" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="text-white p-6">
                  <h4 className="text-xl font-bold mb-2">Mental Health Awareness</h4>
                  <p className="text-sm">Breaking stigma through education and understanding</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/lovable-uploads/cfede4bf-c310-460b-bc1a-2333d8bb7366.png" 
                alt="Growing mental health illustration" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="text-white p-6">
                  <h4 className="text-xl font-bold mb-2">Growth & Recovery</h4>
                  <p className="text-sm">Nurturing mental wellness through comprehensive care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Mental Health Conditions */}
      <section className="py-16 px-4 bg-gradient-to-br from-sage-50 to-forest-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-600 mb-4 font-montserrat">
              Comprehensive Mental Health Conditions We Care For in Kochi
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our expert psychiatrists and mental health professionals provide evidence-based care for a wide range of psychiatric conditions, serving patients across Kerala with specialized support for each condition.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {comprehensiveConditions.map((category, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="bg-gradient-to-r from-forest-600 to-sage-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    {category.category}
                  </CardTitle>
                  {category.isExternal && (
                    <div className="mt-4">
                      <Button 
                        className="bg-white text-forest-600 hover:bg-sage-50"
                        onClick={() => window.open('https://mindfulhelp.in/substance-abuse-support-kochi', '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Learn More About Substance Use Recovery
                      </Button>
                    </div>
                  )}
                </CardHeader>
                {!category.isExternal && (
                  <CardContent className="p-6">
                    <ul className="space-y-3 mb-6">
                      {category.conditions?.map((condition, condIndex) => (
                        <li key={condIndex} className="flex items-start gap-3">
                          <span className="text-forest-500 mt-1 font-bold text-lg">•</span>
                          <span className="text-gray-700 leading-relaxed">{condition}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={() => handleWhatsAppClick(category.whatsappMessage || `I would like to know more about ${category.category} care options.`)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp for {category.category.split(' ')[0]} Care
                    </Button>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold text-forest-600 mb-6">Get Expert Care for Your Condition</h3>
            <CTAButtons />
          </div>

          {/* Treatment Summary */}
          <Card className="shadow-2xl mt-12 bg-gradient-to-br from-white to-forest-50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-forest-600">
                Comprehensive Mental Health Care in Kerala
              </CardTitle>
              <p className="text-xl text-gray-600 mt-2">കേരളത്തിലെ സമഗ്ര മാനസികാരോഗ്യ പരിചരണം</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center mb-12 text-lg leading-relaxed">
                At Mindful Rejuvenation, we provide evidence-based psychiatric treatment for all major mental health conditions. Our multidisciplinary team of psychiatrists, psychologists, and therapists in Kochi specializes in both inpatient and outpatient mental health care, ensuring personalized treatment plans for every patient. We accept major insurance plans and offer affordable consultation fees starting from ₹800.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center justify-center w-20 h-20 bg-forest-100 rounded-full mb-6">
                    <Users className="h-10 w-10 text-forest-600" />
                  </div>
                  <h3 className="text-4xl font-bold text-forest-600 mb-2">50,000+</h3>
                  <p className="text-gray-600 font-medium">Patients Treated Successfully</p>
                  <p className="text-sm text-sage-600 mt-1">വിജയകരമായി ചികിത്സിച്ച രോഗികൾ</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center justify-center w-20 h-20 bg-forest-100 rounded-full mb-6">
                    <Award className="h-10 w-10 text-forest-600" />
                  </div>
                  <h3 className="text-4xl font-bold text-forest-600 mb-2">15+</h3>
                  <p className="text-gray-600 font-medium">Years Combined Experience</p>
                  <p className="text-sm text-sage-600 mt-1">വർഷങ്ങളുടെ സംയുക്ത അനുഭവം</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center justify-center w-20 h-20 bg-forest-100 rounded-full mb-6">
                    <Clock className="h-10 w-10 text-forest-600" />
                  </div>
                  <h3 className="text-4xl font-bold text-forest-600 mb-2">24/7</h3>
                  <p className="text-gray-600 font-medium">Emergency Psychiatric Care</p>
                  <p className="text-sm text-sage-600 mt-1">അടിയന്തിര മാനസികരോഗ പരിചരണം</p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-forest-100 to-sage-100 rounded-2xl text-center">
                <h4 className="text-2xl font-bold text-forest-600 mb-4">
                  Kerala's Largest Private Network of Mental Health Professionals
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  കേരളത്തിലെ ഏറ്റവും വലിയ സ്വകാര്യ മാനസികാരോഗ്യ പ്രൊഫഷണൽ നെറ്റ്‌വർക്ക്
                </p>
                <p className="text-gray-600">
                  With over 100 mental health professionals across Kerala, we provide comprehensive psychiatric care and support to communities throughout the state.
                </p>
              </div>

              <div className="text-center mt-12">
                <CTAButtons />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support and Care Image */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="/lovable-uploads/8d19cd90-634d-4e75-bc30-820eec349e43.png" 
              alt="Supportive hands showing care and compassion" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent flex items-end">
              <div className="text-white p-8 w-full text-center">
                <h3 className="text-3xl font-bold mb-4">Compassionate Care & Support</h3>
                <p className="text-lg mb-4">കരുണാപൂർവ്വമായ പരിചരണവും പിന്തുണയും</p>
                <p className="text-sage-200 max-w-2xl mx-auto">Our dedicated team provides compassionate, patient-centered care, ensuring every individual receives the support they need on their journey to mental wellness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location and Facilities */}
      <LocationMap />

      {/* Learn More About Admission Process with WhatsApp CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-forest-600 to-sage-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat">
            Learn More About Our Admission Process
          </h2>
          <p className="text-lg lg:text-xl mb-4">
            Contact us today to start your journey to better mental health.
          </p>
          <p className="text-base lg:text-lg mb-8 text-sage-100">
            മികച്ച മാനസികാരോഗ്യത്തിലേക്കുള്ള നിങ്ങളുടെ യാത്ര ഇന്ന് തുടങ്ങാൻ ഞങ്ങളെ ബന്ധപ്പെടുക
          </p>
          <CTAButtons />
        </div>
      </section>

      <MiniMapWidget title="Visit our Vaduthala center for specialized psychiatry services" />
      <InpatientCTASection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default PsychiatryServices;
