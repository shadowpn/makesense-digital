import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Users, Target, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedText } from "@/components/animated-text";
import { useState, useEffect } from "react";
import introduceBg from "@assets/Introduce_1764120672692.jpg";
import nataliiaPhoto from "@assets/About_desk_1764138287441.jpg";
import journeyBg from "@assets/generated_images/modern_tech_services_background.png";
import workHeroBg from "@assets/1709706757448_1764139146885.jpg";

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${introduceBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/0 via-background/30 to-background" />
        
        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="text-3xl md:text-5xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.8] mb-6 md:mb-8 text-glow">
              <AnimatedText text="About" staggerDelay={0.06} duration={0.6} initialDelay={0.3} />
              <br />
              <AnimatedText 
                text="SensePower Digital." 
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
              className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-8 md:mb-12 leading-relaxed"
            >
              Founded by Nataliia Petrychuk. We're obsessed with design excellence and engineering precision, helping forward-thinking companies launch and scale their digital products since 2022.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Cofounder Section */}
        <section className="py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start"
          >
            {/* Photo */}
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/40"
              >
                <img src={nataliiaPhoto} alt="Nataliia Petrychuk" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Info */}
            <div className="col-span-1 md:col-span-2 space-y-6 md:space-y-8">
              {/* Header */}
              <div>
                <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Nataliia Petrychuk</h2>
                <p className="text-base md:text-xl text-foreground font-semibold mb-4">Full-Stack Developer & QA Engineer</p>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                  Full Stack Developer and QA Engineer passionate about building modern, user-centric, and reliable web products. I combine front-end and back-end development skills with strong QA expertise to deliver applications that are not only functional, but truly work at scale. Experienced with React.js, Node.js, REST APIs, and end-to-end testing practices, I enjoy turning ideas into working MVPs and improving products through thoughtful testing and iteration.
                </p>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mt-4">
                  I am driven by curiosity and continuous learning — exploring new frameworks, AI-powered tools, automation techniques, and UX trends that move digital products forward. I love working on solutions that simplify processes, enhance usability, and make technology more accessible.
                </p>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mt-4">
                  <span className="font-semibold text-foreground">Hobbies & Interests</span> — Outside of tech, I am actively involved in sports. I regularly play tennis and take part in amateur tournaments, which helps me stay focused, disciplined, and goal-oriented — qualities I apply in my professional life as well. I enjoy challenges, competition, and constant improvement, both on the court and in my career.
                </p>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mt-4">
                  <span className="font-semibold text-foreground">What motivates me</span> — Building products that solve real problems and make a meaningful impact. For me, development is not just about writing code — it's about understanding the idea behind it, shaping it, and bringing it to life with quality and purpose.
                </p>
              </div>

            </div>
          </motion.div>
        </section>

        {/* Core Skills Section - Full Width Below */}
        <section className="py-12 md:py-24 border-t border-[#d2f7be]/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">Core Skills & Expertise</h2>
            <p className="text-base md:text-lg text-muted-foreground">Deep technical proficiency across QA, automation, and full-stack development</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <h3 className="text-base md:text-xl font-display font-bold mb-4 text-primary group-hover:text-accent transition-colors">{skill.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Professional Journey Section */}
        <section className="py-12 md:py-24 border-t border-[#d2f7be]/10 relative overflow-hidden">
          <div 
            className="hidden md:block absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url(${journeyBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/20" />
          
          <div className="relative z-10 px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 md:mb-16"
            >
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">Professional Journey</h2>
              <p className="text-base md:text-lg text-muted-foreground">A decade of growth across QA, development, and continuous learning</p>
            </motion.div>

            {/* Mobile: Simple list */}
            <div className="md:hidden space-y-4">
              {timeline.map((item, idx) => {
                const isEducation = idx >= 4;
                return (
                  <div key={`mobile-${idx}`}>
                    {idx === 4 && (
                      <h3 className="text-lg md:text-2xl font-display font-bold text-primary mb-4 mt-6">Education</h3>
                    )}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-lg bg-background border border-[#d2f7be]/10 hover:border-primary/30 transition-all"
                    >
                      <div className="flex items-start justify-between mb-2 gap-2">
                        <h4 className="text-sm font-bold flex-1">{item.title}</h4>
                        <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{item.period}</span>
                      </div>
                      <p className="text-xs text-primary font-semibold mb-1">{item.company}</p>
                      <p className="text-xs text-muted-foreground mb-2">{item.location}</p>
                      {item.details ? (
                        <ul className="space-y-1">
                          {item.details.slice(0, 2).map((detail, i) => (
                            <li key={i} className="text-xs text-foreground leading-tight flex gap-2">
                              <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                          {item.details.length > 2 && (
                            <li className="text-xs text-muted-foreground italic">+{item.details.length - 2} more</li>
                          )}
                        </ul>
                      ) : (
                        <p className="text-xs text-foreground leading-tight">{item.description}</p>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Desktop: 2 Column Timeline with Icons */}
            <div className="hidden md:block relative">
              {/* Center Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 transform -translate-x-1/2" />
              
              {/* Timeline Grid - 2 Columns */}
              <div className="grid grid-cols-2 gap-0">
                {timeline.map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  const isEducation = idx >= 4;
                  const isFirstEducation = idx === 4;
                  return (
                    <div key={`desktop-${idx}`}>
                      {isFirstEducation && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="col-span-full mb-2 mt-8 px-4 md:px-0"
                        >
                          <h3 className="text-xl md:text-2xl font-display font-bold text-primary">Education</h3>
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
                        <div className={`p-6 rounded-xl transition-all duration-300 bg-background border border-[#d2f7be]/10 hover:border-primary/30 ${
                          isEducation
                            ? activeIndex === idx
                              ? "shadow-2xl shadow-primary/60"
                              : "shadow-lg shadow-accent/40"
                            : activeIndex === idx
                            ? "shadow-2xl shadow-primary/60"
                            : ""
                        }`}>
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-base md:text-lg font-bold pr-4">{item.title}</h4>
                            <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{item.period}</span>
                          </div>
                          <p className="text-sm text-primary font-semibold mb-1">{item.company}</p>
                          <p className="text-xs text-muted-foreground mb-3">{item.location}</p>
                          {item.details ? (
                            <ul className="space-y-2">
                              {item.details.map((detail, i) => (
                                <li key={i} className="text-xs md:text-sm lg:text-base text-foreground leading-relaxed flex gap-2">
                                  <span className="text-primary flex-shrink-0 mt-1">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-xs md:text-sm lg:text-base text-foreground leading-relaxed">{item.description}</p>
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

        {/* CTA Section with Background */}
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
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/10 via-background/5 to-background/10" />
          
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
      </div>
    </Layout>
  );
}