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
          via-cyan-50/20
          to-background
        "
      />

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-20
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[-150px]
          bottom-20
          -z-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-indigo-500/10
          blur-[160px]
        "
      />

      <SectionContainer>

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <FadeUp>

            <SectionBadge>
              What We Do
            </SectionBadge>

            <SectionTitle>
              Everything Your
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
                Business Needs
              </span>
            </SectionTitle>

            <SectionDescription>
              Flexible digital solutions designed to help
              modern businesses launch, grow and scale
              with confidence.
            </SectionDescription>

          </FadeUp>

        </div>

        {/* Services */}
        <div className="mt-16">
          <ServiceGrid />
        </div>

      </SectionContainer>
    </section>
  );
}
