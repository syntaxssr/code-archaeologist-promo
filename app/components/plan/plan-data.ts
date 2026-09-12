/**
 * The plan. One drawing, authored once — beats 02 through 06 are all views of
 * it, so a room that moves here moves everywhere and the sheet stays coherent.
 *
 * Coordinates are in the plan's own units (viewBox 0 0 880 620). Rooms are laid
 * out by architectural depth: entrypoints at the top, vendor and config at the
 * bottom, which is the same order a Harris matrix uses — latest at the top,
 * earliest beneath it. That is not a metaphor; a dependency graph and a Harris
 * matrix are the same object.
 */

export const PLAN_W = 880;
export const PLAN_H = 620;

export type Room = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export const rooms: Room[] = [
  { id: "entry", label: "APP/PAGE", x: 40, y: 24, w: 220, h: 88 },
  { id: "cli", label: "CLI", x: 280, y: 24, w: 150, h: 88 },

  { id: "router", label: "ROUTER", x: 40, y: 136, w: 220, h: 88 },
  { id: "mw", label: "MIDDLEWARE/AUTH", x: 280, y: 136, w: 220, h: 88 },

  { id: "charge", label: "PAYMENTS/CHARGE", x: 40, y: 248, w: 220, h: 104 },
  { id: "session", label: "AUTH/SESSION", x: 280, y: 248, w: 220, h: 104 },
  { id: "orders", label: "ORDERS", x: 580, y: 248, w: 140, h: 104 },
  { id: "mailer", label: "MAILER", x: 740, y: 248, w: 100, h: 104 },

  { id: "crypto", label: "LIB/CRYPTO", x: 40, y: 372, w: 220, h: 96 },
  { id: "validate", label: "LIB/VALIDATE", x: 280, y: 372, w: 180, h: 96 },
  { id: "query", label: "DB/QUERY", x: 480, y: 372, w: 160, h: 96 },
  { id: "pool", label: "DB/POOL", x: 660, y: 372, w: 180, h: 96 },

  { id: "legacy", label: "VENDOR/LEGACY", x: 40, y: 488, w: 260, h: 96 },
  { id: "config", label: "CONFIG", x: 320, y: 488, w: 160, h: 96 },
];

export const roomById = (id: string) => {
  const r = rooms.find((x) => x.id === id);
  if (!r) throw new Error(`plan: no room "${id}"`);
  return r;
};

/** Labels sit at the top-left inside a room; routes run through its lower
 *  third, so a line never crosses its own room's caption. */
export const labelAt = (r: Room) => ({ x: r.x + 14, y: r.y + 27 });
export const routeY = (r: Room) => Math.round(r.y + r.h * 0.7);
export const centerX = (r: Room) => r.x + r.w / 2;

/* ---------------------------------------------------------------------- */
/* The two routes. This pair is the sheet's whole argument.                 */
/* ---------------------------------------------------------------------- */

/**
 * Traced — evidenced. Orthogonal, because every turn is a real edge in the
 * dependency graph and you can say which one. Four hops, four stations.
 */
export const tracedPath = "M150 198 H390 V321 H560 V439";

export const tracedStations: {
  n: string;
  x: number;
  y: number;
  call: string;
  /** The last station sits near the right edge of its room; its caption runs
   *  leftwards so it does not end up inside the neighbouring room. */
  flip?: boolean;
}[] = [
  { n: "1", x: 150, y: 198, call: "login()" },
  { n: "2", x: 390, y: 198, call: "verifyToken()" },
  { n: "3", x: 390, y: 321, call: "getUser()" },
  { n: "4", x: 560, y: 439, call: "db.query()", flip: true },
];

/**
 * Conjectured — a guess. It wanders, because similarity search has no edges to
 * follow: it visits whatever looked close and backtracks, then stops without
 * arriving. Curved on purpose — the contrast between a right angle and a drift
 * is itself the message.
 */
export const guessPath =
  "M150 300 Q130 360 150 420 Q175 480 170 536 Q290 562 400 536 Q396 470 370 420 Q520 388 750 420 Q800 452 790 498";

/** The six rooms it opened. No order, so no station numbers — just hits. */
export const guessHits: { x: number; y: number }[] = [
  { x: 150, y: 300 },
  { x: 150, y: 420 },
  { x: 170, y: 536 },
  { x: 400, y: 536 },
  { x: 370, y: 420 },
  { x: 750, y: 420 },
];

export const guessEnd = { x: 790, y: 498 };

/* ---------------------------------------------------------------------- */
/* Findings marked on the plan — beat 04.                                   */
/* ---------------------------------------------------------------------- */

export type Finding = {
  n: string;
  room: string;
  /** Which capability put this mark on the plan. */
  feature: string;
  th: string;
};

export const findings: Finding[] = [
  { n: "01", room: "charge", feature: "STRUCTURE MAP", th: "ใครอ้างอิงใคร" },
  { n: "02", room: "mw", feature: "FLOW MAP", th: "ใครเรียกใคร" },
  // 03 sits on AUTH/SESSION because that is where the radius is struck from,
  // and a mark that is not on its own subject is a mark that lies.
  { n: "03", room: "session", feature: "BLAST RADIUS", th: "แก้แล้วกระทบอะไร" },
  { n: "04", room: "legacy", feature: "HEALTH GRADE", th: "เกรด A–F ต่อ entity" },
  { n: "05", room: "query", feature: "SECURITY SCAN", th: "sink ที่รับ input ดิบ" },
  { n: "06", room: "orders", feature: "HOTSPOT RANKING", th: "ไฟล์ที่แก้บ่อยและเสี่ยง" },
];

/* ---------------------------------------------------------------------- */
/* Edges. Drawn under the rooms so only the span between two rooms shows —  */
/* which is what a corridor on a plan looks like, and what an import is.    */
/* ---------------------------------------------------------------------- */

export const edges: [string, string][] = [
  ["entry", "router"],
  ["cli", "router"],
  ["router", "mw"],
  ["mw", "session"],
  ["mw", "config"],
  ["session", "crypto"],
  ["session", "query"],
  ["charge", "validate"],
  ["charge", "query"],
  ["charge", "mailer"],
  ["charge", "legacy"],
  ["orders", "query"],
  ["query", "pool"],
  ["legacy", "config"],
];

export const edgeLine = ([a, b]: [string, string]) => {
  const ra = roomById(a);
  const rb = roomById(b);
  return {
    x1: centerX(ra),
    y1: ra.y + ra.h / 2,
    x2: centerX(rb),
    y2: rb.y + rb.h / 2,
  };
};
