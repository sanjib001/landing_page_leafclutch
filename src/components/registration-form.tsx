"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type WorkshopFormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
};

export function RegistrationForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WorkshopFormValues>({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const onSubmit = () => {
    router.push("/registersuccess");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 w-full max-w-[520px] rounded-[22px] border border-white/35 bg-[#061d56]/80 p-5 shadow-[0_24px_45px_rgba(0,0,0,0.34)] backdrop-blur-sm sm:p-8"
      noValidate
    >
      <div>
        <label htmlFor="fullName" className="text-lg font-bold text-white">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          autoComplete="name"
          aria-invalid={Boolean(errors.fullName)}
          className="mt-3 h-14 w-full rounded-xl bg-white px-5 text-base font-medium text-[#061d56] outline-none ring-2 ring-transparent transition placeholder:text-slate-400 focus:ring-[#30dd97]"
          {...register("fullName", {
            required: "Full Name is required",
          })}
        />
        {errors.fullName ? (
          <p className="mt-2 text-sm font-medium text-red-200">
            {errors.fullName.message}
          </p>
        ) : null}
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="text-lg font-bold text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          className="mt-3 h-14 w-full rounded-xl bg-white px-5 text-base font-medium text-[#061d56] outline-none ring-2 ring-transparent transition placeholder:text-slate-400 focus:ring-[#30dd97]"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email ? (
          <p className="mt-2 text-sm font-medium text-red-200">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div className="mt-5">
        <label htmlFor="phoneNumber" className="text-lg font-bold text-white">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="tel"
          placeholder="Enter your phone number"
          autoComplete="tel"
          inputMode="tel"
          aria-invalid={Boolean(errors.phoneNumber)}
          className="mt-3 h-14 w-full rounded-xl bg-white px-5 text-base font-medium text-[#061d56] outline-none ring-2 ring-transparent transition placeholder:text-slate-400 focus:ring-[#30dd97]"
          {...register("phoneNumber", {
            required: "Phone Number is required",
            validate: (value) => {
              const digits = value.replace(/\D/g, "");

              if (digits.length < 7) {
                return "Phone Number must be at least 7 digits";
              }

              if (digits.length > 15) {
                return "Phone Number must be at most 15 digits";
              }

              return true;
            },
          })}
        />
        {errors.phoneNumber ? (
          <p className="mt-2 text-sm font-medium text-red-200">
            {errors.phoneNumber.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 h-[62px] w-full rounded-xl bg-[#30dd97] text-2xl font-black tracking-normal text-[#031542] shadow-[0_0_22px_rgba(48,221,151,0.24)] transition hover:bg-[#57f3aa] focus:outline-none focus:ring-2 focus:ring-[#57f3aa] focus:ring-offset-2 focus:ring-offset-[#061d56] disabled:cursor-not-allowed disabled:opacity-70"
      >
        REGISTER NOW
      </button>
    </form>
  );
}
