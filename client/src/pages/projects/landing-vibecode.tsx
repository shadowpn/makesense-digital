import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Zap, CheckCircle, Sparkles, Smartphone, Rocket, Code2, Cpu, Layers, Calendar, Users, ExternalLink, Handshake } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { updateSEO, addStructuredData } from "@/utils/seo";
import { AnimatedText } from "@/components/animated-text";
import { HeroBackground } from "@/components/hero-background";

import heroBg from "@assets/vibecode_land/intro_videcode_project.png";
import workHeroBg from "@assets/1709706757448_1764139146885.jpg";
import vibecodeBg from "@assets/vibecode_land/bg_fullpage.jpeg";
import screenshot1 from "@assets/vibecode_land/expert6.png";
import screenshot2 from "@assets/vibecode_land/corporate_webapp.jpg";
import screenshot3 from "@assets/vibecode_land/e-commers_exаmple.jpg";
import screenshot4 from "@assets/vibecode_land/Saas_example.jpg";
import screenshot5 from "@assets/vibecode_land/mobapp.jpg";
import screenshot6 from "@assets/vibecode_land/expert6.png";
import screenshot7 from "@assets/vibecode_land/example3.png";

const projectScreenshots = [
  
  { src: screenshot1, label: "ExpertLash" },
  { src: screenshot2, label: "Corporate Website" },
  { src: screenshot3, label: "E-commers Platform" },
  { src: screenshot4, label: "Saas Platform" },
  { src: screenshot5, label: "Mobile app" },
  { src: screenshot6, label: "Study Platform" },
  { src: screenshot7, label: "Loggin Page" }
];
const projectData = {
  title: "VibeCode Landing Pages",
  category: "AI-Powered Web Development",
  year: "2025",
  client: "Internal Product",
  description: "Turn your idea into a modern landing page — without limits, templates, or weeks of development.",
  longDescription: "VibeCode combines AI-powered workflows with real design and development expertise to build fully custom landing pages. Unlike generic page builders, every VibeCode project is unique, mobile-first, and built on a modern tech stack (React, Next.js, Tailwind).",
  tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "AI/ML", "Framer Motion", "Vercel", "Lovable", "Replit"],
  benefits: [
    { title: "Fast Development", description: "Reduce development time by 3x thanks to AI tools", icon: Zap },
    { title: "AI-powered Design", description: "Unique design created with the help of neural networks", icon: Cpu },
    { title: "Mobile-first", description: "Perfect display on any device", icon: Smartphone },
    { title: "Modern Stack", description: "React, TypeScript, Tailwind — only current technologies", icon: Code2 },
    { title: "Scalability", description: "Architecture ready for your business growth", icon: Rocket },
    { title: "Uniqueness", description: "Every project is an individual solution for you", icon: Layers }
  ],
  steps: [
    { title: "Share Your Idea", description: "Tell us about your product, audience, and goals — no technical knowledge required.", icon: Zap },
    { title: "AI + Human Design", description: "We combine AI-powered workflows with real design and development expertise.", icon: Code2 },
    { title: "Build & Refine", description: "Your landing page is built fast, refined iteratively, and aligned with your vision.", icon: Smartphone },
    { title: "Launch & Scale", description: "Launch quickly and evolve your landing into a full product when ready.", icon: Rocket }
  ],
  results: [
    "Up to 3× faster development with AI-assisted workflows",
    "Fully custom landing pages — no templates",
    "Mobile-first design optimized for all devices",
    "High performance with Lighthouse scores 95+",
    "Human-led UX, structure, and branding decisions",
    "Scalable architecture ready to grow beyond a single landing page",
    "Clean, modern UI aligned with your brand identity"
  ],

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

/* ===== Page ===== */
export default function VibeCodeLanding() {
  useEffect(() => {
    updateSEO({
      title: "VibeCode Landing Pages | Modern AI Web Development",
      description: "Create modern, high-impact landing pages using AI-assisted development and human expertise. Fast, flexible, and fully custom.",
      keywords: "AI landing page, vibe coding, AI web development, startup landing, Next.js landing page",
      ogDescription: "Custom, AI-powered landing pages built with React, Next.js, and human expertise. Fast, scalable, and mobile-first.",
      canonicalUrl: "https://sensepowerdigital.com/landing-vibecode"
    });

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "VibeCode Landing Pages",
      "description": "AI-assisted landing page creation service"
    });
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end justify-center overflow-hidden pb-8 bg-background">
        <HeroBackground src={heroBg} position="center 80%" />
        <div className="absolute inset-0 z-10 bg-linear-to-b from-background/0 via-background/50 to-background" />
        
        <div className="absolute top-2 md:top-6 left-0 right-0 z-30 container mx-auto px-4 md:px-6">
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
    
 {/* Why and How Section with Sidebar like TennisConnect */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-24">
          <div className="lg:col-span-2 space-y-24">
            <section id="why-vibecode">
              <h2 className="text-3xl font-bold mb-8">Why VibeCode?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectData.benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#d2f7be]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#d2f7be]/10 flex items-center justify-center mb-6 border border-[#d2f7be]/20 group-hover:bg-[#d2f7be] group-hover:text-black transition-all duration-500">
                      <benefit.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#d2f7be] transition-colors">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Area */}
          <aside className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#d2f7be]/5 border border-[#d2f7be]/10">
              <h3 className="text-xl font-bold mb-6">Our Stack</h3>
              <div className="flex flex-wrap gap-2">
                {projectData.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="px-4 py-1.5 text-sm bg-white/5 border-white/10 hover:border-[#d2f7be]/50 hover:text-[#d2f7be] transition-all">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-6">Key Results</h3>
              <ul className="space-y-4">
                {projectData.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-[#d2f7be] shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="space-y-12 md:space-y-16">
        <section id="how-it-works" className="mt-12 md:mt-16 mb-8 md:mb-12 border border-[#d2f7be]/20 rounded-3xl px-6 md:px-8 py-8 md:py-10
         bg-white/[0.02]">
              <h2 className="text-3xl font-bold mb-12">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {projectData.steps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col group"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-[#d2f7be]" />
                      <h3 className="text-sm font-bold uppercase tracking-wider">{step.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
        </section>
            
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
            <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-4">Ready to build your landing page?</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto">
              Let’s turn your idea into a modern, high-impact landing page — fast and without limitations.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 shadow-lg shadow-purple-500/40" style={{ backgroundColor: '#d2f7be' }} data-testid="button-get-in-touch">
                Start My Landing
              </Button>
            </Link>
          </div>
        </motion.div>
       </div>
      </div>
    </Layout>
  );
}
