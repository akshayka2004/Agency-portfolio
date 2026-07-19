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
  title: "T-0 Engineering | Applied Technology Partner",
  description: "T-0 is an engineering and innovation partner specializing in enterprise software, artificial intelligence, and hardware research.",
  openGraph: {
    title: "T-0 Engineering",
    description: "Applied Technology Partner specializing in enterprise software, AI, and hardware R&D.",
    url: "https://t-0.engineering",
    siteName: "T-0 Engineering",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "T-0 Engineering",
    description: "Applied Technology Partner for complex enterprise environments.",
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
