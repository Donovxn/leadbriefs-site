import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
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
  metadataBase: new URL(SITE_URL),
  title: "LeadBriefs | Daily Signal Brief Packs",
  description:
    "Daily Signal Brief Packs: 25–50 source-grounded leads/day with 2 openers + 2 follow-ups each, delivered as CSV + Google Sheets, plus a QA report. Demo pack in 48 hours.",
  openGraph: {
    title: "LeadBriefs | Daily Signal Brief Packs",
    description:
      "Source-grounded lead packs with DM-ready copy, delivered as CSV + Google Sheets with QA.",
    url: SITE_URL,
    siteName: "LeadBriefs",
    images: ["/opengraph-image"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadBriefs | Daily Signal Brief Packs",
    description:
      "Source-grounded lead packs with DM-ready copy, delivered as CSV + Google Sheets with QA.",
    images: ["/twitter-image"],
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
