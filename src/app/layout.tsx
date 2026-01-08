import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Comfort Effect | Transform Fear Into Unstoppable Confidence",
  description: "The proven 21-day system that turns self-doubt into unstoppable confidence. Join 10,000+ people who have transformed their lives. Only $17.",
  keywords: ["confidence", "self-improvement", "fear", "personal development", "21 day challenge"],
  openGraph: {
    title: "The Comfort Effect | Transform Fear Into Unstoppable Confidence",
    description: "The proven 21-day system that turns self-doubt into unstoppable confidence. Join 10,000+ people who have transformed their lives.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Comfort Effect",
    description: "Transform fear into unstoppable confidence in 21 days.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
