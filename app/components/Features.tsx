import { WireframeBlock } from "./WireframeBlock";

const features = [
  "Structure Map",
  "Flow Map",
  "Blast Radius",
  "Health Grade",
  "Security Scan",
  "Hotspot Ranking",
];

export function Features() {
  return (
    <WireframeBlock id="features" index="04" title="Features">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {features.map((f) => (
          <div
            key={f}
            className="flex h-32 items-center justify-center rounded-lg border border-dashed border-white/20 text-center text-sm text-white/60"
          >
            {f}
          </div>
        ))}
      </div>
    </WireframeBlock>
  );
}
