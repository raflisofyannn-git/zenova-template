import { ArrowRight } from "lucide-react";

import FadeUp from "@/components/animation/FadeUp";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div
          className="
            relative
            overflow-hidden
            rounded-[48px]
            bg-gradient-to-br
            from-indigo-600
            via-violet-600
            to-cyan-500
            px-12
            py-24
            text-center
            text-white
          "
        >
          <div
            className="
              absolute
              -left-32
              -top-32
              h-96
              w-96
              rounded-full
              bg-white/10
              blur-[120px]
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
              blur-[160px]
            "
          />

          <FadeUp>

            <span
              className="
                rounded-full
                border
                border-white/30
                bg-white/10
                px-5
                py-2
                text-sm
                font-semibold
              "
            >
              Ready to Build?
            </span>

          </FadeUp>

          <FadeUp delay={0.2}>

            <h2
              className="
                mx-auto
                mt-8
                max-w-4xl
                text-5xl
                font-black
                leading-tight
                lg:text-6xl
              "
            >
              Build Your Next
              <br />
              Digital Product
              <br />
              With Zenova.
            </h2>

          </FadeUp>

          <FadeUp delay={0.4}>

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-white/80
              "
            >
              Launch faster with a premium
              Next.js template crafted for
              startups, SaaS and modern
              businesses.
            </p>

          </FadeUp>

          <FadeUp delay={0.6}>

            <div
              className="
                mt-12
                flex
                flex-wrap
                justify-center
                gap-5
              "
            >
              <Button
                size="lg"
                className="
                  h-14
                  rounded-2xl
                  bg-white
                  px-8
                  text-indigo-700
                  hover:bg-white
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
                  bg-transparent
                  px-8
                  text-white
                  hover:bg-white/10
                "
              >
                Live Preview
              </Button>

            </div>

          </FadeUp>

        </div>

      </div>
    </section>
  );
}