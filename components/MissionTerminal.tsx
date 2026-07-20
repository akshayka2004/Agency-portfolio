"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useMissionClock } from "@/components/MissionClock";

/**
 * A boot log that types itself out, then holds a live prompt.
 * Purely decorative — marked aria-hidden so screen readers skip the theatre.
 */
const BOOT_SEQUENCE = [
  { prompt: "t0@launch:~$", command: "./preflight --all", pause: 420 },
  { output: "checking web ........... ok", tone: "ok" },
  { output: "checking mobile ........ ok", tone: "ok" },
  { output: "checking saas .......... ok", tone: "ok" },
  { output: "checking ai ............ ok", tone: "ok" },
  { output: "checking hardware ...... ok", tone: "ok" },
  { output: "5 disciplines online · 0 hand-offs", tone: "note" },
] as const;

const IDLE_COMMANDS = [
  "build web-platform --scale",
  "deploy mobile-app --offline-first",
  "provision saas --multi-tenant",
  "integrate document-ai --on-prem",
  "flash firmware --target=embedded",
];

type Line = { prompt?: string; command?: string; output?: string; tone?: string };

export default function MissionTerminal() {
  const shouldReduceMotion = useReducedMotion();
  const clock = useMissionClock();

  const [typedLines, setTypedLines] = useState<Line[]>([]);
  const [typedCommand, setTypedCommand] = useState("");
  const [typedBootDone, setTypedBootDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reduced motion skips the theatre and shows the settled end state, derived at
  // render time so no effect has to write it.
  const visibleLines: Line[] = shouldReduceMotion ? [...BOOT_SEQUENCE] : typedLines;
  const bootDone = shouldReduceMotion || typedBootDone;
  const command = shouldReduceMotion ? IDLE_COMMANDS[0] : typedCommand;

  // Boot log reveal
  useEffect(() => {
    if (shouldReduceMotion) return;

    let index = 0;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      if (index >= BOOT_SEQUENCE.length) {
        setTypedBootDone(true);
        return;
      }
      const line = BOOT_SEQUENCE[index];
      setTypedLines((prev) => [...prev, line]);
      index++;
      timer = setTimeout(step, "pause" in line && line.pause ? line.pause : 260);
    };

    timer = setTimeout(step, 400);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  // Live prompt cycles through commands once the boot log settles
  useEffect(() => {
    if (!bootDone || shouldReduceMotion) return;

    let commandIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = IDLE_COMMANDS[commandIndex];

      if (!deleting) {
        charIndex++;
        setTypedCommand(current.slice(0, charIndex));
        if (charIndex >= current.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
        timer = setTimeout(tick, 48);
      } else {
        charIndex--;
        setTypedCommand(current.slice(0, Math.max(charIndex, 0)));
        if (charIndex <= 0) {
          deleting = false;
          commandIndex = (commandIndex + 1) % IDLE_COMMANDS.length;
          timer = setTimeout(tick, 320);
          return;
        }
        timer = setTimeout(tick, 26);
      }
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [bootDone, shouldReduceMotion]);

  // Keep the newest line in view as the log grows
  useEffect(() => {
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [visibleLines.length, command]);

  return (
    <div
      className="terminal beam-ring relative rounded-xl border border-border overflow-hidden shadow-[0_24px_60px_-28px_rgba(16,22,31,0.45)]"
      aria-hidden="true"
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-3 px-4 py-3 border-b border-white/8"
        style={{ background: "var(--term-bg-bar)" }}
      >
        <span className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-lime)]" />
        </span>
        <span className="term-chrome text-[10px] text-[var(--term-muted)]">
          t0 — mission console
        </span>
        <span className="term-chrome ml-auto text-[10px] text-[var(--accent-lime)] tabular-nums">
          {clock}
        </span>
      </div>

      {/* Screen */}
      <div
        ref={scrollRef}
        className="terminal-screen relative px-5 py-5 h-[300px] overflow-hidden text-[12.5px] leading-[1.85]"
      >
        {visibleLines.map((line, i) =>
          line.command ? (
            <div key={i} className="flex gap-2">
              <span className="text-[var(--accent-lime)] shrink-0">{line.prompt}</span>
              <span className="text-[var(--term-text)]">{line.command}</span>
            </div>
          ) : (
            <div
              key={i}
              className={
                line.tone === "note"
                  ? "text-[var(--accent-light)] mt-1"
                  : "text-[var(--term-muted)]"
              }
            >
              {line.output?.replace(/ok$/, "")}
              {line.tone === "ok" && <span className="text-[var(--accent-lime)]">ok</span>}
            </div>
          ),
        )}

        {bootDone && (
          <div className="flex gap-2 mt-2">
            <span className="text-[var(--accent-lime)] shrink-0">t0@launch:~$</span>
            <span className="text-[var(--term-text)]">
              {command}
              <span className="caret inline-block w-[7px] h-[1.05em] bg-[var(--accent-light)] ml-0.5 align-text-bottom" />
            </span>
          </div>
        )}

        {/* Screen falloff so the log fades rather than clipping hard */}
        <div
          className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
          style={{ background: "linear-gradient(transparent, var(--term-bg))" }}
        />
      </div>
    </div>
  );
}
