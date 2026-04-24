"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Waves } from "@/components/ui/wave-background";
import { ProcessScroller } from "@/components/ProcessScroller";

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
    <div className="grain-overlay scanlines min-h-screen bg-background text-foreground selection:bg-neon-green selection:text-black overflow-x-hidden">
      <main className="pt-16 md:pt-24">

        {/* ── Hero Section ── */}
        <section id="hero" className="min-h-[100svh] flex flex-col justify-center items-center text-center px-4 md:px-6 relative overflow-hidden border-b-4 border-primary-container">
          <div className="absolute inset-0 z-0">
            <Waves className="h-full w-full opacity-80" strokeColor="#3cf91a" backgroundColor="#0c1609" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none"></div>
          </div>

          <div className="relative z-10 w-full flex flex-col items-center pointer-events-none gap-6 px-2">
            <h1 className="text-[clamp(2.8rem,13vw,10rem)] font-black uppercase tracking-tighter leading-[0.85] drop-shadow-[0_0_30px_rgba(0,0,0,1)]">
              CODE BEFORE BED.
            </h1>
            <p className="text-sm sm:text-base md:text-xl font-bold uppercase tracking-widest max-w-xl opacity-90 mx-auto drop-shadow-[0_0_15px_rgba(0,0,0,1)] text-white leading-snug">
              We&apos;re a small agency that ships products faster than most people finish their first coffee.
            </p>
            <div className="pointer-events-auto">
              <Link href="#contact" className="bg-primary-container text-black px-8 sm:px-12 py-4 sm:py-5 font-black uppercase text-base sm:text-xl md:text-2xl tracking-tighter border-4 border-black hover:bg-white transition-all active:translate-y-1 shadow-[0_0_30px_rgba(60,249,26,0.15)] inline-block">
                Start a project
              </Link>
            </div>
          </div>
        </section>

        {/* ── Manifesto Banner ── */}
        <section id="manifesto" className="bg-primary-container text-black py-12 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 border-y-8 border-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[clamp(3rem,14vw,12rem)] font-black italic tracking-tighter leading-none mb-8 sm:mb-12">MANIFESTO</h2>
            <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-end md:gap-12">
              <p className="text-[clamp(1.1rem,4vw,3.75rem)] font-black uppercase leading-[0.95] max-w-4xl">
                NO TEMPLATES. NO &ldquo;SOMEDAY&rdquo; PROJECTS. <br />
                <span className="bg-black text-primary-container px-2">WE BUILD REAL PRODUCTS FROM MIDNIGHT IDEAS AND MORNING MIMI LIVES.</span>
              </p>
              <div className="group flex items-center gap-3 text-sm sm:text-base md:text-xl font-black uppercase tracking-tighter border-b-4 md:border-b-8 border-black pb-2 hover:italic whitespace-nowrap cursor-pointer self-start md:self-auto shrink-0">
                OUR NIGHTS ARE OUR LAB
                <span className="material-symbols-outlined text-2xl md:text-4xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Collective ── */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-start">
            <div>
              <h3 className="text-[clamp(2rem,7vw,3.75rem)] font-black uppercase tracking-tighter mb-6 md:mb-8 leading-tight">T Minus 0 Studio</h3>
              <p className="text-base md:text-xl font-medium opacity-70 leading-relaxed">
                Two founders who started building apps in college, turning 2 a.m. ideas into live products by sunrise. We don&apos;t hide behind &ldquo;account managers.&rdquo; You talk to the people who actually wrote the code and shipped the thing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div className="aspect-square border-4 border-primary-container p-4 sm:p-6 md:p-8 flex flex-col justify-end hover:bg-primary-container hover:text-black transition-all group">
                <span className="text-4xl sm:text-6xl md:text-7xl font-black italic mb-2 sm:mb-4">01</span>
                <span className="text-sm sm:text-xl md:text-2xl font-black uppercase">Idea at Night</span>
              </div>
              <div className="aspect-square bg-primary-container text-black p-4 sm:p-6 md:p-8 flex flex-col justify-end border-4 border-primary-container hover:bg-black hover:text-primary-container transition-all group">
                <span className="text-4xl sm:text-6xl md:text-7xl font-black italic mb-2 sm:mb-4">02</span>
                <span className="text-sm sm:text-xl md:text-2xl font-black uppercase">Launch by Morning</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── System Protocols ── */}
        <section id="services" className="bg-[#0a1208] py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-y-4 border-primary-container">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-12 md:mb-20 border-b-4 border-primary-container pb-6 md:pb-8 gap-2 sm:gap-4">
              <h2 className="text-[clamp(2.2rem,8vw,5rem)] font-black uppercase tracking-tighter">System Protocols</h2>
              <span className="text-primary-container font-black text-base sm:text-lg md:text-2xl italic tracking-widest shrink-0">// AGENCY READY</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 border-4 border-primary-container">
              <div className="p-6 sm:p-8 md:p-12 border-b-4 sm:border-b-0 sm:border-r-4 border-primary-container hover:bg-primary-container hover:text-black transition-all group">
                <span className="material-symbols-outlined text-5xl sm:text-6xl md:text-8xl mb-4 sm:mb-8 block">brush</span>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">Brutal UI/UX</h4>
                <div className="h-2 w-16 bg-primary-container group-hover:bg-black mb-4 sm:mb-6"></div>
                <p className="text-sm sm:text-base md:text-lg font-bold opacity-80">Clean, focused interfaces that get out of the user&apos;s way. We design for people who open apps late at night and expect them to just work, not to impress Dribbble.</p>
              </div>

              <div className="p-6 sm:p-8 md:p-12 border-b-4 sm:border-b-0 sm:border-r-4 border-primary-container hover:bg-primary-container hover:text-black transition-all group">
                <span className="material-symbols-outlined text-5xl sm:text-6xl md:text-8xl mb-4 sm:mb-8 block">terminal</span>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">Core Systems</h4>
                <div className="h-2 w-16 bg-primary-container group-hover:bg-black mb-4 sm:mb-6"></div>
                <p className="text-sm sm:text-base md:text-lg font-bold opacity-80">Custom backends and APIs built to scale, not to show off. Rust, Go, TypeScript&mdash;we like systems that survive traffic spikes and our own sleep deprived merges.</p>
              </div>

              <div className="p-6 sm:p-8 md:p-12 hover:bg-primary-container hover:text-black transition-all group">
                <span className="material-symbols-outlined text-5xl sm:text-6xl md:text-8xl mb-4 sm:mb-8 block">bolt</span>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">Rapid Deployment</h4>
                <div className="h-2 w-16 bg-primary-container group-hover:bg-black mb-4 sm:mb-6"></div>
                <p className="text-sm sm:text-base md:text-lg font-bold opacity-80">From concept to live URL in hours, not quarters. If we can finish it before morning comes, so can your MVP.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Late Night Launches (Featured Works) ── */}
        <section id="works" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
          <h2 className="text-[clamp(2.5rem,12vw,10rem)] font-black uppercase tracking-tighter mb-8 sm:mb-12 text-outline leading-none">Late Night <br />Launches</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:gap-12">
            <Link href="/works" className="group relative border-4 border-primary-container overflow-hidden block">
              <div className="aspect-video sm:aspect-auto sm:h-[300px] md:h-[500px] relative">
                <Image src="/assets/drawing app.png" fill alt="Air Drawing" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all flex flex-col justify-end p-4 sm:p-6 md:p-12">
                <span className="text-primary-container font-black tracking-widest text-[10px] sm:text-xs md:text-sm mb-2 uppercase">// GESTURE CONTROL</span>
                <h3 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase leading-none">AIR DRAWING APP</h3>
              </div>
            </Link>
            <Link href="/works" className="group relative border-4 border-primary-container overflow-hidden block">
              <div className="aspect-video sm:aspect-auto sm:h-[300px] md:h-[500px] relative">
                <Image src="/assets/face sorter.png" fill alt="Face Finder" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all flex flex-col justify-end p-4 sm:p-6 md:p-12">
                <span className="text-primary-container font-black tracking-widest text-[10px] sm:text-xs md:text-sm mb-2 uppercase">// COMPUTER VISION</span>
                <h3 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase leading-none">FACE FINDER</h3>
              </div>
            </Link>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link href="/works" className="inline-block bg-transparent text-primary-container border-4 border-primary-container px-6 sm:px-12 py-3 sm:py-4 font-black uppercase text-sm sm:text-xl hover:bg-primary-container hover:text-black transition-all">
              View full project archive
            </Link>
          </div>
        </section>

        {/* ── Process Scroller ── */}
        <ProcessScroller />

        {/* ── Testimonials ── */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#0a1208] border-b-4 border-primary-container">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[clamp(2.5rem,10vw,5rem)] font-black uppercase tracking-tighter mb-10 sm:mb-20 text-outline">What they say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary-container border-4 border-primary-container shadow-[8px_8px_0px_0px_rgba(57,255,20,0.1)] md:shadow-[20px_20px_0px_0px_rgba(57,255,20,0.1)]">
              <div className="bg-background p-6 sm:p-8 md:p-12 flex flex-col justify-between gap-8">
                <p className="text-lg sm:text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight">&ldquo;They didn&apos;t just build an app; they shipped it before we even finished our second call.&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 sm:w-12 h-2 bg-primary-container shrink-0"></div>
                  <span className="font-black uppercase tracking-tighter opacity-70 text-[10px] sm:text-xs md:text-base">CTO / NEON UNDERGROUND</span>
                </div>
              </div>
              <div className="bg-background p-6 sm:p-8 md:p-12 flex flex-col justify-between gap-8">
                <p className="text-lg sm:text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight">&ldquo;T Minus <span className="font-[family-name:var(--font-jetbrains-mono)] [font-variant-numeric:slashed-zero] text-[1.2em]">0</span> turned our WhatsApp sketch idea into a production product faster than we could cancel our next meeting.&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 sm:w-12 h-2 bg-primary-container shrink-0"></div>
                  <span className="font-black uppercase tracking-tighter opacity-70 text-[10px] sm:text-xs md:text-base">FOUNDER / VOID PROTOCOL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact Section ── */}
        <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-24 items-start">
            <div className="md:col-span-5">
              <h2 className="text-[clamp(3rem,11vw,8rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12">TALK IS FREE. <br />SLEEP IS PRICELESS.</h2>
              <p className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-tight opacity-70 mb-8 md:mb-16 max-w-sm">
                Reach out if you have an idea you want to ship, not just to &ldquo;look at options.&rdquo; We don&apos;t do templates; we do working products.
              </p>
              <div className="space-y-4 sm:space-y-8">
                <a href="mailto:riot@tminus0.agency" className="block text-2xl sm:text-3xl md:text-5xl font-black underline decoration-primary-container decoration-4 md:decoration-8 underline-offset-8 hover:text-primary-container transition-all break-all">riot@tminus<span className="font-[family-name:var(--font-jetbrains-mono)] [font-variant-numeric:slashed-zero]">0</span>.agency</a>
                <div className="text-xl sm:text-2xl md:text-4xl font-black opacity-50">+1 (555) BORN-TO-DEPLOY</div>
              </div>
            </div>

            <div className="md:col-span-7 border-4 md:border-8 border-primary-container p-5 sm:p-8 md:p-16 bg-black shadow-[8px_8px_0px_0px_rgba(57,255,20,0.1)] md:shadow-[30px_30px_0px_0px_rgba(57,255,20,0.1)]">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-12">
                <div className="space-y-3">
                  <label className="block font-black uppercase tracking-tighter text-xs md:text-sm opacity-50">WHO ARE YOU?</label>
                  <input
                    name="name"
                    required
                    className="w-full bg-transparent border-b-2 md:border-b-4 border-primary-container/20 py-2 sm:py-4 font-black text-base sm:text-xl md:text-2xl uppercase focus:outline-none focus:border-primary-container transition-all text-white placeholder-white/20"
                    placeholder="Your name or your startup's name."
                    type="text"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block font-black uppercase tracking-tighter text-xs md:text-sm opacity-50">THE MISSION</label>
                  <textarea
                    name="mission"
                    required
                    className="w-full bg-transparent border-b-2 md:border-b-4 border-primary-container/20 py-2 sm:py-4 font-black text-base sm:text-xl md:text-2xl uppercase focus:outline-none focus:border-primary-container transition-all h-20 sm:h-28 md:h-32 text-white placeholder-white/20 resize-none"
                    placeholder="What's the first product you want to ship with us?"
                  ></textarea>
                </div>
                <button
                  disabled={formStatus === "submitting"}
                  className="w-full bg-neon-green text-black p-4 sm:p-6 md:p-8 font-black uppercase text-lg sm:text-2xl md:text-3xl tracking-tighter hover:bg-white hover:scale-[1.02] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50"
                >
                  {formStatus === "submitting" ? "TRANSMITTING..." : "SUBMIT PROJECT INTEL"}
                </button>
                {formStatus === "success" && <p className="text-neon-green font-black uppercase tracking-widest text-xs sm:text-base text-center">INTEL RECEIVED. WE&apos;LL BE IN TOUCH.</p>}
                {formStatus === "error" && <p className="text-red-500 font-black uppercase tracking-widest text-xs sm:text-base text-center">TRANSMISSION FAILED. TRY AGAIN.</p>}
              </form>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
