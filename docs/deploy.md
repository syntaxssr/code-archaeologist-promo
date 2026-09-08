# Deploy — Vercel

เว็บนี้เป็น Next.js มาตรฐาน ไม่ต้องแก้ config อะไรเพิ่ม Vercel ตรวจเจอเองทั้งหมด
(framework preset, build command `next build`, output ของ App Router)

ขั้นตอนนี้ต้อง **login ด้วยบัญชีของ BB เอง** — ทำผ่านเว็บครั้งเดียวจบ

## ครั้งแรก (ผ่านหน้าเว็บ)

1. เข้า [vercel.com/new](https://vercel.com/new) → Continue with GitHub
   (ใช้บัญชี GitHub ที่เป็นเจ้าของ `syntaxssr/code-archaeologist-promo`)
2. Import repo `code-archaeologist-promo`
3. หน้า config **ไม่ต้องแก้อะไร** — Framework Preset ต้องขึ้นว่า `Next.js` เอง
   ถ้าไม่ขึ้นแปลว่าเลือก repo ผิด
4. กด **Deploy** → รอ ~1-2 นาที
5. ได้ URL `https://code-archaeologist-promo.vercel.app` (หรือชื่อใกล้เคียงถ้าชนกับคนอื่น)

หลังจากนี้ **ทุก push เข้า `main` จะ deploy อัตโนมัติ** ไม่ต้องกดอะไรอีก

## ตรวจหลัง deploy เสร็จ

| เช็ค | ต้องได้ |
|---|---|
| เปิด URL | หน้าเว็บขึ้นครบ 9 section ตัวไทยไม่กลายเป็นสี่เหลี่ยม |
| favicon บนแท็บ | ไอคอนหลุมขุดสีอำพัน |
| แปะลิงก์ใน LINE / Slack | ต้องขึ้นการ์ด OG พื้นดำ + ข้อความ "Excavating a codebase, layer by layer." |

ถ้าการ์ด OG ไม่ขึ้น ให้เช็ค `https://<โดเมนจริง>/opengraph-image` ว่าเปิดเป็นรูป PNG ได้

## Environment variable

ตอนนี้ **ไม่ต้องตั้งอะไรเลย** — `metadataBase` อ่านจาก `VERCEL_PROJECT_PRODUCTION_URL`
ที่ Vercel ใส่ให้เองอัตโนมัติ (ดู `app/layout.tsx`)

ถ้าภายหลังผูกโดเมนของบริษัท ให้ตั้ง `NEXT_PUBLIC_SITE_URL` แล้วแก้ `siteUrl`
ใน `app/layout.tsx` ให้อ่านค่านั้นก่อน

## ถ้าอยาก deploy จาก terminal แทน

```bash
npm i -g vercel
vercel login
vercel --prod
```

(วิธีผ่านหน้าเว็บง่ายกว่า และได้ auto-deploy ทุก push ด้วย — แนะนำอันบน)
