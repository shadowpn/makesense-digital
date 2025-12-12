import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight, Zap, CheckCircle, Globe, Calendar, Users } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { updateSEO } from "@/utils/seo";
import projectImg from "@assets/изображение_1764055739030.png";
import heroBg from "@assets/generated_images/australian_visa_immigration_concept.png";
import screenshot1 from "@assets/generated_images/aussie_way_homepage_screenshot.png";
import screenshot2 from "@assets/generated_images/skilled_visa_page_screenshot.png";
import screenshot3 from "@assets/generated_images/student_visa_page_screenshot.png";
import screenshot4 from "@assets/generated_images/contact_page_screenshot.png";

const projectScreenshots = [
  { src: projectImg, label: "Main Project View" },
  { src: screenshot1, label: "Homepage" },
  { src: screenshot2, label: "Skilled Visa" },
  { src: screenshot3, label: "Student Visa" },
  { src: screenshot4, label: "Contact Page" }
];

const projectData = {
  title: "Aussie Way Visa",
  category: "Legal Tech",
  year: "2024",
  client: "Immigration Consultancy",
  description: "A modern platform for Australian visa applications and migration services. Study, work, and live in Australia with expert legal guidance.",
  longDescription: "Aussie Way Visa is a comprehensive digital platform designed to simplify the Australian immigration process. The platform provides potential migrants with detailed information about visa options, eligibility requirements, and step-by-step guidance through the application process. Integrated with AI-powered assistance and calendar booking for consultations.",
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
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-md border border-[#d2f7be]/20 text-white hover:bg-black/70 transition-all hover:scale-110"
            data-testid="button-slider-prev"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-md border border-[#d2f7be]/20 text-white hover:bg-black/70 transition-all hover:scale-110"
            data-testid="button-slider-next"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {projectScreenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-[#d2f7be]' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                data-testid={`button-slider-dot-${index}`}
              />
            ))}
          </div>
          
          <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-[#d2f7be]/20">
            <span className="text-sm text-white font-medium">{projectScreenshots[currentIndex].label}</span>
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
      description: "Modern platform for Australian visa applications and migration services. Next.js, OpenAI API, Calendly integration.",
      keywords: "Aussie Way Visa, case study, legal tech, immigration, Next.js, OpenAI, Calendly",
      ogUrl: "https://sensepower.digital/portfolio/aussie-way-visa",
      canonicalUrl: "https://sensepower.digital/portfolio/aussie-way-visa"
    });
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        
        <div className="container mx-auto px-6 relative z-20 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Link href="/portfolio">
              <Button variant="ghost" className="mb-6 gap-2 hover:bg-[#d2f7be]/10" data-testid="button-back-portfolio">
                <ArrowLeft size={18} />
                Back to Portfolio
              </Button>
            </Link>
            
            <Badge className="mb-4 bg-[#d2f7be]/10 text-[#d2f7be] border-[#d2f7be]/20">{projectData.category}</Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              {projectData.title}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              {projectData.description}
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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

      <div className="container mx-auto px-6 py-12 md:py-20">
        <ProjectSlider />

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
                  <CheckCircle size={20} className="text-[#d2f7be] mt-0.5 flex-shrink-0" />
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
                <Button size="lg" className="w-full rounded-xl shadow-lg shadow-purple-500/40" style={{ backgroundColor: '#d2f7be' }} data-testid="button-start-similar">
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
                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="text-[#d2f7be] mt-1">•</span>
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
          className="text-center p-12 rounded-3xl border border-[#d2f7be]/10 bg-[#d2f7be]/5"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Ready to build something similar?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss your project and create a solution that makes sense for your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-purple-500/40" style={{ backgroundColor: '#d2f7be' }} data-testid="button-get-in-touch">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}
