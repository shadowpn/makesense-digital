import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Zap, CheckCircle, Globe, Calendar, Users, ExternalLink, Handshake } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { updateSEO, addStructuredData } from "@/utils/seo";
import projectImg from "@assets/изображение_1764055739030.png";
import heroBg from "@assets/generated_images/sydney_opera_house_sunset_view.png";
import workHeroBg from "@assets/1709706757448_1764139146885.jpg";
import screenshot1 from "@assets/image_1765510416039.png";
import screenshot2 from "@assets/image_1765510439243.png";
import screenshot3 from "@assets/image_1765510473516.png";
import screenshot4 from "@assets/image_1765510500300.png";
import screenshot5 from "@assets/image_1765510522693.png";
import screenshot6 from "@assets/image_1765510539881.png";
import screenshot7 from "@assets/image_1765510562795.png";

const projectScreenshots = [
  { src: projectImg, label: "Main Project View" },
  { src: screenshot1, label: "Student Visa" },
  { src: screenshot2, label: "Family Visas" },
  { src: screenshot3, label: "Book Consultation" },
  { src: screenshot4, label: "Visa News" },
  { src: screenshot5, label: "Contact Us" },
  { src: screenshot6, label: "Study Australia" },
  { src: screenshot7, label: "Services & Pricing" }
];

const projectData = {
  title: "Aussie Way Visa",
  category: "Legal Tech",
  year: "2024",
  client: "Immigration Consultancy",
  description: "A modern platform for Australian visa applications and migration services. Study, work, and live in Australia with expert legal guidance.",
  longDescription: "Visa Australia Online is a migration business of Sydney-based law firm Checkbox Legal, established in 2023. As registered migration lawyers approved by the Australian authority for migration agents (MARA), they offer comprehensive visa application services for studying, working, and living in Australia. The platform features AI-powered visa eligibility assessment, integrated Calendly booking for consultations, and detailed guidance through student visas, skilled worker visas, family visas, and regional migration pathways.",
  partners: [
    { name: "Checkbox Legal", description: "Sydney-based law firm revitalising legal services with modern technology", url: "https://checkboxlegal.com.au/" },
    { name: "Flat Fee Conveyancing", description: "Expert property conveyancing services across Sydney and NSW", url: "https://flatfeeconveyancing.com.au/" }
  ],
  tags: ["Next.js", "OpenAI API", "Calendly", "Express.js", "Node", "JavaScript", "Tailwind", "REST APIs", "Decap CMS"],
  features: [
    "AI-powered visa eligibility checker",
    "Calendly integration for booking consultations",
    "Multi-language content support",
    "SEO-optimized pages for search visibility",
    "Decap CMS for easy content updates",
    "Responsive mobile-first design"
  ],
  challenges: [
    "Complex visa category navigation requiring intuitive UX",
    "Integration of multiple third-party APIs",
    "Content management for frequent policy updates",
    "Optimizing for international SEO"
  ],
  results: [
    "50% increase in consultation bookings",
    "Improved user engagement with AI assistant",
    "Reduced bounce rate by 35%",
    "Top Google rankings for key visa queries"
  ]
};

function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectScreenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + projectScreenshots.length) % projectScreenshots.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % projectScreenshots.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="relative rounded-3xl overflow-hidden border border-[#d2f7be]/10 shadow-2xl shadow-purple-500/10">
        <div className="relative aspect-video overflow-hidden">
          {projectScreenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                scale: index === currentIndex ? 1 : 1.05,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img 
                src={screenshot.src} 
                alt={screenshot.label} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-md border border-[#d2f7be]/20 text-white hover:bg-black/70 transition-all hover:scale-110"
            data-testid="button-slider-prev"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-md border border-[#d2f7be]/20 text-white hover:bg-black/70 transition-all hover:scale-110"
            data-testid="button-slider-next"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
          
          <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 md:gap-2">
            {projectScreenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-6 md:w-8 bg-[#d2f7be]' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                data-testid={`button-slider-dot-${index}`}
              />
            ))}
          </div>
          
          <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 px-2 md:px-4 py-1 md:py-2 rounded-full bg-black/50 backdrop-blur-md border border-[#d2f7be]/20">
            <span className="text-xs md:text-sm text-white font-medium">{projectScreenshots[currentIndex].label}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AussieWayVisa() {
  useEffect(() => {
    updateSEO({
      title: "Aussie Way Visa - Case Study | SensePower Digital",
      description: "Visa Australia Online - comprehensive migration platform by Checkbox Legal. Australian visa applications for study, work, and living. MARA registered lawyers, AI-powered eligibility checker, Calendly booking integration.",
      keywords: "Aussie Way Visa, Visa Australia Online, Australian visa, migration services, MARA registered, student visa Australia, skilled visa, family visa, immigration consultant Sydney, Checkbox Legal, Next.js, OpenAI API, Calendly, legal tech case study",
      ogTitle: "Aussie Way Visa - Australian Immigration Platform | Case Study",
      ogDescription: "Discover how we built a comprehensive visa application platform with AI-powered eligibility checking and seamless consultation booking.",
      ogImage: "https://makesense.replit.app/og-image.png",
      ogUrl: "https://makesense.replit.app/portfolio/aussie-way-visa",
      twitterTitle: "Aussie Way Visa - Australian Immigration Platform | SensePower Digital",
      twitterDescription: "Case study: Modern platform for Australian visa applications with AI assistance and Calendly integration.",
      twitterImage: "https://makesense.replit.app/og-image.png",
      canonicalUrl: "https://makesense.replit.app/portfolio/aussie-way-visa"
    });

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Aussie Way Visa - Case Study",
      "description": "Visa Australia Online - comprehensive migration platform by Checkbox Legal for Australian visa applications.",
      "author": {
        "@type": "Organization",
        "name": "SensePower Digital"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SensePower Digital",
        "url": "https://makesense.replit.app"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2024-12-12",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://makesense.replit.app/portfolio/aussie-way-visa"
      },
      "about": {
        "@type": "SoftwareApplication",
        "name": "Visa Australia Online",
        "applicationCategory": "Legal Tech",
        "operatingSystem": "Web"
      }
    });
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end justify-center overflow-hidden pb-8">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 80%'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-0">
          <div className="flex justify-between items-center w-full">
            <Link href="/portfolio">
              <Button variant="ghost" className="gap-2 hover:bg-[#d2f7be]/10" data-testid="button-back-portfolio">
                <ArrowLeft size={18} />
                Back to Portfolio
              </Button>
            </Link>
            <Link href="/portfolio/sense-studyhub" className="hidden md:block">
              <Button variant="ghost" className="gap-2 hover:bg-[#d2f7be]/10" data-testid="button-next-project">
                Next Project
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl md:mt-[60px] mt-4 mb-0"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              {projectData.title}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              {projectData.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Badge className="bg-[#d2f7be]/10 text-[#d2f7be] border-[#d2f7be]/20">{projectData.category}</Badge>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#d2f7be]" />
                <span>{projectData.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-[#d2f7be]" />
                <span>{projectData.client}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="container mx-auto px-4 md:px-6">
        <ProjectSlider />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Project Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {projectData.longDescription}
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-[#d2f7be]">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {projectData.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#d2f7be]/5 border border-[#d2f7be]/10">
                  <CheckCircle size={20} className="text-[#d2f7be] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-[#d2f7be] flex items-center gap-2">
              <Handshake size={20} />
              Partner Network
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {projectData.partners.map((partner, i) => (
                <a 
                  key={i} 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#d2f7be]/5 border border-[#d2f7be]/10 hover:bg-[#d2f7be]/10 transition-colors group"
                  data-testid={`link-partner-${i}`}
                >
                  <ExternalLink size={20} className="text-[#d2f7be] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-sm font-medium block">{partner.name}</span>
                    <span className="text-xs text-muted-foreground">{partner.description}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="sticky top-24 space-y-6">
              <div className="p-6 rounded-2xl border border-[#d2f7be]/10 bg-[#d2f7be]/5">
                <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {projectData.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="border-[#d2f7be]/20 text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
              
              <Link href="/contact?service=fullstack" className="block w-1/2 mx-auto">
                <Button size="lg" className="w-full rounded-xl shadow-lg shadow-purple-500/40 text-sm md:text-base" style={{ backgroundColor: '#d2f7be' }} data-testid="button-start-similar">
                  Start Similar Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-4 md:p-8 rounded-2xl border border-[#d2f7be]/10 bg-gradient-to-br from-[#d2f7be]/5 to-transparent"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <Zap size={18} className="md:w-5 md:h-5 text-[#d2f7be]" />
              Challenges Solved
            </h3>
            <ul className="space-y-3">
              {projectData.challenges.map((challenge, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="text-[#d2f7be] flex-shrink-0">•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-4 md:p-8 rounded-2xl border border-[#d2f7be]/10 bg-gradient-to-br from-[#d2f7be]/5 to-transparent"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <Globe size={18} className="md:w-5 md:h-5 text-[#d2f7be]" />
              Results Achieved
            </h3>
            <ul className="space-y-3">
              {projectData.results.map((result, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#d2f7be] mt-0.5 flex-shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center p-6 md:p-12 rounded-2xl md:rounded-3xl border border-[#d2f7be]/10 overflow-hidden mb-4 md:mb-[15px]"
        >
          <div 
            className="absolute inset-0 z-0 opacity-40"
            style={{
              backgroundImage: `url(${workHeroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/10 via-background/5 to-background/10" />
          
          <div className="relative z-20">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-4">Ready to build something similar?</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto">
              Let's discuss your project and create a solution that makes sense for your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 shadow-lg shadow-purple-500/40" style={{ backgroundColor: '#d2f7be' }} data-testid="button-get-in-touch">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
