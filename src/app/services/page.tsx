"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skillGroups, technologies } from "@/lib/site-content";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] px-6 pb-24 pt-32 text-[#111318]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-sm font-medium uppercase text-accent">How I build</p>
          <h1 className="text-5xl font-light leading-[1.03] md:text-7xl">Vibe coding, tools, and business context.</h1>
          <p className="mt-7 max-w-3xl text-lg font-light leading-8 text-[#4c5562] md:text-xl">
            I use AI-assisted tools, strong taste, and practical business understanding to move from an idea to a usable system quickly.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
          {technologies.map((tool) => (
            <div key={tool.name} className="flex min-h-24 flex-col justify-between rounded-lg bg-white p-3 shadow-[0_18px_46px_rgba(17,19,24,0.06)]">
              <tool.icon size={19} className="text-accent" />
              <span className="text-sm font-medium text-[#27303a]">{tool.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-lg bg-white p-6 shadow-[0_18px_50px_rgba(17,19,24,0.06)]"
            >
              <group.icon size={26} className="text-accent" />
              <h2 className="mt-5 text-2xl font-light">{group.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-[#f5f7fb] px-3 py-1 text-sm font-medium text-[#4c5562]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-[#111318] px-6 py-10 text-white shadow-[0_24px_70px_rgba(17,19,24,0.18)] md:px-8">
          <h2 className="text-3xl font-light">Want to discuss a useful system?</h2>
          <p className="mt-4 max-w-2xl text-white/62">
            I&apos;m interested in business systems, automation, workflow design, and practical product ideas.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-white hover:bg-accent-hover">
            Contact me <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
