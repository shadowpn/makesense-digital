import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, CheckCircle, Cpu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedText } from "@/components/animated-text";
import heroBg from "@assets/generated_images/abstract_digital_dark_mode_hero_background.png";
import ctaBg from "@assets/generated_images/futuristic_dark_tech_background.png";
import aussiewayImg from "@assets/изображение_1764055739030.png";
import sensestudyhubImg from "@assets/изображение_1764056223710.png";
import oraidImg from "@assets/изображение_1764057538171.png";
import beautybotImg from "@assets/stock_images/beauty_course_online_da449890.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
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
            <motion.div variants={fadeIn} className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-mono font-medium">
              AVAILABLE FOR NEW PROJECTS
            </motion.div>
            
            <div className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.8] mb-8 text-glow">
              <AnimatedText text="Designing the" staggerDelay={0.06} duration={0.6} initialDelay={0.3} />
              <br />
              <AnimatedText 
                text="Future of Digital." 
                staggerDelay={0.06} 
                duration={0.6}
                initialDelay={1.8}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary"
              />
            </div>
            
            <motion.p 
              variants={fadeIn} 
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            >
              We create and test digital products at every stage — from concept to full implementation.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Link href="/portfolio">
                <Button size="lg" className="h-14 px-8 rounded-full text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-purple-500/40 cursor-pointer">
                  View Case Studies
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm shadow-lg shadow-purple-500/40 cursor-pointer">
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Selected Works - Bento Grid */}
      <section className="py-32 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Selected Works</h2>
            <p className="text-muted-foreground">Recent projects and experiments.</p>
          </div>
          <Link href="/portfolio">
            <a className="hidden md:flex items-center gap-2 hover:text-primary transition-colors font-medium group cursor-pointer">
              View all projects <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 md:grid-rows-3 gap-6 h-[927px]">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group bg-muted/30 border border-white/5 p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src={aussiewayImg} alt="Aussie Way Visa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
            <div className="absolute bottom-0 left-0 p-10 z-20">
              <div className="mb-3 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono inline-block backdrop-blur-md">LEGAL TECH</div>
              <h3 className="text-4xl font-display font-bold mb-2">Aussie Way Visa</h3>
              <p className="text-gray-300 max-w-md">A modern platform for Australian visa applications and migration services. Study, work, and live in Australia with expert legal guidance.</p>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="rounded-3xl overflow-hidden relative group bg-muted/30 border border-white/5 p-4"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src={sensestudyhubImg} alt="Sense StudyHub" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
            <div className="absolute bottom-[30px] left-0 p-6 z-20">
              <div className="mb-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-mono inline-block backdrop-blur-md">EDTECH</div>
              <h3 className="text-xl font-display font-bold">Sense StudyHub</h3>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="rounded-3xl overflow-hidden relative group bg-muted/30 border border-white/5 p-4 row-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src={oraidImg} alt="Ora-Aid" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
            <div className="absolute bottom-[30px] left-0 p-6 z-20">
              <div className="mb-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-mono inline-block backdrop-blur-md">HEALTHTECH</div>
              <h3 className="text-xl font-display font-bold mb-2">Ora-Aid</h3>
              <p className="text-gray-300 text-xs">Self-adhesive intraoral patch for safe, effective oral wound care.</p>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="rounded-3xl overflow-hidden relative group bg-muted/30 border border-white/5 p-4"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80" alt="Dev Tool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
            <div className="absolute bottom-[30px] left-0 p-6 z-20">
              <div className="mb-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono inline-block backdrop-blur-md">DEVELOPMENT</div>
              <h3 className="text-xl font-display font-bold">MVP Platform</h3>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="rounded-3xl overflow-hidden relative group bg-muted/30 border border-white/5 p-4"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src={beautybotImg} alt="Beauty Bot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
            <div className="absolute bottom-[30px] left-0 p-6 z-20">
              <div className="mb-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono inline-block backdrop-blur-md">TELEGRAM BOT</div>
              <h3 className="text-xl font-display font-bold">Beauty Bot</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-white/5"
        >
          <div 
            className="absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage: `url(${ctaBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-background/60 via-background/50 to-background/60" />
          
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
                <Button variant="outline" size="lg" className="rounded-full text-lg px-8 border-white/10 hover:bg-white/5 shadow-lg shadow-purple-500/40 cursor-pointer">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-muted/20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">We Build, Test & Craft.</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                From fullstack development to rigorous QA testing and creative vibe coding. We deliver products that look stunning, work flawlessly, and delight users at every interaction.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Fullstack Development – Next.js, React, Backend APIs",
                  "Comprehensive QA Testing – Manual, Automated & Performance",
                  "Vibe Coding – Modern animations, polished UX, creative interactions",
                  "Production-Ready Solutions – From MVP to Scale"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <CheckCircle className="text-primary" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/services">
                <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10 text-primary shadow-lg shadow-purple-500/40 cursor-pointer">
                  Explore Our Services
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="p-8 rounded-3xl bg-background border border-white/5">
                  <Code className="mb-4 text-primary" size={32} />
                  <h3 className="font-bold mb-2">Fullstack</h3>
                  <p className="text-sm text-muted-foreground">End-to-end solutions with modern tech stacks.</p>
                </div>
                <div className="p-8 rounded-3xl bg-background border border-white/5 opacity-60">
                  <Smartphone className="mb-4 text-primary" size={32} />
                  <h3 className="font-bold mb-2">Responsive</h3>
                  <p className="text-sm text-muted-foreground">Perfect on every screen size.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-8 rounded-3xl bg-background border border-white/5">
                  <CheckCircle className="mb-4 text-primary" size={32} />
                  <h3 className="font-bold mb-2">QA Testing</h3>
                  <p className="text-sm text-muted-foreground">Automated & manual verification.</p>
                </div>
                <div className="p-8 rounded-3xl bg-background border border-white/5 opacity-60">
                  <Cpu className="mb-4 text-primary" size={32} />
                  <h3 className="font-bold mb-2">Vibe Coding</h3>
                  <p className="text-sm text-muted-foreground">Animations & creative polish.</p>
                </div>
                <div className="p-8 rounded-3xl bg-background border border-white/5 opacity-60">
                  <Search className="mb-4 text-primary" size={32} />
                  <h3 className="font-bold mb-2">SEO</h3>
                  <p className="text-sm text-muted-foreground">Optimized for search & discovery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}