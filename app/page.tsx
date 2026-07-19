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
                Engineering Beyond Expectations.<br />
              </h1>
              
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-accent">
                <span>AI</span> <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
                <span>Software</span> <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
                <span>Hardware</span> <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
                <span>Research</span>
              </div>

              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg">
                We engineer technology that enables organizations to innovate, automate, and scale. We don't just build websites—we architect systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="#contact" className="bg-accent text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-accent-light transition-colors shadow-sm flex items-center justify-center">
                  Schedule a Discovery Session
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative aspect-square"
            >
              <div className="w-full h-full bg-surface-secondary rounded-[2rem] border border-border overflow-hidden flex items-center justify-center relative shadow-sm">
                 <span className="material-symbols-outlined text-8xl text-border absolute">precision_manufacturing</span>
                 <p className="text-sm font-semibold text-text-secondary absolute bottom-8 left-8">ARCHITECTURE_BLUEPRINT.JPG</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. THE CHALLENGE ── */}
        <section className="py-24 bg-surface border-y border-border">
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 block">The Challenge</span>
              <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight text-text-primary leading-tight">
                Large organizations don't struggle because they lack ideas.
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-lg text-text-secondary leading-relaxed">
              <p>They struggle because technology becomes fragmented.</p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-accent">cancel</span> Disconnected systems.</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-accent">cancel</span> Manual operations.</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-accent">cancel</span> Legacy infrastructure.</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-accent">cancel</span> Slow decision making.</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-accent">cancel</span> AI without business context.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 3. OUR APPROACH ── */}
        <section className="py-32 bg-bg border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 block">Our Approach</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">How We Work</h2>
              <p className="text-xl text-text-secondary">
                Rather than selling development hours, we operate as an integrated engineering partner. This communicates maturity and reduces perceived project risk.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {['Discover', 'Research', 'Validate', 'Architect', 'Prototype', 'Engineer', 'Deploy', 'Optimize', 'Support'].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="px-6 py-3 bg-surface border border-border rounded-full text-sm font-semibold text-text-primary">{step}</span>
                  {i < 8 && <span className="material-symbols-outlined text-border hidden md:block">arrow_forward</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. WHAT WE BUILD ── */}
        <section id="capabilities" className="py-32 bg-surface-secondary border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-20">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 block">Capabilities</span>
              <h2 className="text-5xl font-bold tracking-tight text-text-primary mb-6">What We Build</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Enterprise Platforms", items: ["ERP", "CRM", "Business Management Systems", "SaaS Products"] },
                { title: "Artificial Intelligence", items: ["AI Assistants", "Agentic Workflows", "Computer Vision", "Predictive Analytics"] },
                { title: "Automation", items: ["Business Process Automation", "Workflow Orchestration", "Integrations", "Robotic Process Automation"] },
                { title: "Hardware & IoT", items: ["Embedded Systems", "Smart Devices", "PCB Design", "Industrial IoT", "Edge AI"] },
                { title: "Cloud & Infrastructure", items: ["DevOps", "Cloud Migration", "Scalable APIs", "Monitoring", "Security"] }
              ].map((cap, i) => (
                <div key={i} className={`p-10 bg-surface rounded-[24px] border border-border shadow-sm flex flex-col gap-6 ${i === 3 ? "md:col-span-1 lg:col-span-2" : ""}`}>
                  <h3 className="text-2xl font-bold text-text-primary">{cap.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {cap.items.map((item, j) => (
                      <li key={j} className="text-lg text-text-secondary flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. THE NEXUS ENGINEERING FRAMEWORK ── */}
        <section className="py-32 bg-bg border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-20">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 block">Methodology</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">The Nexus Engineering Framework™</h2>
              <p className="text-xl text-text-secondary max-w-2xl">
                A repeatable methodology that ensures quality, scalability, and precise alignment with business objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Research', 'Feasibility', 'Architecture', 'Rapid Prototyping', 'Engineering', 'Validation', 'Deployment', 'Continuous Evolution'].map((step, idx) => (
                <div key={idx} className="p-8 bg-surface rounded-[20px] border border-border flex flex-col gap-4 relative overflow-hidden group hover:border-accent transition-colors">
                  <div className="text-4xl font-bold text-surface-secondary group-hover:text-border transition-colors">{(idx + 1).toString().padStart(2, '0')}</div>
                  <h4 className="text-xl font-bold text-text-primary relative z-10">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. OUR PHILOSOPHY ── */}
        <section className="py-32 bg-accent-dark text-white text-center">
          <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-8">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-tight">
              We believe technology should solve operational problems, not create new ones.
            </h2>
            <div className="text-xl text-border/80 leading-relaxed flex flex-col gap-4">
              <p>Every engagement begins with understanding the business before selecting the technology.</p>
              <p>We value maintainable systems over quick fixes.</p>
              <p>We engineer for long-term growth.</p>
            </div>
          </div>
        </section>

        {/* ── 7. TECHNOLOGY PRINCIPLES ── */}
        <section className="py-32 bg-surface border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-20">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 block">Engineering Standards</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">Technology Principles</h2>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {[
                "Security by Default",
                "Scalable Architectures",
                "Human-Centered AI",
                "Vendor-Neutral Solutions",
                "Performance-Driven Development",
                "Research Before Implementation",
                "Documentation as Deliverable",
                "Automation Where It Matters"
              ].map((principle, idx) => (
                <span key={idx} className="px-6 py-4 bg-bg border border-border rounded-xl text-lg font-medium text-text-primary shadow-sm">
                  {principle}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. INNOVATION LAB ── */}
        <section className="py-32 bg-bg border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 block">Internal R&D</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">Innovation Lab</h2>
                <p className="text-xl text-text-secondary">
                  We constantly invest in future capabilities. Our internal research dictates the architectures we deploy for clients tomorrow.
                </p>
              </div>
              <Link href="/research" className="bg-surface border border-border text-text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface-secondary transition-colors flex items-center justify-center whitespace-nowrap">
                Explore Lab Findings
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['AI Research', 'Hardware Prototypes', 'Embedded Systems', 'Robotics', 'Vision AI', 'Edge Computing', 'Experimental Interfaces', 'Internal Developer Tools'].map((lab, i) => (
                <div key={i} className="p-6 bg-surface-secondary rounded-xl text-center text-sm font-semibold text-text-secondary">
                  {lab}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. ENTERPRISE READINESS ── */}
        <section className="py-24 bg-surface border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-12">Enterprise Readiness</h2>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {["Architecture Reviews", "Technical Documentation", "Security-Focused Development", "Knowledge Transfer", "Long-Term Maintenance", "Modular System Design", "API-First Engineering", "Scalable Cloud Deployments"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-text-secondary font-medium">
                  <span className="material-symbols-outlined text-success">check_circle</span> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. FINAL CTA ── */}
        <section id="contact" className="py-40 bg-bg">
          <div className="max-w-[900px] mx-auto px-6 text-center flex flex-col items-center gap-10">
            <h2 className="text-[clamp(3.5rem,6vw,5rem)] font-bold tracking-tight text-text-primary leading-[1.05]">
              Planning Something Ambitious?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
              Whether you're validating a new idea, modernizing existing infrastructure, or building an AI-powered product, we'll help you define the right technical direction before writing the first line of code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <Link href="mailto:contact@t-0.engineering" className="bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-light transition-colors shadow-sm flex items-center justify-center">
                Schedule a Discovery Session
              </Link>
              <Link href="mailto:contact@t-0.engineering" className="bg-surface border border-border text-text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-surface-secondary transition-colors flex items-center justify-center">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
