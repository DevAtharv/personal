"use client";

import { motion } from "framer-motion";
import { capabilityGroups, impactThemes, interests } from "@/lib/site-content";

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
            <h1 className="text-5xl font-light leading-[1.03] md:text-7xl">Building systems by working on real problems.</h1>
            <div className="mt-8 space-y-6 text-lg font-light leading-8 text-[#4c5562]">
              <p>I&apos;m a Class 12 student focused on software, automation, finance, and business operations.</p>
              <p>
                My strongest learning has come from working with real businesses, especially where customer communication,
                ordering, and internal tracking create operational pressure.
              </p>
              <p>
                I use AI-assisted development to build practical systems: websites, order workflows, automation,
                Google Sheets operations, and customer-facing flows that a business can actually use.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-[#111318] p-6 text-white shadow-[0_24px_70px_rgba(17,19,24,0.18)]">
            <p className="text-sm font-medium uppercase text-[#15b8a6]">Current direction</p>
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
          {capabilityGroups.map((group, index) => (
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
          <p className="text-sm font-medium uppercase text-accent">How I judge the work</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {impactThemes.map((theme) => (
              <article key={theme.label} className="rounded-lg bg-[#f5f7fb] p-5">
                <theme.icon size={22} className="text-accent" />
                <h2 className="mt-4 text-2xl font-light">{theme.label}</h2>
                <p className="mt-3 text-sm leading-6 text-[#4c5562]">{theme.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
