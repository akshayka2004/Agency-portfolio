"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Waves } from "@/components/ui/wave-background";
import { ProcessScroller } from "@/components/ProcessScroller";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeInItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (resp.ok) setFormStatus("success");
      else setFormStatus("error");
    } catch (err) {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-accent/10 selection:text-accent overflow-x-hidden">
      <main className="pt-16 md:pt-0">

        {/* ── 1. HERO: Urgency & Outcome ── */}
        <section id="hero" className="min-h-[95svh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-[linear-gradient(to_bottom,#F8FAFC,#FFFFFF)]">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Waves className="h-full w-full opacity-[0.1]" strokeColor="#16A34A" backgroundColor="transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full flex flex-col items-center gap-10 max-w-6xl"
          >
            <div className="flex items-center gap-3 bg-accent-light text-accent px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-sm border border-accent/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Limited Capacity // 1 Slot Remaining for Q3
            </div>
            
            <h1 className="text-[clamp(3.5rem,11vw,8.5rem)] font-bold tracking-tighter leading-[0.9] text-[#0F172A] max-w-5xl">
              Turn your roadmap into <span className="text-accent italic">revenue</span> in weeks, not months.
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-medium max-w-3xl text-[#64748B] leading-relaxed">
              We specialize in high-velocity product engineering for founders who need to ship fast, scale deep, and win markets.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="#contact" className="group bg-[#16A34A] text-white px-10 py-6 rounded-2xl font-bold text-xl hover:bg-accent-hover hover:scale-[1.03] hover:-translate-y-1.5 transition-all shadow-[0_25px_50px_rgba(22,163,74,0.3)] flex items-center gap-3">
                  Start Your Build
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">bolt</span>
                </Link>
                <Link href="https://calendly.com" className="bg-white text-[#0F172A] border border-border/80 px-10 py-6 rounded-2xl font-bold text-xl hover:bg-[#F8FAFC] hover:-translate-y-1.5 transition-all shadow-xl flex items-center gap-3">
                  Book Strategy Call
                  <span className="material-symbols-outlined">event_available</span>
                </Link>
              </div>
              <p className="text-xs font-bold text-[#94A3B8] tracking-[0.2em] uppercase">
                Zero meetings. All execution. Direct founder access.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── 2. PROOF: Credibility Stats ── */}
        <section className="py-20 bg-white border-y border-border/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 items-center justify-items-center">
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tighter">24+</span>
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Products Shipped</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tighter">14 Days</span>
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Avg. MVP Launch</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tighter">100%</span>
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Engineering Focus</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tighter">0</span>
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Account Managers</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. PROJECTS: Scannable Outcomes ── */}
        <section id="works" className="py-24 sm:py-32 md:py-40 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="flex flex-col gap-5">
                <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">The Portfolio</span>
                <h2 className="text-[clamp(3rem,8vw,5.5rem)] font-bold tracking-tighter leading-none text-[#0F172A]">Real-World Results<span className="text-accent">.</span></h2>
              </div>
              <Link href="/works" className="group text-accent font-bold uppercase text-xs tracking-[0.3em] border-b-2 border-accent/20 hover:border-accent transition-all pb-1 flex items-center gap-2">
                Project Archive <span className="material-symbols-outlined text-lg group-hover:translate-x-1.5 transition-transform">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
              {/* Project 1 */}
              <Link href="/works" className="group flex flex-col gap-10">
                <div className="aspect-[4/3] relative rounded-[40px] overflow-hidden shadow-2xl border border-border/30 bg-[#F8FAFC]">
                  <Image src="/assets/drawing app.png" fill alt="Air Drawing" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="text-4xl font-bold text-[#0F172A] group-hover:text-accent transition-colors">Air Drawing App</h3>
                  <p className="text-[#64748B] text-lg font-medium leading-relaxed">
                    High-performance touchless creative tool built for low-latency spatial interaction.
                  </p>
                  <div className="flex items-center gap-3 py-4 border-y border-border/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Outcome: Instant gesture-to-canvas rendering</span>
                  </div>
                </div>
              </Link>

              {/* Project 2 */}
              <Link href="/works" className="group flex flex-col gap-10">
                <div className="aspect-[4/3] relative rounded-[40px] overflow-hidden shadow-2xl border border-border/30 bg-[#F8FAFC]">
                  <Image src="/assets/face sorter.png" fill alt="Face Finder" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="text-4xl font-bold text-[#0F172A] group-hover:text-accent transition-colors">Face Finder</h3>
                  <p className="text-[#64748B] text-lg font-medium leading-relaxed">
                    Large-scale biometric photo distribution engine for massive event galleries.
                  </p>
                  <div className="flex items-center gap-3 py-4 border-y border-border/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Outcome: Automated delivery of 10k+ images daily</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 4. PROCESS: 4-Step Workflow ── */}
        <section id="services" className="bg-[#F8FAFC] py-24 sm:py-32 md:py-48 px-6 border-y border-border/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              <div className="lg:w-1/3 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">How We Work</span>
                  <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tighter leading-[1.1] text-[#0F172A]"> Predictable <br />Launch Cycles.</h2>
                </div>
                <p className="text-lg text-[#64748B] font-medium leading-relaxed">
                  We don&apos;t do ambiguity. Our process is designed for clarity, speed, and uncompromising technical quality.
                </p>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex flex-col gap-6">
                  <span className="text-5xl font-bold text-accent/20">01</span>
                  <h4 className="text-xl font-bold text-[#0F172A]">Strategic Blueprint</h4>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed">We map out your technical architecture and MVP scope in a single, deep-dive session. No fluff.</p>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="text-5xl font-bold text-accent/20">02</span>
                  <h4 className="text-xl font-bold text-[#0F172A]">Rapid Development</h4>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed">Bi-weekly sprints with live deployment previews. You see your product evolve in real-time.</p>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="text-5xl font-bold text-accent/20">03</span>
                  <h4 className="text-xl font-bold text-[#0F172A]">Technical Audit</h4>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed">Rigorous performance testing and security hardening before we even think about going live.</p>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="text-5xl font-bold text-accent/20">04</span>
                  <h4 className="text-xl font-bold text-[#0F172A]">Seamless Launch</h4>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed">Hands-on deployment and scaling support. We stay with you until the system is bulletproof.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keep the Scroller as a Technical Deep Dive / Interactive Element */}
        <ProcessScroller />

        {/* ── 5. CTA: Direct Transmission ── */}
        <section id="contact" className="py-24 sm:py-32 md:py-48 px-6 bg-[#F1F5F9] border-t border-border/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
              <div className="lg:col-span-5 flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">Final Step</span>
                  <h2 className="text-[clamp(3.5rem,8vw,5.5rem)] font-bold tracking-tighter leading-tight text-[#0F172A]">Ship your idea <span className="text-accent">this quarter.</span></h2>
                  <p className="text-xl font-medium text-[#64748B] max-w-sm leading-relaxed">
                    We only take on 2 projects at a time to ensure maximum focus. Let&apos;s see if we&apos;re a fit.
                  </p>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]">What happens next?</span>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm font-medium text-[#64748B]">
                        <span className="material-symbols-outlined text-accent text-lg">check_circle</span>
                        We reply within 12 hours
                      </li>
                      <li className="flex items-center gap-3 text-sm font-medium text-[#64748B]">
                        <span className="material-symbols-outlined text-accent text-lg">check_circle</span>
                        Direct audit of your project mission
                      </li>
                      <li className="flex items-center gap-3 text-sm font-medium text-[#64748B]">
                        <span className="material-symbols-outlined text-accent text-lg">check_circle</span>
                        Launch-ready estimate provided
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white border border-border/30 rounded-[40px] shadow-2xl p-8 sm:p-14 md:p-20">
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="space-y-2">
                    <label className="block font-bold text-[10px] text-accent uppercase tracking-widest">Your Name / Project Name</label>
                    <input
                      name="name"
                      required
                      className="w-full bg-transparent border-b-2 border-border/30 py-6 font-bold text-2xl focus:outline-none focus:border-accent transition-colors text-[#0F172A] placeholder-[#94A3B8]"
                      placeholder="e.g. Acme Studio"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-bold text-[10px] text-accent uppercase tracking-widest">Project Mission</label>
                    <textarea
                      name="mission"
                      required
                      className="w-full bg-transparent border-b-2 border-border/30 py-6 font-bold text-2xl focus:outline-none focus:border-accent transition-colors h-40 text-[#0F172A] placeholder-[#94A3B8] resize-none"
                      placeholder="What are we building?"
                    ></textarea>
                  </div>
                  <button
                    disabled={formStatus === "submitting"}
                    className="group w-full bg-[#16A34A] text-white p-8 rounded-3xl font-bold text-2xl hover:bg-accent-hover hover:scale-[1.02] hover:-translate-y-1.5 transition-all shadow-[0_30px_60px_rgba(22,163,74,0.3)] disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? "Transmitting..." : "Initialize Launch Sequence"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
