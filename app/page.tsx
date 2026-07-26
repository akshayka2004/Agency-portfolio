"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Brand from "@/components/Brand";
import MissionClock from "@/components/MissionClock";
import MissionTerminal from "@/components/MissionTerminal";
import CtaButton from "@/components/CtaButton";
import {
  SERVICES,
  AUDIENCES,
  CASE_STUDIES,
  PROCESS_STEPS,
  RESEARCH_TRACKS,
  CAPABILITY_TICKER,
  FOUNDERS,
  CONTACT,
} from "@/lib/content";

/** Shared scroll-reveal. Cheap, consistent, and respects reduced motion via `useReducedMotion`. */
const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

function SectionHead({
  seq,
  title,
  lead,
}: {
  seq: string;
  title: string;
  lead: React.ReactNode;
}) {
  return (
    <motion.div {...reveal} transition={{ duration: 0.6 }} className="mb-14 max-w-[760px]">
      <div className="text-caption text-accent">{seq}</div>
      <div className="brand-rule w-14 mt-4 mb-6" />
      <h2 className="text-h2 font-bold mb-4 text-text-primary">
        {title}
      </h2>
      <p className="text-subtitle text-text-secondary">{lead}</p>
    </motion.div>
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  // Drives the process timeline: the spine fills as the steps scroll through
  // view, and whichever step the fill has reached lights up to match.
  const processStepsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: processProgress } = useScroll({
    target: processStepsRef,
    offset: ["start 0.8", "end 0.35"],
  });
  const spineScale = useTransform(processProgress, [0, 1], [0, 1]);
  const [activeStep, setActiveStep] = useState(0);
  useMotionValueEvent(processProgress, "change", (v) => {
    setActiveStep(Math.min(PROCESS_STEPS.length - 1, Math.floor(v * PROCESS_STEPS.length)));
  });

  return (
    <div className="min-h-screen bg-bg text-text-primary overflow-x-hidden">
      {/* ─────────── 1. HERO ─────────── */}
      <section className="relative min-h-[88vh] flex items-center border-b border-border pt-28 pb-20 overflow-hidden">
        <div className="hero-glow" aria-hidden="true" />

        <div className="relative w-full max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-7"
          >
            <div className="font-mono text-xs sm:text-sm tracking-[0.16em] uppercase text-accent font-medium">
              Software · AI · Automation · Hardware — Kerala, India
            </div>

            <h1 className="text-display font-bold text-text-primary">
              You think.
              <br />
              We build.
              <br />
              The moment in between is{" "}
              <span className="font-brand text-accent">
                T<span className="text-accent-lime">−</span>0
              </span>
              .
            </h1>

            {/* Scannable value prop — what/who/why, in one sentence, before the metaphor */}
            <p className="text-lg sm:text-xl font-semibold text-text-primary leading-snug max-w-xl">
              Software &amp; AI engineering for founders, growing businesses and industrial teams —
              web platforms, mobile apps, SaaS products, AI automation and firmware.
            </p>

            <p className="text-base text-text-secondary leading-relaxed max-w-xl">
              In a launch countdown, <Brand />{" "}
              is the instant preparation becomes liftoff. That&apos;s where we work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <CtaButton href="#contact" icon>
                Start a conversation
              </CtaButton>
              <CtaButton href="#work" variant="secondary">
                See our work
              </CtaButton>
            </div>
          </motion.div>

          {/* Live console — the countdown motif made literal */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col gap-4"
          >
            <MissionTerminal />

            {/* Balances the terminal's weight against the denser left column with
                facts already established elsewhere on the page — no invented stats. */}
            <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-5 py-4">
              <span className="flex flex-col">
                <span className="text-h3 font-bold leading-none text-text-primary">5</span>
                <span className="text-caption text-text-tertiary mt-1">Disciplines</span>
              </span>
              <span className="h-8 w-px bg-border" />
              <span className="flex flex-col">
                <span className="text-h3 font-bold leading-none text-text-primary">1</span>
                <span className="text-caption text-text-tertiary mt-1">No hand-offs</span>
              </span>
              <span className="h-8 w-px bg-border" />
              <span className="flex flex-col">
                <span className="text-h3 font-bold leading-none text-accent-lime-dark">T+</span>
                <span className="text-caption text-text-tertiary mt-1">Support after launch</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────── 2. CAPABILITY MARQUEE ─────────── */}
      <div className="marquee-wrap border-b border-border bg-surface overflow-hidden" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {CAPABILITY_TICKER.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="font-mono text-xs tracking-[0.16em] uppercase text-text-secondary py-4 px-7 border-r border-border whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─────────── 3. SERVICES ─────────── */}
      <section id="services" className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHead
            seq="SEQ 01 — What we build"
            title="Five disciplines. One team. Zero hand-offs."
            lead="Most agencies stop at the browser. We go from the interface all the way down to the firmware — which means your web app, your automation, and the code running on your devices are built by people who actually talk to each other."
          />

          <div className="border-t border-border">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.id}
                {...reveal}
                transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.24) }}
                className="group relative grid md:grid-cols-[140px_1fr_1fr] lg:grid-cols-[200px_1.1fr_1fr] gap-6 md:gap-10 py-10 pr-10 border-b border-l-2 border-l-transparent border-border transition-[background-color,border-color] duration-300 hover:bg-[linear-gradient(90deg,var(--accent-dim),transparent_45%)] hover:border-l-accent"
              >
                {/* Stretched click target — the whole row leads to the same
                    conversation-starter as the CTAs, just scoped by context. */}
                <Link
                  href="/#contact"
                  aria-label={`Start a conversation about ${svc.title}`}
                  className="absolute inset-0"
                />

                <div className="font-mono text-sm tracking-[0.14em] text-accent">
                  {svc.id}
                  <small className="block text-text-tertiary mt-1.5 text-caption">
                    {svc.category}
                  </small>
                </div>

                <div>
                  <h3 className="text-h3 font-bold mb-3 tracking-tight">{svc.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">{svc.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs tracking-wider text-text-secondary border border-border rounded px-2 py-1 bg-surface transition-colors duration-300 group-hover:border-accent-line"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5 md:pl-4">
                  {svc.bullets.map((bullet) => (
                    <li key={bullet} className="relative pl-5 text-sm text-text-primary">
                      <span className="absolute left-0 text-accent-lime font-bold">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* pointer-events-none so clicks always land on the stretched Link above,
                    even when the cursor is exactly over this icon. */}
                <ArrowUpRight
                  className="pointer-events-none absolute top-10 right-0 w-5 h-5 text-accent opacity-0 -translate-x-1 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 4. AUDIENCES ─────────── */}
      <section id="audiences" className="py-24 border-b border-border bg-surface-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHead
            seq="SEQ 02 — Who it's for"
            title="Different missions. Same launch team."
            lead="Find yourself below — each door leads to the work we've already done for teams like yours."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {AUDIENCES.map((aud, i) => (
              <motion.div
                key={aud.role}
                {...reveal}
                transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.24) }}
                className="lift sheen edge-beam border border-border rounded-xl bg-surface p-8 flex flex-col gap-4"
              >
                <span className="text-caption text-text-tertiary">
                  {aud.role}
                </span>
                <q className="text-[1.35rem] font-bold leading-snug tracking-tight text-text-primary">
                  {aud.quote}
                </q>
                <p className="text-text-secondary flex-1 leading-relaxed">{aud.desc}</p>
                <Link
                  href={aud.href}
                  className="link-draw group/link self-start inline-flex items-center gap-1.5 font-mono text-sm font-bold tracking-[0.08em] uppercase text-accent mt-2"
                >
                  {aud.linkLabel}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 5. WORK ─────────── */}
      <section id="work" className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHead
            seq="SEQ 03 — Selected work"
            title="Launched and operating."
            lead="Real systems, in production, doing real work. Client names withheld where agreements require it."
          />

          <div className="flex flex-col gap-6">
            {CASE_STUDIES.map((work, i) => (
              <motion.article
                key={work.title}
                {...reveal}
                transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.2) }}
                className="lift edge-beam border border-border rounded-xl bg-surface overflow-hidden"
              >
                <div className="flex justify-between items-baseline flex-wrap gap-4 p-8 pb-0">
                  <h3 className="text-2xl font-bold tracking-tight">{work.title}</h3>
                  <span className="font-mono text-xs tracking-[0.14em] text-text-tertiary">
                    {work.subtitle}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 mt-6 border-t border-border">
                  {(
                    [
                      ["Problem", work.problem, false],
                      ["What we built", work.built, false],
                      ["Result", work.result, true],
                    ] as const
                  ).map(([label, body, isResult], idx) => (
                    <div
                      key={label}
                      className={`p-8 border-b md:border-b-0 border-border ${
                        idx < 2 ? "md:border-r" : ""
                      } ${isResult ? "bg-[linear-gradient(180deg,var(--lime-dim),transparent_70%)]" : ""}`}
                    >
                      <span className="text-caption text-text-tertiary block mb-3">
                        {label}
                      </span>
                      <p
                        className={`text-sm leading-relaxed ${
                          isResult ? "text-text-primary font-medium" : "text-text-secondary"
                        }`}
                      >
                        {body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-5 border-t border-border flex gap-2 flex-wrap bg-surface-secondary">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs tracking-wider text-text-secondary border border-border bg-surface rounded px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div {...reveal} transition={{ duration: 0.5 }} className="mt-10">
            <Link
              href="/works"
              className="link-draw inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.12em] uppercase text-accent"
            >
              Full case study archive
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─────────── 6. PROCESS ─────────── */}
      <section id="process" className="py-24 border-b border-border bg-surface-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHead
            seq="SEQ 04 — How we launch"
            title="Every project is a countdown."
            lead="Our name is our process. Each phase clears the next — and nothing launches before it's ready."
          />

          <div className="relative mt-12 md:mt-20">
            {/* Spine track: vertical on mobile, horizontal on desktop */}
            <div className="absolute left-[5px] top-0 bottom-0 w-px bg-border-strong md:left-0 md:right-0 md:top-[30px] md:bottom-auto md:w-auto md:h-px" />

            {/* Accent fill over the track, tied to how far these steps have
                scrolled through view. scaleX drives the desktop (horizontal)
                fill, scaleY the mobile (vertical) one — the same motion value
                works for both since the track is 1px on whichever axis it
                isn't filling, so the "wrong" scale is imperceptible. */}
            <motion.div
              className="absolute left-[5px] top-0 bottom-0 w-px bg-accent md:left-0 md:right-0 md:top-[30px] md:bottom-auto md:w-auto md:h-px origin-top md:origin-left"
              style={shouldReduceMotion ? undefined : { scaleX: spineScale, scaleY: spineScale }}
              aria-hidden="true"
            />

            <div ref={processStepsRef} className="grid grid-cols-1 md:grid-cols-6 gap-9 md:gap-5 pl-9 md:pl-0">
              {PROCESS_STEPS.map((step, i) => {
                const isLaunch = "isZero" in step && step.isZero;
                const isActive = shouldReduceMotion ? isLaunch : i <= activeStep;
                return (
                  <motion.div
                    key={step.t}
                    {...reveal}
                    transition={{ duration: 0.5, delay: Math.min(i * 0.09, 0.45) }}
                    className="relative md:pt-[70px]"
                  >
                    <span
                      className={`absolute top-1.5 -left-9 md:top-6 md:left-0 w-3.5 h-3.5 rounded-full border-2 transition-colors duration-300 ${
                        isActive
                          ? "bg-accent border-accent"
                          : "bg-surface border-border-strong"
                      } ${isLaunch && isActive ? "shadow-[0_0_0_4px_var(--accent-dim)]" : ""}`}
                    />
                    <span
                      className={`font-mono text-sm tracking-[0.1em] block mb-2 md:absolute md:top-0 md:left-0 transition-colors duration-300 ${
                        isActive ? "text-accent font-semibold" : "text-text-tertiary"
                      }`}
                    >
                      {step.t}
                    </span>
                    <h3 className="text-h3 font-bold mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.p
            {...reveal}
            transition={{ duration: 0.5 }}
            className="mt-14 font-mono text-xs tracking-[0.14em] text-text-tertiary"
          >
            T+ &nbsp;·&nbsp; Operate — monitoring, support and iteration. The mission continues after
            liftoff.
          </motion.p>
        </div>
      </section>

      {/* ─────────── 7. R&D ─────────── */}
      <section id="rd" className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHead
            seq="SEQ 05 — Research & development"
            title="We investigate before you invest."
            lead="A standing internal R&D mandate keeps us ahead of the tools we deploy — and lets us take on feasibility studies most agencies would have to decline."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {RESEARCH_TRACKS.map((track, i) => (
              <motion.div
                key={track.title}
                {...reveal}
                transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.24) }}
                className="lift sheen edge-beam border border-border rounded-xl bg-surface p-8 flex flex-col gap-3"
              >
                <span className="text-caption text-accent-lime-dark">
                  {track.kicker}
                </span>
                <h3 className="text-h3 font-bold tracking-tight">{track.title}</h3>
                <p className="text-text-secondary leading-relaxed flex-1">{track.desc}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {track.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs tracking-wider text-text-secondary border border-border rounded px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...reveal} transition={{ duration: 0.5 }} className="mt-10">
            <Link
              href="/research"
              className="link-draw inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.12em] uppercase text-accent"
            >
              Read the research notes
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─────────── 8. PHILOSOPHY ─────────── */}
      <section className="py-24 border-b border-border bg-surface-secondary">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.blockquote
            {...reveal}
            transition={{ duration: 0.6 }}
            className="text-h2 font-bold max-w-[20ch]"
          >
            Technology changes every year.{" "}
            <span className="text-accent">Strong engineering doesn&apos;t.</span>
          </motion.blockquote>

          <motion.div
            {...reveal}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex flex-col gap-4 text-text-secondary leading-relaxed"
          >
            <p>
              We don&apos;t chase trends. Every decision we make — from architecture to deployment —
              follows one principle: build systems that remain valuable long after today&apos;s tools
              have changed.
            </p>
            <p>
              That&apos;s why every engagement begins with understanding the problem, not choosing
              the technology. The best technology is almost invisible: it solves problems without
              creating new ones. And the right answer is rarely the newest one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─────────── 9. FOUNDERS ─────────── */}
      <section id="founders" className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHead
            seq="SEQ 06 — The people"
            title="Two engineers, one workshop."
            lead={
              <>
                <Brand /> is small on purpose. The people who scope your project are the people who
                build it — no account layer, no hand-off, no telephone game between you and the
                code.
              </>
            }
          />

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <motion.div
              {...reveal}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden border border-border bg-surface"
            >
              <Image
                src="/founders.png"
                alt="The two founders of T−0 outside the studio in Kerala, India"
                width={1536}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 640px"
                className="w-full h-auto object-cover"
                priority={false}
              />
            </motion.div>

            <motion.div
              {...reveal}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="flex flex-col gap-5"
            >
              <p className="text-text-secondary leading-relaxed">
                Founded in Kerala by two engineers who kept ending up on the same problem from
                opposite directions — one from the browser down, one from the firmware up.{" "}
                <Brand /> is what that overlap turned into: a studio that can design an interface in
                the
                morning and read a firmware dump in the afternoon.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {FOUNDERS.map((founder) => (
                  <span
                    key={founder.name}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                    <span className="text-sm font-semibold tracking-tight">{founder.name}</span>
                    {founder.title && (
                      <span className="text-caption text-text-tertiary">
                        {founder.title}
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <p className="text-text-secondary leading-relaxed">
                We stay deliberately small. Every project is worked by the people you meet in the
                first call, and every system we hand over is one we would be willing to maintain
                ourselves.
              </p>

              <div className="brand-rule w-14 mt-2" />

              <Link
                href="/about"
                className="link-draw self-start font-mono text-xs tracking-[0.12em] uppercase text-accent"
              >
                → More about the studio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────── 10. CONTACT ─────────── */}
      <section id="contact" className="py-28">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-14">
          <motion.div {...reveal} transition={{ duration: 0.6 }}>
            <div className="text-caption text-accent">
              SEQ 07 — Begin countdown
            </div>
            <div className="brand-rule w-14 mt-4 mb-6" />
            <h2 className="text-h2 font-bold mb-6">
              Start a conversation.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-9 max-w-lg">
              No sales pitch. No pressure. Tell us where you&apos;re trying to go, and we&apos;ll
              tell you honestly whether — and how — we can get you there.
            </p>
            <CtaButton href={`mailto:${CONTACT.email}`} icon>
              Email {CONTACT.email}
            </CtaButton>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <div className="edge-beam rounded-xl border border-border bg-surface p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-caption text-text-tertiary">
                  Mission clock
                </span>
                <MissionClock className="text-sm text-accent" />
              </div>

              <div className="flex flex-col gap-1 pb-4 border-b border-border">
                <span className="text-caption text-text-tertiary">
                  Email
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="link-draw self-start text-accent font-medium"
                >
                  {CONTACT.email}
                </a>
              </div>

              {CONTACT.whatsapp && (
                <div className="flex flex-col gap-1 pb-4 border-b border-border">
                  <span className="text-caption text-text-tertiary">
                    WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
                    className="link-draw self-start text-accent font-medium"
                  >
                    {CONTACT.whatsapp}
                  </a>
                </div>
              )}

              <div className="flex flex-col gap-1">
                <span className="text-caption text-text-tertiary">
                  Location
                </span>
                <span className="text-text-primary font-medium">{CONTACT.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
