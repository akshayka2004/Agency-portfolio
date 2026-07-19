"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const footerSections = [
    {
      title: "Solutions",
      links: ["Enterprise Software", "AI Implementation", "Hardware Systems", "Cloud Infrastructure", "Technology Consulting"],
    },
    {
      title: "Company",
      links: ["Research", "Capabilities", "Innovation Lab", "Case Studies", "Insights", "Industries", "Careers"],
    },
    {
      title: "Legal & Compliance",
      links: ["Privacy Policy", "Terms of Service", "Security Center", "Compliance", "Vendor Independence"],
    },
  ];

  return (
    <footer className="bg-[#020617] text-[#F8FAFC] py-20 border-t border-border/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-16">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm">
                <span className="font-mono font-bold text-white group-hover:scale-110 transition-transform">T-0</span>
              </div>
              <span className="font-bold tracking-tight text-2xl">Engineering</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              We engineer technology that transforms industries. End-to-end innovation from research to scale.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="https://github.com" className="text-text-secondary hover:text-accent transition-colors">
                GitHub
              </Link>
              <Link href="https://linkedin.com" className="text-text-secondary hover:text-accent transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {footerSections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-accent">{section.title}</h4>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} T-0 Engineering. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
