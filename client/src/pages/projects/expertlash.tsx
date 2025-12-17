import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Zap, Globe, Calendar, Users, Sparkles, CreditCard, MessageSquare } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { updateSEO, addStructuredData } from "@/utils/seo";
import { AnimatedText } from "@/components/animated-text";
import { HeroBackground } from "@/components/hero-background";
import projectImg from "@assets/generated_images/lash_course_light_pink_mockup.png";
import workHeroBg from "@assets/generated_images/online_lash_course_banner.png";
import ctaBg from "@assets/generated_images/abstract_digital_dark_mode_hero_background.png";

const projectData = {
  title: "ExpertLash",
  category: "Beauty Tech",
  year: "2024",
  client: "Beauty Industry Platform",
  description: "Professional lash extension booking and consultation platform. Connect with expert lash technicians and manage appointments seamlessly.",
  longDescription: "ExpertLash is a comprehensive beauty tech platform that revolutionizes how clients connect with professional lash technicians. Built as a Telegram Bot with a Mini App interface, it provides seamless booking, consultation scheduling, and subscription management. The platform integrates multiple payment providers and offers a premium experience for both clients and beauty professionals.",
  tags: ["Telegram Bot", "Telegram MiniApp", "Paid Subscription", "Stripe", "PayPal", "Authentication", "Python", "Supabase", "Next.js", "Tailwind"],
  features: [
    "Telegram Bot with Mini App interface",
    "Paid subscription management",
    "Stripe & PayPal payment integration",
    "User authentication system",
    "Appointment booking calendar",
    "Real-time notifications"
  ],
  challenges: [
    "Integrating Telegram Mini App with web backend",
    "Building secure payment processing flow",
    "Managing subscription lifecycle",
    "Creating intuitive bot conversation flows"
  ],
  results: [
    "500+ active monthly subscribers",
    "Payment processing success rate of 99.5%",
    "Bot interaction rate increased by 80%",
    "Customer satisfaction score of 4.9/5"
  ]
};

export default function ExpertLash() {
  useEffect(() => {
    updateSEO({
      title: "ExpertLash - Beauty Tech Telegram Bot Platform | Case Study | SensePower Digital",
      description: "Professional lash extension booking platform built as a Telegram Bot with Mini App interface. Features paid subscriptions via Stripe and PayPal, appointment booking, authentication, and real-time notifications using Python and Supabase.",
      keywords: "ExpertLash, Telegram Bot development, Beauty Tech, lash extensions booking, Telegram Mini App, Stripe integration, PayPal payments, subscription platform, beauty industry app, appointment scheduling, Supabase, Python bot",
      ogTitle: "ExpertLash - Beauty Tech Telegram Platform | Case Study",
      ogDescription: "Learn how we built a comprehensive Telegram Bot with Mini App for beauty professionals with payment integration.",
      ogImage: "https://sensepowerdigital.com/og-image.png",
      ogUrl: "https://sensepowerdigital.com/portfolio/expertlash",
      twitterTitle: "ExpertLash - Telegram Bot for Beauty Industry | SensePower Digital",
      twitterDescription: "Case study: Beauty tech platform with Telegram Bot, subscriptions, and payment processing.",
      twitterImage: "https://sensepowerdigital.com/og-image.png",
      canonicalUrl: "https://sensepowerdigital.com/portfolio/expertlash"
    });

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "ExpertLash - Beauty Tech Case Study",
      "description": "Professional lash extension booking platform with Telegram Bot and payment integration.",
      "author": { "@type": "Organization", "name": "SensePower Digital" },
      "publisher": { "@type": "Organization", "name": "SensePower Digital", "url": "https://sensepowerdigital.com" },
      "datePublished": "2024-01-01",
      "dateModified": "2024-12-12",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://sensepowerdigital.com/portfolio/expertlash" },
      "about": { "@type": "SoftwareApplication", "name": "ExpertLash", "applicationCategory": "Business", "operatingSystem": "Telegram" }
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
              <Button variant="ghost" className="gap-2 hover:bg-[#f9a8d4]/10" data-testid="button-back-portfolio">
                <ArrowLeft size={18} />
                Back to Portfolio
              </Button>
            </Link>
            <Link href="/portfolio/aussie-way-visa" className="hidden md:block">
              <Button variant="ghost" className="gap-2 hover:bg-[#f9a8d4]/10" data-testid="button-next-project">
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
              <Badge className="bg-[#f9a8d4]/10 text-[#f9a8d4] border-[#f9a8d4]/20">{projectData.category}</Badge>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#f9a8d4]" />
                <span>{projectData.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#f9a8d4]" />
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
          <div className="rounded-3xl overflow-hidden border border-[#f9a8d4]/10 shadow-2xl shadow-purple-500/10">
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
            
            <h3 className="text-xl font-bold mb-4 text-[#f9a8d4]">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {projectData.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#f9a8d4]/5 border border-[#f9a8d4]/10">
                  {i % 3 === 0 ? <MessageSquare size={20} className="text-[#f9a8d4] mt-0.5 shrink-0" /> : 
                   i % 3 === 1 ? <CreditCard size={20} className="text-[#f9a8d4] mt-0.5 shrink-0" /> :
                   <Sparkles size={20} className="text-[#f9a8d4] mt-0.5 shrink-0" />}
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
              <div className="p-6 rounded-2xl border border-[#f9a8d4]/10 bg-[#f9a8d4]/5">
                <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {projectData.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="border-[#f9a8d4]/20 text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
              
              <Link href="/contact?service=telegram" className="block w-1/2 mx-auto">
                <Button size="lg" className="w-full rounded-xl shadow-lg shadow-purple-500/40 text-sm md:text-base" style={{ backgroundColor: '#d2f7be' }} data-testid="button-start-similar">
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
            className="p-8 rounded-2xl border border-[#f9a8d4]/10 bg-linear-to-br from-[#f9a8d4]/5 to-transparent"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Zap size={20} className="text-[#f9a8d4]" />
              Challenges Solved
            </h3>
            <ul className="space-y-3">
              {projectData.challenges.map((challenge, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="text-[#f9a8d4] shrink-0">•</span>
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
            className="p-8 rounded-2xl border border-[#f9a8d4]/10 bg-linear-to-br from-[#f9a8d4]/5 to-transparent"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Globe size={20} className="text-[#f9a8d4]" />
              Results Achieved
            </h3>
            <ul className="space-y-3">
              {projectData.results.map((result, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#f9a8d4] mt-0.5 shrink-0" />
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
          className="relative text-center p-6 md:p-12 rounded-2xl md:rounded-3xl border border-[#f9a8d4]/10 overflow-hidden mb-4 md:mb-[15px]"
        >
          <div 
            className="absolute inset-0 z-0 opacity-60"
            style={{
              backgroundImage: `url(${ctaBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 z-10 bg-linear-to-b from-background/30 via-background/20 to-background/30" />
          
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
