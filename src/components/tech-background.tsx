type TechBackgroundProps = {
  variant?: "landing" | "success";
};

const leftLines = [
  "top-[18%] w-36 sm:w-48",
  "top-[24%] w-44 sm:w-56",
  "top-[30%] w-28 sm:w-40",
];

const rightLines = [
  "top-[9%] w-32 sm:w-44",
  "top-[15%] w-40 sm:w-52",
  "top-[54%] w-36 sm:w-48",
  "top-[59%] w-28 sm:w-36",
];

export function TechBackground({ variant = "landing" }: TechBackgroundProps) {
  const isSuccess = variant === "success";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_52%_26%,rgba(10,62,130,0.54),transparent_30%),linear-gradient(135deg,#021447_0%,#041d59_46%,#01143f_100%)]">
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(48,221,151,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(48,221,151,0.35)_1px,transparent_1px)] [background-size:92px_92px]" />

      <div className="absolute left-0 top-0 h-full w-1/3 opacity-70">
        {leftLines.map((position, index) => (
          <CircuitLine key={position} className={`${position} left-0`} reverse={false} dim={index === 2} />
        ))}
      </div>

      <div className="absolute right-0 top-0 h-full w-1/3 opacity-70">
        {rightLines.map((position, index) => (
          <CircuitLine
            key={position}
            className={`${position} right-0`}
            reverse
            dim={index === 3}
          />
        ))}
      </div>

      {isSuccess ? (
        <>
          <CircuitLine className="left-0 top-[38%] w-44 sm:w-60" reverse={false} />
          <CircuitLine className="right-0 top-[38%] w-44 sm:w-60" reverse />
          <CircuitLine className="right-[7%] top-[70%] w-52 sm:w-72" reverse />
        </>
      ) : (
        <>
          <CircuitLine className="right-[3%] top-[72%] w-36 sm:w-52" reverse />
          <CircuitLine className="left-[2%] top-[39%] w-32 sm:w-44" reverse={false} dim />
        </>
      )}

      <div className="absolute left-[9%] top-[8%] h-2 w-2 rounded-full bg-[#30dd97] shadow-[0_0_18px_7px_rgba(48,221,151,0.42)]" />
      <div className="absolute left-[7%] top-[37%] h-2 w-2 rounded-full bg-[#30dd97] shadow-[0_0_18px_7px_rgba(48,221,151,0.36)]" />
      <div className="absolute right-[5%] top-[11%] h-2 w-2 rounded-full bg-[#30dd97] shadow-[0_0_18px_7px_rgba(48,221,151,0.36)]" />
      <div className="absolute right-[12%] top-[78%] h-2 w-2 rounded-full bg-[#30dd97] shadow-[0_0_18px_7px_rgba(48,221,151,0.32)]" />
    </div>
  );
}

function CircuitLine({
  className,
  reverse,
  dim,
}: {
  className: string;
  reverse: boolean;
  dim?: boolean;
}) {
  return (
    <div className={`absolute h-12 ${className} ${dim ? "opacity-30" : ""}`}>
      <div
        className={`absolute top-1/2 h-px w-full -translate-y-1/2 bg-[#30dd97]/35 ${
          reverse ? "right-0" : "left-0"
        }`}
      />
      <div
        className={`absolute top-0 h-px w-16 bg-[#30dd97]/25 ${
          reverse
            ? "right-5 rotate-[-38deg] origin-right"
            : "left-5 rotate-[38deg] origin-left"
        }`}
      />
      <div
        className={`absolute bottom-0 h-px w-20 bg-[#30dd97]/18 ${
          reverse
            ? "right-10 rotate-[38deg] origin-right"
            : "left-10 rotate-[-38deg] origin-left"
        }`}
      />
      <span
        className={`absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#30dd97] shadow-[0_0_16px_5px_rgba(48,221,151,0.42)] ${
          reverse ? "left-0" : "right-0"
        }`}
      />
    </div>
  );
}
