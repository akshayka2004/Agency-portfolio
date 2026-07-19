"use client";

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
    <div className="min-h-screen bg-bg text-text-primary pt-32 pb-20 selection:bg-accent/10 selection:text-accent">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex flex-col gap-6 mb-24 max-w-3xl">
          <Link href="/" className="text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2 mb-4 w-fit">
            <span className="material-symbols-outlined text-sm">west</span> Back to Hub
          </Link>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-tight text-text-primary leading-none">
            Research Capabilities.
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
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
              className="bg-surface rounded-2xl border border-border shadow-sm p-8 flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">{area.category}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-text-primary tracking-tight">{area.title}</h2>
              <p className="text-lg text-text-secondary leading-relaxed flex-grow">{area.desc}</p>
              
              <div className="flex flex-wrap gap-2 pt-6 mt-auto">
                {area.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold text-text-secondary bg-surface-secondary px-3 py-1 rounded-full border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 p-10 bg-surface rounded-[24px] border border-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-xl">
                <h3 className="text-2xl font-bold text-text-primary">Require a custom technical feasibility study?</h3>
                <p className="text-lg text-text-secondary leading-relaxed">We partner with organizations to research and validate complex engineering ideas before production.</p>
            </div>
            <Link href="mailto:contact@t-0.engineering" className="shrink-0 bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-colors shadow-sm">
              Request Consultation
            </Link>
        </div>

      </div>
    </div>
  );
}
