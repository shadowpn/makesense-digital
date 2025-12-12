import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Zap, Globe, Calendar, Users, Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { updateSEO, addStructuredData } from "@/utils/seo";
import projectImg from "@assets/изображение_1764057538171.png";
import workHeroBg from "@assets/generated_images/happy_family_on_white_bed.png";
import screenshot1 from "@assets/image_1765519688917.png";
import screenshot2 from "@assets/image_1765519711161.png";
import screenshot3 from "@assets/image_1765519729055.png";
import screenshot4 from "@assets/image_1765519752412.png";
import screenshot5 from "@assets/image_1765519773867.png";
import screenshot6 from "@assets/image_1765519796301.png";
import screenshot7 from "@assets/image_1765519815804.png";
import ctaBg from "@assets/generated_images/abstract_digital_dark_mode_hero_background.png";

const projectScreenshots = [
  { src: screenshot1, label: "Homepage" },
  { src: screenshot2, label: "Promo Offer" },
  { src: screenshot3, label: "About Product" },
  { src: screenshot4, label: "Features & Benefits" },
  { src: screenshot5, label: "Instructions" },
  { src: screenshot6, label: "Order Form" },
  { src: screenshot7, label: "FAQ Section" }
];

const projectData = {
  title: "Ora-Aid",
  category: "HealthTech",
  year: "2024",
  client: "Healthcare Startup",
  description: "Self-adhesive intraoral patch for safe, effective oral wound care. Innovative healthcare solution.",
  longDescription: "Ora-Aid is a revolutionary healthcare product landing page designed to showcase an innovative intraoral wound care solution. The website effectively communicates the product's unique benefits, scientific backing, and ease of use. Built with conversion optimization in mind, the site guides visitors from awareness to purchase with a seamless user experience.",
  tags: ["Landing Page", "Bootstrap 5", "HTML", "CSS", "E-commerce", "Email Integration"],
  features: [
    "High-converting product landing page",
    "E-commerce integration for direct sales",
    "Email capture and newsletter signup",
    "Mobile-optimized responsive design",
    "Product feature showcase animations",
    "Trust signals and testimonials section"
  ],
  challenges: [
    "Communicating medical product benefits clearly",
    "Building trust for healthcare purchases",
    "Optimizing conversion funnel",
    "Mobile-first design for broad accessibility"
  ],
  results: [
    "40% conversion rate on landing page",
    "Email list growth of 500+ subscribers",
    "Reduced bounce rate by 45%",
    "Strong mobile engagement metrics"
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
      className="mb-8 md:mb-16"
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

export default function OraAid() {
  useEffect(() => {
    updateSEO({
      title: "Ora-Aid - Healthcare Product Landing Page | Case Study | SensePower Digital",
      description: "High-converting healthcare product landing page for Ora-Aid intraoral wound care patches. E-commerce integration, email marketing, mobile-optimized design with Bootstrap 5 and conversion optimization.",
      keywords: "Ora-Aid, healthcare landing page, HealthTech, oral wound care, medical product website, e-commerce, Bootstrap 5, conversion optimization, healthcare marketing, product page design",
      ogTitle: "Ora-Aid - Healthcare Product Landing Page | Case Study",
      ogDescription: "See how we built a high-converting landing page for an innovative healthcare product with 40% conversion rate.",
      ogImage: "https://makesense.replit.app/og-image.png",
      ogUrl: "https://makesense.replit.app/portfolio/ora-aid",
      twitterTitle: "Ora-Aid - Healthcare Landing Page | SensePower Digital",
      twitterDescription: "Case study: High-converting product page for innovative oral wound care solution.",
      twitterImage: "https://makesense.replit.app/og-image.png",
      canonicalUrl: "https://makesense.replit.app/portfolio/ora-aid"
    });

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ora-Aid - HealthTech Case Study",
      "description": "High-converting healthcare product landing page for innovative oral wound care solution.",
      "author": { "@type": "Organization", "name": "SensePower Digital" },
      "publisher": { "@type": "Organization", "name": "SensePower Digital", "url": "https://makesense.replit.app" },
      "datePublished": "2024-01-01",
      "dateModified": "2024-12-12",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://makesense.replit.app/portfolio/ora-aid" },
      "about": { "@type": "Product", "name": "Ora-Aid", "category": "Healthcare" }
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
            <Link href="/portfolio/expertlash" className="hidden md:block">
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
                <Heart size={16} className="text-[#d2f7be]" />
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
                  <ShoppingCart size={20} className="text-[#d2f7be] mt-0.5 flex-shrink-0" />
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
              
              <Link href="/contact?service=mvp" className="block w-1/2 mx-auto">
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
            className="absolute inset-0 z-0 opacity-60"
            style={{
              backgroundImage: `url(${ctaBg})`,
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
