"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import MissionClock from "@/components/MissionClock";

/** `section` ids are tracked for the sliding active indicator; route links are not. */
const NAV_LINKS = [
  { name: "Services", href: "/#services", section: "services" },
  { name: "Work", href: "/#work", section: "work" },
  { name: "Process", href: "/#process", section: "process" },
  { name: "Research", href: "/research" },
  { name: "About", href: "/about" },
] as const;

const TRACKED_SECTIONS = ["services", "audiences", "work", "process", "rd", "founders", "contact"];

export default function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [observedSection, setObservedSection] = useState<string | null>(null);

  // Only the homepage has tracked sections; derived so no effect has to clear it.
  const activeSection = pathname === "/" ? observedSection : null;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section owns the viewport so the pill can follow it
  useEffect(() => {
    if (pathname !== "/") return;

    const elements = TRACKED_SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setObservedSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Lock scroll behind the mobile sheet
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close the sheet on Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  const isLinkActive = (link: (typeof NAV_LINKS)[number]) =>
    "section" in link && link.section
      ? pathname === "/" && activeSection === link.section
      : pathname === link.href;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav
          className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 py-4"
          aria-label="Main navigation"
        >
          <div
            className={`flex h-14 items-center justify-between rounded-full border px-3 sm:px-5 transition-[background-color,border-color,box-shadow] duration-300 ${
              isScrolled
                ? "bg-surface/70 backdrop-blur-xl border-border shadow-[0_8px_32px_-12px_rgba(16,22,31,0.18)]"
                : "bg-surface/40 backdrop-blur-md border-border/60"
            }`}
          >
            <Link
              href="/"
              aria-label="T−0 home"
              className="pressable shrink-0 pl-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <BrandMark height={30} priority />
            </Link>

            {/* Desktop links with a shared-layout indicator that slides between items */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      active ? "text-accent" : "text-text-secondary hover:text-text-primary"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-[var(--accent-dim)] border border-accent-line"
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { type: "spring", duration: 0.45, bounce: 0.18 }
                        }
                      />
                    )}
                    <span className="relative">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-2.5">
              <MissionClock className="text-[11px] text-accent border border-accent-line bg-[var(--accent-dim)] rounded-full px-3 py-1.5" />
              <Link
                href="/#contact"
                className="pressable group inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-accent text-white text-xs font-semibold tracking-wide transition-[background-color,box-shadow] duration-200 hover:bg-accent-dark hover:shadow-[0_8px_20px_-8px_rgba(0,147,214,0.65)]"
              >
                Start a conversation
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              type="button"
              className="pressable lg:hidden inline-flex items-center justify-center w-10 h-10 -mr-1 rounded-full text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col justify-center px-8 lg:hidden"
          >
            <nav className="flex flex-col gap-2 w-full max-w-sm mx-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.28,
                    delay: shouldReduceMotion ? 0 : 0.04 * i,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-3xl font-bold tracking-tight text-text-primary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <div className="h-px bg-border my-5" />

              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="pressable inline-flex items-center justify-center gap-2 bg-accent text-white py-4 rounded-full text-base font-semibold hover:bg-accent-dark transition-colors"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Link>

              <MissionClock className="text-xs text-text-tertiary mt-6 text-center" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
