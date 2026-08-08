import FadeUp from "@/components/animation/FadeUp";

import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import PricingGrid from "./PricingGrid";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
      "
    >
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

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          -z-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/10
          blur-[180px]
        "
      />

      <SectionContainer>
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <SectionBadge>
              Simple Pricing
            </SectionBadge>

            <SectionTitle>
              Choose the Right
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
                Plan for You
              </span>
            </SectionTitle>

            <SectionDescription>
              Flexible plans designed for startups,
              growing businesses and ambitious teams.
            </SectionDescription>
          </FadeUp>
        </div>

        <PricingGrid />
      </SectionContainer>
    </section>
  );
}
