import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

/**
 * The one CTA button on the site. Before this existed, the nav CTA, hero
 * CTAs, contact CTA and the /research CTA each hand-rolled their own radius,
 * padding, case and hover — four different-looking "primary" buttons. Every
 * button now renders through here so radius/padding/type/hover/color/shadow
 * can only be changed in one place.
 */

const SIZE = {
  sm: "h-9 px-4 text-xs gap-1.5",
  lg: "px-8 py-4 text-sm gap-2",
  mobile: "w-full py-4 text-base gap-2",
} as const;

const VARIANT = {
  primary:
    "bg-accent text-white hover:bg-accent-dark hover:shadow-[0_10px_28px_-10px_rgba(0,147,214,0.55)]",
  secondary:
    "border border-border-strong text-text-primary bg-transparent hover:border-accent hover:text-accent",
} as const;

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANT;
  size?: keyof typeof SIZE;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function CtaButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  icon = false,
  className = "",
  onClick,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`pressable group inline-flex items-center justify-center rounded-full font-mono tracking-[0.12em] uppercase transition-[background-color,box-shadow,color,border-color] duration-200 ${SIZE[size]} ${VARIANT[variant]} ${className}`}
    >
      {children}
      {icon && (
        <ArrowRight
          className={size === "sm" ? "w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" : "w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"}
        />
      )}
    </Link>
  );
}
