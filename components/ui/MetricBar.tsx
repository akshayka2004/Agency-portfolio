"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * (to - from) + from));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

const metrics = [
  { value: 24, label: "Projects Delivered", prefix: "", suffix: "+" },
  { value: 12, label: "Industries Served", prefix: "", suffix: "" },
  { value: 6, label: "Research Domains", prefix: "", suffix: "" },
  { value: 15, label: "Enterprise Systems", prefix: "", suffix: "+" },
  { value: 500, label: "Automation Hrs Saved", prefix: "", suffix: "k+" }
];

export function MetricBar() {
  return (
    <section className="w-full border-y border-border/20 bg-surface/50 backdrop-blur-md py-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-between">
        {metrics.map((metric, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex flex-col items-center text-center gap-2"
          >
            <div className="text-4xl md:text-5xl font-bold text-text-primary tracking-tighter">
              {metric.prefix}<Counter from={0} to={metric.value} />{metric.suffix}
            </div>
            <div className="text-[10px] font-mono text-accent uppercase tracking-widest">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
