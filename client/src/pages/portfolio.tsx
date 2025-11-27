import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LayoutTemplate, Code2, Bug, Zap } from "lucide-react";
import { Link } from "wouter";
import { AnimatedText } from "@/components/animated-text";
import workHeroBg from "@assets/1709706757448_1764139146885.jpg";
import aussiewayImg from "@assets/изображение_1764055739030.png";
import sensestudyhubImg from "@assets/изображение_1764056223710.png";
import oraidImg from "@assets/изображение_1764057538171.png";
import expertlashImg from "@assets/generated_images/expertlash_connect_with_rich_pink_design.png";

const projects = [
  {
    id: 1,
    title: "Aussie Way Visa",
    category: "Legal Tech",
    description: "A modern platform for Australian visa applications and migration services. Study, work, and live in Australia with expert legal guidance.",
    tags: ["Next.js", "OpenAI API", "Calendly", "Express.js", "Node", "JavaScript", "Tailwind", "REST APIs", "Decap CMS"],
    image: aussiewayImg
  },
  {
    id: 2,
    title: "Sense StudyHub",
    category: "EdTech",
    description: "Comprehensive online learning platform with interactive courses and student engagement tools.",
    tags: ["Python", "JavaScript", "Django", "Next.js", "Tailwind", "Authentication", "HTML", "CSS", "Responsive Mobile"],
    image: sensestudyhubImg
  },
  {
    id: 3,
    title: "Ora-Aid",
    category: "HealthTech",
    description: "Self-adhesive intraoral patch for safe, effective oral wound care. Innovative healthcare solution.",
    tags: ["Landing Page", "Bootstrap 5", "HTML", "CSS", "E-commerce", "Email Integration"],
    image: oraidImg
  },
  {
    id: 4,
    title: "ExpertLash",
    category: "Beauty Tech",
    description: "Professional lash extension booking and consultation platform. Connect with expert lash technicians and manage appointments seamlessly.",
    tags: ["Telegram Bot", "Telegram MiniApp", "Paid Subscription", "Stripe", "PayPal", "Authentication", "Python", "Supabase", "Next.js", "Tailwind"],
    image: expertlashImg
  }
];

export default function Portfolio() {
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
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/0 via-background/30 to-background" />
        
        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <div className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.8] mb-8 text-glow">
              <AnimatedText text="Explore" staggerDelay={0.06} duration={0.6} initialDelay={0.3} />
              <br />
              <AnimatedText 
                text="Our Works." 
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
              A collection of projects where design meets rigorous engineering.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <>
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] mb-6 rounded-3xl overflow-hidden border border-[#d2f7be]/10">
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

                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-3xl font-display font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <span className="text-muted-foreground font-mono text-sm pt-2">{project.category}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 max-w-md">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="rounded-md bg-muted/50 text-muted-foreground font-normal border-[#d2f7be]/5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
              
              {index === 1 && (
                <motion.div
                  key="cta"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-[#d2f7be]/5 md:col-span-2"
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
                    <h2 className="text-4xl font-display font-bold mb-6">Ready to work together?</h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                      Let's build something exceptional. Whether you need an MVP, testing strategy, or design system—we're ready to help.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link href="/contact">
                        <Button size="lg" className="rounded-full text-lg px-8 shadow-lg shadow-purple-500/40 cursor-pointer">Get in Touch</Button>
                      </Link>
                      <Link href="/services">
                        <Button variant="outline" size="lg" className="rounded-full text-lg px-8 border-[#d2f7be]/10 hover:bg-[#d2f7be]/5 shadow-lg shadow-purple-500/40 cursor-pointer">
                          View Services
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </>
          ))}
        </div>
      </div>

      {/* The Process Section */}
      <section className="py-32 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            How We <AnimatedText 
              text="Build." 
              staggerDelay={0.06} 
              duration={0.6}
              initialDelay={0.3}
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary"
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology delivers exceptional results, every time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
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
              className="group relative p-8 rounded-3xl border border-[#d2f7be]/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-primary/50 transition-all duration-300"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                {/* Step number */}
                <div className="text-6xl font-display font-black text-[#d2f7be]/5 group-hover:text-[#d2f7be]/10 transition-colors mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 border border-primary/20 group-hover:border-primary/50 shadow-lg shadow-primary/10">
                  {step.icon}
                </div>

                {/* Title */}
                <h4 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
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
      </section>
    </Layout>
  );
}