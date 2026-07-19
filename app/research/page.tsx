"use client";

import { EnterpriseGrid } from "@/components/ui/EnterpriseGrid";
import { motion } from "framer-motion";
import Link from "next/link";

const researchAreas = [
  {
    title: "Project Zero: Autonomous Edge AI",
    category: "Edge Computing & AI",
    status: "Active Research",
    desc: "Experimenting with multi-agent reinforcement learning deployed directly on edge TPU hardware for zero-latency industrial automation.",
    tags: ["TensorFlow Lite", "C++", "Embedded Linux", "Neural Networks"],
    image: "SYSTEM_RENDER_EDGE.WEBP"
  },
  {
    title: "Quantum-Resistant Cryptography in IoT",
    category: "Security & Hardware",
    status: "Prototyping",
    desc: "Developing custom PCB architectures that implement lattice-based cryptographic algorithms for secure smart-city sensors.",
    tags: ["PCB Design", "Rust", "Lattice Crypto", "IoT"],
    image: "SYSTEM_RENDER_CRYPTO.WEBP"
  },
  {
    title: "Generative Architecture Topologies",
    category: "Cloud Infrastructure",
    status: "Published Paper",
    desc: "An internal study on using LLMs to automatically generate, provision, and secure AWS infrastructure stacks based on natural language constraints.",
    tags: ["Terraform", "AWS", "LLM", "DevOps"],
    image: "SYSTEM_RENDER_CLOUD.WEBP"
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary pt-32 pb-20 selection:bg-accent/20 selection:text-accent">
      <EnterpriseGrid />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-6 mb-20 max-w-2xl">
          <Link href="/" className="text-xs font-mono text-text-secondary hover:text-white transition-colors flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-sm">west</span> Back to Hub
          </Link>
          <span className="text-xs font-mono text-accent uppercase tracking-[0.3em]">Innovation Lab</span>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-tighter text-white leading-[1.1]">
            Research & <br /> Development.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A public ledger of our internal experiments, hardware prototypes, AI explorations, and technical papers. We believe transparency in research drives industry-wide innovation.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {researchAreas.map((area, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border border-border/40 bg-surface/30 hover:bg-surface/50 transition-colors p-8 md:p-12"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase text-text-secondary">{area.category}</span>
                    <span className="text-[10px] font-mono text-accent uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      {area.status}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white tracking-tight">{area.title}</h2>
                  <p className="text-text-secondary leading-relaxed">{area.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-6">
                    {area.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-text-secondary bg-surface px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2 aspect-[4/3] bg-surface-hover border border-border/20 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <span className="font-mono text-text-secondary text-sm group-hover:scale-105 transition-transform">
                    {area.image}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
