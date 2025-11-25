import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, CheckCircle, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedText } from "@/components/animated-text";
import heroBg from "@assets/generated_images/abstract_digital_dark_mode_hero_background.png";
import aussiewayImg from "@assets/изображение_1764055147650.png";

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
                <Button size="lg" className="h-14 px-8 rounded-full text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                  View Case Studies
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
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
            <a className="hidden md:flex items-center gap-2 hover:text-primary transition-colors font-medium group">
              View all projects <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-[618px]">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group bg-muted/30 border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src={aussiewayImg} alt="Aussie Way Visa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 p-10 z-20">
              <div className="mb-3 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono inline-block backdrop-blur-md">LEGAL TECH</div>
              <h3 className="text-4xl font-display font-bold mb-2">Aussie Way Visa</h3>
              <p className="text-gray-300 max-w-md">A modern platform for Australian visa applications and migration services. Study, work, and live in Australia with expert legal guidance.</p>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="rounded-3xl overflow-hidden relative group bg-muted/30 border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80" alt="Dev Tool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <div className="mb-3 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-mono inline-block backdrop-blur-md">DEVELOPMENT</div>
              <h3 className="text-2xl font-display font-bold">MVP Platform</h3>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="rounded-3xl overflow-hidden relative group bg-muted/30 border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="Analytics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <div className="mb-3 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono inline-block backdrop-blur-md">ANALYTICS</div>
              <h3 className="text-2xl font-display font-bold">DataFlow</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-muted/20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Engineered for Excellence.</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We don't just build; we verify. Our unique approach combines rapid MVP development with rigorous automated testing strategies to ensure your product scales without debt.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Rapid MVP Development with Next.js",
                  "End-to-End Automated Testing Suites",
                  "Performance & Accessibility Audits",
                  "Scalable Frontend Architectures"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <CheckCircle className="text-primary" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/services">
                <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10 text-primary">
                  Explore Methodologies
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="p-8 rounded-3xl bg-background border border-white/5">
                  <Code className="mb-4 text-primary" size={32} />
                  <h3 className="font-bold mb-2">MVP Dev</h3>
                  <p className="text-sm text-muted-foreground">0 to 1 in weeks, not months.</p>
                </div>
                <div className="p-8 rounded-3xl bg-background border border-white/5 opacity-60">
                  <Smartphone className="mb-4 text-primary" size={32} />
                  <h3 className="font-bold mb-2">Responsive</h3>
                  <p className="text-sm text-muted-foreground">Mobile-first architecture.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-8 rounded-3xl bg-background border border-white/5 opacity-60">
                  <Cpu className="mb-4 text-primary" size={32} />
                  <h3 className="font-bold mb-2">Automation</h3>
                  <p className="text-sm text-muted-foreground">Robust CI/CD pipelines.</p>
                </div>
                <div className="p-8 rounded-3xl bg-background border border-white/5">
                  <CheckCircle className="mb-4 text-primary" size={32} />
                  <h3 className="font-bold mb-2">QA Testing</h3>
                  <p className="text-sm text-muted-foreground">Manual & Automated verification.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}