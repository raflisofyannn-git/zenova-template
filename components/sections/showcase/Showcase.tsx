import FadeUp from "@/components/animation/FadeUp";

import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import ShowcaseImage from "./ShowcaseImage";

export default function Showcase() {
  return (
    <section
      id="showcase"
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
          via-violet-50/20
          to-background
        "
      />

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          -z-10
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/10
          blur-[180px]
        "
      />

      <SectionContainer>

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <FadeUp>

            <SectionBadge>
              Product Showcase
            </SectionBadge>

            <SectionTitle>
              A Dashboard Designed
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
                for Modern Teams
              </span>
            </SectionTitle>

            <SectionDescription>
              Give your customers a powerful and
              beautiful workspace with everything
              they need in one place.
            </SectionDescription>

          </FadeUp>

        </div>

        {/* Showcase */}
        <FadeUp delay={0.2}>
          <div
            className="
              relative
              mx-auto
              mt-16
              max-w-6xl
            "
          >
            <ShowcaseImage />
          </div>
        </FadeUp>

      </SectionContainer>
    </section>
  );
}