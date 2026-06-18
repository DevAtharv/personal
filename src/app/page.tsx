"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { featuredWork, heroStats, interests, projects, skillGroups, technologies } from "@/lib/site-content";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative px-6 pb-20 pt-34 md:pb-28 md:pt-42">
        <div className="absolute inset-x-0 top-0 -z-10 h-[760px] border-b border-white/10 bg-[radial-gradient(circle_at_18%_6%,rgba(255,107,53,0.16),transparent_28rem),radial-gradient(circle_at_88%_8%,rgba(216,224,206,0.08),transparent_30rem)]" />

        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Vibe coding practical systems for real businesses
            </div>

            <h1 className="max-w-5xl text-5xl font-heading font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
              Atharv Agarwal
            </h1>

            <p className="mt-7 max-w-3xl text-2xl font-semibold leading-snug text-white/82 md:text-3xl">
              Building software, automations, and digital systems for growing businesses.
            </p>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/58">
              I work at the intersection of technology, automation, and business operations. I use AI tools, taste, and execution to turn practical ideas into usable systems.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/work" className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 font-bold text-black transition-transform hover:-translate-y-0.5 hover:bg-accent-hover">
                View My Work <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.045] px-6 py-4 font-bold text-white transition-colors hover:border-accent/40 hover:bg-white/[0.08]">
                Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55, delay: 0.12 }}
            className="rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
          >
            <div className="rounded-lg border border-white/10 bg-[#10110f]/88 p-5">
              <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Builder profile</p>
                  <h2 className="mt-2 text-2xl font-heading font-bold text-white">Real solutions for real problems.</h2>
                </div>
                <Sparkles size={24} className="text-accent" />
              </div>

              <div className="grid grid-cols-1 divide-y divide-white/10">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="py-5">
                    <p className="font-bold text-white">{stat.label}</p>
                    <p className="mt-2 text-sm leading-6 text-white/54">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-accent">Featured work</p>
              <h2 className="max-w-3xl text-4xl font-heading font-bold tracking-tight text-white md:text-6xl">
                Business work, not portfolio filler.
              </h2>
            </div>
            <Link href="/work" className="inline-flex items-center gap-2 font-bold text-accent hover:text-accent-hover">
              See all work <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {featuredWork.map((work, index) => (
              <motion.article
                key={work.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.045]"
              >
                <div className="border-b border-white/10 bg-[radial-gradient(circle_at_12%_0%,rgba(255,107,53,0.18),transparent_20rem),linear-gradient(145deg,rgba(255,246,232,0.08),rgba(255,255,255,0.02))] p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/68">
                      {work.status}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Case study</span>
                  </div>
                  <h3 className="mt-10 text-4xl font-heading font-bold text-white md:text-5xl">{work.title}</h3>
                  <p className="mt-4 max-w-xl text-white/58">{work.visualDetail}</p>
                </div>

                <div className="p-6 md:p-7">
                  <p className="text-lg leading-8 text-white/66">{work.description}</p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {work.highlights.slice(0, 4).map((highlight) => (
                      <div key={highlight} className="flex gap-3 rounded-lg border border-white/10 bg-black/18 p-4 text-sm leading-6 text-white/66">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link href={`/work#${work.id}`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent hover:text-accent-hover">
                      Read details <ArrowRight size={16} />
                    </Link>
                    {work.url ? (
                      <a href={work.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/72 hover:text-accent">
                        Live site <ExternalLink size={15} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-accent">Tools and approach</p>
            <h2 className="text-4xl font-heading font-bold text-white md:text-6xl">Vibe coding, but with business context.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/56">
              I do not want this site to pretend I am a senior engineer. The honest edge is using AI tools, taste, and operational thinking to build useful versions quickly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {technologies.map((tool) => (
              <div key={tool.name} className="flex min-h-24 flex-col justify-between rounded-lg border border-white/10 bg-white/[0.045] p-4">
                <tool.icon size={21} className="text-accent" />
                <span className="text-sm font-bold text-white/72">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
              <group.icon size={26} className="text-accent" />
              <h3 className="mt-5 text-2xl font-bold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-black/18 px-3 py-1 text-sm font-semibold text-white/62">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-accent">Projects</p>
            <h2 className="text-4xl font-heading font-bold text-white md:text-6xl">Experiments, clearly labeled.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/56">
              These are experiments and learning projects, not inflated startup claims.
            </p>
            <Link href="/projects" className="mt-7 inline-flex items-center gap-2 font-bold text-accent hover:text-accent-hover">
              View projects <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/42">{project.status}</span>
                </div>
                <p className="mt-3 leading-7 text-white/58">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 rounded-lg border border-white/10 bg-[#f8f3ea] p-6 text-black md:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-black/45">About</p>
            <h2 className="max-w-3xl text-4xl font-heading font-bold md:text-6xl">A Class 12 student learning through execution.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/62">
              I am interested in technology, finance, automation, and entrepreneurship. I enjoy turning ideas into usable products and learning through execution.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span key={interest} className="rounded-md bg-black/8 px-3 py-2 text-sm font-bold text-black/62">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-7xl rounded-lg border border-white/10 bg-white/[0.055] p-6 md:p-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-accent">Contact</p>
              <h2 className="text-4xl font-heading font-bold text-white md:text-6xl">Let&apos;s build something useful.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/58">
                I&apos;m always interested in discussing technology, business systems, automation, and practical ideas.
              </p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 font-bold text-black transition-transform hover:-translate-y-0.5 hover:bg-accent-hover">
              Contact Me <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
