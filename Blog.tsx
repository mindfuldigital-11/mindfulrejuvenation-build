import React, { useEffect } from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import FloatingCTA from '@/components/shared/FloatingCTA';
import MiniMapWidget from '@/components/shared/MiniMapWidget';
import EmergencyBanner from '@/components/shared/EmergencyBanner';
import CTAButtons from '@/components/shared/CTAButtons';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // SEO optimization for main blog page
  useEffect(() => {
    document.title = "Mental Health Blog: Expert Depression Insights | Mindful Rejuvenation Kochi";
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Expert mental health insights from leading psychiatrists in Kochi, Kerala. Learn about depression symptoms, treatment options, and mental health support. Professional interviews and case studies.');
    document.head.appendChild(metaDescription);

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'mental health blog, depression blog, psychiatrist interviews, depression symptoms, mental health Kochi Kerala, depression treatment India, psychiatric care, mental health support, depression awareness');
    document.head.appendChild(metaKeywords);

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.mindfulrejuvenation.in/blog');
    document.head.appendChild(canonicalLink);

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Mental Health Blog: Expert Depression Insights | Mindful Rejuvenation');
    document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Expert mental health insights from leading psychiatrists in Kochi, Kerala. Learn about depression symptoms and treatment options.');
    document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://www.mindfulrejuvenation.in/blog');
    document.head.appendChild(ogUrl);

    // Blog structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Mindful Rejuvenation Mental Health Blog",
      "description": "Expert mental health insights from leading psychiatrists in Kochi, Kerala",
      "url": "https://www.mindfulrejuvenation.in/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Mindful Rejuvenation",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.mindfulrejuvenation.in/lovable-uploads/3014c635-3d79-406e-8213-e75b8e1cf89c.png"
        }
      },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "Is It Just Sadness or Clinical Depression?",
          "url": "https://www.mindfulrejuvenation.in/blog/sadness-vs-depression",
          "datePublished": "2025-05-15",
          "author": {
            "@type": "Person",
            "name": "Dr. Evelyn George"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "Depression in Adults and Teenagers: Is This Depression?",
          "url": "https://www.mindfulrejuvenation.in/blog/depression-adults-teenagers",
          "datePublished": "2025-07-20",
          "author": {
            "@type": "Person",
            "name": "Dr. Evelyn George"
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(canonicalLink);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogUrl);
      document.head.removeChild(script);
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Is It Just Sadness or Clinical Depression?",
      subtitle: "A Psychiatrist Helps You Understand the Difference",
      date: "May 15, 2025",
      readTime: "8 min read",
      type: "Expert Interview",
      image: "/lovable-uploads/3081d611-257b-40c3-a2c5-c2a2722ff07a.png",
      description: "In this enlightening interview, we sit down with Dr. Evelyn George, Consultant Psychiatrist at Mindful Rejuvenation, to explore one of the most misunderstood aspects of mental health: the difference between normal sadness and clinical depression.",
      participants: [
        {
          name: "Mr. Nash Razi",
          role: "Media Professional & Interviewer",
          image: "/lovable-uploads/2bab374f-d8ae-4bcc-b084-3dd6ae48b136.png",
          badge: "Host"
        },
        {
          name: "Dr. Evelyn George",
          role: "Consultant Psychiatrist",
          image: "/lovable-uploads/3081d611-257b-40c3-a2c5-c2a2722ff07a.png",
          badge: "Expert"
        }
      ]
    },
    {
      id: 2,
      title: "Is This Depression?",
      subtitle: "A Psychiatrist Answers Real-Life Questions on Adult and Teenage Depression in India",
      date: "July 20, 2025",
      readTime: "10 min read",
      type: "Expert Interview",
      image: "/lovable-uploads/3081d611-257b-40c3-a2c5-c2a2722ff07a.png",
      description: "Depression is a term we hear a lot nowadays. But many still confuse it with just 'feeling low.' Dr. Evelyn George explains what depression really looks like in adults and teenagers in India.",
      participants: [
        {
          name: "Mr. Nash Razi",
          role: "Media Professional & Interviewer",
          image: "/lovable-uploads/2bab374f-d8ae-4bcc-b084-3dd6ae48b136.png",
          badge: "Host"
        },
        {
          name: "Dr. Evelyn George",
          role: "Consultant Psychiatrist",
          image: "/lovable-uploads/3081d611-257b-40c3-a2c5-c2a2722ff07a.png",
          badge: "Expert"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-[72px]">
      <EmergencyBanner />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-forest-50 to-sage-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Mental Health Insights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-forest-900 font-montserrat">
              Mental Health Blog: Expert Depression Insights
            </h1>
            <p className="text-xl text-forest-700 mb-8">
              Professional guidance on depression symptoms, treatment options, and mental health support from leading psychiatrists in Kochi, Kerala
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Listing */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Enhanced Participants Display */}
                  <div className="md:col-span-1">
                    <div className="relative overflow-hidden bg-gradient-to-br from-sage-50 via-forest-50 to-sage-100 flex items-center justify-center p-4 md:p-6 rounded-2xl border border-sage-200 shadow-lg min-h-[400px] md:min-h-[450px]">
                      <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-4 md:gap-6 w-full justify-center">
                          <div className="text-center transform hover:scale-105 transition-all duration-500">
                            <div className="relative group">
                              <div className="absolute inset-0 bg-gradient-to-r from-sage-400 to-forest-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                              <img 
                                src={post.participants[0].image} 
                                alt={post.participants[0].name}
                                className="relative w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-2xl ring-2 ring-sage-200/50"
                              />
                              <Badge 
                                variant="outline" 
                                className="absolute -bottom-2 -right-2 bg-white text-xs px-3 py-1.5 shadow-lg border-sage-200 font-medium"
                              >
                                {post.participants[0].badge}
                              </Badge>
                            </div>
                            <p className="text-sm font-semibold text-forest-700 mt-3">{post.participants[0].name}</p>
                            <p className="text-xs text-forest-600">{post.participants[0].role}</p>
                          </div>
                          
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-forest-300 to-sage-300 flex items-center justify-center shadow-xl">
                              <User className="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </div>
                            <div className="w-16 h-1.5 bg-gradient-to-r from-forest-400 via-sage-400 to-forest-400 rounded-full shadow-sm"></div>
                            <p className="text-xs text-forest-600 font-medium">VS</p>
                          </div>
                          
                          <div className="text-center transform hover:scale-105 transition-all duration-500">
                            <div className="relative group">
                              <div className="absolute inset-0 bg-gradient-to-r from-forest-400 to-sage-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                              <img 
                                src={post.participants[1].image} 
                                alt={post.participants[1].name}
                                className="relative w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-2xl ring-2 ring-forest-200/50"
                              />
                              <Badge 
                                variant="default" 
                                className="absolute -bottom-2 -right-2 bg-forest-600 text-white text-xs px-3 py-1.5 shadow-lg font-medium"
                              >
                                {post.participants[1].badge}
                              </Badge>
                            </div>
                            <p className="text-sm font-semibold text-forest-700 mt-3">{post.participants[1].name}</p>
                            <p className="text-xs text-forest-600">{post.participants[1].role}</p>
                          </div>
                        </div>
                        
                        <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl px-6 py-3 shadow-md">
                          <p className="text-sm text-forest-600 font-semibold">Expert Interview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:col-span-2 p-6">
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-3">{post.type}</Badge>
                      <h2 className="text-2xl md:text-3xl font-bold text-forest-900 mb-2 leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-lg text-forest-700 mb-4">
                        {post.subtitle}
                      </p>
                    </div>

                    {/* Article Meta */}
                    <div className="flex flex-wrap gap-6 text-forest-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.type}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.description}
                    </p>

                    {/* Participants Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-forest-600 mb-3">Featured In This Interview</h4>
                      <div className="flex items-center gap-6">
                        {post.participants.map((participant, index) => (
                          <div key={index} className="flex items-center gap-3 bg-sage-25 rounded-lg p-3 border border-sage-100">
                            <div className="relative">
                              <img 
                                src={participant.image} 
                                alt={participant.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                              />
                              <Badge 
                                variant={participant.badge === 'Expert' ? 'default' : 'secondary'} 
                                className="absolute -bottom-1 -right-1 text-xs px-1.5 py-0.5"
                              >
                                {participant.badge}
                              </Badge>
                            </div>
                            <div>
                              <p className="font-medium text-forest-900 text-sm">{participant.name}</p>
                              <p className="text-xs text-forest-600">{participant.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Read Full Interview Button */}
                    <Button 
                      asChild
                      variant="default"
                      className="w-full md:w-auto bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800"
                    >
                      <Link to={post.id === 1 ? '/blog/sadness-vs-depression' : '/blog/depression-adults-teenagers'}>
                        <User className="w-4 h-4 mr-2" />
                        Read Full Interview
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-forest-600 to-forest-700 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Need Professional Support?</h3>
                <p className="text-lg mb-6 text-sage-100">
                  Our team of experienced psychiatrists and counselors are here to help you understand 
                  and overcome mental health challenges.
                </p>
                <CTAButtons 
                  size="lg" 
                  show24x7Badge={true}
                  className="justify-center"
                  callNumber="+917306150312"
                  whatsappNumber="+919037899299"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <MiniMapWidget title="Get mental health support at our Vaduthala, Kochi center" />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Blog;