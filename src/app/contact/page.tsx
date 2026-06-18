"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Linkedin, Mail, MapPin } from "lucide-react";
import { contactEmail, linkedInUrl } from "@/lib/site-content";

type FormStatus = "idle" | "submitting" | "success";

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
    <div className="min-h-screen px-6 pb-24 pt-32">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-accent">Inquiry</p>
          <h1 className="text-5xl font-heading font-bold md:text-7xl">Tell me what you want to build.</h1>
          <p className="mt-6 text-lg leading-8 text-foreground/60">
            Share your brand, your contact details, and the result you want. I will reply from the correct email address.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            <div className="rounded-lg border border-foreground/10 bg-foreground/[0.03] p-6">
              <h3 className="mb-5 text-2xl font-bold">Contact</h3>
              <div className="space-y-5">
                <a href={`mailto:${contactEmail}`} className="flex items-center gap-4 text-foreground/80 transition-colors hover:text-accent">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Mail size={20} />
                  </span>
                  <span>
                    <span className="block text-sm text-foreground/50">Email</span>
                    <span className="font-semibold">{contactEmail}</span>
                  </span>
                </a>

                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/80 transition-colors hover:text-accent">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Linkedin size={20} />
                  </span>
                  <span>
                    <span className="block text-sm text-foreground/50">LinkedIn</span>
                    <span className="font-semibold">atharv-agarwal</span>
                  </span>
                </a>

                <div className="flex items-center gap-4 text-foreground/80">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin size={20} />
                  </span>
                  <span>
                    <span className="block text-sm text-foreground/50">Location</span>
                    <span className="font-semibold">India, available worldwide</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-accent/20 bg-accent/10 p-6 text-accent">
              <p className="text-sm font-bold uppercase tracking-[0.2em]">Best fit</p>
              <p className="mt-3 text-lg font-semibold">Food, FMCG, D2C, spice, fresh produce, and consumer brands that need orders or inquiries.</p>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="rounded-lg border border-foreground/10 bg-foreground/[0.03] p-5 md:p-8">
              {formState.status === "success" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center py-10 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-green-500/15 text-green-600">
                    <CheckCircle2 size={34} />
                  </div>
                  <h3 className="text-3xl font-bold">Inquiry Ready</h3>
                  <p className="mt-4 max-w-md text-lg text-foreground/68">{formState.message}</p>
                  <button
                    type="button"
                    onClick={() => setFormState({ status: "idle", message: "" })}
                    className="mt-8 rounded-lg border border-foreground/15 px-5 py-3 font-semibold transition-colors hover:bg-foreground/5"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-foreground/80">Full Name *</label>
                      <input required name="name" type="text" id="name" className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-3 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-foreground/80">Company / Brand</label>
                      <input name="company" type="text" id="company" className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-3 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent" placeholder="Brand name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground/80">Email Address *</label>
                      <input required name="email" type="email" id="email" className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-3 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="social" className="text-sm font-semibold text-foreground/80">LinkedIn / Social Profile *</label>
                      <input required name="social" type="text" id="social" className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-3 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent" placeholder="LinkedIn URL, @handle, or website" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground/80">Phone / WhatsApp</label>
                    <input name="phone" type="tel" id="phone" className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-3 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent" placeholder="+91 ..." />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground/80">Project Details *</label>
                    <textarea required name="message" id="message" rows={6} className="w-full resize-none rounded-lg border border-foreground/10 bg-background px-4 py-3 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent" placeholder="Tell me about your brand, current goal, timeline, and what result you want."></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formState.status === "submitting"}
                    className="w-full rounded-lg bg-foreground py-4 text-lg font-bold text-background transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
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
