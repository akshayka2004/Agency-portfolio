"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const PROJECTS = [
  {
    id: "legal-bot",
    title: "Legal Document Parser",
    context: "An internal research initiative to evaluate the viability of localized, air-gapped LLM deployments for processing highly sensitive legal documentation without third-party API exposure.",
    challenge: "Traditional legal document parsing relies heavily on manual auditing or cloud-based AI APIs, which pose severe data privacy risks for confidential agreements.",
    research: "Evaluated several quantized models (Llama 3, Mistral) against state-of-the-art closed models to determine the accuracy of zero-shot entity extraction on legal text.",
    design: "Designed a secure Retrieval-Augmented Generation (RAG) architecture that runs entirely on local infrastructure, ensuring data never leaves the client environment.",
    architecture: "Next.js frontend communicating with a containerized Python backend. The backend hosts a quantized local LLM, utilizing ChromaDB for rapid similarity search of vectorized document chunks.",
    implementation: "Developed a custom chunking algorithm optimized for legal clauses (identifying definitions, terms, and signatures). Built a React dashboard for attorneys to query documents naturally.",
    stack: ["Next.js", "Python", "Local LLM", "ChromaDB", "Docker"],
    outcome: "Successfully demonstrated a 100% offline document query system that extracts clauses with high accuracy, completely eliminating third-party data exposure.",
    lessons: "Context window limits in local models require extremely precise vector retrieval; optimizing the chunk overlap was critical to preventing hallucinated clauses."
  },
  {
    id: "token-mgmt",
    title: "DeFi Operations Portal",
    context: "A foundational prototype for institutional web3 asset management, addressing the need for secure, cross-chain transaction orchestration.",
    challenge: "Handling asynchronous, multi-step blockchain transactions in a user-facing dashboard reliably without dropped states or misleading UI feedback.",
    research: "Investigated common failure modes in decentralized applications, noting that state desynchronization between the frontend and RPC nodes causes the majority of user errors.",
    design: "Architected a state machine that rigidly enforces transaction stages (Pending, Mined, Confirmed, Reverted) and polls multiple RPC nodes for consensus.",
    architecture: "React SPA deployed on AWS CloudFront, interfacing with Ethereum RPC nodes and custom Solidity smart contracts. Uses Ethers.js for secure key management.",
    implementation: "Built the interface with strict TypeScript typings for all contract ABIs. Integrated hardware wallet support to ensure private keys remain physically isolated.",
    stack: ["Solidity", "React", "Ethers.js", "AWS", "TypeScript"],
    outcome: "Created a robust, institutional-grade portal that gracefully handles network congestion and provides deterministic feedback for complex cross-chain operations.",
    lessons: "Relying on a single RPC provider introduces a single point of failure; an enterprise system requires a load-balanced, multi-provider network architecture."
  }
];

export default function Works() {
  return (
    <div className="min-h-screen bg-bg text-text-primary pt-32 pb-20 selection:bg-accent/10 selection:text-accent">
      <main className="max-w-[1200px] mx-auto px-6">
        
        <div className="mb-24">
          <h1 className="text-[clamp(3.5rem,6vw,5.5rem)] font-bold tracking-tight text-text-primary leading-none mb-6">
            Selected Work.
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            A detailed review of architectures, prototypes, and engineering solutions we have deployed. Each study outlines our rigorous methodology from research through execution.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-12"
            >
              {/* Large Image Area */}
              <div className="w-full aspect-[21/9] bg-surface rounded-[24px] border border-border shadow-sm flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-surface-secondary group-hover:scale-105 transition-transform duration-1000" />
                <Cpu className="w-24 h-24 text-border-strong z-10" strokeWidth={1} />
              </div>

              {/* Header */}
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl font-bold tracking-tight text-text-primary">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-surface border border-border rounded-full text-sm font-semibold text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 9-Step Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-border pt-10">
                
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full"></span> Project Context
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{project.context}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full"></span> Business Challenge
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{project.challenge}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full"></span> Research Findings
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{project.research}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full"></span> Solution Design
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{project.design}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full"></span> System Architecture
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{project.architecture}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full"></span> Implementation
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{project.implementation}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full"></span> Outcome
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{project.outcome}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full"></span> Lessons Learned
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{project.lessons}</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </main>
    </div>
  );
}
