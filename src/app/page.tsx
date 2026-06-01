
import Image from "next/image";
import { FeatureList } from "@/components/feature-list";
import { RegistrationForm } from "@/components/registration-form";
import { TechBackground } from "@/components/tech-background";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02184b] text-white">
      <TechBackground />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-4 py-7 sm:px-8 sm:py-9 min-[1025px]:px-12 xl:px-16">
        <div className="grid flex-1 items-center gap-9 sm:gap-12 min-[1025px]:grid-cols-[45%_55%] min-[1025px]:gap-8 xl:gap-14">
          <div className="mx-auto flex w-full max-w-[520px] flex-col min-[1025px]:mx-0 min-[1025px]:max-w-[560px]">
            <div className="flex items-start gap-4 sm:gap-7 min-[1025px]:gap-8">
              <Image
                src="/Logo.png"
                alt="Leafclutch logo"
                width={140}
                height={140}
                priority
                className="mt-1 h-16 w-16 shrink-0 object-contain drop-shadow-[0_0_18px_rgba(48,221,151,0.35)] sm:h-24 sm:w-24 min-[1025px]:h-28 min-[1025px]:w-28 xl:h-32 xl:w-32"
              />

              <div className="min-w-0">
                <h1 className="text-[2.65rem] font-black leading-[0.96] tracking-normal sm:text-6xl min-[1025px]:text-7xl xl:text-[5rem]">
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

          <div className="relative mx-auto flex aspect-square w-full max-w-[300px] items-center justify-center sm:max-w-[480px] min-[1025px]:max-w-[550px] min-[1025px]:justify-self-center xl:justify-self-start">
            <div className="absolute inset-[3%] rounded-full border border-[#30dd97]/30 bg-[#03245f]/25 shadow-[0_0_95px_rgba(48,221,151,0.36),inset_0_0_75px_rgba(48,221,151,0.12)]" />
            <div className="absolute inset-[12%] rounded-full bg-[#30dd97]/12 blur-2xl" />
            <Image
              src="/Logo.png"
              alt="Leafclutch workshop emblem"
              width={550}
              height={550}
              priority
              className="relative z-10 h-auto w-full max-w-[550px] object-contain drop-shadow-[0_0_38px_rgba(48,221,151,0.72)]"
            />
          </div>
        </div>

        <FeatureList />
      </section>
    </main>
  );
}
