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
    <div className="mx-auto grid w-full max-w-[1080px] grid-cols-2 gap-x-3 gap-y-6 pb-4 pt-8 sm:gap-x-8 sm:gap-y-7 min-[1025px]:grid-cols-4 min-[1025px]:gap-0 min-[1025px]:pt-10">
      {features.map(({ label, Icon }) => (
        <div
          key={label}
          className="flex min-w-0 items-center justify-center gap-3 sm:gap-4 min-[1025px]:border-l min-[1025px]:border-white/15 min-[1025px]:first:border-l-0"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0b2a62]/80 shadow-[0_0_24px_rgba(48,221,151,0.25),inset_0_0_24px_rgba(255,255,255,0.08)] sm:h-[74px] sm:w-[74px]">
            <Icon
              className="h-8 w-8 text-[#57f39c] sm:h-10 sm:w-10"
              strokeWidth={1.8}
            />
          </div>
          <p className="max-w-[130px] text-sm font-medium leading-tight text-white sm:max-w-[150px] sm:text-xl">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
