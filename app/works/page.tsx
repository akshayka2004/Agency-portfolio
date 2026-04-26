"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Alternate the side of the image for visual rhythm
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group w-full max-w-7xl mx-auto py-20 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 border-b border-border/50 last:border-0 ${
        isEven ? "bg-[#F8FAFC]" : "bg-[#FFFFFF]"
      }`}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
        
        {/* Info Column */}
        <div className={`flex flex-col gap-6 sm:gap-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold text-sm tracking-widest uppercase">
                Project {String(index + 1).padStart(2, '0')}
              </span>
              <div className="h-px w-8 bg-accent/30"></div>
              <span className="text-text-secondary text-sm font-medium">{project.year}</span>
            </div>
            
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-text-primary leading-[1.05]">
              {project.title}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span 
                key={tag} 
                className="bg-[#DCFCE7] text-[#166534] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[#16A34A]/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-text-secondary text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
            {project.description}
          </p>

          <div className="flex flex-col gap-4 py-4 border-l-2 border-accent/20 pl-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/60">Problem</span>
              <p className="text-sm text-text-primary font-semibold">{project.problem}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/60">Solution</span>
              <p className="text-sm text-text-primary font-semibold">{project.solution}</p>
            </div>
          </div>

          <div className="pt-4">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-accent text-surface px-8 py-4 rounded-[12px] font-bold text-sm uppercase tracking-wider shadow-lg hover:bg-accent-hover hover:scale-[1.02] hover:-translate-y-1 transition-all active:scale-[0.98]"
            >
              View Project
              <span className="material-symbols-outlined ml-2 text-lg">arrow_outward</span>
            </a>
          </div>
        </div>

        {/* Visual Column */}
        <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50 aspect-[4/3] group/img">
            <img
              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
              src={project.image}
              alt={project.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Subtle Decorative Elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        </div>
      </div>
    </motion.div>
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
    problem: "Traditional digital drawing tools require physical contact, limiting creative freedom in 3D spaces.",
    solution: "AI-powered gesture recognition allows users to draw mid-air with zero latency.",
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
    problem: "Reviewing legal documents is time-consuming and prone to human error.",
    solution: "LLM-integrated analysis provides instant summaries and risk assessment for complex contracts.",
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
    problem: "Managing crypto assets across multiple protocols is fragmented and technically overwhelming.",
    solution: "A unified, secure dashboard that simplifies multi-chain token management for everyday users.",
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
    problem: "Searching through thousands of event photos for specific people is an exhaustive manual task.",
    solution: "AI-powered biometric sorting instantly indexes event galleries by face for rapid retrieval.",
    link: "https://face-finder-lilac.vercel.app"
  }
];

export default function Works() {
  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-accent-light selection:text-accent overflow-x-hidden">
      <main className="min-h-screen pt-16 md:pt-0">

        {/* ── Header ── */}
        <section className="min-h-[50vh] md:min-h-[60vh] pt-32 md:pt-48 pb-24 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 border-b border-border bg-[#FFFFFF] relative overflow-hidden">
          <div className="w-full text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[clamp(3.5rem,12vw,10rem)] font-bold leading-tight tracking-tight mb-6 sm:mb-8 text-text-primary">
                Works<span className="text-accent animate-[blink_1s_steps(2,start)_infinite]">.</span>
              </h1>
              <p className="text-sm sm:text-lg md:text-xl max-w-3xl mx-auto font-medium text-text-secondary px-4 leading-relaxed">
                A selection of products and experiments where high performance meets uncompromising design.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Projects List ── */}
        <section className="w-full">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>

        {/* ── CTA ── */}
        <section className="py-32 sm:py-48 px-4 sm:px-6 md:px-12 text-center relative bg-[#F1F5F9] border-t border-border">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight text-text-primary leading-[1.1]">
                Ready to build something <span className="text-accent">exceptional?</span>
              </h3>
              <p className="text-lg sm:text-xl text-text-secondary font-medium max-w-2xl mx-auto">
                We're currently taking on new projects. Let's talk about how we can help you ship your next big idea.
              </p>
            </motion.div>
            
            <Link 
              href="/#contact" 
              className="group relative inline-flex items-center justify-center bg-accent text-surface px-10 py-6 rounded-[16px] font-bold text-xl sm:text-2xl tracking-tight shadow-2xl hover:bg-accent-hover hover:scale-[1.02] hover:-translate-y-1 transition-all active:scale-[0.98] overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Start a conversation
                <span className="material-symbols-outlined ml-3 text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
