import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedText } from "@/components/animated-text";
import { useEffect } from "react";
import { updateSEO, addStructuredData } from "@/utils/seo";
import researchHeroBg from "@assets/generated_images/research_knowledge_hub_design.png";
import workHeroBg from "@assets/1709706757448_1764139146885.jpg";

const articles = [
  {
    title: "The State of Automated Testing in 2025",
    excerpt: "Why Playwright is overtaking Cypress and what it means for your CI/CD pipeline. We explore performance metrics, ease of use, and integration capabilities. This deep dive covers real-world scenarios from our latest projects.",
    date: "Nov 12, 2025",
    readTime: "8 min read",
    category: "Engineering",
    rating: 5,
    reviewCount: 24
  },
  {
    title: "Designing for Dark Mode First",
    excerpt: "A comprehensive guide to color theory in low-light interfaces and accessibility best practices. Learn how to maintain contrast ratios while creating visually stunning experiences. Includes practical techniques and tools we use daily.",
    date: "Oct 24, 2025",
    readTime: "6 min read",
    category: "Design",
    rating: 5,
    reviewCount: 18
  },
  {
    title: "MVP Architecture Patterns",
    excerpt: "How to structure your Next.js app for scalability without over-engineering. We break down monolithic vs. modular approaches and share real examples from successful startups. Perfect for teams balancing speed and maintainability.",
    date: "Oct 10, 2025",
    readTime: "12 min read",
    category: "Architecture",
    rating: 4.5,
    reviewCount: 31
  }
];

const StarRating = ({ rating, reviewCount }: { rating: number; reviewCount: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center gap-2 md:gap-3 mt-3 md:mt-4">
      <div className="flex items-center gap-0.5 md:gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i}>
            {i < fullStars ? (
              <Star size={14} className="md:w-4 md:h-4 fill-[#d2f7be] text-[#d2f7be]" />
            ) : i === fullStars && hasHalfStar ? (
              <div className="relative">
                <Star size={14} className="md:w-4 md:h-4 text-[#d2f7be]/30" />
                <div className="absolute inset-0 overflow-hidden w-1/2">
                  <Star size={14} className="md:w-4 md:h-4 fill-[#d2f7be] text-[#d2f7be]" />
                </div>
              </div>
            ) : (
              <Star size={14} className="md:w-4 md:h-4 text-[#d2f7be]/30" />
            )}
          </div>
        ))}
      </div>
      <span className="text-xs md:text-sm text-muted-foreground font-mono">
        {rating} • {reviewCount} reviews
      </span>
    </div>
  );
};

const artifacts = [
  {
    title: "E2E Testing Framework Template",
    type: "GitHub Repo",
    desc: "A boilerplate for Playwright + TypeScript setup."
  },
  {
    title: "Figma Design System UI Kit",
    type: "Figma File",
    desc: "Our internal component library available for community use."
  },
  {
    title: "React Performance Checklist",
    type: "PDF Guide",
    desc: "20-point checklist for optimizing React applications."
  }
];

export default function Research() {
  useEffect(() => {
    updateSEO({
      title: "Research Hub - SensePower Digital | Testing Insights & Design Resources",
      description: "Explore our research articles, testing frameworks, and design resources. Expert insights on Playwright vs Cypress, dark mode design patterns, MVP architecture, and React performance optimization.",
      keywords: "research articles, testing frameworks, Playwright tutorial, Cypress guide, dark mode design, MVP architecture patterns, React performance, design systems, E2E testing, automation testing guides, knowledge hub",
      ogTitle: "Research Hub - Testing & Design Insights | SensePower Digital",
      ogDescription: "Expert articles on automated testing, design systems, and MVP architecture. Free resources and frameworks.",
      ogImage: "https://sensepowerdigital.com/og-image.png",
      ogUrl: "https://sensepowerdigital.com/research",
      twitterTitle: "Research Hub | SensePower Digital",
      twitterDescription: "Free resources: Testing frameworks, design systems, performance guides. Expert insights from Sydney tech studio.",
      twitterImage: "https://sensepowerdigital.com/og-image.png",
      canonicalUrl: "https://sensepowerdigital.com/research"
    });

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "SensePower Digital Research Hub",
      "description": "Research articles, testing frameworks, and design resources.",
      "publisher": { "@type": "Organization", "name": "SensePower Digital", "url": "https://sensepowerdigital.com" },
      "blogPost": [
        { "@type": "BlogPosting", "headline": "The State of Automated Testing in 2025", "datePublished": "2025-11-12" },
        { "@type": "BlogPosting", "headline": "Designing for Dark Mode First", "datePublished": "2025-10-24" },
        { "@type": "BlogPosting", "headline": "MVP Architecture Patterns", "datePublished": "2025-10-10" }
      ]
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${researchHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 z-10 bg-linear-to-b from-background/0 via-background/30 to-background" />
        
        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="text-3xl md:text-5xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.8] mb-6 md:mb-8 text-glow">
              <AnimatedText text="Research" staggerDelay={0.06} duration={0.6} initialDelay={0.3} />
              <br />
              <AnimatedText 
                text="Hub." 
                staggerDelay={0.06} 
                duration={0.6}
                initialDelay={1.8}
                className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-4 md:mb-6 leading-relaxed"
            >
              Artifacts, whitepapers, and thoughts on the future of software development.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 md:mb-12 p-4 md:p-6 rounded-2xl border border-[#d2f7be]/20 bg-[#d2f7be]/5 backdrop-blur-sm max-w-2xl"
            >
              <p className="text-lg md:text-2xl lg:text-3xl font-display font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-accent to-primary">Making knowledge accessible.</span>
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                Practical insights that help you build better products.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 mb-8 md:mb-16">
          <div className="lg:col-span-2 space-y-4 md:space-y-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 border-b border-[#d2f7be]/10 pb-3 md:pb-4">Latest Articles</h2>
            {articles.map((article, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer p-4 md:p-6 -mx-4 md:-mx-6 rounded-2xl hover:bg-muted/20 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 font-mono">
                  <span>{article.date}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{article.readTime}</span>
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary">{article.category}</span>
                </div>
                <h3 className="text-lg md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-xs md:text-base text-muted-foreground mb-3 md:mb-4">{article.excerpt}</p>
                <StarRating rating={article.rating} reviewCount={article.reviewCount} />
              </motion.article>
            ))}
          </div>

          <div className="space-y-4 md:space-y-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 border-b border-[#d2f7be]/10 pb-3 md:pb-4">Artifacts</h2>
            {artifacts.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 md:p-6 rounded-2xl bg-muted/10 border border-[#d2f7be]/5 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="p-2 rounded-lg bg-background text-primary border border-[#d2f7be]/10">
                    <FileText size={18} className="md:w-5 md:h-5" />
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-base md:text-lg font-bold mb-1">{item.title}</h4>
                <div className="text-xs font-mono text-primary mb-2">{item.type}</div>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{item.desc}</p>
                <Button variant="outline" size="sm" className="w-full text-xs md:text-sm border-[#d2f7be]/10 hover:bg-[#d2f7be]/5">
                  <Download size={14} className="mr-2" /> Access
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-0 container mx-auto px-6 mt-8 md:mt-16">
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
                <Button size="lg" className="h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg shadow-purple-500/40 cursor-pointer w-full md:w-auto" style={{ backgroundColor: '#d2f7be' }}>Get in Touch</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg border-[#d2f7be]/10 hover:bg-[#d2f7be]/5 shadow-lg shadow-purple-500/40 cursor-pointer w-full md:w-auto">
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