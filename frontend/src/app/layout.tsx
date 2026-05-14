import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { NavMenu } from "@/components/layout/nav-menu";
import { Footer } from "@/components/layout/footer";
import { FloatingSidebar } from "@/components/layout/floating-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "考试宝 - AI 驱动的在线考试系统",
  description: "支持高并发在线考试、大规模题库管理及 AI 智能分析",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <Header />
        <NavMenu />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingSidebar />
      </body>
    </html>
  );
}
