"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { navLinks } from "@/lib/site-content";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={clsx("fixed left-0 top-0 z-50 w-full transition-all duration-300", isScrolled ? "py-3" : "py-5")}>
      <div className="mx-auto flex w-[calc(100%-2rem)] max-w-[1440px] items-center justify-between border border-[#1c221d]/10 bg-[#f5f0e8]/90 px-5 py-3 backdrop-blur-xl md:px-6">
        <Link href="/" className="z-50 font-heading text-xl font-semibold tracking-[-0.05em] text-[#1c221d]">
          atharv<span className="text-[#f05d45]">.</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className={clsx("rounded-full px-4 py-2 text-sm font-medium transition-colors", pathname === link.path ? "bg-[#1c221d] text-white" : "text-[#566156] hover:bg-white hover:text-[#1c221d]")}>
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-[#f05d45] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#d94b35]">
            Work with me
          </Link>
        </nav>

        <button className="-mr-2 z-50 p-2 text-[#1c221d] md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="absolute left-4 right-4 top-[calc(100%+0.5rem)] border border-[#1c221d]/10 bg-[#f5f0e8] shadow-[0_18px_45px_rgba(17,19,24,0.1)] md:hidden">
            <nav className="flex flex-col gap-6 px-6 py-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.path} onClick={() => setMobileMenuOpen(false)} className={clsx("text-lg font-medium", pathname === link.path ? "text-[#f05d45]" : "text-[#566156] hover:text-[#f05d45]")}>
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 rounded-full bg-[#f05d45] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[#d94b35]">
                Work with me
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
