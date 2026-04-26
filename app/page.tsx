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
      staggerChildren: 0.2
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

        {/* ── 1. HERO: Instant Clarity ── */}
        <section id="hero" className="min-h-[100svh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden border-b border-border/40 bg-[linear-gradient(to_bottom,#F8FAFC,#FFFFFF)]">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Waves className="h-full w-full opacity-[0.12]" strokeColor="#16A34A" backgroundColor="transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full flex flex-col items-center gap-8 max-w-5xl"
          >
            <div className="bg-accent-light text-accent px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] mb-2 shadow-sm border border-accent/10">
              Premium Digital Product Studio
            </div>
            <h1 className="text-[clamp(3.5rem,11vw,9rem)] font-bold tracking-tighter leading-[0.9] text-[#0F172A]">
              We build <span className="text-accent">high-performance</span> products for high-growth teams.
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium max-w-3xl text-[#64748B] leading-relaxed">
              T-Minus 0 bridges the gap between ambitious ideas and production-ready reality with speed and engineering precision.
            </p>
            
            <div className="flex flex-col items-center gap-6 mt-6">
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="#contact" className="group bg-[#16A34A] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-accent-hover hover:scale-[1.03] hover:-translate-y-1.5 transition-all shadow-[0_25px_50px_rgba(22,163,74,0.3)] flex items-center gap-3">
                  Start a Project
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link href="https://calendly.com" className="bg-white text-[#0F172A] border border-border/60 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#F8FAFC] hover:-translate-y-1.5 transition-all shadow-xl">
                  Book a Strategy Call
                </Link>
              </div>
              <p className="text-sm font-bold text-[#64748B] tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Currently taking on Q3-Q4 projects
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── 2. FEATURED WORK: Scannable Results ── */}
        <section id="works" className="py-24 sm:py-32 md:py-48 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">The Portfolio</span>
                <h2 className="text-[clamp(3rem,8vw,5.5rem)] font-bold tracking-tighter leading-none text-[#0F172A]">Engineered to Scale<span className="text-accent">.</span></h2>
              </div>
              <Link href="/works" className="group text-accent font-bold uppercase text-sm tracking-widest border-b-2 border-accent/20 hover:border-accent transition-all pb-1 flex items-center gap-2">
                All Projects <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">east</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {/* Project 1 */}
              <Link href="/works" className="group flex flex-col gap-10">
                <div className="aspect-[4/3] relative rounded-[32px] overflow-hidden shadow-2xl border border-border/30 bg-[#F8FAFC]">
                  <Image src="/assets/drawing app.png" fill alt="Air Drawing" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#DCFCE7] text-[#166534] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">AI / Computer Vision</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#0F172A] group-hover:text-accent transition-colors">Air Drawing App</h3>
                  <p className="text-[#64748B] text-xl font-medium leading-relaxed">
                    Real-time touchless drawing interface powered by custom gesture recognition.
                  </p>
                  <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined">trending_up</span>
                    Impact: Zero-latency creative freedom
                  </div>
                </div>
              </Link>

              {/* Project 2 */}
              <Link href="/works" className="group flex flex-col gap-10">
                <div className="aspect-[4/3] relative rounded-[32px] overflow-hidden shadow-2xl border border-border/30 bg-[#F8FAFC]">
                  <Image src="/assets/face sorter.png" fill alt="Face Finder" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#DCFCE7] text-[#166534] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">CV / Big Data</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#0F172A] group-hover:text-accent transition-colors">Face Finder</h3>
                  <p className="text-[#64748B] text-xl font-medium leading-relaxed">
                    Automated biometric indexing for large-scale event photo distribution.
                  </p>
                  <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined">trending_up</span>
                    Impact: 95% reduction in manual search time
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 3. WHY WORK WITH US: Trust Pass ── */}
        <section className="py-24 sm:py-32 md:py-48 px-6 bg-[#F8FAFC] border-y border-border/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 text-left">
                  <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">Why T-Minus 0</span>
                  <h2 className="text-[clamp(3rem,8vw,5rem)] font-bold tracking-tighter leading-[1.05] text-[#0F172A]">Zero Bloat. <br />Maximum Output.</h2>
                </div>
                <p className="text-xl text-[#64748B] font-medium leading-relaxed max-w-xl">
                  We don&apos;t have account managers, sales reps, or endless meetings. You work directly with the engineers building your future.
                </p>
                <div className="pt-4">
                  <Link href="#contact" className="inline-flex items-center gap-3 text-accent font-bold uppercase text-sm tracking-[0.2em] group">
                    Our Philosophy <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                  </Link>
                </div>
              </div>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <motion.div variants={fadeInItem} className="bg-white p-8 rounded-3xl shadow-xl border border-border/30 hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-12 h-12 bg-accent-light rounded-2xl flex items-center justify-center text-accent mb-6">
                    <span className="material-symbols-outlined text-3xl">bolt</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#0F172A]">Speed to Market</h4>
                  <p className="text-[#64748B] font-medium text-sm leading-relaxed">We optimize for shipping. Get your MVP live in weeks, not months.</p>
                </motion.div>
                
                <motion.div variants={fadeInItem} className="bg-white p-8 rounded-3xl shadow-xl border border-border/30 hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-12 h-12 bg-accent-light rounded-2xl flex items-center justify-center text-accent mb-6">
                    <span className="material-symbols-outlined text-3xl">verified_user</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#0F172A]">Founder Direct</h4>
                  <p className="text-[#64748B] font-medium text-sm leading-relaxed">Direct access to the architects. No middlemen, no lost requirements.</p>
                </motion.div>

                <motion.div variants={fadeInItem} className="bg-white p-8 rounded-3xl shadow-xl border border-border/30 hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-12 h-12 bg-accent-light rounded-2xl flex items-center justify-center text-accent mb-6">
                    <span className="material-symbols-outlined text-3xl">token</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#0F172A]">Future Proof</h4>
                  <p className="text-[#64748B] font-medium text-sm leading-relaxed">We use the latest tech stacks to ensure your product scales effortlessly.</p>
                </motion.div>

                <motion.div variants={fadeInItem} className="bg-white p-8 rounded-3xl shadow-xl border border-border/30 hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-12 h-12 bg-accent-light rounded-2xl flex items-center justify-center text-accent mb-6">
                    <span className="material-symbols-outlined text-3xl">auto_fix_high</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#0F172A]">Design Driven</h4>
                  <p className="text-[#64748B] font-medium text-sm leading-relaxed">Engineering is nothing without intuition. We design for real users.</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 4. PROCESS: The Flow ── */}
        <section id="services" className="bg-white py-24 sm:py-32 md:py-48 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-24 gap-4">
              <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">The Protocols</span>
              <h2 className="text-[clamp(3rem,8vw,5.5rem)] font-bold tracking-tighter leading-none text-[#0F172A]">Battle-Tested Workflow<span className="text-accent">.</span></h2>
              <p className="text-xl text-[#64748B] max-w-3xl font-medium leading-relaxed">We treat every project as a critical system launch. Precision is non-negotiable.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              <div className="group flex flex-col items-center text-center gap-8">
                <div className="w-24 h-24 rounded-[32px] bg-[#F8FAFC] border border-border/40 flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-5xl">architecture</span>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-2xl font-bold text-[#0F172A]">Architecture</h4>
                  <p className="text-[#64748B] font-medium leading-relaxed">Mapping out scalable foundations before a single line of code is written.</p>
                </div>
              </div>

              <div className="group flex flex-col items-center text-center gap-8">
                <div className="w-24 h-24 rounded-[32px] bg-[#F8FAFC] border border-border/40 flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-5xl">code_blocks</span>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-2xl font-bold text-[#0F172A]">Rapid Forge</h4>
                  <p className="text-[#64748B] font-medium leading-relaxed">High-velocity development cycles with constant testing and feedback loops.</p>
                </div>
              </div>

              <div className="group flex flex-col items-center text-center gap-8">
                <div className="w-24 h-24 rounded-[32px] bg-[#F8FAFC] border border-border/40 flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-5xl">rocket_launch</span>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-2xl font-bold text-[#0F172A]">Deployment</h4>
                  <p className="text-[#64748B] font-medium leading-relaxed">Launching into production with confidence and seamless scaling capabilities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Visualizer (Scroller) */}
        <ProcessScroller />

        {/* ── 5. TRUST: Social Proof ── */}
        <section className="py-24 sm:py-32 md:py-48 px-6 bg-[#F8FAFC] border-y border-border/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
                <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">Testimonials</span>
                <h2 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-tighter leading-[1.1] text-[#0F172A]">Trusted by industry leaders.</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-[40px] p-12 shadow-2xl border border-border/30 relative overflow-hidden group">
                  <p className="text-2xl font-semibold text-[#0F172A] leading-relaxed relative z-10 italic">&ldquo;They didn&apos;t just build an app; they shipped it before we even finished our second call. Radical transparency and unmatched speed.&rdquo;</p>
                  <div className="flex items-center gap-6 mt-12">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-accent text-3xl">person</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#0F172A]">CTO / NEON UNDERGROUND</span>
                      <span className="text-xs font-bold text-[#64748B] uppercase tracking-widest mt-1">High-Scale Distribution</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-12 shadow-2xl border border-border/30 relative overflow-hidden group">
                  <p className="text-2xl font-semibold text-[#0F172A] leading-relaxed relative z-10 italic">&ldquo;T Minus 0 turned our sketch idea into a production product faster than we could cancel our next meeting. Truly agency-ready.&rdquo;</p>
                  <div className="flex items-center gap-6 mt-12">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-accent text-3xl">person</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#0F172A]">FOUNDER / VOID PROTOCOL</span>
                      <span className="text-xs font-bold text-[#64748B] uppercase tracking-widest mt-1">Web3 Infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. CTA: The Final Conversion ── */}
        <section id="contact" className="py-24 sm:py-32 md:py-48 px-6 bg-[#F1F5F9] border-t border-border/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
              <div className="lg:col-span-5 flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">Get in Touch</span>
                  <h2 className="text-[clamp(3.5rem,8vw,5.5rem)] font-bold tracking-tighter leading-tight text-[#0F172A]">Ready to build something <span className="text-accent">legendary?</span></h2>
                  <p className="text-xl font-medium text-[#64748B] max-w-sm leading-relaxed">
                    Stop waiting for the &ldquo;right time.&rdquo; Let&apos;s build and launch it before your competition even hears about it.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Email us directly</span>
                    <a href="mailto:hello@tminus0.agency" className="text-2xl font-bold text-[#0F172A] hover:text-accent transition-colors">hello@tminus0.agency</a>
                  </div>
                  <Link href="https://calendly.com" className="inline-flex items-center font-bold text-[#0F172A] hover:text-accent transition-colors gap-3 text-lg">
                    <span className="material-symbols-outlined">calendar_today</span>
                    Book a strategy call →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white border border-border/30 rounded-[48px] shadow-2xl p-10 sm:p-16">
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="space-y-2">
                    <label className="block font-bold text-xs text-accent uppercase tracking-widest">Full Name / Company</label>
                    <input
                      name="name"
                      required
                      className="w-full bg-transparent border-b-2 border-border/30 py-6 font-bold text-2xl focus:outline-none focus:border-accent transition-colors text-[#0F172A] placeholder-[#94A3B8]"
                      placeholder="Who are we building for?"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-bold text-xs text-accent uppercase tracking-widest">The Mission</label>
                    <textarea
                      name="mission"
                      required
                      className="w-full bg-transparent border-b-2 border-border/30 py-6 font-bold text-2xl focus:outline-none focus:border-accent transition-colors h-40 text-[#0F172A] placeholder-[#94A3B8] resize-none"
                      placeholder="Tell us what we're shipping..."
                    ></textarea>
                  </div>
                  <div className="flex flex-col gap-6">
                    <button
                      disabled={formStatus === "submitting"}
                      className="group w-full bg-[#16A34A] text-white p-8 rounded-3xl font-bold text-2xl hover:bg-accent-hover hover:scale-[1.02] hover:-translate-y-1.5 transition-all shadow-[0_30px_60px_rgba(22,163,74,0.35)] disabled:opacity-50"
                    >
                      {formStatus === "submitting" ? "Launching Transmission..." : "Initialize Project"}
                    </button>
                    <p className="text-center text-xs font-bold text-[#64748B] tracking-widest uppercase">Average response time: &lt; 12 hours</p>
                  </div>
                  {formStatus === "success" && <p className="text-accent font-bold text-lg text-center mt-6">Message received. We&apos;ll be in touch shortly.</p>}
                  {formStatus === "error" && <p className="text-red-500 font-bold text-lg text-center mt-6">Something went wrong. Please try again.</p>}
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
