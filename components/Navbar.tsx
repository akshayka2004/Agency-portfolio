"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Briefcase, Mail, Menu, X, Rocket } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Journey", href: "#about", icon: <Briefcase size={16} /> },
    { name: "Capabilities", href: "#skills", icon: <LayoutGrid size={16} /> },
    { name: "Case Studies", href: "#works", icon: <Rocket size={16} /> },
    { name: "Connect", href: "#contact", icon: <Mail size={16} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-border/50 py-3' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
            <Rocket size={20} />
          </div>
          <span className="text-xl font-black tracking-tighter text-text-primary uppercase">Akshay.Dev</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-surface/50 backdrop-blur-md border border-border/50 rounded-full p-1 shadow-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold text-text-secondary hover:text-accent hover:bg-accent/5 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="#contact" className="hidden sm:flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-accent-hover hover:-translate-y-0.5 transition-all shadow-lg shadow-accent/20">
            Hire Me
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-primary p-2 rounded-xl bg-surface/50 border border-border/50 relative z-[110]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-surface z-[105] md:hidden flex flex-col p-8 pt-24"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    onClick={() => setIsMenuOpen(false)} 
                    href={link.href} 
                    className="flex flex-col gap-1 group"
                  >
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">0{i + 1}</span>
                    <span className="text-4xl font-black tracking-tighter text-text-primary group-hover:text-accent transition-colors uppercase">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-10">
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="#contact"
                className="block w-full bg-accent text-white rounded-2xl py-6 font-black text-xl text-center shadow-2xl shadow-accent/20"
              >
                START A PROJECT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
