import { ImageResponse } from "next/og";

export const alt = "Code Archaeologist — excavating a codebase, layer by layer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// English-only copy on purpose: ImageResponse ships no Thai font by default.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0C0A09",
          padding: 72,
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
            <rect x="2.5" y="2.5" width="19" height="19" rx="4" stroke="#FAFAF9" strokeWidth="1.6" />
            <path d="M3 9.5H21" stroke="#FAFAF9" strokeWidth="1.3" opacity="0.55" />
            <path d="M3 15.5H21" stroke="#FAFAF9" strokeWidth="1.3" opacity="0.35" />
            <path d="M12 5.5V15" stroke="#F59E0B" strokeWidth="1.6" strokeDasharray="2 2.4" />
            <circle cx="12" cy="17.6" r="2.3" fill="#F59E0B" />
          </svg>
          <div style={{ display: "flex", fontSize: 30, letterSpacing: -0.5, color: "#FAFAF9" }}>
            Code<span style={{ color: "#F59E0B" }}>Archaeologist</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ display: "flex", height: 2, width: 220, background: "#F59E0B" }} />
          <div
            style={{
              display: "flex",
              fontSize: 66,
              lineHeight: 1.15,
              color: "#FAFAF9",
              maxWidth: 900,
            }}
          >
            Excavating a codebase, layer by layer.
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#A8A29E" }}>
            Zero-RAG architecture mapping · 90%+ fewer tokens
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#78716C" }}>
          iCONEXT AI Challenge Day 2026 · Team 3
        </div>
      </div>
    ),
    size,
  );
}
