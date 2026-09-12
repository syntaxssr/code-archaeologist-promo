import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nav } from "./components/Nav";
import "./globals.css";

// Self-hosted from app/fonts (see the README there). next/font/google fetches
// from Google at build time, which silently drops the site to system fonts
// whenever that fetch fails — offline, behind a proxy, or from a cached failure.
// next/font requires literal values, so each weight is spelled out.
const plexSans = localFont({
  src: [
    { path: "./fonts/IBMPlexSans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexSans-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexSans-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/IBMPlexSans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "sans-serif"],
});

// Thai glyphs only — Latin in a Thai paragraph falls through to Plex Sans,
// which is the same superfamily, so the line keeps one set of metrics.
const plexThai = localFont({
  src: [
    { path: "./fonts/IBMPlexSansThai-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexSansThai-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexSansThai-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/IBMPlexSansThai-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plex-thai",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "sans-serif"],
});

const jetbrainsMono = localFont({
  src: [
    { path: "./fonts/JetBrainsMono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/JetBrainsMono-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/JetBrainsMono-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/JetBrainsMono-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "monospace"],
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const description =
  "Agent Skill ที่ให้ AI เข้าใจสถาปัตยกรรมทั้ง repo โดยไม่ต้องอ่านโค้ดทั้งหมด — Zero-RAG, deterministic, ลด token 90%+";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Code Archaeologist",
  description,
  applicationName: "Code Archaeologist",
  authors: [{ name: "ณัฐวุฒิ รอดทอง" }, { name: "พีรพล จันทะแจ่ม" }],
  keywords: [
    "Code Archaeologist",
    "LLM agent skill",
    "Zero-RAG",
    "dependency graph",
    "code architecture",
    "iCONEXT AI Challenge Day 2026",
  ],
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteUrl,
    siteName: "Code Archaeologist",
    title: "Code Archaeologist",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Archaeologist",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${plexSans.variable} ${plexThai.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Scroll-reveal starts hidden; without JS it must never stay that way. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
      </body>
    </html>
  );
}
