import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "ZHIMING — Designer & Visual Storyteller", template: "%s — ZHIMING" },
  description: "The personal archive of ZHIMING: design, music and spatial installation.",
  openGraph: {
    title: "ZHIMING — Ideas in quiet motion.",
    description: "Design, music and spatial installation by ZHIMING.",
    images: ["https://zhiming-portfolio.randy41010.chatgpt.site/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZHIMING — Ideas in quiet motion.",
    description: "Design, music and spatial installation by ZHIMING.",
    images: ["https://zhiming-portfolio.randy41010.chatgpt.site/og.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
