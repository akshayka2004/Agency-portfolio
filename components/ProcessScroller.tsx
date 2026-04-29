"use client";
import { motion, useScroll, useTransform, useMotionValue, useVelocity, useSpring, type MotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ── constants ── */
const DEFAULT_CARD_W = 340;
const CARD_H  = 560;
const TAG_H   = 76;
const HOLE_D  = 44;
const ROD_H   = 14;
const GAP     = 20;
const PAD_T   = 60;
const ROD_Y   = PAD_T + TAG_H / 2 - ROD_H / 2; // absolute top of rod in scroller
const ROD_G   = "linear-gradient(to bottom,#E2E8F0 0%,#F8FAFC 25%,#FFFFFF 50%,#F8FAFC 75%,#E2E8F0 100%)";

const SERVICES = [
  { code:"ERP", date:"01-20-26", name:"AI ERP Systems",      accent:"#16A34A", bg:"#FFFFFF", top:["Cloud Sync","AI Insights","Automation","Scalable"], bottom:["Enterprise","Custom","Reporting","Security"], from:"LEG", to:"AI" },
  { code:"WEB", date:"06-20-12", name:"Web Design",        accent:"#2563EB", bg:"#FFFFFF", top:["UI/UX","Prototypes","Components","Design Systems"], bottom:["Figma","Wireframes","Interactions","User Journeys"], from:"WIR", to:"PRO" },
  { code:"DEV", date:"02-20-03", name:"Web Dev",           accent:"#7C3AED", bg:"#FFFFFF", top:["Next.js","Tailwind","TypeScript","Vercel"], bottom:["Performance","SEO","API Ready","Clean Code"], from:"FRO", to:"BCK" },
  { code:"SAS", date:"03-20-25", name:"SaaS Services",     accent:"#0891B2", bg:"#FFFFFF", top:["Multi-tenant","Sub-billing","Auth","Dashboards"], bottom:["Scalable","Global","API First","Secure"], from:"IDL", to:"MRK" },
  { code:"AUT", date:"11-20-25", name:"AI Automation",      accent:"#4F46E5", bg:"#FFFFFF", top:["Workflows","LLM Ops","RPA","Agents"], bottom:["Efficient","Fast","Reliable","Smart"], from:"MAN", to:"AUT" },
  { code:"APP", date:"04-20-26", name:"App Development",   accent:"#DB2777", bg:"#FFFFFF", top:["iOS/Android","Native","Cross-platform","UI"], bottom:["Mobile","Fast","Modern","Store-ready"], from:"IDE", to:"APP" },
];

/*
  ══════════════════════════════════════════════════════
  REFERENCE ARCHITECTURE (Dave Holloway style):
  - Background rod (z:0) behind everything.
  - Card (z:1) entirely in front of background rod. Tag and Body are just one container.
  - Foreground connector (z:4) starts from the CENTER of the hole and extends RIGHT across the gap to the next hole center.
    This means the LEFT side of the card is OVER the rod, and the RIGHT side is UNDER the rod.
    This creates the "threading through" illusion perfectly.
  ══════════════════════════════════════════════════════
*/

function ServiceCard({ s, rot, cardW }: { s: typeof SERVICES[0]; rot: MotionValue<number>; cardW: number }) {
  const slotW   = cardW + GAP;
  const acc     = s.accent;
  const isLight = true;
  const dimTxt  = "rgba(15,23,42,0.6)";
  const bodyTxt = "rgba(15,23,42,0.8)";
  const mrkrC   = `${acc}`;
  const divLine = "rgba(226,232,240,1)";
  const labelC  = `${acc}`;
  const pivotX  = cardW / 2;
  const pivotY  = TAG_H / 2;

  return (
    <div style={{ width: slotW, flexShrink: 0, position: "relative" }}>
      
      {/* ── CARD LAYER (z: 1) ─────────────────────── */}
      <motion.div
        style={{
          rotate: rot,
          transformOrigin: `${pivotX}px ${pivotY}px`,
          width: cardW,
          height: CARD_H,
          position: "relative",
          zIndex: 1,
          willChange: "transform",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
        }}
      >
        {/* TAG */}
        <div style={{
          height: TAG_H,
          backgroundColor: acc,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 22px",
          position: "relative",
        }}>
          <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: dimTxt }}>{s.code}</span>
          
          {/* HOLE: Cutout that reveals the BG Rod behind the card */}
          <div style={{
            width: HOLE_D, height: HOLE_D, borderRadius: "50%",
            backgroundColor: "#F8FAFC", // Make it look like a hole letting dark rod through
            border: "2px solid rgba(226,232,240,1)",
            boxShadow: "inset 0 3px 6px rgba(0,0,0,0.05)",
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
          }}>
            {/* The BG Rod is z:0, Card is z:1, so we simulate the rod passing through the hole */}
            <div style={{
              position: "absolute", top: "50%", left: 0, right: 0, height: ROD_H, transform: "translateY(-50%)",
              background: ROD_G, boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }} />
          </div>

          <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: dimTxt }}>{s.date}</span>
        </div>

        {/* BODY */}
        <div style={{
          height: CARD_H - TAG_H,
          backgroundColor: s.bg,
          border: `1px solid ${acc}12`,
          borderTop: "none",
          display: "flex", flexDirection: "column",
          padding: "22px 24px 22px",
        }}>
          {/* code + label */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.03em", color: acc, textTransform: "uppercase" }}>{s.code}</span>
            <span style={{ fontSize: 8, fontWeight: 800, letterSpacing: "0.35em", color: labelC, textTransform: "uppercase" }}>SERVICE</span>
          </div>
          {/* title */}
          <h3 style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, textTransform: "uppercase", color: acc, margin: "0 0 16px" }}>
            {s.name}
          </h3>
          {/* markers */}
          <div style={{ borderTop: `1px solid ${divLine}`, borderBottom: `1px solid ${divLine}`, paddingTop: 14, paddingBottom: 14, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {s.top.map(m => (
                <div key={m} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                  <svg width="8" height="6" viewBox="0 0 8 6" fill={mrkrC}><path d="M4 0L8 6H0L4 0Z" /></svg>
                  <span style={{ fontSize: 7.5, fontWeight: 800, textTransform: "uppercase", color: bodyTxt, whiteSpace: "nowrap", letterSpacing: "0.04em", lineHeight: 1 }}>{m}</span>
                </div>
              ))}
            </div>
            <div style={{ height: 1, background: divLine }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {s.bottom.map(m => (
                <div key={m} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                  <span style={{ fontSize: 7.5, fontWeight: 800, textTransform: "uppercase", color: bodyTxt, whiteSpace: "nowrap", letterSpacing: "0.04em", lineHeight: 1 }}>{m}</span>
                  <svg width="8" height="6" viewBox="0 0 8 6" fill={mrkrC} style={{ transform: "rotate(180deg)" }}><path d="M4 0L8 6H0L4 0Z" /></svg>
                </div>
              ))}
            </div>
          </div>
          {/* journey */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, marginTop: 14, borderTop: `1px solid ${divLine}` }}>
            <span style={{ fontSize: "0.95rem", fontWeight: 900, fontStyle: "italic", letterSpacing: "-0.04em", color: acc }}>{s.from}</span>
            <svg width="70" height="10" viewBox="0 0 70 10" fill="none">
              <line x1="0" y1="5" x2="60" y2="5" stroke={`${acc}50`} strokeWidth="1.5" />
              <path d="M56 1.5L62 5L56 8.5" stroke={`${acc}50`} strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
            <span style={{ fontSize: "0.95rem", fontWeight: 900, fontStyle: "italic", letterSpacing: "-0.04em", color: acc }}>{s.to}</span>
          </div>
        </div>
      </motion.div>

      {/* ── FOREGROUND CONNECTOR (z: 4) ────────────────
          This completes the "threaded" illusion.
          It sits on top of the card's right half.
          Starts at the horizontal center of the tag (the hole),
          and spans all the way across the gap to the next hole.
      ────────────────────────────────────────────────── */}
      <div style={{
        position: "absolute",
        top: TAG_H / 2 - ROD_H / 2, // Centered vertically in tag
        left: pivotX,               // Starts at horizontal center of hole
        width: cardW / 2 + GAP,    // Extends across right half of card + gap
        height: ROD_H,
        zIndex: 4,                  // Above the card
        background: ROD_G,
        boxShadow: "0 3px 8px rgba(0,0,0,0.1)", // Shadow overlapping the tag
        pointerEvents: "none",
      }} />

    </div>
  );
}

export function ProcessScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x   = useMotionValue(0);
  const vel = useVelocity(x);
  const raw = useMotionValue(0);
  const rot = useSpring(raw, { stiffness: 55, damping: 14, mass: 1.4 });

  useEffect(() => {
    return vel.on("change", (v: number) => raw.set(Math.max(-10, Math.min(10, v / 100))));
  }, [vel, raw]);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const hO = useTransform(scrollYProgress, [0, 0.08, 0.2], [0, 0, 1]);
  const hY = useTransform(scrollYProgress, [0, 0.08, 0.2], [56, 56, 0]);

  const [winSize, setWinSize] = useState({ w: 1200, isMobile: false });

  useEffect(() => {
    const handle = () => setWinSize({ w: window.innerWidth, isMobile: window.innerWidth < 768 });
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const cardW    = winSize.isMobile ? 280 : 340;
  const padL     = winSize.isMobile ? 20 : 60;
  const slotW    = cardW + GAP;
  const contentW = padL + SERVICES.length * slotW + 40;
  const maxLeft  = Math.min(0, winSize.w - contentW);
  const scrollH  = PAD_T + CARD_H + 32;

  return (
    <section ref={containerRef} id="services" aria-label="Services"
      style={{ backgroundColor: "#FFFFFF", overflow: "hidden", position: "relative" }}
      className="border-y border-border"
    >
      {/* header */}
      <motion.div style={{ opacity: hO, y: hY }} className="px-8 md:px-20 pt-28 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-border">
          <h2 className="font-bold tracking-tight leading-[0.8] text-text-primary" style={{ fontSize: "clamp(3rem, 12vw, 8rem)" }}>
            Services<span className="text-accent animate-[blink_1s_steps(2,start)_infinite]">.</span>
          </h2>
          <p className="text-sm font-semibold uppercase opacity-70 max-w-[250px] leading-snug tracking-tight text-text-secondary">
            Full-stack creative execution — from ground zero to award-worthy launch.{" "}
            <span className="text-accent opacity-100">Start a riot.</span>
          </p>
        </div>
      </motion.div>

      {/* ─── SCROLLER ─── */}
      <div style={{ position: "relative", height: scrollH, overflow: "visible" }}>

        {/* z:0 – background rod (behind everything) */}
        <div style={{ position:"absolute", top:ROD_Y, left:-600, width:"14000px", height:ROD_H, zIndex:0, background:ROD_G, boxShadow:"0 2px 8px rgba(0,0,0,0.1)", pointerEvents:"none" }} />

        {/* ━━ DRAGGABLE STRIP (z:1) ━━ */}
        <motion.div
          drag="x"
          dragConstraints={{ right: 30, left: maxLeft }}
          dragTransition={{ bounceStiffness: 220, bounceDamping: 28 }}
          style={{
            x,
            display: "flex", alignItems: "flex-start",
            paddingTop: PAD_T, paddingLeft: padL, paddingRight: 40,
            position: "absolute", top: 0, left: 0,
            cursor: "grab", userSelect: "none",
            zIndex: 1,
            touchAction: "pan-y",
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          {SERVICES.map(s => <ServiceCard key={s.code} s={s} rot={rot} cardW={cardW} />)}
        </motion.div>

      </div>

      {/* wave stack */}
      <div style={{ position:"relative", height:320, overflow:"hidden", pointerEvents:"none" }}>
        {[
          { d:"M0 376.585V16.0845C0 16.0845 147.403 59.6547 323 69.0851C518.5 79.5845 682.5 0.000161173 912.5 9.42816e-10C1142.5 -0.000161171 1509 46.5846 1509 46.5846L1509 376.585H0Z", vb:"0 0 1509 377", f:"#F8FAFC", b:0   },
          { d:"M0 360.551V44.052C0 44.052 152.5 -16.8287 326.5 4.55171C483.735 23.8721 695.5 75.0509 912.5 44.0518C1129.5 13.0526 1509 4.55178 1509 4.55178V360.551H0Z",                vb:"0 0 1509 361", f:"#F1F5F9", b:-4  },
          { d:"M0 339.442V5.4416C0 5.4416 258.466 140.992 423 89.9409C572.689 43.4955 847.5 -37.2396 1064.5 19.4414C1281.5 76.1224 1509 49.7433 1509 49.7433V339.442H0Z",             vb:"0 0 1509 340", f:"#E2E8F0", b:-8  },
          { d:"M0.00012207 308.681V142.179C0.00012207 142.179 243.277 40.1041 407.811 7.67898C557.5 -21.8206 776.5 40.6797 993.5 76.6804C1210.5 112.681 1509 124.68 1509 124.68V308.681H0.00012207Z", vb:"0 0 1509 309", f:"#F8FAFC", b:-12 },
          { d:"M0.00012207 310.811V31.1329C0.00012207 31.1329 240.612 151.144 407.811 172.924C583.5 195.81 762.5 189.31 993.5 78.8102C1224.5 -31.6892 1509 6.31019 1509 6.31019V310.811H0.00012207Z", vb:"0 0 1509 311", f:"#FFFFFF", b:-16 },
        ].map((w, i) => (
          <div key={i} style={{ position:"absolute", bottom:w.b, width:"100%" }}>
            <svg width="100%" height="auto" viewBox={w.vb} preserveAspectRatio="xMidYMax meet"><path d={w.d} fill={w.f} /></svg>
          </div>
        ))}
      </div>
    </section>
  );
}
