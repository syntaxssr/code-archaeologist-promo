# Code Archaeologist — Brand & Design System

Source of truth for the promo site. Anything built later (components, slides,
social images) must pull from this file rather than inventing new colors, fonts,
or logo variants.

Rewritten 12 September 2026 for the Survey Sheet redesign. The reasoning, the
narrative arc and the build plan live in [`REDESIGN-PLAN.md`](./REDESIGN-PLAN.md);
this file is the reference you build against.

- **Project:** Code Archaeologist — LLM Agent Skill that maps a codebase without reading all of it
- **Event:** iCONEXT AI Challenge Day 2026 — Saturday 26 September 2026
- **Team:** Team 3 — พีรพล จันทะแจ่ม (BB), ณัฐวุฒิ รอดทอง (อุด้ง)
- **Skill repo:** https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill

---

## 1. Concept

> **The site is one continuous survey drawing of a codebase, drawn in front of the judge, on a single sheet.**

The product knows a codebase's architecture without an agent reading the whole
repository. Modern archaeology's most important move is the same one: ground
radar, magnetometry and LiDAR image what is underground *without opening it*.

The metaphor is not "digging". It is **the refusal to dig**.

### The identity that makes it work

A Harris matrix — archaeology's diagram of which deposit came before which — is a
directed acyclic graph: numbered rectangles, latest at the top, edges only between
contexts in direct contact. A dependency graph is the same object. "Overlain by /
overlies" and "imported by / imports" are one relation.

We are not decorating a dev tool with archaeology. We are pointing out that the two
are already doing the same thing. **Every choice that looks decorative gets checked
against this: is it pointing out a real overlap, or dressing up?**

**Tone keywords:** surveyed, recorded, evidenced, captioned, measured, ordered.

**Register:** museum — an exhibition hall. Light, ordered, spacious, every artefact
captioned.

**What this rules out:** generic SaaS blue, neon "hacker" green, glassmorphism, dark
product-marketing gradients, and the entire adventure-archaeology register (see §7).

## 2. Color

Warm paper, near-black ink, one industrial accent. **There is no second ground** —
the sheet is one paper colour from top to bottom. Every ratio below was computed,
not estimated; re-verify with axe-core after any change.

| Token | Hex | Use | on `sheet` | on `sheet-2` | on `raised` |
| --- | --- | --- | --- | --- | --- |
| `--color-sheet` | `#FBFAF4` | The paper. Page ground, everywhere | — | — | — |
| `--color-sheet-2` | `#F2EFE7` | Ground fill *inside a plan outline* | — | — | — |
| `--color-sheet-raised` | `#FFFEFA` | Panels lifted off the sheet | — | — | — |
| `--color-grid` | `#E3DFD4` | 72px module, 1px. Rule only | — | — | — |
| `--color-rule` | `#D4CFC2` | Hairlines, register divider. Rule only | — | — | — |
| `--color-ink` | `#14120F` | Heavy line, all body text | 17.9 | 16.3 | 18.5 |
| `--color-line` | `#4A4640` | Standard feature outline | 8.96 | 8.15 | 9.28 |
| `--color-muted` | `#524D46` | Margin notes, field values | 8.00 | 7.28 | 8.29 |
| `--color-faint` | `#726B62` | Grid coordinates, least important labels | 5.03 | 4.57 | 5.21 |
| `--color-traced` | `#C2410C` | The traced path, the find, the sink | 4.95 | 4.51 | 5.13 |
| `--color-traced-deep` | `#9A3412` | Small accent text, hover, pressed | 6.99 | 6.36 | 7.24 |
| `--color-on-traced` | `#FFFFFF` | Text on a traced fill (5.18 on the fill) | — | — | — |
| `--color-grade-good` | `#1F6B4E` | Grade A / B | 6.14 | 5.59 | 6.36 |
| `--color-grade-bad` | `#9E2B1E` | Grade E / F, security sinks | 7.13 | 6.49 | 7.38 |

**Rules**

- **One accent, and it means one thing: this is evidenced.** Not "important", not
  "interactive". If it is not traced, it is not accent.
- `--color-traced` has no contrast headroom (4.51 at worst). Restrict it to **large
  text (22px+), 2px rules, and fills**. Small accent text uses `--color-traced-deep`.
- **Warm the paper; never age it.** The warmth is one flat hex applied once. Sepia
  tinting, edge darkening and desaturation are filters, and filters read as costume.
- **The accent is industrial, never vintage.** `#C2410C` is a colour no 19th-century
  process could produce. Inverting this — a dusty accent on clean white — is the most
  reliable way to look cheap.
- `--color-grid` and `--color-rule` never carry text. They are rules.
- Depth comes from line weight and desaturation, **not from shadows**. There are no
  shadows on this site.

### Verified

Measured against the production build, not by eye. Re-run after any change to
colour, type size or section layout.

| Check | Result |
| --- | --- |
| axe-core (WCAG 2.1 A + AA) | **0 violations** at 1920, 1536, 1440, 1280 and 390 |
| Horizontal overflow | **none** at all five widths |
| One screen per section | **holds at every width from 1280 to 1920** |
| Lighthouse desktop | **100 / 100 / 100 / 100** |

Widths verified: 1920x1080, 1680x1050, 1536x960, 1440x900, 1366x768, 1280x800,
1024x768 and 390x844. One screen per section holds from 1280 up.

Two things make that work, and both are easy to undo by accident:

- **The chrome scales with viewport height.** Section padding, the title size
  and the grid gap are `clamp(…svh…)` values that all land on their old fixed
  numbers at 1080, so the pitch surface is untouched while a 768px laptop gets
  about 50px back. Replacing any of them with a fixed rem breaks 1280–1366.
- **The margin register is wide** — 360px at `xl`, 400px at `2xl`. The drawing
  is height-capped, so the width the register takes was never being used by the
  plan; narrowing it makes the Thai notes wrap a line deeper and that, not the
  drawing, is what pushes a beat past one screen.

At 1024 and below the register stacks under the drawing and sections run long.
That range belongs to the deferred phone/tablet phase.

## 3. Typography

One superfamily plus one Thai companion, and the Thai companion is built on the
Latin one's outlines, so bilingual lockups share a skeleton.

| Role | Family | Notes |
| --- | --- | --- |
| Plan annotation, labels, numbers, coordinates, identifiers, field names | **IBM Plex Mono** 500, uppercase, `tracking-[0.12em]` | **Latin only.** This is the drafting lettering |
| Latin prose and headings | **IBM Plex Sans** 400/500/600 | |
| **All Thai** | **IBM Plex Sans Thai** (loopless) 400/500/600, `line-height: 1.75` | Never letterspaced, never uppercased |

**No serif. No display face. No second historical typeface.** A survey sheet has
none of these, and two historical faces at once is the reliable tell of a costume.

### The bilingual rule

> **English is the notation. Thai is the meaning.**

Field names, coordinates, grid references, measurements, identifiers and grades stay
in Latin mono and are **never translated** — exactly as a real record keeps its codes
fixed while the interpretive text is in the local language. `CTX 147` needs no Thai
version. Interpretation, consequence and recommendation are Thai.

**Never mix the two within one line.**

This is not a workaround for mono lacking Thai glyphs. It is a free semantic split
that does most of the "this is a record" work at zero cost.

### Sizes — set by projector legibility, not taste

Perceived contrast drops about 30% under projection and thin strokes soften at the
lens. The 8H rule — text at least 1/50 of screen height reads from the back row —
means on a 1920-wide projected page:

| Element | Size | Weight | Floor |
| --- | --- | --- | --- |
| Section title | 56–64px | 600 | — |
| Sub-head | 28–32px | 600 | — |
| Body prose | 22px | 400 | **22px** |
| Margin note, caption | 18px | 400–500 | **18px** |
| Annotation, field label | 16px | 500, uppercase, tracked | **16px** |

**Anything below 16px is texture, not information, and must not carry meaning.**
`text-xs` and `text-[10px]` are banned outside deliberate unreadable-texture blocks.

## 4. Logo

**Mark — "trench".** A site grid square, two strata lines dividing it into three
layers, and a dashed shaft tracing down from the surface to a node in the bottom
layer: the artifact found in context. Reads at 16px.

- Grid, strata: `currentColor` at descending opacity (1 / 0.55 / 0.35)
- Shaft + node: `--color-traced`
- Minimum size 16px; clear space on all sides = 25% of mark height
- Never recolor the node; never fill the grid square

**Wordmark.** `Code` in `--color-ink` + `Archaeologist` in `--color-traced-deep`,
IBM Plex Mono 600, tracking `-0.01em`. Lockup is mark + 8px gap + wordmark,
vertically centered.

Implementation: `app/components/brand/Logo.tsx`.

## 5. Sheet anatomy

The furniture that never leaves. It runs **continuously** across every section —
that is what makes seven scroll-stops read as one sheet rather than seven pages.

| Element | Position | Content |
| --- | --- | --- |
| **Grid** | Whole page | 72px module, 1px `--color-grid`. Every element snaps to it |
| **Margin register** | Right 3 columns, full height | Numbered notes, field values, keys. **Never body prose** |
| **Key map** | Top right | A miniature of the sheet with the current position marked. Advances on scroll — this is also the nav |
| **North arrow** | Top right corner | Fixed |
| **Scale bar** | Bottom left | `0 ———— 12,400 LOC` |
| **Legend box** | Once, in Features | Line weights, condition key, symbols |
| **Title block** | Bottom right of the final section | Project · Sheet 01 of 01 · Scale · Date |

### Line weights are strict and meaningful

| Weight | Meaning |
| --- | --- |
| 0.75px | Grid |
| 1.5px | Feature outline, wall |
| **2.5px solid** | **Traced path — evidenced** |
| **1.5px dashed 4-2** | **Conjectured — a guess** |
| 2px `--color-traced` | Blast radius, the find |

No other weights exist. If a line needs a weight not on this list, the drawing is
wrong.

The solid/dashed split is the site's most valuable device: it settles the Zero-RAG
argument in two strokes with no explanation.

## 5b. Motion

**One verb: draw.** Every line is an SVG path animated on `stroke-dashoffset`,
triggered by `IntersectionObserver`, **in the order a surveyor would draw it**.
Nothing fades in. Nothing slides.

| Element | Behaviour |
| --- | --- |
| Plan lines | Draw in survey order: grid, outline, walls, finds |
| Margin notes | Appear 200ms after their keyed feature completes |
| Blast radius | A circle strikes from centre outward, 400ms |
| Hotspot contours | Draw from the outside in, tightening |
| Key map | The marker advances along the sheet; it never teleports |
| Counters | Mono digits tick up over 600ms when their figure enters |

Motion always carries the same meaning: **this is being recorded, in front of you,
in order.**

**The one operated moment:** the Blast Radius reveal is scroll-linked rather than
time-linked, so the presenter drives it with the scroll wheel. That is the only
point where a judge watches the presenter *operate* the page rather than play it.
One such moment is enough; two would be a gimmick.

Primitives live in `globals.css`: `[data-draw]` + `[data-draw-run]` for paths,
`[data-note]` for annotation. Under `prefers-reduced-motion` every path renders
complete — the sheet must be fully legible with no motion at all.

## 6. Content rules

1. **Every drawn line carries a caption. No caption means delete the line.** This is
   the one rule that keeps the sheet a museum and not a blueprint.
2. **Every number must be real.** Decorative identifiers that encode nothing are the
   tell of a costume. If we print `CTX 031`, it resolves to something.
3. **State the coverage honestly.** The product maps a repository without reading all
   of it; saying so plainly, the way museum records carry an accuracy note, is a
   differentiator rather than an apology.
4. **The archival register never touches controls.** Buttons say what happens. Errors
   say what broke. No "เริ่มการขุดค้น!" on a CTA.
5. **Density is authenticity.** A spacious page with one archival flourish reads as a
   theme restaurant. At least one genuinely dense, tabular, cross-referenced section.

## 7. Assets

| Asset | Path | Status |
| --- | --- | --- |
| Favicon | `app/icon.svg` | Needs repaint for the sheet palette |
| OG image (1200×630) | `app/opengraph-image.tsx` | Needs repaint for the sheet palette |
| Demo screenshot of the real Explorer | — | Requested from อุด้ง — **no longer blocking**, the Demo section draws its own evidence |

## 8. Anti-patterns

**Never, under any circumstance:**

Pith helmets · bullwhips · fedoras · treasure · gold · skulls · pyramids · amphorae ·
rope borders · wax seals · decorative compass roses · wood grain · torn or singed
paper edges · crumpled-parchment backgrounds · crackle overlays · sepia filters ·
sand gradients · floating dust particles · a magnifying glass over a map · trowel and
brush icons · "ขุดลึกลงไป" / "unearth the secrets of your codebase" · loaders that
shovel or brush away dust.

Real archaeology's visual language is **bureaucratic, not romantic** — forms,
numbers, hairlines and grids made by cold, tired people in a muddy field who need the
record to survive fifty years in a box. Every item above comes from adventure fiction
about archaeology, not from archaeology.

**Also forbidden:**

| | Why |
| --- | --- |
| Any texture overlay — grain, noise, paper JPEG, vignette | Fifteen reference sites studied, zero instances. Fastest way to look like a template |
| A second historical typeface | Two periods colliding is a costume shop |
| Body copy in mono | The moment a machine face sets a paragraph, the convention becomes a costume |
| Serif UI — buttons, nav, form labels, errors | The archive frames the instrument; it never operates it |
| Tinting or ageing the product screenshots | The product appears at full modern fidelity, always |
| Letterspaced Thai, uppercased Thai, Thai on a monospace grid | None of these concepts exist in Thai. All read as festival signage |
| A third ground, or alternating section backgrounds | The sheet is one paper colour top to bottom |
| Shadows, glows, gradients on UI | Depth is line weight and desaturation |
| Accent stripes down a card edge, coloured bars under a title | Reads as filler |
| Emoji as icons | Use drawn symbols from the legend |
| Centered body paragraphs | Titles center, prose stays left-aligned |
| Text below 16px carrying meaning | Illegible from the back of the room |
| Half-committing | A partial system reads as an unfinished idea; a total one reads as rigour |

### The swap test

Set the type to Helvetica and delete the accent colour. **If the page still reads as
a record** — because of the numbering, the margin register, the line weights, the
captions — the fusion is structural and will hold. If it collapses into a generic
landing page, we built a theme, not a design.

Run this at the end of every phase.
