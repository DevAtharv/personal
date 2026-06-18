"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skillGroups, technologies } from "@/lib/site-content";

export default function Services() {
  return (
    <div className="min-h-screen px-6 pb-24 pt-32">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-4xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-accent">How I build</p>
          <h1 className="text-5xl font-heading font-bold leading-[1.02] text-white md:text-7xl">Vibe coding, tools, and business context.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/58 md:text-xl">
            I use AI-assisted tools, strong taste, and practical business understanding to move from an idea to a usable system quickly.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
          {technologies.map((tool) => (
            <div key={tool.name} className="flex min-h-24 flex-col justify-between rounded-lg border border-white/10 bg-white/[0.035] p-3">
              <tool.icon size={19} className="text-accent" />
              <span className="text-sm font-semibold text-white/72">{tool.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
            >
              <group.icon size={26} className="text-accent" />
              <h2 className="mt-5 text-2xl font-bold text-white">{group.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-black/22 px-3 py-1 text-sm font-semibold text-white/62">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-white/10 bg-[#f8f3ea] px-6 py-10 text-black md:px-8">
          <h2 className="text-3xl font-heading font-bold">Want to discuss a useful system?</h2>
          <p className="mt-4 max-w-2xl text-black/62">
            I&apos;m interested in business systems, automation, workflow design, and practical product ideas.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-bold text-black hover:bg-accent-hover">
            Contact Me <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
