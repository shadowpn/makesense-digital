import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Home, Briefcase, Zap, User, BookOpen, Mail, Menu, X, MessageCircle, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from "@assets/изображение_1764049161428.png";
import nataliiaPhoto from "@assets/Main_desk_1764233126320.jpg";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Portfolio", path: "/portfolio", icon: Briefcase },
  { name: "Services", path: "/services", icon: Zap },
  { name: "Research", path: "/research", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Mail },
];

const socialLinks = [
  { icon: MessageCircle, href: "https://wa.me/61414599822", label: "WhatsApp" },
  { icon: Github, href: "https://github.com/Petrychuk", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nataliia-petrychuk-4068bb56/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nataliia.petrychuk@gmail.com", label: "Email" },
];

export function Sidebar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = nataliiaPhoto;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPhoto((prev) => !prev);
    }, 30000);
    return () => clearInterval(interval);
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
        className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-background via-background to-background/95 border-r border-[#d2f7be]/10 backdrop-blur-xl z-40 md:sticky md:top-0 md:z-30 overflow-y-auto hide-scrollbar"
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
              className="mb-4 flex justify-center perspective"
            >
              <motion.div
                key={showPhoto ? "photo" : "logo"}
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 rounded-full border-2 border-primary/30 overflow-hidden bg-[#d2f7be]/5 shadow-lg hover:border-primary/60 transition-colors"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img 
                  src={showPhoto ? nataliiaPhoto : logoImg} 
                  alt="" 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            </motion.div>
            <h1 className="text-2xl font-display font-black tracking-tight mb-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              SensePower
              <br/>Digital
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
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 text-muted-foreground hover:text-primary transition-all duration-300 border border-[#d2f7be]/5 hover:border-primary/50 font-bold text-sm"
                  title={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Navigation */}
          <nav className="space-y-2 flex-1">
            {navItems.map((item, i) => {
              const Icon = item.icon;
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
                          ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/50"
                          : "text-foreground/70 hover:text-foreground hover:bg-[#d2f7be]/5 border border-transparent hover:border-primary/30"
                      }`}
                    >
                      {/* Hover effect border */}
                      <div className="absolute inset-0 rounded-xl" />

                      {/* Content */}
                      <span className="relative z-10">
                        <Icon size={20} className={isActive ? "text-primary" : "group-hover:text-primary transition-colors"} />
                      </span>
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
            className="text-center space-y-3 pt-6 border-t border-[#d2f7be]/5"
          >
            <p className="text-xs text-muted-foreground">
              © 2025 SensePower Digital
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-[#d2f7be] text-xs font-medium hover:shadow-lg hover:shadow-primary/50 transition-all border border-primary/50 hover:border-primary"
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