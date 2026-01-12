import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Zap, Globe, Calendar, Users, BookOpen, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { updateSEO, addStructuredData } from "@/utils/seo";
import { AnimatedText } from "@/components/animated-text";
import { HeroBackground } from "@/components/hero-background";
import projectImg from "@assets/sense_study/1764056223710.png";
import workHeroBg from "@assets/generated_images/realistic_cozy_study_desk.png";

import screenshot1 from "@assets/sense_study/coursepage.png";
import screenshot2 from "@assets/sense_study/sense_demo.png";
import screenshot3 from "@assets/sense_study/sense_mycourse.png";
import screenshot4 from "@assets/sense_study/sense_network.png";
import screenshot5 from "@assets/sense_study/senseAbout.png";
import screenshot6 from "@assets/sense_study/sensedashboard.png";
import screenshot7 from "@assets/sense_study/sensestudy1.png";

const projectScreenshots = [
  { src: projectImg, label: "Main Project View" },
  { src: screenshot1, label: "Registration page" },
  { src: screenshot2, label: "Demo" },
  { src: screenshot3, label: "My owner courses" },
  { src: screenshot4, label: "Network course" },
  { src: screenshot5, label: "About" },
  { src: screenshot6, label: "Personal Dashboard" },
  { src: screenshot7, label: "Admin Panel" }
];


const projectData = {
  title: "Sense StudyHub",
  category: "EdTech",
  year: "2024",
  client: "Education Platform",
  description: "Modern EdTech platform for scalable online learning with video lessons, JWT authentication, and interactive Q&A.",
  longDescription: "Sense StudyHub (CourseFlow) is a modern online learning platform designed for structured and interactive education. Users can browse a curated catalog of courses, save them to a personal dashboard, and access detailed course pages with video lessons and rich descriptions. Each course includes a live comment section where learners can ask questions or leave feedback without page reloads. The platform features a full admin panel for managing courses and content, powered by Django REST Framework on the backend and Next.js with Tailwind CSS on the frontend. The application is fully responsive and optimized for mobile-first usage.", 
  tags: ["Python", "JavaScript", "Django REST", "Next.js", "Tailwind CSS", "JWT Auth", "SQLite/PostgreSQL", "HTML5 Video", "Responsive Mobile"],
  features: [
    "JWT-based authentication with secure access and refresh token handling",
    "Personalized user dashboard with paginated enrolled courses",
    "Course detail pages with HTML5 video player",
    "Real-time comment system for course Q&A without full page reloads",
    "Admin panel for course CRUD operations",
    "Mobile-first responsive design from 320px to desktop"
  ],
  challenges: [
    "Implementing protected routes with client-side guards",
    "Designing a reusable pagination component shared across multiple data-driven views",
    "Preserving rich text formatting in course descriptions",
    "Automating JWT token refresh flow using custom authentication helpers"
  ],
  results: [
    "Production-ready single-page application with real-time data fetching",
    "Seamless video lesson delivery",
    "Modern UI with neumorphic design and animations",
    "Database architecture designed for seamless migration from SQLite to PostgreSQ"
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
                    ? 'w-6 md:w-8 bg-[#c4b5fd]' 
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

export default function SenseStudyHub() {
  useEffect(() => {
    updateSEO({
      title: "Sense StudyHub - Online Learning Platform | Case Study | SensePower Digital",
      description: "Modern EdTech platform with curated course catalog, video lessons, JWT authentication, personal dashboard, and Q&A comment system. Built with Django REST Framework, Next.js, and Tailwind CSS.",
      keywords: "Sense StudyHub, CourseFlow, online learning platform, EdTech, education technology, e-learning, Django REST, Next.js, Python, JWT authentication, video lessons, LMS, learning management system, course catalog",
      ogTitle: "Sense StudyHub - EdTech Learning Platform | Case Study",
      ogDescription: "Modern online learning platform with course catalog, video lessons, personal dashboard, and interactive Q&A features.",
      ogImage: "https://sensepowerdigital.com/og-image.png",
      ogUrl: "https://sensepowerdigital.com/portfolio/sense-studyhub",
      twitterTitle: "Sense StudyHub - Online Learning Platform | SensePower Digital",
      twitterDescription: "Case study: EdTech platform with video lessons, JWT auth, and modern responsive design.",
      twitterImage: "https://sensepowerdigital.com/og-image.png",
      canonicalUrl: "https://sensepowerdigital.com/portfolio/sense-studyhub"
    });

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Sense StudyHub - EdTech Case Study",
      "description": "Modern online learning platform with curated course catalog, video lessons, and interactive Q&A features.",
      "author": { "@type": "Organization", "name": "SensePower Digital" },
      "publisher": { "@type": "Organization", "name": "SensePower Digital", "url": "https://sensepowerdigital.com" },
      "datePublished": "2024-01-01",
      "dateModified": "2024-12-12",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://sensepowerdigital.com/portfolio/sense-studyhub" },
      "about": { "@type": "SoftwareApplication", "name": "Sense StudyHub", "applicationCategory": "Education", "operatingSystem": "Web" }
    });
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end justify-center overflow-hidden pb-8 bg-background">
        <HeroBackground src={workHeroBg} position="center 80%" />
        <div className="absolute inset-0 z-10 bg-linear-to-b from-background/0 via-background/50 to-background" />       
        <div className="absolute top-2 md:top-6 left-0 right-0 z-30 container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center w-full">
            <Link href="/portfolio">
              <Button variant="ghost" className="gap-2 hover:bg-[#c4b5fd]/10" data-testid="button-back-portfolio">
                <ArrowLeft size={18} />
                Back to Portfolio
              </Button>
            </Link>
            <Link href="/portfolio/ora-aid" className="hidden md:block">
              <Button variant="ghost" className="gap-2 hover:bg-[#c4b5fd]/10" data-testid="button-next-project">
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
              <Badge className="bg-[#c4b5fd]/10 text-[#c4b5fd] border-[#c4b5fd]/20">{projectData.category}</Badge>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#c4b5fd]" />
                <span>{projectData.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-[#c4b5fd]" />
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
            
            <h3 className="text-xl font-bold mb-4 text-[#c4b5fd]">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {projectData.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#c4b5fd]/5 border border-[#c4b5fd]/10">
                  <BookOpen size={20} className="text-[#c4b5fd] mt-0.5 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
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
              <div className="p-6 rounded-2xl border border-[#c4b5fd]/10 bg-[#c4b5fd]/5">
                <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {projectData.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="border-[#c4b5fd]/20 text-xs">{tag}</Badge>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-4 md:p-8 rounded-2xl border border-[#c4b5fd]/10 bg-linear-to-br from-[#c4b5fd]/5 to-transparent"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <Zap size={18} className="md:w-5 md:h-5 text-[#c4b5fd]" />
              Challenges Solved
            </h3>
            <ul className="space-y-3">
              {projectData.challenges.map((challenge, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="text-[#c4b5fd] shrink-0">•</span>
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
            className="p-4 md:p-8 rounded-2xl border border-[#c4b5fd]/10 bg-linear-to-br from-[#c4b5fd]/5 to-transparent"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <Globe size={18} className="md:w-5 md:h-5 text-[#c4b5fd]" />
              Results Achieved
            </h3>
            <ul className="space-y-3">
              {projectData.results.map((result, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#c4b5fd] mt-0.5 shrink-0" />
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
          className="relative text-center p-6 md:p-12 rounded-2xl md:rounded-3xl border border-[#c4b5fd]/10 overflow-hidden mb-4 md:mb-[15px]"
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
            <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-4">Ready to build a scalable platform like this?</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto">
              Let’s discuss your idea and design a scalable, user-focused solution tailored to your business goals.
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
