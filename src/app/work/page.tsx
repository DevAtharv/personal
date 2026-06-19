"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { featuredWork } from "@/lib/site-content";

export default function Work() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] px-6 pb-24 pt-32 text-[#111318]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-sm font-medium uppercase text-accent">Work</p>
          <h1 className="text-5xl font-light leading-[1.03] md:text-7xl">Real businesses, real operating problems.</h1>
          <p className="mt-7 max-w-3xl text-lg font-light leading-8 text-[#4c5562] md:text-xl">
            The work here is connected to customers, ordering flows, launch preparation, and the boring operational gaps that software can quietly fix.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8">
          {featuredWork.map((work, index) => (
            <motion.section
              id={work.id}
              key={work.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="scroll-mt-28 overflow-hidden rounded-lg bg-white shadow-[0_24px_70px_rgba(17,19,24,0.08)]"
            >
              <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:p-10">
                <div className="flex min-h-96 flex-col justify-between rounded-lg bg-[#111318] p-6 text-white">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#111318]">{work.status}</span>
                    {work.url ? (
                      <a href={work.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
                        Visit Live Site <ExternalLink size={15} />
                      </a>
                    ) : null}
                  </div>

                  <div>
                    <p className="text-sm uppercase text-white/42">{work.visualTitle}</p>
                    <h2 className="mt-3 text-5xl font-light md:text-6xl">{work.title}</h2>
                    <p className="mt-5 max-w-lg text-lg font-light leading-8 text-white/62">{work.visualDetail}</p>
                  </div>
                </div>

                <div className="self-center">
                  <p className="max-w-3xl text-xl font-light leading-9 text-[#27303a]">{work.description}</p>

                  <div className="mt-9">
                    <h3 className="text-sm font-medium uppercase text-[#1463ff]">
                      {work.title === "Vadi Masala" ? "Responsibilities" : "Highlights"}
                    </h3>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {work.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3 rounded-lg bg-[#f5f7fb] p-4 text-sm leading-6 text-[#4c5562]">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#15b8a6]" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 rounded-lg bg-[#fff2ed] p-5">
                    <h3 className="text-sm font-medium uppercase text-[#ff6b4a]">
                      {work.title === "Vadi Masala" ? "Focus" : "What I learned"}
                    </h3>
                    <p className="mt-3 leading-7 text-[#4c5562]">{work.learned}</p>
                  </div>

                  <div className="mt-8">
                    {work.url ? (
                      <a href={work.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover">
                        Open live work <ExternalLink size={15} />
                      </a>
                    ) : (
                      <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover">
                        Discuss launch systems <ArrowRight size={16} />
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
