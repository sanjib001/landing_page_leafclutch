import { Lightbulb, Map, Rocket, Target } from "lucide-react";
import type { ComponentType } from "react";

type Feature = {
  label: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

const features: Feature[] = [
  { label: "Expert Guidance", Icon: Target },
  { label: "Clear Roadmap", Icon: Map },
  { label: "Actionable Insights", Icon: Lightbulb },
  { label: "Take the Right Next Step", Icon: Rocket },
];

export function FeatureList() {
  return (
    <div className="mx-auto grid w-full max-w-[1020px] grid-cols-1 gap-5 pb-4 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:pt-10">
      {features.map(({ label, Icon }) => (
        <div
          key={label}
          className="flex items-center justify-center gap-4 lg:border-l lg:border-white/15 lg:first:border-l-0"
        >
          <div className="flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] shadow-[0_0_24px_rgba(48,221,151,0.23),inset_0_0_22px_rgba(255,255,255,0.07)]">
            <Icon className="h-10 w-10 text-[#57f39c]" strokeWidth={1.8} />
          </div>
          <p className="max-w-[150px] text-xl font-medium leading-tight text-white">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
