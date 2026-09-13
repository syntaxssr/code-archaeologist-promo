/**
 * Token usage, measured rather than estimated.
 *
 * Produced by `tools/usage.py`, which reads this machine's own Claude Code
 * transcripts under `~/.claude/projects/**​/*.jsonl`, counts each assistant turn
 * once (keyed by message id, files walked in sorted order so the totals do not
 * move between runs), and sums `input + output + cache_creation + cache_read`.
 *
 * Snapshot: 13 September 2026. Re-run the script and paste the numbers back in
 * before the 26th — the count keeps rising while the work continues, and a
 * figure on a slide should be the one the script printed, not one nudged by
 * hand.
 *
 * ณัฐวุฒิ's side is deliberately empty until he sends his own run of the same
 * script. An invented bar next to a measured one would make both worthless.
 */
export type Day = { d: string; all: number; work: number };

export const days: Day[] = [
  { d: "2026-07-31", all: 192463909, work: 0 },
  { d: "2026-08-01", all: 258244750, work: 0 },
  { d: "2026-08-02", all: 241205339, work: 0 },
  { d: "2026-08-03", all: 1327099, work: 0 },
  { d: "2026-08-04", all: 17534860, work: 0 },
  { d: "2026-08-06", all: 100285396, work: 0 },
  { d: "2026-08-07", all: 139698013, work: 0 },
  { d: "2026-08-15", all: 2200129, work: 0 },
  { d: "2026-08-20", all: 473173897, work: 0 },
  { d: "2026-08-21", all: 38118824, work: 0 },
  { d: "2026-08-22", all: 356096026, work: 0 },
  { d: "2026-08-24", all: 38190323, work: 0 },
  { d: "2026-08-26", all: 2173433, work: 0 },
  { d: "2026-08-28", all: 49091019, work: 0 },
  { d: "2026-08-29", all: 310722228, work: 0 },
  { d: "2026-09-03", all: 258435559, work: 0 },
  { d: "2026-09-04", all: 216708060, work: 0 },
  { d: "2026-09-05", all: 527307498, work: 0 },
  { d: "2026-09-06", all: 195190717, work: 43555257 },
  { d: "2026-09-07", all: 20172962, work: 0 },
  { d: "2026-09-08", all: 120220020, work: 47716925 },
  { d: "2026-09-09", all: 1218817, work: 0 },
  { d: "2026-09-10", all: 438308, work: 0 },
  { d: "2026-09-12", all: 126819127, work: 126819127 },
  { d: "2026-09-13", all: 127384624, work: 127384624 },
];

/** พีรพล — the presentation side. */
export const bb = {
  total: 3814420937,
  turns: 11724,
  workTotal: 345475933,
  workTurns: 1136,
  firstDay: "2026-07-31",
  lastDay: "2026-09-13",
};

/** ณัฐวุฒิ — the code side. Filled in when he runs `tools/usage.py`. */
export const udong: { total: number; turns: number } | null = null;
