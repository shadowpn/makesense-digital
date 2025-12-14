import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Check, Code2, Bug, Zap, Database, LayoutTemplate, CheckCircle, Users, Target, Palette, Cloud, Server, Wrench, Lightbulb, Trophy, HelpCircle } from "lucide-react";
import qaIcon from "@assets/generated_images/abstract_qa_testing_concept_icon.png";
import mvpIcon from "@assets/generated_images/abstract_mvp_development_concept_icon.png";
import telegramIcon from "@assets/generated_images/modern_telegram_bot_illustration.png";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/animated-text";
import servicesHeroBg from "@assets/generated_images/professional_tablet_holographic_tech.png";
import workHeroBg from "@assets/1709706757448_1764139146885.jpg";
import fullstackImg from "@assets/generated_images/modern_fullstack_workspace.png";
import designImg from "@assets/generated_images/professional_design_system_ui.png";
import devopsImg from "@assets/generated_images/modern_cloud_deployment_tech.png";
import { useLocation, Link } from "wouter";
import { useState, useEffect } from "react";
import { updateSEO, addStructuredData } from "@/utils/seo";

const services = [
  {
    id: "qa",
    title: "QA & Automation",
    description: "Rigorous testing strategies to ensure zero-defect releases.",
    icon: qaIcon,
    features: [
      "Manual Functional Testing",
      "E2E Automation (Playwright/Cypress)",
      "API Testing Integration",
      "Performance Load Testing",
    ],
  },
  {
    id: "mvp",
    title: "MVP Development",
    description: "Rapid prototyping and development for startup validation.",
    icon: mvpIcon,
    features: [
      "React/Next.js Architecture",
      "Rapid Prototyping",
      "Scalable Design Systems",
      "Production Deployment",
    ],
  },
  {
    id: "fullstack",
    title: "Fullstack Development",
    description: "Complete end-to-end solutions from frontend to backend.",
    icon: null,
    features: [
      "Frontend Architecture",
      "Backend API Development",
      "Database Design",
      "Deployment & Scaling",
    ],
  },
  {
    id: "telegram",
    title: "Telegram Bot Development",
    description: "Custom bots for messaging, automation, and user engagement.",
    icon: telegramIcon,
    features: [
      "Bot Logic & Automation",
      "Telegram API Integration",
      "Database & State Management",
      "Payment & Webhook Setup",
    ],
  },
];

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    price: "$3,200",
    period: "per project",
    description: "Perfect for small projects and startups",
    features: [
      "Up to 2 weeks delivery",
      "80 hours estimation",
      "Basic feature set",
      "2 rounds of revisions",
      "Email support",
      "Source code included",
    ],
    highlight: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: "$9,600",
    period: "per project",
    description: "Ideal for growing businesses",
    features: [
      "Up to 6 weeks delivery",
      "240 hours estimation",
      "Full feature implementation",
      "Unlimited revisions",
      "Priority support",
      "Complete documentation",
      "Post-launch optimization",
      "Analytics setup",
    ],
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "let's talk",
    description: "For complex, large-scale solutions",
    features: [
      "Custom timeline",
      "Advanced features & integrations",
      "Dedicated team",
      "24/7 support",
      "Training included",
      "Ongoing maintenance",
      "Scalability planning",
    ],
    highlight: false,
  },
];

export default function Services() {
  const [, setLocation] = useLocation();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  useEffect(() => {
    updateSEO({
      title: "Services & Pricing - SensePower Digital | QA, MVP, Fullstack, Telegram Bots",
      description: "Professional digital services from Sydney studio: QA & Automation Testing, MVP Development, Fullstack Solutions, Telegram Bot Development. Transparent pricing from $40/hour. Enterprise-grade quality, startup-friendly approach.",
      keywords: "QA testing services, automation testing Playwright Cypress, MVP development Sydney, fullstack development, Telegram bot development, web development pricing, software development rates, React Next.js developer, Python Django developer",
      ogTitle: "Services & Pricing - SensePower Digital",
      ogDescription: "Professional digital services: QA automation, MVP development, fullstack solutions, and Telegram bots. From $40/hour.",
      ogImage: "https://sensepowerdigital.com/og-image.png",
      ogUrl: "https://sensepowerdigital.com/services",
      twitterTitle: "Services & Pricing | SensePower Digital Sydney",
      twitterDescription: "QA testing, MVP development, fullstack solutions, Telegram bots. Transparent pricing from $40/hour.",
      twitterImage: "https://sensepowerdigital.com/og-image.png",
      canonicalUrl: "https://sensepowerdigital.com/services"
    });

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": { "@type": "Organization", "name": "SensePower Digital", "url": "https://sensepowerdigital.com" },
      "serviceType": ["QA Testing", "MVP Development", "Fullstack Development", "Telegram Bot Development"],
      "areaServed": { "@type": "Country", "name": "Australia" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "QA & Automation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MVP Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fullstack Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Telegram Bot Development" } }
        ]
      }
    });
  }, []);

  const handleContactClick = () => {
    setLocation("/contact");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: `url(${servicesHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/10 via-background/30 to-background" />
        
        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="text-3xl md:text-5xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.8] mb-6 md:mb-8 text-glow">
              <AnimatedText text="Our" staggerDelay={0.06} duration={0.6} initialDelay={0.3} />
              <br />
              <AnimatedText 
                text="Services." 
                staggerDelay={0.06} 
                duration={0.6}
                initialDelay={1.8}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-4 md:mb-6 leading-relaxed"
            >
              We combine engineering precision with design intuition to build software that works flawlessly and looks exceptional.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 md:mb-12 p-4 md:p-6 rounded-2xl border border-[#d2f7be]/20 bg-[#d2f7be]/5 backdrop-blur-sm max-w-2xl"
            >
              <p className="text-lg md:text-2xl lg:text-3xl font-display font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">Technology that actually makes sense.</span>
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                From idea to working solution — clear, tested, and reliable.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Core Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-16 auto-rows-max">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-[2rem] overflow-hidden border border-[#d2f7be]/10 bg-muted/10 hover:bg-muted/20 transition-colors"
            >
              <div className="p-6 md:p-10 lg:p-16 relative z-10">
                <div className="w-20 md:w-24 h-20 md:h-24 mb-4 md:mb-8 rounded-2xl overflow-hidden bg-black/50 border border-[#d2f7be]/10 shadow-2xl flex items-center justify-center">
                  {service.icon ? (
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Code2 className="w-12 h-12 text-primary" />
                  )}
                </div>

                <h3 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-10 max-w-md">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-10">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <div className="p-1 rounded-full bg-primary/10 text-primary">
                        <Check size={14} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link href={`/contact?service=${service.id}`}>
                  <Button size="lg" className="h-14 px-8 rounded-full text-lg shadow-lg shadow-purple-500/40 cursor-pointer" style={{ backgroundColor: '#d2f7be' }}>
                    Learn more
                  </Button>
                </Link>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-6 md:p-16 text-center border border-[#d2f7be]/5 m-4 md:m-[15px] mb-8 md:mb-[50px]"
        >
          <div 
            className="absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage: `url(${workHeroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/20 via-background/40 to-background" />
          
          <div className="relative z-20">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 md:mb-6">Ready to work together?</h2>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-10 max-w-2xl mx-auto">
              Let's transform your vision into reality. Whether you need an MVP, comprehensive testing, or complete development—we're ready to help.
            </p>
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-3 md:gap-4">
              <Button size="lg" className="h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg shadow-purple-500/40 cursor-pointer w-full md:w-auto" onClick={handleContactClick} style={{ backgroundColor: '#d2f7be' }}>
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg border-[#d2f7be]/10 hover:bg-[#d2f7be]/5 shadow-lg shadow-purple-500/40 cursor-pointer w-full md:w-auto" onClick={handleContactClick}>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Visual Services Section */}
        <div className="border-t border-[#d2f7be]/10 py-8 md:py-16 mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-12 text-center"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">Additional Services</h2>
            <p className="text-sm md:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Beyond our core offerings, we provide specialized services to enhance your digital product
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: "Fullstack Development",
                desc: "Complete end-to-end development from frontend UI to backend infrastructure",
                image: fullstackImg,
                icon: <Code2 size={20} className="md:w-6 md:h-6" />,
              },
              {
                title: "UI/UX Design Systems",
                desc: "Custom design systems and component libraries for consistent branding",
                image: designImg,
                icon: <Palette size={20} className="md:w-6 md:h-6" />,
              },
              {
                title: "DevOps & Deployment",
                desc: "Cloud infrastructure, CI/CD pipelines, and production optimization",
                image: devopsImg,
                icon: <Cloud size={20} className="md:w-6 md:h-6" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden border border-[#d2f7be]/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative h-28 md:h-48 overflow-hidden bg-muted/20">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 md:p-8 bg-muted/10 group-hover:bg-muted/20 transition-colors">
                  <div className="w-8 md:w-12 h-8 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2 md:mb-4 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Technology Section - Connected Flow */}
        <div className="border-t border-[#d2f7be]/10 py-8 md:py-16 mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-3 md:mb-4">Our Technology Stack</h2>
            <p className="text-sm md:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              We leverage the best-in-class technologies across all projects for scalability and performance
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              { 
                title: "Vibe Coding & AI", 
                Icon: Lightbulb, 
                items: ["Replit", "Figma", "Confluence", "Responsive Design", "Lovable", "Netlify", "Decap CMS"],
                color: "from-violet-600/15 to-purple-600/15"
              },
              { 
                title: "Frontend Stack", 
                Icon: Palette, 
                items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
                color: "from-blue-500/10 to-cyan-500/10"
              },
              { 
                title: "Backend & API", 
                Icon: Server, 
                items: ["Node.js", "Python", "Django", "REST APIs", "Stripe/PayPal", "JWT/Authentication"],
                color: "from-emerald-500/10 to-teal-500/10"
              },
              { 
                title: "Data Layer", 
                Icon: Database, 
                items: ["PostgreSQL", "MongoDB", "Supabase", "MyPHP"],
                color: "from-purple-500/10 to-pink-500/10"
              },
              { 
                title: "Testing & Automation", 
                Icon: CheckCircle, 
                items: ["Playwright", "Postman", "API Testing", "TestRail"],
                color: "from-orange-500/10 to-amber-500/10"
              },
              { 
                title: "Agile & SDLC", 
                Icon: Wrench, 
                items: ["Jira", "Scrum/Kanban", "Git", "CI/CD", "SEO"],
                color: "from-red-500/10 to-pink-500/10"
              },
            ].map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`relative border border-[#d2f7be]/10 group-hover:border-violet-500/50 rounded-3xl p-3 md:p-8 bg-gradient-to-br ${group.color} backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/40`}>
                  <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
                    <div className="p-2 md:p-3 rounded-2xl bg-gradient-to-br from-violet-500/30 to-purple-500/30 group-hover:from-violet-500/50 group-hover:to-purple-500/50 transition-all duration-300 flex-shrink-0">
                      <group.Icon size={20} className="md:w-7 md:h-7 text-lime-200 group-hover:text-lime-100 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <h3 className="text-base md:text-2xl font-display font-bold bg-gradient-to-r from-lime-200 via-yellow-100 to-lime-200 bg-clip-text text-transparent group-hover:from-lime-100 group-hover:via-yellow-50 group-hover:to-lime-100 transition-all duration-300">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {group.items.map((item, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + j * 0.05 }}
                        viewport={{ once: true }}
                        className="px-2 md:px-4 py-1 md:py-2 rounded-full font-mono text-xs md:text-sm bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-lime-200 hover:text-lime-100 hover:from-primary/30 hover:to-accent/30 transition-all cursor-pointer hover:shadow-lg hover:shadow-primary/20"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-8 md:py-16 mb-8 md:mb-16 border-t border-[#d2f7be]/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-12 text-center"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">Simple, Transparent Pricing</h2>
            <p className="text-sm md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-3 md:mb-4">
              Pricing below is indicative only based on estimated project complexity ($40/hour rate). Actual costs depend on specific project requirements, complexity, and scope.
            </p>
            <p className="text-xs md:text-base text-muted-foreground text-center max-w-3xl mx-auto">
              Every project is unique—we'll provide a custom quote after understanding your vision and technical needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                onClick={() => setSelectedPlan(plan.id)}
                style={
                  (selectedPlan !== null && selectedPlan === plan.id) || (selectedPlan === null && plan.highlight)
                    ? {
                        background: "linear-gradient(rgb(16, 16, 16), rgb(16, 16, 16)) padding-box, linear-gradient(135deg, #84cc16, #a855f7) border-box",
                      }
                    : {}
                }
                className={`rounded-2xl p-4 md:p-8 transition-all duration-300 cursor-pointer relative ${
                  (selectedPlan !== null && selectedPlan === plan.id) || (selectedPlan === null && plan.highlight)
                    ? "border-2 border-transparent"
                    : "border border-[#d2f7be]/10 bg-muted/10 hover:bg-muted/20"
                }`}
              >
                <h3 className="text-xl md:text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">{plan.description}</p>
                <div className="mb-6 md:mb-8">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{plan.price}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{plan.period}</div>
                </div>
                <Button 
                  size="lg"
                  className={`w-full h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg shadow-purple-500/40 cursor-pointer mb-6 md:mb-8 ${selectedPlan === plan.id || plan.highlight ? "" : "border-[#d2f7be]/10"}`}
                  variant={selectedPlan === plan.id || plan.highlight ? "default" : "outline"}
                  style={selectedPlan === plan.id || plan.highlight ? { backgroundColor: '#d2f7be' } : {}}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContactClick();
                  }}
                >
                  Get Started
                </Button>
                <ul className="space-y-2 md:space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section - Animated Roadmap */}
        <div className="border-t border-[#d2f7be]/10 py-8 md:py-20 mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-6 text-center">Our Journey to Excellence</h2>
            <p className="text-sm md:text-lg text-muted-foreground text-center max-w-2xl mx-auto">Follow the path from concept to launch, delivering quality services and products</p>
          </motion.div>

          {/* Roadmap Container */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Animated Background Line - Horizontal (Desktop) */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="hidden md:block absolute top-6 md:top-8 left-0 right-0 h-1 bg-gradient-to-r from-lime-400 via-purple-400 to-lime-400 origin-left"
                style={{ originX: 0 }}
              />

              {/* Animated Background Line - Vertical (Mobile) */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-400 via-purple-400 to-lime-400 origin-top"
                style={{ originY: 0, transform: 'translateX(-50%)' }}
              />

              {/* Steps Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
                {[
                  { 
                    icon: <LayoutTemplate size={32} />, 
                    title: "Discovery", 
                    desc: "Map requirements & define success",
                    color: "from-blue-500/20 to-cyan-500/20"
                  },
                  { 
                    icon: <Code2 size={32} />, 
                    title: "Development", 
                    desc: "Build with iterative demos",
                    color: "from-emerald-500/20 to-teal-500/20"
                  },
                  { 
                    icon: <Bug size={32} />, 
                    title: "Testing", 
                    desc: "Rigorous quality assurance",
                    color: "from-orange-500/20 to-amber-500/20"
                  },
                  { 
                    icon: <Zap size={32} />, 
                    title: "Deployment", 
                    desc: "Smooth & monitored rollout",
                    color: "from-red-500/20 to-pink-500/20"
                  },
                  { 
                    icon: <CheckCircle size={32} />, 
                    title: "Success", 
                    desc: "Quality product delivered",
                    color: "from-violet-500/20 to-purple-500/20"
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="relative group"
                    style={{ textAlign: i % 2 === 0 ? 'left' : 'right' }}
                  >
                    {/* Step Circle */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center border-2 border-lime-200/50 bg-gradient-to-br ${step.color} backdrop-blur-md relative overflow-hidden group-hover:border-lime-200 transition-all duration-300`}
                      style={{ color: '#c3ecac' }}
                    >
                      {/* Animated gradient background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/10 to-lime-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">{step.icon}</div>
                      
                      {/* Pulse animation */}
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="absolute inset-0 rounded-full border-2 border-lime-400/30"
                      />
                    </motion.div>

                    {/* Step Content */}
                    <div className="md:text-center relative z-10">
                      <h4 className="text-lg font-display font-bold mb-2 bg-gradient-to-r from-lime-200 via-yellow-100 to-lime-200 bg-clip-text text-transparent">{step.title}</h4>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>

                    {/* Connection arrows (hidden on last step) */}
                    {i < 4 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.15 + 0.3 }}
                        viewport={{ once: true }}
                        className="absolute top-8 -right-3 hidden md:block"
                      >
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                          className="text-lime-400/60 text-2xl"
                        >
                          →
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Goal message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16 p-8 rounded-2xl border border-lime-100/30 bg-gradient-to-r from-lime-500/10 via-purple-500/10 to-lime-500/10 backdrop-blur-md"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Trophy size={28} className="text-lime-100" />
                <p className="text-lg font-display font-bold text-lime-100">The Result</p>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                After completing this journey, you receive a <span className="text-lime-100 font-semibold">production-ready product</span> built with precision, tested rigorously, and optimized for performance. Quality delivered, on time, every time.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="border-t border-[#d2f7be]/10 pt-8 md:pt-16 mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-6 md:mb-12 text-center">Our Unwavering Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Zap size={20} />
                  </div>
                  <h3 className="text-lg md:text-2xl font-display font-bold">Velocity + Quality</h3>
                </div>
                <p className="text-xs md:text-base text-muted-foreground">
                  We shatter the false choice between speed and excellence. Agile, rigorous, production-ready—delivered in weeks, not months.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Target size={20} />
                  </div>
                  <h3 className="text-lg md:text-2xl font-display font-bold">User-Obsessed</h3>
                </div>
                <p className="text-xs md:text-base text-muted-foreground">
                  Every pixel, every line of code serves a purpose. We listen, iterate, and refine with relentless dedication to perfection.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Users size={20} />
                  </div>
                  <h3 className="text-lg md:text-2xl font-display font-bold">True Partnership</h3>
                </div>
                <p className="text-xs md:text-base text-muted-foreground">
                  We're an extension of your team, invested in your vision. Your wins are our wins, your challenges are ours to solve together.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl" />
              <div className="relative p-6 md:p-12 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                    "Excellence isn't a destination—it's a commitment we make to you every single day. We build products that don't just meet expectations, they exceed them."
                  </p>
                  <div className="pt-4 border-t border-[#d2f7be]/10">
                    <p className="font-display font-bold text-base md:text-lg">Nataliia Petrychuk</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Founder, SensePower Digital</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="border-t border-[#d2f7be]/10 py-8 md:py-20 mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-16 text-center"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">Frequently Asked Questions</h2>
            <p className="text-sm md:text-lg text-muted-foreground text-center max-w-2xl mx-auto">Everything you need to know about our services, process, and partnerships</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4 px-4 md:px-0">
            {[
              {
                q: "What services do you provide?",
                a: "I help startups and businesses transform ideas into digital products. My expertise spans manual and automated QA, MVP development, no-code solutions, and building production-ready web applications and payment-enabled platforms. Whether you need to validate an idea, improve product quality, or launch a scalable solution — I can take your project from concept to deployment."
              },
              {
                q: "What types of projects do you work on?",
                a: "I work on products that require rapid delivery, measurable value, and technical reliability — including web platforms, SaaS tools, Telegram bots, subscription-based systems, and payment integrations with Stripe and PayPal. If your project needs testing, automation, or a functional MVP — I'm a good match."
              },
              {
                q: "How long does it take to build an MVP?",
                a: "Timelines depend on complexity, but a typical MVP takes 2–6 weeks. I focus on delivering only essential features that validate your business idea quickly, so you can test real user feedback before investing in full-scale development."
              },
              {
                q: "What tech stack do you use?",
                a: "I use modern, battle-tested tools — Python, Flask, Aiogram, JavaScript, Next.js, SQL, Supabase, and no-code platforms when speed matters. I also implement CI/CD pipelines, automated testing, and secure payment flows when required."
              },
              {
                q: "Do you work with existing products?",
                a: "Yes. I can audit, test, refactor, or extend an existing system. If your product lacks documentation, tests, or structure — I help stabilize it, reduce technical debt, and prepare it for scaling."
              },
              {
                q: "Do you provide QA and automated testing separately?",
                a: "Absolutely. You can engage me for manual testing, test automation, performance audits, or full QA ownership. My approach ensures your product behaves predictably and can confidently grow without fear of breaking changes."
              },
              {
                q: "Can you help me choose the right solution if I don't know what I need?",
                a: "Yes. I specialize in translating non-technical ideas into clear implementation plans. After a short briefing, I propose a solution, timeline, and cost — without unnecessary complexity or jargon."
              },
              {
                q: "How much does it cost to work with you?",
                a: "Pricing depends on project scope, complexity, and urgency. I offer transparent, milestone-based estimates so you always know what you are paying for. There are no hidden fees, and you can start small."
              },
              {
                q: "Do you provide ongoing support after launch?",
                a: "Yes. I can deliver post-launch support, bug fixes, updates, analytics, and new features to ensure your product evolves with your users and the market."
              },
              {
                q: "Why should we work together?",
                a: "Because I combine QA thinking, product mindset, and full-stack delivery skills — meaning I don't just build features, I build solutions that work, scale, and make sense. My goal is not to write code; it's to create products that succeed."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setSelectedFaq(selectedFaq === i ? null : i)}
                style={
                  selectedFaq === i
                    ? {
                        background: "linear-gradient(rgb(16, 16, 16), rgb(16, 16, 16)) padding-box, linear-gradient(135deg, #84cc16, #a855f7) border-box",
                      }
                    : {}
                }
                className={`group rounded-2xl p-4 md:p-6 transition-all duration-300 cursor-pointer ${
                  selectedFaq === i
                    ? "border-2 border-transparent"
                    : "border border-[#d2f7be]/10 hover:border-lime-200/50 bg-gradient-to-r from-white/2 to-white/1 hover:from-lime-500/5 hover:to-purple-500/5 backdrop-blur-md"
                }`}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div style={{ color: '#c3ecac' }} className="font-bold flex-shrink-0 mt-0.5">
                    <HelpCircle size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base md:text-lg font-display font-bold mb-2 group-hover:text-lime-100 transition-colors">{item.q}</h4>
                    {selectedFaq === i && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs md:text-sm text-muted-foreground leading-relaxed"
                      >
                        {item.a}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-16 pt-8 md:pt-12 border-t border-[#d2f7be]/10"
          >
            <p className="text-xs md:text-base text-muted-foreground mb-4 md:mb-6">Still have questions? We'd love to help.</p>
            <Button size="lg" className="h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg shadow-purple-500/40 cursor-pointer" style={{ backgroundColor: '#d2f7be' }} onClick={handleContactClick}>
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
