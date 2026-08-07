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
  description: "ZHIMING 的个人作品档案：视觉设计、数字体验与动态图像。",
  openGraph: {
    title: "ZHIMING — Ideas in quiet motion.",
    description: "视觉设计、数字体验与动态图像作品档案。",
    images: ["https://zhiming-portfolio.randy41010.chatgpt.site/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZHIMING — Ideas in quiet motion.",
    description: "视觉设计、数字体验与动态图像作品档案。",
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
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
