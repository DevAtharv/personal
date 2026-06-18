"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    status: "idle", // idle, submitting, success, error
    message: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "submitting", message: "" });
    
    // Simulate API call
    setTimeout(() => {
      setFormState({ 
        status: "success", 
        message: "Thank you for reaching out! I'll get back to you within 24 hours." 
      });
      // In a real app, reset form here
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Let's Talk</h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Ready to build a high-converting website or automate your business? Fill out the form below and let's discuss your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-foreground/5 border border-foreground/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:hello@atharvagarwal.in" className="flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 mb-1">Email</p>
                    <p className="font-medium">hello@atharvagarwal.in</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-foreground/80">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 mb-1">Location</p>
                    <p className="font-medium">India (Available Worldwide)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-3xl p-8 text-accent">
              <h3 className="text-xl font-bold mb-2">Fastest Response</h3>
              <p className="text-accent/80 mb-6">Click the WhatsApp button in the bottom right corner for an immediate reply.</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="bg-foreground/5 border border-foreground/10 rounded-3xl p-8 md:p-10">
              {formState.status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-foreground/70 text-lg">{formState.message}</p>
                  <button 
                    type="button"
                    onClick={() => setFormState({ status: "idle", message: "" })}
                    className="mt-8 px-6 py-3 border border-foreground/20 rounded-xl hover:bg-foreground/5 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name *</label>
                      <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-foreground/80">Company/Brand Name</label>
                      <input type="text" id="company" className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Acme Corp" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address *</label>
                      <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Phone Number</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-medium text-foreground/80">Project Type</label>
                    <select id="projectType" className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-foreground/90">
                      <option value="website">Website Development</option>
                      <option value="automation">WhatsApp / Business Automation</option>
                      <option value="both">Both Website & Automation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-foreground/80">Budget Range</label>
                    <select id="budget" className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-foreground/90">
                      <option value="1k-3k">$1,000 - $3,000</option>
                      <option value="3k-5k">$3,000 - $5,000</option>
                      <option value="5k+">$5,000+</option>
                      <option value="not-sure">Not Sure</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80">Project Details *</label>
                    <textarea required id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none" placeholder="Tell me about your brand, goals, and what you're looking to build..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState.status === "submitting"}
                    className="w-full py-4 rounded-xl bg-accent text-white font-bold text-lg hover:bg-accent-hover transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState.status === "submitting" ? "Sending..." : "Submit Inquiry"}
                  </button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
