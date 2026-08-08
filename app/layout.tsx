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
  title: { default: "Haoran Wang — Sound Portfolio", template: "%s — Haoran Wang" },
  description: "Music, sound and installation by Haoran Wang.",
  openGraph: {
    title: "Haoran Wang — Sound in quiet motion.",
    description: "Music, sound and installation by Haoran Wang.",
    images: ["https://zhiming-portfolio.randy41010.chatgpt.site/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haoran Wang — Sound in quiet motion.",
    description: "Music, sound and installation by Haoran Wang.",
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
