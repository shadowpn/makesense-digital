import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/animated-text";

const articles = [
  {
    title: "The State of Automated Testing in 2025",
    excerpt: "Why Playwright is overtaking Cypress and what it means for your CI/CD pipeline.",
    date: "Nov 12, 2025",
    readTime: "8 min read",
    category: "Engineering"
  },
  {
    title: "Designing for Dark Mode First",
    excerpt: "A comprehensive guide to color theory in low-light interfaces.",
    date: "Oct 24, 2025",
    readTime: "6 min read",
    category: "Design"
  },
  {
    title: "MVP Architecture Patterns",
    excerpt: "How to structure your Next.js app for scalability without over-engineering.",
    date: "Oct 10, 2025",
    readTime: "12 min read",
    category: "Architecture"
  }
];

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
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6"><AnimatedText text="Research Hub." staggerDelay={0.06} duration={0.6} initialDelay={0.3} /></h1>
          <p className="text-xl text-muted-foreground">
            Artifacts, whitepapers, and thoughts on the future of software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Latest Articles</h2>
            {articles.map((article, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer p-6 -mx-6 rounded-2xl hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3 font-mono">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary">{article.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-muted-foreground">{article.excerpt}</p>
              </motion.article>
            ))}
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Artifacts</h2>
            {artifacts.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-muted/10 border border-white/5 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-background text-primary border border-white/10">
                    <FileText size={20} />
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <div className="text-xs font-mono text-primary mb-2">{item.type}</div>
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                <Button variant="outline" size="sm" className="w-full border-white/10 hover:bg-white/5">
                  <Download size={14} className="mr-2" /> Access
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}