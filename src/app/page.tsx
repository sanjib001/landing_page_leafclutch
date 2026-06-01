
import Image from "next/image";
import { FeatureList } from "@/components/feature-list";
import { RegistrationForm } from "@/components/registration-form";
import { TechBackground } from "@/components/tech-background";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02184b] text-white">
      <TechBackground />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1240px] flex-col px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4">
          <div className="mx-auto flex w-full max-w-[560px] flex-col lg:mx-0 lg:pl-8">
            <div className="flex items-start gap-6 sm:gap-8">
              <Image
                src="/Logo.png"
                alt="Leafclutch logo"
                width={140}
                height={140}
                priority
                className="mt-1 h-20 w-20 shrink-0 object-contain drop-shadow-[0_0_18px_rgba(48,221,151,0.35)] sm:h-28 sm:w-28 lg:h-32 lg:w-32"
              />

              <div>
                <h1 className="text-[clamp(3.4rem,8vw,5.9rem)] font-black leading-[0.93] tracking-normal">
                  <span className="block text-white">Free</span>
                  <span className="block text-[#30dd97]">Strategic</span>
                  <span className="block text-[#30dd97]">Guidance</span>
                  <span className="block text-white">Workshop</span>
                </h1>

                <p className="mt-6 max-w-[380px] text-lg font-medium leading-7 text-white/95 sm:text-xl">
                  Get expert insights. Clear your doubts.
                  <br />
                  Plan your next move with confidence.
                </p>
                <div className="mt-4 h-[2px] w-14 bg-[#30dd97]" />
              </div>
            </div>

            <RegistrationForm />
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-[350px] items-center justify-center sm:max-w-[520px] lg:max-w-[610px] lg:justify-self-end">
            <div className="absolute inset-[5%] rounded-full border border-[#30dd97]/25 bg-[#03245f]/25 shadow-[0_0_85px_rgba(48,221,151,0.35),inset_0_0_75px_rgba(48,221,151,0.12)]" />
            <div className="absolute inset-[13%] rounded-full bg-[#30dd97]/10 blur-2xl" />
            <Image
              src="/Logo.png"
              alt="Leafclutch workshop emblem"
              width={620}
              height={620}
              priority
              className="relative z-10 h-[88%] w-[88%] object-contain drop-shadow-[0_0_38px_rgba(48,221,151,0.72)]"
            />
          </div>
        </div>

        <FeatureList />
      </section>
    </main>
  );
}
