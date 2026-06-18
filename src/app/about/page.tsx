"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, Code2, Cpu, Rocket } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Code2,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"]
  },
  {
    category: "Backend & Systems",
    icon: Terminal,
    items: ["Node.js", "PostgreSQL", "API Integrations", "Supabase", "Firebase"]
  },
  {
    category: "Automation & AI",
    icon: Cpu,
    items: ["WhatsApp API", "Zapier", "Make", "OpenAI Integrations", "Custom Workflows"]
  },
  {
    category: "Product & Growth",
    icon: Rocket,
    items: ["UI/UX Design", "SEO Optimization", "Lead Generation", "Analytics Setup"]
  }
];

const timeline = [
  {
    year: "Present",
    title: "Freelance Developer & Automation Expert",
    description: "Building scalable web solutions and WhatsApp automation systems for D2C and consumer brands."
  },
  {
    year: "2023",
    title: "Frontend Developer",
    description: "Developed enterprise dashboards and high-performance React applications."
  },
  {
    year: "2022",
    title: "Began Journey",
    description: "Started learning web development and building small projects for local businesses."
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Hello, I'm Atharv.</h1>
            <h2 className="text-2xl text-accent font-medium mb-6">Developer & Automation Engineer</h2>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                I specialize in building premium digital experiences that function as lead-generation machines. While many developers just build websites, I build complete business systems.
              </p>
              <p>
                My focus is primarily on FMCG, D2C, food, spice, tea, and consumer brands. I understand that for these businesses, a website needs to do more than just look good—it needs to convert visitors into loyal customers.
              </p>
              <p>
                By combining modern tech stacks like Next.js with automation tools like WhatsApp APIs, I help businesses streamline their operations and scale efficiently.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Image Placeholder */}
            <div className="aspect-[4/5] rounded-3xl bg-foreground/5 border border-foreground/10 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
              <p className="text-foreground/40 font-heading font-bold text-2xl relative z-10">Atharv Agarwal</p>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mb-32">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">My Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-foreground/5 border border-foreground/10 p-6 rounded-2xl"
              >
                <skill.icon size={32} className="text-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map(item => (
                    <li key={item} className="text-foreground/70 font-medium">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">My Journey</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-foreground/10 before:to-transparent">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-foreground/5 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-foreground/5 text-accent font-bold text-sm">
                  {item.year.substring(2)}
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-accent/30 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-bold text-accent">{item.year}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
