import { Sheet, type Note } from "./sheet/Sheet";
import { Overlays } from "./plan/Overlays";

const notes: Note[] = [
  {
    ref: "Base plan",
    title: "ผังฐานคือ file tree",
    mono: "one plan, many films",
    body: "วาดเป็นผังไม่ใช่ลิสต์ เพราะสิ่งที่ต้องอ่านคือ “อะไรต่อกับอะไร”",
  },
  {
    ref: "Delivery",
    title: "ไฟล์ HTML ไฟล์เดียว",
    mono: "explorer.html · no server · no build",
    body: "เปิดจากเครื่องได้เลย ส่งต่อให้ใครก็ได้",
  },
  {
    ref: "Note",
    title: "ภาพนี้คือรูปแบบผลลัพธ์ ไม่ใช่ภาพหน้าจอจริง",
    mono: "drawn, not captured",
    body: "โครงและชั้นข้อมูลตรงกับของจริง แต่ตัวเลขเป็นตัวอย่าง",
  },
];

/**
 * Beat 05 — the overlays.
 *
 * The Explorer shown the way an excavation is recorded: one base plan with
 * independently toggleable films over it. This beat also removes a dependency —
 * it draws its own evidence, so it does not wait on a screenshot.
 */
export function Demo() {
  return (
    <Sheet id="demo" no="05" titleTh="แผ่นใส" titleEn="The overlays" notes={notes}>
      <Overlays />
    </Sheet>
  );
}
