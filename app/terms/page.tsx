import type { Metadata } from "next";
import type { ReactNode } from "react";
import Brand from "@/components/Brand";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms that apply to this website and to working with T−0.",
};

const SECTIONS: { heading: string; body: ReactNode[] }[] = [
  {
    heading: "This website",
    body: [
      "The content here is provided for information. We keep it accurate, but nothing on this site is a binding offer or a guarantee of a particular result.",
    ],
  },
  {
    heading: "Engagements are governed by a separate agreement",
    body: [
      "Every project we take on is covered by its own written proposal or contract setting out scope, timeline, cost, ownership and support. Where that document and this page disagree, that document wins.",
    ],
  },
  {
    heading: "Ownership of work",
    body: [
      "Unless the engagement says otherwise, you own the deliverables we produce for you once they are paid for. We retain ownership of our pre-existing tooling and internal libraries, and grant you the licence needed to run and maintain what we built.",
    ],
  },
  {
    heading: "Confidentiality",
    body: [
      "Anything you share with us in the course of an enquiry or a project is treated as confidential. Case studies on this site are published only where the client has agreed, and client names are withheld where agreements require it.",
    ],
  },
  {
    heading: "Third-party services",
    body: [
      "Systems we build often depend on third-party platforms — cloud hosting, payment processors, messaging APIs. Those services carry their own terms and their own availability, which sit outside our control.",
    ],
  },
  {
    heading: "Trademarks",
    body: [
      <>
        The <Brand /> name, mark and site content belong to <Brand />. Other names and logos
        referenced belong to their respective owners.
      </>,
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary pt-32 pb-24">
      <div className="max-w-[760px] mx-auto px-6">
        <div className="text-caption text-accent">Legal</div>
        <div className="brand-rule w-14 mt-4 mb-6" />
        <h1 className="text-h2 font-bold mb-6">
          Terms
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-14">
          These terms cover the use of this website. The work itself is always governed by the
          signed proposal for your project.
        </p>

        <div className="flex flex-col gap-10">
          {SECTIONS.map((section) => (
            <section key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-xl font-bold tracking-tight">{section.heading}</h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="flex flex-col gap-3 pt-6 border-t border-border">
            <h2 className="text-xl font-bold tracking-tight">Contact</h2>
            <p className="text-text-secondary leading-relaxed">
              Anything unclear:{" "}
              <a href={`mailto:${CONTACT.email}`} className="link-draw text-accent font-medium">
                {CONTACT.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
