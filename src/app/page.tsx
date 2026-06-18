"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { featuredWork, heroStats, interests, projects, skillGroups, technologies } from "@/lib/site-content";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function DashboardMockup() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_28px_90px_rgba(13,37,61,0.16)]">
      <div className="overflow-hidden rounded-xl bg-[#1c1e54] text-white">
        <div className="flex items-center justify-between bg-white/[0.035] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ea2261]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f96bee]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#665efd]" />
          </div>
          <p className="text-xs text-white/55">systems.ops</p>
        </div>
        <div className="grid gap-4 p-5 md:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-lg bg-white/[0.08] p-4">
            <p className="text-xs uppercase text-white/45">Business system</p>
            <h3 className="mt-3 text-2xl font-light leading-tight">From scattered operations to usable workflows.</h3>
            <div className="mt-5 space-y-2">
              {["Customer communication", "Order visibility", "Launch preparation"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-md bg-white/[0.08] px-3 py-2 text-sm">
                  <span>{item}</span>
                  <span className="text-[#9b9bff]">active</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {featuredWork.map((work) => (
              <div key={work.id} className="rounded-lg bg-white p-4 text-[#0d253d]">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium">{work.title}</p>
                  <span className="rounded-full bg-[#b9b9f9] px-2.5 py-1 text-[10px] font-medium uppercase text-[#4434d4]">
                    {work.status}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[#64748d]">{work.visualDetail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-white text-[#0d253d]">
      <section className="relative isolate overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_8%_10%,rgba(245,233,212,0.95),transparent_18rem),radial-gradient(circle_at_32%_8%,rgba(255,183,119,0.72),transparent_20rem),radial-gradient(circle_at_62%_2%,rgba(185,185,249,0.76),transparent_20rem),radial-gradient(circle_at_86%_10%,rgba(234,34,97,0.28),transparent_18rem),linear-gradient(90deg,#f5e9d4,#f6f9fc)]" />
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55 }}
          >
            <p className="mb-5 inline-flex rounded-full bg-[#b9b9f9] px-3 py-1 text-xs font-medium uppercase text-[#4434d4]">
              Vibe coding practical systems
            </p>
            <h1 className="max-w-4xl text-5xl font-light leading-[1.03] text-[#0d253d] md:text-6xl">
              Atharv Agarwal builds useful software, automations, and digital systems.
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-[#273951]">
              I work at the intersection of technology, automation, and business operations. I use AI tools, taste, and execution to turn practical ideas into usable systems.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/work" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-white transition-colors hover:bg-accent-hover">
                View my work <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-accent ring-1 ring-accent/25 transition-colors hover:bg-[#f6f9fc]">
                Contact me
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-4">
          {heroStats.map((stat) => (
            <article key={stat.label} className="rounded-xl bg-[#fbfdff] p-5 shadow-[0_18px_46px_rgba(13,37,61,0.07)]">
              <p className="text-sm font-medium text-[#0d253d]">{stat.label}</p>
              <p className="mt-2 text-sm leading-6 text-[#64748d]">{stat.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f9fc] px-6 py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase text-accent">Featured work</p>
            <h2 className="text-4xl font-light leading-tight text-[#0d253d] md:text-5xl">Business work, not portfolio filler.</h2>
            <p className="mt-5 text-lg font-light leading-8 text-[#64748d]">
              The strongest work here is connected to businesses, customers, operations, and launch infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featuredWork.map((work, index) => (
              <motion.article
                key={work.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-xl bg-white p-7 shadow-[0_24px_60px_rgba(13,37,61,0.08)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-[#b9b9f9] px-3 py-1 text-xs font-medium uppercase text-[#4434d4]">{work.status}</span>
                  {work.url ? (
                    <a href={work.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Live site <ExternalLink size={14} />
                    </a>
                  ) : null}
                </div>
                <h3 className="mt-8 text-3xl font-light text-[#0d253d]">{work.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#273951]">{work.description}</p>
                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {work.highlights.slice(0, 4).map((highlight) => (
                    <div key={highlight} className="flex gap-3 rounded-lg bg-[#f6f9fc] p-3 text-sm text-[#273951]">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-7 rounded-lg bg-[#f5e9d4] p-4 text-sm leading-6 text-[#273951]">{work.learned}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase text-accent">Tools and approach</p>
            <h2 className="text-4xl font-light leading-tight text-[#0d253d] md:text-5xl">AI tools, taste, and business context.</h2>
            <p className="mt-5 max-w-xl text-lg font-light leading-8 text-[#64748d]">
              This is not a senior-engineer cosplay. The honest edge is using modern tools to build useful versions quickly, then learning from real constraints.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {technologies.map((tool) => (
              <div key={tool.name} className="rounded-xl bg-[#fbfdff] p-4 shadow-[0_18px_46px_rgba(13,37,61,0.07)]">
                <tool.icon size={21} className="text-accent" />
                <p className="mt-6 text-sm font-medium text-[#273951]">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1c1e54] px-6 py-24 text-white">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-xl bg-white/[0.07] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
              <group.icon size={26} className="text-[#b9b9f9]" />
              <h3 className="mt-5 text-2xl font-light">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/75">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f9fc] px-6 py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase text-accent">Projects</p>
            <h2 className="text-4xl font-light leading-tight text-[#0d253d] md:text-5xl">Experiments, clearly labeled.</h2>
            <p className="mt-5 text-lg font-light leading-8 text-[#64748d]">Learning projects and prototypes, not inflated startup claims.</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project) => (
              <article key={project.title} className="rounded-xl bg-white p-5 shadow-[0_18px_46px_rgba(13,37,61,0.07)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-light text-[#0d253d]">{project.title}</h3>
                  <span className="rounded-full bg-[#b9b9f9] px-3 py-1 text-xs font-medium uppercase text-[#4434d4]">{project.status}</span>
                </div>
                <p className="mt-3 leading-7 text-[#64748d]">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 rounded-xl bg-[#f5e9d4] p-8 md:p-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase text-accent">About</p>
            <h2 className="text-4xl font-light leading-tight text-[#0d253d] md:text-5xl">A Class 12 student learning through execution.</h2>
            <p className="mt-5 max-w-3xl text-lg font-light leading-8 text-[#273951]">
              I am interested in technology, finance, automation, and entrepreneurship. I enjoy turning ideas into usable products and learning through execution.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span key={interest} className="rounded-full bg-white px-3 py-2 text-sm font-medium text-[#273951] shadow-[0_6px_18px_rgba(13,37,61,0.06)]">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-7xl rounded-xl bg-white p-8 shadow-[0_24px_60px_rgba(13,37,61,0.08)] md:p-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-sm font-medium uppercase text-accent">Contact</p>
              <h2 className="text-4xl font-light leading-tight text-[#0d253d] md:text-5xl">Let&apos;s build something useful.</h2>
              <p className="mt-5 max-w-2xl text-lg font-light leading-8 text-[#64748d]">
                I&apos;m always interested in discussing technology, business systems, automation, and practical ideas.
              </p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-white transition-colors hover:bg-accent-hover">
              Contact me <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
