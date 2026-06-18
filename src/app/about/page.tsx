"use client";

import { motion } from "framer-motion";
import { interests, skillGroups } from "@/lib/site-content";

export default function About() {
  return (
    <div className="min-h-screen px-6 pb-24 pt-32">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"
        >
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-accent">About me</p>
            <h1 className="text-5xl font-heading font-bold leading-[1.02] text-white md:text-7xl">Learning by building useful things.</h1>
            <div className="mt-8 space-y-6 text-lg leading-8 text-white/62">
              <p>
                I&apos;m a Class 12 student interested in technology, finance, automation, and entrepreneurship.
              </p>
              <p>
                Over the last few years I&apos;ve focused on building practical projects and working with real businesses to understand how technology can solve operational challenges.
              </p>
              <p>
                I use vibe coding and AI-assisted tools to turn ideas into usable versions quickly, then keep improving them through feedback, operations, and real-world constraints.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/38">Currently interested in</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span key={interest} className="rounded-md border border-white/10 bg-black/22 px-3 py-2 text-sm font-semibold text-white/66">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
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

        <div className="mt-20 rounded-lg border border-white/10 bg-white/[0.035] p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Core message</p>
          <h2 className="mt-4 text-3xl font-heading font-bold text-white md:text-5xl">
            Atharv builds real solutions for real problems.
          </h2>
        </div>
      </div>
    </div>
  );
}
