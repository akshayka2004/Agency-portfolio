"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Brand from "@/components/Brand";
import { FOUNDERS } from "@/lib/content";

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const PRINCIPLES = [
  {
    kicker: "01",
    title: "Understand before building",
    desc: "Every engagement starts with the problem, not the stack. If the honest answer is that you don't need what you came to ask for, we say so.",
  },
  {
    kicker: "02",
    title: "Small team, no hand-offs",
    desc: "The people who scope your project build it. Nothing is lost in translation between a sales call and an engineer.",
  },
  {
    kicker: "03",
    title: "Ship, then stay",
    desc: "Launch is the middle of the story. We monitor, support and iterate on the systems we put into production.",
  },
  {
    kicker: "04",
    title: "Pixels to PCBs",
    desc: "Interface design and board-level firmware under one roof — which means the seams between them are ours to solve, not yours.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary overflow-x-hidden pt-32 pb-28">
      <main className="w-full max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[760px] mb-16"
        >
          <div className="font-mono text-xs tracking-[0.16em] uppercase text-accent">
            About the studio
          </div>
          <div className="brand-rule w-14 mt-4 mb-6" />
          <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.06] mb-6">
            A studio built around the gap between an idea and a running system.
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            <Brand />{" "}
            is an engineering and design studio in Kerala, India. We work across web, mobile,
            SaaS, applied AI and hardware R&amp;D — the whole span, because the interesting problems
            rarely sit inside one of those boxes.
          </p>
        </motion.section>

        {/* Founders */}
        <motion.section {...reveal} transition={{ duration: 0.6 }} className="mb-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border border-border bg-surface">
              <Image
                src="/founders.png"
                alt="The two founders of T−0 outside the studio in Kerala, India"
                width={1536}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 620px"
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-lime-dark">
                The founders
              </span>

              <h2 className="text-2xl font-bold tracking-tight">
                Two engineers who kept meeting in the middle.
              </h2>

              <div className="flex flex-col gap-2.5">
                {FOUNDERS.map((founder) => (
                  <div key={founder.name} className="flex flex-col gap-0.5">
                    <span className="text-lg font-bold tracking-tight">{founder.name}</span>
                    {founder.title && (
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                        {founder.title}
                      </span>
                    )}
                    {founder.bio && (
                      <p className="text-sm text-text-secondary leading-relaxed mt-1">
                        {founder.bio}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-text-secondary leading-relaxed">
                One came at problems from the browser down, the other from the circuit board up.{" "}
                <Brand /> is what that overlap became — a studio that can design an interface in the
                morning
                and read a firmware dump in the afternoon, without outsourcing either.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We stay deliberately small. Every project is worked by the people you meet on the
                first call, and every system we hand over is one we would be willing to maintain
                ourselves.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Principles */}
        <motion.section {...reveal} transition={{ duration: 0.6 }} className="mb-24">
          <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold tracking-tight leading-[1.12] mb-10 max-w-[24ch]">
            How we work, in four lines.
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {PRINCIPLES.map((principle, i) => (
              <motion.div
                key={principle.kicker}
                {...reveal}
                transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.24) }}
                className="lift sheen edge-beam border border-border rounded-xl bg-surface p-7 flex flex-col gap-3"
              >
                <span className="font-mono text-sm tracking-[0.14em] text-accent">
                  {principle.kicker}
                </span>
                <h3 className="text-lg font-bold tracking-tight">{principle.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Closing CTA */}
        <motion.section
          {...reveal}
          transition={{ duration: 0.6 }}
          className="border-t border-border pt-14 flex flex-col items-start gap-6"
        >
          <blockquote className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold tracking-tight leading-[1.22] max-w-[22ch]">
            Technology changes every year.{" "}
            <span className="text-accent">Strong engineering doesn&apos;t.</span>
          </blockquote>
          <Link
            href="/#contact"
            className="pressable group inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-mono text-sm tracking-[0.12em] uppercase transition-[background-color,box-shadow] duration-200 hover:bg-accent-dark hover:shadow-[0_10px_28px_-10px_rgba(0,147,214,0.55)]"
          >
            Start a conversation
          </Link>
        </motion.section>
      </main>
    </div>
  );
}
