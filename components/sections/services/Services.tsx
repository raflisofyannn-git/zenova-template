import FadeUp from "@/components/animation/FadeUp";

import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import ServiceGrid from "./ServiceGrid";

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        py-20
        lg:py-32
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-b
          from-background
          via-indigo-50/20
          to-cyan-50/30
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          left-0
          top-20
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-500/10
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          -z-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-500/10
          blur-[160px]
        "
      />

      <SectionContainer>

        <div className="mx-auto max-w-3xl text-center">

          <FadeUp>

            <SectionBadge>
              Our Services
            </SectionBadge>

            <SectionTitle>
              Everything You Need to
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
                Build & Grow
              </span>
            </SectionTitle>

            <SectionDescription>
              Powerful digital solutions designed
              to help modern businesses move faster,
              work smarter and grow with confidence.
            </SectionDescription>

          </FadeUp>

        </div>

        <ServiceGrid />

      </SectionContainer>
    </section>
  );
}