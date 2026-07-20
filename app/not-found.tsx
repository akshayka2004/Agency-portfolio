import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg text-text-primary flex items-center justify-center px-6">
      <div className="max-w-[520px] w-full text-center flex flex-col items-center gap-6">
        <div className="font-mono text-xs tracking-[0.16em] uppercase text-accent">
          Hold — 404
        </div>
        <div className="brand-rule w-14" />
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight leading-[1.1]">
          This one never made it to the pad.
        </h1>
        <p className="text-text-secondary leading-relaxed">
          The page you asked for doesn&apos;t exist. It may have been moved, renamed, or it was
          never here to begin with.
        </p>
        <Link
          href="/"
          className="pressable inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-mono text-sm tracking-[0.12em] uppercase transition-[background-color,box-shadow] duration-200 hover:bg-accent-dark hover:shadow-[0_10px_28px_-10px_rgba(0,147,214,0.55)]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to base
        </Link>
      </div>
    </div>
  );
}
