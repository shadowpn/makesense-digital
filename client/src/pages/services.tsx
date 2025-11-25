import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Check, Code2, Bug, Zap, Database, LayoutTemplate } from "lucide-react";
import qaIcon from "@assets/generated_images/abstract_qa_testing_concept_icon.png";
import mvpIcon from "@assets/generated_images/abstract_mvp_development_concept_icon.png";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/animated-text";

const services = [
  {
    id: "qa",
    title: "QA & Automation",
    description: "Rigorous testing strategies to ensure zero-defect releases.",
    icon: qaIcon,
    features: [
      "Manual Functional Testing",
      "E2E Automation (Playwright/Cypress)",
      "API Testing Integration",
      "Performance Load Testing",
    ],
  },
  {
    id: "mvp",
    title: "MVP Development",
    description: "Rapid prototyping and development for startup validation.",
    icon: mvpIcon,
    features: [
      "React/Next.js Architecture",
      "Rapid Prototyping",
      "Scalable Design Systems",
      "Production Deployment",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <AnimatedText text="Our Expertise." staggerDelay={0.06} duration={0.6} initialDelay={0.3} className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary" />
          </h1>
          <p className="text-xl text-muted-foreground">
            We combine engineering precision with design intuition to build
            software that works flawlessly and looks exceptional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-muted/10 hover:bg-muted/20 transition-colors"
            >
              <div className="p-10 md:p-16 relative z-10">
                <div className="w-24 h-24 mb-8 rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-4xl font-display font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-10 max-w-md">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <div className="p-1 rounded-full bg-primary/10 text-primary">
                        <Check size={14} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className="rounded-full" variant="secondary">
                  Learn more
                </Button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="border-t border-white/10 pt-20">
          <h2 className="text-3xl font-display font-bold mb-16 text-center">
            The Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <LayoutTemplate />,
                title: "Discovery",
                desc: "We map out requirements and define success metrics.",
              },
              {
                icon: <Code2 />,
                title: "Development",
                desc: "Iterative builds with bi-weekly demos and feedback.",
              },
              {
                icon: <Bug />,
                title: "Testing",
                desc: "Rigorous automated and manual testing cycles.",
              },
              {
                icon: <Zap />,
                title: "Deployment",
                desc: "Smooth rollout with monitoring and support.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto bg-muted/30 rounded-2xl flex items-center justify-center text-primary mb-6 border border-white/5">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
