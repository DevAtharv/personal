"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { contactEmail } from "@/lib/site-content";

export default function ContactFab() {
  const subject = "Website inquiry";
  const body = "Hi Atharv,\n\nI want to discuss an idea, workflow, automation, or business system.\n\nMy email:\nMy LinkedIn/social profile:\nDetails:";
  const mailUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <motion.a
      href={mailUrl}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full bg-accent p-4 text-white shadow-[0_16px_42px_rgba(20,99,255,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-accent-hover md:bottom-8 md:right-8"
      aria-label="Email Atharv"
    >
      <Mail size={24} />
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-white px-3 py-2 text-sm font-medium text-[#111318] shadow-[0_12px_34px_rgba(17,19,24,0.08)] md:block">
        Email me
      </span>
    </motion.a>
  );
}
