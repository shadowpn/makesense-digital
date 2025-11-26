import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";
import workHeroBg from "@assets/1709706757448_1764139146885.jpg";
import aussiewayImg from "@assets/изображение_1764055739030.png";
import sensestudyhubImg from "@assets/изображение_1764056223710.png";
import oraidImg from "@assets/изображение_1764057538171.png";
import beautybotImg from "@assets/stock_images/beauty_course_online_da449890.jpg";
import expertlashImg from "@assets/generated_images/expertlash_beauty_app_mobile_interface.png";

const projects = [
  {
    id: 1,
    title: "Aussie Way Visa",
    category: "Legal Tech",
    description: "A modern platform for Australian visa applications and migration services. Study, work, and live in Australia with expert legal guidance.",
    tags: ["React", "Full-Stack", "Visa Services"],
    image: aussiewayImg
  },
  {
    id: 2,
    title: "Sense StudyHub",
    category: "EdTech",
    description: "Comprehensive online learning platform with interactive courses and student engagement tools.",
    tags: ["Education", "React", "Node.js"],
    image: sensestudyhubImg
  },
  {
    id: 3,
    title: "Ora-Aid",
    category: "HealthTech",
    description: "Self-adhesive intraoral patch for safe, effective oral wound care. Innovative healthcare solution.",
    tags: ["HealthCare", "Product Design", "Innovation"],
    image: oraidImg
  },
  {
    id: 4,
    title: "Beauty Bot",
    category: "Telegram Bot",
    description: "Intelligent Telegram bot for beauty recommendations and virtual consultations.",
    tags: ["Bot", "AI", "Telegram"],
    image: beautybotImg
  },
  {
    id: 5,
    title: "ExpertLash",
    category: "Beauty Tech",
    description: "Professional lash extension booking and consultation platform. Connect with expert lash technicians and manage appointments seamlessly.",
    tags: ["Mobile App", "Booking System", "Beauty Services"],
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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] mb-6 rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                
                <div className="absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-white/10">
                  <ArrowUpRight className="text-white" />
                </div>
              </div>

              <div className="flex items-start justify-between mb-2">
                <h3 className="text-3xl font-display font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <span className="text-muted-foreground font-mono text-sm pt-2">{project.category}</span>
              </div>
              
              <p className="text-muted-foreground mb-4 max-w-md">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="rounded-md bg-muted/50 text-muted-foreground font-normal border-white/5">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}