"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { featuredWork } from "@/lib/site-content";

export default function Work() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-white px-6 pb-24 pt-32 text-[#0d253d]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[430px] bg-[radial-gradient(circle_at_10%_8%,rgba(245,233,212,0.95),transparent_18rem),radial-gradient(circle_at_44%_6%,rgba(185,185,249,0.62),transparent_20rem),radial-gradient(circle_at_88%_8%,rgba(234,34,97,0.18),transparent_18rem),linear-gradient(90deg,#f5e9d4,#f6f9fc)]" />
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-4xl"
        >
          <p className="mb-4 text-sm font-medium uppercase text-accent">Work</p>
          <h1 className="text-5xl font-light leading-[1.03] text-[#0d253d] md:text-6xl">Real businesses, real operating problems.</h1>
          <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-[#273951] md:text-xl">
            This section is intentionally the most important part of the site. It shows the work connected to businesses, customers, ordering flows, and launch infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {featuredWork.map((work, index) => (
            <motion.section
              id={work.id}
              key={work.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="scroll-mt-28 overflow-hidden rounded-xl bg-white shadow-[0_16px_42px_rgba(13,37,61,0.065)] ring-1 ring-[#edf2f7]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="min-h-80 border-b border-[#edf2f7] bg-[radial-gradient(circle_at_22%_10%,rgba(185,185,249,0.55),transparent_16rem),radial-gradient(circle_at_92%_0%,rgba(245,233,212,0.9),transparent_15rem),linear-gradient(145deg,#f6f9fc,#ffffff)] p-6 lg:border-b-0 lg:border-r lg:border-[#edf2f7] md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-[#b9b9f9] px-3 py-1 text-xs font-medium uppercase text-[#4434d4]">{work.status}</span>
                    <span className="text-xs font-medium uppercase text-accent">Featured</span>
                  </div>
                  <div className="mt-24">
                    <p className="text-sm font-medium uppercase text-[#64748d]">{work.visualTitle}</p>
                    <h2 className="mt-3 text-5xl font-light text-[#0d253d] md:text-6xl">{work.title}</h2>
                    <p className="mt-5 max-w-lg text-lg font-light leading-8 text-[#64748d]">{work.visualDetail}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <p className="max-w-3xl text-xl font-light leading-9 text-[#273951]">{work.description}</p>

                  <div className="mt-9">
                    <h3 className="text-sm font-medium uppercase text-[#64748d]">
                      {work.title === "Vadi Masala" ? "Responsibilities" : "Highlights"}
                    </h3>
                    <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                      {work.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3 rounded-lg bg-[#f6f9fc] p-4 text-sm leading-6 text-[#273951]">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 rounded-lg bg-[#f5e9d4] p-5">
                    <h3 className="text-sm font-medium uppercase text-[#64748d]">
                      {work.title === "Vadi Masala" ? "Focus" : "What I learned"}
                    </h3>
                    <p className="mt-3 leading-7 text-[#273951]">{work.learned}</p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {work.url ? (
                      <a href={work.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover">
                        Visit Live Site <ExternalLink size={15} />
                      </a>
                    ) : (
                      <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover">
                        Discuss Launch Systems <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
