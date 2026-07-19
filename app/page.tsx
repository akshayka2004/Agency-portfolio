"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EnterpriseGrid } from "@/components/ui/EnterpriseGrid";

// Strictly typed for TypeScript
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-accent/20 selection:text-accent overflow-x-hidden pt-20">
      <main className="w-full">
        
        {/* ── 1. HERO ── */}
        <section className="relative min-h-[90vh] flex items-center border-b border-border/20">
          <EnterpriseGrid />
          <div className="w-full max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 relative z-10">
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-col gap-8 pt-10 lg:pt-0"
            >
              <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-4 py-1.5 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-accent" aria-label="Status: Operational">Systems Operational</span>
              </div>
              
              <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tighter leading-[1.05] text-white">
                Engineering Infrastructure for Complex Enterprises.
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
                We are an applied technology partner. We research, architect, and deploy enterprise software, AI systems, and hardware infrastructure for organizations operating at scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="#contact" className="bg-white text-bg px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white/90 transition-all flex items-center justify-center gap-3">
                  Book a Discovery Call
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_forward</span>
                </Link>
                <Link href="/works" className="border border-border/50 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-all flex items-center justify-center">
                  Review Architecture
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border/20">
                {["Research-led", "Architecture-first", "Hardware & Software", "Production Ready"].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent text-sm" aria-hidden="true">check_circle</span>
                    <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.5 }}
              className="hidden lg:flex items-center justify-center relative"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
              {/* Meaningful technical visualization (abstract node network) */}
              <div className="w-full aspect-square border border-border/30 bg-surface/30 backdrop-blur-sm rounded-full relative flex items-center justify-center overflow-hidden">
                <div className="w-[80%] aspect-square border-y border-accent/20 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                  <div className="w-[60%] aspect-square border-x border-border/40 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-accent/40">dns</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. WHO WE ARE ── */}
        <section className="py-32 relative border-b border-border/20">
          <div className="max-w-[900px] mx-auto px-6 text-center">
            <span className="text-xs font-mono text-accent uppercase tracking-[0.3em] mb-6 block">Positioning</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white mb-10 leading-tight">
              We do not build software.<br />
              <span className="text-text-secondary">We architect systems.</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              We operate exclusively as an engineering and innovation partner. By strictly decoupling from traditional agency models, we focus our resources entirely on rigorous research, technical feasibility, and deploying scalable architectures that solve distinct operational bottlenecks.
            </p>
          </div>
        </section>

        {/* ── 3. CAPABILITIES ── */}
        <section id="capabilities" className="py-32 bg-surface/30 border-b border-border/20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col gap-4 mb-16">
              <span className="text-xs font-mono text-accent uppercase tracking-[0.3em]">Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Applied Engineering</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Enterprise Software", desc: "Development of custom ERP systems, multi-tenant SaaS platforms, and operational dashboards.", icon: "terminal" },
                { title: "Artificial Intelligence", desc: "Implementation of computer vision pipelines, localized LLMs, and predictive models.", icon: "neurology" },
                { title: "Hardware Engineering", desc: "Embedded systems programming and initial PCB prototyping for industrial IoT applications.", icon: "developer_board" },
                { title: "Cloud Infrastructure", desc: "Provisioning resilient cloud architectures utilizing AWS/GCP, Docker, and Kubernetes.", icon: "cloud_sync" },
                { title: "Technology Consulting", desc: "Technical roadmapping, stack auditing, and architectural feasibility studies.", icon: "architecture" }
              ].map((cap, i) => (
                <div key={i} className="group p-8 border border-border/50 bg-bg hover:border-accent/50 transition-colors flex flex-col gap-6">
                  <span className="material-symbols-outlined text-3xl text-accent" aria-hidden="true">{cap.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. RESEARCH & DEVELOPMENT ── */}
        <section className="py-32 border-b border-border/20 relative overflow-hidden">
          <EnterpriseGrid />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-mono text-accent uppercase tracking-[0.3em]">Methodology</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Research-First Development</h2>
                <p className="text-text-secondary max-w-xl">
                  Deploying systems into enterprise environments carries significant risk. We mitigate this through mandatory feasibility studies and rapid prototyping prior to production development.
                </p>
              </div>
              <Link href="/research" className="border-b border-accent text-accent font-mono text-xs uppercase tracking-widest pb-1 hover:text-white hover:border-white transition-colors flex items-center gap-2">
                View R&D Capabilities <span className="material-symbols-outlined text-sm" aria-hidden="true">east</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {['Technical Audit', 'Architecture Proof', 'Scale Validation'].map((step, idx) => (
                <div key={idx} className="border-l border-accent/30 pl-6 py-2 relative">
                  <div className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-accent" />
                  <span className="font-mono text-xs text-text-secondary">PHASE 0{idx + 1}</span>
                  <h4 className="text-lg font-bold text-white mt-2">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. ENGINEERING PROCESS ── */}
        <section className="py-32 bg-surface/30 border-b border-border/20 overflow-x-hidden">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col gap-4 mb-16">
              <span className="text-xs font-mono text-accent uppercase tracking-[0.3em]">The Protocols</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Deployment Pipeline</h2>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-8 snap-x scrollbar-hide">
              {["Discovery", "Research", "Feasibility", "Architecture", "Prototype", "Validation", "Development", "Deployment", "Optimization", "Innovation"].map((step, i) => (
                <div key={i} className="snap-start min-w-[280px] p-6 border border-border/50 bg-bg shrink-0">
                  <div className="text-3xl font-bold text-surface-hover mb-4">{(i + 1).toString().padStart(2, '0')}</div>
                  <h4 className="font-bold text-white mb-2">{step}</h4>
                  <div className="h-1 w-12 bg-accent/30 mt-4" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. CASE STUDIES (Factual Overview) ── */}
        <section className="py-32 border-b border-border/20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-mono text-accent uppercase tracking-[0.3em]">Implementation</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">System Deployments</h2>
              </div>
              <Link href="/works" className="border-b border-accent text-accent font-mono text-xs uppercase tracking-widest pb-1 hover:text-white hover:border-white transition-colors hidden sm:flex items-center gap-2">
                All Deployments <span className="material-symbols-outlined text-sm" aria-hidden="true">east</span>
              </Link>
            </div>

            <div className="flex flex-col gap-12">
              <div className="group border border-border/50 bg-surface/20 hover:bg-surface/40 transition-colors flex flex-col lg:flex-row gap-0 overflow-hidden">
                <div className="lg:w-1/2 aspect-video bg-surface-hover relative overflow-hidden flex items-center justify-center p-8">
                   <div className="absolute inset-0 bg-grid opacity-20" />
                   <span className="font-mono text-text-secondary text-sm relative z-10 text-center">
                     [ARCHITECTURAL REPOSITORY]<br />
                     Biometric Data Sorting Pipeline
                   </span>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase text-text-secondary">Computer Vision</span>
                    <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase text-text-secondary">Python</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Face Sorter Integration</h3>
                  <div className="py-4 border-y border-border/30">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Engineered an automated biometric photo organization system capable of categorizing massive event galleries into searchable person-specific datasets.
                    </p>
                  </div>
                  <Link href="/works" className="text-sm font-bold text-accent uppercase tracking-widest flex items-center gap-2 mt-2 w-fit group-hover:translate-x-2 transition-transform">
                    Read Architecture <span className="material-symbols-outlined text-sm" aria-hidden="true">east</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. FINAL CTA ── */}
        <section id="contact" className="py-32 relative border-t border-border/20 bg-surface/50">
          <EnterpriseGrid />
          <div className="max-w-[800px] mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-8">
            <span className="text-xs font-mono text-accent uppercase tracking-[0.3em]">Communication Channel</span>
            <h2 className="text-[clamp(3rem,6vw,4.5rem)] font-bold tracking-tighter text-white leading-none">
              Initiate System Audit.
            </h2>
            <p className="text-lg text-text-secondary max-w-lg mb-4">
              Connect with our architecture team to discuss feasibility, technical roadmapping, and engineering requirements.
            </p>
            <Link href="mailto:t.0youthingwebuild@gmail.com" className="bg-white text-bg px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-white/90 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Enterprise Consultation
              <span className="material-symbols-outlined" aria-hidden="true">rocket_launch</span>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
