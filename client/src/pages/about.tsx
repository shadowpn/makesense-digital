import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Users, Target, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedText } from "@/components/animated-text";
import { useState, useEffect } from "react";
import introduceBg from "@assets/Introduce_1764120672692.jpg";
import nataliiaPhoto from "@assets/Nataliia_about_1764120672692.jpg";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 8);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const timeline = [
    {
      type: "work",
      title: "Full-Stack Developer",
      company: "Sense Power Digital",
      location: "Sydney, Australia",
      period: "2023 - Present",
      description: "Full-Stack Development, APIs, SEO & UI/UX"
    },
    {
      type: "work",
      title: "Middle QA Engineer",
      company: "Foxteam Digital",
      location: "Ukraine, Remote",
      period: "2021 - Present",
      description: "Enterprise-scale CRM/E-commerce Testing, Automation"
    },
    {
      type: "work",
      title: "QA Engineer",
      company: "Miber AB",
      location: "Sweden, Remote",
      period: "2020 - 2021",
      description: "End-to-end Testing, Defect Reporting, QA"
    },
    {
      type: "work",
      title: "Junior QA Engineer",
      company: "UVOTEAM",
      location: "Kyiv, Ukraine",
      period: "2018 - 2020",
      description: "Test Suite Development, UI Testing, QA"
    },
    {
      type: "education",
      title: "Diploma of Information Technology",
      company: "TAFE ULTIMO",
      location: "NSW, Australia",
      period: "2023",
      description: "Full-Stack Development, HTML, CSS, JavaScript, React, Node.js"
    },
    {
      type: "education",
      title: "Certificate in QA Engineering",
      company: "QA Engineering Course",
      location: "Kyiv, Ukraine",
      period: "2017",
      description: "Manual Testing, Test Management, SDLC"
    },
    {
      type: "education",
      title: "Master of Manager Organisations",
      company: "Kyiv University of Tourism",
      location: "Ukraine",
      period: "1999 - 2005",
      description: "Hospitality Management, Tourism, Business Operations"
    },
    {
      type: "education",
      title: "Online Courses & Bootcamps",
      company: "Udemy, SheCodes, Harvard",
      location: "Online",
      period: "2022 - Present",
      description: "Full-Stack, JavaScript, React, Node.js, MongoDB, Playwright, CS50"
    }
  ];

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

            </div>
          </motion.div>
        </section>

        {/* Core Skills Section - Full Width Below */}
        <section className="py-24 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Core Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">Deep technical proficiency across QA, automation, and full-stack development</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "QA & Testing",
                description: "Manual Testing • Functional & Regression • UI Testing • API Testing (Postman, Swagger) • Integration Testing • Test Data Creation • AIO Testing (Jira)"
              },
              {
                title: "Automation (Foundational + Growing)",
                description: "Playwright (JavaScript) • Postman Automation • Knowledge of Git, CI/CD workflows • Strong coding skills (JS/Python) enabling fast ramp-up for test automation"
              },
              {
                title: "Agile & SDLC",
                description: "Scrum • Kanban • Jira • TestRail • Confluence • GitLab/GitHub • CI/CD (GitHub Actions, Jenkins)"
              },
              {
                title: "Databases & Data Validation",
                description: "SQL (MySQL, PostgreSQL) • Data accuracy checks • Database-level testing • JSON & CSV data structures"
              },
              {
                title: "Technical Stack",
                description: "JavaScript • Python • CMS • Custom eCommerce • CRM • API integrations • Responsive Web Apps"
              },
              {
                title: "Soft Skills",
                description: "Clear communicator • Detail-oriented • Strong analytical skills • Team player • Growth mindset"
              }
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <h3 className="text-xl font-display font-bold mb-4 text-primary group-hover:text-accent transition-colors">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Professional Journey Section - 2 Column Timeline */}
        <section className="py-24 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Professional Journey</h2>
            <p className="text-lg text-muted-foreground">A decade of growth across QA, development, and continuous learning</p>
          </motion.div>

          <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 transform -translate-x-1/2" />
            
            {/* Timeline Grid - 2 Columns */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Education Label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mt-12 pt-8 pr-12 mb-6"
              >
                <h3 className="text-2xl font-display font-bold text-primary">Education</h3>
              </motion.div>
              <div />
              
              {timeline.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                const isEducation = idx >= 4;
                const isFirstEducation = idx === 4;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative pt-8 pb-8 ${isLeft ? 'pr-12' : 'pl-12'} ${!isLeft ? 'mt-24' : ''} ${isFirstEducation ? 'pt-8' : ''}`}
                  >
                    {/* Icon on center line */}
                    <div className={`absolute top-8 transform z-10 ${isLeft ? 'right-[-24px]' : 'left-[-24px]'}`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeIndex === idx
                          ? "bg-primary shadow-lg shadow-primary/50 scale-110"
                          : "bg-white/10 border border-white/20"
                      }`}>
                        {item.type === "work" ? (
                          <Briefcase size={20} className="text-primary" />
                        ) : (
                          <GraduationCap size={20} className="text-primary" />
                        )}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`p-6 rounded-xl transition-all duration-300 ${
                      activeIndex === idx
                        ? "bg-primary/30 border border-primary/50 shadow-lg shadow-purple-500/20"
                        : "bg-background border border-white/10 hover:border-primary/30"
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold pr-4">{item.title}</h4>
                        <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{item.period}</span>
                      </div>
                      <p className="text-sm text-primary font-semibold mb-1">{item.company}</p>
                      <p className="text-xs text-muted-foreground mb-3">{item.location}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
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