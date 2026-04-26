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
    <div className="min-h-screen bg-bg text-text-primary selection:bg-accent-light selection:text-accent overflow-x-hidden">
      <main className="pt-16 md:pt-24">

        {/* ── Hero Section ── */}
        <section id="hero" className="min-h-[100svh] flex flex-col justify-center items-center text-center px-4 md:px-6 relative overflow-hidden border-b border-border bg-[linear-gradient(to_bottom,#F8FAFC,#F1F5F9)]">
          <div className="absolute inset-0 z-0">
            <Waves className="h-full w-full opacity-20" strokeColor="#16A34A" backgroundColor="transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none"></div>
          </div>

          <div className="relative z-10 w-full flex flex-col items-center pointer-events-none gap-6 px-2">
            <h1 className="text-[clamp(2.8rem,13vw,10rem)] font-bold tracking-tight leading-[1] text-text-primary">
              Code before <span className="text-accent">bed.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl font-medium max-w-xl opacity-90 mx-auto text-text-secondary leading-relaxed">
              We&apos;re a small agency that ships products faster than most people finish their first coffee.
            </p>
            <div className="pointer-events-auto">
              <Link href="#contact" className="bg-accent text-surface px-8 sm:px-12 py-4 sm:py-5 font-semibold text-base sm:text-xl md:text-2xl rounded-[10px] hover:bg-accent-hover hover:-translate-y-0.5 transition-all shadow-[0_6px_16px_rgba(22,163,74,0.25)] inline-block">
                Start a project
              </Link>
            </div>
          </div>
        </section>

        {/* ── Manifesto Banner ── */}
        <section id="manifesto" className="bg-surface text-text-primary py-12 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 border-y border-border shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[clamp(3rem,14vw,12rem)] font-bold tracking-tight leading-none mb-8 sm:mb-12">Manifesto</h2>
            <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-end md:gap-12">
              <p className="text-[clamp(1.1rem,4vw,3.75rem)] font-bold leading-[1.1] max-w-4xl text-text-primary">
                No templates. No &ldquo;someday&rdquo; projects. <br />
                <span className="bg-accent-light text-accent px-3 py-1 rounded-lg mt-2 inline-block">We build real products from midnight ideas and morning mimi lives.</span>
              </p>
              <div className="group flex items-center gap-3 text-sm sm:text-base md:text-xl font-medium tracking-tight border-b-2 border-accent/30 text-accent pb-2 cursor-pointer self-start md:self-auto shrink-0 hover:border-accent">
                Our nights are our lab
                <span className="material-symbols-outlined text-2xl md:text-4xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Collective ── */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-start">
            <div>
              <h3 className="text-[clamp(2rem,7vw,3.75rem)] font-bold tracking-tight mb-6 md:mb-8 leading-tight text-text-primary">T Minus 0 Studio</h3>
              <p className="text-base md:text-xl font-medium text-text-secondary leading-relaxed">
                Two founders who started building apps in college, turning 2 a.m. ideas into live products by sunrise. We don&apos;t hide behind &ldquo;account managers.&rdquo; You talk to the people who actually wrote the code and shipped the thing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div className="aspect-square bg-surface border border-border rounded-[16px] shadow-[0_10px_25px_rgba(0,0,0,0.05)] p-4 sm:p-6 md:p-8 flex flex-col justify-end hover:-translate-y-1 transition-all group">
                <span className="text-4xl sm:text-6xl md:text-7xl font-bold mb-2 sm:mb-4 text-border group-hover:text-accent transition-colors">01</span>
                <span className="text-sm sm:text-xl md:text-2xl font-semibold text-text-primary">Idea at Night</span>
              </div>
              <div className="aspect-square bg-accent-light text-accent rounded-[16px] shadow-[0_10px_25px_rgba(0,0,0,0.05)] p-4 sm:p-6 md:p-8 flex flex-col justify-end hover:-translate-y-1 transition-all group">
                <span className="text-4xl sm:text-6xl md:text-7xl font-bold mb-2 sm:mb-4 text-accent/50">02</span>
                <span className="text-sm sm:text-xl md:text-2xl font-semibold text-accent">Launch by Morning</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── System Protocols ── */}
        <section id="services" className="bg-surface py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-y border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-12 md:mb-20 border-b border-border pb-6 md:pb-8 gap-2 sm:gap-4">
              <h2 className="text-[clamp(2.2rem,8vw,5rem)] font-bold tracking-tight text-text-primary">System Protocols</h2>
              <span className="text-accent font-medium text-base sm:text-lg md:text-xl shrink-0">AGENCY READY</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 sm:p-8 md:p-10 bg-bg border border-border rounded-[16px] shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all group">
                <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 block text-accent">brush</span>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-text-primary">Premium UI/UX</h4>
                <div className="h-1 w-12 bg-accent/30 group-hover:bg-accent rounded-full mb-4 sm:mb-6 transition-all"></div>
                <p className="text-sm sm:text-base md:text-lg text-text-secondary">Clean, focused interfaces that get out of the user&apos;s way. We design for people who expect things to just work, beautifully.</p>
              </div>

              <div className="p-6 sm:p-8 md:p-10 bg-bg border border-border rounded-[16px] shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all group">
                <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 block text-accent">terminal</span>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-text-primary">Core Systems</h4>
                <div className="h-1 w-12 bg-accent/30 group-hover:bg-accent rounded-full mb-4 sm:mb-6 transition-all"></div>
                <p className="text-sm sm:text-base md:text-lg text-text-secondary">Custom backends and APIs built to scale effortlessly. We favor robust systems that handle spikes without breaking a sweat.</p>
              </div>

              <div className="p-6 sm:p-8 md:p-10 bg-bg border border-border rounded-[16px] shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all group">
                <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 block text-accent">bolt</span>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-text-primary">Rapid Deployment</h4>
                <div className="h-1 w-12 bg-accent/30 group-hover:bg-accent rounded-full mb-4 sm:mb-6 transition-all"></div>
                <p className="text-sm sm:text-base md:text-lg text-text-secondary">From concept to live URL in record time. Focus on releasing the MVP swiftly to gather real-world feedback.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Late Night Launches (Featured Works) ── */}
        <section id="works" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
          <h2 className="text-[clamp(2.5rem,12vw,10rem)] font-bold tracking-tight mb-8 sm:mb-12 text-text-primary leading-none">Featured<br />Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <Link href="/works" className="group relative rounded-[16px] border border-border bg-surface overflow-hidden block shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all">
              <div className="aspect-video sm:aspect-auto sm:h-[300px] md:h-[400px] relative">
                <Image src="/assets/drawing app.png" fill alt="Air Drawing" className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10">
                <span className="text-accent font-semibold tracking-wider text-xs sm:text-sm mb-2 uppercase">GESTURE CONTROL</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-text-primary">Air Drawing App</h3>
              </div>
            </Link>
            <Link href="/works" className="group relative rounded-[16px] border border-border bg-surface overflow-hidden block shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all">
              <div className="aspect-video sm:aspect-auto sm:h-[300px] md:h-[400px] relative">
                <Image src="/assets/face sorter.png" fill alt="Face Finder" className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10">
                <span className="text-accent font-semibold tracking-wider text-xs sm:text-sm mb-2 uppercase">COMPUTER VISION</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-text-primary">Face Finder</h3>
              </div>
            </Link>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Link href="/works" className="inline-block bg-transparent text-accent border-2 border-accent-light rounded-[10px] px-8 sm:px-12 py-3 sm:py-4 font-semibold text-sm sm:text-lg hover:bg-accent-light hover:text-accent-hover transition-all">
              View full project archive
            </Link>
          </div>
        </section>

        {/* ── Process Scroller ── */}
        <ProcessScroller />

        {/* ── Testimonials ── */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-bg border-y border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[clamp(2.5rem,8vw,4rem)] font-bold tracking-tight mb-10 sm:mb-16 text-text-primary">What they say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface rounded-[16px] border border-border shadow-[0_10px_25px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-8">
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-text-primary leading-relaxed">&ldquo;They didn&apos;t just build an app; they shipped it before we even finished our second call.&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 sm:w-12 h-1 bg-accent rounded-full shrink-0"></div>
                  <span className="font-semibold uppercase tracking-wider text-xs sm:text-sm text-text-secondary">CTO / NEON UNDERGROUND</span>
                </div>
              </div>
              <div className="bg-surface rounded-[16px] border border-border shadow-[0_10px_25px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-8">
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-text-primary leading-relaxed">&ldquo;T Minus <span className="font-[family-name:var(--font-jetbrains-mono)] [font-variant-numeric:slashed-zero] text-[1.2em]">0</span> turned our sketch idea into a production product faster than we could cancel our next meeting.&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 sm:w-12 h-1 bg-accent rounded-full shrink-0"></div>
                  <span className="font-semibold uppercase tracking-wider text-xs sm:text-sm text-text-secondary">FOUNDER / VOID PROTOCOL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact Section ── */}
        <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-24 items-start">
            <div className="md:col-span-5">
              <h2 className="text-[clamp(3rem,8vw,5rem)] font-bold tracking-tight leading-tight mb-8 md:mb-12 text-text-primary">Let&apos;s build something great.</h2>
              <p className="text-sm sm:text-base md:text-lg font-medium text-text-secondary mb-8 md:mb-16 max-w-sm">
                Reach out if you have an idea you want to ship. We specialize in bringing visions to life quickly, efficiently, and beautifully.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <a href="mailto:hello@tminus0.agency" className="block text-xl sm:text-2xl md:text-3xl font-semibold text-accent hover:text-accent-hover transition-colors break-all">hello@tminus<span className="font-[family-name:var(--font-jetbrains-mono)] [font-variant-numeric:slashed-zero]">0</span>.agency</a>
                <div className="text-lg sm:text-xl md:text-2xl font-medium text-text-secondary">+1 (555) 000-0000</div>
              </div>
            </div>

            <div className="md:col-span-7 bg-surface border border-border rounded-[16px] shadow-[0_10px_25px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="space-y-3">
                  <label className="block font-semibold text-xs md:text-sm text-text-secondary uppercase tracking-wider">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-border py-3 font-medium text-base sm:text-lg focus:outline-none focus:border-accent transition-colors text-text-primary placeholder-[#94A3B8]"
                    placeholder="Your name or company"
                    type="text"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block font-semibold text-xs md:text-sm text-text-secondary uppercase tracking-wider">Project Details</label>
                  <textarea
                    name="mission"
                    required
                    className="w-full bg-transparent border-b border-border py-3 font-medium text-base sm:text-lg focus:outline-none focus:border-accent transition-colors h-24 sm:h-32 text-text-primary placeholder-[#94A3B8] resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  disabled={formStatus === "submitting"}
                  className="w-full bg-accent text-surface p-4 sm:p-5 rounded-[10px] font-semibold text-lg hover:bg-accent-hover hover:-translate-y-0.5 transition-all shadow-[0_6px_16px_rgba(22,163,74,0.25)] disabled:opacity-50 mt-4"
                >
                  {formStatus === "submitting" ? "Sending..." : "Submit Project Inquiry"}
                </button>
                {formStatus === "success" && <p className="text-accent font-medium text-sm text-center mt-4">Message received. We'll be in touch shortly.</p>}
                {formStatus === "error" && <p className="text-red-500 font-medium text-sm text-center mt-4">Something went wrong. Please try again.</p>}
              </form>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
