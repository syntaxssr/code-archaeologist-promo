# Code Archaeologist — Brand & Design System

Source of truth for the promo site. Locked in Phase 0. Anything built later
(components, slides, social images) must pull from this file rather than
inventing new colors, fonts, or logo variants.

- **Project:** Code Archaeologist — LLM Agent Skill that maps a codebase without reading all of it
- **Event:** iCONEXT AI Challenge Day 2026 — Saturday 26 September 2026
- **Team:** Team 3 — พีรพล จันทะแจ่ม (BB), ณัฐวุฒิ รอดทอง (อุด้ง)
- **Skill repo:** https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill

---

## 1. Concept

> **Excavating a codebase, layer by layer.**

The product reads a repository the way an archaeologist reads a dig site: it does not
haul the whole hill back to the lab (RAG), it opens a trench, records the strata, and
traces one artifact to its context.

**Tone keywords:** field notes, stratigraphy, precise, unearthed, catalogued, warm-dark.

**What this rules out:** generic SaaS blue, neon "hacker" green, glassmorphism, and any
visual that says "another AI chatbot". The site should look like a well-kept excavation
record that happens to run on a terminal.

## 2. Color

Warm near-black earth as the ground, amber as the single accent — amber is the find,
so it is used only for things that matter: primary CTA, the active state, the one number
per section worth remembering. Never as a background wash.

| Token | Hex | Use |
| --- | --- | --- |
| `--color-bg` | `#0C0A09` | Page background (warm black, not blue-black) |
| `--color-layer` | `#131110` | Alternating section ground — the next stratum down |
| `--color-surface` | `#1C1917` | Cards, panels raised off the page |
| `--color-surface-2` | `#292524` | Nested panels, code blocks, table stripes |
| `--color-border` | `#44403C` | Hairlines, card outlines |
| `--color-border-soft` | `#292524` | Low-emphasis dividers |
| `--color-fg` | `#FAFAF9` | Primary text |
| `--color-fg-muted` | `#A8A29E` | Secondary text, captions |
| `--color-fg-faint` | `#8C847E` | Metadata, footers, disabled |
| `--color-accent` | `#F59E0B` | Primary CTA, active nav, key stat, the "find" |
| `--color-accent-hover` | `#FBBF24` | Hover / focus state of accent surfaces |
| `--color-accent-deep` | `#B45309` | Accent borders, pressed state, gradient far stop |
| `--color-on-accent` | `#1C1917` | Text on an amber fill (never white — fails contrast) |
| `--color-success` | `#84CC16` | Health grade A/B, passing checks |
| `--color-danger` | `#DC2626` | Blast radius warnings, failing checks |

**Rules**

- One accent. If something needs a second color, it needs a different weight or size instead.
- Amber fill always carries `--color-on-accent` text, never white (`#F59E0B` + white = 2.1:1, fails WCAG).
- Every text token clears WCAG AA (4.5:1) on every ground it is allowed on — verified with axe-core, not by eye. `fg-muted` is 6.9:1 on `surface`; `fg-faint` is 5.4:1 on `bg`, 5.1:1 on `layer`, 4.8:1 on `surface`; amber is 9.2:1 on `bg`, and `on-accent` is 8.1:1 on an amber fill.
- `fg-faint` is for metadata and captions regardless — it passes, but it is not a body-text color.
- Depth comes from surface steps (`bg → surface → surface-2`), not from shadows. Shadows on a warm-black ground read as smudges.

## 3. Typography

Thai is a first-class language on this site, so the body family is chosen for having a
real Thai cut rather than a fallback. IBM Plex Sans and IBM Plex Sans Thai are the same
superfamily, so mixed Thai/English lines share a baseline and weight.

| Role | Family | Notes |
| --- | --- | --- |
| Display (hero, English-only) | JetBrains Mono 600–700 | Field-notes label feel. Tracking `-0.02em` at large sizes |
| Section titles | IBM Plex Sans / Sans Thai 600 | These carry Thai, so they are never mono |
| Body (English) | IBM Plex Sans 400–600 | |
| Body (Thai) | IBM Plex Sans Thai 400–600 | Matches Plex metrics; set before the Latin fallback |
| Code / labels / stats | JetBrains Mono 400–500 | Uppercase + `tracking-[0.18em]` for kickers |

| Element | Size | Weight |
| --- | --- | --- |
| Hero display | 56–72px | 700 |
| Section title | 32–40px | 600 |
| Sub-head | 20–24px | 600 |
| Body | 16–18px | 400 |
| Caption / kicker | 12–13px | 500, uppercase, wide tracking |

**Rules**

- Never set Thai text in JetBrains Mono — it has no Thai glyphs and falls back mid-line.
- Body line-height 1.7 for Thai paragraphs (Thai needs more room for upper/lower vowel marks), 1.6 for English.
- Kickers are mono + uppercase + amber; that pairing is the section-marker motif.

## 4. Logo

**Mark — "trench".** A site grid square, two strata lines dividing it into three layers,
and a dashed shaft tracing down from the surface to an amber node in the bottom layer:
the artifact found in context. Reads at 16px.

- Grid, strata: `currentColor` at descending opacity (1 / 0.55 / 0.35)
- Shaft + node: `--color-accent`
- Minimum size 16px; clear space on all sides = 25% of mark height
- Never recolor the node to anything but amber; never fill the grid square

**Wordmark.** `Code` in `--color-fg` + `Archaeologist` in `--color-accent`, JetBrains Mono
600, tracking `-0.01em`. Lockup is mark + 8px gap + wordmark, vertically centered.

Implementation: `app/components/brand/Logo.tsx` (`<Logo />`, `<LogoMark />`).

## 5. Motif

Repeat exactly one thing across every section: **the stratum rule** — a thin
`--color-border` hairline with a short amber segment at its left edge, sitting above each
section kicker. It echoes the strata in the mark. Do not add a second decorative device.

## 5b. Signature visuals

Two hand-built SVGs carry the concept; both live in `app/components/visuals/` and
draw from the tokens, so they re-theme with the palette.

- **`TrenchDiagram`** (hero) — a cross-section of a codebase: three strata of entities
  with one traced call path cutting down through them, ending in an amber node. The
  trace routes chip-edge to chip-edge so it never crosses a label.
- **`ExplorerMock`** (demo) — tree · graph · findings, the shape of the real Explorer
  output. It is a mock and the section copy says so; replace it with a real screenshot
  as soon as one exists.

Numbers on cards and steps are set as two-digit monospace catalogue marks (`01`, `02`)
— the same field-notes register as the kickers.

## 6. Assets

| Asset | Path | Status |
| --- | --- | --- |
| Favicon | `app/icon.svg` | Phase 0 |
| OG image (1200×630) | `app/opengraph-image.tsx` | Phase 0 |
| Demo screenshot / GIF of the real skill | — | **Blocked — request from อุด้ง** |

## 7. Anti-patterns

- Cream or beige backgrounds — the ground is warm *black*, not warm light
- Accent stripes down a card edge or a colored bar under a title
- Emoji used as icons (use Lucide, stroke width 1.5)
- Amber on amber, or amber text on any surface lighter than `--color-surface`
- Centered body paragraphs — titles center, prose stays left-aligned
- Motion for decoration; 150–300ms, and respect `prefers-reduced-motion`
