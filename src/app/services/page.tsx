"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skillGroups, technologies } from "@/lib/site-content";

export default function Services() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#f6f9fc] px-6 pb-24 pt-32 text-[#0d253d]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[430px] bg-[radial-gradient(circle_at_10%_8%,rgba(245,233,212,0.95),transparent_18rem),radial-gradient(circle_at_48%_4%,rgba(185,185,249,0.62),transparent_20rem),radial-gradient(circle_at_90%_6%,rgba(234,34,97,0.16),transparent_18rem),linear-gradient(90deg,#f5e9d4,#f6f9fc)]" />
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-4xl"
        >
          <p className="mb-4 text-sm font-medium uppercase text-accent">How I build</p>
          <h1 className="text-5xl font-light leading-[1.03] text-[#0d253d] md:text-6xl">Vibe coding, tools, and business context.</h1>
          <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-[#273951] md:text-xl">
            I use AI-assisted tools, strong taste, and practical business understanding to move from an idea to a usable system quickly.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
          {technologies.map((tool) => (
            <div key={tool.name} className="flex min-h-24 flex-col justify-between rounded-xl bg-white p-3 shadow-[0_18px_46px_rgba(13,37,61,0.07)]">
              <tool.icon size={19} className="text-accent" />
              <span className="text-sm font-medium text-[#273951]">{tool.name}</span>
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
              className="rounded-xl bg-white p-6 shadow-[0_20px_52px_rgba(13,37,61,0.075)]"
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

        <div className="mt-16 rounded-xl bg-[#f5e9d4] px-6 py-10 md:px-8">
          <h2 className="text-3xl font-light text-[#0d253d]">Want to discuss a useful system?</h2>
          <p className="mt-4 max-w-2xl text-[#273951]">
            I&apos;m interested in business systems, automation, workflow design, and practical product ideas.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-white hover:bg-accent-hover">
            Contact Me <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
