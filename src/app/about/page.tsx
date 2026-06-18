"use client";

import { motion } from "framer-motion";
import { interests, skillGroups } from "@/lib/site-content";

export default function About() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-white px-6 pb-24 pt-32 text-[#0d253d]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[430px] bg-[radial-gradient(circle_at_10%_8%,rgba(245,233,212,0.95),transparent_18rem),radial-gradient(circle_at_48%_4%,rgba(185,185,249,0.62),transparent_20rem),radial-gradient(circle_at_90%_6%,rgba(234,34,97,0.16),transparent_18rem),linear-gradient(90deg,#f5e9d4,#f6f9fc)]" />
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase text-accent">About me</p>
            <h1 className="text-5xl font-light leading-[1.03] text-[#0d253d] md:text-6xl">Learning by building useful things.</h1>
            <div className="mt-8 space-y-6 text-lg font-light leading-8 text-[#273951]">
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

          <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_8px_24px_rgba(0,55,112,0.08)]">
            <p className="text-sm font-medium uppercase text-[#64748d]">Currently interested in</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span key={interest} className="rounded-full bg-[#f6f9fc] px-3 py-2 text-sm font-medium text-[#273951]">
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
              className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_1px_3px_rgba(0,55,112,0.08)]"
            >
              <group.icon size={26} className="text-accent" />
              <h2 className="mt-5 text-2xl font-light text-[#0d253d]">{group.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-[#f6f9fc] px-3 py-1 text-sm font-medium text-[#273951]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 rounded-xl bg-[#f5e9d4] p-6 md:p-8">
          <p className="text-sm font-medium uppercase text-accent">Core message</p>
          <h2 className="mt-4 text-3xl font-light text-[#0d253d] md:text-5xl">
            Atharv builds real solutions for real problems.
          </h2>
        </div>
      </div>
    </div>
  );
}
