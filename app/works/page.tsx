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
    <div className={`w-full ${isEven ? "bg-bg" : "bg-surface"}`}>
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
                <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase">
                  System {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-px w-6 bg-accent/20"></div>
                <span className="text-text-secondary text-[10px] font-mono tracking-widest">{project.year}</span>
              </div>
              
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-white leading-[1.1]">
                {project.title}
              </h2>
              
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="bg-accent/10 border border-accent/20 text-accent px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Factual Information only */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 px-8 bg-surface-hover/50 border border-border/20">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent"></div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white">Problem Statement</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{project.problem}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent"></div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white">Engineering Solution</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center border border-border text-text-primary px-8 py-[14px] font-bold text-xs uppercase tracking-[0.15em] hover:border-accent hover:text-accent transition-all duration-300"
              >
                Access System
                <span className="material-symbols-outlined ml-2.5 text-base">arrow_outward</span>
              </a>
            </div>
          </div>

          {/* Visual Column */}
          <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
            <motion.div 
              className="relative overflow-hidden border border-border/50 aspect-[4/3] group/img bg-surface flex items-center justify-center p-8"
            >
              <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
              <div className="text-center relative z-10 font-mono text-text-secondary">
                 <span className="block text-accent mb-2">SYSTEM_ARCHIVE_{project.id.toUpperCase()}</span>
                 Technology Stack Visualization
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const PROJECTS = [
  {
    id: "air-drawing",
    title: "Air Drawing Interface",
    year: "2024",
    tags: ["MediaPipe", "React", "Canvas", "Computer Vision"],
    description: "An experimental drawing tool tracking hand gestures in real-time, built to test browser-based gesture recognition limits without specialized hardware.",
    problem: "Testing the viability of client-side machine learning for real-time 3D interaction tracking.",
    solution: "Integrated Google MediaPipe directly into a React/Canvas rendering loop for continuous spatial data processing.",
    link: "https://air-writing-app-wine.vercel.app"
  },
  {
    id: "legal-bot",
    title: "Legal Document Parser",
    year: "2024",
    tags: ["Next.js", "OpenAI API", "Tailwind", "RAG"],
    description: "A research-led implementation of LLMs designed to parse and structure complex legal documents securely.",
    problem: "Parsing highly unstructured, domain-specific legal text into queryable formats.",
    solution: "Implemented a custom Retrieval-Augmented Generation (RAG) architecture to maintain context strictly within provided documents.",
    link: "https://legal-care-kappa.vercel.app/home"
  },
  {
    id: "token-mgmt",
    title: "Token Dashboard",
    year: "2024",
    tags: ["Solidity", "React", "Ethers.js", "Smart Contracts"],
    description: "A web3 interface interacting with smart contracts for decentralized cross-chain token operations.",
    problem: "Handling asynchronous, multi-step blockchain transactions in a user-facing dashboard.",
    solution: "Built a robust state management layer utilizing Ethers.js to continuously poll node states and handle contract reverts securely.",
    link: "https://tricult-project.vercel.app"
  },
  {
    id: "photo-sorter",
    title: "Biometric Face Sorter",
    year: "2024",
    tags: ["Python", "OpenCV", "Facial Recognition"],
    description: "A command-line tool and backend pipeline for categorizing large datasets of imagery based on facial biometrics.",
    problem: "Sorting through massive event galleries algorithmically without relying on third-party API latency.",
    solution: "Engineered a local Python pipeline utilizing OpenCV and facial encodings for rapid, offline biometric indexing.",
    link: "https://face-finder-lilac.vercel.app"
  }
];

export default function Works() {
  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-accent/20 selection:text-accent overflow-x-hidden">
      <main className="min-h-screen">
        <section className="min-h-[50vh] pt-32 pb-24 flex flex-col items-center justify-center px-6 border-b border-border/20">
          <div className="w-full max-w-7xl mx-auto text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="border border-accent/30 text-accent font-mono text-[10px] tracking-[0.4em] uppercase mb-8 px-4 py-1.5">
                Technical Repository
              </div>
              <h1 className="text-[clamp(3.5rem,10vw,6rem)] font-bold leading-[0.9] tracking-tighter mb-10 text-white">
                Systems Deployed.
              </h1>
              <p className="text-lg max-w-2xl mx-auto font-medium text-text-secondary leading-relaxed">
                A factual archive of architectures, prototypes, and applications we have engineered. We omit fabricated business outcomes and focus exclusively on the technical solutions provided.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full flex flex-col">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>

      </main>
    </div>
  );
}
