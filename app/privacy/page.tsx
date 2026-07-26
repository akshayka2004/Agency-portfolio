import type { Metadata } from "next";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How T−0 handles the information you share with us.",
};

const SECTIONS = [
  {
    heading: "What we collect",
    body: [
      "If you email us or submit the contact form, we receive the details you choose to send — typically your name, email address and a description of your project. We do not buy contact data, and we do not run advertising trackers on this site.",
    ],
  },
  {
    heading: "Why we hold it",
    body: [
      "Solely to respond to your enquiry and, where it leads to an engagement, to deliver the work. We do not sell or rent enquiry data to anyone.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Enquiries that do not become projects are deleted once the conversation has clearly ended. Project correspondence is retained for the duration of the engagement and a reasonable period afterwards for warranty and accounting purposes.",
    ],
  },
  {
    heading: "Client data in systems we build",
    body: [
      "When we build or maintain a system for you, any data inside that system belongs to you. We access it only as needed to deliver the agreed work, under the confidentiality terms of the engagement, and we do not use it to train models or for any purpose you have not agreed to.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can ask us at any time what we hold about you, ask for a correction, or ask us to delete it. Write to us and we will action it.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary pt-32 pb-24">
      <div className="max-w-[760px] mx-auto px-6">
        <div className="text-caption text-accent">Legal</div>
        <div className="brand-rule w-14 mt-4 mb-6" />
        <h1 className="text-h2 font-bold mb-6">
          Privacy
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-14">
          Short version: we collect what you send us, we use it to reply and to do the work, and we
          do not pass it on to anyone else.
        </p>

        <div className="flex flex-col gap-10">
          {SECTIONS.map((section) => (
            <section key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-xl font-bold tracking-tight">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="flex flex-col gap-3 pt-6 border-t border-border">
            <h2 className="text-xl font-bold tracking-tight">Contact</h2>
            <p className="text-text-secondary leading-relaxed">
              Questions about any of the above:{" "}
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
