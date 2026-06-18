"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { contactEmail } from "@/lib/site-content";

export default function ContactFab() {
  const subject = "Website inquiry";
  const body = "Hi Atharv,\n\nI want to discuss a project for my brand.\n\nMy email:\nMy LinkedIn/social profile:\nProject details:";
  const mailUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <motion.a
      href={mailUrl}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-lg bg-foreground p-4 text-background shadow-[0_12px_34px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-0.5 md:bottom-8 md:right-8"
      aria-label="Email Atharv"
    >
      <Mail size={24} />
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-foreground/10 bg-background px-3 py-2 text-sm font-semibold text-foreground shadow-xl md:block">
        Email me
      </span>
    </motion.a>
  );
}
