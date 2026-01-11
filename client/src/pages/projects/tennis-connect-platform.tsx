import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Zap, CheckCircle, Globe, Calendar, Users, ExternalLink, Handshake } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { updateSEO, addStructuredData } from "@/utils/seo";
import { AnimatedText } from "@/components/animated-text";
import { HeroBackground } from "@/components/hero-background";
import workHeroBg from "@assets/1709706757448_1764139146885.jpg";
import projectImg from "@assets/изображение_1764055739030.png";
import heroScreenshot from "@assets/tennis-connect/close_up_tennis_racket_hitting_ball.png";
import mainScreenshot from "@assets/tennis-connect/main_into_page.png";
import screenshot1 from "@assets/tennis-connect/slid1_project.png";
import screenshot2 from "@assets/tennis-connect/slide2_project.png";
import screenshot3 from "@assets/tennis-connect/slide3_project.png";
import screenshot4 from "@assets/tennis-connect/slide4_project.png";
import screenshot5 from "@assets/tennis-connect/slide5_project.png";
import screenshot6 from "@assets/tennis-connect/slide6_project.png";
import screenshot7 from "@assets/tennis-connect/slide7_project.png";

const projectScreenshots = [
  { src: mainScreenshot, label: "Platform Overview" },
  { src: screenshot1, label: "Life on the court" },
  { src: screenshot2, label: "Become our Partner" },
  { src: screenshot3, label: "Partners" },
  { src: screenshot4, label: "Coaches" },
  { src: screenshot5, label: "Tournaments" },
  { src: screenshot6, label: "Clubs" },
  { src: screenshot7, label: "Registration" }
];

const projectData = {
  title: "TennisConnect Platform",
  category: "Sports Tech",
  year: "2025",
  client: "Australian Tennis Community (Sydney)",
  description: "A full-featured tennis community platform connecting players, coaches, clubs, tournaments, and a marketplace in Sydney.",
  longDescription: "TennisConnect is a modern tennis community platform built for the Australian market, with a strong focus on Sydney. The platform connects tennis players with sparring partners, certified coaches, local clubs, tournaments, and a dedicated marketplace for tennis gear. Users can register as players or coaches, create detailed profiles, send real messages, book coaching sessions, explore clubs, participate in tournaments, and buy or sell equipment. The system is designed with scalability in mind and is planned for future migration to Supabase.",
  partners: [
    {
      name: "Local Tennis Clubs (Sydney)",
      description: "Community-driven tennis clubs and venues",
      url: "#"
    },
    {
      name: "Independent Coaches",
      description: "Certified tennis coaches offering private and group sessions",
      url: "#"
    }
  ],
  tags: [
    "React 18",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Drizzle ORM",
    "Tailwind CSS",
    "Framer Motion",
    "Passport.js",
    "REST API",
    "Wouter",
    
  ],
  features: [
    "Dedicated player and coach profiles with personalized capabilities",
    "Smart partner matching and built-in authenticated private messaging",
    "Tournament module with participant registration and skill-level filtering",
    "Coach directory with detailed profiles, ratings, and availability schedules",
    "Integrated marketplace for buying and selling tennis equipment",
    "Tennis club directory with intuitive location-based search",
    "Modern mobile-first interface optimized for all devices",   
    ],
  challenges: [
    "Designing a flexible and scalable role-based architecture for players and coaches",
    "Implementing secure and reliable session-based user authentication",
    "Building a fully featured private messaging system with email notifications",
    "Managing complex relational data models with shared schemas across client and server",
    "Maintaining a consistent and intuitive user experience as the feature set grows",
    "Architecting the platform with continuous development and future Supabase migration in mind"
    ],
  results: [
    "A unified digital platform for the tennis community",
    "Increased user engagement through partner matching and in-platform communication",
    "Clearly defined user journeys for players and coaches",
    "A flexible and scalable architecture prepared for ongoing product growth",
    "The platform is under active development with regular feature enhancements and improvements",
    "A strong technical foundation for future expansion of the tennis community ecosystem"
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
          
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
          
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

export default function TennisConnect() {
  useEffect(() => {
    updateSEO({
        title: "TennisConnect Platform – Case Study | SensePower Digital",
        description: "TennisConnect is a full-stack tennis community platform for players, coaches, clubs, tournaments, and a marketplace in Sydney. Built with React, Node.js, PostgreSQL, and modern UI architecture.",
        keywords: "TennisConnect, tennis platform, sports tech, tennis community, Sydney tennis, React case study, full stack platform, Node.js, PostgreSQL",
        ogTitle: "TennisConnect – Tennis Community Platform | Case Study",
        ogDescription: "Case study: Building a scalable tennis community platform with real messaging, tournaments, and marketplace.",
        ogImage: "https://sensepowerdigital.com/og-tennisconnect.png",
        ogUrl: "https://sensepowerdigital.com/portfolio/tennis-connect-platform",
        twitterTitle: "TennisConnect – Tennis Community Platform",
        twitterDescription: "Full-stack case study: Tennis platform for players, coaches, tournaments, and clubs.",
        twitterImage: "https://sensepowerdigital.com/og-tennisconnect.png",
        canonicalUrl: "https://sensepowerdigital.com/portfolio/tennis-connect-platform"
        });

    addStructuredData({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "TennisConnect Platform – Case Study",
        "description":
            "A full-stack tennis community platform connecting players, coaches, clubs, and tournaments in Australia.",
        "author": {
            "@type": "Organization",
            "name": "SensePower Digital"
        },
        "publisher": {
            "@type": "Organization",
            "name": "SensePower Digital",
            "url": "https://sensepowerdigital.com/"
        },
        "datePublished": "2025-01-01",
        "dateModified": "2025-12-01",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://sensepowerdigital.com/portfolio/tennis-connect-platform"
        },
        "about": {
            "@type": "SoftwareApplication",
            "name": "TennisConnect",
            "applicationCategory": "Sports Tech",
            "operatingSystem": "Web"
        }
        });
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end justify-center overflow-hidden pb-8 bg-background">
        <HeroBackground src={heroScreenshot} position="center 80%" />
        <div className="absolute inset-0 z-10 bg-linear-to-b from-background/0 via-background/50 to-background" />
        
        <div className="absolute top-2 md:top-6 left-0 right-0 z-30 container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center w-full">
            <Link href="/portfolio">
              <Button variant="ghost" className="gap-2 hover:bg-[#d2f7be]/10" data-testid="button-back-portfolio">
                <ArrowLeft size={18} />
                Back to Portfolio
              </Button>
            </Link>
            <Link href="/portfolio/landing-vibecode" className="hidden md:block">
              <Button variant="ghost" className="gap-2 hover:bg-[#d2f7be]/10" data-testid="button-next-project">
                Next Project
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl md:mt-[60px] mt-4 mb-0"
          >
            <div className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-primary via-accent to-primary">
              <AnimatedText text={projectData.title} staggerDelay={0.05} duration={0.5} initialDelay={0.2} repeat={false} />
            </div>
            
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
                  <CheckCircle size={20} className="text-[#d2f7be] mt-0.5 shrink-0" />
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
                  <ExternalLink size={20} className="text-[#d2f7be] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
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
            className="p-4 md:p-8 rounded-2xl border border-[#d2f7be]/10 bg-linear-to-br from-[#d2f7be]/5 to-transparent"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <Zap size={18} className="md:w-5 md:h-5 text-[#d2f7be]" />
              Challenges Solved
            </h3>
            <ul className="space-y-3">
              {projectData.challenges.map((challenge, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="text-[#d2f7be] shrink-0">•</span>
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
            className="p-4 md:p-8 rounded-2xl border border-[#d2f7be]/10 bg-linear-to-br from-[#d2f7be]/5 to-transparent"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <Globe size={18} className="md:w-5 md:h-5 text-[#d2f7be]" />
              Results Achieved
            </h3>
            <ul className="space-y-3">
              {projectData.results.map((result, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#d2f7be] mt-0.5 shrink-0" />
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
          <div className="absolute inset-0 z-10 bg-linear-to-b from-background/10 via-background/5 to-background/10" />
          
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
