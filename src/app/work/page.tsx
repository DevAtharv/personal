"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { clientProjects } from "@/lib/site-content";

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
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-accent">Selected work</p>
          <h1 className="text-5xl font-heading font-bold leading-[1.02] md:text-7xl">Proof from food and FMCG builds.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/65 md:text-xl">
            Two focused builds, one simple pattern: clear brand presentation, a cleaner path to inquiry, and outcomes that happened before heavy marketing spend.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {clientProjects.map((project, index) => (
            <motion.section
              id={project.id}
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="scroll-mt-28 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.03]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
                <div className={`flex min-h-80 flex-col justify-between bg-gradient-to-br ${project.color} p-6 text-white md:p-8`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">{project.status}</span>
                    <span className="text-sm font-semibold text-white/78">{project.type}</span>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/65">{project.metricLabel}</p>
                    <h2 className="mt-3 text-7xl font-heading font-bold md:text-8xl">{project.metric}</h2>
                    <p className="mt-5 max-w-lg text-xl font-semibold leading-8 text-white/90">{project.outcome}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                    <div>
                      <h2 className="text-4xl font-heading font-bold md:text-5xl">{project.title}</h2>
                      <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-foreground/45">{project.type}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-bold text-background transition-transform duration-300 hover:-translate-y-0.5 md:w-auto"
                    >
                      Build Similar <ArrowRight size={16} />
                    </Link>
                  </div>

                  <p className="mt-7 max-w-3xl text-lg leading-8 text-foreground/68">{project.description}</p>

                  <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="rounded-lg border border-foreground/10 bg-background p-4">
                        <CheckCircle2 size={20} className="mb-3 text-accent" />
                        <p className="text-sm leading-6 text-foreground/70">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-foreground/10 bg-background px-3 py-1 text-xs font-semibold text-foreground/75">
                        {tag}
                      </span>
                    ))}
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
