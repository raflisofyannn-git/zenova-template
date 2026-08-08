import FadeUp from "@/components/animation/FadeUp";
import SectionContainer from "@/components/common/SectionContainer";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-slate-950" />

      {/* Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-gradient-to-br
          from-indigo-600/30
          via-violet-600/20
          to-cyan-500/20
        "
      />

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/2
          h-[450px]
          w-[450px]
          -translate-y-1/2
          rounded-full
          bg-indigo-600/30
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/2
          h-[450px]
          w-[450px]
          -translate-y-1/2
          rounded-full
          bg-cyan-500/20
          blur-[160px]
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-20
          [background-image:linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <SectionContainer>
        <div
          className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.04]
            px-6
            py-16
            text-center
            backdrop-blur-xl
            sm:px-10
            lg:px-20
            lg:py-20
          "
        >
          {/* Glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-40
              w-80
              -translate-x-1/2
              rounded-full
              bg-indigo-500/20
              blur-[100px]
            "
          />

          {/* Icon */}
          <FadeUp>
            <div
              className="
                relative
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-indigo-500
                via-violet-500
                to-cyan-500
                text-white
                shadow-xl
                shadow-indigo-500/20
              "
            >
              <Sparkles size={25} />
            </div>
          </FadeUp>

          {/* Badge */}
          <FadeUp delay={0.1}>
            <span
              className="
                relative
                mt-7
                inline-flex
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-indigo-200
              "
            >
              Ready to Build?
            </span>
          </FadeUp>

          {/* Title */}
          <FadeUp delay={0.2}>
            <h2
              className="
                relative
                mt-6
                text-4xl
                font-black
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Let's Build Something

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-indigo-300
                  via-violet-300
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                "
              >
                Extraordinary.
              </span>
            </h2>
          </FadeUp>

          {/* Description */}
          <FadeUp delay={0.3}>
            <p
              className="
                relative
                mx-auto
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-slate-400
                sm:text-lg
              "
            >
              Turn your ideas into a beautiful digital
              experience with Zenova. Start building
              today and create something your customers
              will remember.
            </p>
          </FadeUp>

          {/* Buttons */}
          <FadeUp delay={0.4}>
            <div
              className="
                relative
                mt-9
                flex
                flex-col
                items-center
                justify-center
                gap-4
                sm:flex-row
              "
            >
              <button
                type="button"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-slate-950
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                Get Started
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/5
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                Contact Us
              </button>
            </div>
          </FadeUp>

          {/* Note */}
          <FadeUp delay={0.5}>
            <p
              className="
                relative
                mt-8
                text-xs
                text-slate-500
              "
            >
              No complicated setup Â· Fully customizable Â· Production ready
            </p>
          </FadeUp>
        </div>
      </SectionContainer>
    </section>
  );
}
