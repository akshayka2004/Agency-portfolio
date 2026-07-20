"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function format(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

/**
 * Counts 3 seconds down to T−0, then counts up as T+ — the brand motif.
 * Static at T+00:00:00 when the visitor prefers reduced motion.
 */
export function useMissionClock() {
  const shouldReduceMotion = useReducedMotion();
  // `null` until the interval produces a value, so the reduced-motion branch is
  // derived at render time rather than written from inside the effect.
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let remaining = 3;
    let elapsed = 0;
    let launched = false;

    const id = setInterval(() => {
      if (!launched) {
        remaining -= 1;
        if (remaining <= 0) {
          launched = true;
          setLabel("T+00:00:00");
          return;
        }
        setLabel(`T−${format(remaining)}`);
      } else {
        elapsed += 1;
        setLabel(`T+${format(elapsed)}`);
      }
    }, 1000);

    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  if (label !== null) return label;
  return shouldReduceMotion ? "T+00:00:00" : "T−00:00:03";
}

export default function MissionClock({ className = "" }: { className?: string }) {
  const label = useMissionClock();

  return (
    <span
      className={`font-mono tabular-nums tracking-[0.1em] ${className}`}
      aria-label="Mission clock"
    >
      {label}
    </span>
  );
}
