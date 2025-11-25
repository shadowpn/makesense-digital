import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import avatarImg from "@assets/generated_images/abstract_qa_testing_concept_icon.png";

const navItems = [
  { name: "Home", path: "/", icon: "🏠" },
  { name: "Work", path: "/portfolio", icon: "🎨" },
  { name: "Services", path: "/services", icon: "⚙️" },
  { name: "About", path: "/about", icon: "👤" },
  { name: "Research", path: "/research", icon: "📚" },
  { name: "Contact", path: "/contact", icon: "✉️" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Sidebar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          className="fixed top-6 left-6 z-50 p-2 text-muted-foreground hover:text-primary transition-colors md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        initial={isMobile ? "closed" : "open"}
        animate={isMobile ? (isOpen ? "open" : "closed") : "open"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-background via-background to-background/95 border-r border-white/10 backdrop-blur-xl z-40 md:relative md:z-30 overflow-y-auto"
      >
        <div className="p-8 space-y-8 h-full flex flex-col">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-4 flex justify-center"
            >
              <div className="w-20 h-20 rounded-full border-2 border-primary/30 overflow-hidden bg-black/30 shadow-lg hover:border-primary/60 transition-colors">
                <img src={avatarImg} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <h1 className="text-xl font-display font-bold tracking-tight mb-1">
              NEXUS<span className="text-primary">.</span>
            </h1>
            <p className="text-xs text-muted-foreground font-mono">digital studio</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-3"
          >
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 border border-white/5 hover:border-primary/30"
                  title={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Navigation */}
          <nav className="space-y-2 flex-1">
            {navItems.map((item, i) => {
              const isActive = location === item.path;
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link href={item.path}>
                    <a
                      onClick={() => isMobile && setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                        isActive
                          ? "bg-primary/20 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      {/* Background animation for active state */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                          transition={{ type: "spring", stiffness: 380, damping: 40 }}
                        />
                      )}

                      {/* Hover effect border */}
                      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/30 transition-colors duration-300" />

                      {/* Content */}
                      <span className="relative z-10 text-lg">{item.icon}</span>
                      <span className="relative z-10 text-sm font-medium">{item.name}</span>

                      {/* Active indicator dot */}
                      {isActive && (
                        <motion.div
                          layoutId="activeDot"
                          className="absolute right-3 w-2 h-2 rounded-full bg-primary"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </a>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center space-y-3 pt-6 border-t border-white/5"
          >
            <p className="text-xs text-muted-foreground">
              © 2025 Nexus Studio
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors border border-primary/20 hover:border-primary/40"
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
        />
      )}
    </>
  );
}