"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { featuredWork } from "@/lib/site-content";

export default function Work() {
  return (
    <div className="min-h-screen px-6 pb-24 pt-32">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-4xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-accent">Work</p>
          <h1 className="text-5xl font-heading font-bold leading-[1.02] text-white md:text-7xl">Real businesses, real operating problems.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/58 md:text-xl">
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
              className="scroll-mt-28 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="min-h-80 border-b border-white/10 bg-[radial-gradient(circle_at_30%_18%,rgba(255,107,53,0.24),transparent_17rem),linear-gradient(145deg,rgba(255,246,232,0.10),rgba(255,255,255,0.02))] p-6 lg:border-b-0 lg:border-r md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/70">{work.status}</span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Featured</span>
                  </div>
                  <div className="mt-24">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/40">{work.visualTitle}</p>
                    <h2 className="mt-3 text-5xl font-heading font-bold text-white md:text-7xl">{work.title}</h2>
                    <p className="mt-5 max-w-lg text-lg leading-8 text-white/58">{work.visualDetail}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <p className="max-w-3xl text-xl leading-9 text-white/68">{work.description}</p>

                  <div className="mt-9">
                    <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-white/38">
                      {work.title === "Vadi Masala" ? "Responsibilities" : "Highlights"}
                    </h3>
                    <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                      {work.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3 rounded-lg border border-white/10 bg-black/22 p-4 text-sm leading-6 text-white/68">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 rounded-lg border border-white/10 bg-black/25 p-5">
                    <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-white/38">
                      {work.title === "Vadi Masala" ? "Focus" : "What I learned"}
                    </h3>
                    <p className="mt-3 leading-7 text-white/64">{work.learned}</p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {work.url ? (
                      <a href={work.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-black transition-transform hover:-translate-y-0.5 hover:bg-accent-hover">
                        Visit Live Site <ExternalLink size={15} />
                      </a>
                    ) : (
                      <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-black transition-transform hover:-translate-y-0.5 hover:bg-accent-hover">
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
