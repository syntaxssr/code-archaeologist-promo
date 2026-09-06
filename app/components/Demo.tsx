import { WireframeBlock } from "./WireframeBlock";

export function Demo() {
  return (
    <WireframeBlock
      id="demo"
      index="05"
      title="Demo"
      note="Screenshot/GIF ของ explorer.html (3-pane UI) ใส่ตรงนี้"
    >
      <div className="flex h-72 items-center justify-center rounded-lg border border-dashed border-white/20 text-white/40">
        [ Demo screenshot / GIF ]
      </div>
    </WireframeBlock>
  );
}
