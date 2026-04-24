"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div
      ref={ref}
      className="group border-b border-white/10 overflow-hidden scroll-mt-24"
    >
      {/* Image Block */}
      <div className="relative overflow-hidden h-[240px] sm:h-[320px] md:h-[420px] bg-black/20">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="w-full h-full"
        >
          <img
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            src={project.image}
            alt={project.title}
          />
        </motion.div>
        {/* Overlay Label */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-primary-container text-black px-2 sm:px-3 py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">
            {project.label || "INTEL"}
          </span>
        </div>
      </div>

      {/* Text Block */}
      <div className="p-5 sm:p-8 md:p-12 bg-black/40 backdrop-blur-sm">
        <div className="flex justify-between items-baseline mb-4 sm:mb-6">
          <span className="text-primary-container/40 font-black text-xs sm:text-sm tracking-widest">{String(index + 1).padStart(2, '0')}</span>
          <span className="text-white/20 font-black text-xs tracking-widest">{project.year}</span>
        </div>

        <h2 className="text-[clamp(2rem,8vw,5rem)] font-black tracking-tighter uppercase mb-4 sm:mb-6 leading-[0.85] transition-colors group-hover:text-primary-container">
          {project.title}
        </h2>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="border border-white/10 px-2 sm:px-3 py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-white/50 bg-white/5">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-white/60 text-sm font-medium leading-relaxed mb-6 sm:mb-10 md:opacity-0 md:group-hover:opacity-100 md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
          {project.description}
        </p>

        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-primary-container font-black uppercase text-xs tracking-[0.3em] group/btn">
          <span className="border-b border-primary-container pb-1 group-hover/btn:pr-6 transition-all duration-300 italic">TRY IT</span>
          <span className="material-symbols-outlined transform group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    id: "air-drawing",
    title: "Air Drawing App",
    year: "2024",
    label: "GESTURE CONTROL",
    image: "/assets/drawing app.png",
    tags: ["MediaPipe", "React", "Canvas"],
    description: "A high performance air drawing tool that tracks hand gestures in real time—because sometimes a mouse is just too awake.",
    link: "https://air-writing-app-wine.vercel.app"
  },
  {
    id: "legal-bot",
    title: "Legal Assistant",
    year: "2024",
    label: "AI ASSISTANT",
    image: "/assets/legal app.png",
    tags: ["Next.js", "OpenAI", "Tailwind"],
    description: "An AI powered legal assistant that answers questions and analyzes documents so you spend less time reading legalese and more time shipping.",
    link: "https://legal-care-kappa.vercel.app/home"
  },
  {
    id: "token-mgmt",
    title: "Token Manager",
    year: "2024",
    label: "WEB3 / DEFI",
    image: "/assets/token app.png",
    tags: ["Solidity", "React", "Ethers.js"],
    description: "A secure, intuitive dashboard for managing tokens and DeFi activity—built for people who actually use their apps, not just screenshots.",
    link: "https://tricult-project.vercel.app"
  },
  {
    id: "photo-sorter",
    title: "Face Sorter",
    year: "2024",
    label: "COMPUTER VISION",
    image: "/assets/face sorter.png",
    tags: ["Python", "FaceRec", "Cloud"],
    description: "An automated photo organizer that groups faces so you can find that party pic without digging through 300 thumbnails.",
    link: "https://face-finder-lilac.vercel.app"
  }
];

export default function Works() {
  return (
    <div className="grain-overlay scanlines min-h-screen bg-background text-foreground selection:bg-neon-green selection:text-black overflow-x-hidden">
      <main className="min-h-screen pt-16 md:pt-0">

        {/* ── Header ── */}
        <section className="min-h-[50vh] md:min-h-[60vh] pt-24 md:pt-32 pb-12 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 border-b-4 border-primary-container relative overflow-hidden">
          <div className="w-full text-center z-10">
            <h1 className="text-[clamp(3.5rem,16vw,15rem)] font-black leading-[0.75] tracking-tighter uppercase mb-6 sm:mb-8">
              Works<span className="text-primary-container animate-[blink_1s_steps(2,start)_infinite]">.</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-2xl max-w-3xl mx-auto font-black tracking-tight uppercase opacity-80 px-4 leading-snug">
              A collection of side projects turned products we built from midnight ideas and shipped before the sun came up.
            </p>
          </div>
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(to right, #3cf91a 1px, transparent 1px), linear-gradient(to bottom, #3cf91a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </section>

        {/* ── Projects List ── */}
        <section className="w-full border-t border-white/10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 text-center relative border-y-8 border-primary-container">
          <h3 className="text-[clamp(1.5rem,5vw,3.75rem)] font-black uppercase mb-8 sm:mb-12 tracking-tight">Ready to ship something before the next all nighter?</h3>
          <Link href="/#contact" className="w-full max-w-4xl mx-auto block bg-primary-container text-black hover:bg-white transition-colors py-8 sm:py-12 md:py-20 group">
            <span className="text-[clamp(1.8rem,8vw,8rem)] font-black tracking-tighter leading-none uppercase group-hover:scale-105 transition-transform inline-block">Start a late night project</span>
          </Link>
        </section>

      </main>
    </div>
  );
}
