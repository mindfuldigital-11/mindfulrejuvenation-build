import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import MiniMapWidget from "@/components/shared/MiniMapWidget";
import { Heart, Brain, Shield, Users, Phone, Award, Clock, MapPin, Calendar, Download, Video, CheckCircle, Home, Stethoscope, Activity } from "lucide-react";
import { useState } from "react";

const DementiaCare = () => {
  const [selectedTab, setSelectedTab] = useState("memory-clinic");

  const testimonials = [
    {
      quote: "With thoughtful home safety modifications and weekly day-program activities, my mother's quality of life improved drastically.",
      attribution: "— S.K., Kochi"
    },
    {
      quote: "I finally feel guided in caring for Dad. The caregiver workshops and in-home nursing visits gave me confidence.",
      attribution: "— A.P., Ernakulam"
    },
    {
      quote: "The memory clinic evaluation was thorough, and the personalized plan helped us manage Dad's early symptoms.",
      attribution: "— R.N., Angamaly"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sand-50 pt-[72px]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 bg-gradient-to-r from-forest-600 to-sage-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-montserrat leading-tight">Specialized Dementia Care Services in Kochi</h1>
          <h2 className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-sage-100">Compassionate, evidence-based support for memory health and caregiver education in Kerala</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-forest-600 hover:bg-sand-100"
              onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule a Memory Clinic Evaluation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-forest-600"
              onClick={() => window.open('tel:+917306150312')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call for Immediate Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction & Program Overview section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-12">
            Dementia affects more than memory—it impacts daily functioning, relationships, and quality of life. At Mindful Rejuvenation, our Dementia Care Program across our Karukutty, Angamaly facility, Vaduthala, Kochi facility, and Kaloor, Kochi facility offers comprehensive dementia care services: alzheimer support, vascular dementia care, frontotemporal dementia support, lewy body dementia management, memory clinic evaluation, cognitive assessment, neuropsychological testing, dementia day care, home care services, caregiver support, respite care, behavioral management for dementia, sundown syndrome therapy, memory enhancement activities, occupational therapy for dementia, speech therapy, physiotherapy, social work support, family counselling, legal planning assistance, and extensive caregiver resources. Our goal is to preserve dignity, enhance engagement, and ease the caregiving journey for families across Kerala.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-sage-500">
              <CardHeader>
                <Brain className="h-8 w-8 text-sage-600 mb-2" />
                <CardTitle className="text-xl text-forest-600">Memory Clinic Evaluations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Standardized cognitive assessments (MMSE, MoCA)</li>
                  <li>• Medical & neurological referrals (MRI/CT as needed)</li>
                  <li>• Personalized care planning session</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-forest-500">
              <CardHeader>
                <Users className="h-8 w-8 text-forest-600 mb-2" />
                <CardTitle className="text-xl text-forest-600">Day Programs & Support Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Structured cognitive stimulation activities</li>
                  <li>• Social interaction to reduce isolation</li>
                  <li>• Monthly caregiver support workshops</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-sand-500">
              <CardHeader>
                <Home className="h-8 w-8 text-sand-600 mb-2" />
                <CardTitle className="text-xl text-forest-600">Home-Based Care Coordination</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• In-home nursing visits for medication management</li>
                  <li>• Occupational therapy home safety assessments</li>
                  <li>• Caregiver training on daily routines</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Help section */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-forest-600 mb-8 text-center font-montserrat">Who Benefits from Our Dementia Care Program</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-forest-600 mb-4">Dementia Stages & Types</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sage-600 mr-2" />Early-Stage Dementia (Mild Cognitive Impairment, early Alzheimer's)</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sage-600 mr-2" />Mid-Stage Dementia (Moderate Alzheimer's, vascular dementia)</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sage-600 mr-2" />Late-Stage Dementia (severe memory loss, behavioral changes)</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sage-600 mr-2" />Younger-Onset Dementia (frontotemporal, early Parkinson's)</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sage-600 mr-2" />Lewy Body Dementia</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-forest-600 mb-4">Caregiver & Family Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sage-600 mr-2" />Spouses and life partners</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sage-600 mr-2" />Adult children and siblings</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sage-600 mr-2" />Professional caregivers</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sage-600 mr-2" />Extended family members</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-sage-600 mr-2" />Support group participants</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach section */}
      <section className="py-16 px-4 bg-gradient-to-r from-sage-50 to-forest-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-forest-600 mb-12 text-center font-montserrat">Our Comprehensive, Person-Centered Model</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Stethoscope className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-forest-600">Clinical & Cognitive Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Full multidisciplinary assessment:</p>
                <ul className="text-sm text-gray-600 text-left space-y-1">
                  <li>• Neurocognitive testing (MMSE, MoCA)</li>
                  <li>• Medical review: ruling out reversible causes</li>
                  <li>• Neurology referral and imaging when indicated</li>
                  <li>• Collaborative care plan by psychiatrist, neuropsychologist, and geriatrician</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Activity className="h-12 w-12 text-forest-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-forest-600">Day Programs & Therapeutic Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Daily "Memory Café" style sessions:</p>
                <ul className="text-sm text-gray-600 text-left space-y-1">
                  <li>• Cognitive stimulation (memory games, puzzles)</li>
                  <li>• Music & art therapy for mood improvement</li>
                  <li>• Gentle physical activities (chair exercises)</li>
                  <li>• Weekly caregiver support groups</li>
                  <li>• Monthly educational seminars</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Home className="h-12 w-12 text-sand-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-forest-600">Home-Based Care & Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Comprehensive home support:</p>
                <ul className="text-sm text-gray-600 text-left space-y-1">
                  <li>• Home safety audit by occupational therapist</li>
                  <li>• In-home nursing visits for medication monitoring</li>
                  <li>• Caregiver training modules</li>
                  <li>• Communication techniques training</li>
                  <li>• Nutrition & hydration strategies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Components section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-forest-600 mb-12 text-center font-montserrat">Program Components</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              variant={selectedTab === "memory-clinic" ? "default" : "outline"}
              onClick={() => setSelectedTab("memory-clinic")}
              className={selectedTab === "memory-clinic" ? "bg-forest-600" : ""}
            >
              Memory Clinic Evaluations
            </Button>
            <Button 
              variant={selectedTab === "day-programs" ? "default" : "outline"}
              onClick={() => setSelectedTab("day-programs")}
              className={selectedTab === "day-programs" ? "bg-forest-600" : ""}
            >
              Day Programs & Support
            </Button>
            <Button 
              variant={selectedTab === "home-care" ? "default" : "outline"}
              onClick={() => setSelectedTab("home-care")}
              className={selectedTab === "home-care" ? "bg-forest-600" : ""}
            >
              Home-Based Care
            </Button>
            <Button 
              variant={selectedTab === "assisted-living" ? "default" : "outline"}
              onClick={() => setSelectedTab("assisted-living")}
              className={selectedTab === "assisted-living" ? "bg-forest-600" : ""}
            >
              Assisted Living Support
            </Button>
          </div>

          <Card className="min-h-[400px]">
            <CardContent className="p-8">
              {selectedTab === "memory-clinic" && (
                <div>
                  <h3 className="text-2xl font-bold text-forest-600 mb-4">Memory Clinic Evaluations</h3>
                  <p className="text-gray-700 mb-6">Comprehensive neurocognitive workup to confirm diagnosis and stage.</p>
                  
                  <h4 className="text-xl font-semibold text-sage-600 mb-4">Key Services:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-forest-600 mb-2">Standardized Screening:</h5>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Mini-Mental State Examination (MMSE)</li>
                        <li>• Montreal Cognitive Assessment (MoCA)</li>
                        <li>• Clock Drawing Test</li>
                        <li>• Memory recall assessments</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-forest-600 mb-2">Medical Workup:</h5>
                      <ul className="text-gray-600 space-y-1">
                        <li>• CBC, LFT, RFT, B12, thyroid testing</li>
                        <li>• VDRL, HIV screening (as indicated)</li>
                        <li>• Neurology consultation</li>
                        <li>• MRI/CT imaging if needed</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-semibold text-forest-600 mb-2">Personalized Care Plan:</h5>
                    <p className="text-gray-600">Medication review including cholinesterase inhibitors and memantine, safety recommendations, and family counseling sessions.</p>
                  </div>
                </div>
              )}

              {selectedTab === "day-programs" && (
                <div>
                  <h3 className="text-2xl font-bold text-forest-600 mb-4">Day Programs & Support Groups</h3>
                  <p className="text-gray-700 mb-6">Daily group-based activities to preserve function and social engagement.</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-sage-600 mb-4">Activities Include:</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Cognitive Stimulation Therapy (CST):</strong> Memory exercises, group reminiscence, word puzzles</li>
                        <li>• <strong>Music & Art Therapy:</strong> Improves mood, reduces agitation, fosters creativity</li>
                        <li>• <strong>Physical Movement:</strong> Seated exercises, guided walking, fall-prevention drills</li>
                        <li>• <strong>Social Activities:</strong> Group games, storytelling, cultural programs</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-sage-600 mb-4">Caregiver Support:</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Weekly Support Groups:</strong> Discussion of coping strategies and stress reduction</li>
                        <li>• <strong>Monthly Education Workshops:</strong> Communication techniques, nutrition, legal planning</li>
                        <li>• <strong>Respite Care:</strong> Providing caregivers time for self-care</li>
                        <li>• <strong>Family Counseling:</strong> Individual and group sessions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === "home-care" && (
                <div>
                  <h3 className="text-2xl font-bold text-forest-600 mb-4">Home-Based Care & Safety</h3>
                  <p className="text-gray-700 mb-6">Individualized home visits to ensure a safe environment and equip caregivers with essential skills.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-sage-600 mb-3">Occupational Therapy Home Audit:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Fall-risk assessment (grab bars, non-slip mats)</li>
                        <li>• Home modifications (lighting, handrails, bathroom adjustments)</li>
                        <li>• Adaptive equipment recommendations (walking aids, safety alarms)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-sage-600 mb-3">Nursing Visits:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Medication reconciliation and adherence monitoring</li>
                        <li>• Vital checks (BP, glucose, weight) and basic labs</li>
                        <li>• Education on skin care, oral hygiene, nutrition</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-sage-600 mb-3">Caregiver Training Modules:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• <strong>Managing Behavioral Challenges:</strong> Approaches to handle wandering, aggression, sundowning</li>
                        <li>• <strong>Communication Strategies:</strong> Validation therapy, gentle redirection, nonverbal cues</li>
                        <li>• <strong>Daily Routine Planning:</strong> Structured meal, activity, and rest schedules</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === "assisted-living" && (
                <div>
                  <h3 className="text-2xl font-bold text-forest-600 mb-4">Assisted Living & Community Linkages</h3>
                  <p className="text-gray-700 mb-6">For patients transitioning to higher levels of care, we partner with trusted assisted living communities.</p>
                  
                  <h4 className="text-xl font-semibold text-sage-600 mb-4">Services Include:</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-forest-600 mb-2">Seamless Coordination:</h5>
                      <p className="text-gray-600">Meetings between our team and facility staff to ensure continuity of care and smooth transition.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-forest-600 mb-2">Regular Check-ins:</h5>
                      <p className="text-gray-600">Monthly telehealth rounds by our geriatric psychiatrist to review medication and care plan adjustments.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-forest-600 mb-2">Rehabilitation Follow-up:</h5>
                      <p className="text-gray-600">Referrals for physical therapy or speech therapy if needed, ensuring comprehensive care.</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-forest-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-forest-600 mb-12 text-center font-montserrat">Why Trust Us with Your Loved One's Care?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-forest-600 mb-2">Specialized Dementia Expertise</h3>
                <p className="text-sm text-gray-600">Geriatric psychiatrists and neuropsychologists with extensive dementia training and Kerala experience.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-forest-600 mx-auto mb-4" />
                <h3 className="font-semibold text-forest-600 mb-2">Holistic, Family-Centered Model</h3>
                <p className="text-sm text-gray-600">We empower caregivers through education, support groups, and home-safety training.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-sand-600 mx-auto mb-4" />
                <h3 className="font-semibold text-forest-600 mb-2">Integrated Day Programs</h3>
                <p className="text-sm text-gray-600">Evidence-based cognitive stimulation and therapeutic activities that preserve function.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-forest-600 mb-2">Continuum of Care</h3>
                <p className="text-sm text-gray-600">From clinic evaluations to home visits and assisted living coordination.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-forest-600 mb-12 text-center font-montserrat">Voices of Gratitude & Renewal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <blockquote className="text-lg text-forest-600 font-montserrat mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-sage-600 italic">{testimonial.attribution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Screening & Resources */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-forest-600 mb-12 text-center font-montserrat">Free Memory Screening & Caregiver Guides</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <h3 className="font-semibold text-forest-600 mb-4">Mini-Cog Screening Tool</h3>
                <p className="text-gray-600 mb-6">Complete our brief Mini-Cog test (clock-drawing & recall) to get an initial sense of cognitive function.</p>
                <Button className="bg-forest-600 hover:bg-forest-700">Start Mini-Cog Test →</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Download className="h-12 w-12 text-forest-600 mx-auto mb-4" />
                <h3 className="font-semibold text-forest-600 mb-4">Downloadable Caregiver Guide</h3>
                <p className="text-gray-600 mb-6">Comprehensive "Caregiver's Guide to Dementia Care" covering behavior management, home safety, and nutrition.</p>
                <Button className="bg-forest-600 hover:bg-forest-700">Download Guide →</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Video className="h-12 w-12 text-sand-600 mx-auto mb-4" />
                <h3 className="font-semibold text-forest-600 mb-4">Upcoming Webinars</h3>
                <p className="text-gray-600 mb-6">Join our free monthly webinars on managing sundowning, nutrition for dementia, and legal planning.</p>
                <Button className="bg-forest-600 hover:bg-forest-700">View Schedule →</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities & Location */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-forest-600 mb-12 text-center font-montserrat">Our Dementia Care Centers in Kochi/Ernakulam</h2>
          
          {/* Karukutty Location */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-forest-600 mb-4">Karukutty Memory Clinic</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-sage-600 mt-1" />
                    <div>
                      <p className="text-gray-600">Karukutty, Angamaly, Kerala</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-sage-600" />
                    <div>
                      <p className="text-gray-600">+91-73061 50312, +91-90378 99299</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Button 
                      className="bg-forest-600 hover:bg-forest-700"
                      onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Mindful+Rejuvenation+Hospital,+Kurishupally+Junction,+Chittoor+Rd,+Vaduthala,+Kochi,+Kerala+682023', '_blank')}
                    >
                      Get Directions
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open('tel:+917306150312')}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.4352625194133!2d76.38062927455447!3d10.226435569098447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0801a2f4087abb%3A0x6a49af56d0f421e9!2sMindful%20Rejuvenation-%20De%20addiction%20Centre%20In%20Kochi%20Ernakulam%20Mental%20Hospital%20Psychiatric%20Ernakulam!5e0!3m2!1sen!2sin!4v1749128796259!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Karukutty Memory Clinic Location"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Vaduthala Location */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-forest-600 mb-4">Vaduthala Day Care Center</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-sage-600 mt-1" />
                    <div>
                      <p className="text-gray-600">Vaduthala, Kochi, Kerala</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-sage-600" />
                    <div>
                      <p className="text-gray-600">Helpline: +91-9037899299</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Button 
                      className="bg-forest-600 hover:bg-forest-700"
                      onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Mindful+Rejuvenation+Hospital,+Kurishupally+Junction,+Chittoor+Rd,+Vaduthala,+Kochi,+Kerala+682023', '_blank')}
                    >
                      Get Directions
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open('tel:+917306150312')}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.991040971443!2d76.27355727455223!3d10.017597372732697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dc5dc02de8f%3A0xc7cd995fdc4a5e30!2sMindful%20Rejuvenation%20Hospital-%20Psychiatry%2C%20Rehabilitation%20and%20Dementia%20care%20Deaddiction%20Kochi%20Psychiatry%20Hospital!5e0!3m2!1sen!2sin!4v1749128829604!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vaduthala Day Care Center Location"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Kaloor Location */}
          <div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-forest-600 mb-4">Kaloor Outpatient Center</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-sage-600 mt-1" />
                    <div>
                      <p className="text-gray-600">Kaloor, Kochi, Kerala</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-sage-600" />
                    <div>
                      <p className="text-gray-600">+91-8129199903/02</p>
                    </div>
                  </div>
                  
                  <div className="bg-sage-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Services:</strong> OP consultations, OP based therapies, counselling services
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Button 
                      className="bg-forest-600 hover:bg-forest-700"
                      onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Mindful+Rejuvenation+Hospital,+Kurishupally+Junction,+Chittoor+Rd,+Vaduthala,+Kochi,+Kerala+682023', '_blank')}
                    >
                      Get Directions
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open('tel:+918129199903')}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2020394496594!2d76.29569227455208!3d10.000163373032883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d576c3a921d%3A0x20a9a1ca6b63af41!2sMindful%20Life%20%2F%20Psychiatric%20Hospital%20Ernakulam%20Family%20Counselling%20Centre%20Kochi!5e0!3m2!1sen!2sin!4v1749128856945!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kaloor Outpatient Center Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-forest-600 mb-12 text-center font-montserrat">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="evaluation" className="bg-sand-50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-forest-600">
                What happens during a Memory Clinic evaluation?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                You'll meet with our geriatric psychiatrist and neuropsychologist for a detailed history review, cognitive screening (MMSE & MoCA), and any required lab work (blood tests, imaging). Based on findings, we develop a personalized management plan—medications, therapy, and safety recommendations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="day-program" className="bg-sand-50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-forest-600">
                How do I know if my loved one needs a day program?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                If early- to mid-stage dementia is impacting social engagement or daily routines, our day programs—offering cognitive stimulation, therapeutic activities, and peer interaction—can enhance quality of life and provide caregiver respite. Contact us for an initial consultation and tour.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="home-visits" className="bg-sand-50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-forest-600">
                Can I get home visits for my family member?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Yes. We offer home-based care coordination, including occupational therapy home safety audits, in-home nursing visits for medication monitoring, and caregiver training. These services are ideal if travel is challenging or if the patient requires a stable environment.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="caregiver-support" className="bg-sand-50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-forest-600">
                What support do you offer for caregivers?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Caregivers receive: Monthly workshops on behavior management, communication, and self-care • Weekly support groups facilitated by clinical psychologists • Access to downloadable guides and video tutorials on daily nursing tasks, safety planning, and legal/financial considerations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="insurance" className="bg-sand-50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-forest-600">
                Are your services covered by insurance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Many health insurance plans cover psychiatric evaluations and at least a portion of day program costs. Please contact our front desk for plan verification and pre-authorization assistance. We also provide official receipts for out-of-pocket payments.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 bg-forest-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Ready to Enhance Memory Health & Caregiver Support?</h2>
          <p className="text-xl mb-8">Contact us today to schedule your memory clinic evaluation or inquire about our day programs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-forest-600 hover:bg-sand-100"
              onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Evaluation →
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-forest-600"
              onClick={() => window.open('tel:+917306150312')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call +91-73061 50312
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-2xl font-bold text-forest-600 mb-8 text-center font-montserrat">Request a Dementia Care Consultation</h3>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="Your Name" required />
                  </div>
                  <div>
                    <Label htmlFor="relationship">Relationship to Patient *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="other">Other Caregiver</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="patientName">Patient Name & Age *</Label>
                  <Input id="patientName" placeholder="Patient Name & Age" required />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="Your Phone Number" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="service">Select Service *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="memory-clinic">Memory Clinic Evaluation</SelectItem>
                      <SelectItem value="day-program">Day Program Enrollment</SelectItem>
                      <SelectItem value="home-care">Home-Based Care Assessment</SelectItem>
                      <SelectItem value="assisted-living">Assisted Living Coordination</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="notes">Brief Notes</Label>
                  <Textarea id="notes" placeholder="Any specific concerns or questions..." />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="consent" required className="rounded" />
                  <Label htmlFor="consent" className="text-sm">
                    I consent to Mindful Rejuvenation storing my information and contacting me regarding dementia care. *
                  </Label>
                </div>
                
                <Button type="submit" className="w-full bg-forest-600 hover:bg-forest-700">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <MiniMapWidget title="Specialized dementia care at our Vaduthala, Kochi facility" />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default DementiaCare;
