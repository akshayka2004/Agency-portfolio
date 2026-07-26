"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const PROJECTS = [
  {
    id: "legal-bot",
    title: "Legal document parser",
    context:
      "An internal research initiative to evaluate the viability of localized, air-gapped LLM deployments for processing highly sensitive legal documentation without third-party API exposure.",
    challenge:
      "Traditional legal document parsing relies heavily on manual auditing or cloud-based AI APIs, which pose severe data-privacy risks for confidential agreements.",
    research:
      "Evaluated several quantized models (Llama 3, Mistral) against state-of-the-art closed models to determine the accuracy of zero-shot entity extraction on legal text.",
    design:
      "Designed a secure retrieval-augmented generation architecture that runs entirely on local infrastructure, so data never leaves the client environment.",
    architecture:
      "Next.js frontend communicating with a containerized Python backend. The backend hosts a quantized local LLM, using ChromaDB for rapid similarity search over vectorized document chunks.",
    implementation:
      "A custom chunking algorithm tuned for legal clauses (definitions, terms, signatures) and a React dashboard for attorneys to query documents in plain language.",
    stack: ["Next.js", "Python", "Local LLM", "ChromaDB", "Docker"],
    outcome:
      "A fully offline document query system that extracts clauses with high accuracy, eliminating third-party data exposure entirely.",
    lessons:
      "Context-window limits in local models demand extremely precise vector retrieval; tuning chunk overlap was critical to preventing hallucinated clauses.",
  },
  {
    id: "token-mgmt",
    title: "DeFi operations portal",
    context:
      "A foundational prototype for institutional web3 asset management, addressing the need for secure, cross-chain transaction orchestration.",
    challenge:
      "Handling asynchronous, multi-step blockchain transactions in a user-facing dashboard reliably, without dropped states or misleading UI feedback.",
    research:
      "Investigated common failure modes in decentralized applications — state desynchronization between the frontend and RPC nodes causes most user-facing errors.",
    design:
      "Architected a state machine that rigidly enforces transaction stages (pending, mined, confirmed, reverted) and polls multiple RPC nodes for consensus.",
    architecture:
      "React SPA on AWS CloudFront, interfacing with Ethereum RPC nodes and custom Solidity smart contracts, using Ethers.js for key management.",
    implementation:
      "Strict TypeScript typings for every contract ABI, with hardware-wallet support so private keys stay physically isolated.",
    stack: ["Solidity", "React", "Ethers.js", "AWS", "TypeScript"],
    outcome:
      "A robust, institutional-grade portal that gracefully handles network congestion and gives deterministic feedback on complex cross-chain operations.",
    lessons:
      "A single RPC provider is a single point of failure; an enterprise system needs a load-balanced, multi-provider network architecture.",
  },
] as const;

const DETAIL_FIELDS = [
  ["context", "Project context"],
  ["challenge", "Business challenge"],
  ["research", "Research findings"],
  ["design", "Solution design"],
  ["architecture", "System architecture"],
  ["implementation", "Implementation"],
  ["outcome", "Outcome"],
  ["lessons", "Lessons learned"],
] as const;

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary pt-32 pb-24">
      <main className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[760px] mb-16"
        >
          <Link
            href="/"
            className="link-draw inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors mb-6 w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> Back home
          </Link>
          <div className="text-caption text-accent">Full case study archive</div>
          <div className="brand-rule w-14 mt-4 mb-6" />
          <h1 className="text-display font-bold mb-6">Selected work.</h1>
          <p className="text-subtitle text-text-secondary">
            A detailed review of architectures, prototypes and engineering solutions we&apos;ve
            deployed. Each study outlines our methodology from research through execution.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              {...reveal}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.1, 0.2) }}
              className="edge-beam border border-border rounded-xl bg-surface overflow-hidden"
            >
              <div className="w-full aspect-[21/9] bg-surface-secondary relative overflow-hidden group border-b border-border">
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-1000">
                  <Cpu className="w-20 h-20 text-border-strong" strokeWidth={1} />
                </div>
              </div>

              <div className="p-8 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h2 className="text-h3 font-bold tracking-tight">{project.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs tracking-wider text-text-secondary border border-border bg-surface-secondary rounded px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 border-t border-border pt-8">
                  {DETAIL_FIELDS.map(([key, label]) => (
                    <div key={key} className="flex flex-col gap-2">
                      <h3 className="text-caption text-text-tertiary flex items-center gap-2">
                        <span className="w-1 h-3 bg-accent rounded-full" />
                        {label}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">{project[key]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
