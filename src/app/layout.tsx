import type { Metadata, Viewport } from "next";
import { Poppins, Quicksand } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import { siteConfig } from "@/lib/site";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-poppins" });
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-quicksand" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name }],
  keywords: [
    "Frontend Developer",
    "UI Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Responsive Web Design",
    "Reusable UI Components",
    "Web Accessibility",
    "Core Web Vitals",
    "Technical SEO",
    "Payload CMS",
    "Headless CMS",
    "React Native",
    "Jaipur",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: `${siteConfig.name} Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: siteConfig.title, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#232a34",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
