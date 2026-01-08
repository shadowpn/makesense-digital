import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LayoutTemplate, Code2, Bug, Zap } from "lucide-react";
import { Link } from "wouter";
import { AnimatedText } from "@/components/animated-text";
import { Fragment, useEffect } from "react";
import { updateSEO, addStructuredData } from "@/utils/seo";
import workHeroBg from "@assets/1709706757448_1764139146885.jpg";
import aussiewayImg from "@assets/изображение_1764055739030.png";
import sensestudyhubImg from "@assets/изображение_1764056223710.png";
import oraidImg from "@assets/image_1765519688917.png";
import expertlashImg from "@assets/generated_images/lash_course_light_pink_mockup.png";

const projects = [
  {
    id: 1,
    title: "Aussie Way Visa",
    slug: "aussie-way-visa",
    category: "Legal Tech",
    description: "A modern platform for Australian visa applications and migration services. Study, work, and live in Australia with expert legal guidance.",
    tags: ["Next.js", "OpenAI API", "Calendly", "Express.js", "Node", "JavaScript", "Tailwind", "REST APIs", "Decap CMS"],
    image: aussiewayImg
  },
  {
    id: 2,
    title: "Sense StudyHub",
    slug: "sense-studyhub",
    category: "EdTech",
    description: "Comprehensive online learning platform with interactive courses and student engagement tools.",
    tags: ["Python", "JavaScript", "Django", "Next.js", "Tailwind", "Authentication", "HTML", "CSS", "Responsive Mobile"],
    image: sensestudyhubImg
  },
  {
    id: 3,
    title: "Ora-Aid",
    slug: "ora-aid",
    category: "HealthTech",
    description: "Self-adhesive intraoral patch for safe, effective oral wound care. Innovative healthcare solution.",
    tags: ["Landing Page", "Bootstrap 5", "HTML", "CSS", "E-commerce", "Email Integration"],
    image: oraidImg
  },
  {
    id: 4,
    title: "ExpertLash",
    slug: "expertlash",
    category: "Beauty Tech",
    description: "Professional lash extension booking and consultation platform. Connect with expert lash technicians and manage appointments seamlessly.",
    tags: ["Telegram Bot", "Telegram MiniApp", "Paid Subscription", "Stripe", "PayPal", "Authentication", "Python", "Supabase", "Next.js", "Tailwind"],
    image: expertlashImg
  }
];

export default function Portfolio() {
  useEffect(() => {
    updateSEO({
      title: "Portfolio - SensePower Digital | Case Studies & Web Projects",
      description: "Explore our portfolio of successful digital products and case studies. Legal Tech, EdTech, HealthTech, and Beauty Tech projects. React, Next.js, Django, Telegram Bot development from Sydney, Australia.",
      keywords: "portfolio, case studies, web projects, EdTech, HealthTech, Legal Tech, Beauty Tech, React development, Next.js projects, fullstack portfolio, Sydney web developer, Australian tech studio",
      ogTitle: "Portfolio - Digital Products & Case Studies | SensePower Digital",
      ogDescription: "Discover our collection of successful projects from Legal Tech to EdTech. Design meets rigorous engineering.",
      ogImage: "https://sensepowerdigital.com/og-image.png",
      ogUrl: "https://sensepowerdigital.com/portfolio",
      twitterTitle: "Portfolio - SensePower Digital | Sydney Tech Studio",
      twitterDescription: "Explore our portfolio: Legal Tech, EdTech, HealthTech case studies with React, Next.js, Django.",
      twitterImage: "https://sensepowerdigital.com/og-image.png",
      canonicalUrl: "https://sensepowerdigital.com/portfolio"
    });

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Portfolio - SensePower Digital",
      "description": "Collection of digital products and case studies from SensePower Digital.",
      "publisher": { "@type": "Organization", "name": "SensePower Digital", "url": "https://sensepowerdigital.com/" },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Aussie Way Visa", "url": "https://sensepowerdigital.com/portfolio/aussie-way-visa" },
          { "@type": "ListItem", "position": 2, "name": "Sense StudyHub", "url": "https://sensepowerdigital.com/sense-studyhub" },
          { "@type": "ListItem", "position": 3, "name": "Ora-Aid", "url": "https://sensepowerdigital.com/portfolio/ora-aid" },
          { "@type": "ListItem", "position": 4, "name": "ExpertLash", "url": "https://sensepowerdigital.com/portfolio/expertlash" },
          { "@type": "ListItem", "position": 5, "name": "TennisConnect", "url": "https://sensepowerdigital.com/portfolio/tennis-connect-platform" },
          { "@type": "ListItem", "position": 6, "name": "VibeCode Landing", "url": "https://sensepowerdigital.com/portfolio/landing-vibecode" }
        ]
      }
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${workHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 z-10 bg-linear-to-b from-background/0 via-background/30 to-background" />
        
        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <div className="text-3xl md:text-5xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.8] mb-6 md:mb-8 text-glow">
              <AnimatedText text="Explore" staggerDelay={0.06} duration={0.6} initialDelay={0.3} />
              <br />
              <AnimatedText 
                text="Our Works." 
                staggerDelay={0.06} 
                duration={0.6}
                initialDelay={1.8}
                className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-4 md:mb-6 leading-relaxed"
            >
              A collection of projects where design meets rigorous engineering.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 md:mb-12 p-4 md:p-6 rounded-2xl border border-[#d2f7be]/20 bg-[#d2f7be]/5 backdrop-blur-sm max-w-2xl"
            >
              <p className="text-lg md:text-2xl lg:text-3xl font-display font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-accent to-primary">Digital solutions that make sense.</span>
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                Every project is built to work, tested to prove it, and designed to impress.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          {projects.map((project, index) => (
            <Fragment key={project.id}>
              <Link href={`/portfolio/${project.slug}`} data-testid={`link-project-${project.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-4/3 mb-2 md:mb-6 rounded-3xl overflow-hidden border border-[#d2f7be]/10">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    
                    <div className="absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-[#d2f7be]/10">
                      <ArrowUpRight className="text-[#d2f7be]" />
                    </div>
                  </div>

                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h3 className="text-xl md:text-3xl font-display font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <span className="text-muted-foreground font-mono text-xs md:text-sm pt-1 md:pt-2 whitespace-nowrap">{project.category}</span>
                  </div>
                  
                  <p className="text-xs md:text-base text-muted-foreground mb-3 md:mb-4 max-w-md">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={`${project.id}-${tagIndex}`} variant="secondary" className="rounded-md bg-muted/50 text-muted-foreground font-normal border-[#d2f7be]/5 text-xs md:text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </Link>
              
              {index === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative rounded-3xl overflow-hidden p-6 md:p-16 text-center border border-[#d2f7be]/5 col-span-1 md:col-span-2"
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
                    <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 md:mb-6">Ready to work together?</h2>
                    <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-10 max-w-2xl mx-auto">
                      Let's build something exceptional. Whether you need an MVP, testing strategy, or design system—we're ready to help.
                    </p>
                    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-3 md:gap-4">
                      <Link href="/contact" className="inline-block w-full md:w-auto">
                        <Button size="lg" className="h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg shadow-purple-500/40 cursor-pointer w-full" style={{ backgroundColor: '#d2f7be' }}>Get in Touch</Button>
                      </Link>
                      <Link href="/services" className="inline-block w-full md:w-auto">
                        <Button variant="outline" size="lg" className="h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg border-[#d2f7be]/10 hover:bg-[#d2f7be]/5 shadow-lg shadow-purple-500/40 cursor-pointer w-full">
                          View Services
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {/* The Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-8 md:py-20"
      >
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-4 inline-block">
            How We <AnimatedText 
              text="Build." 
              staggerDelay={0.06} 
              duration={0.6}
              initialDelay={0.3}
              className="bg-clip-text text-transparent bg-linear-to-r from-primary via-accent to-primary inline"
            />
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology delivers exceptional results, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              icon: <LayoutTemplate size={32} />,
              title: "Discovery",
              desc: "We map out requirements and define success metrics.",
              number: "01"
            },
            {
              icon: <Code2 size={32} />,
              title: "Development",
              desc: "Iterative builds with bi-weekly demos and feedback.",
              number: "02"
            },
            {
              icon: <Bug size={32} />,
              title: "Testing",
              desc: "Rigorous automated and manual testing cycles.",
              number: "03"
            },
            {
              icon: <Zap size={32} />,
              title: "Deployment",
              desc: "Smooth rollout with monitoring and support.",
              number: "04"
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-4 md:p-8 rounded-3xl border border-[#d2f7be]/10 bg-linear-to-br from-white/5 to-white/0 hover:border-primary/50 transition-all duration-300"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                {/* Step number */}
                <div className="text-4xl md:text-6xl font-display font-black text-[#d2f7be]/5 group-hover:text-[#d2f7be]/10 transition-colors mb-3 md:mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 md:w-14 h-12 md:h-14 mb-4 md:mb-6 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 border border-primary/20 group-hover:border-primary/50 shadow-lg shadow-primary/10">
                  {step.icon}
                </div>

                {/* Title */}
                <h4 className="text-lg md:text-2xl font-display font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Arrow indicator for next step */}
                {i < 3 && (
                  <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <ArrowUpRight size={24} className="text-[#d2f7be]/10 group-hover:text-primary/30 transition-colors rotate-90" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}