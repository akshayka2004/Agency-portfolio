import { Space_Grotesk, JetBrains_Mono, MuseoModerno } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ScrollProgressBar } from "@/components/ScrollProgressBar";

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

export const metadata: Metadata = {
  title: "T-0",
  description: "T-0 solves problems worth solving. We design, research, and build intelligent systems that last.",
  openGraph: {
    title: "T-0",
    description: "T-0 solves problems worth solving. We design, research, and build intelligent systems that last.",
    url: "https://t-0.dev",
    siteName: "T-0",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "T-0",
    description: "T-0 solves problems worth solving.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${museoModerno.variable} scroll-smooth`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="antialiased selection:bg-accent/20 selection:text-accent bg-[#020617]" suppressHydrationWarning>
        <ScrollProgressBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
