"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import BrandMark from "@/components/BrandMark";
import MissionClock from "@/components/MissionClock";

const NAV_LINKS = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "Process", href: "/#process" },
  { name: "Research", href: "/research" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-bg/85 backdrop-blur-md border-b border-border py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="T−0 home"
            className="shrink-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <BrandMark height={34} priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="link-draw text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <MissionClock className="text-[11px] text-accent border border-accent-line bg-[var(--accent-dim)] rounded px-2.5 py-1.5" />
            <Link
              href="/#contact"
              className="text-sm font-medium bg-accent text-white px-5 py-2.5 rounded-lg transition-all duration-300 hover:bg-accent-dark hover:shadow-[0_8px_20px_-8px_rgba(0,147,214,0.6)]"
            >
              Contact
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`w-6 h-[2px] bg-text-primary transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-text-primary transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-text-primary transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col justify-center items-center px-6 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-7 w-full max-w-sm">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.06 * i }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-text-primary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <div className="w-full h-px bg-border my-2" />

              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-accent text-white py-4 rounded-xl text-lg font-semibold hover:bg-accent-dark transition-colors"
              >
                Contact
              </Link>

              <MissionClock className="text-xs text-text-tertiary mt-2" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
