"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { navLinks } from "@/lib/site-content";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto flex w-[calc(100%-2rem)] max-w-7xl items-center justify-between rounded-full bg-white/[0.86] px-5 py-3 shadow-[0_18px_50px_rgba(17,19,24,0.08)] backdrop-blur-xl md:px-6">
        {/* Logo */}
        <Link href="/" className="z-50 font-heading text-xl font-semibold text-[#111318]">
          atharv<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.path ? "bg-[#f0f5ff] text-accent" : "text-[#4c5562] hover:bg-[#f5f7fb] hover:text-[#111318]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Let's Talk
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="-mr-2 z-50 p-2 text-[#111318] md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-lg bg-white shadow-[0_18px_45px_rgba(17,19,24,0.1)] md:hidden"
          >
            <nav className="flex flex-col py-6 px-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "text-lg font-medium",
                    pathname === link.path ? "text-accent" : "text-[#4c5562] hover:text-accent"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 rounded-full bg-accent text-white font-medium text-center hover:bg-accent-hover transition-colors"
              >
                Let's Talk
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
