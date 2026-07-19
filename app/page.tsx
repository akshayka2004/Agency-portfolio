"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-accent/10 selection:text-accent overflow-x-hidden pt-28">
      <main className="w-full">
        
        {/* ── 1. HERO ── */}
        <section className="relative min-h-[85vh] flex items-center bg-bg">
          <div className="w-full max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-10"
            >
              <h1 className="text-[clamp(3rem,5vw,4.5rem)] font-bold tracking-tight leading-[1.1] text-text-primary">
                Every industry eventually becomes a technology industry. <br />
                <span className="text-accent">We help build what's next.</span>
              </h1>

              <p className="text-xl text-text-secondary leading-relaxed max-w-lg">
                Research-driven software, AI and digital systems built for organizations that refuse to stand still.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="#contact" className="bg-text-primary text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-accent-dark transition-colors shadow-sm flex items-center justify-center">
                  Start a Conversation
                </Link>
                <Link href="/works" className="bg-surface border border-border text-text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface-secondary transition-colors flex items-center justify-center">
                  View Our Work
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative aspect-square"
            >
              <div className="w-full h-full bg-surface-secondary rounded-[2rem] border border-border overflow-hidden flex items-center justify-center relative shadow-sm">
                 <span className="material-symbols-outlined text-8xl text-border absolute">bubble_chart</span>
                 <p className="text-sm font-semibold text-text-secondary absolute bottom-8 left-8">T-0.DEV</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. WHO WE ARE ── */}
        <section className="py-32 bg-surface border-y border-border">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-text-primary mb-10 leading-tight">
              We help organizations replace complexity with systems that make better decisions possible.
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              Every engagement begins with understanding the problem, not choosing the technology. We believe the best technology is almost invisible. It solves problems without creating new ones.
            </p>
          </div>
        </section>

        {/* ── 3. CAPABILITIES ── */}
        <section id="capabilities" className="py-32 bg-bg border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { title: "Software", desc: "Platforms people rely on every day." },
                { title: "Artificial Intelligence", desc: "Practical intelligence built around real workflows." },
                { title: "Automation", desc: "Removing repetitive work without removing human control." },
                { title: "Research", desc: "Turning uncertainty into informed engineering decisions." }
              ].map((cap, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <h3 className="text-3xl font-bold text-text-primary">{cap.title}</h3>
                  <p className="text-xl text-text-secondary leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 4. COMPANY / PHILOSOPHY ── */}
        <section id="company" className="py-32 bg-accent-dark text-white">
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-[1fr_1.5fr] gap-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Philosophy</h2>
            </div>
            <div className="flex flex-col gap-8 text-2xl leading-relaxed text-white/90">
              <p>We don't chase trends.</p>
              <p>Technology changes every year. Strong engineering doesn't.</p>
              <p>Every decision we make—from architecture to deployment—is guided by one principle: build systems that remain valuable long after today's tools have changed.</p>
              <p>That's why we begin with understanding the problem before selecting the technology.</p>
              <p>Because the right answer is rarely the newest one.</p>
            </div>
          </div>
        </section>

        {/* ── 5. CONTACT CTA ── */}
        <section id="contact" className="py-40 bg-bg">
          <div className="max-w-[800px] mx-auto px-6 text-center flex flex-col items-center gap-10">
            <h2 className="text-[clamp(3.5rem,6vw,5rem)] font-bold tracking-tight text-text-primary leading-[1.05]">
              Start With a Conversation.
            </h2>
            <p className="text-xl text-text-secondary max-w-lg">
              Every meaningful partnership starts with understanding the problem. No sales pitch. No pressure. Just a conversation about where you're trying to go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <Link href="mailto:hello@t-0.dev" className="bg-text-primary text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-accent-dark transition-colors shadow-sm flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
