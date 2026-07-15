import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "泽大至臻教育 | 青少年 AI 驾驭力课程",
  description:
    "面向小学高年级至高中学生的 AI 一站式学习课程，提供线上训练营、线下项目工作坊与家长学习规划咨询。",
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
      <body>{children}</body>
    </html>
  );
}
