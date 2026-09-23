# Code Archaeologist — Brand & Design System

> **Status, 14 September 2026 — direction changed to Apple keynote style.**
> Every illustrated archaeology theme tried on standby and screen 00 (pyramid
> linework, blueprint, strata, a torch-lit inscription wall) was judged not
> good-looking enough. The deck now follows the restraint of an Apple product
> launch: a lot of empty space, large sans type, one message per screen, a large
> hero visual, smooth fade and zoom. Screens that carry several pieces of data
> (output, numbers, commands, where the code goes, tokens) use a **Bento Grid**:
> tile size follows importance, at most four or five tiles, flat tiles a step
> lighter than the ground, no shadows.
>
> Still in force: **no gradients**, **one accent — orange**, no shadows, text
> that carries meaning never below 16px, every number real, English and Thai
> never mixed within one line. Archaeology lives in the words and the product
> name only — never in the pictures. Screens are redesigned one at a time,
> starting again at standby.
>
> **Type is the Mac's own:** SF Pro, SF Mono (Menlo in Chrome), and Sukhumvit
> Set / Thonburi for Thai, reached by name because SF cannot be self-hosted. The
> deck is presented from a Mac; IBM Plex (§3) stays loaded only as the fallback
> on any other machine.
>
> The torch-wall exploration is parked on branch `explore/torch-wall`.

> **Status, 13 September 2026 — the Survey Sheet build has been removed.**
> BB judged the presentation not creative enough: the same plan drawing carried
> five of seven beats, there was no contrast of scale, and one viewpoint ran
> throughout. The site is also no longer a promo page — **it replaces the
> PowerPoint on stage**, so it is now a thirteen-screen deck driven by click.
>
> What still holds from this document: the typography system and the
> English-is-notation / Thai-is-meaning rule (§3), and the anti-patterns (§8).
> §2 has been rewritten — **the deck now runs dark**. What no longer applies:
> the concept (§1), the sheet anatomy (§5), the motion spec (§5b) and the
> narrative arc — those are being redesigned one section at a time. The run and
> how the deck is driven are in [`DECK.md`](./DECK.md).
>
> The removed build is recoverable at commit `bb6bf53`.

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

> **Archaeology lives in the logic and the words. It never appears in the pictures.**

Decided 13 September 2026, after the first build drifted into being a dev-tool
deck with an archaeological name and nothing else. Both halves of that sentence
are load-bearing: the pictures stay a modern instrument, because an instrument is
what is being sold, and the archaeology earns its place only where it is pointing
out something that is *actually the same thing*, not something that merely looks
like it.

### The spine: survey, not excavation

Modern archaeology stopped opening whole sites. Ground radar and magnetometry
image what is underground **without breaking it open**, and the dig that follows
is one trench over one anomaly. That is not a metaphor for what this product
does — it is a description of it. The metaphor is not "digging"; it is the
refusal to dig.

### The five devices that are allowed

Everything archaeological in the deck must be one of these. Each one is a real
overlap, not a resemblance.

| Device | Why it is not costume |
| --- | --- |
| **Survey, not excavation** | The product's actual claim, stated in the discipline's own terms |
| **Solid = evidenced, dashed = conjectured** | A real drafting convention, and the product's differentiator, in two strokes |
| **A Harris matrix is a dependency graph** | The same object. Numbered nodes, latest on top, an edge only between things in direct contact |
| **A numbered finding (`CTX 031`)** | A record gives every observation an identifier you can point at. So should a tool's output |
| **Recorder / Date / Initials** | Every context sheet ends this way: who recorded it, when, who checked |

### The accent means one thing across the whole deck

Orange is **evidence, or its absence**. On screen 00 it lights the single line
that was actually read; on screen 01 it is the question mark against "files
actually affected". Same colour, same meaning, opposite sign. It is never used
for emphasis, for interaction, or because a screen needed some colour.

### Tone

Dry, precise, unhurried — the register of an instrument and of the people who
keep records, not of an adventure. Thai carries the meaning and is plain; Latin
monospace carries the notation and is never translated (§3).

**What this rules out:** sand and ochre palettes, dust, torn or burnt paper,
trowels, pith helmets, treasure, "ขุดลึกลงไป" copy, and loaders that brush dirt
away. Real archaeology looks like paperwork — forms, numbers, hairlines, grids.
Everything on that list comes from adventure fiction about archaeology rather
than from archaeology, and the full ban is in §8.

## 2. Color

**The deck runs dark.** The screen is a codebase, and one thing on it is lit.
Ratios below are computed, not estimated; re-verify with axe-core after any
change.

| Token | Hex | Use | Ratio on `sheet` |
| --- | --- | --- | --- |
| `--color-sheet` | `#0D0C0A` | The ground, everywhere | — |
| `--color-sheet-2` | `#16140F` | Fill inside an outline | — |
| `--color-sheet-raised` | `#1C1917` | Panels lifted off the ground | — |
| `--color-grid` | `#262220` | Module grid, 1px. Rule only | — |
| `--color-rule` | `#332E2A` | Hairlines, dividers. Rule only | — |
| `--color-texture` | `#524B42` | Type that is mass, not words | 2.28 |
| `--color-ink` | `#FAF8F3` | All body text | 18.4 |
| `--color-line` | `#B8B0A4` | Feature outlines | 9.1 |
| `--color-muted` | `#A8A096` | Secondary text, captions | 7.6 |
| `--color-faint` | `#8A8278` | Labels, least important | 5.2 |
| `--color-traced` | `#F97316` | Large text, 2px rules, fills | 7.0 |
| `--color-traced-deep` | `#FB923C` | Small accent text, hover | 8.6 |
| `--color-on-traced` | `#0D0C0A` | Text on a traced fill | 7.0 on the fill |
| `--color-grade-good` | `#65D68F` | Grade A / B | 10.8 |
| `--color-grade-bad` | `#F87171` | Grade E / F, sinks | 7.1 |

**Tone is per screen.** `[data-tone="light"]` swaps in the paper palette
(`#FBFAF4` ground, `#C2410C` accent, all AA-verified) for any screen that should
land differently from the one before it. It is set from the slide's `tone` field
so a light and a dark screen can share the stage mid-transition, and the deck
controls follow the live screen.

**Rules**

- **One accent, and it means one thing: this is evidenced.** Not "important",
  not "interactive". If it is not traced, it is not accent.
- **The accent inverts with the tone.** On the dark ground the *lighter* orange
  is the one small text can use; on paper it is the darker one. Using the wrong
  half of the pair is the easiest way to ship unreadable type.
- `--color-grid` and `--color-rule` never carry text. They are rules.
- `--color-texture` is only for type that carries no meaning — a field of code
  rendered as mass. Never for anything a judge is meant to read.
- Depth comes from line weight and value, **not from shadows**. There are no
  shadows on this deck.

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
