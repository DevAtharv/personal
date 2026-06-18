"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Database, Globe, Smartphone, Zap } from "lucide-react";

const technologies = [
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code },
  { name: "Tailwind CSS", icon: Zap },
  { name: "PostgreSQL", icon: Database },
  { name: "React Native", icon: Smartphone },
];

const featuredProjects = [
  {
    title: "Pulps & Leaves",
    status: "Live Project",
    description: "Premium website development and WhatsApp integration for product showcase and mobile optimization.",
    tags: ["Next.js", "Tailwind CSS", "WhatsApp API"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Vadi Masala",
    status: "Pre-Launch Project",
    description: "Brand website design with a lead capture system tailored for premium FMCG presentation.",
    tags: ["React", "Framer Motion", "CRM"],
    color: "from-red-500 to-orange-600",
  },
  {
    title: "GetSync",
    status: "Product",
    description: "Comprehensive dashboard UI and financial data management system.",
    tags: ["TypeScript", "Dashboard", "Analytics"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Glint",
    status: "Product",
    description: "Innovative product overview with interactive features and seamless user experience.",
    tags: ["Web App", "UI/UX", "Product"],
    color: "from-emerald-400 to-teal-500",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-6">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[150px] mix-blend-screen opacity-30" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="container mx-auto relative z-10 flex flex-col items-center text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">Available for new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[1.1] mb-8"
          >
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50 dark:from-white dark:to-white/50 text-accent">scalable systems</span> for consumer brands.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-12 leading-relaxed"
          >
            Transforming FMCG, D2C, and food brands with premium website development and high-converting automation workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="/work"
              className="px-8 py-4 rounded-xl bg-accent text-white font-medium text-lg hover:bg-accent-hover hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(255,107,53,0.3)] flex items-center justify-center gap-2"
            >
              View My Work <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-foreground/5 text-foreground font-medium text-lg border border-foreground/10 hover:bg-foreground/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
              Let's Discuss
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-24 bg-foreground/[0.02] border-y border-foreground/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center divide-y md:divide-y-0 md:divide-x divide-foreground/10">
            <div className="p-6">
              <h3 className="text-5xl font-heading font-bold text-accent mb-2">15+</h3>
              <p className="text-foreground/60 font-medium">Projects Delivered</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-heading font-bold text-accent mb-2">3</h3>
              <p className="text-foreground/60 font-medium">Years Experience</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-heading font-bold text-accent mb-2">10k+</h3>
              <p className="text-foreground/60 font-medium">Leads Generated</p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-8">Technologies & Systems Built With</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 group">
                  <tech.icon size={32} className="group-hover:text-accent transition-colors text-foreground" />
                  <span className="text-xs font-medium text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK SECTION */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Selected Work</h2>
              <p className="text-xl text-foreground/60 max-w-xl">
                A showcase of digital experiences and systems designed to convert visitors into customers.
              </p>
            </div>
            <Link href="/work" className="group flex items-center gap-2 text-accent font-medium hover:text-accent-hover transition-colors">
              View All Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-foreground/5 border border-foreground/10"
              >
                {/* Project Image Placeholder */}
                <div className={`w-full h-80 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                   <h3 className="text-4xl font-heading font-bold text-white/90 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                     {project.title}
                   </h3>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-heading">{project.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-foreground/70 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 bg-foreground/5 rounded-md border border-foreground/10 text-foreground/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground hover:text-accent transition-colors">
                    View Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Ready to scale your brand?</h2>
          <p className="text-xl text-foreground/60 mb-10">
            Let's build a digital presence that builds trust and a system that generates leads automatically.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-10 py-5 rounded-xl bg-accent text-white font-bold text-lg hover:bg-accent-hover hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_rgba(255,107,53,0.4)]"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
