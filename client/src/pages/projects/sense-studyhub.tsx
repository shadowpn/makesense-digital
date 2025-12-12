import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Zap, Globe, Calendar, Users, BookOpen, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { updateSEO, addStructuredData } from "@/utils/seo";
import projectImg from "@assets/изображение_1764056223710.png";
import workHeroBg from "@assets/1709706757448_1764139146885.jpg";

const projectData = {
  title: "Sense StudyHub",
  category: "EdTech",
  year: "2024",
  client: "Education Platform",
  description: "Modern online learning platform with curated course catalog, video lessons, and interactive Q&A features.",
  longDescription: "Sense StudyHub (CourseFlow) is a modern online learning platform that allows users to browse, save, and take interactive courses. Registered users gain access to a curated catalog of course cards and can save courses to their personal dashboard. Each course includes detailed description, video lessons, and a comment section where learners can ask questions or leave feedback. The platform includes a full admin panel for uploading and managing courses, built using Django REST Framework on the backend and Next.js + Tailwind CSS on the frontend. Fully responsive and optimized for mobile use.",
  tags: ["Python", "Django REST", "Next.js", "Tailwind CSS", "JWT Auth", "SQLite/PostgreSQL", "HTML5 Video", "Responsive Mobile"],
  features: [
    "JWT-based authentication with secure token management",
    "Personal dashboard with enrolled courses pagination",
    "Course detail pages with HTML5 video player",
    "Live comment system for Q&A without page reloads",
    "Admin panel for course CRUD operations",
    "Mobile-first responsive design from 320px to desktop"
  ],
  challenges: [
    "Implementing protected routes with client-side guards",
    "Building reusable pagination component for multiple lists",
    "Preserving rich text formatting in course descriptions",
    "Token refresh automation through custom auth helpers"
  ],
  results: [
    "Full SPA with real-time data fetching",
    "Seamless video lesson delivery",
    "Modern UI with neumorphic design and animations",
    "Easily portable database from SQLite to PostgreSQL"
  ]
};

export default function SenseStudyHub() {
  useEffect(() => {
    updateSEO({
      title: "Sense StudyHub - Online Learning Platform | Case Study | SensePower Digital",
      description: "Modern EdTech platform with curated course catalog, video lessons, JWT authentication, personal dashboard, and Q&A comment system. Built with Django REST Framework, Next.js, and Tailwind CSS.",
      keywords: "Sense StudyHub, CourseFlow, online learning platform, EdTech, education technology, e-learning, Django REST, Next.js, Python, JWT authentication, video lessons, LMS, learning management system, course catalog",
      ogTitle: "Sense StudyHub - EdTech Learning Platform | Case Study",
      ogDescription: "Modern online learning platform with course catalog, video lessons, personal dashboard, and interactive Q&A features.",
      ogImage: "https://makesense.replit.app/og-image.png",
      ogUrl: "https://makesense.replit.app/portfolio/sense-studyhub",
      twitterTitle: "Sense StudyHub - Online Learning Platform | SensePower Digital",
      twitterDescription: "Case study: EdTech platform with video lessons, JWT auth, and modern responsive design.",
      twitterImage: "https://makesense.replit.app/og-image.png",
      canonicalUrl: "https://makesense.replit.app/portfolio/sense-studyhub"
    });

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Sense StudyHub - EdTech Case Study",
      "description": "Modern online learning platform with curated course catalog, video lessons, and interactive Q&A features.",
      "author": { "@type": "Organization", "name": "SensePower Digital" },
      "publisher": { "@type": "Organization", "name": "SensePower Digital", "url": "https://makesense.replit.app" },
      "datePublished": "2024-01-01",
      "dateModified": "2024-12-12",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://makesense.replit.app/portfolio/sense-studyhub" },
      "about": { "@type": "SoftwareApplication", "name": "Sense StudyHub", "applicationCategory": "Education", "operatingSystem": "Web" }
    });
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end justify-center overflow-hidden pb-8">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${workHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 80%'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        
        <div className="absolute top-2 md:top-6 left-0 right-0 z-30 container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center w-full">
            <Link href="/portfolio">
              <Button variant="ghost" className="gap-2 hover:bg-[#d2f7be]/10" data-testid="button-back-portfolio">
                <ArrowLeft size={18} />
                Back to Portfolio
              </Button>
            </Link>
            <Link href="/portfolio/ora-aid" className="hidden md:block">
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
                <GraduationCap size={16} className="text-[#d2f7be]" />
                <span>{projectData.client}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="rounded-3xl overflow-hidden border border-[#d2f7be]/10 shadow-2xl shadow-purple-500/10">
            <img src={projectImg} alt={projectData.title} className="w-full h-auto" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
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
                  <BookOpen size={20} className="text-[#d2f7be] mt-0.5 flex-shrink-0" />
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
              <div className="p-6 rounded-2xl border border-[#d2f7be]/10 bg-[#d2f7be]/5">
                <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {projectData.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="border-[#d2f7be]/20 text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
              
              <Link href="/contact?service=fullstack">
                <Button size="lg" className="rounded-full px-8 shadow-lg shadow-purple-500/40" style={{ backgroundColor: '#d2f7be' }} data-testid="button-start-similar">
                  Start Similar Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-[#d2f7be]/10 bg-gradient-to-br from-[#d2f7be]/5 to-transparent"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Zap size={20} className="text-[#d2f7be]" />
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
            className="p-8 rounded-2xl border border-[#d2f7be]/10 bg-gradient-to-br from-[#d2f7be]/5 to-transparent"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Globe size={20} className="text-[#d2f7be]" />
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
