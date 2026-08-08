import FadeUp from "@/components/animation/FadeUp";
import FadeLeft from "@/components/animation/FadeLeft";

import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import {
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

export default function About() {
  const points = [
    "Modern and scalable architecture",
    "Premium responsive design",
    "Reusable TypeScript components",
    "Smooth animations and interactions",
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
      "
    >
      {/* Background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          bg-gradient-to-b
          from-background
          via-indigo-50/20
          to-background
        "
      />

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/4
          -z-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-500/10
          blur-[160px]
        "
      />

      <SectionContainer>
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* Left Content */}
          <div>
            <FadeUp>

              <SectionBadge>
                About Zenova
              </SectionBadge>

              <SectionTitle>
                Built for
                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-indigo-600
                    via-violet-600
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  ambitious teams
                </span>
              </SectionTitle>

              <SectionDescription>
                Zenova is a premium Next.js template
                created for startups, SaaS companies,
                agencies and modern businesses that
                want to launch beautiful digital
                experiences faster.
              </SectionDescription>

            </FadeUp>

            {/* Points */}
            <div className="mt-8 space-y-4">
              {points.map((point, index) => (
                <FadeUp
                  key={point}
                  delay={0.1 + index * 0.08}
                >
                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-indigo-50
                        text-indigo-600
                      "
                    >
                      <Check size={15} />
                    </div>

                    <span className="text-sm font-medium sm:text-base">
                      {point}
                    </span>

                  </div>
                </FadeUp>
              ))}
            </div>

            {/* CTA */}
            <FadeUp delay={0.45}>
              <div className="mt-9">
                <button
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-gradient-to-r
                    from-indigo-600
                    via-violet-600
                    to-cyan-500
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-indigo-500/20
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-xl
                  "
                >
                  Explore Zenova

                  <ArrowRight size={17} />
                </button>
              </div>
            </FadeUp>
          </div>

          {/* Right Visual */}
          <FadeLeft>
            <div className="relative">

              {/* Main Card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-border/60
                  bg-white
                  p-6
                  shadow-2xl
                  sm:p-8
                "
              >
                {/* Header */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-indigo-600
                        via-violet-600
                        to-cyan-500
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      Z
                    </div>

                    <div>
                      <p className="font-bold">
                        Zenova
                      </p>

                      <p className="text-xs text-muted-foreground">
                        Digital Platform
                      </p>
                    </div>
                  </div>

                  <Sparkles
                    size={22}
                    className="text-violet-500"
                  />

                </div>

                {/* Analytics */}
                <div className="mt-8 grid grid-cols-2 gap-4">

                  <div
                    className="
                      rounded-2xl
                      bg-indigo-50
                      p-5
                    "
                  >
                    <p className="text-xs text-muted-foreground">
                      Growth
                    </p>

                    <p
                      className="
                        mt-2
                        text-3xl
                        font-bold
                        text-indigo-600
                      "
                    >
                      +42%
                    </p>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
                      <div
                        className="
                          h-full
                          w-[78%]
                          rounded-full
                          bg-gradient-to-r
                          from-indigo-600
                          to-violet-500
                        "
                      />
                    </div>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      bg-cyan-50
                      p-5
                    "
                  >
                    <p className="text-xs text-muted-foreground">
                      Performance
                    </p>

                    <p
                      className="
                        mt-2
                        text-3xl
                        font-bold
                        text-cyan-600
                      "
                    >
                      98.6
                    </p>

                    <div className="mt-4 flex items-end gap-1">
                      {[35, 55, 42, 70, 58, 82, 96].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="
                              flex-1
                              rounded-t
                              bg-gradient-to-t
                              from-cyan-500
                              to-indigo-500
                            "
                            style={{
                              height: `${height}px`,
                            }}
                          />
                        )
                      )}
                    </div>
                  </div>

                </div>

                {/* Bottom */}
                <div
                  className="
                    mt-4
                    rounded-2xl
                    border
                    border-border/60
                    bg-slate-50
                    p-5
                  "
                >
                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Active Projects
                      </p>

                      <p className="mt-1 text-2xl font-bold">
                        250+
                      </p>
                    </div>

                    <div
                      className="
                        rounded-full
                        bg-emerald-50
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-emerald-600
                      "
                    >
                      +18.2%
                    </div>

                  </div>
                </div>

                {/* Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    -right-24
                    h-56
                    w-56
                    rounded-full
                    bg-indigo-500/10
                    blur-[80px]
                  "
                />

              </div>

              {/* Floating Badge */}
              <div
                className="
                  absolute
                  -bottom-5
                  -left-5
                  z-20
                  rounded-2xl
                  border
                  border-border/60
                  bg-white
                  px-5
                  py-4
                  shadow-xl
                  sm:-left-8
                "
              >
                <p className="text-xs text-muted-foreground">
                  Client Satisfaction
                </p>

                <p className="mt-1 text-xl font-bold">
                  99%
                </p>
              </div>

            </div>
          </FadeLeft>
        </div>
      </SectionContainer>
    </section>
  );
}
