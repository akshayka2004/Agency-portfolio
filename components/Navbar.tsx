"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Manifesto", href: "/manifesto", id: "01 // THE CORE" },
    { name: "Works", href: "/works", id: "02 // INTEL" },
    { name: "Contact", href: "/#contact", id: "03 // TRANSMISSION" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-border px-4 md:px-6 py-3 md:py-4 bg-surface/95 backdrop-blur-md transition-all text-text-primary">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="text-3xl md:text-5xl font-bold tracking-tighter hover:text-accent transition-colors leading-none font-[family-name:var(--font-museo-moderno)]">
          T-0
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 lg:gap-12 font-semibold text-sm tracking-widest text-text-secondary">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-accent transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link href="/#contact" className="hidden sm:block bg-accent text-surface px-5 md:px-6 py-2.5 rounded-[10px] font-semibold uppercase text-xs tracking-wide hover:bg-accent-hover hover:-translate-y-0.5 transition-all shadow-[0_6px_16px_rgba(22,163,74,0.25)] whitespace-nowrap">
            Start a project
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-primary p-1 flex items-center justify-center relative z-[110]"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-4xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl border-b border-border z-[105] md:hidden shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-10">


              <div className="flex flex-col gap-6 mt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link onClick={() => setIsMenuOpen(false)} href={link.href} className="group block">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-2xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">
                          {link.name}
                        </span>
                        <span className="material-symbols-outlined text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                          arrow_forward
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 border-t border-border/50">
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="/#contact"
                  className="block bg-accent text-surface rounded-[10px] px-6 py-4 font-bold text-center hover:bg-accent-hover transition-all"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
