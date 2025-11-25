import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Work", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "Research", path: "/research" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-display font-bold tracking-tighter hover:opacity-80 transition-opacity">
            NEXUS<span className="text-primary">.</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
          <Button variant="outline" className="ml-4 rounded-full border-white/10 hover:bg-white/5 hover:text-primary">
            Book a Call
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 right-0 bg-background border-b border-white/5 p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <Button className="w-full mt-4">Book a Call</Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

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
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}