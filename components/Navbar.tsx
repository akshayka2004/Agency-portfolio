"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Capabilities", href: "/#capabilities", id: "01" },
    { name: "Research", href: "/research", id: "02" },
    { name: "Case Studies", href: "/works", id: "03" },
    { name: "Innovation Lab", href: "/#innovation-lab", id: "04" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-border/50 bg-surface/80 backdrop-blur-xl transition-all text-text-primary">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-sm">
            <span className="font-mono font-bold text-white text-xs group-hover:scale-110 transition-transform">T-0</span>
          </div>
          <span className="font-bold tracking-tight text-xl hidden sm:block">Engineering</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 font-medium text-xs tracking-widest text-text-secondary uppercase">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-accent transition-colors flex items-center gap-2">
              <span className="text-[9px] opacity-50 font-mono">{link.id}</span>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <Link href="/#contact" className="hidden sm:block border border-border hover:border-accent text-text-primary px-5 py-2.5 rounded-sm font-medium uppercase text-xs tracking-wider hover:text-accent transition-all whitespace-nowrap">
            Book Session
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-primary p-2 border border-border/50 rounded-sm flex items-center justify-center relative z-[110]"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
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
            className="absolute top-full left-0 w-full bg-surface/95 backdrop-blur-2xl border-b border-border z-[105] md:hidden shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-8">
              <div className="flex flex-col gap-6 mt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link onClick={() => setIsMenuOpen(false)} href={link.href} className="group block">
                      <div className="flex items-center gap-4 py-2 border-b border-border/20">
                        <span className="text-xs font-mono text-text-secondary">{link.id}</span>
                        <span className="text-xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">
                          {link.name}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="/#contact"
                  className="block bg-accent text-white rounded-sm px-6 py-4 font-bold text-center uppercase tracking-widest text-sm hover:bg-accent-hover transition-all"
                >
                  Book Strategy Session
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
