import { ArrowRight, Sparkles } from "lucide-react";

import FadeUp from "@/components/animation/FadeUp";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-br
            from-indigo-600
            via-violet-600
            to-cyan-500
            px-6
            py-20
            text-center
            text-white
            shadow-2xl
            shadow-indigo-500/20
            sm:px-12
            lg:rounded-[48px]
            lg:py-28
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              -left-32
              -top-32
              h-96
              w-96
              rounded-full
              bg-white/10
              blur-[100px]
            "
          />

          <div
            className="
              absolute
              -bottom-40
              -right-32
              h-[500px]
              w-[500px]
              rounded-full
              bg-cyan-300/20
              blur-[120px]
            "
          />

          {/* Grid */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-10
              [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)]
              [background-size:48px_48px]
            "
          />

          <div className="relative z-10">

            <FadeUp>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  backdrop-blur-xl
                "
              >
                <Sparkles size={16} />

                Ready to Build?
              </div>

            </FadeUp>

            <FadeUp delay={0.15}>

              <h2
                className="
                  mx-auto
                  mt-8
                  max-w-4xl
                  text-4xl
                  font-black
                  leading-tight
                  tracking-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Turn Your Ideas Into
                <span className="block">
                  Digital Experiences.
                </span>
              </h2>

            </FadeUp>

            <FadeUp delay={0.3}>

              <p
                className="
                  mx-auto
                  mt-7
                  max-w-2xl
                  text-base
                  leading-8
                  text-white/80
                  sm:text-lg
                "
              >
                Launch faster with Zenova —
                a premium Next.js template
                built for ambitious teams and
                modern businesses.
              </p>

            </FadeUp>

            <FadeUp delay={0.45}>

              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  justify-center
                  gap-4
                "
              >
                <Button
                  size="lg"
                  className="
                    h-14
                    rounded-2xl
                    bg-white
                    px-8
                    font-semibold
                    text-indigo-700
                    shadow-xl
                    hover:bg-white/90
                  "
                >
                  Get Started

                  <ArrowRight
                    size={18}
                    className="ml-2"
                  />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="
                    h-14
                    rounded-2xl
                    border-white/40
                    bg-white/5
                    px-8
                    font-semibold
                    text-white
                    backdrop-blur-xl
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  View Demo
                </Button>
              </div>

            </FadeUp>

          </div>
        </div>

      </div>
    </section>
  );
}