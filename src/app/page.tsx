"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Mail, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  contactEmail,
  featuredWork,
  githubUrl,
  heroStats,
  interests,
  linkedInUrl,
  projects,
  skillGroups,
  technologies,
} from "@/lib/site-content";

function BentoCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`overflow-hidden rounded-lg border border-white/12 bg-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.article>
  );
}

function ToolBadge({ name, Icon }: { name: string; Icon: LucideIcon }) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-lg bg-black/28 px-4 text-white/80 ring-1 ring-white/10">
      <Icon size={21} className="text-accent" />
      <span className="text-sm font-bold">{name}</span>
    </div>
  );
}

export default function Home() {
  const pulps = featuredWork[0];
  const vadi = featuredWork[1];

  return (
    <div className="min-h-screen overflow-hidden px-4 pb-20 pt-28 md:px-6 md:pt-32">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(125deg,#07170f_0%,#183828_38%,#c06816_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.26),rgba(0,0,0,0.72)),radial-gradient(circle_at_18%_14%,rgba(255,255,255,0.13),transparent_28rem)]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-12">
        <BentoCard className="min-h-[270px] bg-[#d8e0ce]/72 p-6 text-black lg:col-span-6">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-5xl font-heading font-bold tracking-tight md:text-6xl">Hello</p>
                <h1 className="mt-5 text-xl font-semibold md:text-2xl">
                  I&apos;m <span className="text-[#e88614]">Atharv Agarwal</span>,
                </h1>
              </div>
              <Link
                href="/work"
                aria-label="View work"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-black text-white transition-transform hover:-translate-y-0.5"
              >
                <ArrowRight size={22} className="-rotate-45" />
              </Link>
            </div>
            <p className="mt-8 max-w-xl text-base font-medium leading-7 text-black/62 md:text-lg">
              Building software, automations, and digital systems for growing businesses through vibe coding, AI tools, and business execution.
            </p>
          </div>
        </BentoCard>

        <BentoCard className="min-h-[270px] bg-[#f8f3ea] p-5 text-black lg:col-span-3">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/40">Live business</p>
              <h2 className="mt-3 text-3xl font-heading font-bold">{pulps.title}</h2>
              <p className="mt-4 text-sm leading-6 text-black/58">{pulps.visualDetail}</p>
            </div>
            <a
              href={pulps.url || "/work"}
              target={pulps.url ? "_blank" : undefined}
              rel={pulps.url ? "noopener noreferrer" : undefined}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#c85a19]"
            >
              Visit live site <ExternalLink size={15} />
            </a>
          </div>
        </BentoCard>

        <BentoCard className="min-h-[270px] bg-black/78 p-5 text-white lg:col-span-3">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Portfolio</p>
              <h2 className="mt-3 text-3xl font-heading font-bold">Real solutions for real problems.</h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-white/[0.08] p-3">
                  <p className="text-xs font-bold leading-5 text-white/72">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        <BentoCard className="min-h-[230px] bg-[#ffbd2e] p-0 text-black lg:col-span-3">
          <div className="flex h-full flex-col items-center justify-end">
            <div className="mt-8 grid h-32 w-32 place-items-center rounded-full bg-black text-6xl font-heading font-bold text-[#ffbd2e] shadow-2xl">
              A
            </div>
            <div className="mt-5 w-full bg-black/10 p-5 text-center">
              <p className="text-lg font-bold">Class 12 builder</p>
              <p className="mt-1 text-sm font-medium text-black/60">Technology, finance, automation</p>
            </div>
          </div>
        </BentoCard>

        <BentoCard className="min-h-[230px] bg-[#d8e0ce]/72 p-6 text-black lg:col-span-4">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/38">About me</p>
          <h2 className="mt-3 text-3xl font-heading font-bold">I learn by building usable things.</h2>
          <p className="mt-5 text-base leading-7 text-black/62">
            I work with real businesses to understand operational problems, then use vibe coding and AI-assisted tools to create practical systems.
          </p>
        </BentoCard>

        <BentoCard className="min-h-[230px] bg-[#ece9df] p-6 text-black lg:col-span-3">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/38">In progress</p>
          <h2 className="mt-3 text-3xl font-heading font-bold">{vadi.title}</h2>
          <p className="mt-5 text-base leading-7 text-black/62">{vadi.description}</p>
        </BentoCard>

        <BentoCard className="min-h-[230px] bg-[#d88a35]/82 p-6 text-black lg:col-span-2">
          <div className="flex h-full flex-col justify-between">
            <h2 className="text-3xl font-heading font-bold">Work</h2>
            <p className="text-lg font-medium leading-7 text-black/68">Business systems, websites, workflows, launch infrastructure.</p>
            <Link href="/work" className="grid h-14 w-14 place-items-center rounded-full bg-black text-white">
              <ArrowRight size={24} className="-rotate-45" />
            </Link>
          </div>
        </BentoCard>

        <BentoCard className="bg-[#d8e0ce]/70 p-6 text-black lg:col-span-5">
          <h2 className="text-2xl font-heading font-bold md:text-3xl">Featured work</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {featuredWork.map((work) => (
              <div key={work.id} className="rounded-lg bg-black/[0.08] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-lg font-bold">{work.title}</p>
                  <span className="rounded-full bg-black px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {work.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-black/60">{work.visualDetail}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="bg-black/72 p-6 text-white lg:col-span-3">
          <h2 className="text-2xl font-heading font-bold md:text-3xl">Tools I use</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {technologies.slice(0, 8).map((tool) => (
              <ToolBadge key={tool.name} name={tool.name} Icon={tool.icon} />
            ))}
          </div>
        </BentoCard>

        <BentoCard className="bg-[#f45b8e] p-6 text-black lg:col-span-2">
          <div className="flex h-full min-h-56 flex-col justify-between">
            <Sparkles size={28} />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">Experiments</p>
              <h2 className="mt-3 text-3xl font-heading font-bold">Projects</h2>
            </div>
            <Link href="/projects" className="grid h-14 w-14 place-items-center rounded-full bg-black text-white">
              <ArrowRight size={24} className="-rotate-45" />
            </Link>
          </div>
        </BentoCard>

        <BentoCard className="bg-[#d8e0ce]/70 p-6 text-black lg:col-span-2">
          <h2 className="text-2xl font-heading font-bold">Interests</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span key={interest} className="rounded-md bg-black/10 px-3 py-2 text-sm font-bold text-black/68">
                {interest}
              </span>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="bg-black/72 p-6 text-white lg:col-span-5">
          <h2 className="text-2xl font-heading font-bold md:text-3xl">How I build</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-lg bg-white/[0.08] p-4">
                <group.icon size={22} className="text-accent" />
                <p className="mt-3 font-bold">{group.title}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="bg-[#ece9df] p-6 text-black lg:col-span-4">
          <h2 className="text-2xl font-heading font-bold md:text-3xl">Let&apos;s build something useful</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-black/62">
            I&apos;m interested in technology, business systems, automation, and practical product ideas.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 font-bold text-white">
              Contact Me <ArrowRight size={17} />
            </Link>
            <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 rounded-lg bg-black/10 px-5 py-3 font-bold text-black">
              <Mail size={17} /> Email
            </a>
          </div>
        </BentoCard>

        <BentoCard className="bg-[#d88a35]/82 p-4 text-black lg:col-span-3">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "LinkedIn", href: linkedInUrl },
              { label: "GitHub", href: githubUrl },
              { label: "Email", href: `mailto:${contactEmail}` },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="grid aspect-square place-items-center rounded-lg bg-black/18 text-center text-xs font-black uppercase tracking-wider transition-transform hover:-translate-y-0.5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="bg-[#d8e0ce]/70 p-6 text-black lg:col-span-5">
          <h2 className="text-2xl font-heading font-bold md:text-3xl">Project notes</h2>
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="rounded-lg bg-black/[0.08] p-4">
                <p className="font-bold">{project.title}</p>
                <p className="mt-2 text-sm leading-6 text-black/58">{project.status}</p>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </div>
  );
}
