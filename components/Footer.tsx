"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#FFFFFF] border-t border-[#E2E8F0] text-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 sm:gap-12 mb-12 sm:mb-16 md:mb-24">
          <div className="text-[clamp(3rem,12vw,8rem)] font-bold tracking-tighter leading-none">
            T-MINUS <span className="font-[family-name:var(--font-jetbrains-mono)] [font-variant-numeric:slashed-zero] text-[1.2em] inline-block translate-y-[0.05em]">0</span>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <span className="font-semibold uppercase tracking-[0.4em] text-xs text-[#64748B]">SOCIAL INSURGENCY //</span>
            <div className="flex flex-wrap gap-4 sm:gap-8 text-lg sm:text-xl md:text-2xl font-medium uppercase text-[#64748B]">
              <a className="hover:text-[#16A34A] hover:translate-x-1 transition-all" href="#">Insta</a>
              <a className="hover:text-[#16A34A] hover:translate-x-1 transition-all" href="#">X / TW</a>
              <a className="hover:text-[#16A34A] hover:translate-x-1 transition-all" href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-[#E2E8F0] pt-6 sm:pt-8 gap-6 sm:gap-4">
          <div className="font-medium uppercase text-[#64748B] text-xs">
            © 1984 – 2026 T-MINUS <span className="font-[family-name:var(--font-jetbrains-mono)] [font-variant-numeric:slashed-zero]">0</span>. <br />
            NO RIGHTS RESERVED. <br />
            DISTRIBUTED UNDER THE CHAOS LICENSE.
          </div>
          <div>
            <span className="font-bold uppercase text-xl sm:text-2xl md:text-3xl text-[#16A34A]">START A LATE NIGHT PROJECT.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
