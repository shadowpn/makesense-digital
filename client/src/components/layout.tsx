import { Sidebar } from "@/components/sidebar";
import { ScrollToTop } from "@/components/scroll-to-top";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import logoImg from "@assets/изображение_1764049161428.png";
import ctaBg from "@assets/generated_images/bright_light_tech_professional_background.png";

function MobileHeader() {
  return (
    <div className="md:hidden sticky top-0 z-30 bg-linear-to-r from-background via-background to-background/95 border-b border-[#d2f7be]/10 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full border-2 border-primary/30 overflow-hidden bg-[#d2f7be]/5 shadow-lg shrink-0">
              <img src={logoImg} alt="SensePower Digital" className="w-full h-full object-cover" />
            </div>
            <div className="text-base font-display font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">
              SensePower Digital
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-[#d2f7be]/5 py-8 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-background/40 via-background/60 to-background/80" />
      
      <div className="container mx-auto px-6 relative z-20">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4 flex items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full border-2 border-primary/30 overflow-hidden bg-[#d2f7be]/5 shadow-lg hover:border-primary/60 transition-colors shrink-0">
                <img src={logoImg} alt="SensePower Digital Logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-display font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">
                SensePower<br/>Digital
              </h3>
            </motion.div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Crafting digital experiences that blend aesthetic excellence with functional precision.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4">Pages</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/"><span className="hover:text-primary transition-colors cursor-pointer">Home</span></Link></li>
                <li><Link href="/about"><span className="hover:text-primary transition-colors cursor-pointer">About</span></Link></li>
                <li><Link href="/portfolio"><span className="hover:text-primary transition-colors cursor-pointer">Portfolio</span></Link></li>
                <li><Link href="/services"><span className="hover:text-primary transition-colors cursor-pointer">Services</span></Link></li>
                <li><Link href="/research"><span className="hover:text-primary transition-colors cursor-pointer">Research</span></Link></li>
                <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Contact</span></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>QA & Automation</li>
                <li>MVP Development</li>
                <li>Fullstack Development</li>
                <li>Telegram Bot Development</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 text-muted-foreground justify-center">
              <a href="mailto:makeinfosense@gmail.com" className="hover:text-primary transition-colors" title="Email"><Mail size={20} /></a>
              <a href="https://wa.me/61414599822" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="WhatsApp"><MessageCircle size={20} /></a>
              <a href="https://github.com/Petrychuk" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="GitHub"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/nataliia-petrychuk-4068bb56/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4 flex items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full border-2 border-primary/30 overflow-hidden bg-[#d2f7be]/5 shadow-lg hover:border-primary/60 transition-colors shrink-0">
                <img src={logoImg} alt="SensePower Digital Logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-display font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">
                SensePower<br/>Digital
              </h3>
            </motion.div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Crafting digital experiences that blend aesthetic excellence with functional precision.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/"><span className="hover:text-primary transition-colors cursor-pointer">Home</span></Link></li>
              <li><Link href="/about"><span className="hover:text-primary transition-colors cursor-pointer">About</span></Link></li>
              <li><Link href="/portfolio"><span className="hover:text-primary transition-colors cursor-pointer">Portfolio</span></Link></li>
              <li><Link href="/services"><span className="hover:text-primary transition-colors cursor-pointer">Services</span></Link></li>
              <li><Link href="/research"><span className="hover:text-primary transition-colors cursor-pointer">Research</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>QA & Automation</li>
              <li>MVP Development</li>
              <li>Fullstack Development</li>
              <li>Telegram Bot Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 text-muted-foreground">
              <a href="mailto:makeinfosense@gmail.com" className="hover:text-primary transition-colors" title="Email"><Mail size={20} /></a>
              <a href="https://wa.me/61414599822" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="WhatsApp"><MessageCircle size={20} /></a>
              <a href="https://github.com/Petrychuk" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="GitHub"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/nataliia-petrychuk-4068bb56/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#d2f7be]/5 space-y-4 px-0 md:px-[50px] pb-2">
          <div className="text-xs font-semibold space-y-2">
            <p><strong>Disclaimer:</strong> SensePower Digital provides general information only. This website does not constitute legal, financial, or professional advice.</p>
            <p><strong>Australian Consumer Law:</strong> Our services are subject to the ACL. Consumers have statutory guarantees that cannot be excluded. For disputes, contact the Australian Small Business Commissioner or ACCC.</p>
            <p><strong>Privacy:</strong> Your information is handled per the Privacy Act 1988 (Cth). See our Privacy Policy for full details.</p>
          </div>
          
          <div className="text-center text-xs font-semibold pt-4">
            © 2025 SensePower Digital. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      <Sidebar />
      <div className="grow flex flex-col w-full md:w-auto">
        <MobileHeader />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}