import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satyam Singh - ML Engineer & CV Researcher",
  description: "Machine Learning Engineer and Computer Vision Researcher specializing in deep learning, neural networks, and AI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
