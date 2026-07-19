"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-accent/10 selection:text-accent overflow-x-hidden pt-28">
      <main className="w-full">
        
        {/* ── 1. HERO ── */}
        <section className="relative min-h-[85vh] flex items-center bg-bg">
          <div className="w-full max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-8"
            >
              <h1 className="text-[clamp(3.5rem,6vw,5.5rem)] font-bold tracking-tight leading-[1.05] text-text-primary">
                Engineering Research.<br />
                Software.<br />
                AI.<br />
                <span className="text-accent">Built for Business.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg">
                We partner with companies that need technology built properly—from research through deployment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="#contact" className="bg-accent text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-accent-hover transition-colors shadow-sm flex items-center justify-center">
                  Book Strategy Session
                </Link>
                <Link href="/works" className="bg-surface border border-border text-text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface-secondary transition-colors flex items-center justify-center">
                  Explore Case Studies
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative aspect-square"
            >
              <div className="w-full h-full bg-surface-secondary rounded-[2rem] border border-border overflow-hidden flex items-center justify-center relative shadow-sm">
                 {/* Premium cinematic placeholder */}
                 <div className="absolute inset-0 bg-gradient-to-br from-surface-secondary to-surface pointer-events-none" />
                 <span className="material-symbols-outlined text-8xl text-border absolute rotate-12">architecture</span>
                 <p className="text-sm font-semibold text-text-secondary absolute bottom-8 left-8">CINEMATIC_ENGINEERING_IMAGE.JPG</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. TRUST INDICATORS ── */}
        <section className="py-20 border-y border-border bg-surface">
          <div className="max-w-[1200px] mx-auto px-6 text-center flex flex-col gap-8">
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-widest">Architecting Systems For Scale</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale mix-blend-multiply">
               {/* Placeholders for real logos */}
               <div className="text-2xl font-bold tracking-tight text-text-primary">Acme Corp</div>
               <div className="text-2xl font-bold tracking-tight text-text-primary">Stark Industries</div>
               <div className="text-2xl font-bold tracking-tight text-text-primary">Globex</div>
               <div className="text-2xl font-bold tracking-tight text-text-primary">Soylent</div>
            </div>
          </div>
        </section>

        {/* ── 3. WHO WE ARE ── */}
        <section className="py-32 bg-bg">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-text-primary mb-10 leading-tight">
              We solve difficult engineering problems.
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              We operate exclusively as an engineering and innovation partner. By strictly decoupling from traditional agency models, we focus our resources entirely on rigorous research, technical feasibility, and deploying scalable architectures that solve distinct operational bottlenecks.
            </p>
          </div>
        </section>

        {/* ── 4. CAPABILITIES ── */}
        <section id="capabilities" className="py-32 bg-surface border-y border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-20">
              <h2 className="text-5xl font-bold tracking-tight text-text-primary mb-6">Capabilities</h2>
              <p className="text-xl text-text-secondary max-w-2xl">
                Comprehensive engineering disciplines structured for enterprise integration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Software Engineering", desc: "Development of custom ERP systems, multi-tenant SaaS platforms, and operational dashboards.", icon: "terminal" },
                { title: "AI Engineering", desc: "Implementation of computer vision pipelines, localized LLMs, and predictive models.", icon: "neurology" },
                { title: "Hardware R&D", desc: "Embedded systems programming and initial PCB prototyping for industrial IoT applications.", icon: "developer_board" },
                { title: "Infrastructure", desc: "Provisioning resilient cloud architectures utilizing AWS/GCP, Docker, and Kubernetes.", icon: "cloud_sync" },
                { title: "Consulting", desc: "Technical roadmapping, stack auditing, and architectural feasibility studies.", icon: "architecture" }
              ].map((cap, i) => (
                <div key={i} className={`p-10 bg-bg rounded-[20px] border border-border shadow-sm flex flex-col gap-6 transition-shadow hover:shadow-md ${i === 4 ? "md:col-span-2" : ""}`}>
                  <span className="material-symbols-outlined text-4xl text-text-primary">{cap.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">{cap.title}</h3>
                    <p className="text-lg text-text-secondary leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. ENGINEERING PROCESS ── */}
        <section className="py-32 bg-bg border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-bold tracking-tight text-text-primary mb-6">Deployment Pipeline</h2>
                <p className="text-xl text-text-secondary">
                  Deploying systems into enterprise environments carries significant risk. We mitigate this through mandatory feasibility studies prior to production.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {['Discovery', 'Architecture', 'Prototype', 'Deployment'].map((step, idx) => (
                <div key={idx} className="p-8 bg-surface rounded-2xl border border-border shadow-sm">
                  <div className="text-3xl font-bold text-border mb-6">{(idx + 1).toString().padStart(2, '0')}</div>
                  <h4 className="text-xl font-bold text-text-primary">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FINAL CTA ── */}
        <section id="contact" className="py-40 bg-bg">
          <div className="max-w-[800px] mx-auto px-6 text-center flex flex-col items-center gap-10">
            <h2 className="text-[clamp(3.5rem,6vw,5rem)] font-bold tracking-tight text-text-primary leading-[1.05]">
              Ready to start your next project?
            </h2>
            <p className="text-xl text-text-secondary max-w-lg">
              Connect with our architecture team to discuss feasibility, technical roadmapping, and engineering requirements.
            </p>
            <Link href="mailto:contact@t-0.engineering" className="bg-accent text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-accent-hover transition-colors shadow-sm flex items-center gap-3">
              Book a Strategy Session
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
