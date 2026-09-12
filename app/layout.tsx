import type { Metadata } from "next";
import localFont from "next/font/local";
import { SheetRail } from "./components/sheet/SheetRail";
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

// Latin only. Mono is the drafting lettering of the sheet — annotation,
// labels, numbers, coordinates, identifiers — and never sets Thai or a
// paragraph. Plex Mono rather than JetBrains so the whole system is one
// superfamily and mixed lines share a skeleton.
const plexMono = localFont({
  src: [
    { path: "./fonts/IBMPlexMono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexMono-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexMono-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/IBMPlexMono-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "monospace"],
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const description =
  "Agent Skill ที่ให้ AI เข้าใจสถาปัตยกรรมทั้ง repository โดยไม่ต้องอ่านโค้ดทั้งหมด — AST scan, Markdown wiki, dependency graph, Zero-RAG";

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
      className={`${plexSans.variable} ${plexThai.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        {/* Lines start retracted and notes start hidden; without JS the sheet
            must still render complete. */}
        <noscript>
          <style>{`[data-reveal],[data-note]{opacity:1!important;transform:none!important}[data-draw]{stroke-dashoffset:0!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <SheetRail />
        {children}
      </body>
    </html>
  );
}
