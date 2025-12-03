import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Loader, X } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";
import { useState } from "react";
import backgroundImage from "@assets/generated_images/abstract_digital_dark_mode_hero_background.png";

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
      <div 
        className="min-h-screen relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
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
                  <a href="mailto:makeinfosense@gmail.com" className="text-foreground/90 hover:text-primary transition-colors">makeinfosense@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-muted/30 border border-[#d2f7be]/5 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <a href="tel:+61414599822" className="text-foreground/90 hover:text-primary transition-colors">+61 414 599 822</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-muted/30 border border-[#d2f7be]/5 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Office</h3>
                  <p className="text-foreground/90">Wolli Creek, NSW, Australia</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative mt-12 pt-8 border-t border-[#d2f7be]/10 overflow-hidden rounded-2xl"
              >
                <div 
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/60 to-background/40" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#d2f7be]/3 via-transparent to-[#c3ecac]/2 blur-xl" />
                <div className="relative space-y-4 p-4">
                  <h3 className="text-lg font-bold text-[#d2f7be]">Why Provide Details?</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <span className="text-[#d2f7be] font-bold flex-shrink-0">→</span>
                      <span><strong className="text-foreground">Better Analysis</strong> - More information helps us understand your vision</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#d2f7be] font-bold flex-shrink-0">→</span>
                      <span><strong className="text-foreground">Accurate Quotes</strong> - Detailed requirements lead to precise pricing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#d2f7be] font-bold flex-shrink-0">→</span>
                      <span><strong className="text-foreground">Faster Solutions</strong> - Clear specifications speed up development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#d2f7be] font-bold flex-shrink-0">→</span>
                      <span><strong className="text-foreground">Perfect Fit</strong> - We deliver exactly what you need</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d2f7be]/5 via-transparent to-[#c3ecac]/3 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-muted/20 via-muted/10 to-muted/5 p-8 md:p-12 rounded-3xl border border-[#d2f7be]/15 backdrop-blur-sm shadow-2xl shadow-purple-500/10">
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="text-sm font-semibold ml-1 text-[#d2f7be] uppercase tracking-wide">Name *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      className={`bg-gradient-to-br from-background/40 to-background/20 h-12 rounded-xl border-2 transition-all duration-300 px-4 text-base font-medium ${errors.name ? 'border-red-500 shadow-lg shadow-red-500/20' : 'border-[#d2f7be]/20 hover:border-[#d2f7be]/40 focus:border-[#d2f7be]/60 shadow-lg shadow-purple-500/10'}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs ml-1 font-medium">{errors.name}</p>}
                  </motion.div>
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <label className="text-sm font-semibold ml-1 text-[#d2f7be] uppercase tracking-wide">Email *</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className={`bg-gradient-to-br from-background/40 to-background/20 h-12 rounded-xl border-2 transition-all duration-300 px-4 text-base font-medium ${errors.email ? 'border-red-500 shadow-lg shadow-red-500/20' : 'border-[#d2f7be]/20 hover:border-[#d2f7be]/40 focus:border-[#d2f7be]/60 shadow-lg shadow-purple-500/10'}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs ml-1 font-medium">{errors.email}</p>}
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="text-sm font-semibold ml-1 text-[#d2f7be] uppercase tracking-wide">Company</label>
                    <Input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company" 
                      className="bg-gradient-to-br from-background/40 to-background/20 h-12 rounded-xl border-2 border-[#d2f7be]/20 hover:border-[#d2f7be]/40 focus:border-[#d2f7be]/60 transition-all duration-300 px-4 text-base font-medium shadow-lg shadow-purple-500/10"
                    />
                  </motion.div>
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <label className="text-sm font-semibold ml-1 text-[#d2f7be] uppercase tracking-wide">Project Type</label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full bg-gradient-to-br from-background/60 to-background/40 h-12 rounded-xl border-2 border-[#d2f7be]/30 hover:border-[#d2f7be]/50 focus:border-[#d2f7be]/70 transition-all duration-300 px-4 text-base font-semibold focus:outline-none shadow-lg shadow-purple-500/20 appearance-none cursor-pointer text-[#1a1a1a]"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23d2f7be' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.5em',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option value="" disabled hidden selected>Select project type</option>
                      <option value="mvp">MVP Development</option>
                      <option value="fullstack">Fullstack Development</option>
                      <option value="qa">QA & Testing</option>
                      <option value="design">Design System</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="text-sm font-semibold ml-1 text-[#d2f7be] uppercase tracking-wide">Budget Range</label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full bg-gradient-to-br from-background/60 to-background/40 h-12 rounded-xl border-2 border-[#d2f7be]/30 hover:border-[#d2f7be]/50 focus:border-[#d2f7be]/70 transition-all duration-300 px-4 text-base font-semibold focus:outline-none shadow-lg shadow-purple-500/20 appearance-none cursor-pointer text-[#1a1a1a]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23d2f7be' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.5em',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="" disabled hidden selected>Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </motion.div>
                
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <label className="text-sm font-semibold ml-1 text-[#d2f7be] uppercase tracking-wide">Project Details *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={(e) => {
                      handleChange(e);
                      const textarea = e.target;
                      textarea.style.height = 'auto';
                      textarea.style.height = Math.max(140, textarea.scrollHeight) + 'px';
                    }}
                    placeholder="Tell us about your project, goals, timeline, and requirements..." 
                    className="bg-gradient-to-br from-background/40 to-background/20 border-2 border-[#d2f7be]/20 hover:border-[#d2f7be]/40 focus:border-[#d2f7be]/60 rounded-xl min-h-[140px] focus:outline-none resize-none transition-all duration-300 px-4 py-3 text-base font-medium shadow-lg shadow-purple-500/10 overflow-hidden"
                    required
                  />
                </motion.div>

                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="text-sm font-semibold ml-1 text-[#d2f7be] uppercase tracking-wide">Upload Files</label>
                  <div className="border-2 border-dashed border-[#d2f7be]/30 rounded-xl p-8 text-center hover:border-[#d2f7be]/60 hover:bg-[#d2f7be]/5 transition-all duration-300 cursor-pointer shadow-lg shadow-purple-500/5 group">
                    <input 
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.zip,.figma,.xd,.sketch,.jpg,.png,.mp4"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer block">
                      <div className="mb-3 flex justify-center">
                        <div className="p-3 rounded-full bg-[#d2f7be]/10 group-hover:bg-[#d2f7be]/20 transition-all duration-300">
                          <svg className="w-6 h-6 text-[#d2f7be]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-base font-semibold text-[#d2f7be] mb-1">
                        {formData.file ? `📎 ${formData.file.name}` : 'Drag and drop or click'}
                      </p>
                      <p className="text-xs text-muted-foreground">PDF, ZIP, Images, Video, Design files • Max 5MB</p>
                    </label>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                  className="pt-4"
                >
                  <Button 
                    type="submit"
                    disabled={loading}
                    className="w-auto px-12 h-14 rounded-full text-lg font-semibold shadow-lg shadow-purple-500/40 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-70 group"
                    style={{ backgroundColor: '#d2f7be', color: '#000' }}
                  >
                    {loading ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin mr-2" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
          </div>
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