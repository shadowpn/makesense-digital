import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Loader, X } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dialog, setDialog] = useState<{ open: boolean; title: string; message: string; isSuccess: boolean }>({
    open: false,
    title: '',
    message: '',
    isSuccess: false
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    file: null as File | null
  });

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateFile = (file: File): string | null => {
    const allowedMimes = ['application/pdf', 'application/zip', 'application/x-zip-compressed', 'image/jpeg', 'image/png', 'video/mp4'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedMimes.includes(file.type)) {
      return 'Invalid file type. Allowed: PDF, ZIP, JPG, PNG, MP4';
    }
    if (file.size > maxSize) {
      return 'File size must be less than 5MB';
    }
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      const fileError = validateFile(file);
      if (fileError) {
        setDialog({
          open: true,
          title: 'Invalid File',
          message: fileError,
          isSuccess: false
        });
      } else {
        setFormData(prev => ({ ...prev, file }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('email', formData.email.trim());
      formDataToSend.append('company', formData.company);
      formDataToSend.append('projectType', formData.projectType);
      formDataToSend.append('budget', formData.budget);
      formDataToSend.append('message', formData.message.trim());
      if (formData.file) {
        formDataToSend.append('file', formData.file);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (response.ok) {
        setDialog({
          open: true,
          title: 'Message Sent Successfully',
          message: 'Thank you for reaching out! We will get back to you within 24 hours.',
          isSuccess: true
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
          file: null
        });
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
      } else {
        setDialog({
          open: true,
          title: 'Error Sending Message',
          message: data.error || 'Failed to send your message. Please try again.',
          isSuccess: false
        });
      }
    } catch (error) {
      setDialog({
        open: true,
        title: 'Error',
        message: 'An error occurred. Please try again later.',
        isSuccess: false
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8"><AnimatedText text="Let's talk." staggerDelay={0.06} duration={0.6} initialDelay={0.3} className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary" /></h1>
            <p className="text-xl text-muted-foreground mb-12">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-muted/30 border border-[#d2f7be]/5 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-muted-foreground">makeinfosense@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-muted/30 border border-[#d2f7be]/5 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-muted-foreground">+61 414 599 822</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-muted/30 border border-[#d2f7be]/5 text-primary">
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
            className="bg-muted/10 p-8 md:p-10 rounded-3xl border border-[#d2f7be]/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Name *</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className={`bg-background/50 h-12 focus:border-primary/50 ${errors.name ? 'border-red-500 border-2' : 'border-[#d2f7be]/10'}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Email *</label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className={`bg-background/50 h-12 focus:border-primary/50 ${errors.email ? 'border-red-500 border-2' : 'border-[#d2f7be]/10'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Company</label>
                  <Input 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company" 
                    className="bg-background/50 border-[#d2f7be]/10 h-12 focus:border-primary/50" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Project Type</label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-[#d2f7be]/10 h-12 px-3 rounded-md focus:border-primary/50 focus:outline-none"
                  >
                    <option value="">Select project type</option>
                    <option value="mvp">MVP Development</option>
                    <option value="fullstack">Fullstack Development</option>
                    <option value="qa">QA & Testing</option>
                    <option value="design">Design System</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Budget Range</label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-[#d2f7be]/10 h-12 px-3 rounded-md focus:border-primary/50 focus:outline-none"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Project Details *</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..." 
                  className="bg-background/50 border-[#d2f7be]/10 min-h-[120px] focus:border-primary/50 resize-none" 
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Upload Files (Prototypes, Designs, etc.)</label>
                <div className="border-2 border-dashed border-[#d2f7be]/20 rounded-lg p-6 text-center hover:border-[#d2f7be]/40 transition-colors cursor-pointer">
                  <input 
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.zip,.figma,.xd,.sketch,.jpg,.png,.mp4"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <p className="text-sm text-muted-foreground">
                      {formData.file ? `📎 ${formData.file.name}` : 'Drag and drop or click to upload'}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">PDF, ZIP, Images, Video, Design files</p>
                  </label>
                </div>
              </div>

              <Button 
                type="submit"
                disabled={loading}
                size="lg" 
                className="h-14 px-12 rounded-full text-lg shadow-lg shadow-purple-500/40 cursor-pointer mt-6" 
                style={{ backgroundColor: '#d2f7be' }}
              >
                {loading ? <Loader className="w-4 h-4 animate-spin mr-2" /> : null}
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {dialog.open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-background border border-[#d2f7be]/20 rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className={`text-2xl font-bold ${dialog.isSuccess ? 'text-green-500' : 'text-red-500'}`}>
                {dialog.title}
              </h2>
              <button
                onClick={() => setDialog({ ...dialog, open: false })}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-muted-foreground mb-6 text-base">{dialog.message}</p>
            <Button
              onClick={() => setDialog({ ...dialog, open: false })}
              className="w-full h-12 rounded-full text-base"
              style={{ backgroundColor: '#d2f7be' }}
            >
              OK
            </Button>
          </motion.div>
        </div>
      )}
    </Layout>
  );
}