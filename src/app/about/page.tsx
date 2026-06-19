"use client";

import { motion } from "framer-motion";
import { interests, skillGroups } from "@/lib/site-content";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] px-6 pb-24 pt-32 text-[#111318]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"
        >
          <div>
            <p className="mb-5 text-sm font-medium uppercase text-accent">About me</p>
            <h1 className="text-5xl font-light leading-[1.03] md:text-7xl">Learning by building useful things.</h1>
            <div className="mt-8 space-y-6 text-lg font-light leading-8 text-[#4c5562]">
              <p>I&apos;m a Class 12 student interested in technology, finance, automation, and entrepreneurship.</p>
              <p>
                Over the last few years I&apos;ve focused on building practical projects and working with real businesses
                to understand how technology can solve operational challenges.
              </p>
              <p>
                I use vibe coding and AI-assisted tools to turn ideas into usable versions quickly, then keep improving
                them through feedback, operations, and real-world constraints.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-[#111318] p-6 text-white shadow-[0_24px_70px_rgba(17,19,24,0.18)]">
            <p className="text-sm font-medium uppercase text-[#15b8a6]">Currently interested in</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span key={interest} className="rounded-full bg-white/10 px-3 py-2 text-sm text-white/74">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-4 lg:grid-cols-3">
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

        <div className="mt-20 rounded-lg bg-white p-8 shadow-[0_24px_70px_rgba(17,19,24,0.08)] md:p-10">
          <p className="text-sm font-medium uppercase text-accent">Core message</p>
          <h2 className="mt-4 text-3xl font-light md:text-5xl">
            Atharv builds real solutions for real problems.
          </h2>
        </div>
      </div>
    </div>
  );
}
