import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8"><AnimatedText text="Let's talk." staggerDelay={0.06} duration={0.6} initialDelay={0.3} /></h1>
            <p className="text-xl text-muted-foreground mb-12">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-muted/30 border border-white/5 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-muted-foreground">hello@nexus.studio</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-muted/30 border border-white/5 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-muted/30 border border-white/5 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Office</h3>
                  <p className="text-muted-foreground">Wolli Creek, NSW, Australia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-muted/10 p-8 md:p-10 rounded-3xl border border-white/5"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Name</label>
                  <Input placeholder="John Doe" className="bg-background/50 border-white/10 h-12 focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Email</label>
                  <Input placeholder="john@example.com" className="bg-background/50 border-white/10 h-12 focus:border-primary/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Subject</label>
                <Input placeholder="Project Inquiry" className="bg-background/50 border-white/10 h-12 focus:border-primary/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Message</label>
                <Textarea placeholder="Tell us about your project..." className="bg-background/50 border-white/10 min-h-[150px] focus:border-primary/50 resize-none" />
              </div>

              <Button className="w-full h-12 text-lg font-medium mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}