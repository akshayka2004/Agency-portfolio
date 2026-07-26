"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CtaButton from "@/components/CtaButton";
import { CONTACT } from "@/lib/content";

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const RESEARCH_CAPABILITIES = [
  {
    title: "Applied artificial intelligence",
    category: "AI & ML",
    desc: "Experimentation with localized large language models, computer-vision pipelines (OpenCV, MediaPipe), and retrieval-augmented generation for secure, private enterprise deployments.",
    tags: ["LLM", "Computer Vision", "TensorFlow", "PyTorch"],
  },
  {
    title: "Embedded systems & IoT",
    category: "Firmware",
    desc: "Firmware for edge devices and sensor networks. We research the feasibility of integrating microcontrollers with high-throughput cloud pipelines for industrial automation.",
    tags: ["Embedded Firmware", "Microcontrollers", "Edge Computing", "C++"],
  },
  {
    title: "Resilient cloud architectures",
    category: "Infrastructure",
    desc: "Internal auditing of modern deployment strategies including serverless environments, containerization and automated infrastructure provisioning.",
    tags: ["AWS", "Docker", "Terraform", "DevOps"],
  },
] as const;

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
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
          <div className="text-caption text-accent">Research capabilities</div>
          <div className="brand-rule w-14 mt-4 mb-6" />
          <h1 className="text-display font-bold mb-6">Research capabilities.</h1>
          <p className="text-subtitle text-text-secondary">
            We maintain a standing internal R&amp;D mandate to continuously evaluate emerging
            technologies. We don&apos;t publish proprietary client data — this is the ledger of
            domains we actively investigate so the architectures we deploy for you are the most
            rigorous ones available, not just the newest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESEARCH_CAPABILITIES.map((area, i) => (
            <motion.div
              key={area.title}
              {...reveal}
              transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.24) }}
              className="lift sheen edge-beam border border-border rounded-xl bg-surface p-8 flex flex-col gap-4"
            >
              <span className="text-caption text-accent-lime-dark">{area.category}</span>
              <h2 className="text-h3 font-bold tracking-tight">{area.title}</h2>
              <p className="text-text-secondary leading-relaxed flex-1">{area.desc}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs tracking-wider text-text-secondary border border-border rounded px-2 py-1 bg-surface-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...reveal}
          transition={{ duration: 0.6 }}
          className="edge-beam mt-16 p-10 border border-border rounded-xl bg-surface flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col gap-2 max-w-xl">
            <h3 className="text-h3 font-bold tracking-tight">
              Need a custom feasibility study?
            </h3>
            <p className="text-text-secondary leading-relaxed">
              We partner with teams to research and validate hard engineering questions before
              anyone commits to production.
            </p>
          </div>
          <CtaButton href={`mailto:${CONTACT.email}`} icon className="shrink-0">
            Request a consultation
          </CtaButton>
        </motion.div>
      </div>
    </div>
  );
}
