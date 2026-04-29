"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-24 sm:py-32 px-6 bg-[#FFFFFF] border-t border-border/40 text-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col gap-8">
            <div className="text-[clamp(4rem,10vw,8rem)] font-bold tracking-tighter leading-none font-[family-name:var(--font-museo-moderno)]">
              T-<span className="text-accent">0</span>
            </div>
            <p className="text-xl text-[#64748B] font-medium max-w-sm leading-relaxed">
              We design and build bespoke digital experiences for forward-thinking brands who want to ship fast and stay relevant.
            </p>
          </div>

          {/* Nav Column */}
          <div className="md:col-span-3 flex flex-col gap-8">
            <span className="font-bold text-[10px] uppercase tracking-[0.4em] text-accent">Navigation</span>
            <div className="flex flex-col gap-4 text-lg font-bold text-[#0F172A]">
              <Link className="hover:text-accent transition-colors" href="/">Home</Link>
              <Link className="hover:text-accent transition-colors" href="/works">Works</Link>
              <Link className="hover:text-accent transition-colors" href="/#services">Services</Link>
              <Link className="hover:text-accent transition-colors" href="/#contact">Contact</Link>
            </div>
          </div>

          {/* Social Column */}
          <div className="md:col-span-3 flex flex-col gap-8">
            <span className="font-bold text-[10px] uppercase tracking-[0.4em] text-accent">Socials</span>
            <div className="flex flex-col gap-4 text-lg font-bold text-[#0F172A]">
              <a className="hover:text-accent transition-colors" href="https://twitter.com">Twitter / X</a>
              <a className="hover:text-accent transition-colors" href="https://linkedin.com">LinkedIn</a>
              <a className="hover:text-accent transition-colors" href="https://instagram.com">Instagram</a>
              <a className="hover:text-accent transition-colors" href="https://github.com">GitHub</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-border/40 pt-12 gap-8">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-xs tracking-widest text-[#64748B] uppercase">
              © 2026 T-0 Studio. All rights reserved.
            </div>
            <p className="text-sm text-[#64748B] font-medium">Built for the high-performance digital era.</p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4">
            <span className="font-bold text-2xl text-[#0F172A]">Have a vision?</span>
            <Link href="/#contact" className="text-accent font-bold text-xl hover:translate-x-2 transition-transform flex items-center gap-2">
              Let&apos;s make it happen <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
