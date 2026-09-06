import { WireframeBlock } from "./WireframeBlock";

const steps = ["Source", "Scan (AST)", "Graph", "Trace", "Answer"];

export function HowItWorks() {
  return (
    <WireframeBlock id="how-it-works" index="03" title="How it Works">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <div className="flex h-20 w-28 items-center justify-center rounded-lg border border-dashed border-white/20 text-center text-sm text-white/60">
              {step}
            </div>
            {i < steps.length - 1 && (
              <span className="text-white/30">&rarr;</span>
            )}
          </div>
        ))}
      </div>
    </WireframeBlock>
  );
}
