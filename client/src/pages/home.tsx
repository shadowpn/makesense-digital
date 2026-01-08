import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, CheckCircle, Cpu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedText } from "@/components/animated-text";
import { HeroBackground } from "@/components/hero-background";
import { useEffect } from "react";
import { updateSEO, addStructuredData } from "@/utils/seo";
import heroBg from "@assets/generated_images/abstract_digital_dark_mode_hero_background.png";
import ctaBg from "@assets/generated_images/abstract_tech_geometric_pattern_background.png";
import workHeroBg from "@assets/1709706757448_1764139146885.jpg";
import aussiewayImg from "@assets/изображение_1764055739030.png";
import sensestudyhubImg from "@assets/изображение_1764056223710.png";
import oraidImg from "@assets/изображение_1764057538171.png";
import expertlashImg from "@assets/generated_images/lash_course_light_pink_mockup.png";
import vibesImg from "@assets/vibecode_land/vibe_code_home.png";
import tennisImg from "@assets/tennis-connect/main3_home.png";
import aboutNataliia from  "@assets/About_us.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  useEffect(() => {
    updateSEO({
      title: "SensePower Digital - We Code. We Test. We Make Sense. | Sydney Tech Studio",
      description: "Sydney-based digital studio specializing in fullstack development, QA automation testing, and MVP development. We create and test digital products from concept to implementation using React, Next.js, Python, and Playwright.",
      keywords: "SensePower Digital, fullstack development Sydney, QA testing Australia, MVP development, digital studio, web development, React developer, Next.js, automation testing, Playwright, Cypress, web design Sydney",
      ogTitle: "SensePower Digital - We Code. We Test. We Make Sense.",
      ogDescription: "Sydney digital studio creating and testing digital products. Fullstack development, QA automation, MVP solutions.",
      ogImage: "https://sensepowerdigital.com/og-image.png",
      ogUrl: "https://sensepowerdigital.com/",
      twitterTitle: "SensePower Digital - Sydney Tech Studio",
      twitterDescription: "We code. We test. We make sense. Fullstack development & QA automation from Sydney, Australia.",
      twitterImage: "https://sensepowerdigital.com/og-image.png",
      canonicalUrl: "https://sensepowerdigital.com/"
    });

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SensePower Digital",
      "description": "Sydney-based digital studio specializing in fullstack development and QA automation testing.",
      "url": "https://sensepowerdigital.com",
      "logo": "https://sensepowerdigital.com/og-image.png",
      "address": { "@type": "PostalAddress", "addressLocality": "Sydney", "addressCountry": "Australia" },
      "sameAs": [],
      "foundingDate": "2023",
      "knowsAbout": ["Fullstack Development", "QA Testing", "MVP Development", "React", "Next.js", "Python", "Playwright"]
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground src={heroBg} position="center" />
        <div className="absolute inset-0 z-10 bg-linear-to-b from-background/0 via-background/30 to-background" />
        
        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs md:text-sm font-mono font-medium">
              AVAILABLE FOR NEW PROJECTS
            </motion.div>
            
            <div className="text-4xl md:text-5xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.8] mb-6 md:mb-8 text-glow">
              <AnimatedText text="Designing the" staggerDelay={0.06} duration={0.6} initialDelay={0.3} />
              <br />
              <AnimatedText 
                text="Future of Digital." 
                staggerDelay={0.06} 
                duration={0.6}
                initialDelay={1.8}
                className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary"
              />
            </div>
            
            <motion.p 
              variants={fadeIn} 
              className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-4 md:mb-6 leading-relaxed"
            >
              We create and test digital products at every stage — from concept to full implementation.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="mb-8 md:mb-12 p-4 md:p-6 rounded-2xl border border-[#d2f7be]/20 bg-[#d2f7be]/5 backdrop-blur-sm"
            >
              <p className="text-lg md:text-2xl lg:text-3xl font-display font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-accent to-primary">We code. We test. We make sense.</span>
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                Technology should work. We make it meaningful.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4">
              <Link href="/portfolio">
                <Button size="lg" className="h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg text-primary-foreground shadow-lg shadow-purple-500/40 cursor-pointer w-full md:w-auto" style={{ backgroundColor: '#d2f7be' }}>
                  View Case Studies
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg border-[#d2f7be]/10 bg-[#d2f7be]/5 text-foreground hover:bg-[#d2f7be]/25 hover:text-primary hover:border-[#d2f7be]/40 backdrop-blur-sm shadow-lg shadow-purple-500/40 cursor-pointer transition-colors w-full md:w-auto">
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="container mx-auto px-6 mb-5 lg:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-primary/20 via-accent/10 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
            <img
              src={aboutNataliia} // замени на свою фотографию
              alt="Founder portrait"
              className="relative z-10 w-full h-[420px] md:h-[520px] object-cover rounded-3xl border border-[#d2f7be]/10"
            />
          </div>

          {/* Text */}
          <div className="max-w-xl">
            <div className="mb-4 inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs md:text-sm font-mono">
              ABOUT US
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 leading-tight">
              <AnimatedText
                text={`Human-centered digital \n products, built with \n         purpose.`}
                staggerDelay={0.04}
                duration={0.5}
                initialDelay={0.2}
                className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary whitespace-normal break-normal"
              />
            </h2>


            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              We are a product-focused digital studio dedicated to building meaningful, human-centered experiences. We believe technology should be clear, reliable, and genuinely helpful — not complex for the sake of complexity.
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Our mission is to design, test, and ship digital products that solve real
              problems, scale confidently, and feel effortless for users.
            </p>

      {/* Mission bullets */}
      <ul className="space-y-4">
        {[
          "Build practical, production-ready solutions",
          "Combine clean code with thoughtful UX",
          "Test thoroughly — quality is never optional",
          "Create technology that actually makes sense"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-base md:text-lg">
            <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
</section>


      {/* Selected Works - Bento Grid */}
      <section className="container mx-auto px-6">
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
          <a href="/portfolio" className="hidden md:flex items-center gap-2 hover:text-primary transition-colors font-medium group cursor-pointer">
            View all projects <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </motion.div>

        <div className=" grid md:grid-cols-3 gap-4 md:gap-6">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group bg-muted/30 border border-[#d2f7be]/5 p-6 h-64 md:h-auto"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src={aussiewayImg} alt="Aussie Way Visa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full">
              <div className="mb-3 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono inline-block backdrop-blur-md">LEGAL TECH</div>
              <h3 className="text-2xl md:text-4xl font-display font-bold mb-2">Aussie Way Visa</h3>
              <p className="text-gray-300 text-sm md:text-base max-w-md line-clamp-2 md:line-clamp-none">A modern platform for Australian visa applications and migration services. Study, work, and live in Australia with expert legal guidance.</p>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="rounded-3xl overflow-hidden relative group bg-muted/30 border border-[#d2f7be]/5 p-4 h-64 md:h-auto"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src={sensestudyhubImg} alt="Sense StudyHub" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
            <div className="absolute bottom-[30px] left-0 p-4 md:p-6 z-20 w-full">
              <div className="mb-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-mono inline-block backdrop-blur-md">EDTECH</div>
              <h3 className="text-lg md:text-xl font-display font-bold">Sense StudyHub</h3>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="rounded-3xl overflow-hidden relative group bg-muted/30 border border-[#d2f7be]/5 p-4 md:row-span-2 h-64 md:h-auto"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src={oraidImg} alt="Ora-Aid" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
            <div className="absolute bottom-[30px] left-0 p-4 md:p-6 z-20 w-full">
              <div className="mb-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-mono inline-block backdrop-blur-md">HEALTHTECH</div>
              <h3 className="text-lg md:text-xl font-display font-bold mb-2">Ora-Aid</h3>
              <p className="text-gray-300 text-xs line-clamp-1 md:line-clamp-none">Self-adhesive intraoral patch for safe, effective oral wound care.</p>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="rounded-3xl overflow-hidden relative group bg-muted/30 border border-[#d2f7be]/5 p-4 h-64 md:h-auto"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80" alt="Dev Tool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
            <div className="absolute bottom-[30px] left-0 p-4 md:p-6 z-20 w-full">
              <div className="mb-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono inline-block backdrop-blur-md">DEVELOPMENT</div>
              <h3 className="text-lg md:text-xl font-display font-bold">MVP Platform</h3>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="rounded-3xl overflow-hidden relative group bg-muted/30 border border-[#d2f7be]/5 p-4 h-64 md:h-auto"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src={expertlashImg} alt="ExpertLash" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
            <div className="absolute bottom-[30px] left-0 p-4 md:p-6 z-20 w-full">
              <div className="mb-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-mono inline-block backdrop-blur-md">BEAUTY TECH</div>
              <h3 className="text-lg md:text-xl font-display font-bold">ExpertLash</h3>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="md:row-span-2 rounded-3xl overflow-hidden relative group bg-purple-500/10 border border-purple-500/20 p-6 h-64 md:h-auto"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src={vibesImg} alt="VibeCoding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full">
              <div className="mb-3 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono inline-block backdrop-blur-md">DEVELOPMENT</div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-2">VibeCoding</h3>
              <p className="text-gray-300 text-xs line-clamp-2">High-converting presentation page.</p>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group bg-muted/30 border border-[#d2f7be]/5 p-6 h-64 md:h-auto"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img src={tennisImg} alt="Tennis Connect" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full">
              <div className="mb-3 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-mono inline-block backdrop-blur-md">SPORT TECH</div>
              <h3 className="text-2xl md:text-4xl font-display font-bold mb-2">Tennis Connect</h3>
              <p className="text-gray-300 text-sm md:text-base max-w-md">Professional tennis court booking and community platform.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 bg-muted/20 border-y border-[#d2f7be]/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">We Build, Test & Craft.</h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
                From fullstack development to rigorous QA testing and creative vibe coding. We deliver products that look stunning, work flawlessly, and delight users at every interaction.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-8">
                {[
                  "Fullstack Development – Next.js, React, Backend APIs",
                  "Comprehensive QA Testing – Manual, Automated & Performance",
                  "Vibe Coding – Modern animations, polished UX, creative interactions",
                  "Production-Ready Solutions – From MVP to Scale"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base md:text-lg">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services">
                <Button size="lg" className="h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg border-[#d2f7be]/10 bg-[#d2f7be]/5 text-foreground hover:bg-[#d2f7be]/25 hover:text-primary hover:border-[#d2f7be]/40 shadow-lg shadow-purple-500/40 cursor-pointer transition-colors w-full md:w-auto">
                  Explore Our Services
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-4 mt-8 md:mt-0">
              <div className="space-y-2 md:space-y-4 md:mt-12">
                <div className="p-4 md:p-8 rounded-3xl bg-background border border-[#d2f7be]/5">
                  <Code className="mb-3 md:mb-4 text-primary md:w-7 md:h-7" size={20} />
                  <h3 className="font-bold mb-2 text-xs md:text-base">Fullstack</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">End-to-end solutions with modern tech stacks.</p>
                </div>
                <div className="p-4 md:p-8 rounded-3xl bg-background border border-[#d2f7be]/5">
                  <Smartphone className="mb-3 md:mb-4 text-primary md:w-7 md:h-7" size={20} />
                  <h3 className="font-bold mb-2 text-xs md:text-base">Responsive</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Perfect on every screen size.</p>
                </div>
              </div>
              <div className="space-y-2 md:space-y-4">
                <div className="p-4 md:p-8 rounded-3xl bg-background border border-[#d2f7be]/5">
                  <CheckCircle className="mb-3 md:mb-4 text-primary md:w-7 md:h-7" size={20} />
                  <h3 className="font-bold mb-2 text-xs md:text-base">QA Testing</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Automated & manual verification.</p>
                </div>
                <div className="p-4 md:p-8 rounded-3xl bg-background border border-[#d2f7be]/5">
                  <Cpu className="mb-3 md:mb-4 text-primary md:w-7 md:h-7" size={20} />
                  <h3 className="font-bold mb-2 text-xs md:text-base">Vibe Coding</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Animations & creative polish.</p>
                </div>
                <div className="p-4 md:p-8 rounded-3xl bg-background border border-[#d2f7be]/5">
                  <Search className="mb-3 md:mb-4 text-primary md:w-7 md:h-7" size={20} />
                  <h3 className="font-bold mb-2 text-xs md:text-base">SEO</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Optimized for search & discovery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-0 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-6 md:p-16 text-center border border-[#d2f7be]/5 m-4 md:m-[15px]"
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
              <Link href="/contact">
                <Button size="lg" className="rounded-full text-base md:text-lg px-6 md:px-8 shadow-lg shadow-purple-500/40 cursor-pointer w-full md:w-auto" style={{ backgroundColor: '#d2f7be' }}>Get in Touch</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full text-base md:text-lg px-6 md:px-8 border-[#d2f7be]/10 hover:bg-[#d2f7be]/5 shadow-lg shadow-purple-500/40 cursor-pointer w-full md:w-auto">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}