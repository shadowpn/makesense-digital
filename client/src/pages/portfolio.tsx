import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";
import workHeroBg from "@assets/1709706757448_1764139146885.jpg";

const projects = [
  {
    id: 1,
    title: "Nebula Finance",
    category: "Fintech",
    description: "A next-generation trading platform with real-time analytics.",
    tags: ["React", "Node.js", "WebSockets"],
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Aero Systems",
    category: "Enterprise",
    description: "Internal resource management dashboard for aviation logistics.",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Zenith Health",
    category: "Healthcare",
    description: "Patient portal and appointment scheduling system.",
    tags: ["Mobile App", "React Native", "HIPAA"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Echo Stream",
    category: "Entertainment",
    description: "Audio streaming service with social features.",
    tags: ["Audio API", "Social Graph", "AWS"],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80"
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
                text="Our Work." 
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