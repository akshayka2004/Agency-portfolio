"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const isAlt = index % 2 === 1;

  return (
    <div 
      ref={ref}
      className={`group border-b border-white/10 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] ${isAlt ? 'md:grid-cols-[1.5fr_1fr]' : ''} overflow-hidden scroll-mt-24 min-h-[500px] md:h-[600px]`}
    >
      {/* Image Block */}
      <div className={`relative overflow-hidden h-[300px] md:h-full border-b md:border-b-0 ${!isAlt ? 'md:border-r' : 'md:order-2'} border-white/10 bg-black/20`}>
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="w-full h-full"
        >
          <img 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
            src={project.image} 
            alt={project.title}
          />
        </motion.div>
        {/* Overlay Label (Article/Code style) */}
        <div className="absolute top-6 left-6 z-20">
          <span className="bg-primary-container text-black px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
            {project.label || "INTEL"}
          </span>
        </div>
      </div>

      {/* Text Block */}
      <div className={`p-8 md:p-16 flex flex-col justify-between bg-black/40 backdrop-blur-sm ${isAlt ? 'md:order-1 md:border-r border-white/10' : ''}`}>
        <div>
          <div className="flex justify-between items-baseline mb-8">
            <span className="text-primary-container/40 font-black text-sm tracking-widest">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-white/20 font-black text-xs tracking-widest">{project.year}</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.8] transition-colors group-hover:text-primary-container">
            {project.title}
          </h2>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tags.map((tag: string) => (
              <span key={tag} className="border border-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white/50 bg-white/5">
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-white/60 text-sm md:text-base font-medium max-w-sm leading-relaxed mb-12 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            {project.description}
          </p>
        </div>

        <Link href={project.link} className="inline-flex items-center gap-4 text-primary-container font-black uppercase text-xs tracking-[0.3em] group/btn">
          <span className="border-b border-primary-container pb-1 group-hover/btn:pr-8 transition-all duration-300 italic">READ INTEL</span>
          <span className="material-symbols-outlined transform group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    id: "void",
    title: "Project Zero",
    year: "2024",
    label: "KERNEL-LEVEL UI",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1yXNgNJKCfoTb3RIsAuh25inv9fgbDe8s5rXIN7aHCsTrUxW2UZH9EtTNckaZn6AC6h0WWDuyaT4RxfaT62z873yaPGAtglGbIe19M1V6eEzSnhyI3TXracBGpax6OCvTzvDoUT4HNKxfwrskA4OseF4Lj_oRauCjImxBwXd6bntD9avyc30Kmtx2YAYHaVjc0juApKpoNdJlr4pYw0_qzsIG79Za1S8_6us1Ys4BBFgIJ7EXwyk6MpmxkFz8SLDhAznufbZ3jW0S",
    tags: ["Rust", "WASM", "Graphics"],
    description: "A deep-dive into high-performance user interfaces built at the system level. No browser overhead. Just raw power.",
    link: "#void"
  },
  {
    id: "neon",
    title: "Neon Pulse",
    year: "2024",
    label: "GLSL SHADERS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2ABz_9pJ3g0WF_WZCPZpYutAy-5ii_4pxoPjQoUJS89ML8XJJqf0s5DLZ3UwkZVRFXh4ACkcufTGnDmLoV6geb-4Gl0Ns3Ed_8Rrx2AdeUctoP48TVOZuvQmzD2kXaubqWJ-8D7JkYsxuVlZBWwjgIjdCxGIAmg3Kf8gKOn4B824Bfeuqvw98qw8AbaOnj2o4_SF-NA0CJrIFyHPXwZBVeQsF7Fkt0vTvgRJl-UUpQ8hu7ha52d17YdjkdtcAMfEc_sAHYPHsFZyn",
    tags: ["Three.js", "Real-time", "Audio"],
    description: "Visualizing the heartbeat of the underground digital scene through real-time audio analysis and custom shaders.",
    link: "#neon"
  },
  {
    id: "cyber",
    title: "Cyber-Skins",
    year: "2023",
    label: "E-COMMERCE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT2dwxISMsJDo89WNwrff2RdmYmQtLKiGT01nbqnSADk6DNZJFvQA4iH-irxfCJ1kYxZsbkyUHf_Y9dKfhrt8dNzJRZ1sHEEF7tYIOFFGYgKiRKYezxtgRI1wua3FeikNwFCmFevUWWcFjDQSmMuZHrjSuBs_An0Y2L8HrQCChz0HE179GXjm4o9iO4k3_eNGi9kWxplOkESOvqyt5O8aNdvzjPRLFPWoAfrRZSK5HCVJj1ZUTpl--K242-UmIiI6fR0rcEwY94TGl",
    tags: ["Next.js", "Tailwind", "Cart"],
    description: "Disrupting the e-commerce monotony with an uncompromising digital store for high-end digital assets.",
    link: "#cyber"
  },
  {
    id: "riot",
    title: "Riot OS",
    year: "2023",
    label: "SYSTEM DESIGN",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA73CZZrcbgUcdimfV-6nQU-jbcRP6AB_XBSn-ZfXSqfR_ConfkHNE3_nzUB5edket-F6lIjaPvS9xK2tMl4wynioN5h9_A0AQxS-kQBWH3hepBK4b_na5egpbqplh2rQHoAwwCSLTM6q140UP3CWo6g1X4I-QVlIh_gRvHqfx_g7-c9_8P6LDkR4kIjVHp9He2NMaIvV7bU6U2ul39hdBM6Cku_8mnJSuOhJu5wEiFbF_-7366wI-IJVDe7NiTWER5HdQdrwzRRKV7",
    tags: ["C++", "Assembly", "Low-level"],
    description: "A custom operating system kernel designed for speed and security in an increasingly hostile digital landscape.",
    link: "#riot"
  }
];

export default function Works() {
  return (
    <div className="grain-overlay scanlines min-h-screen bg-background text-foreground selection:bg-neon-green selection:text-black">
      
      <main className="min-h-screen">
        {/* Header Section - RETAINED */}
        <section className="min-h-[60vh] pt-32 flex flex-col items-center justify-center px-4 md:px-12 border-b-4 border-primary-container relative overflow-hidden">
          <div className="w-full text-center z-10">
            <h1 className="text-[clamp(4rem,15vw,18rem)] font-black leading-[0.75] tracking-tighter uppercase mb-8">
              Works<span className="text-primary-container animate-[blink_1s_steps(2,start)_infinite]">.</span>
            </h1>
            <div className="flex justify-center">
              <p className="text-lg md:text-3xl max-w-4xl font-black tracking-tight uppercase opacity-80 px-4">
                Disrupting the digital monotony through brutal minimalism and uncompromising code.
              </p>
            </div>
          </div>
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{backgroundImage: 'linear-gradient(to right, #3cf91a 1px, transparent 1px), linear-gradient(to bottom, #3cf91a 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
          </div>
        </section>

        {/* Projects Grid - REWORKED */}
        <section className="w-full border-t border-white/10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 md:px-12 text-center relative border-y-8 border-primary-container">
          <h3 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tight">Ready to break the system?</h3>
          <Link href="/#contact" className="w-full max-w-4xl mx-auto block bg-primary-container text-black hover:bg-white transition-colors py-12 md:py-20 group">
            <span className="text-5xl md:text-[8rem] font-black tracking-tighter leading-none uppercase group-hover:scale-105 transition-transform inline-block">Start a riot</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
