# สคริปพูด — Code Archaeologist

iCONEXT AI Challenge Day 2026 · Team 3 (BB + อุด้ง)

> หมายเหตุ: สมมติเวลาพูด **~6-7 นาที** (ยังไม่รู้ slot จริงของงาน) ปรับตัดต่อได้ตามเวลาจริงที่ได้รับแจ้ง
> คู่กับสไลด์ `CodeArchaeologist-Pitch.pptx` (11 สไลด์) พูดคนละคนได้ — แบ่งจุดสลับไว้ท้ายสคริปต์

---

## Slide 1 — Title (~30 วิ)

สวัสดีครับ ทีมของเราชื่อ **Code Archaeologist** — นักโบราณคดีของโค้ด

ทุกคนคงเคยเจอเหตุการณ์นี้: เปิด repo ที่ไม่เคยแตะมาก่อน แล้วต้องนั่งไล่อ่านทีละไฟล์เพื่อจะเข้าใจว่าโค้ดมันทำงานยังไง วันนี้เรามาเสนอ skill ที่ทำให้ AI agent ทำงานนี้แทนเรา แบบไม่ต้องอ่านทั้ง repo

## Slide 2 — Problem (~45 วิ)

ปัญหาที่เราเจอคือ ทุกวันนี้เวลา agent อย่าง Claude หรือ Cursor ต้องตอบคำถามเชิงสถาปัตยกรรม เช่น "controller ตัวนี้เชื่อมกับ database ยังไง" มันมักจะต้องอ่านโค้ดทั้ง repo หรือใช้ RAG แบบ chunk เนื้อหา

ปัญหาคือ RAG แบบเดิมตัดโค้ดเป็นก้อนๆ ขนาดประมาณ 500 token ซึ่งมันทำลาย scope ของฟังก์ชันและ call hierarchy ไป ผลคือ agent ตอบช้า ใช้ token เยอะเกินความจำเป็น แล้วนั่นแปลว่าต้นทุนที่เพิ่มขึ้นทุกครั้งที่เราถาม

## Slide 3 — Why Zero-RAG (~40 วิ)

เราเลยออกแบบแนวทางใหม่ที่เรียกว่า **Zero-RAG**

RAG แบบมาตรฐาน ใช้ similarity search ซึ่งไม่ deterministic แล้วก็ต้องอ่าน context ก้อนใหญ่ทุกครั้ง

ส่วน Code Archaeologist เราเก็บทั้ง entity ไว้เป็น note เดียวไม่ตัดทิ้ง แล้วเข้ารหัสความสัมพันธ์ระหว่างโค้ดเป็น graph ที่ชัดเจน การค้นหาใช้ BFS แบบ deterministic ผลลัพธ์เดิมทุกครั้ง ไม่ใช่การเดา

## Slide 4 — Solution (~40 วิ)

พูดง่ายๆ Code Archaeologist สแกนโค้ดเบสด้วย AST แปลงเป็น Markdown wiki ที่เชื่อมกันด้วย wikilink พร้อมสร้าง dependency graph ที่ agent เรียก query ได้ตรงๆ

รองรับทั้ง Python และ JS/TS เชื่อม backend กับ frontend เข้าด้วยกันในกราฟเดียว และที่สำคัญคือ **zero dependency** — ใช้ Python standard library ล้วนๆ ติดตั้งเร็ว ไม่ต้องมาคอย pip install อะไรเพิ่ม

## Slide 5 — How it Works (~40 วิ)

Flow การทำงานมี 5 ขั้นตอน: เริ่มจาก **Source** โค้ดต้นทาง ผ่าน **Scan** ด้วย AST แปลงเป็น **Graph** แล้ว **Trace** หาเส้นทางที่เกี่ยวข้อง ก่อนได้ **Answer** สุดท้าย

ตัวอย่างจริง สมมติเราถามว่า submitOrder บน frontend ไปจบที่ไหนใน backend — เราสามารถ trace ได้เลยว่า submitOrder เรียก createOrder ไปที่ OrderController แล้วไป OrderService จนถึง OrderRepository — ข้าม stack ได้ในคำสั่งเดียว

## Slide 6 — Key Features (~40 วิ)

นอกจาก mapping โค้ดแล้ว เรามี 6 ความสามารถหลัก: Structure Map กับ Flow Map ดูความสัมพันธ์ระดับ class และ method, Blast Radius บอกว่าถ้าแก้ตรงนี้กระทบอะไรบ้าง, Health Grade ให้เกรด A ถึง F กับสถาปัตยกรรม, Security Scan หา secret หลุดหรือช่องโหว่ และ Hotspot Ranking บอกว่าไฟล์ไหนแก้บ่อยและเสี่ยงที่สุด

## Slide 7 — Demo (~30 วิ + demo สด)

ทั้งหมดนี้ดูผ่านไฟล์ HTML ไฟล์เดียว ไม่ต้องมี server ไม่ต้องเข้าถึง repo commit ไว้หรือส่งให้เพื่อนดูก็เปิดได้เลย

[ตรงนี้ตัดไป demo สดในเครื่อง ถ้ามีเวลา — เปิด explorer.html โชว์ graph จริง]

## Slide 8 — Impact (~40 วิ)

ผลลัพธ์ที่วัดได้คือ ลด token ที่ใช้ลงมากกว่า 90% เทียบกับการอ่าน source ทั้งไฟล์ มี health grade ประเมินคุณภาพอัตโนมัติ และไม่มี external dependency เลยสักตัว

ตรงนี้ตรงกับเกณฑ์ "Impact ต่อบริษัท" ของงานวันนี้พอดี — ทั้งลดเวลาทำงาน ลดต้นทุนค่า token/LLM และเพิ่มคุณภาพโค้ดไปพร้อมกัน

## Slide 9 — Why iCONEXT (~30 วิ)

ที่ iCONEXT เราใช้ต่อยอดได้จริงหลายจุด — รัน blast-radius บน git diff ตอน review PR เห็นผลกระทบก่อน merge, security scan ช่วยดักความเสี่ยงจากตรงจุด, ติดตั้งง่ายด้วย npx รองรับทั้ง Claude, Cursor, Windsurf, Zed และช่วยให้คนใหม่ onboard เร็วขึ้นเพราะ trace flow จริงได้เลยแทนที่จะไล่อ่านโค้ดเอง

## Slide 10 — Team (~15 วิ)

ทีมเรามีสองคน อุด้งดูแลฝั่ง Lead Tech พัฒนา skill ทั้งหมด ส่วนผม BB ดูแลฝั่ง presentation เว็บโปรโมท และสคริปต์ที่กำลังพูดอยู่นี้

## Slide 11 — Closing (~15 วิ)

ขอบคุณครับ Code Archaeologist พร้อมให้ agent เข้าใจโค้ดของเราได้ลึกขึ้น เร็วขึ้น และถูกกว่าเดิม ยินดีตอบทุกคำถามครับ

---

## Timing สรุป

| ช่วง | เวลาโดยประมาณ |
|---|---|
| Slide 1-4 (Problem → Solution) | ~2:15 |
| Slide 5-7 (How it works → Demo) | ~1:50 + เวลา demo สด |
| Slide 8-9 (Impact → Adoption) | ~1:10 |
| Slide 10-11 (Team → Closing) | ~0:30 |
| **รวม (ไม่รวม demo สด)** | **~5:45** |

ถ้า slot จริงสั้นกว่านี้ ตัดที่ Slide 3 (Why Zero-RAG) กับ Slide 9 (Why iCONEXT) ได้ก่อน — เนื้อหาไม่กระทบ core message
ถ้ามีเวลามากกว่านี้ ขยาย Slide 7 เป็น demo สดเต็มๆ แทน
