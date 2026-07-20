import { Space_Grotesk, JetBrains_Mono, MuseoModerno } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { SITE_URL } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const museoModerno = MuseoModerno({
  variable: "--font-museo-moderno",
  subsets: ["latin"],
});

import type { Metadata } from "next";

const DESCRIPTION =
  "T−0 builds web platforms, mobile apps, SaaS products, AI automation and hardware R&D from Kerala, India. You think. We build.";

export const metadata: Metadata = {
  title: {
    default: "T−0 — You Think. We Build.",
    template: "%s — T−0",
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "T−0 — You Think. We Build.",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "T−0",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "T−0 — You Think. We Build.",
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${museoModerno.variable} scroll-smooth`}>
      <body className="antialiased bg-bg text-text-primary" suppressHydrationWarning>
        <ScrollProgressBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
