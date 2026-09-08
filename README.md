# Code Archaeologist — Promo Site

หน้าเว็บโปรโมทโปรเจ็ค **Code Archaeologist** ส่งเข้าแข่งขัน **iCONEXT AI Challenge Day 2026**
(เสาร์ 26 กันยายน 2026, iCONEXT Head Office ชั้น 7 ตึก RS Tower)

## เกี่ยวกับโปรเจ็ค

Code Archaeologist เป็น LLM Agent Skill ที่สแกนโค้ดเบส สร้าง dependency graph +
Markdown wiki แบบ Zero-RAG ช่วยให้ agent ตอบคำถามเชิงสถาปัตยกรรม (call flow,
blast radius, health grade) โดยอ่านแค่ node ที่เกี่ยวข้อง แทนที่จะอ่านทั้ง repo —
ลด token การอ่านโค้ดลง 90%+

Repo หลักของ skill (source code, ใช้งานจริง):
[non-nattawut/Code-Archaeologist-LLM-Agent-Skill](https://github.com/non-nattawut/Code-Archaeologist-LLM-Agent-Skill)

Repo นี้เป็น **เว็บโปรโมทแยกต่างหาก** ไม่มีโค้ด skill อยู่ในนี้

## ทีม (Team 3)

| ชื่อ | บทบาท |
|---|---|
| ณัฐวุฒิ รอดทอง (อุด้ง) | Lead Tech — พัฒนา Skill |
| พีรพล จันทะแจ่ม (BB) | Presentation — PPT, เว็บโปรโมท |

## สิ่งที่อยู่ใน repo นี้

| Path | คืออะไร |
|---|---|
| `app/` | เว็บโปรโมท (Next.js App Router) |
| `design-system/MASTER.md` | **แบรนด์และ design token — อ่านก่อนแก้ UI ทุกครั้ง** |
| `presentation/CodeArchaeologist-Pitch.pptx` | สไลด์พิทช์ 11 หน้า |
| `presentation/speech-script.md` | สคริปพูดคู่กับสไลด์ |

## Tech Stack

- **Next.js 16** (App Router, Turbopack) + TypeScript
- **Tailwind CSS v4** — สีทั้งหมดมาจาก token ใน `app/globals.css` ห้าม hardcode
- **IBM Plex Sans / Sans Thai + JetBrains Mono** ผ่าน `next/font`
- ไอคอน `lucide-react`, favicon + OG image สร้างจากโค้ด (`app/icon.svg`, `app/opengraph-image.tsx`)

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # ต้องผ่านก่อน commit
```

## Deploy

Vercel — ดูขั้นตอนใน [`docs/deploy.md`](docs/deploy.md)

## License

Internal use — iCONEXT AI Challenge Day 2026
