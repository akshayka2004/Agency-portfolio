"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 md:py-24 px-6 bg-primary-container border-t-8 border-black text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16 md:mb-24">
          <div className="text-6xl md:text-9xl font-black italic tracking-tighter">T-MINUS <span className="font-[family-name:var(--font-jetbrains-mono)] [font-variant-numeric:slashed-zero] text-[1.2em] inline-block translate-y-[0.05em]">0</span></div>
          <div className="flex flex-col md:items-end gap-4 w-full md:w-auto">
            <span className="font-black uppercase tracking-[0.5em] text-xs md:text-sm opacity-60">SOCIAL INSURGENCY //</span>
            <div className="grid grid-cols-2 md:flex flex-wrap gap-4 md:gap-8 text-xl md:text-2xl font-black uppercase">
              <a className="hover:italic hover:translate-x-2 transition-all" href="#">Insta</a>
              <a className="hover:italic hover:translate-x-2 transition-all" href="#">X / TW</a>
              <a className="hover:italic hover:translate-x-2 transition-all" href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end border-t-4 border-black pt-8 gap-8">
          <div className="font-black uppercase opacity-40 text-xs text-left">
            © 1984 - 2026 T-MINUS <span className="font-[family-name:var(--font-jetbrains-mono)] [font-variant-numeric:slashed-zero]">0</span>. <br />
            NO RIGHTS RESERVED. <br />
            DISTRIBUTED UNDER THE CHAOS LICENSE.
          </div>
          <div className="text-right">
            <span className="font-black uppercase italic text-4xl">START A RIOT.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
