import { ImageResponse } from "next/og";

export const alt = "Code Archaeologist — one survey sheet of a codebase";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// English-only copy on purpose: ImageResponse ships no Thai font by default,
// and a card that falls back mid-sentence looks worse than one in one language.
export default function OpengraphImage() {
  const rooms = [
    { left: 0, top: 0, w: 168, h: 62, label: "ROUTER" },
    { left: 184, top: 0, w: 196, h: 62, label: "AUTH" },
    { left: 0, top: 78, w: 168, h: 62, label: "PAYMENTS" },
    { left: 184, top: 78, w: 196, h: 62, label: "SESSION" },
    { left: 0, top: 156, w: 168, h: 62, label: "LIB" },
    { left: 184, top: 156, w: 196, h: 62, label: "DB/QUERY" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FBFAF4",
          padding: 72,
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
              <rect x="2.5" y="2.5" width="19" height="19" stroke="#4A4640" strokeWidth="1.5" />
              <path d="M3 9.5H21" stroke="#4A4640" strokeWidth="1.2" opacity="0.55" />
              <path d="M3 15.5H21" stroke="#4A4640" strokeWidth="1.2" opacity="0.35" />
              <path d="M12 5.5V14.6" stroke="#C2410C" strokeWidth="1.6" strokeDasharray="2 2.4" />
              <circle cx="12" cy="17.6" r="2.2" fill="#C2410C" />
            </svg>
            <div style={{ display: "flex", fontSize: 28, letterSpacing: -0.5, color: "#14120F" }}>
              Code<span style={{ color: "#9A3412" }}>Archaeologist</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", height: 2, width: 200, background: "#C2410C" }} />
            <div
              style={{ display: "flex", fontSize: 62, lineHeight: 1.15, color: "#14120F", maxWidth: 620 }}
            >
              Surveyed, not excavated.
            </div>
            <div style={{ display: "flex", fontSize: 26, color: "#524D46", maxWidth: 600 }}>
              Architecture for the whole repository, without reading the whole repository.
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 20, color: "#726B62" }}>
            SHEET 01 OF 01 · iCONEXT AI CHALLENGE DAY 2026 · TEAM 03
          </div>
        </div>

        {/* A fragment of the plan, with the traced route across it — the same
            solid-is-evidenced convention the site is built on. */}
        <div style={{ display: "flex", position: "relative", width: 380, height: 218, marginTop: 190 }}>
          {rooms.map((r) => (
            <div
              key={r.label}
              style={{
                position: "absolute",
                left: r.left,
                top: r.top,
                width: r.w,
                height: r.h,
                border: "1.5px solid #4A4640",
                background: "#F2EFE7",
                display: "flex",
                alignItems: "flex-start",
                padding: 9,
                fontSize: 15,
                color: "#14120F",
                letterSpacing: 1,
              }}
            >
              {r.label}
            </div>
          ))}
          <div style={{ position: "absolute", left: 84, top: 44, width: 198, height: 3, background: "#C2410C" }} />
          <div style={{ position: "absolute", left: 279, top: 44, width: 3, height: 156, background: "#C2410C" }} />
          <div style={{ position: "absolute", left: 76, top: 36, width: 19, height: 19, background: "#C2410C" }} />
          <div style={{ position: "absolute", left: 272, top: 190, width: 19, height: 19, background: "#C2410C" }} />
        </div>
      </div>
    ),
    size,
  );
}
