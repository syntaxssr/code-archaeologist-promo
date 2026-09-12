/**
 * The sheet's beats, in order. One source for the key map, the section
 * headers and the title block — a sheet number that disagrees with the key
 * map is the kind of detail that makes a record look invented.
 */
export type SheetEntry = {
  id: string;
  no: string;
  th: string;
  en: string;
};

export const sheets: SheetEntry[] = [
  { id: "hero", no: "01", th: "แผ่นเปล่า", en: "THE BLANK SHEET" },
  { id: "solution", no: "02", th: "สองเส้นทาง", en: "TWO ROUTES" },
  { id: "method", no: "03", th: "ลำดับการสำรวจ", en: "SURVEY ORDER" },
  { id: "features", no: "04", th: "สิ่งที่พบบนผัง", en: "FEATURES ON THE PLAN" },
  { id: "demo", no: "05", th: "แผ่นใส", en: "THE OVERLAYS" },
  { id: "impact", no: "06", th: "สองผัง มาตราส่วนเดียวกัน", en: "TWO PLANS, ONE SCALE" },
  { id: "team", no: "07", th: "ช่องลงชื่อ", en: "THE TITLE BLOCK" },
];

export const sheetCount = String(sheets.length).padStart(2, "0");
