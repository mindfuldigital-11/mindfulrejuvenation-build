import React, { useEffect } from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import MiniMapWidget from '@/components/shared/MiniMapWidget';
import EmergencyBanner from '@/components/shared/EmergencyBanner';
import CTAButtons from '@/components/shared/CTAButtons';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Quote, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost2 = () => {
  // SEO and Structured Data
  useEffect(() => {
    // Update document title and meta tags
    document.title = "Depression in Adults and Teenagers: Expert Psychiatrist Interview | Mindful Rejuvenation Kochi";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Learn about depression symptoms in adults and teenagers from Dr. Evelyn George, Consultant Psychiatrist in Kochi, Kerala. Understand warning signs, treatment options, and when to seek help.');
    document.head.appendChild(metaDescription);

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'adult depression symptoms, teenage depression signs, depression treatment India, psychiatrist Kochi Kerala, mental health support teenagers, depression counseling adults, depression therapy Kerala, mental health stigma India');
    document.head.appendChild(metaKeywords);

    // Add canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.mindfulrejuvenation.in/blog/depression-adults-teenagers');
    document.head.appendChild(canonicalLink);

    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Depression in Adults and Teenagers: Expert Psychiatrist Interview');
    document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Learn about depression symptoms in adults and teenagers from Dr. Evelyn George, Consultant Psychiatrist in Kochi, Kerala.');
    document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://www.mindfulrejuvenation.in/blog/depression-adults-teenagers');
    document.head.appendChild(ogUrl);

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'article');
    document.head.appendChild(ogType);

    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://www.mindfulrejuvenation.in/blog-thumbnails/depression-adults-teenagers-share.jpg');
    document.head.appendChild(ogImage);

    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Depression in Adults and Teenagers: Expert Psychiatrist Interview",
      "description": "Learn about depression symptoms in adults and teenagers from Dr. Evelyn George, Consultant Psychiatrist in Kochi, Kerala.",
      "image": "https://www.mindfulrejuvenation.in/lovable-uploads/3081d611-257b-40c3-a2c5-c2a2722ff07a.png",
      "author": {
        "@type": "Person",
        "name": "Dr. Evelyn George",
        "jobTitle": "Consultant Psychiatrist",
        "worksFor": {
          "@type": "Organization",
          "name": "Mindful Rejuvenation"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Mindful Rejuvenation",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.mindfulrejuvenation.in/lovable-uploads/3014c635-3d79-406e-8213-e75b8e1cf89c.png"
        }
      },
      "datePublished": "2025-07-20",
      "dateModified": "2025-07-20",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.mindfulrejuvenation.in/blog/depression-adults-teenagers"
      },
      "keywords": "adult depression symptoms, teenage depression signs, depression treatment India, psychiatrist Kochi Kerala",
      "about": [
        {
          "@type": "MedicalCondition",
          "name": "Adult Depression",
          "alternateName": "Major Depressive Disorder in Adults"
        },
        {
          "@type": "MedicalCondition", 
          "name": "Teenage Depression",
          "alternateName": "Adolescent Depression"
        }
      ],
      "medicalAudience": {
        "@type": "PeopleAudience",
        "audienceType": "General Public"
      }
    };

    // Add FAQ structured data
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the signs of depression in adults?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adult depression signs include constant tiredness, loss of interest in activities, frequent irritability, changes in appetite, sleep disturbances, feelings of guilt or worthlessness, and difficulty concentrating."
          }
        },
        {
          "@type": "Question",
          "name": "How does teenage depression differ from adult depression?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Teenage depression often presents as anger and irritation, withdrawal from family and friends, changes in sleep or eating habits, dropping school performance, and self-harm behaviors."
          }
        },
        {
          "@type": "Question",
          "name": "When should I seek help for depression in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seek professional help if symptoms last more than 2 weeks, affect daily functioning, or include thoughts of self-harm. Contact a psychiatrist or mental health professional for proper evaluation and treatment."
          }
        }
      ]
    };

    // Insert structured data
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(structuredData);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(faqData);
    document.head.appendChild(script2);

    // Cleanup function
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(canonicalLink);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogUrl);
      document.head.removeChild(ogType);
      document.head.removeChild(ogImage);
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background pt-[72px]">
      <EmergencyBanner />
      <Header />
      
      {/* Breadcrumb Navigation */}
      <section className="py-4 px-4 bg-sage-50">
        <div className="container mx-auto">
          <nav className="text-sm text-forest-600">
            <Link to="/" className="hover:text-forest-800">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-forest-800">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-forest-800">Depression in Adults and Teenagers</span>
          </nav>
          <Link to="/blog" className="flex items-center gap-2 text-forest-600 hover:text-forest-800 transition-colors mt-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-forest-50 to-sage-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Mental Health Expert Interview</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-forest-900 font-montserrat">
              Depression in Adults and Teenagers: Is This Depression?
            </h1>
            <p className="text-xl text-forest-700 mb-8">
              Expert Psychiatrist Answers Real-Life Questions on Adult and Teenage Depression in Kochi, Kerala, India
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap justify-center gap-6 text-forest-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>July 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Expert Interview - Mental Health</span>
              </div>
            </div>
            
            {/* Share Section */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-4">
                <span className="text-forest-600">Share this article:</span>
                <button 
                  onClick={() => navigator.share ? navigator.share({title: document.title, url: window.location.href}) : navigator.clipboard.writeText(window.location.href)}
                  className="flex items-center gap-2 px-4 py-2 bg-forest-100 hover:bg-forest-200 rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          
          {/* Table of Contents */}
          <Card className="mb-8 bg-sage-50 border-sage-200">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-forest-900">📖 What You'll Learn in This Article</h2>
              <ul className="space-y-2">
                <li><a href="#adult-depression" className="text-forest-600 hover:text-forest-800">• Adult Depression Signs and Case Studies</a></li>
                <li><a href="#teenage-depression" className="text-forest-600 hover:text-forest-800">• Teenage Depression Warning Signs</a></li>
                <li><a href="#breaking-stigma" className="text-forest-600 hover:text-forest-800">• Breaking Mental Health Stigma in India</a></li>
                <li><a href="#when-seek-help" className="text-forest-600 hover:text-forest-800">• When to Seek Professional Help</a></li>
                <li><a href="#family-support" className="text-forest-600 hover:text-forest-800">• How Families Can Support Recovery</a></li>
                <li><a href="#faq" className="text-forest-600 hover:text-forest-800">• Frequently Asked Questions</a></li>
              </ul>
            </CardContent>
          </Card>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong>Depression affects millions of Indians across all age groups, yet many cases go unrecognized due to stigma and lack of awareness.</strong> In this comprehensive interview with <strong>Dr. Evelyn George, Consultant Psychiatrist at Mindful Rejuvenation in Kochi, Kerala</strong>, we delve deeper into depression, exploring how it manifests differently in adults and teenagers in the Indian context, and addressing common misconceptions about mental health.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              This expert guidance will help you recognize depression symptoms in yourself or loved ones and understand when professional mental health support is essential for recovery.
            </p>
          </div>

          {/* Participants */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img 
                    src="/lovable-uploads/2bab374f-d8ae-4bcc-b084-3dd6ae48b136.png" 
                    alt="Mr Nash Razi - Mental Health Interview Host and Media Professional" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Mr. Nash Razi</h3>
                    <p className="text-muted-foreground">Media Professional & Interviewer</p>
                    <Badge variant="outline" className="mt-2">Host</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img 
                    src="/lovable-uploads/3081d611-257b-40c3-a2c5-c2a2722ff07a.png" 
                    alt="Dr Evelyn George - Consultant Psychiatrist specializing in adult and teenage depression treatment at Mindful Rejuvenation Kochi Kerala" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Dr. Evelyn George</h3>
                    <p className="text-muted-foreground">Consultant Psychiatrist</p>
                    <Badge variant="default" className="mt-2">Expert</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interview Content */}
          <div className="space-y-8">
            
            {/* Opening Question */}
            <div className="bg-sage-50 p-6 rounded-lg border-l-4 border-forest-500">
              <div className="flex items-start gap-3 mb-4">
                <Quote className="w-5 h-5 text-forest-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-forest-900 mb-2">Nash Razi:</h3>
                  <p className="text-forest-800">
                    Dr. Evelyn George, thank you for joining us. Depression is a term we hear a lot nowadays. 
                    But many still confuse it with just "feeling low." Can you explain what depression really looks like?
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-white border-forest-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <img 
                    src="/lovable-uploads/3081d611-257b-40c3-a2c5-c2a2722ff07a.png" 
                    alt="Dr Evelyn George" 
                    className="w-10 h-10 rounded-full object-cover mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-forest-900 mb-2">Dr. Evelyn George:</h4>
                    <p className="text-forest-800 leading-relaxed">
                      Thank you for having me. You're absolutely right. In India, people often mistake depression 
                      for a phase, laziness, or a character flaw. But clinical depression is a deep, ongoing 
                      disturbance in emotional well-being. It affects how you feel, think, and act — and it 
                      doesn't simply go away with a good night's sleep or a vacation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Adult Depression Signs */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200" id="adult-depression">
              <h3 className="font-bold text-lg mb-4 text-blue-900">🌧️ Depression in Adults - Real Example</h3>
              <p className="text-xs text-blue-600 mb-4 italic">
                *Patient details anonymized to protect privacy
              </p>
              <Card className="bg-white">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Mr. Ravi's Case Study</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    35-year-old software engineer from Kochi. Initially came with complaints of body pain, 
                    low energy, and disturbed sleep. He thought it was a vitamin issue. But over sessions, 
                    it emerged that he no longer enjoyed work, avoided social gatherings, and had trouble 
                    waking up with purpose each morning.
                  </p>
                  <span className="text-xs text-muted-foreground">*Name and details changed for privacy</span>
                </CardContent>
              </Card>
            </div>

            {/* Adult Depression Symptoms */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-forest-900">Common Depression Indicators in Indian Adults</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Constant tiredness</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Disinterest in things once enjoyed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Frequent irritability or anger</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Reduced appetite or emotional eating</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Poor sleep or oversleeping</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Feelings of guilt or worthlessness</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Trouble concentrating or making decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Physical complaints (headaches, stomach upset)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Thoughts like "I'm a burden"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Feeling like "Nothing matters"</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Teenage Depression */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200" id="teenage-depression">
              <h3 className="font-bold text-lg mb-4 text-purple-900">🎒 Teenage Depression - Often Overlooked</h3>
              <p className="text-xs text-purple-600 mb-4 italic">
                *Patient details anonymized to protect privacy
              </p>
              <Card className="bg-white">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Ananya's Case Study</h4>
                  <p className="text-sm text-purple-700 mb-3">
                    16-year-old bright student from Thrissur. Suddenly became withdrawn, grades dropped, 
                    stopped speaking to friends. Parents thought it was "exam stress." During therapy, 
                    she admitted to feeling hopeless, crying for no reason, and wishing she could disappear.
                  </p>
                  <span className="text-xs text-muted-foreground">*Name and details changed for privacy</span>
                </CardContent>
              </Card>
            </div>

            {/* Teen Depression Signs */}
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-900">Signs of Depression in Teenagers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Anger or constant irritation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Withdrawing from friends and family</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Changes in sleep or eating habits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Dropping performance in school</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Low self-esteem and guilt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Saying "No one cares" or "I wish I wasn't here"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Self-harm or risk-taking behavior</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Excessive screen use to escape feelings</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Stigma Discussion */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200" id="breaking-stigma">
              <h3 className="font-bold text-lg mb-4 text-red-900">🤷 Breaking the Stigma</h3>
              <Card className="bg-white">
                <CardContent className="p-4">
                  <p className="text-red-800 mb-3">
                    "That's a big hurdle in India — stigma. We never tell a person with asthma to 'just breathe better.' 
                    So why do we tell someone with depression to 'just be strong'?"
                  </p>
                  <p className="text-red-700 text-sm">
                    Depression is a medical condition, with psychological, emotional, and even physical roots. 
                    Just like diabetes or blood pressure, it needs professional care — not judgment or shame.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* When to Seek Help */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200" id="when-seek-help">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-green-900">🚨 When to See a Mental Health Expert</h3>
                <div className="space-y-4">
                  <p className="text-green-800">
                    If symptoms last more than 2 weeks, or begin affecting daily life — like missing work, 
                    falling grades, avoiding family — it's time to reach out.
                  </p>
                  <div className="bg-white p-4 rounded-md">
                    <h4 className="font-semibold text-green-800 mb-2">Also seek help if there are:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-green-700">Frequent crying spells</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-green-700">Anger outbursts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-green-700">Thoughts of death or self-harm</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-green-700">Feelings of worthlessness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-green-700">Constant fatigue despite rest</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-green-800 font-medium">
                    You don't need to "hit rock bottom" to ask for help.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Family Support */}
            <Card className="bg-blue-50 border-blue-200" id="family-support">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-blue-900">💬 How Indian Families Can Support</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">✅ What TO Say:</h4>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-md text-sm text-green-700">
                        "I'm here for you."
                      </div>
                      <div className="bg-white p-3 rounded-md text-sm text-green-700">
                        "Let's talk about how you're feeling."
                      </div>
                      <div className="bg-white p-3 rounded-md text-sm text-green-700">
                        "Would you like help finding a counselor?"
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">❌ What NOT to Say:</h4>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-md text-sm text-red-700">
                        "You're overthinking."
                      </div>
                      <div className="bg-white p-3 rounded-md text-sm text-red-700">
                        "Others have it worse."
                      </div>
                      <div className="bg-white p-3 rounded-md text-sm text-red-700">
                        "Don't be so negative."
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-blue-800 mt-4 text-sm">
                  Never shame someone for taking therapy or medication.
                </p>
              </CardContent>
            </Card>

            {/* Final Message */}
            <Card className="bg-sage-50 border-sage-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Quote className="w-8 h-8 text-sage-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg italic text-sage-800 mb-4">
                      "Depression doesn't care about age, income, or background. It's more common than we admit. 
                      But it is also treatable. Let's make space for conversations. Let's normalize seeking help. 
                      And remember, reaching out is a sign of strength — not weakness."
                    </p>
                    <div className="flex items-center gap-3">
                      <img 
                        src="/lovable-uploads/3081d611-257b-40c3-a2c5-c2a2722ff07a.png" 
                        alt="Dr Evelyn George" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="font-semibold text-sage-700">— Dr. Evelyn George</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-r from-forest-600 to-forest-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">📝 Key Takeaways</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sage-300 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Depression in adults can look like tiredness, disinterest, irritability, and sleep problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sage-300 rounded-full mt-2 flex-shrink-0"></span>
                    <span>In teenagers, it may appear as anger, isolation, school drop-off, and risky behavior</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sage-300 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Seek help if symptoms persist for more than 2 weeks</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sage-300 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Don't ignore early signs — early intervention saves lives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sage-300 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Family support and understanding are critical</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sage-300 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Reaching out for help is a sign of strength</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <Card className="mt-12" id="faq">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-forest-900">❓ Frequently Asked Questions About Depression</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-forest-800 mb-2">Q: What are the main differences between adult and teenage depression?</h3>
                    <p className="text-forest-700">Adult depression often presents as persistent fatigue, loss of interest, and emotional numbness. Teenage depression typically shows as anger, irritability, social withdrawal, and academic decline. Both require professional evaluation and treatment.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-forest-800 mb-2">Q: How common is depression in India?</h3>
                    <p className="text-forest-700">Depression affects millions of Indians across all age groups. Despite high prevalence, many cases go undiagnosed due to stigma and lack of mental health awareness. Early recognition and treatment are crucial.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-forest-800 mb-2">Q: What depression treatment options are available in Kerala?</h3>
                    <p className="text-forest-700">Kerala offers various treatment options including psychiatry services, counseling, therapy, medication management, and support groups. At Mindful Rejuvenation in Kochi, we provide comprehensive mental health care for all age groups.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-forest-800 mb-2">Q: How can families support someone with depression?</h3>
                    <p className="text-forest-700">Families can support by listening without judgment, encouraging professional help, avoiding dismissive comments, and being patient with the recovery process. Family education about depression is also beneficial.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-forest-800 mb-2">Q: When should parents worry about teenage depression?</h3>
                    <p className="text-forest-700">Parents should seek help if teenagers show persistent mood changes, social withdrawal, academic decline, sleep disturbances, or any mention of self-harm for more than two weeks.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Warning Section */}
            <Card className="mt-8 bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-red-900">🚨 Emergency Warning Signs - Seek Immediate Help</h2>
                <p className="text-red-800 mb-4">Contact a mental health professional immediately if you or someone you know experiences:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-red-700">Thoughts of suicide or self-harm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-red-700">Talking about wanting to die or disappear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-red-700">Giving away belongings or making final arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-red-700">Extreme mood swings or sudden calmness after severe depression</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <p className="font-semibold text-red-900">24/7 Emergency Contact:</p>
                  <p className="text-red-800">• Crisis Helpline: +917306150312</p>
                  <p className="text-red-800">• WhatsApp Support: +919037899299</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-forest-600 to-forest-700 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Experiencing Depression Symptoms?</h3>
                <p className="text-lg mb-6 text-sage-100">
                  Don't wait for symptoms to worsen. Our expert team provides compassionate, 
                  professional support for individuals and families dealing with depression.
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

      <MiniMapWidget title="Expert depression treatment at our Vaduthala, Kochi center" />
      <Footer />
    </div>
  );
};

export default BlogPost2;