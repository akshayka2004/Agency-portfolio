"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
    <nav className="fixed top-0 left-0 w-full z-[100] border-b-4 border-primary-container px-4 md:px-6 py-4 bg-background/95 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl md:text-4xl font-black italic tracking-tighter hover:text-primary-container transition-colors">
          NUESTRO
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-12 font-black uppercase text-sm tracking-widest">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-neon-green transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/#contact" className="hidden sm:block bg-primary-container text-black px-6 py-2 font-black uppercase text-xs tracking-tighter border-2 border-black hover:bg-white transition-all active:translate-y-1">
            Start a riot
          </Link>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary-container p-2 flex items-center justify-center relative z-[110]"
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
            className="fixed inset-0 bg-black z-[105] md:hidden flex flex-col"
          >
            <div className="flex flex-col h-full p-8 pt-32 overflow-y-auto">
              {/* Header duplicate for consistency */}
              <div className="absolute top-0 left-0 w-full p-4 px-6 flex justify-between items-center border-b-4 border-primary-container bg-black">
                <Link onClick={() => setIsMenuOpen(false)} href="/" className="text-3xl font-black italic tracking-tighter">NUESTRO</Link>
                {/* Spacer for toggle button which stays on top */}
                <div className="w-12"></div>
              </div>

              <div className="flex flex-col gap-10 mt-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link onClick={() => setIsMenuOpen(false)} href={link.href} className="group block">
                      <span className="text-primary-container font-black text-xs tracking-widest block mb-2 opacity-50">{link.id}</span>
                      <span className="text-6xl font-black uppercase tracking-tighter hover:text-neon-green transition-colors block">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-12 pb-8">
                <Link onClick={() => setIsMenuOpen(false)} href="/#contact" className="block bg-primary-container text-black px-8 py-6 font-black uppercase text-2xl tracking-tighter border-4 border-black text-center active:translate-y-2 hover:bg-white transition-all shadow-[0_0_50px_rgba(60,249,26,0.2)]">
                  Start a riot
                </Link>
                <p className="mt-8 text-[10px] font-black uppercase opacity-40 text-center tracking-[0.5em]">
                  NO RIGHTS RESERVED // 2026
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
