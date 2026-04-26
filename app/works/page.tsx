"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Alternate side for each project
  const isEven = index % 2 === 0;

  return (
    <div 
      className={`w-full ${isEven ? "bg-[#F8FAFC]" : "bg-[#FFFFFF]"}`}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto py-20 sm:py-24 md:py-28 px-6 sm:px-10 md:px-16"
      >
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
          
          {/* Info Column */}
          <div className={`flex flex-col gap-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-accent font-bold text-[10px] tracking-[0.4em] uppercase">
                  Project {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-px w-6 bg-accent/20"></div>
                <span className="text-text-secondary text-[10px] font-bold tracking-widest">{project.year}</span>
              </div>
              
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-[#0F172A] leading-[1.1]">
                {project.title}
              </h2>
              
              <p className="text-[#64748B] text-base sm:text-lg font-medium leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="bg-[#DCFCE7] text-[#166534] px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Micro Storytelling */}
            <div className="flex flex-col gap-6 py-8 px-8 bg-white/40 rounded-2xl border border-border/20 backdrop-blur-sm shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F172A]">The Problem</span>
                </div>
                <p className="text-sm text-[#64748B] font-medium leading-relaxed pl-3.5">{project.problem}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F172A]">The Solution</span>
                </div>
                <p className="text-sm text-[#64748B] font-medium leading-relaxed pl-3.5">{project.solution}</p>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-[#16A34A] text-white px-6 py-[14px] rounded-xl font-bold text-xs uppercase tracking-[0.15em] shadow-lg shadow-accent/20 hover:bg-accent-hover hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
              >
                View Project
                <span className="material-symbols-outlined ml-2.5 text-base">arrow_outward</span>
              </a>
            </div>
          </div>

          {/* Visual Column */}
          <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
            <motion.div 
              whileHover={{ translateY: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-[24px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-border/50 aspect-[4/3] group/img bg-bg"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/img:scale-110"
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/800x600/f8fafc/16a34a?text=${project.title.replace(' ', '+')}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
            
            {/* Soft decorative glow */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
        </div>
      </motion.div>
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
    description: "A high-performance air drawing tool that tracks hand gestures in real-time, allowing for a completely touchless creative experience.",
    problem: "Digital artists are often tethered to tablets and mice, restricting natural 3D expression.",
    solution: "AI-powered gesture recognition enables mid-air sketching with near-zero latency.",
    link: "https://air-writing-app-wine.vercel.app"
  },
  {
    id: "legal-bot",
    title: "Legal Assistant",
    year: "2024",
    label: "AI ASSISTANT",
    image: "/assets/legal app.png",
    tags: ["Next.js", "OpenAI", "Tailwind"],
    description: "An intelligent legal research companion that analyzes complex documentation and provides structured summaries in seconds.",
    problem: "Manually auditing legal contracts consumes hundreds of hours and increases compliance risks.",
    solution: "A custom LLM workflow that instantly flags risky clauses and generates plain-language summaries.",
    link: "https://legal-care-kappa.vercel.app/home"
  },
  {
    id: "token-mgmt",
    title: "Token Manager",
    year: "2024",
    label: "WEB3 / DEFI",
    image: "/assets/token app.png",
    tags: ["Solidity", "React", "Ethers.js"],
    description: "A secure, institutional-grade dashboard for cross-chain token management and decentralized finance operations.",
    problem: "Web3 asset management is fragmented across protocols, making tracking and security difficult.",
    solution: "A unified portal that aggregates multi-chain data into a single, high-security dashboard.",
    link: "https://tricult-project.vercel.app"
  },
  {
    id: "photo-sorter",
    title: "Face Sorter",
    year: "2024",
    label: "COMPUTER VISION",
    image: "/assets/face sorter.png",
    tags: ["Python", "FaceRec", "Cloud"],
    description: "Automated biometric photo organization that instantly categorizes massive event galleries into searchable person-specific folders.",
    problem: "Finding specific photos in event galleries with thousands of images is a manual nightmare.",
    solution: "High-speed computer vision indexes faces instantly for immediate, personalized retrieval.",
    link: "https://face-finder-lilac.vercel.app"
  }
];

export default function Works() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-accent/10 selection:text-accent overflow-x-hidden">
      <main className="min-h-screen">

        {/* ── Header ── */}
        <section className="min-h-[50vh] pt-32 pb-24 flex flex-col items-center justify-center px-6 bg-white">
          <div className="w-full max-w-7xl mx-auto text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="bg-accent-light text-accent font-bold text-[10px] tracking-[0.4em] uppercase mb-8 px-4 py-1.5 rounded-full">
                Portfolio // 2026
              </div>
              <h1 className="text-[clamp(3.5rem,12vw,8rem)] font-bold leading-[0.9] tracking-tighter mb-10 text-[#0F172A]">
                The Projects<span className="text-accent">.</span>
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto font-medium text-[#64748B] leading-relaxed">
                A selection of digital products and engineering experiments focused on speed, utility, and refined aesthetics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Projects List ── */}
        <section className="w-full flex flex-col">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>

        {/* ── CTA ── */}
        <section className="py-24 sm:py-32 md:py-48 px-6 text-center bg-[#F1F5F9] relative border-t border-border/10">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tight text-[#0F172A] leading-[1.1]">
                Ready to start your <span className="text-accent">next project?</span>
              </h3>
              <p className="text-lg text-[#64748B] font-medium max-w-2xl mx-auto leading-relaxed">
                We're currently available for new collaborations. Let's build something exceptional together.
              </p>
            </motion.div>
            
            <Link 
              href="/#contact" 
              className="group relative inline-flex items-center justify-center bg-[#16A34A] text-white px-8 py-[14px] rounded-xl font-bold text-lg sm:text-xl tracking-tight shadow-[0_20px_40px_rgba(22,163,74,0.25)] hover:bg-accent-hover hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
            >
              Start a conversation
              <span className="material-symbols-outlined ml-3 text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
