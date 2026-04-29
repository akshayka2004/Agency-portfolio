"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MeshGradient } from "@/components/ui/mesh-gradient";
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
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
      <main className="w-full">

        {/* ── 1. HERO (Primary: 100vh) ── */}
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[linear-gradient(to_bottom,#F8FAFC,#FFFFFF)] py-20">
          <MeshGradient />
          <div className="w-full max-w-[1100px] mx-auto px-6 relative z-10 flex flex-col items-center text-center gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-8"
            >

              
              <h1 className="text-[clamp(3rem,10vw,7.5rem)] font-bold tracking-tighter leading-[0.95] text-[#0F172A]">
                Turn your roadmap into <span className="text-accent italic">revenue</span> in weeks.
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-2xl text-[#64748B] leading-relaxed">
                High-velocity product engineering for founders who need to ship fast, scale deep, and win markets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mt-4">
                <Link href="#contact" className="group bg-[#16A34A] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent-hover hover:scale-[1.03] hover:-translate-y-1 transition-all shadow-[0_20px_40px_rgba(22,163,74,0.3)] flex items-center gap-3">
                  Start Your Build
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">bolt</span>
                </Link>
                <Link href="https://calendly.com" className="bg-white text-[#0F172A] border border-border/80 px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#F8FAFC] hover:-translate-y-1 transition-all shadow-sm flex items-center gap-3">
                  Book Strategy Call
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. PROOF (Small: 60vh) ── */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center bg-white border-y border-border/10 py-20">
          <div className="w-full max-w-[1100px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            <div className="flex flex-col items-center text-center gap-3">
              <span className="text-5xl md:text-6xl font-bold text-[#0F172A] tracking-tighter">24+</span>
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Products Shipped</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <span className="text-5xl md:text-6xl font-bold text-[#0F172A] tracking-tighter">14d</span>
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Avg. Launch</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <span className="text-5xl md:text-6xl font-bold text-[#0F172A] tracking-tighter">100%</span>
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Direct Access</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <span className="text-5xl md:text-6xl font-bold text-[#0F172A] tracking-tighter">0</span>
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Middlemen</span>
            </div>
          </div>
        </section>

        {/* ── 3. WORKS (Primary: 100vh) ── */}
        <section id="works" className="min-h-screen flex flex-col items-center justify-center bg-white py-20">
          <div className="w-full max-w-[1100px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">The Portfolio</span>
                <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tighter leading-none text-[#0F172A]">Real-World Results<span className="text-accent">.</span></h2>
              </div>
              <Link href="/works" className="group text-accent font-bold uppercase text-xs tracking-[0.3em] border-b-2 border-accent/20 hover:border-accent transition-all pb-1 flex items-center gap-2">
                All Projects <span className="material-symbols-outlined text-lg">east</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Project 1 */}
              <Link href="/works" className="group flex flex-col gap-6">
                <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl border border-border/30 bg-[#F8FAFC]">
                  <Image src="/assets/drawing app.png" fill alt="Air Drawing" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-3xl font-bold text-[#0F172A]">Air Drawing App</h3>
                  <div className="flex items-center gap-3 py-3 border-y border-border/50">
                    <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Outcome: Instant gesture rendering</span>
                  </div>
                </div>
              </Link>

              {/* Project 2 */}
              <Link href="/works" className="group flex flex-col gap-6">
                <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl border border-border/30 bg-[#F8FAFC]">
                  <Image src="/assets/face sorter.png" fill alt="Face Finder" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-3xl font-bold text-[#0F172A]">Face Finder</h3>
                  <div className="flex items-center gap-3 py-3 border-y border-border/50">
                    <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Outcome: 10k+ images delivered daily</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 4. WHY WORK WITH US (Secondary: 80vh) ── */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F8FAFC] border-y border-border/20 py-20">
          <div className="w-full max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
            <div className="flex flex-col gap-6">
              <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">Why Us</span>
              <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tighter leading-[1.1] text-[#0F172A]">Zero Bloat. <br />Maximum Output.</h2>
              <p className="text-lg text-[#64748B] font-medium leading-relaxed max-w-lg">
                We work directly with founders to build scalable products. No account managers, no ambiguity.
              </p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <motion.div variants={fadeInItem} className="bg-white p-8 rounded-2xl shadow-lg border border-border/30">
                <h4 className="text-lg font-bold mb-2 text-[#0F172A]">AI-Native</h4>
                <p className="text-[#64748B] text-sm font-medium">Built with intelligence at the core.</p>
              </motion.div>
              <motion.div variants={fadeInItem} className="bg-white p-8 rounded-2xl shadow-lg border border-border/30">
                <h4 className="text-lg font-bold mb-2 text-[#0F172A]">Velocity</h4>
                <p className="text-[#64748B] text-sm font-medium">Enterprise ERP in weeks, not years.</p>
              </motion.div>
              <motion.div variants={fadeInItem} className="bg-white p-8 rounded-2xl shadow-lg border border-border/30">
                <h4 className="text-lg font-bold mb-2 text-[#0F172A]">Scalability</h4>
                <p className="text-[#64748B] text-sm font-medium">Multi-tenant SaaS ready systems.</p>
              </motion.div>
              <motion.div variants={fadeInItem} className="bg-white p-8 rounded-2xl shadow-lg border border-border/30">
                <h4 className="text-lg font-bold mb-2 text-[#0F172A]">Precision</h4>
                <p className="text-[#64748B] text-sm font-medium">Automated workflows with 0% bloat.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── 5. PROCESS (Secondary: 80vh) ── */}
        <section id="services" className="min-h-[80vh] flex flex-col items-center justify-center bg-white py-20">
          <div className="w-full max-w-[1100px] mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-16 gap-4">
              <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">The Protocols</span>
              <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tighter leading-none text-[#0F172A]">Predictable Launch Cycles.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
              <div className="flex flex-col gap-4 text-center items-center">
                <span className="text-3xl font-bold text-accent/20">01</span>
                <h4 className="font-bold text-[#0F172A]">Blueprint</h4>
                <p className="text-xs text-[#64748B] font-medium leading-relaxed">Technical audit and scope mapping.</p>
              </div>
              <div className="flex flex-col gap-4 text-center items-center">
                <span className="text-3xl font-bold text-accent/20">02</span>
                <h4 className="font-bold text-[#0F172A]">Forge</h4>
                <p className="text-xs text-[#64748B] font-medium leading-relaxed">High-velocity engineering sprints.</p>
              </div>
              <div className="flex flex-col gap-4 text-center items-center">
                <span className="text-3xl font-bold text-accent/20">03</span>
                <h4 className="font-bold text-[#0F172A]">Hardening</h4>
                <p className="text-xs text-[#64748B] font-medium leading-relaxed">Security and performance audit.</p>
              </div>
              <div className="flex flex-col gap-4 text-center items-center">
                <span className="text-3xl font-bold text-accent/20">04</span>
                <h4 className="font-bold text-[#0F172A]">Launch</h4>
                <p className="text-xs text-[#64748B] font-medium leading-relaxed">Production-ready deployment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Visualizer */}
        <div className="w-full bg-white">
          <ProcessScroller />
        </div>

        {/* ── 6. CTA (Primary: 100vh) ── */}
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-[#F1F5F9] border-t border-border/20 py-20">
          <div className="w-full max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">Transmission</span>
                <h2 className="text-[clamp(3rem,8vw,5rem)] font-bold tracking-tighter leading-tight text-[#0F172A]">Ship your idea this quarter.</h2>
                <p className="text-lg font-medium text-[#64748B] max-w-sm leading-relaxed">
                  We reply within 12 hours with a direct audit of your project mission.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a href="mailto:hello@t0.agency" className="text-xl font-bold text-accent hover:text-accent-hover transition-colors">hello@t0.agency</a>
                <Link href="https://calendly.com" className="font-bold text-[#0F172A] hover:text-accent transition-colors flex items-center gap-2">
                  Book Strategy Call →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-border/30 rounded-3xl shadow-2xl p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-2">
                  <label className="block font-bold text-[10px] text-accent uppercase tracking-widest">Company / Founder</label>
                  <input
                    name="name"
                    required
                    className="w-full bg-transparent border-b-2 border-border/30 py-4 font-bold text-xl focus:outline-none focus:border-accent transition-colors text-[#0F172A] placeholder-[#94A3B8]"
                    placeholder="Who are we building for?"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-bold text-[10px] text-accent uppercase tracking-widest">Project Mission</label>
                  <textarea
                    name="mission"
                    required
                    className="w-full bg-transparent border-b-2 border-border/30 py-4 font-bold text-xl focus:outline-none focus:border-accent transition-colors h-32 text-[#0F172A] placeholder-[#94A3B8] resize-none"
                    placeholder="What are we shipping?"
                  ></textarea>
                </div>
                <button
                  disabled={formStatus === "submitting"}
                  className="w-full bg-[#16A34A] text-white p-6 rounded-2xl font-bold text-xl hover:bg-accent-hover hover:scale-[1.01] hover:-translate-y-1 transition-all shadow-[0_20px_40px_rgba(22,163,74,0.25)]"
                >
                  {formStatus === "submitting" ? "Launching..." : "Initialize Build"}
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
