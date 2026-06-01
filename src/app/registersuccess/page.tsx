import Image from "next/image";
import { TechBackground } from "@/components/tech-background";

export default function RegisterSuccessPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02184b] text-white">
      <TechBackground variant="success" />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-12 text-center">
        <Image
          src="/Logo.png"
          alt="Leafclutch logo"
          width={150}
          height={150}
          priority
          className="mb-8 h-24 w-24 object-contain drop-shadow-[0_0_22px_rgba(48,221,151,0.42)] sm:mb-10 sm:h-36 sm:w-36"
        />

        <h1 className="max-w-[1100px] text-4xl font-black leading-tight tracking-normal text-[#30dd97] drop-shadow-[0_0_20px_rgba(48,221,151,0.22)] sm:text-5xl lg:text-6xl xl:text-7xl">
          Thank You for Registration!
        </h1>

        <p className="mt-5 max-w-[760px] text-base font-medium text-white/95 sm:text-2xl">
          You&apos;ll get the mail day before the free workshop.
        </p>

        <div className="mt-8 flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-24 bg-gradient-to-r from-transparent to-[#30dd97]" />
          <span className="h-3 w-3 rounded-full bg-[#30dd97] shadow-[0_0_16px_rgba(48,221,151,0.9)]" />
          <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#30dd97]" />
        </div>
      </section>
    </main>
  );
}
