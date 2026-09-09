import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  title: {
    default: "25H AI — Enterprise AI & Operations Transformation",
    template: "%s | 25H AI",
  },
  description:
    "We redesign how businesses operate — connecting people, processes, data and AI into one working system.",
  keywords: [
    "25H AI",
    "enterprise operations",
    "operations transformation",
    "AI automation",
    "digital operations",
  ],
  openGraph: {
    type: "website",
    siteName: "25H AI",
    title: "25H AI — Enterprise AI & Operations Transformation",
    description:
      "We build the operating system behind your business. Connecting people, processes, data and AI into one working system.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-primary font-sans">
        <link
          rel="preload"
          as="image"
          href="/images/contact/wechat-qr-web.png"
          fetchPriority="high"
        />
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
