import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Users, Target, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedText } from "@/components/animated-text";
import { useState, useEffect } from "react";
import introduceBg from "@assets/Introduce_1764120672692.jpg";
import nataliiaPhoto from "@assets/Nataliia_about_1764120672692.jpg";
import journeyBg from "@assets/generated_images/modern_vibrant_technology_gradient_background.png";
import ctaBg from "@assets/generated_images/bright_futuristic_tech_background.png";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 8);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const timeline = [
    {
      type: "work",
      title: "Full-Stack Developer",
      company: "Sense Power Digital",
      location: "Sydney, Australia",
      period: "2023 - Present",
      description: "Full-Stack Development, APIs, SEO & UI/UX",
      details: [
        "Full-Stack Development & Mobile Responsiveness: Designed and developed responsive websites using HTML, CSS, JavaScript, React.js, and Bootstrap 5",
        "API Development: Created and integrated APIs for seamless data exchange with external services like Calendly and MailChimp",
        "Implemented SEO best practices for improved search rankings and engagement",
        "Version Control & Collaboration: Managed repositories using GitHub for effective collaboration",
        "UI/UX Design Implementation: Translated Figma designs into functional web pages while ensuring UX consistency",
        "Content Management Systems: Integrated Decap CMS to streamline content updates",
        "Bug Fixing & Debugging: Diagnosed and resolved performance and functionality issues"
      ]
    },
    {
      type: "work",
      title: "Middle QA Engineer",
      company: "Foxteam Digital",
      location: "Ukraine, Remote",
      period: "2021 - Present",
      description: "Enterprise-scale CRM/E-commerce Testing, Automation",
      details: [
        "Leading QA processes for enterprise-scale CRM and e-commerce platforms, ensuring high system reliability and performance",
        "Conducting manual and automated testing for APIs, payment systems, and content management systems",
        "Performing cross-browser and mobile-responsive testing to guarantee seamless UX/UI across all devices",
        "Collaborating with developers to identify and resolve defects, enhancing system efficiency and stability",
        "Implementing test automation frameworks (Playwright, Cypress) to streamline regression testing cycles"
      ]
    },
    {
      type: "work",
      title: "QA Engineer",
      company: "Miber AB",
      location: "Sweden, Remote",
      period: "2020 - 2021",
      description: "End-to-end Testing, Defect Reporting, QA",
      details: [
        "Performed end-to-end testing for an online education platform, ensuring smooth student registration, class management, and teacher material development workflows",
        "Analyzed business requirements and technical documentation, developing comprehensive test cases for functional and integration testing",
        "Conducted defect reporting and debugging sessions with actionable insights, improving overall product reliability and performance",
        "Executed UI/UX testing across multiple browsers, devices, and operating systems to ensure a consistently high-quality user experience",
        "Produced detailed reports on issues with recommendations for continuous improvement"
      ]
    },
    {
      type: "work",
      title: "Junior QA Engineer",
      company: "UVOTEAM",
      location: "Kyiv, Ukraine",
      period: "2018 - 2020",
      description: "Test Suite Development, UI Testing, QA",
      details: [
        "Developed comprehensive test suites for multilingual web applications, ensuring functionality across multiple languages and locales",
        "Conducted front-end and UI testing, validating user interactions, visual consistency, and accessibility compliance",
        "Worked closely with developers and product managers to enhance testing coverage and overall software quality",
        "Executed manual test cases and created detailed bug reports with reproduction steps and severity classification",
        "Performed regression testing for new releases, ensuring backward compatibility and system stability",
        "Collaborated with team members to document testing procedures and maintain test case repositories"
      ]
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
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: `url(${introduceBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/15 via-background/10 to-background/15" />
        
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
          <p className="text-xl text-foreground leading-relaxed mb-6">
            Founded by Nataliia Petrychuk. We're obsessed with design excellence and engineering precision, helping forward-thinking companies launch and scale their digital products since 2022.
          </p>
          <p className="text-lg text-foreground leading-relaxed italic">
            "Building great digital products is equal parts craft and science. It requires discipline, creativity, and an obsessive attention to detail."
          </p>
          <p className="text-sm text-muted-foreground mt-4">— Designer, Engineer, Entrepreneur</p>
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
        <section className="py-24 border-t border-white/10 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `url(${journeyBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/10 to-background/15" />
          
          <div className="relative z-10 px-6">
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
              {timeline.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                const isEducation = idx >= 4;
                const isFirstEducation = idx === 4;
                return (
                  <div key={`section-${idx}`}>
                    {isFirstEducation && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="col-span-full mb-2 mt-8 px-4 md:px-0"
                      >
                        <h3 className="text-2xl font-display font-bold text-primary">Education</h3>
                      </motion.div>
                    )}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative pt-8 pb-8 ${isLeft ? 'pr-12' : 'pl-12'} ${!isLeft ? 'mt-24' : ''} ${idx === 5 ? 'mt-48' : ''}`}
                  >
                    {/* Icon on center line */}
                    <motion.div
                      initial={{ opacity: 1, y: 0 }}
                      animate={activeIndex === idx ? { opacity: 1, y: -10 } : { opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className={`absolute top-8 transform z-10 ${isLeft ? 'right-[-24px]' : 'left-[-24px]'} w-12 h-12 rounded-full bg-background flex items-center justify-center`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeIndex === idx
                          ? "bg-accent scale-110"
                          : "bg-primary"
                      }`}>
                        {item.type === "work" ? (
                          <Briefcase size={20} className={`transition-colors ${activeIndex === idx ? "text-primary" : "text-accent"}`} />
                        ) : (
                          <GraduationCap size={20} className={`transition-colors ${activeIndex === idx ? "text-primary" : "text-accent"}`} />
                        )}
                      </div>
                    </motion.div>

                    {/* Content Card */}
                    <div className={`p-6 rounded-xl transition-all duration-300 bg-background border border-white/10 hover:border-primary/30 ${
                      isEducation
                        ? activeIndex === idx
                          ? "shadow-2xl shadow-primary/60"
                          : "shadow-lg shadow-accent/40"
                        : activeIndex === idx
                        ? "shadow-2xl shadow-primary/60"
                        : ""
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold pr-4">{item.title}</h4>
                        <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{item.period}</span>
                      </div>
                      <p className="text-sm text-primary font-semibold mb-1">{item.company}</p>
                      <p className="text-xs text-muted-foreground mb-3">{item.location}</p>
                      {item.details ? (
                        <ul className="space-y-2">
                          {item.details.map((detail, i) => (
                            <li key={i} className="text-sm md:text-base text-foreground leading-relaxed flex gap-2">
                              <span className="text-primary flex-shrink-0 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm md:text-base text-foreground leading-relaxed">{item.description}</p>
                      )}
                    </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-white/5 m-[15px]"
        >
          <div 
            className="absolute inset-0 z-0 opacity-40"
            style={{
              backgroundImage: `url(${ctaBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/10 via-background/5 to-background/10" />
          
          <div className="relative z-20">
            <h2 className="text-4xl font-display font-bold mb-6">Ready to work together?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's build something exceptional. Whether you need an MVP, testing strategy, or design system—we're ready to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full text-lg px-8 shadow-lg shadow-purple-500/40 cursor-pointer">Get in Touch</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full text-lg px-8 border-white/10 hover:bg-white/5 shadow-lg shadow-purple-500/40 cursor-pointer">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}