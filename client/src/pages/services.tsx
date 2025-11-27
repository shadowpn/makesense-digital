import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Check, Code2, Bug, Zap, Database, LayoutTemplate, CheckCircle, Users, Target, Palette, Cloud, Settings } from "lucide-react";
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
import { useLocation } from "wouter";
import { useState } from "react";

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
    price: "$6,400",
    period: "per project",
    description: "Ideal for growing businesses",
    features: [
      "Up to 4 weeks delivery",
      "160 hours estimation",
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
            <div className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.8] mb-8 text-glow">
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
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            >
              We combine engineering precision with design intuition to build software that works flawlessly and looks exceptional.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        {/* Core Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 auto-rows-max">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-muted/10 hover:bg-muted/20 transition-colors"
            >
              <div className="p-10 md:p-16 relative z-10">
                <div className="w-24 h-24 mb-8 rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl flex items-center justify-center">
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

                <h3 className="text-4xl font-display font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-10 max-w-md">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
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

                <Button className="rounded-full" variant="secondary">
                  Learn more
                </Button>
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
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-white/5 mb-16"
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
            <h2 className="text-4xl font-display font-bold mb-6">Ready to work together?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's transform your vision into reality. Whether you need an MVP, comprehensive testing, or complete development—we're ready to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full text-lg px-8 shadow-lg shadow-purple-500/40 cursor-pointer" onClick={handleContactClick}>
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-lg px-8 border-white/10 hover:bg-white/5 shadow-lg shadow-purple-500/40 cursor-pointer" onClick={handleContactClick}>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Visual Services Section */}
        <div className="border-t border-white/10 py-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-center mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Beyond our core offerings, we provide specialized services to enhance your digital product
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fullstack Development",
                desc: "Complete end-to-end development from frontend UI to backend infrastructure",
                image: fullstackImg,
                icon: <Code2 size={24} />,
              },
              {
                title: "UI/UX Design Systems",
                desc: "Custom design systems and component libraries for consistent branding",
                image: designImg,
                icon: <Palette size={24} />,
              },
              {
                title: "DevOps & Deployment",
                desc: "Cloud infrastructure, CI/CD pipelines, and production optimization",
                image: devopsImg,
                icon: <Cloud size={24} />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-muted/20">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 bg-muted/10 group-hover:bg-muted/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 mb-16 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-center mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-4">
              Pricing below is indicative only based on estimated project complexity ($40/hour rate). Actual costs depend on specific project requirements, complexity, and scope.
            </p>
            <p className="text-base text-muted-foreground text-center max-w-3xl mx-auto">
              Every project is unique—we'll provide a custom quote after understanding your vision and technical needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                onClick={() => setSelectedPlan(plan.id)}
                className={`rounded-2xl p-8 transition-all duration-300 cursor-pointer relative ${
                  selectedPlan === plan.id || plan.highlight
                    ? "border-2 border-primary bg-gradient-to-br from-primary/10 to-transparent shadow-2xl shadow-primary/30 scale-105"
                    : "border border-white/10 bg-muted/10 hover:bg-muted/20"
                }`}
              >
                {(selectedPlan === plan.id || plan.highlight) && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(168, 85, 247, 0.4)",
                        "0 0 0 10px rgba(168, 85, 247, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                )}
                {(plan.highlight || selectedPlan === plan.id) && (
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                    {selectedPlan === plan.id ? "Selected" : "Most Popular"}
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <div className="mb-8">
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>
                <Button 
                  className={`w-full rounded-full mb-8 ${selectedPlan === plan.id || plan.highlight ? "" : "border-primary/20"}`}
                  variant={selectedPlan === plan.id || plan.highlight ? "default" : "outline"}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContactClick();
                  }}
                >
                  Get Started
                </Button>
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="border-t border-white/10 py-16 mb-16">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">The Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <LayoutTemplate />,
                title: "Discovery",
                desc: "We map out requirements and define success metrics.",
              },
              {
                icon: <Code2 />,
                title: "Development",
                desc: "Iterative builds with bi-weekly demos and feedback.",
              },
              {
                icon: <Bug />,
                title: "Testing",
                desc: "Rigorous automated and manual testing cycles.",
              },
              {
                icon: <Zap />,
                title: "Deployment",
                desc: "Smooth rollout with monitoring and support.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto bg-muted/30 rounded-2xl flex items-center justify-center text-primary mb-6 border border-white/5">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="border-t border-white/10 pt-16 mb-16">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Our Unwavering Values</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Velocity + Quality</h3>
                </div>
                <p className="text-muted-foreground">
                  We shatter the false choice between speed and excellence. Agile, rigorous, production-ready—delivered in weeks, not months.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold">User-Obsessed</h3>
                </div>
                <p className="text-muted-foreground">
                  Every pixel, every line of code serves a purpose. We listen, iterate, and refine with relentless dedication to perfection.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Users size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold">True Partnership</h3>
                </div>
                <p className="text-muted-foreground">
                  We're an extension of your team, invested in your vision. Your wins are our wins, your challenges are ours to solve together.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl" />
              <div className="relative p-12 h-full flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    "Excellence isn't a destination—it's a commitment we make to you every single day. We build products that don't just meet expectations, they exceed them."
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="font-display font-bold text-lg">Nataliia Petrychuk</p>
                    <p className="text-sm text-muted-foreground">Founder, SensePower Digital</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="border-t border-white/10 py-16 mb-0">
          <h2 className="text-4xl font-display font-bold mb-12 text-center"><AnimatedText text="Our Expertise." staggerDelay={0.06} duration={0.6} initialDelay={0.3} className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary" /></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Projects", value: "50+" },
              { label: "Team Members", value: "12" },
              { label: "Industries Served", value: "8+" },
              { label: "Countries", value: "6" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-muted/10 border border-white/5 hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
