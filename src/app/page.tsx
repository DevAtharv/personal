"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { clientProjects, technologies } from "@/lib/site-content";

const proofPoints = [
  {
    label: "Pulps & Leaves",
    value: "₹1.2L+",
    detail: "sales in under 1 month",
  },
  {
    label: "Vadi Masala",
    value: "150kg",
    detail: "orders with ₹0 ad spend",
  },
  {
    label: "Focus",
    value: "Food",
    detail: "FMCG, D2C, spice, and fresh brands",
  },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col overflow-hidden">
      <section className="relative border-b border-foreground/10 bg-[linear-gradient(120deg,rgba(47,125,50,0.09),transparent_42%),linear-gradient(0deg,rgba(249,115,22,0.08),transparent_36%)] px-6 pb-20 pt-32 md:pt-40">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/80 px-4 py-2 text-sm font-semibold text-foreground/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Proof-led websites for food brands
            </div>

            <h1 className="max-w-4xl text-5xl font-heading font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
              Websites that sell before the ads begin.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/65 md:text-xl">
              I build focused digital storefronts and inquiry systems for FMCG, D2C, fruit, spice, and consumer brands that need real orders, not just a pretty homepage.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-4 text-base font-bold text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                View Proof <ArrowRight size={19} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-foreground/15 bg-background/70 px-6 py-4 text-base font-bold text-foreground transition-colors hover:bg-foreground/5"
              >
                Send Inquiry
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="rounded-lg border border-foreground/10 bg-background/85 p-4 shadow-2xl shadow-foreground/5 backdrop-blur"
          >
            <div className="rounded-lg border border-foreground/10 bg-foreground text-background">
              <div className="flex items-center justify-between border-b border-background/10 px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-background/55">Outcome board</p>
                  <h2 className="mt-1 text-xl font-bold">Client proof</h2>
                </div>
                <TrendingUp className="text-accent" size={26} />
              </div>

              <div className="grid grid-cols-1 divide-y divide-background/10">
                {proofPoints.map((point) => (
                  <div key={point.label} className="grid grid-cols-[1fr_auto] gap-4 px-5 py-5">
                    <div>
                      <p className="text-sm font-semibold text-background/55">{point.label}</p>
                      <p className="mt-1 text-base text-background/75">{point.detail}</p>
                    </div>
                    <p className="text-right text-3xl font-heading font-bold text-accent md:text-4xl">{point.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-foreground/10 bg-foreground/[0.025] px-6 py-14">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex items-center gap-3 rounded-lg border border-foreground/10 bg-background px-4 py-4">
                <tech.icon size={20} className="shrink-0 text-accent" />
                <span className="text-sm font-semibold text-foreground/75">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Selected work</p>
              <h2 className="text-4xl font-heading font-bold md:text-6xl">Food-brand systems with receipts.</h2>
            </div>
            <Link href="/work" className="inline-flex items-center gap-2 font-bold text-accent hover:text-accent-hover">
              All project details <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {clientProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.03]"
              >
                <div className={`bg-gradient-to-br ${project.color} p-6 text-white`}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      {project.status}
                    </span>
                    <span className="text-sm font-semibold text-white/80">{project.type}</span>
                  </div>
                  <div className="mt-16">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/65">{project.metricLabel}</p>
                    <h3 className="mt-3 text-6xl font-heading font-bold md:text-7xl">{project.metric}</h3>
                    <p className="mt-5 max-w-xl text-lg font-medium text-white/88">{project.outcome}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-3xl font-heading font-bold">{project.title}</h3>
                  <p className="mt-4 text-base leading-7 text-foreground/68">{project.description}</p>

                  <ul className="mt-6 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-foreground/70">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-foreground/10 bg-background px-3 py-1 text-xs font-semibold text-foreground/75">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/work#${project.id}`} className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground hover:text-accent">
                    Read project notes <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-foreground text-background px-6 py-20">
        <div className="container mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Next build</p>
            <h2 className="max-w-3xl text-4xl font-heading font-bold md:text-6xl">Have a food brand that needs orders without wasting ad budget?</h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-background px-6 py-4 font-bold text-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Submit Inquiry <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
