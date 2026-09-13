# The deck

From 13 September 2026 the site **is** the presentation. There is no separate
PowerPoint: on stage the team opens this instead.

## How it is driven

Click anywhere, or use the keyboard or a presenter remote. A clicker sends key
events rather than mouse clicks, so those are what actually matter:

| Input | Action |
| --- | --- |
| Click, `→` `↓` `Space` `Enter` `PageDown` | Next screen |
| `←` `↑` `Backspace` `PageUp` | Previous screen |
| `Home` / `End` | First / last |
| `F` | Fullscreen |
| Wheel | One notch, one screen (locked for 600ms) |

**The URL is the position.** `#demo` opens the deck on the demo screen, which is
how you drill one screen during rehearsal without clicking there from the start.
It is written with `replaceState`, so thirteen screens do not leave thirteen
entries in the back button.

**Section ids are prefixed (`screen-demo`) so the fragment never matches one.**
A bare `id={slide.id}` made `#title` a real fragment target, and the browser
scrolled this `overflow-hidden` box to bring it into view — on top of the
transform that actually positions the deck, landing every deep link exactly one
screen off. `overflow: hidden` prevents a scrollbar, not scrolling; the stage
also resets its own `scrollLeft`/`scrollTop` on any scroll, because a focus ring
in an off-stage screen can do the same thing.

**Each screen is its own reference frame** — absolutely positioned over the
stage, translated by whole multiples of its own width. A single translated track
has to agree with its container about what 100% means, and when it does not, the
deck lands between screens. That bug is why it is built this way.

In fullscreen the chrome and the cursor fade after 2.5s of stillness and come
back on any movement.

## The run — 13 screens, about 10 minutes

A standby screen sits in front of the run. It holds the projector while the room
settles and carries no number and no budget, because it is not part of the ten
minutes: the presenter clicks out of it when the judges give the signal.

It is a prompt with nothing typed at it — `~/standby $` and a blinking cursor.
In a room of developers that needs no caption: everyone knows what a cursor at a
shell means, and it says "ready, waiting for you" without putting an instruction
on a screen the whole room can read.

It withholds the project name, which is the payoff of screen 00. Its cursor is
the only thing on the deck that loops, and this is the only screen where that is
right: nobody is speaking over it, and a completely still screen carrying four
words reads as a page that failed to load.

Seven alternatives were built and compared on a projector before this one was
picked; they are at commit `cd54697`.

| # | Screen | Budget |
| --- | --- | --- |
| — | Standby | — |
| 00 | Title | 0:20 |
| 01 | เจ็บตรงไหน — the pain, as a moment a developer has actually had | 1:00 |
| 02 | ทำไม AI ที่มีอยู่ยังตอบไม่ได้ | 0:45 |
| 03 | นี่คืออะไร — one sentence, memorable | 0:30 |
| 04 | ทำงานยังไง | 1:00 |
| 05 | ต่างจาก RAG ยังไง | 0:45 |
| 06 | **Demo** — the longest thing on the deck, because it decides the room | 2:30 |
| 07 | ได้อะไรออกมา | 0:45 |
| 08 | ตัวเลข | 0:45 |
| 09 | ใช้กับงานเราจริงยังไง | 1:00 |
| 10 | ตรงเกณฑ์ตรงไหน | 0:45 |
| 11 | ทีม | 0:20 |
| 12 | ปิด | 0:20 |

The budgets are a rehearsal aid, not a countdown. They are printed on each
screen while the deck is still a skeleton so the shape of the talk is visible
before the content exists.

## Tone

The deck runs dark; `tone: "light"` on a slide swaps that screen to paper. Both
palettes are AA-verified (`MASTER.md` §2) and the accent inverts between them.
Checked at 16:9, 16:10 and 4:3 — halls rarely run 16:9, and the layout must
survive whichever projector is in the room.

## Motion on a screen

Entrances key off the **live** screen, not mount — all thirteen are in the DOM
the whole time, so mount-based animation would fire every screen's entrance
during the title. `[data-enter]` rises and fades, `[data-open]` wipes a band out
from its own centre, `[data-scan]` / `[data-scan-hit]` run a single pass down a
field of text.

Two rules the scan pass taught:

- **Nothing loops.** The presenter speaks over a screen for up to two and a half
  minutes; motion that never ends competes with them, and on a projector with a
  poor refresh it reads as a stutter.
- **Nothing animates where it will be covered.** The first version of the title
  ran its pass after the cut opened, and the band hid 45% of the travel — the
  sweep flickered at the top, vanished, and reappeared at the bottom, which
  reads as a glitch rather than a movement. Order the beats so motion happens on
  an uncovered screen.

## Rules that come with being a deck

- **One screen fits one screen.** Nothing scrolls inside a section — if it
  overflows, it cannot be seen at all, because there is no way to scroll to it.
- **Transitions carry direction.** Forward and back must not look the same, or
  the room cannot tell whether you went on or went back.
- **Rapid input must not break the sequence.** Clicking fast retargets the
  animation; it never lands between screens.
- **Text must read from the back of the room.** The floors in `MASTER.md` §3
  still apply, and matter more here than they did on a scrolling page.
