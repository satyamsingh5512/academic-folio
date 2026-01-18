import type { Metadata } from "next";
import { Inter, Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Sidebar from "@/components/Sidebar";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://1.satym.site'),
  title: "Satyam's Portfolio",
  description: "Machine Learning Engineer & CV Researcher",
  keywords: ["Machine Learning", "Computer Vision", "Deep Learning", "Satyam Singh", "Portfolio", "Research"],
  openGraph: {
    title: "Satyam's Portfolio",
    description: "Machine Learning Engineer & CV Researcher",
    url: "https://1.satym.site",
    siteName: "Satyam's Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam's Portfolio",
    description: "Machine Learning Engineer & CV Researcher",
    creator: "@satyamsingh",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jakarta.variable} ${jetbrains.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-[var(--color-background)] text-[var(--color-text)] flex flex-col md:flex-row min-h-screen">
        {/* Mobile Menu / Sidebar */}
        <Sidebar />

        <main className="flex-1 w-full max-w-4xl px-6 py-8 md:px-12 md:py-10 overflow-y-auto">

          {children}
        </main>
      </body>
    </html>
  );
}
