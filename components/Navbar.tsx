"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Solutions", href: "/#capabilities" },
  { name: "Research", href: "/research" },
  { name: "Case Studies", href: "/works" },
  { name: "Industries", href: "/#industries" },
  { name: "Insights", href: "/#insights" },
  { name: "Company", href: "/#company" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-bg/90 backdrop-blur-md border-b border-border shadow-sm py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex flex-col justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-xl font-bold tracking-tight text-text-primary">
              T-0 Engineering
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact / CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              href="mailto:contact@t-0.engineering" 
              className="text-sm font-medium text-text-primary hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/#contact" 
              className="bg-text-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent transition-colors shadow-sm"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-[2px] bg-text-primary transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[2px]" : "-translate-y-1"}`}></span>
            <span className={`w-6 h-[2px] bg-text-primary transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`w-6 h-[2px] bg-text-primary transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[2px]" : "translate-y-1"}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center gap-8 w-full max-w-sm">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-text-primary hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-px bg-border my-4"></div>
              <Link 
                href="/#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-text-primary text-white py-4 rounded-xl text-lg font-semibold hover:bg-accent transition-colors shadow-sm"
              >
                Book Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
