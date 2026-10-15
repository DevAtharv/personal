"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { featuredWork, positioning, projects } from "@/lib/site-content";

const rise = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const portraitImage =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85";
const mangoImage =
  "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1400&q=85";
const spiceImage =
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1400&q=85";

function Eyebrow({ children }: { children: string }) {
  return <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f05d45]">{children}</p>;
}

export default function Home() {
  const primaryWork = featuredWork[0];
  const secondaryWork = featuredWork[1];

  return (
    <div className="bg-[#f5f0e8] text-[#1c221d]">
      <section className="hero-grid relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
          <motion.div variants={rise} initial="hidden" animate="visible" transition={{ duration: 0.7 }}>
            <div className="mb-9 flex items-center gap-3 text-sm font-medium text-[#5c665c]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#f05d45]" />
              Available for select business builds
            </div>
            <h1 className="max-w-4xl font-heading text-[clamp(3.55rem,8.3vw,8.6rem)] font-medium leading-[0.88] tracking-[-0.055em] text-[#1c221d]">
              Systems for businesses that want to move.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#515c52] md:text-xl">
              {positioning.subheadline}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/work" className="inline-flex items-center gap-3 rounded-full bg-[#1c221d] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                See selected work <ArrowUpRight size={18} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full border border-[#1c221d]/20 px-6 py-3.5 text-sm font-semibold text-[#1c221d] transition-colors hover:border-[#1c221d] hover:bg-white/50">
                Start a project
              </Link>
            </div>
          </motion.div>

          <motion.div variants={rise} initial="hidden" animate="visible" transition={{ duration: 0.7, delay: 0.12 }} className="relative mx-auto w-full max-w-[570px] lg:mr-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#d9e1cf]">
              <img src={portraitImage} alt="A collaborative business workspace" className="h-full w-full object-cover grayscale-[20%]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(28,34,29,0.55))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/72">Atharv Agarwal</p>
                <p className="mt-3 max-w-sm font-heading text-3xl leading-tight sm:text-4xl">Software, automation, and the operational details in between.</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 max-w-[230px] rounded-2xl bg-[#f05d45] p-5 text-white shadow-[0_22px_50px_rgba(62,45,35,0.22)] sm:-left-8">
              <p className="font-heading text-3xl leading-none">01</p>
              <p className="mt-4 text-sm leading-5 text-white/82">Build useful systems, then make them easier to run.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#1c221d]/12 bg-[#1c221d] px-5 py-5 text-[#f5f0e8] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] items-center gap-8 overflow-hidden whitespace-nowrap text-[clamp(1.45rem,2.8vw,2.4rem)] font-medium tracking-[-0.035em]">
          <span>Websites</span><span className="text-[#f6c443]">*</span><span>Order workflows</span><span className="text-[#f6c443]">*</span><span>Customer communication</span><span className="text-[#f6c443]">*</span><span>Automation</span><span className="text-[#f6c443]">*</span><span>Launch systems</span>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="font-heading text-5xl font-medium leading-[0.92] tracking-[-0.05em] md:text-7xl">Work with a real-world pulse.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#515c52] md:text-xl">
              The work is anchored in operating problems: getting orders under control, keeping customers informed, and creating digital systems a small team can actually use.
            </p>
          </div>

          <article className="mt-16 grid overflow-hidden rounded-[1.5rem] bg-[#20372d] text-white lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[430px] overflow-hidden">
              <img src={mangoImage} alt="Fresh mangoes for Pulps and Leaves" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(20,38,29,0.34),rgba(20,38,29,0.06))]" />
              <div className="absolute left-6 top-6 rounded-full bg-[#f5f0e8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#20372d]">Live business project</div>
            </div>
            <div className="flex flex-col justify-between p-7 sm:p-10">
              <div>
                <p className="text-sm font-medium text-[#f6c443]">{primaryWork.title}</p>
                <h3 className="mt-4 font-heading text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-6xl">Make the business flow.</h3>
                <p className="mt-7 max-w-xl text-base leading-7 text-white/72">{primaryWork.description}</p>
              </div>
              <div className="mt-10 grid gap-6 border-t border-white/18 pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/48">Built</p>
                  <p className="mt-3 text-sm leading-6 text-white/78">Website, order flow, WhatsApp customer updates, and Sheets-based operations.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/48">Business context</p>
                  <p className="mt-3 text-sm leading-6 text-white/78">Live for real orders; supported 150kg order handling and Rs 1.2 lakh sales in under one month.</p>
                </div>
              </div>
              <a href={primaryWork.url ?? "/work"} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[#f6c443] pb-1 text-sm font-semibold text-[#f6c443]">
                Visit live project <ExternalLink size={15} />
              </a>
            </div>
          </article>

          <article className="mt-5 grid overflow-hidden rounded-[1.5rem] bg-[#dd7e50] text-[#211c16] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:order-2">
              <div>
                <p className="text-sm font-semibold text-[#5b2614]">{secondaryWork.status}</p>
                <h3 className="mt-4 font-heading text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-6xl">Launch with the foundation in place.</h3>
                <p className="mt-7 max-w-xl text-base leading-7 text-[#35291f]/78">{secondaryWork.description}</p>
              </div>
              <div className="mt-10 border-t border-[#211c16]/18 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5b2614]">In progress</p>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[#35291f]/80">Website direction, e-commerce setup, product presentation, and a customer experience designed before launch day.</p>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden lg:order-1">
              <img src={spiceImage} alt="Spices for the Vadi Masala launch project" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[#cf5d36]/20 mix-blend-multiply" />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#dce7d3] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <Eyebrow>What I help with</Eyebrow>
            <h2 className="font-heading text-5xl font-medium leading-[0.92] tracking-[-0.05em] md:text-7xl">Useful, not just impressive.</h2>
            <p className="mt-7 max-w-md text-lg leading-8 text-[#465346]">I use AI-assisted development to make practical systems feel lighter for the people who run them every day.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-[#1c221d]/15 bg-[#1c221d]/15 sm:grid-cols-2">
            {[
              ["01", "Customer journeys", "From the first click to the post-order update, make every step easier to understand."],
              ["02", "Order operations", "Simple tracking and visibility so the team can spend less time searching for information."],
              ["03", "Business websites", "A clear, credible home for the business that helps people take the next step."],
              ["04", "Automation", "Reduce repetitive follow-up with practical workflows across WhatsApp, Sheets, and internal tools."],
            ].map(([number, title, copy]) => (
              <article key={number} className="bg-[#dce7d3] p-7 sm:p-9">
                <p className="text-sm font-semibold text-[#f05d45]">{number}</p>
                <h3 className="mt-12 font-heading text-3xl font-medium tracking-[-0.04em]">{title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[#536052]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Eyebrow>Experiments</Eyebrow>
              <h2 className="font-heading text-5xl font-medium leading-[0.92] tracking-[-0.05em] md:text-7xl">Curiosity, kept practical.</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1c221d] underline decoration-[#f05d45] decoration-2 underline-offset-8">
              See all experiments <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="group rounded-[1.5rem] border border-[#1c221d]/14 bg-white/40 p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                <p className="text-sm font-semibold text-[#f05d45]">0{index + 1}</p>
                <h3 className="mt-16 font-heading text-4xl font-medium tracking-[-0.05em]">{project.title}</h3>
                <p className="mt-5 text-sm leading-6 text-[#566156]">{project.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tech.map((tech) => <span key={tech} className="rounded-full border border-[#1c221d]/12 px-3 py-1 text-xs font-semibold text-[#556055]">{tech}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6c443] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Eyebrow>Let&apos;s build</Eyebrow>
            <h2 className="max-w-4xl font-heading text-[clamp(3.8rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.06em]">Have a messy workflow?</h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-xl text-lg leading-8 text-[#3c3318]">Tell me what your business is trying to get done. We can start with the part that is slow, unclear, or still being done by hand.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1c221d] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
              Discuss a project <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
