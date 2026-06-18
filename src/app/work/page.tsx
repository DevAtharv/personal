"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const allProjects = [
  {
    title: "Pulps & Leaves",
    status: "Live Project",
    type: "Website Development",
    description: "Premium website development and WhatsApp integration for product showcase and mobile optimization.",
    tags: ["Next.js", "Tailwind CSS", "WhatsApp API"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Vadi Masala",
    status: "Pre-Launch Project",
    type: "Brand Website",
    description: "Brand website design with a lead capture system tailored for premium FMCG presentation.",
    tags: ["React", "Framer Motion", "CRM"],
    color: "from-red-500 to-orange-600",
  },
  {
    title: "GetSync",
    status: "Product",
    type: "Dashboard UI",
    description: "Comprehensive dashboard UI and financial data management system.",
    tags: ["TypeScript", "Dashboard", "Analytics"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Glint",
    status: "Product",
    type: "Web Application",
    description: "Innovative product overview with interactive features and seamless user experience.",
    tags: ["Web App", "UI/UX", "Product"],
    color: "from-emerald-400 to-teal-500",
  },
];

export default function Work() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Selected Work</h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            A collection of websites, web apps, and automation systems designed to help consumer brands grow and operate more efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:gap-24">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Side */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className={`w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-3xl bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  <h3 className="text-4xl md:text-5xl font-heading font-bold text-white/90 transform group-hover:scale-105 transition-transform duration-700 drop-shadow-xl">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="lg:col-span-5 order-1 lg:order-2 lg:pl-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-xs font-medium text-accent">{project.status}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{project.title}</h2>
                <h3 className="text-lg font-medium text-foreground/50 mb-6 uppercase tracking-widest">{project.type}</h3>
                
                <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-sm font-medium px-4 py-2 bg-foreground/5 rounded-lg border border-foreground/10 text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 pb-2 border-b-2 border-accent text-accent font-bold hover:text-accent-hover hover:border-accent-hover transition-colors text-lg"
                >
                  View Case Study <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
