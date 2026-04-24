"use client";

import Image from "next/image";
import Link from "next/link";

export default function Manifesto() {
  return (
    <div className="grain-overlay scanlines min-h-screen bg-black text-white selection:bg-primary-container selection:text-black">
      
      <main className="relative min-h-screen pt-20">
        {/* Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-10" 
             style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '8.333333% 100%'}}>
        </div>

        {/* Hero Header */}
        <header className="relative h-[80vh] w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[60vw] max-w-4xl aspect-square z-0 pointer-events-none opacity-40 mix-blend-screen animate-pulse">
            <img 
              alt="Abstract Chrome Geometric Shape" 
              className="w-full h-full object-contain filter contrast-125 brightness-150 grayscale invert" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9QDU48D8sQlTZGZgmEYjF3HeAlI22h0_NNLkQuFbxPks34MW3Q--1AV266GTSlp2lK_GUe9s4JAPIkJHigaE89PKQ1TqS0e9rsl4j_ts1ODxel7DRilAEMqwu8j3-tANbyk4g3di3Wfw0ps-dLQeShXLSJj4kk5yzl3oj2qUpIX4Mb2O8jEcQZnCJSweIM9me0uc6h07-tj-b6EgRcz_Ncdy-rZRAqOaTeIYH01jC3qH1H4v35gLz4tRl1qU6fam2MShBZI3gUyt3"
            />
          </div>
          <div className="relative z-10 max-w-5xl">
            <p className="text-primary-container uppercase tracking-[0.5em] mb-8 text-sm font-black italic">The Studio Philosophy // v1.<span className="font-[family-name:var(--font-jetbrains-mono)] [font-variant-numeric:slashed-zero]">0</span></p>
            <h1 className="text-[clamp(4rem,15vw,12rem)] font-black leading-[0.85] uppercase tracking-tighter mb-4">
              THE<br/>MANIFESTO
            </h1>
            <div className="w-24 h-1 bg-primary-container mx-auto mt-12 opacity-50"></div>
          </div>
        </header>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-48">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32">
            {/* Rule 01 */}
            <section className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <span className="text-7xl md:text-9xl font-black text-primary-container leading-none italic">01</span>
              </div>
              <div className="md:col-span-10 border-l border-white/10 pl-8 md:pl-12">
                <h2 className="text-[clamp(2rem,8vw,4.5rem)] font-black uppercase tracking-tighter mb-8 leading-none">NO TEMPLATES. NO “SOMEDAY” PROJECTS.</h2>
                <p className="text-xl md:text-2xl text-foreground font-medium opacity-60 leading-relaxed max-w-3xl">
                  We don’t recycle starters or themes. Every project starts from a real problem, not a stock photo. If you can Google it already, we’d rather you ship something new.
                </p>
              </div>
            </section>

            {/* Rule 02 */}
            <section className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <span className="text-7xl md:text-9xl font-black text-primary-container leading-none italic">02</span>
              </div>
              <div className="md:col-span-10 border-l border-white/10 pl-8 md:pl-12">
                <h2 className="text-[clamp(2rem,8vw,4.5rem)] font-black uppercase tracking-tighter mb-8 leading-none">FUNCTION DICTATES FORM.</h2>
                <p className="text-xl md:text-2xl text-foreground font-medium opacity-60 leading-relaxed max-w-3xl">
                  If your app looks cool but doesn’t solve anything, it’s just a screensaver. We design for the people who open the product at 2 a.m. and expect it to work, not just look good.
                </p>
              </div>
            </section>

            {/* Rule 03 */}
            <section className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <span className="text-7xl md:text-9xl font-black text-primary-container leading-none italic">03</span>
              </div>
              <div className="md:col-span-10 border-l border-white/10 pl-8 md:pl-12">
                <h2 className="text-[clamp(2rem,8vw,4.5rem)] font-black uppercase tracking-tighter mb-8 leading-none">MEDIOCRITY IS A DISEASE.</h2>
                <p className="text-xl md:text-2xl text-foreground font-medium opacity-60 leading-relaxed max-w-3xl">
                  Good enough is how side projects die. We push until the app is “good enough to ship,” then we ship it, iterate, and keep improving—because shipping is the only true deadline.
                </p>
              </div>
            </section>

            {/* Rule 04 */}
            <section className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <span className="text-7xl md:text-9xl font-black text-primary-container leading-none italic">04</span>
              </div>
              <div className="md:col-span-10 border-l border-white/10 pl-8 md:pl-12">
                <h2 className="text-[clamp(2rem,8vw,4.5rem)] font-black uppercase tracking-tighter mb-8 leading-none">SPEED IS A FEATURE.</h2>
                <p className="text-xl md:text-2xl text-foreground font-medium opacity-60 leading-relaxed max-w-3xl">
                  Perfection is a luxury busy founders can’t afford. We move fast, ship early, and refine after; we’d rather ship a working MVP than polish a ghost project.
                </p>
              </div>
            </section>

            {/* Rule 05 */}
            <section className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <span className="text-7xl md:text-9xl font-black text-primary-container leading-none italic">05</span>
              </div>
              <div className="md:col-span-10 border-l border-white/10 pl-8 md:pl-12">
                <h2 className="text-[clamp(2rem,8vw,4.5rem)] font-black uppercase tracking-tighter mb-8 leading-none">IF IT DOESN’T WAKE YOU UP, IT’S NOT READY.</h2>
                <p className="text-xl md:text-2xl text-foreground font-medium opacity-60 leading-relaxed max-w-3xl">
                  If using your own product feels like a chore, it’s not a product. It’s a homework assignment. We build things that feel like Saturday, not Sunday morning.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
