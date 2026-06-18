"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin } from "lucide-react";
import { contactEmail, linkedInUrl } from "@/lib/site-content";

type FormStatus = "idle" | "submitting" | "success";

function LinkedInMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18v-7.47H5.86V18h2.48ZM7.1 9.51c.86 0 1.4-.57 1.4-1.28-.02-.73-.54-1.28-1.38-1.28-.84 0-1.39.55-1.39 1.28 0 .71.53 1.28 1.35 1.28h.02ZM18.24 18v-4.28c0-2.29-1.22-3.35-2.85-3.35-1.31 0-1.9.72-2.23 1.23v-1.07h-2.48c.03.7 0 7.47 0 7.47h2.48v-4.17c0-.22.02-.45.08-.61.18-.45.58-.91 1.25-.91.88 0 1.24.68 1.24 1.67V18h2.51Z" />
    </svg>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState<{
    status: FormStatus;
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "submitting", message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const social = String(formData.get("social") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `Website inquiry from ${name}${company ? ` at ${company}` : ""}`;
    const body = [
      "New website inquiry",
      "",
      `Name: ${name}`,
      `Brand / Company: ${company || "Not shared"}`,
      `Email: ${email}`,
      `LinkedIn / Social: ${social}`,
      `Phone / WhatsApp: ${phone || "Not shared"}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.reset();
    setFormState({
      status: "success",
      message: "Your inquiry is ready in your email app. Send it from there and I will reply soon.",
    });
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-white px-6 pb-24 pt-32 text-[#0d253d]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[430px] bg-[radial-gradient(circle_at_10%_8%,rgba(245,233,212,0.95),transparent_18rem),radial-gradient(circle_at_48%_4%,rgba(185,185,249,0.62),transparent_20rem),radial-gradient(circle_at_90%_6%,rgba(234,34,97,0.16),transparent_18rem),linear-gradient(90deg,#f5e9d4,#f6f9fc)]" />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase text-accent">Contact</p>
          <h1 className="text-5xl font-light leading-[1.03] text-[#0d253d] md:text-6xl">Let&apos;s build something useful.</h1>
          <p className="mt-6 text-lg font-light leading-8 text-[#273951]">
            I&apos;m always interested in discussing technology, business systems, automation, and new ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-[0_8px_24px_rgba(0,55,112,0.08)]">
              <h3 className="mb-5 text-2xl font-light text-[#0d253d]">Links</h3>
              <div className="space-y-5">
                <a href={`mailto:${contactEmail}`} className="flex items-center gap-4 text-[#273951] transition-colors hover:text-accent">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#b9b9f9] text-[#4434d4]">
                    <Mail size={20} />
                  </span>
                  <span>
                    <span className="block text-sm text-[#64748d]">Email</span>
                    <span className="font-medium">{contactEmail}</span>
                  </span>
                </a>

                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#273951] transition-colors hover:text-accent">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#b9b9f9] text-[#4434d4]">
                    <LinkedInMark />
                  </span>
                  <span>
                    <span className="block text-sm text-[#64748d]">LinkedIn</span>
                    <span className="font-medium">atharv-agarwal</span>
                  </span>
                </a>

                <div className="flex items-center gap-4 text-[#273951]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#b9b9f9] text-[#4434d4]">
                    <MapPin size={20} />
                  </span>
                  <span>
                    <span className="block text-sm text-[#64748d]">Location</span>
                    <span className="font-medium">India, available worldwide</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#f5e9d4] p-6 text-[#273951]">
              <p className="text-sm font-medium uppercase text-accent">Best fit</p>
              <p className="mt-3 text-lg font-light">Technology, business systems, automation, and practical product ideas.</p>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-[0_8px_24px_rgba(0,55,112,0.08)] md:p-8">
              {formState.status === "success" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center py-10 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#b9b9f9] text-[#4434d4]">
                    <CheckCircle2 size={34} />
                  </div>
                  <h3 className="text-3xl font-light text-[#0d253d]">Inquiry Ready</h3>
                  <p className="mt-4 max-w-md text-lg text-[#64748d]">{formState.message}</p>
                  <button
                    type="button"
                    onClick={() => setFormState({ status: "idle", message: "" })}
                    className="mt-8 rounded-full border border-[#e3e8ee] px-5 py-3 font-medium text-[#0d253d] transition-colors hover:bg-[#f6f9fc]"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-[#273951]">Full Name *</label>
                      <input required name="name" type="text" id="name" className="w-full rounded-md border border-[#a8c3de] bg-white px-4 py-3 text-[#0d253d] outline-none transition-all placeholder:text-[#64748d] focus:border-accent focus:ring-1 focus:ring-accent" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-[#273951]">Company / Brand</label>
                      <input name="company" type="text" id="company" className="w-full rounded-md border border-[#a8c3de] bg-white px-4 py-3 text-[#0d253d] outline-none transition-all placeholder:text-[#64748d] focus:border-accent focus:ring-1 focus:ring-accent" placeholder="Brand name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-[#273951]">Email Address *</label>
                      <input required name="email" type="email" id="email" className="w-full rounded-md border border-[#a8c3de] bg-white px-4 py-3 text-[#0d253d] outline-none transition-all placeholder:text-[#64748d] focus:border-accent focus:ring-1 focus:ring-accent" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="social" className="text-sm font-medium text-[#273951]">LinkedIn / Social Profile *</label>
                      <input required name="social" type="text" id="social" className="w-full rounded-md border border-[#a8c3de] bg-white px-4 py-3 text-[#0d253d] outline-none transition-all placeholder:text-[#64748d] focus:border-accent focus:ring-1 focus:ring-accent" placeholder="LinkedIn URL, @handle, or website" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-[#273951]">Phone / WhatsApp</label>
                    <input name="phone" type="tel" id="phone" className="w-full rounded-md border border-[#a8c3de] bg-white px-4 py-3 text-[#0d253d] outline-none transition-all placeholder:text-[#64748d] focus:border-accent focus:ring-1 focus:ring-accent" placeholder="+91 ..." />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-[#273951]">Message *</label>
                    <textarea required name="message" id="message" rows={6} className="w-full resize-none rounded-md border border-[#a8c3de] bg-white px-4 py-3 text-[#0d253d] outline-none transition-all placeholder:text-[#64748d] focus:border-accent focus:ring-1 focus:ring-accent" placeholder="Tell me about the idea, system, workflow, or business problem."></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formState.status === "submitting"}
                    className="w-full rounded-full bg-accent py-4 text-lg font-medium text-white transition-colors duration-300 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {formState.status === "submitting" ? "Preparing..." : "Submit Inquiry"}
                  </button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
