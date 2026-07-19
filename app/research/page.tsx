"use client";

import { EnterpriseGrid } from "@/components/ui/EnterpriseGrid";
import { motion } from "framer-motion";
import Link from "next/link";

const researchCapabilities = [
  {
    title: "Applied Artificial Intelligence",
    category: "AI & ML",
    desc: "Experimentation with localized Large Language Models (LLMs), Computer Vision pipelines (OpenCV, MediaPipe), and Retrieval-Augmented Generation (RAG) for secure, private enterprise deployments.",
    tags: ["LLM", "Computer Vision", "TensorFlow", "PyTorch"]
  },
  {
    title: "Embedded Systems & IoT",
    category: "Hardware",
    desc: "Prototyping edge devices and sensor networks. We research the feasibility of integrating microcontrollers with high-throughput cloud pipelines for industrial automation.",
    tags: ["PCB Prototyping", "Microcontrollers", "Edge Computing", "C++"]
  },
  {
    title: "Resilient Cloud Architectures",
    category: "Infrastructure",
    desc: "Internal auditing of modern deployment strategies including serverless environments, containerization (Docker/Kubernetes), and automated infrastructure provisioning.",
    tags: ["AWS", "Docker", "Terraform", "DevOps"]
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary pt-32 pb-20 selection:bg-accent/20 selection:text-accent">
      <EnterpriseGrid />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-6 mb-20 max-w-3xl">
          <Link href="/" className="text-xs font-mono text-text-secondary hover:text-white transition-colors flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-sm">west</span> Back to Hub
          </Link>
          <span className="text-xs font-mono text-accent uppercase tracking-[0.3em]">Innovation Lab</span>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-tighter text-white leading-[1.1]">
            Research Capabilities.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            We maintain an internal R&D mandate to continuously evaluate emerging technologies. We do not publish proprietary client data; instead, this ledger outlines the technical domains we actively investigate to ensure we deploy the most rigorous architectures for our enterprise partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchCapabilities.map((area, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border border-border/40 bg-surface/30 hover:bg-surface/50 transition-colors p-8 flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase text-text-secondary">{area.category}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-white tracking-tight">{area.title}</h2>
              <p className="text-sm text-text-secondary leading-relaxed flex-grow">{area.desc}</p>
              
              <div className="flex flex-wrap gap-2 pt-6 border-t border-border/20">
                {area.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-text-secondary bg-surface px-2 py-1 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 p-8 sm:p-12 border border-border/40 bg-surface/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2 max-w-xl">
                <h3 className="text-xl font-bold text-white">Require a custom technical feasibility study?</h3>
                <p className="text-sm text-text-secondary">We partner with organizations to research and validate complex engineering ideas before production.</p>
            </div>
            <Link href="mailto:t.0youthingwebuild@gmail.com" className="shrink-0 bg-white text-bg px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white/90 transition-all">
              Request Consultation
            </Link>
        </div>
      </div>
    </div>
  );
}
