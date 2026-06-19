import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactFab from "@/components/ContactFab";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atharv Agarwal | Software & Automation Systems for Small Businesses",
  description: "Atharv Agarwal builds software and automation systems that help small businesses improve operations, customer communication, and order workflows.",
  openGraph: {
    title: "Atharv Agarwal | Software & Automation Systems for Small Businesses",
    description: "Building real software and automation systems that help businesses operate better.",
    url: "https://atharvagarwal.in",
    siteName: "Atharv Agarwal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharv Agarwal | Software & Automation Systems",
    description: "Building practical systems for business operations, customer workflows, and automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <ContactFab />
      </body>
    </html>
  );
}
