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
| พีรพล จันทะแจ่ม (BB) | Presentation — PPT, เว็บโปรโมท, สคริปพูด, ตารางงาน |

## Tech Stack

Static HTML/CSS/JS หน้าเดียว (landing page) — ไม่มี build step, deploy ผ่าน GitHub Pages

## Development

เปิด `index.html` ในเบราว์เซอร์ตรงๆ ได้เลย ไม่ต้องมี server

## Deploy

GitHub Pages จาก branch `main` (ตั้งค่าใน repo Settings → Pages)

## License

Internal use — iCONEXT AI Challenge Day 2026
