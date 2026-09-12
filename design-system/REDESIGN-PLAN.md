# Redesign Plan — The Survey Sheet / ผังสำรวจ

**Status:** agreed 12 September 2026. This is the plan for the full redesign of the
promo site. No components have been rewritten yet.

**Supersedes, once the build starts:** `MASTER.md` §2 (colour), §5b (signature
visuals) and §7 (anti-patterns). `MASTER.md` still describes the *current* site
and stays accurate until Phase 1 lands; it gets rewritten from this document, not
patched.

**Fixed decisions carried in from the brief:**

| | |
| --- | --- |
| Audience | The judges, during the stage pitch, on a projector, in about 10 minutes |
| Register | Museum — an exhibition hall: light, ordered, spacious, every artefact captioned |
| Tone | Light throughout |
| Motion | Medium — reveal and movement on scroll, not a scrollytelling production |
| Platform | Desktop first; phone afterwards |
| Event | Saturday 26 September 2026 — 14 days out |

---

## 1. The concept, in one sentence

**The site is not a page about a survey. It is one continuous survey drawing of a
codebase, drawn in front of the judge, on a single sheet.**

The product's claim is that it knows a codebase's architecture without an agent
reading the whole repository. Modern archaeology's most important move is the same
one: ground-penetrating radar, magnetometry and LiDAR image what is underground
*without opening it*. The metaphor is therefore not "digging". It is the refusal to
dig.

That distinction is what keeps this from being a costume. We are not decorating a
dev tool with archaeology. We are pointing out that the two disciplines are already
doing the same thing.

### The identity that makes it work

A **Harris matrix** — archaeology's formal diagram of which deposit came before
which — is a directed acyclic graph: numbered rectangles, latest at the top,
earliest at the bottom, an edge drawn only between contexts in direct contact.

A **dependency graph** is the same object. Not similar to it — the same.
"Overlain by / overlies" and "imported by / imports" are one relation.

This is the load-bearing idea of the whole redesign. Every time a choice looks
decorative, check it against this test: *is this pointing out a real overlap, or is
it dressing up?*

---

## 2. The product, mapped onto the drawing

| Product | Drawing |
| --- | --- |
| AST scan, no full read | The geophysical sweep — ground stays closed, structure appears anyway |
| Markdown note per entity | A numbered find, keyed to the sheet's margin register |
| `[[wikilinks]]` | The keying lines from margin note to plan feature |
| Dependency graph | The plan itself — features, and the walls between them |
| **Path tracing, no RAG** | **Solid line = evidenced. Dashed line = conjectured.** |
| Call flow | A traverse across the plan, arrowed, with station numbers |
| Blast radius | A radius struck from the changed feature; everything inside it hatched |
| Health grades A–F | The condition key in the legend box |
| Security sinks | Sink symbols — the only red on the sheet |
| Hotspot ranking | Contour density: more traffic, tighter isolines |
| Single HTML file | The whole site is one sheet, with one title block |
| Zero dependencies | The title block: `INSTRUMENTS: PYTHON STDLIB. NOTHING ELSE.` |
| 90% fewer tokens | Two plans at the same scale: area you would have opened, area actually opened |

The solid/dashed split is the single most valuable device here. It settles the
Zero-RAG argument in two strokes with no explanation, and no other device in any of
the four directions we considered converts the differentiator into an image that
fast.

---

## 3. Sheet anatomy — the furniture that never leaves

A real survey sheet has a fixed apparatus. Ours carries the same one, continuously,
across every section. This is what makes seven scroll-stops read as *one sheet*
rather than seven pages.

| Element | Position | Content |
| --- | --- | --- |
| **Grid** | Whole page | 72px module, 1px, ~12% opacity. Every element snaps to it |
| **Margin register** | Right 3 columns, full height | Numbered notes, field values, keys. Never body prose |
| **Key map** | Top right, small | A miniature of the whole sheet with the current position marked. Advances as you scroll — this is also the nav |
| **Title block** | Bottom right of the final section | Project · Sheet 01 of 01 · Scale · Date |
| **North arrow** | Top right corner | Fixed |
| **Scale bar** | Bottom left | `0 ———— 12,400 LOC` |
| **Legend box** | Appears once, in Features | Line weights, condition key, symbols |

The key map replaces the current floating nav bar. A survey sheet with a key map is
entirely authentic, and during the pitch the presenter can say "ตรงนี้" and every
judge's eye goes to the same place.

### Line weights are strict and meaningful

| Weight | Meaning |
| --- | --- |
| 0.75px | Grid |
| 1.5px | Feature outline, wall |
| 2.5px solid | **Traced path — evidenced** |
| 1.5px dashed 4-2 | **Conjectured — a guess** |
| 2px, accent | Blast radius circle, the find |

No other weights exist. If a line needs a weight not on this list, the drawing is
wrong.

---

## 4. Narrative arc — eight beats

The pitch runs about ten minutes alongside slides. The site's job is not to tell
the story; the slides do that. The site is **the evidence the story points at**.
So the arc is paced for a presenter scrolling, with one claim per stop.

### 1 — HERO · แผ่นเปล่า / THE BLANK SHEET

A near-empty warm-white sheet. Grid, north arrow, scale bar. One headline in the
clear space. Nothing has been drawn yet.

The blankness is the point: a judge reads *they haven't opened the ground*.

**The signature device lands here.** Before any structure is visible, a faint grey
shape resolves in the ground — an anomaly on an unexcavated plot. Only once it has
fully resolved does a single 1×1 grid square open as a trench, exactly over it,
captioned: **เรารู้ว่าต้องเปิดตรงไหน ก่อนที่จะเปิด**.

Every judge has sat through a demo where an AI read everything and guessed. This
frame says the opposite before a word of copy.

### 2 — SOLUTION · สองเส้นทาง / TWO ROUTES

The differentiator, placed high because it is the strongest thing we have.

One plan, two routes from the same start to the same end. A 2.5px solid traced
route that turns at right angles through four rooms, each turn numbered. A 1.5px
dashed route that wanders through six rooms and stops short, ending in a hollow
circle and a `?`.

Margin register carries both readings. This replaces the current
"Standard RAG vs Code Archaeologist" card pair — same argument, one image instead
of eight bullet points.

### 3 — HOW IT WORKS · ลำดับการสำรวจ / SURVEY ORDER

The plan draws itself in survey order, and the order *is* the pipeline: grid first,
then the site outline, then interior walls, then the finds.

`AST scan → markdown note per entity → [[wikilinks]] → dependency graph → traced path`

Nothing here is a new diagram — it is the same plan from beat 2, assembling.

### 4 — FEATURES · สิ่งที่พบบนผัง / FEATURES ON THE PLAN

The six capabilities are not six cards. They are six numbered features drawn on the
plan, each with a keyed margin note. The legend box appears here, once.

Structure Map · Flow Map · Blast Radius · Health Grade · Security Scan · Hotspot
Ranking.

Blast Radius gets the one **scroll-driven** moment in the site (see §8) so the
presenter has something they visibly operate.

### 5 — DEMO · แผ่นใส / THE OVERLAYS

Archaeologists draw each context on a separate sheet of translucent film over one
base plan, then stack them. The Explorer is presented the same way: one base plan —
the file tree drawn as a *plan*, not a list — with independently toggleable
overlays.

```
BASE PLAN     file tree (hairline, always visible)
  overlay 1   import graph          diagonal hatch
  overlay 2   test coverage         stipple, density = coverage
  overlay 3   churn, last 90 days   accent wash
  overlay 4   risk findings         markers at their numbers
```

Distinguish overlays with real drafting fills — hatch, cross-hatch, stipple density
— not four coloured translucent washes. Hatching stays legible when overlays stack,
survives a projector, and works for colourblind viewers.

**This beat also removes a blocker.** The Explorer screenshot from อุด้ง is still
outstanding; drawn overlays do not need it. If the screenshot arrives, it becomes a
bonus, not a dependency.

### 6 — IMPACT · สองผัง มาตราส่วนเดียวกัน / TWO PLANS, ONE SCALE

Two plans side by side at identical scale: the area you would have had to excavate,
and the area actually opened. The token numbers sit under them, stated once.

### 7 — TEAM · ช่องลงชื่อ / THE TITLE BLOCK

A real context record ends with `Recorder / Date / Initials` — who recorded it, when,
and who checked it. That is the team section, and it needed no invention:

```
RECORDER    ณัฐวุฒิ รอดทอง (อุด้ง)      lead tech, the skill
RECORDER    พีรพล จันทะแจ่ม (BB)        presentation materials
DATE        26.09.2026
SITE        iCONEXT AI CHALLENGE DAY
```

### 8 — CLOSE · ถอยกล้อง / PULL BACK

The camera pulls back and everything drawn — every section, every annotation — is
revealed to have been one sheet all along. Title block bottom right. One stamp:

`ONE FILE. NO DEPENDENCIES.`

### On the one-screen-per-section decision

The existing site gives each section exactly one screen. **Keep that** — a presenter
pitching live needs discrete beats to pace against, and it is already built and
verified. But the grid, the margin register and the key map run *continuously*
across all of them, so the page reads as one sheet being scrolled, not seven slides
being advanced. That resolves the tension: discrete for the presenter, continuous
for the eye.

---

## 5. The killer frame

If only one frame of this site is remembered, it is beat 2. Full 1920×1080.

Left two-thirds: a plan view of a codebase — 14 rectangular rooms at varying sizes
in 1.5px line, each labelled inside in small uppercase mono: `AUTH`, `ROUTER`,
`PAYMENTS/CHARGE`, `DB/POOL`. Thin walls between them.

Across the plan, two routes from the same start to the same end:

- **Solid**, 2.5px, accent. Turns only at right angles. Passes through four rooms.
  Each turn marked with a filled square and a station number.
- **Dashed**, 1.5px, muted. Wanders across six rooms, stops short of the
  destination, ends in a hollow circle and a `?`.

Right third — the margin register, ruled off by a 1px vertical:

> `TRACE 01` — solid
> **เส้นทางจริง 4 hop**
> `login() → verifyToken() → getUser() → db.query()`
> *ไล่ตาม dependency graph ทุก hop คือ edge จริง*
>
> `TRACE 02` — dashed
> **การเดาแบบ similarity search**
> *6 ไฟล์ที่ "หน้าตาคล้าย" ไม่มี edge ไม่มีคำตอบ*

Bottom right, the title block. Top right, the north arrow. Bottom left, the scale
bar.

No gradients. No shadows. No photographs. Exactly one colour.

---

## 6. Typography

The system is **one superfamily plus one Thai companion**, and the Thai companion is
already built on the Latin one's outlines, so the bilingual lockups share a skeleton.

| Role | Face | Notes |
| --- | --- | --- |
| Plan annotation, labels, numbers, coordinates, IDs, field names | **IBM Plex Mono** 500, uppercase, `tracking-[0.12em]` | **Latin only.** This is the drafting lettering |
| Latin prose and headings | **IBM Plex Sans** 400/500/600 | Already self-hosted |
| **All Thai** | **IBM Plex Sans Thai** (loopless) 400/500/600, `line-height: 1.75` | Already self-hosted. Never letterspaced, never uppercased |

**No serif. No display face. No second historical typeface.** A survey sheet has
none of these, and two historical faces at once is the reliable tell of a costume.

### The bilingual rule

**English is the notation. Thai is the meaning.**

Field names, coordinates, grid references, measurements, identifiers and grades stay
in Latin mono and are never translated — exactly as a real record keeps its codes
fixed while the interpretive text is in the local language. `CTX 147` needs no Thai
version. Interpretation, consequence and recommendation are Thai.

Never mix the two within a single line.

This is not a workaround for mono having no Thai glyphs. It is a free semantic split
that does most of the "this is a record" work at zero cost, and it is the one layer
of the fusion that survives translation.

### Projector sizing — a hard constraint, not a QA step

Perceived contrast drops roughly 30% under projection and thin strokes soften at the
lens. The Presentation Guild's 8H rule — text at least 1/50 of screen height is
readable from the back row — means that on a 1920-wide projected page:

| Role | Minimum |
| --- | --- |
| Body prose | **22px** |
| Margin notes, captions | **18px** |
| Annotation, field labels | **16px** |
| Anything smaller | Texture, not information — it must not carry meaning |

**The current site fails this comprehensively.** `text-xs` (12px) and `text-[10px]`
are used throughout for catalogue numbers, field labels and findings. All of it dies
in the rewrite. This is the single biggest content constraint on the redesign, and it
is why the feature cards become plan annotations: six cards of 12px body do not
survive the room, six labelled features on one drawing do.

### Font work required

One optional swap: **JetBrains Mono → IBM Plex Mono**, so the whole system is one
designer's hand. Same `next/font/local` pattern, four weights, Latin subset. Low
priority — JetBrains Mono works; Plex Mono is better matched.

---

## 7. Colour

Warm paper, near-black ink, one industrial accent. Contrast ratios below were
computed, not estimated.

| Token | Hex | Use | on `sheet` | on `sheet-2` |
| --- | --- | --- | --- | --- |
| `--sheet` | `#FBFAF4` | The paper | — | — |
| `--sheet-2` | `#F2EFE7` | Ground fill inside the plan outline | — | — |
| `--grid` | `#E3DFD4` | 72px module, 1px | rule only | rule only |
| `--rule` | `#D4CFC2` | Hairlines, register divider | rule only | rule only |
| `--line` | `#4A4640` | Standard feature line | 8.96 | 8.15 |
| `--ink` | `#14120F` | Heavy line, all body text | 17.88 | 16.27 |
| `--muted` | `#524D46` | Margin notes, field values | 8.00 | 7.28 |
| `--faint` | `#726B62` | Grid coordinates, least important labels | 5.03 | 4.57 |
| `--traced` | `#C2410C` | The traced path, the find, the sink | 4.95 | 4.51 |
| `--grade-good` | `#1F6B4E` | A / B in the condition key | 6.14 | 5.59 |
| `--grade-bad` | `#9E2B1E` | E / F, security sinks | 7.13 | 6.49 |

**`--traced` at 4.95 / 4.51 passes AA for text but has no headroom.** Restrict it to
large text (22px+), 2px rules, and fills. It replaces the current `--accent-deep`
`#B45309`, which fails AA on `sheet-2` at 4.37.

### Three rules about this palette

1. **Warm the paper; never age it.** The warmth is one flat hex applied once.
   Sepia tinting, edge darkening and desaturation are filters, and filters always
   read as costume.
2. **The accent is industrial, never vintage.** `#C2410C` is a colour no 19th-century
   process could produce. Every reference site we studied pairs an aged substrate
   with a signal colour from the present. Inverting this — a dusty accent on clean
   white — is the most reliable way to look cheap.
3. **One accent, and it means one thing:** this is evidenced. Not "this is
   important", not "this is interactive". If it is not traced, it is not accent.

---

## 8. Motion

**One verb: draw.**

Every line is an SVG path animated on `stroke-dashoffset`, triggered by
`IntersectionObserver`, **in the order a surveyor would draw it**. Nothing fades in.
Nothing slides.

| Element | Behaviour |
| --- | --- |
| Plan lines | Draw in survey order: grid, outline, walls, finds |
| Margin notes | Appear 200ms after their keyed feature completes, so the eye is pulled feature → keying line → note |
| Blast radius | A circle strikes from centre outward, 400ms |
| Hotspot contours | Draw from the outside in, tightening |
| Key map | The position marker advances along the sheet; it never teleports |
| Counters | Mono digits tick up over 600ms when their figure enters |

The meaning motion carries is always the same: **this is being recorded, in front of
you, in order.**

### The one operated moment

The **Blast Radius** reveal in beat 4 is scroll-linked rather than time-linked —
a `clip-path: inset()` driven by scroll progress. The presenter controls it with the
scroll wheel. This is the only point where a judge watches the presenter *operate*
the page rather than play it, and it reads as demonstration rather than playback.
One such moment is enough; two would be a gimmick.

### Reduced motion

Under `prefers-reduced-motion`, every path renders complete. The page must be fully
legible with no motion at all — the existing `<noscript>` reveal fallback already
establishes this and stays.

---

## 9. Content rules

1. **Every drawn line carries a caption. No caption means delete the line.**
   This is the one rule that keeps the sheet a museum and not a blueprint. A survey
   sheet is not an exhibition; what makes it one is the interpretive apparatus —
   legend box, scale bar, condition key, and a caption for *every single feature*.
2. **Label hierarchy is numeric**, as in real exhibition practice: each level roughly
   half the one above. Section title 64px → wall text 24px → margin note 18px.
3. **Every number must be real.** Decorative identifiers that encode nothing are the
   tell of a costume. If we print `CTX 031`, it resolves to something.
4. **State the coverage honestly.** The product maps a repository *without reading
   all of it*, and the strongest posture available is to say so plainly, the way
   museum records carry an accuracy note. This is a differentiator, not an apology.
5. **The archival register never touches controls.** Buttons say what happens. Errors
   say what broke. No "เริ่มการขุดค้น!" on a CTA.
6. **Density is authenticity.** Archival material is dense — indexes, tables, columns
   of numbers. A spacious page with one archival flourish reads as a theme
   restaurant. At least one genuinely dense, tabular, cross-referenced section.

### Outstanding content debts

- **The 90% / 8% token figures need a real measured case to cite.** Carried over
  from the current site. Beat 6 is built on these numbers; if they cannot be
  measured before the 26th, they must be reframed as an estimate with its method
  stated, not printed as a fact.
- **The Explorer screenshot from อุด้ง** is no longer blocking (beat 5 draws its own
  evidence) but would still strengthen it.

---

## 10. Anti-patterns

Absolute, and they are the difference between this concept and a costume.

**Never, under any circumstance:**

Pith helmets · bullwhips · fedoras · treasure · gold · skulls · pyramids · amphorae ·
rope borders · wax seals · compass roses used decoratively · wood grain · torn or
singed paper edges · crumpled-parchment backgrounds · crackle overlays · sepia
filters · sand gradients · floating dust particles · a magnifying glass over a map ·
trowel and brush icons · "ขุดลึกลงไป" / "unearth the secrets of your codebase" ·
"กำลังขุดค้น…" loaders with shovels or brushing-away-dust animations.

Real archaeology's visual language is **bureaucratic, not romantic** — forms,
numbers, hairlines and grids made by cold, tired people in a muddy field who need
the record to survive fifty years in a box. Every item above comes from adventure
fiction about archaeology, not from archaeology.

**Also forbidden:**

| | Why |
| --- | --- |
| Any texture overlay — grain, noise, paper JPEG, vignette | Fifteen reference sites studied, zero instances. Fastest possible way to look like a template |
| A second historical typeface | Two periods colliding is a costume shop |
| Body copy in mono | The moment a machine face sets a paragraph, the convention becomes a costume |
| Serif UI — buttons, nav, form labels, errors | The archive frames the instrument; it never operates it |
| Tinting or ageing the product screenshots | The product appears at full modern fidelity, always |
| Letterspaced Thai, uppercased Thai, Thai on a monospace grid | None of these concepts exist in Thai. All read as festival signage |
| A third ground | The sheet is one paper colour from top to bottom |
| Half-committing | A partial system reads as an unfinished idea; a total one reads as rigour |

### The swap test

Set the type to Helvetica and delete the accent colour. **If the page still reads as
a record** — because of the numbering, the margin register, the line weights, the
captions — the fusion is structural and will hold. If it collapses into a generic
landing page, we built a theme, not a design.

Run this test at the end of every phase.

---

## 11. Build plan

Estimated 5–7 days of the 14 remaining, leaving a week for content, the PowerPoint
and rehearsal. Hand-authored SVG is the entire cost; there is no image pipeline, no
video, no 3D, and no library beyond what the repo already has.

| Phase | Work | Days |
| --- | --- | --- |
| **1** | Rewrite `MASTER.md` from this document. Swap the tokens in `globals.css`. Verify contrast with axe-core before any component work | 0.5 |
| **2** | Sheet furniture: grid, margin register, key map, title block, north arrow, scale bar, legend box. These are shared components every section sits inside | 1 |
| **3** | **The plan drawing itself** — the single largest cost. Author the 14-room plan as SVG once; beats 2, 3, 4 and 5 are all views of it | 2–3 |
| **4** | The draw-on-scroll system: one `stroke-dashoffset` hook plus `IntersectionObserver`. Blast radius scroll-link | 0.5 |
| **5** | Content pass: rewrite every caption and margin note to the new type sizes. This is where the site becomes good — protect the time | 1 |
| **6** | Verification: axe-core, Lighthouse, projector legibility check at 1920×1080, the swap test | 0.5 |
| **7** | Phone layout | deferred |

**Do Phase 1 before anything else.** The current `MASTER.md` explicitly forbids a
light ground below the hero; until it is rewritten, the two systems will fight in
every file.

---

## 12. Open items

- Token figures for beat 6 need a real measured case, or an explicit method
- IBM Plex Mono swap — recommended, not required
- Phone layout deliberately deferred; five sections already exceed one screen at
  390×667 on the current site and closing that needs content cuts, not spacing
- The dev-tool landing reference sweep did not complete (hit a session limit) and
  can be re-run, but the three that did complete converged strongly enough that it
  is not blocking

---

## Sources

Concept and reference research, 12 September 2026.

**Archaeological record:** [Chiltern Archaeology context recording sheet](https://www.chilternarchaeology.org/uploads/b/b4ed5040-72bd-11ec-a1af-df069c2d2216/542063a0-8f05-11ec-99e7-812818679f9e.pdf) ·
[BAJR section drawing conventions](https://www.bajr.org/section-drawing/) ·
[Harris matrix](https://en.wikipedia.org/wiki/Harris_matrix) ·
[Principles of Archaeological Stratigraphy](http://harrismatrix.com/wp-content/uploads/2019/01/Principles_of_Archaeological_Stratigraphy.-2nd-edition.pdf) ·
[Munsell soil colour in archaeology](https://munsell.com/color-blog/brown-soil-color-chart-archaeology/) ·
[Sensoft — GPR for archaeology](https://www.sensoft.ca/georadar/archaeology/) ·
[Single context recording](https://en.wikipedia.org/wiki/Single_context_recording)

**Museum and exhibition practice:** [Museums & Galleries NSW — exhibition labelling](https://mgnsw.org.au/sector/resources/online-resources/exhibition/exhibition-labelling/) ·
[Science Museum Group collection record](https://collection.sciencemuseumgroup.org.uk/objects/co8084947) ·
[Getty — Ancient Carved Ambers](https://www.getty.edu/publications/ambers/) ·
[Wellcome Collection](https://wellcomecollection.org) ·
[UNESCO Virtual Museum of Stolen Cultural Objects](https://museum.unesco.org) ·
[Çatalhöyük Research Project](https://www.catalhoyuk.com/research) ·
[Pompeii open data](https://open.pompeiisites.org)

**Technical-record design:** [The Monospace Web](https://owickstrom.github.io/the-monospace-web/) ·
[U.S. Graphics Company](https://usgraphics.com) ·
[Oxide Computer](https://oxide.computer) ·
[Tufte CSS](https://edwardtufte.github.io/tufte-css/) ·
[Ink & Switch article style guide](https://inkandswitch.com/article-style-guide.html) ·
[Werner's Nomenclature of Colours](https://www.c82.net/werner/) ·
[Ballweg et al. — visualization guidelines for node-link representations](https://cs.au.dk/~hjschulz/pdfs/ballweg16.pdf)

**Projection legibility:** [Presentation Guild — the 8H rule](https://presentationguild.org/how-big-big-enough-the-8h-rule-reveals-all/) ·
[Designing for dark rooms and high-contrast settings](https://slidebazaar.com/blog/design-presentations-that-for-dark-rooms-with-high-contrast-settings/)
