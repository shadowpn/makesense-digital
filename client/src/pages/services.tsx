import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Check, Code2, Bug, Zap, Database, LayoutTemplate, CheckCircle, Users, Target } from "lucide-react";
import qaIcon from "@assets/generated_images/abstract_qa_testing_concept_icon.png";
import mvpIcon from "@assets/generated_images/abstract_mvp_development_concept_icon.png";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/animated-text";
import servicesHeroBg from "@assets/generated_images/professional_tablet_holographic_tech.png";

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
];

export default function Services() {
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
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-muted/10 hover:bg-muted/20 transition-colors"
            >
              <div className="p-10 md:p-16 relative z-10">
                <div className="w-24 h-24 mb-8 rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
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

        {/* Core Values Grid */}
        <div className="border-t border-white/10 pt-20 mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-32">
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
                  We prove that speed and rigor aren't mutually exclusive. Our process delivers production-ready code in weeks, not months.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold">User-Centric</h3>
                </div>
                <p className="text-muted-foreground">
                  Every design decision and line of code serves a purpose. We obsess over user feedback and iterate relentlessly.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Users size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Partnership</h3>
                </div>
                <p className="text-muted-foreground">
                  We're not vendors—we're extensions of your team. We invest in your success and celebrate your wins as our own.
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
                    "Building great digital products is equal parts craft and science. It requires discipline, creativity, and an obsessive attention to detail."
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="font-display font-bold text-lg">Our Founder</p>
                    <p className="text-sm text-muted-foreground">Designer, Engineer, Entrepreneur</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="border-t border-b border-white/10 py-20 mb-24">
          <h2 className="text-4xl font-display font-bold mb-16 text-center"><AnimatedText text="Our Expertise." staggerDelay={0.06} duration={0.6} initialDelay={0.3} className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary" /></h2>
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

        {/* Tech Stack */}
        <div className="mb-32">
          <h2 className="text-3xl font-display font-bold mb-12">Our Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
              { name: "Backend", techs: ["Node.js", "Express", "PostgreSQL", "Drizzle ORM", "WebSockets"] },
              { name: "Testing", techs: ["Playwright", "Jest", "Cypress", "Load Testing", "CI/CD Pipelines"] }
            ].map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-muted/10 border border-white/5"
              >
                <h3 className="text-xl font-bold mb-6">{stack.name}</h3>
                <ul className="space-y-3">
                  {stack.techs.map((tech, j) => (
                    <li key={j} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle size={16} className="text-primary" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="border-t border-white/10 pt-20">
          <h2 className="text-3xl font-display font-bold mb-16 text-center">
            The Process
          </h2>
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
      </div>
    </Layout>
  );
}
