"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import {
  capabilityGroups,
  developmentStack,
  featuredWork,
  heroStats,
  interests,
  positioning,
  projects,
  proofOfWork,
} from "@/lib/site-content";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function BuilderVisual() {
  const primaryWork = featuredWork[0];

  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-lg bg-[#111318] p-5 text-white shadow-[0_32px_100px_rgba(17,19,24,0.22)]">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#15b8a6]/35 blur-3xl" />
      <div className="absolute -bottom-16 left-8 h-56 w-56 rounded-full bg-[#ff6b4a]/28 blur-3xl" />

      <div className="relative flex items-center justify-between">
        <p className="text-sm text-white/58">business.systems</p>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#111318]">proof first</span>
      </div>

      <div className="relative mt-14">
        <p className="max-w-sm text-4xl font-light leading-tight">
          Software systems that make operations easier to run.
        </p>

        <div className="mt-10 rounded-lg bg-white/[0.08] p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-lg font-medium">{primaryWork.title}</p>
            <span className="rounded-full bg-[#15b8a6] px-3 py-1 text-xs font-medium text-[#071714]">
              {primaryWork.status}
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-white/58">{primaryWork.visualDetail}</p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-2">
          {["Problem", "System", "Impact"].map((item, index) => (
            <div key={item} className="rounded-lg bg-white px-3 py-3 text-[#111318]">
              <p className="text-xs text-[#606873]">0{index + 1}</p>
              <p className="mt-4 text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseStudyBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white p-4">
      <p className="text-xs font-medium uppercase text-[#1463ff]">{label}</p>
      <p className="mt-3 text-sm leading-6 text-[#4c5562]">{value}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#f5f7fb] text-[#111318]">
      <section className="relative isolate px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(circle_at_10%_10%,rgba(20,99,255,0.14),transparent_18rem),radial-gradient(circle_at_48%_4%,rgba(21,184,166,0.18),transparent_22rem),radial-gradient(circle_at_86%_12%,rgba(255,107,74,0.16),transparent_20rem),linear-gradient(180deg,#ffffff,#f5f7fb)]" />

        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55 }}>
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#111318] px-4 py-2 text-sm font-medium text-white">Atharv Agarwal</span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#606873] shadow-[0_12px_34px_rgba(17,19,24,0.06)]">
                {positioning.short}
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-light leading-[1.02] text-[#111318] md:text-7xl">
              {positioning.headline}
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-[#4c5562]">
              {positioning.subheadline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1463ff] px-5 py-3 font-medium text-white transition-colors hover:bg-[#0f4ec7]">
                Work with me <ArrowRight size={17} />
              </Link>
              <Link href="/work" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-[#111318] shadow-[0_12px_34px_rgba(17,19,24,0.07)] transition-colors hover:bg-[#eef3f8]">
                See proof of work
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55, delay: 0.12 }}>
            <BuilderVisual />
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-4">
          {heroStats.map((stat) => (
            <article key={stat.label} className="rounded-lg bg-white p-5 shadow-[0_18px_46px_rgba(17,19,24,0.06)]">
              <p className="text-sm font-medium text-[#111318]">{stat.label}</p>
              <p className="mt-2 text-sm leading-6 text-[#606873]">{stat.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-medium uppercase text-[#1463ff]">Proof of work</p>
              <h2 className="text-4xl font-light leading-tight md:text-6xl">Real systems built for business operations.</h2>
            </div>
            <p className="max-w-2xl text-lg font-light leading-8 text-[#4c5562]">
              Proof here means shipped work, operational systems, customer workflows, and business context. The strongest proof is Pulps & Leaves because it is live and connected to real orders.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {proofOfWork.map((proof) => (
              <article key={proof.label} className="rounded-lg bg-[#f5f7fb] p-5">
                <p className="text-sm font-medium text-[#111318]">{proof.label}</p>
                <p className="mt-3 text-sm leading-6 text-[#606873]">{proof.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-medium uppercase text-[#1463ff]">Featured work</p>
              <h2 className="text-4xl font-light leading-tight md:text-6xl">Problem, system, impact.</h2>
            </div>
            <p className="max-w-2xl text-lg font-light leading-8 text-[#4c5562]">
              Each project is framed by what was broken, what was built, and what changed for the business.
            </p>
          </div>

          <div className="mt-14 grid gap-6">
            {featuredWork.map((work, index) => (
              <motion.article
                key={work.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="grid gap-8 rounded-lg bg-white p-6 shadow-[0_24px_70px_rgba(17,19,24,0.07)] md:p-8 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="flex min-h-72 flex-col justify-between rounded-lg bg-[#111318] p-6 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#111318]">{work.status}</span>
                    {work.url ? (
                      <a href={work.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white">
                        Live <ExternalLink size={14} />
                      </a>
                    ) : null}
                  </div>
                  <div>
                    <p className="text-sm uppercase text-white/42">{work.visualTitle}</p>
                    <h3 className="mt-3 text-4xl font-light md:text-5xl">{work.title}</h3>
                    <p className="mt-4 leading-7 text-white/60">{work.visualDetail}</p>
                  </div>
                </div>

                <div className="self-center">
                  <p className="text-xl font-light leading-9 text-[#27303a]">{work.description}</p>
                  <div className="mt-7 grid gap-3">
                    <CaseStudyBlock label="Problem" value={work.problem} />
                    <CaseStudyBlock label="Solution built" value={work.solution} />
                    <CaseStudyBlock label="Business impact" value={work.impact} />
                  </div>
                  <div className="mt-7 grid gap-2 sm:grid-cols-2">
                    {work.proofPoints.map((point) => (
                      <div key={point} className="flex items-start gap-2 text-sm leading-6 text-[#4c5562]">
                        <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#15b8a6]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="container mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase text-[#1463ff]">How I build</p>
            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              AI-assisted product development stack for rapid building and deployment.
            </h2>
            <p className="mt-5 max-w-xl text-lg font-light leading-8 text-[#4c5562]">
              The tools are secondary. The goal is to understand a business workflow, build a usable system, connect the operations, and improve it with real feedback.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {developmentStack.map((step) => (
              <article key={step.name} className="rounded-lg bg-[#f5f7fb] p-5">
                <step.icon size={22} className="text-[#1463ff]" />
                <h3 className="mt-5 text-xl font-light">{step.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#606873]">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111318] px-6 py-24 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase text-[#15b8a6]">Capability map</p>
              <h2 className="text-4xl font-light leading-tight md:text-5xl">Built around practical business systems.</h2>
            </div>
            <div className="grid gap-4">
              {capabilityGroups.map((group) => (
                <article key={group.title} className="rounded-lg bg-white/[0.07] p-5">
                  <div className="flex items-center gap-3">
                    <group.icon size={22} className="text-[#15b8a6]" />
                    <h3 className="text-xl font-light">{group.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/72">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white px-6 py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase text-[#1463ff]">Experiments</p>
              <h2 className="text-4xl font-light leading-tight md:text-5xl">Side projects, kept in the right place.</h2>
            </div>
            <div className="grid gap-3">
              {projects.map((project) => (
                <article key={project.title} className="grid gap-4 rounded-lg bg-[#f5f7fb] p-5 md:grid-cols-[0.42fr_1fr]">
                  <div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#606873]">{project.status}</span>
                    <h3 className="mt-5 text-2xl font-light">{project.title}</h3>
                  </div>
                  <div>
                    <p className="leading-7 text-[#4c5562]">{project.impact}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span key={item} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[#27303a]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="container mx-auto grid max-w-7xl gap-8 rounded-lg bg-[#111318] p-8 text-white shadow-[0_30px_90px_rgba(17,19,24,0.18)] md:p-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase text-[#15b8a6]">About</p>
            <h2 className="text-4xl font-light leading-tight md:text-5xl">A young builder learning through real business work.</h2>
            <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-white/66">
              I am a Class 12 student focused on building software, automation, and digital systems for small businesses. I learn by shipping useful systems, working with real operational problems, and improving what businesses actually use.
            </p>
          </div>
          <div className="flex content-end flex-wrap gap-2 self-end">
            {interests.map((interest) => (
              <span key={interest} className="rounded-full bg-white/10 px-3 py-2 text-sm text-white/74">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-7xl rounded-lg bg-white p-8 shadow-[0_24px_70px_rgba(17,19,24,0.08)] md:p-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2 text-[#1463ff]">
                <Sparkles size={18} />
                <p className="text-sm font-medium uppercase">Work with me</p>
              </div>
              <h2 className="text-4xl font-light leading-tight md:text-5xl">Build a system for your business.</h2>
              <p className="mt-5 max-w-2xl text-lg font-light leading-8 text-[#4c5562]">
                If your business needs a website, workflow, ordering system, customer communication setup, or automation, send the context and I will reply with next steps.
              </p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#1463ff] px-5 py-3 font-medium text-white transition-colors hover:bg-[#0f4ec7]">
              Discuss a project <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
