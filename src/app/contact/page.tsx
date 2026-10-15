"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { contactEmail, linkedInUrl } from "@/lib/site-content";

function LinkedInMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18v-7.47H5.86V18h2.48ZM7.1 9.51c.86 0 1.4-.57 1.4-1.28-.02-.73-.54-1.28-1.38-1.28-.84 0-1.39.55-1.39 1.28 0 .71.53 1.28 1.35 1.28h.02ZM18.24 18v-4.28c0-2.29-1.22-3.35-2.85-3.35-1.31 0-1.9.72-2.23 1.23v-1.07h-2.48c.03.7 0 7.47 0 7.47h2.48v-4.17c0-.22.02-.45.08-.61.18-.45.58-.91 1.25-.91.88 0 1.24.68 1.24 1.67V18h2.51Z" />
    </svg>
  );
}

const emailHref = (subject: string, body: string) =>
  `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] px-5 pb-24 pt-32 text-[#1c221d] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="grid gap-10 border-b border-[#1c221d]/14 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f05d45]">Contact</p>
            <h1 className="max-w-4xl font-heading text-[clamp(3.7rem,8.2vw,8rem)] font-medium leading-[0.86] tracking-[-0.06em]">Let&apos;s make the work easier to run.</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#566156]">
            No long form. Send a short note with the business context and the part that is slow, unclear, or being done manually.
          </p>
        </motion.div>

        <div className="grid gap-5 py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.a
            href={emailHref(
              "Business system inquiry",
              "Hi Atharv,\n\nBusiness / brand:\nWhat is currently slow or unclear:\nWhat I want to improve:\nMy LinkedIn / website:\n\nThanks,"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="group flex min-h-[340px] flex-col justify-between rounded-[1.5rem] bg-[#20372d] p-7 text-white transition-transform hover:-translate-y-1 sm:p-10"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#f6c443]"><Mail size={22} /></span>
              <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#f6c443]">Email</p>
              <h2 className="mt-3 font-heading text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Send a short note.</h2>
              <p className="mt-5 break-all text-base text-white/70">{contactEmail}</p>
            </div>
          </motion.a>

          <motion.a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="group flex min-h-[340px] flex-col justify-between rounded-[1.5rem] bg-[#f05d45] p-7 text-white transition-transform hover:-translate-y-1 sm:p-10"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/14"><LinkedInMark /></span>
              <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white/72">LinkedIn</p>
              <h2 className="mt-3 font-heading text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Start a conversation.</h2>
              <p className="mt-5 text-base text-white/78">atharv-agarwal</p>
            </div>
          </motion.a>
        </div>

        <section className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-[1.5rem] border border-[#1c221d]/14 bg-white/35 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#f05d45]">Good starting point</p>
            <p className="mt-5 text-lg leading-8 text-[#3d493f]">A website, order workflow, customer update process, or an internal system that needs untangling.</p>
          </article>
          <article className="rounded-[1.5rem] border border-[#1c221d]/14 bg-white/35 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#f05d45]">What to include</p>
            <p className="mt-5 text-lg leading-8 text-[#3d493f]">Your business, the current problem, the outcome you want, and a link to your LinkedIn or website.</p>
          </article>
          <article className="rounded-[1.5rem] border border-[#1c221d]/14 bg-white/35 p-7">
            <MapPin size={22} className="text-[#f05d45]" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#f05d45]">Based in India</p>
            <p className="mt-3 text-lg leading-8 text-[#3d493f]">Working remotely with people building practical businesses.</p>
          </article>
        </section>
      </div>
    </div>
  );
}
