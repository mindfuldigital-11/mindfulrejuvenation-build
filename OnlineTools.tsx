import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Clock, CheckCircle, ArrowRight, Share2, Copy, MessageCircle, Facebook, Instagram } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import FloatingCTA from "@/components/shared/FloatingCTA";

const OnlineTools = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const tools = [
    {
      id: "depression",
      title: "Depression Assessment (PHQ-9)",
      titleMalayalam: "Depression Assessment",
      description: "A comprehensive 9-question screening tool for depression symptoms",
      descriptionMalayalam: "മനസ്സിലെ വിഷമതകൾ മനസ്സിലാക്കാൻ 9 ചോദ്യങ്ങൾ",
      duration: "5-7 minutes",
      durationMalayalam: "5-7 മിനിറ്റ്",
      icon: Brain,
      color: "bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200",
      badge: "Most Popular",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      id: "anxiety",
      title: "Anxiety Assessment (GAD-7)",
      titleMalayalam: "ഉത്കണ്ഠ പരിശോധന",
      description: "Evaluate anxiety levels with this validated 7-question assessment",
      descriptionMalayalam: "7 ചോദ്യങ്ങളിലൂടെ ഉത്കണ്ഠയുടെ അളവ് അറിയാം",
      duration: "3-5 minutes",
      durationMalayalam: "3-5 മിനിറ്റ്",
      icon: Heart,
      color: "bg-gradient-to-br from-green-50 to-emerald-100 border-green-200",
      badge: "Quick Assessment",
      badgeColor: "bg-green-100 text-green-800"
    }
  ];

  const handleStartAssessment = (toolId: string) => {
    trackEvent('assessment_started', { tool_type: toolId });
    setSelectedTool(toolId);
  };

  if (selectedTool === "depression") {
    return <DepressionAssessment onBack={() => setSelectedTool(null)} />;
  }

  if (selectedTool === "anxiety") {
    return <AnxietyAssessment onBack={() => setSelectedTool(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full mb-6">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Professional Mental Health Tools</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Online Mental Health Assessments
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take our scientifically validated assessment tools to better understand your mental health. 
            Get instant results and personalized recommendations from our expert team.
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mt-4">
            നിങ്ങളുടെ മാനസിക ആരോഗ്യം മനസ്സിലാക്കാൻ ഞങ്ങളുടെ ടെസ്റ്റുകൾ എടുക്കുക
          </p>
        </div>

        {/* Assessment Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <Card key={tool.id} className={`${tool.color} hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in border-2 hover:border-primary/20`} style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-4 rounded-xl bg-white/90 backdrop-blur-sm group-hover:bg-white transition-all duration-300 shadow-lg group-hover:shadow-xl">
                      <IconComponent className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <Badge className={`${tool.badgeColor} px-3 py-1 font-semibold shadow-sm`}>
                      {tool.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {tool.title}
                  </CardTitle>
                  <p className="text-lg font-semibold text-primary/80 mb-2 bg-white/60 rounded-lg px-3 py-1 inline-block">
                    {tool.titleMalayalam}
                  </p>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {tool.description}
                  </CardDescription>
                  <p className="text-sm font-medium text-muted-foreground bg-white/40 rounded-lg px-3 py-2 mt-3 border-l-4 border-primary/30">
                    {tool.descriptionMalayalam}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 bg-white/50 rounded-lg px-3 py-2">
                    <Clock className="w-4 h-4" />
                    <span>{tool.duration}</span>
                    <span className="text-xs">({tool.durationMalayalam})</span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 bg-white/40 rounded-lg px-3 py-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium">Scientifically validated</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/40 rounded-lg px-3 py-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium">Instant results & recommendations</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/40 rounded-lg px-3 py-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium">Direct connection to our experts</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleStartAssessment(tool.id)}
                    className="w-full group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
                    size="lg"
                  >
                    <span className="flex items-center gap-2">
                      Start Assessment
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Information Section */}
        <Card className="bg-muted/30 border-0">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Take Our Assessments?
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Evidence-Based</h4>
                  <p className="text-sm text-muted-foreground">
                    Our assessments use validated clinical tools trusted by healthcare professionals worldwide.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Instant Results</h4>
                  <p className="text-sm text-muted-foreground">
                    Get immediate feedback and personalized recommendations based on your responses.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Expert Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Connect directly with our mental health professionals for guidance and support.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="text-center mt-12 p-6 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            <strong>Important:</strong> These assessments are screening tools and not diagnostic instruments. 
            Results should be discussed with a qualified mental health professional for proper evaluation and treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

// Depression Assessment Component
const DepressionAssessment = ({ onBack }: { onBack: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      en: "Little interest or pleasure in doing things",
      ml: "ചെയ്യുന്ന കാര്യങ്ങളിൽ താൽപ്പര്യമോ സന്തോഷമോ ഇല്ലാത്തത്"
    },
    {
      en: "Feeling down, depressed, or hopeless",
      ml: "വിഷമം, സങ്കടം, അല്ലെങ്കിൽ നിരാശ തോന്നുന്നത്"
    },
    {
      en: "Trouble falling or staying asleep, or sleeping too much",
      ml: "ഉറങ്ങാൻ പ്രയാസം, ഉറക്കം വരാത്തത്, അല്ലെങ്കിൽ അധികം ഉറങ്ങുന്നത്"
    },
    {
      en: "Feeling tired or having little energy",
      ml: "ക്ഷീണം തോന്നുന്നത് അല്ലെങ്കിൽ ശക്തി കുറവ്"
    },
    {
      en: "Poor appetite or overeating",
      ml: "വിശപ്പില്ലായ്മ അല്ലെങ്കിൽ അധികം ഭക്ഷണം കഴിക്കുന്നത്"
    },
    {
      en: "Feeling bad about yourself or that you are a failure or have let yourself or your family down",
      ml: "തന്നെക്കുറിച്ച് മോശം തോന്നുന്നത് അല്ലെങ്കിൽ കുടുംബത്തെ നിരാശപ്പെടുത്തിയെന്ന് തോന്നുന്നത്"
    },
    {
      en: "Trouble concentrating on things, such as reading the newspaper or watching television",
      ml: "പത്രം വായിക്കുക, ടിവി കാണുക തുടങ്ങിയ കാര്യങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കാൻ പ്രയാസം"
    },
    {
      en: "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
      ml: "മറ്റുള്ളവർ ശ്രദ്ധിക്കുമാറ് പതുക്കെ നടക്കുകയോ സംസാരിക്കുകയോ ചെയ്യുന്നത്. അല്ലെങ്കിൽ വളരെ അസ്വസ്ഥത തോന്നി സാധാരണയിലും കൂടുതൽ അലഞ്ഞുനടക്കുന്നത്"
    },
    {
      en: "Thoughts that you would be better off dead, or of hurting yourself",
      ml: "മരിച്ചാൽ നന്നായിരിക്കും എന്നോ സ്വയം ദ്രോഹിക്കണം എന്നോ തോന്നുന്നത്"
    }
  ];

  const options = [
    { value: 0, label: "Not at all", ml: "ഒട്ടും ഇല്ല" },
    { value: 1, label: "Several days", ml: "കുറച്ച് ദിവസം" },
    { value: 2, label: "More than half the days", ml: "പകുതിയിലധികം ദിവസം" },
    { value: 3, label: "Nearly every day", ml: "മിക്കവാറും എല്ലാ ദിവസവും" }
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      trackEvent('assessment_completed', { 
        tool_type: 'depression',
        score: newAnswers.reduce((sum, score) => sum + score, 0)
      });
    }
  };

  const getScore = () => answers.reduce((sum, score) => sum + score, 0);

  const getRecommendation = (score: number) => {
    if (score <= 4) return {
      level: "Minimal Depression",
      emoji: "😊",
      emojiSize: "text-8xl",
      description: "Excellent news! Your assessment indicates you're managing well emotionally.",
      color: "text-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100 border-green-300",
      message: "Your mental wellness is in a great place! You're demonstrating healthy emotional resilience. Continue nurturing your mental health with the positive practices that work for you. Remember, maintaining good mental health is an ongoing journey, and we're here to support you whenever needed.",
      advice: "Keep up your current self-care routine, stay connected with loved ones, and don't hesitate to reach out if you ever need professional guidance.",
      malayalam: "നിങ്ങളുടെ മാനസിക ആരോഗ്യം നല്ല നിലയിലാണ്! ഇപ്പോഴത്തെ നല്ല ശീലങ്ങൾ തുടരുക."
    };
    if (score <= 9) return {
      level: "Mild Depression",
      emoji: "🙂",
      emojiSize: "text-8xl",
      description: "You're taking a positive step by understanding your mental health better.",
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100 border-yellow-300",
      message: "Your assessment shows mild symptoms that are quite manageable with the right support. Many successful people experience similar feelings, and with professional guidance, you can develop effective coping strategies. This is absolutely treatable, and early intervention often leads to the best outcomes.",
      advice: "Consider lifestyle adjustments like regular exercise, mindfulness practices, and professional counseling to build resilience and prevent symptoms from worsening.",
      malayalam: "നേരിയ പ്രശ്നങ്ങൾ ഉണ്ട്. ഡോക്ടറെ കാണുന്നത് നല്ലതാണ്."
    };
    if (score <= 14) return {
      level: "Moderate Depression",
      emoji: "😐",
      emojiSize: "text-8xl",
      description: "Your courage in seeking help shows remarkable self-awareness and strength.",
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-100 border-orange-300",
      message: "Your assessment indicates moderate symptoms that significantly impact daily life, but here's the encouraging news: this level of depression responds very well to professional treatment. With evidence-based therapies and our expert support, most people see substantial improvement within weeks to months.",
      advice: "We strongly recommend scheduling a consultation with our mental health professionals. Combining therapy, lifestyle changes, and possibly medication can lead to dramatic improvements in your quality of life.",
      malayalam: "ഇടത്തരം പ്രശ്നങ്ങൾ ഉണ്ട്. ഡോക്ടറുടെ സഹായം വേണം."
    };
    if (score <= 19) return {
      level: "Moderately Severe Depression",
      emoji: "😟",
      emojiSize: "text-8xl",
      description: "You've shown incredible bravery by taking this assessment. Help is available and recovery is absolutely possible.",
      color: "text-red-600",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-100 border-red-300",
      message: "Your symptoms are significant and require professional attention, but we want you to know that many people with similar scores have achieved full recovery with proper treatment. Depression at this level is highly treatable with our comprehensive approach combining therapy, medical support, and personalized care plans.",
      advice: "Please prioritize scheduling an appointment with our mental health team immediately. We offer flexible scheduling and can often accommodate urgent needs. Recovery is not just possible—it's expected with proper care.",
      malayalam: "ഗുരുതരമായ പ്രശ്നങ്ങൾ ഉണ്ട്. ഉടനെ ഡോക്ടറെ കാണണം."
    };
    return {
      level: "Severe Depression",
      emoji: "😔",
      emojiSize: "text-8xl",
      description: "Your life has immense value. Taking this assessment shows incredible strength, and help is immediately available.",
      color: "text-red-700",
      bgColor: "bg-gradient-to-br from-red-100 to-red-200 border-red-400",
      message: "We recognize you're going through an extremely difficult time, and we want you to know that recovery from severe depression, while requiring intensive support, is absolutely achievable. Our specialized team has extensive experience helping people overcome severe depression and rebuild fulfilling lives. You are not alone in this journey.",
      advice: "Please contact us immediately for urgent support. We provide 24/7 crisis intervention and can arrange immediate professional care. Your safety and recovery are our top priorities.",
      malayalam: "വളരെ ഗുരുതരമായ അവസ്ഥ. ഉടനെ ഞങ്ങളെ വിളിക്കുക."
    };
  };

  const handleWhatsAppConnect = () => {
    const score = getScore();
    const recommendation = getRecommendation(score);
    const message = `Hello, I just completed the depression assessment on your website. My score was ${score} (${recommendation.level}). I would like to speak with a mental health professional about my results.`;
    const whatsappUrl = `https://wa.me/919037899299?text=${encodeURIComponent(message)}`;
    
    trackEvent('whatsapp_click', { 
      source: 'depression_assessment_results',
      score: score,
      level: recommendation.level
    });
    
    window.open(whatsappUrl, '_blank');
  };

  const { toast } = useToast();

  const handleShare = async () => {
    const shareText = "I just completed a mental health assessment tool that provided valuable insights. Check out these helpful online tools for depression and anxiety screening.";
    const shareUrl = window.location.origin + "/online-tools";
    
    try {
      if (navigator.share && !window.location.hostname.includes('lovableproject.com')) {
        await navigator.share({
          title: "Mental Health Assessment Tools",
          text: shareText,
          url: shareUrl,
        });
        trackEvent('assessment_shared', { method: 'native_share', tool_type: 'depression' });
      } else {
        // Fallback for browsers that don't support native sharing or in iframe
        await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        toast({
          title: "Link copied!",
          description: "Assessment link has been copied to your clipboard",
        });
        trackEvent('assessment_shared', { method: 'clipboard', tool_type: 'depression' });
      }
    } catch (error) {
      // Final fallback if clipboard also fails
      const textArea = document.createElement('textarea');
      textArea.value = `${shareText} ${shareUrl}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      toast({
        title: "Link copied!",
        description: "Assessment link has been copied to your clipboard",
      });
      trackEvent('assessment_shared', { method: 'fallback', tool_type: 'depression' });
    }
  };

  const handleCopyLink = async () => {
    const shareUrl = window.location.origin + "/online-tools";
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link copied!",
        description: "Assessment tool link has been copied to your clipboard.",
      });
      trackEvent('link_copied', { tool_type: 'depression' });
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      toast({
        title: "Link copied!",
        description: "Assessment tool link has been copied to your clipboard.",
      });
      trackEvent('link_copied', { tool_type: 'depression' });
    }
  };

  const handleWhatsAppShare = () => {
    const shareText = `I just completed a mental health assessment tool that provided valuable insights. Check out these helpful online tools: ${window.location.origin}/online-tools`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
    trackEvent('social_share', { platform: 'whatsapp', tool_type: 'depression' });
  };

  const handleFacebookShare = () => {
    const shareUrl = window.location.origin + "/online-tools";
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank');
    trackEvent('social_share', { platform: 'facebook', tool_type: 'depression' });
  };

  const handleInstagramShare = () => {
    // Instagram doesn't support direct URL sharing, so we copy the link and guide user
    handleCopyLink();
    toast({
      title: "Link copied for Instagram!",
      description: "Paste this link in your Instagram story or post.",
    });
    trackEvent('social_share', { platform: 'instagram', tool_type: 'depression' });
  };

  if (showResults) {
    const score = getScore();
    const recommendation = getRecommendation(score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Your Assessment Results</h1>
            <p className="text-muted-foreground">PHQ-9 Depression Screening Results</p>
          </div>

           <Card className={`${recommendation.bgColor} mb-8 border-2 shadow-2xl overflow-hidden`}>
            <CardContent className="p-0">
              {/* Decorative header with gradient */}
              <div className="h-2 bg-gradient-to-r from-primary via-blue-500 to-purple-500"></div>
              
              <div className="p-8 text-center">
                {/* Large emoji display */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl scale-150"></div>
                  <div className={`relative ${recommendation.emojiSize} leading-none select-none`}>
                    {recommendation.emoji}
                  </div>
                </div>
                
                {/* Score display */}
                <div className="mb-6">
                  <div className="text-7xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {score}
                  </div>
                  <div className="text-xs text-muted-foreground">out of 27</div>
                </div>
                
                {/* Level and description */}
                <h3 className={`text-3xl font-bold mb-4 ${recommendation.color}`}>
                  {recommendation.level}
                </h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  {recommendation.description}
                </p>
                <p className="text-base text-foreground mb-4 font-medium bg-white/50 rounded-lg p-4">
                  {recommendation.message}
                </p>
                <p className="text-sm text-muted-foreground mb-4 italic bg-blue-50/50 rounded-lg p-3">
                  <strong>Professional Advice:</strong> {recommendation.advice}
                </p>
                <p className="text-sm text-blue-600 mb-6 font-medium">
                  {recommendation.malayalam}
                </p>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button onClick={handleWhatsAppConnect} size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    💬 Connect with Expert via WhatsApp
                  </Button>
                  <Button onClick={onBack} variant="outline" size="lg" className="border-2 hover:bg-primary/5">
                    📋 Take Another Assessment
                  </Button>
                </div>
                
                {/* Share section */}
                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">Share this helpful assessment tool:</p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    <Button 
                      onClick={handleShare}
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    
                    <Button 
                      onClick={handleCopyLink}
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      <Copy className="w-4 h-4" />
                      Copy
                    </Button>

                    <Button 
                      onClick={handleWhatsAppShare}
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 hover:bg-green-600 hover:text-white transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </Button>

                    <Button 
                      onClick={handleFacebookShare}
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 hover:bg-blue-800 hover:text-white transition-all duration-300"
                    >
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </Button>

                    <Button 
                      onClick={handleInstagramShare}
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4">Next Steps:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Save or screenshot these results to discuss with a healthcare provider</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Consider scheduling an appointment with our mental health professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Practice self-care activities like exercise, meditation, and maintaining social connections</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <FloatingCTA />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Depression Assessment (PHQ-9)</h1>
          <div className="bg-muted/50 rounded-lg p-6 mb-6">
            <p className="text-lg text-muted-foreground mb-2">
              Over the last 2 weeks, how often have you been bothered by:
            </p>
            <p className="text-base text-primary font-medium">
              കഴിഞ്ഞ 2 ആഴ്ചയിൽ, എത്ര തവണ ഈ കാര്യങ്ങൾ നിങ്ങളെ ബുദ്ധിമുട്ടിച്ചിട്ടുണ്ട്:
            </p>
          </div>
          <div className="mb-4 text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="w-full bg-secondary rounded-full h-2 mb-8">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="mb-4">
              <Button onClick={onBack} variant="ghost" className="text-primary hover:bg-primary/10">
                ← Back to Tools
              </Button>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              {questions[currentQuestion].en}
            </h2>
            <h3 className="text-lg font-medium mb-8 text-primary bg-primary/10 rounded-lg p-4">
              {questions[currentQuestion].ml}
            </h3>
            
            <div className="grid gap-4">
              {options.map((option) => (
                <Button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  variant="outline"
                  className="justify-start p-6 h-auto text-left hover:bg-primary/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-medium">{option.label}</div>
                      <div className="text-sm text-muted-foreground">{option.ml}</div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Anxiety Assessment Component
const AnxietyAssessment = ({ onBack }: { onBack: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      en: "Feeling nervous, anxious, or on edge",
      ml: "ടെൻഷൻ, ഉത്കണ്ഠ, അല്ലെങ്കിൽ അസ്വസ്ഥത തോന്നുന്നത്"
    },
    {
      en: "Not being able to stop or control worrying",
      ml: "ചിന്തകളും വിഷമങ്ങളും നിയന്ത്രിക്കാൻ കഴിയാത്തത്"
    },
    {
      en: "Worrying too much about different things",
      ml: "പലതിനെക്കുറിച്ചും അധികം ചിന്തിച്ച് വിഷമിക്കുന്നത്"
    },
    {
      en: "Trouble relaxing",
      ml: "മനസ്സിന് ശാന്തത കിട്ടാത്തത്"
    },
    {
      en: "Being so restless that it is hard to sit still",
      ml: "വളരെ അസ്വസ്ഥത തോന്നി ഒരിടത്ത് ഇരിക്കാൻ കഴിയാത്തത്"
    },
    {
      en: "Becoming easily annoyed or irritable",
      ml: "എളുപ്പത്തിൽ ദേഷ്യവും വിരസതയും വരുന്നത്"
    },
    {
      en: "Feeling afraid, as if something awful might happen",
      ml: "എന്തോ മോശം സംഭവിക്കുമെന്ന് ഭയം തോന്നുന്നത്"
    }
  ];

  const options = [
    { value: 0, label: "Not at all", ml: "ഒട്ടും ഇല്ല" },
    { value: 1, label: "Several days", ml: "കുറച്ച് ദിവസം" },
    { value: 2, label: "More than half the days", ml: "പകുതിയിലധികം ദിവസം" },
    { value: 3, label: "Nearly every day", ml: "മിക്കവാറും എല്ലാ ദിവസവും" }
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      trackEvent('assessment_completed', { 
        tool_type: 'anxiety',
        score: newAnswers.reduce((sum, score) => sum + score, 0)
      });
    }
  };

  const getScore = () => answers.reduce((sum, score) => sum + score, 0);

  const getRecommendation = (score: number) => {
    if (score <= 4) return {
      level: "Minimal Anxiety",
      emoji: "😌",
      emojiSize: "text-8xl",
      description: "Fantastic! Your assessment shows you're managing stress and anxiety very well.",
      color: "text-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100 border-green-300",
      message: "Your anxiety levels are in a healthy range! You're demonstrating excellent emotional regulation. This indicates that your current coping mechanisms are working effectively, and you have good stress management skills.",
      advice: "Continue with your current wellness practices. Maintain regular exercise, adequate sleep, and social connections. Consider learning additional relaxation techniques for future stress management.",
      malayalam: "ഉത്കണ്ഠ സാധാരണ നിലയിലാണ്. ഇപ്പോഴത്തെ നല്ല ശീലങ്ങൾ തുടരുക."
    };
    if (score <= 9) return {
      level: "Mild Anxiety",
      emoji: "🙂",
      emojiSize: "text-8xl",
      description: "You're showing great self-awareness by recognizing and addressing your anxiety.",
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100 border-yellow-300",
      message: "Your assessment indicates mild anxiety symptoms that are very common and highly manageable. Many people experience similar feelings, especially during stressful periods. With some professional guidance and coping strategies, you can feel much more comfortable and confident.",
      advice: "Consider learning stress management techniques, practicing regular mindfulness or meditation, and establishing a consistent self-care routine. Professional counseling can provide personalized strategies.",
      malayalam: "നേരിയ ഉത്കണ്ഠ ഉണ്ട്. ഡോക്ടറെ കാണുന്നത് നല്ലതാണ്."
    };
    if (score <= 14) return {
      level: "Moderate Anxiety",
      emoji: "😰",
      emojiSize: "text-8xl",
      description: "Thank you for your honesty in this assessment. Your feelings are valid and help is readily available.",
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-100 border-orange-300",
      message: "Your anxiety levels are moderate and likely interfering with your daily activities and peace of mind. The positive news is that anxiety at this level responds exceptionally well to proven treatments. With professional support, most people see significant improvement quickly.",
      advice: "We recommend scheduling a consultation with our anxiety specialists immediately. Cognitive-behavioral therapy, relaxation techniques, and potentially medication can provide substantial relief within weeks.",
      malayalam: "ഇടത്തരം ഉത്കണ്ഠ ഉണ്ട്. ഡോക്ടറുടെ സഹായം വേണം."
    };
    return {
      level: "Severe Anxiety",
      emoji: "😨",
      emojiSize: "text-8xl",
      description: "Your courage in completing this assessment is commendable. Immediate support can provide significant relief.",
      color: "text-red-600",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-100 border-red-300",
      message: "Your anxiety is severe and likely causing significant distress in your daily life. Please know that even severe anxiety is highly treatable with our comprehensive approach. Our specialized team has extensive experience helping people overcome intense anxiety and regain control of their lives.",
      advice: "Please contact us immediately for urgent anxiety support. We can provide rapid intervention techniques and arrange immediate professional care. Many people with severe anxiety achieve remarkable improvements with proper treatment.",
      malayalam: "വളരെ ഗുരുതരമായ ഉത്കണ്ഠ. ഉടനെ ഞങ്ങളെ വിളിക്കുക."
    };
  };

  const handleWhatsAppConnect = () => {
    const score = getScore();
    const recommendation = getRecommendation(score);
    const message = `Hello, I just completed the anxiety assessment on your website. My score was ${score} (${recommendation.level}). I would like to speak with a mental health professional about my results.`;
    const whatsappUrl = `https://wa.me/919037899299?text=${encodeURIComponent(message)}`;
    
    trackEvent('whatsapp_click', { 
      source: 'anxiety_assessment_results',
      score: score,
      level: recommendation.level
    });
    
    window.open(whatsappUrl, '_blank');
  };

  const { toast: anxietyToast } = useToast();

  const handleShareAnxiety = async () => {
    const shareText = "I just completed a mental health assessment tool that provided valuable insights. Check out these helpful online tools for depression and anxiety screening.";
    const shareUrl = window.location.origin + "/online-tools";
    
    try {
      if (navigator.share && !window.location.hostname.includes('lovableproject.com')) {
        await navigator.share({
          title: "Mental Health Assessment Tools",
          text: shareText,
          url: shareUrl,
        });
        trackEvent('assessment_shared', { method: 'native_share', tool_type: 'anxiety' });
      } else {
        await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        anxietyToast({
          title: "Link copied!",
          description: "Assessment tool link has been copied to your clipboard.",
        });
        trackEvent('assessment_shared', { method: 'clipboard', tool_type: 'anxiety' });
      }
    } catch (error) {
      // Final fallback if clipboard also fails
      const textArea = document.createElement('textarea');
      textArea.value = `${shareText} ${shareUrl}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      anxietyToast({
        title: "Link copied!",
        description: "Assessment tool link has been copied to your clipboard.",
      });
      trackEvent('assessment_shared', { method: 'fallback', tool_type: 'anxiety' });
    }
  };

  const handleCopyLinkAnxiety = async () => {
    const shareUrl = window.location.origin + "/online-tools";
    try {
      await navigator.clipboard.writeText(shareUrl);
      anxietyToast({
        title: "Link copied!",
        description: "Assessment tool link has been copied to your clipboard.",
      });
      trackEvent('link_copied', { tool_type: 'anxiety' });
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      anxietyToast({
        title: "Link copied!",
        description: "Assessment tool link has been copied to your clipboard.",
      });
      trackEvent('link_copied', { tool_type: 'anxiety' });
    }
  };

  const handleWhatsAppShareAnxiety = () => {
    const shareText = `I just completed a mental health assessment tool that provided valuable insights. Check out these helpful online tools: ${window.location.origin}/online-tools`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
    trackEvent('social_share', { platform: 'whatsapp', tool_type: 'anxiety' });
  };

  const handleFacebookShareAnxiety = () => {
    const shareUrl = window.location.origin + "/online-tools";
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank');
    trackEvent('social_share', { platform: 'facebook', tool_type: 'anxiety' });
  };

  const handleInstagramShareAnxiety = () => {
    // Instagram doesn't support direct URL sharing, so we copy the link and guide user
    handleCopyLinkAnxiety();
    anxietyToast({
      title: "Link copied for Instagram!",
      description: "Paste this link in your Instagram story or post.",
    });
    trackEvent('social_share', { platform: 'instagram', tool_type: 'anxiety' });
  };

  if (showResults) {
    const score = getScore();
    const recommendation = getRecommendation(score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Your Assessment Results</h1>
            <p className="text-muted-foreground">GAD-7 Anxiety Screening Results</p>
          </div>

           <Card className={`${recommendation.bgColor} mb-8 border-2 shadow-2xl overflow-hidden`}>
            <CardContent className="p-0">
              {/* Decorative header with gradient */}
              <div className="h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
              
              <div className="p-8 text-center">
                {/* Large emoji display */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl scale-150"></div>
                  <div className={`relative ${recommendation.emojiSize} leading-none select-none`}>
                    {recommendation.emoji}
                  </div>
                </div>
                
                {/* Score display */}
                <div className="mb-6">
                  <div className="text-7xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {score}
                  </div>
                  <div className="text-xs text-muted-foreground">out of 21</div>
                </div>
                
                {/* Level and description */}
                <h3 className={`text-3xl font-bold mb-4 ${recommendation.color}`}>
                  {recommendation.level}
                </h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  {recommendation.description}
                </p>
                <p className="text-base text-foreground mb-4 font-medium bg-white/50 rounded-lg p-4">
                  {recommendation.message}
                </p>
                <p className="text-sm text-muted-foreground mb-4 italic bg-blue-50/50 rounded-lg p-3">
                  <strong>Professional Advice:</strong> {recommendation.advice}
                </p>
                <p className="text-sm text-blue-600 mb-6 font-medium">
                  {recommendation.malayalam}
                </p>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button onClick={handleWhatsAppConnect} size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    💬 Connect with Expert via WhatsApp
                  </Button>
                  <Button onClick={onBack} variant="outline" size="lg" className="border-2 hover:bg-primary/5">
                    📋 Take Another Assessment
                  </Button>
                </div>
                
                {/* Share section */}
                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">Share this helpful assessment tool:</p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    <Button 
                      onClick={handleShareAnxiety}
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    
                    <Button 
                      onClick={handleCopyLinkAnxiety}
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      <Copy className="w-4 h-4" />
                      Copy
                    </Button>

                    <Button 
                      onClick={handleWhatsAppShareAnxiety}
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 hover:bg-green-600 hover:text-white transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </Button>

                    <Button 
                      onClick={handleFacebookShareAnxiety}
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 hover:bg-blue-800 hover:text-white transition-all duration-300"
                    >
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </Button>

                    <Button 
                      onClick={handleInstagramShareAnxiety}
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4">Next Steps:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Save or screenshot these results to discuss with a healthcare provider</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Consider scheduling an appointment with our mental health professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Practice relaxation techniques like deep breathing, mindfulness, and regular exercise</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <FloatingCTA />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Anxiety Assessment (GAD-7)</h1>
          <div className="bg-muted/50 rounded-lg p-6 mb-6">
            <p className="text-lg text-muted-foreground mb-2">
              Over the last 2 weeks, how often have you been bothered by:
            </p>
            <p className="text-base text-primary font-medium">
              കഴിഞ്ഞ 2 ആഴ്ചയിൽ, എത്ര തവണ ഈ കാര്യങ്ങൾ നിങ്ങളെ ബുദ്ധിമുട്ടിച്ചിട്ടുണ്ട്:
            </p>
          </div>
          <div className="mb-4 text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="w-full bg-secondary rounded-full h-2 mb-8">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="mb-4">
              <Button onClick={onBack} variant="ghost" className="text-primary hover:bg-primary/10">
                ← Back to Tools
              </Button>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              {questions[currentQuestion].en}
            </h2>
            <h3 className="text-lg font-medium mb-8 text-primary bg-primary/10 rounded-lg p-4">
              {questions[currentQuestion].ml}
            </h3>
            
            <div className="grid gap-4">
              {options.map((option) => (
                <Button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  variant="outline"
                  className="justify-start p-6 h-auto text-left hover:bg-primary/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-medium">{option.label}</div>
                      <div className="text-sm text-muted-foreground">{option.ml}</div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <FloatingCTA />
    </div>
  );
};

export default OnlineTools;