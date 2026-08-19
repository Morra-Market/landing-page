import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-morra-display",
  display: "swap",
});

const bodyFont = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-morra-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Morra | Balogun market, from your phone",
    template: "%s | Morra",
  },
  description:
    "Source selected Balogun Market goods through WhatsApp, then pick up for free at CMS or choose partner delivery on the next market day.",
  keywords: ["Morra", "Balogun Market", "Lagos shopping", "CMS pickup", "WhatsApp shopping"],
  openGraph: {
    title: "Morra | Balogun market, from your phone",
    description:
      "Fabric, skincare, perfumes, and accessories sourced from Balogun for free CMS pickup or fee-based partner delivery.",
    type: "website",
    images: [
      {
        url: "/brand/morra.jpeg",
        width: 1024,
        height: 1024,
        alt: "Morra logo on a navy background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morra | Balogun market, from your phone",
    description: "Selected Balogun goods, sourced and checked for pickup at CMS or partner delivery.",
    images: ["/brand/morra.jpeg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16255C",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
