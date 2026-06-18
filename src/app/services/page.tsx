"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe, MessageSquare, Workflow } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "website-development",
    title: "Website Development",
    icon: Globe,
    description: "High-performance, beautifully designed websites that serve as the digital storefront for your brand. Built for speed, SEO, and conversion.",
    features: [
      "Custom Website Design",
      "Mobile Responsive Architecture",
      "Technical SEO Optimization",
      "Fast Performance & Loading",
      "Premium SaaS Aesthetic"
    ]
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation",
    icon: MessageSquare,
    description: "Automated messaging workflows that capture leads, answer inquiries, and drive sales 24/7 without manual intervention.",
    features: [
      "Customer Inquiry Handling",
      "Automated Lead Capture",
      "Smart Auto-Responses",
      "Business Logic Integration",
      "D2C Order Updates"
    ]
  },
  {
    id: "business-systems",
    title: "Business Systems",
    icon: Workflow,
    description: "Custom internal tools and integrations that connect your forms, CRM, and databases to streamline operations.",
    features: [
      "Custom Form Solutions",
      "CRM Setup & Integration",
      "Google Sheets Automation",
      "Process & Workflow Automation",
      "Data Syncing across Apps"
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-20 text-center mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Services</h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            End-to-end solutions combining premium design and robust engineering to scale your brand's digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-foreground/5 border border-foreground/10 rounded-lg p-8 hover:bg-foreground/[0.07] transition-colors flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-8">
                <service.icon size={32} />
              </div>
              
              <h2 className="text-3xl font-heading font-bold mb-4">{service.title}</h2>
              <p className="text-foreground/70 mb-8 flex-grow text-lg">
                {service.description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/50 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3 text-foreground/80 font-medium">
                      <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-24 p-8 md:p-12 rounded-lg bg-accent text-white text-center relative overflow-hidden"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 relative z-10">Need a custom solution?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 relative z-10">
            Every business is unique. I build tailored systems designed specifically for your brand's operational needs and growth goals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-xl bg-white text-accent font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl relative z-10"
          >
            Get a Custom Quote
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
