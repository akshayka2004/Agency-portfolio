"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "legal-bot",
    title: "Legal Document Parser",
    description: "A research-led implementation of LLMs designed to parse and structure complex legal documents securely without exposing sensitive data to public APIs.",
    problem: "Parsing highly unstructured, domain-specific legal text into queryable formats reliably.",
    solution: "Implemented a custom Retrieval-Augmented Generation (RAG) architecture to maintain context strictly within provided documents.",
    architecture: "Next.js frontend communicating with a containerized Python backend hosting a quantized local LLM, utilizing vector databases for rapid similarity search.",
    tags: ["Next.js", "Python", "Local LLM", "Vector DB"]
  },
  {
    id: "token-mgmt",
    title: "DeFi Operations Portal",
    description: "A web3 interface interacting with smart contracts for decentralized cross-chain token operations and institutional asset management.",
    problem: "Handling asynchronous, multi-step blockchain transactions in a user-facing dashboard reliably without dropped states.",
    solution: "Built a robust state management layer utilizing Ethers.js to continuously poll node states and handle contract reverts securely.",
    architecture: "React SPA deployed on AWS CloudFront, interfacing with Ethereum RPC nodes and custom Solidity smart contracts audited for security.",
    tags: ["Solidity", "React", "Ethers.js", "AWS"]
  },
  {
    id: "photo-sorter",
    title: "Biometric Indexing Engine",
    description: "A backend pipeline and processing tool for categorizing large datasets of imagery based on facial biometrics entirely offline.",
    problem: "Sorting through massive event galleries algorithmically without relying on third-party API latency or risking privacy leaks.",
    solution: "Engineered a local Python pipeline utilizing OpenCV and facial encodings for rapid, offline biometric indexing.",
    architecture: "Python CLI tool leveraging multi-processing and hardware acceleration to process images, storing encodings in a local SQLite database.",
    tags: ["Python", "OpenCV", "SQLite", "CLI"]
  }
];

export default function Works() {
  return (
    <div className="min-h-screen bg-bg text-text-primary pt-32 pb-20 selection:bg-accent/10 selection:text-accent">
      <main className="max-w-[1200px] mx-auto px-6">
        
        <div className="mb-24">
          <h1 className="text-[clamp(3.5rem,6vw,5.5rem)] font-bold tracking-tight text-text-primary leading-none mb-6">
            Case Studies.
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            A review of architectures, prototypes, and engineering solutions deployed for our clients.
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
              className="flex flex-col gap-10"
            >
              {/* Large Image Area */}
              <div className="w-full aspect-video bg-surface rounded-[24px] border border-border shadow-sm flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-surface-secondary" />
                <span className="material-symbols-outlined text-8xl text-border z-10">integration_instructions</span>
              </div>

              {/* Magazine Layout Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Title & Tags */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <h2 className="text-4xl font-bold tracking-tight text-text-primary">{project.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-surface border border-border rounded-full text-xs font-semibold text-text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-8 flex flex-col gap-10">
                  <p className="text-xl text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
                    <div className="flex flex-col gap-3">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">The Challenge</h4>
                      <p className="text-text-secondary leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">Engineering Solution</h4>
                      <p className="text-text-secondary leading-relaxed">{project.solution}</p>
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-3 pt-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">Architecture</h4>
                      <p className="text-text-secondary leading-relaxed">{project.architecture}</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </main>
    </div>
  );
}
