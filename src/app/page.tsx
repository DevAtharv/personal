"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { featuredWork, heroStats, interests, projects, skillGroups, technologies } from "@/lib/site-content";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative px-6 pb-24 pt-36 md:pt-44">
        <div className="absolute inset-x-0 top-0 -z-10 h-[680px] border-b border-white/10 bg-[linear-gradient(110deg,rgba(255,255,255,0.08),transparent_38%),radial-gradient(circle_at_74%_20%,rgba(139,255,189,0.16),transparent_26rem)]" />
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Young builder working on real business systems
            </div>
            <h1 className="text-6xl font-heading font-bold tracking-tight text-white md:text-8xl lg:text-9xl">
              Atharv Agarwal
            </h1>
            <h2 className="mt-7 max-w-3xl text-2xl font-semibold leading-snug text-white/82 md:text-4xl">
              Building software, automations, and digital systems for growing businesses.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/58">
              I work at the intersection of technology, automation, and business operations. I enjoy vibe coding practical products, streamlining workflows, and helping businesses operate more efficiently through software.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/work" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 font-bold text-black transition-transform hover:-translate-y-0.5">
                View My Work <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.04] px-6 py-4 font-bold text-white transition-colors hover:bg-white/[0.08]">
                Contact Me <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/30 backdrop-blur"
          >
            <div className="rounded-lg border border-white/10 bg-black/45 p-5">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Operating log</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">Real solutions for real problems</h3>
                </div>
                <Sparkles className="text-accent" size={24} />
              </div>
              <div className="grid grid-cols-1 divide-y divide-white/10">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="py-5">
                    <p className="text-base font-bold text-white">{stat.label}</p>
                    <p className="mt-2 text-sm leading-6 text-white/54">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-8">
        <div className="container mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
          {technologies.map((tool) => (
            <div key={tool.name} className="flex min-h-20 flex-col justify-between rounded-lg border border-white/10 bg-white/[0.035] p-3">
              <tool.icon size={18} className="text-accent" />
              <span className="text-sm font-semibold text-white/72">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24" id="featured-work">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-accent">Featured work</p>
            <h2 className="text-4xl font-heading font-bold tracking-tight text-white md:text-6xl">Business work comes first.</h2>
            <p className="mt-5 text-lg leading-8 text-white/56">
              The most important work here is not a demo. It is work connected to businesses, customers, orders, and day-to-day operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {featuredWork.map((work, index) => (
              <motion.article
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="grid grid-cols-1 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] lg:grid-cols-[0.82fr_1.18fr]"
              >
                <div className="relative min-h-72 border-b border-white/10 bg-[radial-gradient(circle_at_20%_12%,rgba(139,255,189,0.24),transparent_16rem),linear-gradient(145deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))] p-6 lg:border-b-0 lg:border-r">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/70">
                      {work.status}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Case study</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/45">{work.visualTitle}</p>
                    <h3 className="mt-3 text-4xl font-heading font-bold text-white md:text-5xl">{work.title}</h3>
                    <p className="mt-4 max-w-md text-white/58">{work.visualDetail}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <p className="max-w-3xl text-lg leading-8 text-white/68">{work.description}</p>
                  <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {work.highlights.map((highlight) => (
                      <div key={highlight} className="flex gap-3 rounded-lg border border-white/10 bg-black/20 p-4 text-sm text-white/68">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 rounded-lg border border-white/10 bg-black/25 p-5">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/38">What I learned</p>
                    <p className="mt-3 leading-7 text-white/64">{work.learned}</p>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-4">
                    <Link href={`/work#${work.id}`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent hover:text-accent-hover">
                      Read more <ArrowRight size={16} />
                    </Link>
                    {work.url ? (
                      <a href={work.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-accent">
                        Visit live site <ExternalLink size={15} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-accent">Projects</p>
            <h2 className="text-4xl font-heading font-bold text-white md:text-6xl">Experiments, not inflated startups.</h2>
            <p className="mt-5 text-lg leading-8 text-white/56">
              These are learning projects and product experiments. They are presented honestly as explorations, prototypes, and workflow ideas.
            </p>
            <Link href="/projects" className="mt-7 inline-flex items-center gap-2 font-bold text-accent hover:text-accent-hover">
              View projects <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project) => (
              <article key={project.title} className="rounded-lg border border-white/10 bg-black/20 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/45">{project.status}</span>
                </div>
                <p className="mt-3 leading-7 text-white/58">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <group.icon size={26} className="text-accent" />
              <h3 className="mt-5 text-2xl font-bold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-black/22 px-3 py-1 text-sm font-semibold text-white/62">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-accent">About</p>
            <h2 className="text-4xl font-heading font-bold text-white md:text-6xl">A Class 12 student learning through execution.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/58">
              I am interested in technology, finance, automation, and entrepreneurship. Over the last few years I have focused on building practical projects and working with real businesses to understand how technology can solve operational challenges.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span key={interest} className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm font-semibold text-white/64">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-7xl rounded-lg border border-white/10 bg-white px-6 py-12 text-black md:px-10 md:py-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-black/45">Contact</p>
              <h2 className="text-4xl font-heading font-bold md:text-6xl">Let&apos;s build something useful.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/62">
                I am always interested in discussing technology, business systems, automation, and new ideas.
              </p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-black px-6 py-4 font-bold text-white transition-transform hover:-translate-y-0.5">
              Contact Me <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
