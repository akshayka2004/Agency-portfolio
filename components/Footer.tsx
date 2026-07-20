import Link from "next/link";
import Brand from "@/components/Brand";
import BrandMark from "@/components/BrandMark";
import { CONTACT } from "@/lib/content";

const COLUMNS = [
  {
    heading: "Capabilities",
    links: [
      { label: "Web & mobile", href: "/#services" },
      { label: "SaaS engineering", href: "/#services" },
      { label: "AI & automation", href: "/#services" },
      { label: "Hardware R&D", href: "/#rd" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Selected work", href: "/works" },
      { label: "Research notes", href: "/research" },
      { label: "Founders", href: "/#founders" },
      { label: "About", href: "/about" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" aria-label="T−0 home" className="self-start">
              <BrandMark height={40} />
            </Link>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              You think. We build. The moment in between is <Brand />.
            </p>
            <div className="brand-rule w-12" />
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3.5">
              <h4 className="text-sm font-semibold text-text-primary">{column.heading}</h4>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
            >
              {CONTACT.email}
            </a>
            {CONTACT.linkedin && (
              <a
                href={CONTACT.linkedin}
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
              >
                LinkedIn
              </a>
            )}
            {CONTACT.github && (
              <a
                href={CONTACT.github}
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
              >
                GitHub
              </a>
            )}
          </div>

          <div className="flex items-center gap-6">
            <p className="text-sm text-text-tertiary">
              &copy; {currentYear} <Brand />.
            </p>
            <Link
              href="/privacy"
              className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
