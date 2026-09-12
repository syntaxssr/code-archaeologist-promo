"use client";

import { useState } from "react";
import { Plan } from "./Plan";
import { roomById } from "./plan-data";

type Layer = {
  id: string;
  no: string;
  en: string;
  th: string;
  fill: string;
  rooms: string[];
};

/**
 * Single-context recording: each context is drawn on its own sheet of
 * translucent film over one base plan, and you stack the films you want.
 * That is also an exact description of what the Explorer does to a repository,
 * which is why this is the honest way to show it.
 *
 * The layers are told apart by drafting fills — hatch, cross-hatch, stipple —
 * not by four coloured washes. Hatching stays readable when overlays stack, it
 * survives a projector, and it does not depend on colour vision.
 */
const layers: Layer[] = [
  {
    id: "graph",
    no: "01",
    en: "IMPORT GRAPH",
    th: "ใครอ้างอิงใคร",
    fill: "url(#hatch)",
    rooms: ["router", "mw", "session", "query", "pool", "charge"],
  },
  {
    id: "coverage",
    no: "02",
    en: "TEST COVERAGE",
    th: "จุดที่เทสไปไม่ถึง",
    fill: "url(#stipple)",
    rooms: ["legacy", "config", "mailer", "charge"],
  },
  {
    id: "churn",
    no: "03",
    en: "CHURN · 90 DAYS",
    th: "ไฟล์ที่แก้บ่อยที่สุด",
    fill: "url(#hatch-traced)",
    rooms: ["charge", "session", "orders", "query"],
  },
  {
    id: "risk",
    no: "04",
    en: "RISK FINDINGS",
    th: "sink และเกรดต่ำ",
    fill: "url(#crosshatch)",
    rooms: ["query", "legacy"],
  },
];

export function Overlays() {
  const [on, setOn] = useState<string[]>(["graph", "churn"]);
  const toggle = (id: string) =>
    setOn((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  return (
    <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
      <div className="border border-line">
        <div className="flex items-center justify-between border-b border-rule px-5 py-2.5">
          <span className="font-mono text-base text-muted">explorer.html</span>
          <span className="border border-rule px-2.5 py-0.5 font-mono text-base uppercase tracking-[0.12em] text-faint">
            No server
          </span>
        </div>
        <div className="p-4">
          <Plan
            ariaLabel="ผังฐานเดียวกัน ซ้อนด้วยชั้นข้อมูลที่เปิดปิดได้ ได้แก่ import graph, test coverage, churn และ risk findings"
            drawn={false}
            showEdges={on.includes("graph")}
          >
            {layers
              .filter((l) => on.includes(l.id))
              .flatMap((l) =>
                l.rooms.map((id) => {
                  const r = roomById(id);
                  return (
                    <rect
                      key={`${l.id}-${id}`}
                      x={r.x}
                      y={r.y}
                      width={r.w}
                      height={r.h}
                      fill={l.fill}
                      opacity="0.5"
                    />
                  );
                }),
              )}
          </Plan>
        </div>
      </div>

      <div className="border border-line">
        <p className="border-b border-rule px-5 py-2.5 font-mono text-base font-medium uppercase tracking-[0.14em] text-faint">
          Overlays
        </p>
        <ul>
          {layers.map((l) => {
            const active = on.includes(l.id);
            return (
              <li key={l.id} className="border-b border-rule last:border-b-0">
                <button
                  type="button"
                  onClick={() => toggle(l.id)}
                  aria-pressed={active}
                  className="flex w-full cursor-pointer items-start gap-3.5 px-5 py-3.5 text-left transition-colors duration-150 hover:bg-sheet-2"
                >
                  <span
                    className={`mt-1 h-4 w-4 shrink-0 border ${
                      active ? "border-traced bg-traced" : "border-rule bg-transparent"
                    }`}
                  />
                  <span className="min-w-0">
                    <span className="block font-mono text-base uppercase tracking-[0.1em] text-muted">
                      {l.no} · {l.en}
                    </span>
                    <span
                      className={`mt-1 block text-lg ${active ? "text-ink" : "text-muted"}`}
                    >
                      {l.th}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
