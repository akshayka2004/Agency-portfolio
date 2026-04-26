"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Waves } from "@/components/ui/wave-background";
import { ProcessScroller } from "@/components/ProcessScroller";
import { motion } from "framer-motion";

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

        {/* ── 1. HERO: Clear Positioning ── */}
        <section id="hero" className="min-h-[90svh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden border-b border-border/40 bg-[linear-gradient(to_bottom,#F8FAFC,#FFFFFF)]">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Waves className="h-full w-full opacity-[0.15]" strokeColor="#16A34A" backgroundColor="transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full flex flex-col items-center gap-8 max-w-5xl"
          >
            <div className="bg-accent-light text-accent px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
              High Performance Studio
            </div>
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold tracking-tighter leading-[0.95] text-[#0F172A]">
              We build digital products for founders who <span className="text-accent italic">ship.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-2xl text-[#64748B] leading-relaxed">
              T-Minus 0 is a lean agency specialized in rapid engineering, uncompromising design, and production-ready MVPs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="#contact" className="bg-[#16A34A] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent-hover hover:scale-[1.02] hover:-translate-y-1 transition-all shadow-[0_20px_40px_rgba(22,163,74,0.2)]">
                Start a Project
              </Link>
              <Link href="https://calendly.com" className="bg-white text-[#0F172A] border border-border px-10 py-5 rounded-xl font-bold text-lg hover:bg-bg hover:-translate-y-1 transition-all shadow-sm">
                Book a Call
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ── 2. FEATURED WORK: Case Study Focus ── */}
        <section id="works" className="py-24 sm:py-32 md:py-48 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">Featured Work</span>
                <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-bold tracking-tighter leading-none text-[#0F172A]">Proven Results<span className="text-accent">.</span></h2>
              </div>
              <Link href="/works" className="text-accent font-bold uppercase text-sm tracking-widest border-b-2 border-accent/20 hover:border-accent transition-all pb-1">
                View All Projects →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              {/* Project 1 */}
              <Link href="/works" className="group flex flex-col gap-8">
                <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl border border-border/30 bg-[#F8FAFC]">
                  <Image src="/assets/drawing app.png" fill alt="Air Drawing" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#DCFCE7] text-[#166534] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">AI / COMPUTER VISION</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#0F172A]">Air Drawing App</h3>
                  <p className="text-[#64748B] text-lg font-medium leading-relaxed">
                    A high-performance gesture-tracking tool for touchless digital creation.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent/70 block mb-1">Problem</span>
                      <p className="text-[12px] font-bold text-[#0F172A]">Tethered Design</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent/70 block mb-1">Solution</span>
                      <p className="text-[12px] font-bold text-[#0F172A]">Zero Latency AI</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent/70 block mb-1">Impact</span>
                      <p className="text-[12px] font-bold text-[#0F172A]">Touchless UI</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Project 2 */}
              <Link href="/works" className="group flex flex-col gap-8">
                <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl border border-border/30 bg-[#F8FAFC]">
                  <Image src="/assets/face sorter.png" fill alt="Face Sorter" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#DCFCE7] text-[#166534] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">WEB3 / DEFI</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#0F172A]">Face Finder</h3>
                  <p className="text-[#64748B] text-lg font-medium leading-relaxed">
                    Automated biometric photo organization for high-scale event galleries.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent/70 block mb-1">Problem</span>
                      <p className="text-[12px] font-bold text-[#0F172A]">Manual Sorting</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent/70 block mb-1">Solution</span>
                      <p className="text-[12px] font-bold text-[#0F172A]">Rapid Biometrics</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent/70 block mb-1">Impact</span>
                      <p className="text-[12px] font-bold text-[#0F172A]">Instant Search</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 3. PROCESS: System Protocols & Scroller ── */}
        <section id="services" className="bg-[#F8FAFC] py-24 sm:py-32 md:py-48 px-6 border-y border-border/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-20 gap-4">
              <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">The Workflow</span>
              <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-bold tracking-tighter leading-none text-[#0F172A]">How We Build<span className="text-accent">.</span></h2>
              <p className="text-lg sm:text-xl text-[#64748B] max-w-2xl font-medium">A structured approach to engineering that prioritizes speed without sacrificing reliability.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="p-10 bg-white rounded-3xl shadow-xl hover:-translate-y-2 transition-all group">
                <span className="material-symbols-outlined text-5xl mb-6 block text-accent">brush</span>
                <h4 className="text-2xl font-bold mb-4 text-[#0F172A]">Premium UI/UX</h4>
                <p className="text-[#64748B] font-medium leading-relaxed">Clean, focused interfaces that prioritize user flow and aesthetic precision. We don't do generic.</p>
              </div>

              <div className="p-10 bg-white rounded-3xl shadow-xl hover:-translate-y-2 transition-all group">
                <span className="material-symbols-outlined text-5xl mb-6 block text-accent">terminal</span>
                <h4 className="text-2xl font-bold mb-4 text-[#0F172A]">Core Systems</h4>
                <p className="text-[#64748B] font-medium leading-relaxed">Custom backends and scalable infrastructure built for longevity and extreme performance spikes.</p>
              </div>

              <div className="p-10 bg-white rounded-3xl shadow-xl hover:-translate-y-2 transition-all group">
                <span className="material-symbols-outlined text-5xl mb-6 block text-accent">bolt</span>
                <h4 className="text-2xl font-bold mb-4 text-[#0F172A]">Rapid Launch</h4>
                <p className="text-[#64748B] font-medium leading-relaxed">We favor shipping over endless cycles. Get your product into the hands of real users in weeks, not months.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Visualizer (Scroller) */}
        <ProcessScroller />

        {/* ── 4. TRUST: Testimonials & Stats ── */}
        <section className="py-24 sm:py-32 md:py-48 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">Trust Signals</span>
                  <h2 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-tighter leading-[1.1] text-[#0F172A]">Relentless Quality Control<span className="text-accent">.</span></h2>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                  <div>
                    <span className="text-4xl font-bold text-accent block mb-1">24+</span>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Products Shipped</p>
                  </div>
                  <div>
                    <span className="text-4xl font-bold text-accent block mb-1">100%</span>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Direct Access</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="bg-[#F8FAFC] rounded-3xl p-10 border border-border/40 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                    <span className="material-symbols-outlined text-9xl">format_quote</span>
                  </div>
                  <p className="text-2xl font-semibold text-[#0F172A] leading-relaxed relative z-10">&ldquo;They didn&apos;t just build an app; they shipped it before we even finished our second call. Radical transparency.&rdquo;</p>
                  <div className="flex items-center gap-4 mt-10">
                    <div className="w-12 h-1.5 bg-accent rounded-full"></div>
                    <span className="font-bold uppercase tracking-widest text-xs text-[#64748B]">CTO / NEON UNDERGROUND</span>
                  </div>
                </div>

                <div className="bg-[#F8FAFC] rounded-3xl p-10 border border-border/40 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                    <span className="material-symbols-outlined text-9xl">format_quote</span>
                  </div>
                  <p className="text-2xl font-semibold text-[#0F172A] leading-relaxed relative z-10">&ldquo;T Minus 0 turned our sketch idea into a production product faster than we could cancel our next meeting.&rdquo;</p>
                  <div className="flex items-center gap-4 mt-10">
                    <div className="w-12 h-1.5 bg-accent rounded-full"></div>
                    <span className="font-bold uppercase tracking-widest text-xs text-[#64748B]">FOUNDER / VOID PROTOCOL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. CTA: Contact Section ── */}
        <section id="contact" className="py-24 sm:py-32 md:py-48 px-6 bg-[#F1F5F9] border-t border-border/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
              <div className="lg:col-span-5 flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">Transmission</span>
                  <h2 className="text-[clamp(3rem,8vw,5rem)] font-bold tracking-tighter leading-tight text-[#0F172A]">Let&apos;s build something great.</h2>
                  <p className="text-lg font-medium text-[#64748B] max-w-sm leading-relaxed">
                    We specialize in bringing visions to life quickly, efficiently, and beautifully. Fill out the form or book a call.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <a href="mailto:hello@tminus0.agency" className="text-2xl font-bold text-accent hover:text-accent-hover transition-colors">hello@tminus0.agency</a>
                  <Link href="https://calendly.com" className="inline-flex items-center font-bold text-[#0F172A] hover:text-accent transition-colors gap-2">
                    Book a Strategy Call →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white border border-border/30 rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16">
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-2">
                    <label className="block font-bold text-[10px] text-accent uppercase tracking-widest">Full Name</label>
                    <input
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-border/50 py-4 font-bold text-lg focus:outline-none focus:border-accent transition-colors text-[#0F172A] placeholder-[#94A3B8]"
                      placeholder="Your name or company"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-bold text-[10px] text-accent uppercase tracking-widest">Project Mission</label>
                    <textarea
                      name="mission"
                      required
                      className="w-full bg-transparent border-b border-border/50 py-4 font-bold text-lg focus:outline-none focus:border-accent transition-colors h-32 text-[#0F172A] placeholder-[#94A3B8] resize-none"
                      placeholder="Tell us about the product you want to ship..."
                    ></textarea>
                  </div>
                  <button
                    disabled={formStatus === "submitting"}
                    className="w-full bg-[#16A34A] text-white p-6 rounded-xl font-bold text-xl hover:bg-accent-hover hover:scale-[1.01] hover:-translate-y-1 transition-all shadow-[0_20px_40px_rgba(22,163,74,0.2)] disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Submit Project Inquiry"}
                  </button>
                  {formStatus === "success" && <p className="text-accent font-bold text-sm text-center mt-6">Message received. We'll be in touch shortly.</p>}
                  {formStatus === "error" && <p className="text-red-500 font-bold text-sm text-center mt-6">Something went wrong. Please try again.</p>}
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
