"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Zap, 
  Globe, 
  ArrowRight, 
  Github, 
  ExternalLink,
  Code2,
  Server,
  Layers,
  Music,
  Camera,
  Map,
  CheckCircle2
} from "lucide-react";
import { MeshGradient } from "@/components/ui/mesh-gradient";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Home() {
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    setTimeout(() => setFormStatus("success"), 1500);
  };

  const capabilities = [
    {
      title: "SaaS Platforms",
      description: "Architecting multi-tenant architectures with a focus on subscription logic and data isolation.",
      icon: <Rocket className="text-accent" size={24} />,
      tags: ["Next.js", "Clerk", "Stripe"]
    },
    {
      title: "Scalable APIs",
      description: "Building robust, high-throughput REST and GraphQL interfaces with complex business logic.",
      icon: <Cpu className="text-accent" size={24} />,
      tags: ["Node.js", "PostgreSQL", "Redis"]
    },
    {
      title: "DevOps & CI/CD",
      description: "Implementing automated deployment pipelines and cloud infrastructure management.",
      icon: <Server className="text-accent" size={24} />,
      tags: ["Docker", "AWS", "GitHub Actions"]
    },
    {
      title: "Performance Ops",
      description: "Optimizing database queries and frontend delivery for sub-second response times.",
      icon: <Zap className="text-accent" size={24} />,
      tags: ["SEO", "Vitals", "Caching"]
    }
  ];

  const projects = [
    {
      title: "AirTeach",
      category: "AI Gesture Design Tool",
      image: "/assets/drawing app.png",
      description: "A futuristic interaction tool translating mid-air gestures into digital design commands.",
      problem: "Traditional creative tools lack the natural fluidity of physical movement in digital whiteboarding.",
      solution: "Engineered a real-time computer vision pipeline to track and interpret complex hand skeletons.",
      impact: "Achieved <50ms latency for real-time rendering, enabling a new medium for digital artists.",
      tags: ["Python", "OpenCV", "MediaPipe", "React"],
      github: "#",
      demo: "#"
    },
    {
      title: "Face Finder",
      category: "Cloud Recognition OS",
      image: "/assets/face sorter.png",
      description: "High-performance platform for organizing massive image libraries via facial recognition.",
      problem: "Enterprise-level unorganized image datasets lead to massive productivity loss in content retrieval.",
      solution: "Built a cross-platform recognition engine with Vercel Blob and custom embedding models.",
      impact: "Sub-second retrieval from 10k+ libraries with 99.2% matching accuracy.",
      tags: ["Next.js", "Face-API.js", "Vercel Blob"],
      github: "#",
      demo: "#"
    }
  ];

  const experience = [
    {
      role: "Lead Full-Stack Engineer",
      company: "SaaS Foundry",
      period: "2024 - Present",
      achievements: [
        "Architected a multi-tenant ERP that reduced operational overhead by 35% for 12+ clients.",
        "Scaled backend infrastructure to handle 5x traffic growth without increased latency.",
        "Implemented automated CI/CD reducing deployment errors by 60%."
      ]
    },
    {
      role: "Backend Architect",
      company: "DataStream Systems",
      period: "2022 - 2024",
      achievements: [
        "Optimized PostgreSQL queries resulting in a 40% reduction in database CPU usage.",
        "Designed real-time notification system handling 1M+ monthly events.",
        "Led the migration from monolithic to microservices architecture."
      ]
    }
  ];

  const personalEdge = [
    { title: "Vocal Art", icon: <Music />, description: "Passionate about classical singing and acoustic performance.", image: "/assets/cyber.png" },
    { title: "Photography", icon: <Camera />, description: "Capturing architecture and street life through a minimalist lens.", image: "/assets/void.png" },
    { title: "Exploration", icon: <Map />, description: "Traveling to 15+ countries to understand global design cultures.", image: "/assets/hero.png" }
  ];

  return (
    <div className="min-h-screen bg-white text-text-primary selection:bg-accent/10 selection:text-accent overflow-x-hidden">
      <main className="w-full">

        {/* ── 1. HERO (Step 1) ── */}
        <section id="hero" className="min-h-[100vh] flex flex-col items-center justify-center relative overflow-hidden bg-white py-20 px-6">
          <div className="absolute inset-0 z-0">
            <MeshGradient />
          </div>
          
          <div className="container-portfolio relative z-10 flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              <div className="flex items-center gap-2 bg-accent/5 text-accent px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-accent/10">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for Q3 Consultations
              </div>
              
              <h1 className="text-[clamp(3rem,10vw,6.5rem)] font-black tracking-tighter leading-[0.9] text-text-primary mb-2 uppercase">
                I build <span className="text-gradient">scalable SaaS</span> platforms.
              </h1>
              
              <p className="text-lg md:text-2xl font-medium max-w-2xl text-text-secondary leading-relaxed mb-8">
                Senior Engineer specializing in high-performance backend systems, 
                automated DevOps, and production-grade product architecture.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#works" className="bg-accent text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-accent-hover hover:-translate-y-1 transition-all shadow-2xl shadow-accent/20 flex items-center gap-3">
                  View Projects
                  <ArrowRight size={18} />
                </Link>
                <Link href="#contact" className="bg-surface text-text-primary border border-border px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-bg hover:-translate-y-1 transition-all shadow-sm">
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Elements (Subtle Motion) */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl"
          />
        </section>

        {/* ── 2. PROOF STRIP (Step 2) ── */}
        <section className="bg-text-primary py-12 relative overflow-hidden">
          <div className="container-portfolio grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Products Built", value: "24+", icon: <Rocket size={20} /> },
              { label: "SaaS Scaling", value: "10M+", icon: <Layers size={20} /> },
              { label: "Uptime SLA", value: "99.9%", icon: <ShieldCheck size={20} /> },
              { label: "Open Source", value: "500+", icon: <Github size={20} /> }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                <div className="text-accent mb-2">{stat.icon}</div>
                <span className="text-3xl font-black text-white tracking-tighter">{stat.value}</span>
                <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. CAPABILITIES (Step 3) ── */}
        <section id="skills" className="section-padding bg-bg relative">
          <div className="container-portfolio">
            <div className="flex flex-col items-center text-center mb-20">
              <span className="text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-4">Core Focus</span>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-text-primary uppercase">What I <span className="text-gradient">Build</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((cap) => (
                <motion.div 
                  key={cap.title}
                  whileHover={{ y: -10 }}
                  className="bg-surface p-8 rounded-[2rem] border border-border/50 shadow-xl shadow-black/5 flex flex-col gap-6"
                >
                  <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center">
                    {cap.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-text-primary uppercase tracking-tight">{cap.title}</h3>
                    <p className="text-sm text-text-secondary font-medium leading-relaxed">{cap.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cap.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black text-accent bg-accent/5 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. CASE STUDIES (Step 4) ── */}
        <section id="works" className="section-padding bg-white">
          <div className="container-portfolio">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-accent font-black text-[10px] tracking-[0.4em] uppercase">Selection</span>
                <h2 className="text-4xl lg:text-7xl font-black tracking-tighter leading-none text-text-primary uppercase">Case <span className="text-gradient">Studies</span></h2>
              </div>
            </div>

            <div className="space-y-32">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
                >
                  <div className="w-full lg:w-3/5 group relative">
                    <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-border/50 shadow-2xl">
                      <Image 
                        src={project.image} 
                        fill 
                        alt={project.title}
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-2/5 space-y-8">
                    <div className="space-y-4">
                      <span className="text-xs font-black text-accent uppercase tracking-widest">{project.category}</span>
                      <h3 className="text-4xl lg:text-5xl font-black text-text-primary tracking-tighter uppercase">{project.title}</h3>
                      <p className="text-lg text-text-secondary font-medium leading-relaxed">{project.description}</p>
                    </div>

                    <div className="space-y-6 pt-6 border-t border-border/50">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black text-text-secondary uppercase tracking-widest flex items-center gap-2">
                          <div className="w-4 h-[1px] bg-text-secondary" /> Problem
                        </span>
                        <p className="text-sm text-text-primary font-bold">{project.problem}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-black text-text-secondary uppercase tracking-widest flex items-center gap-2">
                          <div className="w-4 h-[1px] bg-text-secondary" /> Impact
                        </span>
                        <p className="text-sm text-accent font-black">{project.impact}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Link href={project.demo} className="flex items-center gap-2 bg-text-primary text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-accent transition-colors">
                        Live Demo <ExternalLink size={14} />
                      </Link>
                      <Link href={project.github} className="flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-bg transition-colors">
                        GitHub <Github size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. EXPERIENCE (Step 5) ── */}
        <section id="about" className="section-padding bg-bg relative">
          <div className="container-portfolio">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5 flex flex-col gap-8">
                <span className="text-accent font-black text-[10px] tracking-[0.4em] uppercase">Chronology</span>
                <h2 className="text-4xl lg:text-7xl font-black tracking-tighter leading-tight text-text-primary uppercase">The <span className="text-gradient">Journey</span></h2>
                <p className="text-xl text-text-secondary font-medium leading-relaxed">
                  Building production-grade systems for global organizations and hyper-growth startups since 2020.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-12">
                {experience.map((exp) => (
                  <div key={exp.company} className="relative pl-10 border-l-2 border-accent/20 pb-12 last:pb-0">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-accent border-4 border-surface" />
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="text-accent font-black text-[10px] uppercase tracking-widest">{exp.period}</span>
                        <h4 className="text-3xl font-black text-text-primary uppercase tracking-tight">{exp.role}</h4>
                        <span className="text-xl font-bold text-text-secondary italic">at {exp.company}</span>
                      </div>
                      <ul className="space-y-4">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-text-secondary font-medium leading-relaxed">
                            <CheckCircle2 size={16} className="text-accent shrink-0 mt-1" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. HOW I BUILD (Step 6) ── */}
        <section className="section-padding bg-white overflow-hidden">
          <div className="container-portfolio">
            <div className="text-center mb-20">
              <span className="text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-4">Workflow</span>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-text-primary uppercase">How I <span className="text-gradient">Engineer</span></h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Idea", desc: "Product discovery & goal mapping." },
                { step: "02", title: "Arch", desc: "Scalable system design & modeling." },
                { step: "03", title: "Build", desc: "High-velocity development sprints." },
                { step: "04", title: "Deploy", desc: "Automated cloud orchestration." },
                { step: "05", title: "Scale", desc: "Performance tuning & optimization." }
              ].map((item) => (
                <div key={item.step} className="flex flex-col gap-4 text-center items-center group">
                  <div className="w-20 h-20 rounded-[2rem] bg-bg border border-border/50 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-lg shadow-black/5">
                    <span className="text-2xl font-black">{item.step}</span>
                  </div>
                  <h4 className="font-black text-text-primary uppercase tracking-tight">{item.title}</h4>
                  <p className="text-xs text-text-secondary font-medium leading-relaxed max-w-[150px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. PERSONAL EDGE (Step 7) ── */}
        <section className="section-padding bg-bg relative">
          <div className="container-portfolio">
            <div className="flex flex-col items-center text-center mb-20">
              <span className="text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-4">Interests</span>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-text-primary uppercase">Beyond <span className="text-gradient">Code</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {personalEdge.map((item) => (
                <motion.div 
                  key={item.title}
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                >
                  <Image src={item.image} fill alt={item.title} className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-text-primary via-text-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end gap-4">
                    <div className="text-accent">{item.icon}</div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{item.title}</h3>
                    <p className="text-white/70 text-sm font-medium leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. FINAL CTA (Step 11) ── */}
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-text-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <MeshGradient />
          </div>
          
          <div className="container-portfolio relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-6">
                <span className="text-accent font-black text-[10px] tracking-[0.4em] uppercase">Transmission</span>
                <h2 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none text-white uppercase">Let's build <span className="text-gradient">Impact</span> together.</h2>
                <p className="text-xl text-white/60 font-medium leading-relaxed max-w-md">
                  Open for high-level architectural consultations and selective SaaS engineering partnerships.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <a href="mailto:hello@akshay.dev" className="text-3xl font-black text-accent hover:text-white transition-colors tracking-tighter">hello@akshay.dev</a>
                <div className="flex gap-4">
                  <Link href="#" className="p-4 bg-white/5 rounded-2xl text-white hover:bg-accent transition-all"><Github /></Link>
                  <Link href="#" className="p-4 bg-white/5 rounded-2xl text-white hover:bg-accent transition-all"><Globe /></Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-surface p-10 rounded-[3rem] shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {formStatus === "success" ? (
                    <div className="py-20 text-center space-y-4">
                      <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent mb-4">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-2xl font-black uppercase text-text-primary">Signal Received</h3>
                      <p className="text-text-secondary font-medium">I'll get back to you within 12 hours.</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-accent uppercase tracking-widest">Your Mission</label>
                        <input 
                          required
                          className="w-full bg-transparent border-b-2 border-border py-4 font-bold text-xl focus:outline-none focus:border-accent transition-colors"
                          placeholder="What are we building?"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-accent uppercase tracking-widest">Email Address</label>
                        <input 
                          type="email"
                          required
                          className="w-full bg-transparent border-b-2 border-border py-4 font-bold text-xl focus:outline-none focus:border-accent transition-colors"
                          placeholder="Where to reach you?"
                        />
                      </div>
                      <button 
                        className="w-full bg-accent text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-accent-hover hover:-translate-y-1 transition-all shadow-xl shadow-accent/20"
                      >
                        Initialize Build
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
