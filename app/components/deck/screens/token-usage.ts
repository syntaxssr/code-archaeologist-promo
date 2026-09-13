/**
 * Token usage for the challenge work, measured rather than estimated.
 *
 * Produced by `tools/usage.py`, which reads the presenter's own Claude Code
 * transcripts under `~/.claude/projects/`, counts each assistant turn once
 * (keyed by message id, files walked in sorted order so the totals do not move
 * between runs) and sums `input + output + cache_creation + cache_read`.
 *
 * Scope is deliberately this project only. The same budget paid for other work
 * that has nothing to do with the challenge, and putting that on a judging
 * screen invites a question the deck is not there to answer.
 *
 * Snapshot: 13 September 2026, and still rising — re-run the script and paste
 * the numbers back before the 26th rather than nudging them by hand.
 *
 * ณัฐวุฒิ's side stays null until he runs the same script. A bar drawn from a
 * guess, standing next to bars drawn from a count, would make both worthless.
 */
export type Day = { d: string; label: string; tokens: number; turns: number };

export const days: Day[] = [
  { d: "2026-09-06", label: "06 ก.ย.", tokens: 43555257, turns: 219 },
  { d: "2026-09-08", label: "08 ก.ย.", tokens: 47716925, turns: 232 },
  { d: "2026-09-12", label: "12 ก.ย.", tokens: 126819127, turns: 352 },
  { d: "2026-09-13", label: "13 ก.ย.", tokens: 134670845, turns: 353 },
];

/** พีรพล — the presentation side, this project only. */
export const bb = {
  total: 352762154,
  turns: 1156,
  /** what those tokens were made of */
  written: 913491,
  newContext: 3953315,
  reread: 347895348,
};

/** ณัฐวุฒิ — the code side. Filled in when he runs `tools/usage.py`. */
export const udong: { total: number; turns: number } | null = null;
