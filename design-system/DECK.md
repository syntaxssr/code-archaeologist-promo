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

**Each screen is its own reference frame** — absolutely positioned over the
stage, translated by whole multiples of its own width. A single translated track
has to agree with its container about what 100% means, and when it does not, the
deck lands between screens. That bug is why it is built this way.

In fullscreen the chrome and the cursor fade after 2.5s of stillness and come
back on any movement.

## The run — 13 screens, about 10 minutes

| # | Screen | Budget |
| --- | --- | --- |
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

## Rules that come with being a deck

- **One screen fits one screen.** Nothing scrolls inside a section — if it
  overflows, it cannot be seen at all, because there is no way to scroll to it.
- **Transitions carry direction.** Forward and back must not look the same, or
  the room cannot tell whether you went on or went back.
- **Rapid input must not break the sequence.** Clicking fast retargets the
  animation; it never lands between screens.
- **Text must read from the back of the room.** The floors in `MASTER.md` §3
  still apply, and matter more here than they did on a scrolling page.
