"use client";

import Link from "next/link";
import { Rocket, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-24 px-6 bg-white border-t border-border/50 text-text-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white shadow-lg shadow-accent/20">
                <Rocket size={24} />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase">Akshay.Dev</span>
            </Link>
            <p className="text-xl text-text-secondary font-medium max-w-sm leading-relaxed">
              Architecting the next generation of SaaS products through high-velocity engineering and precision design.
            </p>
          </div>

          {/* Nav Column */}
          <div className="md:col-span-3 flex flex-col gap-8">
            <span className="font-black text-[10px] uppercase tracking-[0.4em] text-accent">Navigation</span>
            <div className="flex flex-col gap-4 text-lg font-black text-text-primary uppercase tracking-tight">
              <Link className="hover:text-accent transition-colors" href="/">Home</Link>
              <Link className="hover:text-accent transition-colors" href="#works">Works</Link>
              <Link className="hover:text-accent transition-colors" href="#skills">Skills</Link>
              <Link className="hover:text-accent transition-colors" href="#contact">Contact</Link>
            </div>
          </div>

          {/* Social Column */}
          <div className="md:col-span-3 flex flex-col gap-8">
            <span className="font-black text-[10px] uppercase tracking-[0.4em] text-accent">Ecosystem</span>
            <div className="flex flex-col gap-4 text-lg font-black text-text-primary uppercase tracking-tight">
              <a className="flex items-center gap-2 hover:text-accent transition-colors" href="#"><Twitter size={20} /> Twitter</a>
              <a className="flex items-center gap-2 hover:text-accent transition-colors" href="#"><Linkedin size={20} /> LinkedIn</a>
              <a className="flex items-center gap-2 hover:text-accent transition-colors" href="#"><Github size={20} /> GitHub</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-border/50 pt-12 gap-8">
          <div className="flex flex-col gap-2">
            <div className="font-black text-[10px] tracking-[0.3em] text-text-secondary uppercase">
              © 2026 Akshay.Dev // ALL RIGHTS RESERVED
            </div>
            <p className="text-sm text-text-secondary font-medium">Built with Next.js, Tailwind, and Passion.</p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4">
            <span className="font-black text-2xl text-text-primary uppercase tracking-tighter">Ready to Scale?</span>
            <Link href="#contact" className="text-accent font-black text-xl hover:translate-x-2 transition-transform flex items-center gap-2 uppercase tracking-tighter">
              Let&apos;s build the future →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
