import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="text-xl font-bold tracking-tight text-text-primary">
              T-0 Engineering
            </Link>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              Applied Technology Partner specializing in Enterprise Software, Artificial Intelligence, and Hardware Research & Development.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-text-primary">Capabilities</h4>
            <Link href="/#capabilities" className="text-sm text-text-secondary hover:text-accent transition-colors">Enterprise Software</Link>
            <Link href="/#capabilities" className="text-sm text-text-secondary hover:text-accent transition-colors">Artificial Intelligence</Link>
            <Link href="/#capabilities" className="text-sm text-text-secondary hover:text-accent transition-colors">Hardware R&D</Link>
            <Link href="/#capabilities" className="text-sm text-text-secondary hover:text-accent transition-colors">Cloud Infrastructure</Link>
            <Link href="/#capabilities" className="text-sm text-text-secondary hover:text-accent transition-colors">Technology Consulting</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-text-primary">Company</h4>
            <Link href="/research" className="text-sm text-text-secondary hover:text-accent transition-colors">Research Lab</Link>
            <Link href="/works" className="text-sm text-text-secondary hover:text-accent transition-colors">Case Studies</Link>
            <Link href="/#industries" className="text-sm text-text-secondary hover:text-accent transition-colors">Industries</Link>
            <Link href="/#insights" className="text-sm text-text-secondary hover:text-accent transition-colors">Insights</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-text-primary">Connect</h4>
            <Link href="mailto:contact@t-0.engineering" className="text-sm text-text-secondary hover:text-accent transition-colors">Contact</Link>
            <Link href="https://linkedin.com" className="text-sm text-text-secondary hover:text-accent transition-colors">LinkedIn</Link>
            <Link href="https://github.com" className="text-sm text-text-secondary hover:text-accent transition-colors">GitHub</Link>
          </div>
          
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            &copy; {currentYear} T-0 Engineering. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
