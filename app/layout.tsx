import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { NewsletterModal } from "@/components/newsletter-modal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Off Kind Studios - Creative Sanctum for Unorthodox Artists",
  description: "Off Kind Studios is a creative hub for unorthodox artists seeking genuine expression. We offer recording, branding, video production, and full-spectrum creative services.",
  keywords: "recording studio, music production, artist development, creative services, unorthodox art, music video, branding",
  authors: [{ name: "Off Kind Studios" }],
  openGraph: {
    title: "Off Kind Studios - Creative Sanctum for Unorthodox Artists",
    description: "A creative hub for artists who don't fit into typical genres or orthodox entertainment lanes.",
    type: "website",
    locale: "en_US",
    siteName: "Off Kind Studios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Off Kind Studios",
    description: "Creative Sanctum for Unorthodox Artists",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <NewsletterModal />
      </body>
    </html>
  );
}
