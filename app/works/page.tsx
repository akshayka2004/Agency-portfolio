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
      className="group bg-surface border border-border rounded-[16px] shadow-[0_10px_25px_rgba(0,0,0,0.05)] overflow-hidden scroll-mt-24 mb-8 sm:mb-12 md:mb-16"
    >
      {/* Image Block */}
      <div className="relative overflow-hidden h-[240px] sm:h-[320px] md:h-[420px] bg-bg">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="w-full h-full"
        >
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            src={project.image}
            alt={project.title}
          />
        </motion.div>
        {/* Overlay Label */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-accent-light text-accent rounded-md px-3 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-sm">
            {project.label || "INTEL"}
          </span>
        </div>
      </div>

      {/* Text Block */}
      <div className="p-6 sm:p-8 md:p-10 bg-surface">
        <div className="flex justify-between items-baseline mb-4 sm:mb-6">
          <span className="text-text-secondary font-semibold text-xs sm:text-sm tracking-widest">{String(index + 1).padStart(2, '0')}</span>
          <span className="text-text-secondary font-semibold text-xs tracking-widest">{project.year}</span>
        </div>

        <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1] transition-colors group-hover:text-accent text-text-primary">
          {project.title}
        </h2>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="border border-border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-text-secondary bg-bg rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-text-secondary text-base font-medium leading-relaxed mb-6 sm:mb-8 md:opacity-0 md:group-hover:opacity-100 md:transform md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500">
          {project.description}
        </p>

        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold uppercase text-xs tracking-wider group/btn hover:text-accent-hover transition-colors">
          <span className="border-b-2 border-accent/30 group-hover/btn:border-[#15803D] pb-1 group-hover/btn:pr-2 transition-all duration-300">VIEW PROJECT</span>
          <span className="material-symbols-outlined transform group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
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
    <div className="min-h-screen bg-bg text-text-primary selection:bg-accent-light selection:text-accent overflow-x-hidden">
      <main className="min-h-screen pt-16 md:pt-0">

        {/* ── Header ── */}
        <section className="min-h-[50vh] md:min-h-[60vh] pt-24 md:pt-32 pb-12 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 border-b border-border bg-[linear-gradient(to_bottom,#F8FAFC,#F1F5F9)] relative overflow-hidden">
          <div className="w-full text-center z-10">
            <h1 className="text-[clamp(3.5rem,12vw,10rem)] font-bold leading-tight tracking-tight mb-6 sm:mb-8 text-text-primary">
              Works<span className="text-accent animate-[blink_1s_steps(2,start)_infinite]">.</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl max-w-3xl mx-auto font-medium text-text-secondary px-4 leading-relaxed">
              A collection of side projects turned products we built from midnight ideas and shipped before the sun came up.
            </p>
          </div>
          {/* Grid overlay removed per design requirements */}
        </section>

        {/* ── Projects List ── */}
        <section className="w-full py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 text-center relative bg-surface border-y border-border">
          <h3 className="text-[clamp(1.5rem,4vw,3rem)] font-bold mb-8 sm:mb-12 tracking-tight text-text-primary">Ready to ship something before the next all nighter?</h3>
          <Link href="/#contact" className="w-full max-w-3xl mx-auto block bg-accent text-surface rounded-[16px] shadow-[0_10px_25px_rgba(22,163,74,0.25)] hover:bg-accent-hover hover:-translate-y-1 transition-all py-8 sm:py-12 md:py-16 group">
            <span className="text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-tight leading-none group-hover:scale-[1.02] transition-transform inline-block">Start a late night project</span>
          </Link>
        </section>

      </main>
    </div>
  );
}
