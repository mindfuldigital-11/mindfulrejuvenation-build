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

const BlogSadnessDepression = () => {
  // SEO and Structured Data
  useEffect(() => {
    // Update document title and meta tags
    document.title = "Is It Just Sadness or Clinical Depression? Expert Psychiatrist Interview | Mindful Rejuvenation";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Learn the difference between normal sadness and clinical depression from Dr. Evelyn George, Consultant Psychiatrist. Understand symptoms, warning signs, and when to seek help in Kochi, Kerala.');
    document.head.appendChild(metaDescription);

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'depression symptoms, clinical depression vs sadness, depression treatment Kochi, psychiatrist depression help, mental health support Kerala, depression counseling India, teenage depression signs, adult depression symptoms');
    document.head.appendChild(metaKeywords);

    // Add canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.mindfulrejuvenation.in/blog/sadness-vs-depression');
    document.head.appendChild(canonicalLink);

    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Is It Just Sadness or Clinical Depression? Expert Psychiatrist Interview');
    document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Learn the difference between normal sadness and clinical depression from Dr. Evelyn George, Consultant Psychiatrist in Kochi, Kerala.');
    document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://www.mindfulrejuvenation.in/blog/sadness-vs-depression');
    document.head.appendChild(ogUrl);

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'article');
    document.head.appendChild(ogType);

    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://www.mindfulrejuvenation.in/blog-thumbnails/sadness-vs-depression-share.jpg');
    document.head.appendChild(ogImage);

    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Is It Just Sadness or Clinical Depression? Expert Psychiatrist Interview",
      "description": "Learn the difference between normal sadness and clinical depression from Dr. Evelyn George, Consultant Psychiatrist in Kochi, Kerala.",
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
      "datePublished": "2025-05-15",
      "dateModified": "2025-05-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.mindfulrejuvenation.in/blog/sadness-vs-depression"
      },
      "keywords": "depression symptoms, clinical depression vs sadness, depression treatment, psychiatrist depression help, mental health support Kochi Kerala",
      "about": [
        {
          "@type": "MedicalCondition",
          "name": "Clinical Depression",
          "alternateName": "Major Depressive Disorder"
        },
        {
          "@type": "MedicalCondition", 
          "name": "Sadness"
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
          "name": "What is the difference between sadness and clinical depression?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sadness is a natural emotion triggered by specific events and usually improves with time. Clinical depression is a persistent, disabling condition lasting 2+ weeks that affects daily functioning and doesn't go away on its own."
          }
        },
        {
          "@type": "Question",
          "name": "How long do depression symptoms last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clinical depression symptoms persist for 2 weeks or more, while normal sadness typically lasts days to a week."
          }
        },
        {
          "@type": "Question",
          "name": "When should I seek help for depression?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seek professional help if symptoms last over 2 weeks, affect daily functioning, or include thoughts of self-harm. Contact a psychiatrist in Kochi or mental health professional for proper evaluation."
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

    // Cleanup function to remove elements when component unmounts
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
            <span className="text-forest-800">Sadness vs Depression</span>
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
            <Badge variant="secondary" className="mb-4">Mental Health Insights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-forest-900 font-montserrat">
              Is It Just Sadness or Clinical Depression?
            </h1>
            <p className="text-xl text-forest-700 mb-8">
              Expert Psychiatrist Interview: Understanding Depression Symptoms vs Normal Sadness in Kochi, Kerala
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap justify-center gap-6 text-forest-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>May 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
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
                <li><a href="#difference" className="text-forest-600 hover:text-forest-800">• The Key Differences Between Sadness and Depression</a></li>
                <li><a href="#examples" className="text-forest-600 hover:text-forest-800">• Real-Life Examples from Clinical Practice</a></li>
                <li><a href="#signs" className="text-forest-600 hover:text-forest-800">• Subtle Warning Signs Often Missed</a></li>
                <li><a href="#family-support" className="text-forest-600 hover:text-forest-800">• How Families Can Provide Support</a></li>
                <li><a href="#when-seek-help" className="text-forest-600 hover:text-forest-800">• When to Seek Professional Help</a></li>
                <li><a href="#faq" className="text-forest-600 hover:text-forest-800">• Frequently Asked Questions</a></li>
              </ul>
            </CardContent>
          </Card>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong>Mental health awareness in India is growing, but confusion persists about depression symptoms versus normal emotional responses.</strong> In this comprehensive interview, we sit down with <strong>Dr. Evelyn George, Consultant Psychiatrist at Mindful Rejuvenation in Kochi, Kerala</strong>, to explore one of the most misunderstood aspects of mental health: the difference between normal sadness and clinical depression.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Whether you're experiencing low mood yourself, concerned about a family member, or simply want to understand depression better, this expert guidance will help you recognize when professional mental health support is needed.
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
                    alt="Dr Evelyn George - Consultant Psychiatrist specializing in depression treatment at Mindful Rejuvenation Kochi Kerala" 
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
          <div className="space-y-8" id="difference">
            
            {/* Question 1 */}
            <div className="bg-sage-50 p-6 rounded-lg border-l-4 border-forest-500">
              <div className="flex items-start gap-3 mb-4">
                <Quote className="w-5 h-5 text-forest-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-forest-900 mb-2">Nash Razi:</h3>
                  <p className="text-forest-800">
                    Dr. Evelyn George, thank you again for joining us. Many people say, "I'm depressed" 
                    when they feel low. But how do we know if it's normal sadness or clinical depression?
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
                      Great question — and very important. Sadness is a natural emotion, just like happiness, 
                      anger, or excitement. We all feel sad when we experience a loss, disappointment, or failure. 
                      But clinical depression is more than sadness — it's a persistent, disabling condition that 
                      doesn't go away on its own and needs medical attention.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Highlight Box */}
            <div className="bg-gradient-to-r from-forest-100 to-sage-100 p-6 rounded-lg border border-forest-200" id="examples">
              <h3 className="font-bold text-lg mb-3 text-forest-900">🎭 Real-Life Examples</h3>
              <p className="text-xs text-forest-600 mb-4 italic">
                *Names changed and details anonymized to protect privacy
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-md">
                  <h4 className="font-semibold text-forest-800 mb-2">Ramesh's Story (Normal Sadness)</h4>
                  <p className="text-sm text-forest-700">
                    40-year-old teacher who lost his mother. Cried, didn't eat well for a few days, 
                    missed school for a week. After a few weeks, gradually resumed normal activities.
                  </p>
                  <span className="text-xs text-muted-foreground">*Name changed for privacy</span>
                </div>
                <div className="bg-white p-4 rounded-md">
                  <h4 className="font-semibold text-forest-800 mb-2">Anjali's Story (Clinical Depression)</h4>
                  <p className="text-sm text-forest-700">
                    27-year-old bank employee disappointed about promotion. Two months later, 
                    still couldn't get out of bed, lost interest in everything, felt life was meaningless.
                  </p>
                  <span className="text-xs text-muted-foreground">*Name changed for privacy</span>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-forest-900">🧠 Key Differences: Sadness vs Depression</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-forest-50">
                        <th className="border border-forest-200 p-3 text-left font-semibold">Aspect</th>
                        <th className="border border-forest-200 p-3 text-left font-semibold">Sadness</th>
                        <th className="border border-forest-200 p-3 text-left font-semibold">Clinical Depression</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-forest-200 p-3 font-medium">Cause</td>
                        <td className="border border-forest-200 p-3">Triggered by specific event</td>
                        <td className="border border-forest-200 p-3">May or may not have clear trigger</td>
                      </tr>
                      <tr className="bg-sage-25">
                        <td className="border border-forest-200 p-3 font-medium">Duration</td>
                        <td className="border border-forest-200 p-3">Days to a week</td>
                        <td className="border border-forest-200 p-3">2 weeks or more</td>
                      </tr>
                      <tr>
                        <td className="border border-forest-200 p-3 font-medium">Intensity</td>
                        <td className="border border-forest-200 p-3">Painful but manageable</td>
                        <td className="border border-forest-200 p-3">Overwhelming and disabling</td>
                      </tr>
                      <tr className="bg-sage-25">
                        <td className="border border-forest-200 p-3 font-medium">Daily Function</td>
                        <td className="border border-forest-200 p-3">Can still work, eat, socialize</td>
                        <td className="border border-forest-200 p-3">Difficulty with basic tasks</td>
                      </tr>
                      <tr>
                        <td className="border border-forest-200 p-3 font-medium">Hope</td>
                        <td className="border border-forest-200 p-3">Believes things will improve</td>
                        <td className="border border-forest-200 p-3">Feels hopeless and empty</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Hidden Signs */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200" id="signs">
              <h3 className="font-bold text-lg mb-4 text-amber-900">👂 Subtle Signs Often Missed</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-amber-800">Becoming unusually quiet or withdrawn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-amber-800">Losing interest in food or overeating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-amber-800">Waking up too early (3–4 AM)</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-amber-800">Feeling guilty over small things</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-amber-800">Saying "I feel empty"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-amber-800">Expressing "What's the point?"</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Family Support Section */}
            <Card className="bg-blue-50 border-blue-200" id="family-support">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-blue-900">👨‍👩‍👧 What Families Should Do</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">✅ What TO Say:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="text-green-700">"I've noticed you haven't been yourself lately"</li>
                      <li className="text-green-700">"It's okay to need help"</li>
                      <li className="text-green-700">"I'll go with you if you want"</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">❌ What NOT to Say:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="text-red-700">"Just be happy"</li>
                      <li className="text-red-700">"You have everything, why are you sad?"</li>
                      <li className="text-red-700">"Others have it worse"</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-r from-forest-600 to-forest-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">📌 Key Takeaways</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sage-300 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Sadness is temporary, usually improves with time and support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sage-300 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Depression is persistent, intense, and affects daily functioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sage-300 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Watch for emotional, physical, and behavioral changes</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sage-300 rounded-full mt-2 flex-shrink-0"></span>
                    <span>If symptoms last over 2 weeks, seek professional help</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sage-300 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Support from loved ones plays a crucial role</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sage-300 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Recovery is possible with proper treatment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Final Quote */}
            <Card className="bg-sage-50 border-sage-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Quote className="w-8 h-8 text-sage-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg italic text-sage-800 mb-4">
                      "Feeling sad is human. But if it lasts too long, begins to take over your life, 
                      or makes you feel like there's no hope, then it's not just sadness — it could be depression. 
                      You don't have to fight it alone."
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

            {/* FAQ Section */}
            <Card className="mt-12" id="faq">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-forest-900">❓ Frequently Asked Questions About Depression</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-forest-800 mb-2">Q: How can I tell if I have depression or just normal sadness?</h3>
                    <p className="text-forest-700">If your low mood lasts more than 2 weeks, affects your daily functioning (work, relationships, self-care), and doesn't improve with time or support, it may be clinical depression. Professional evaluation by a psychiatrist in Kochi can provide proper diagnosis.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-forest-800 mb-2">Q: Can depression happen without a specific reason?</h3>
                    <p className="text-forest-700">Yes, clinical depression can occur without an obvious trigger. Unlike sadness which typically has a clear cause, depression can develop due to brain chemistry, genetics, hormones, or other medical factors.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-forest-800 mb-2">Q: What depression treatment options are available in Kerala?</h3>
                    <p className="text-forest-700">Treatment options include therapy (counseling), medication, lifestyle changes, and support groups. At Mindful Rejuvenation in Kochi, we offer comprehensive depression treatment including psychiatry services and counseling.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-forest-800 mb-2">Q: Is depression more common in certain age groups?</h3>
                    <p className="text-forest-700">Depression can affect people of all ages, but it often develops in teens, 20s, or 30s. Both adult depression and teenage depression have specific warning signs that families should watch for.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-forest-800 mb-2">Q: How long does depression treatment take?</h3>
                    <p className="text-forest-700">Depression treatment duration varies by individual. Some people see improvement in 6-8 weeks, while others may need longer-term support. Consistent treatment and professional guidance are key to recovery.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* When to Seek Help Section */}
            <Card className="mt-8 bg-red-50 border-red-200" id="when-seek-help">
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
                    <span className="text-red-700">Giving away belongings or saying goodbye</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-red-700">Extreme mood swings or sudden calmness after depression</span>
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

      <MiniMapWidget title="Professional depression assessment at our Vaduthala, Kochi center" />
      <Footer />
    </div>
  );
};

export default BlogSadnessDepression;