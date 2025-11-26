import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedText } from "@/components/animated-text";
import introduceBg from "@assets/Introduce_1764120672692.jpg";
import nataliiaPhoto from "@assets/Nataliia_about_1764120672692.jpg";
import coreSkillsImg from "@assets/изображение_1764120932523.png";
import resumeImg from "@assets/изображение_1764121001448.png";

export default function About() {
  return (
    <Layout>
      {/* Hero Section with Background */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `url(${introduceBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/60 via-background/50 to-background/60" />
        
        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-24 text-center"
          >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            About <AnimatedText 
              text="SensePower Digital." 
              staggerDelay={0.06} 
              duration={0.6}
              initialDelay={0.3}
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary"
            />
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're a digital studio obsessed with the intersection of design excellence and engineering precision. 
            Since 2022, we've helped forward-thinking companies launch, scale, and perfect their digital products.
          </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Cofounder Section */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12 items-start"
          >
            {/* Photo */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
              >
                <img src={nataliiaPhoto} alt="Nataliia Petrychuk" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Info */}
            <div className="md:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Nataliia Petrychuk</h2>
                <p className="text-xl text-primary font-semibold mb-4">Full-Stack Developer & QA Engineer</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results-oriented Full Stack Developer with extensive experience in building responsive, user-friendly web applications and implementing scalable back-end solutions. Proficient in HTML, CSS, JavaScript, React js, and Node js. Strong expertise in API development, SDLC, REST API design, and UI/UX principles.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Extensive experience as a Quality Assurance Engineer, skilled in manual testing, automation frameworks, test case creation, and API testing. Adept at problem solving, collaborative teamwork, and quickly adapting to new technologies.
                </p>
              </div>

              {/* Core Skills */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6">Core Skills</h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden"
                >
                  <img src={coreSkillsImg} alt="Core Skills" className="w-full h-auto" />
                </motion.div>
              </div>

              {/* Resume */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6">Professional Experience & Education</h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden border border-white/10"
                >
                  <img src={resumeImg} alt="Resume" className="w-full h-auto" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold">Velocity + Quality</h3>
              </div>
              <p className="text-muted-foreground">
                We prove that speed and rigor aren't mutually exclusive. Our process delivers production-ready code in weeks, not months.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold">User-Centric</h3>
              </div>
              <p className="text-muted-foreground">
                Every design decision and line of code serves a purpose. We obsess over user feedback and iterate relentlessly.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold">Partnership</h3>
              </div>
              <p className="text-muted-foreground">
                We're not vendors—we're extensions of your team. We invest in your success and celebrate your wins as our own.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-full rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl" />
            <div className="relative p-12 h-full flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Building great digital products is equal parts craft and science. It requires discipline, creativity, and an obsessive attention to detail."
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-display font-bold text-lg">Our Founder</p>
                  <p className="text-sm text-muted-foreground">Designer, Engineer, Entrepreneur</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <div className="border-t border-b border-white/10 py-20 mb-24">
          <h2 className="text-4xl font-display font-bold mb-16 text-center"><AnimatedText text="Our Expertise." staggerDelay={0.06} duration={0.6} initialDelay={0.3} className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary" /></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Projects", value: "50+" },
              { label: "Team Members", value: "12" },
              { label: "Industries Served", value: "8+" },
              { label: "Countries", value: "6" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-muted/10 border border-white/5 hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-32">
          <h2 className="text-3xl font-display font-bold mb-12">Our Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
              { name: "Backend", techs: ["Node.js", "Express", "PostgreSQL", "Drizzle ORM", "WebSockets"] },
              { name: "Testing", techs: ["Playwright", "Jest", "Cypress", "Load Testing", "CI/CD Pipelines"] }
            ].map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-muted/10 border border-white/5"
              >
                <h3 className="text-xl font-bold mb-6">{stack.name}</h3>
                <ul className="space-y-3">
                  {stack.techs.map((tech, j) => (
                    <li key={j} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle size={16} className="text-primary" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-16 md:p-20 text-center bg-gradient-to-br from-primary/10 via-transparent to-primary/5 border border-primary/20"
        >
          <h2 className="text-4xl font-display font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's build something exceptional. Whether you need an MVP, testing strategy, or design system—we're ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full text-lg px-8">Get in Touch</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-full text-lg px-8 border-white/10 hover:bg-white/5">
                View Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}