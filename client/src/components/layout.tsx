import { Sidebar } from "@/components/sidebar";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/20 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold tracking-tighter">
              NEXUS<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Crafting digital experiences that blend aesthetic excellence with functional precision.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Sitemap</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/portfolio"><a className="hover:text-primary transition-colors">Work</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Services</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About</a></Link></li>
              <li><Link href="/research"><a className="hover:text-primary transition-colors">Research</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>MVP Development</li>
              <li>UI/UX Design</li>
              <li>Manual Testing</li>
              <li>Test Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          © 2025 Nexus Digital Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}