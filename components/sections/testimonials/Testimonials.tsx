import FadeUp from "@/components/animation/FadeUp";

import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import TestimonialCarousel from "./TestimonialCarousel";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
          left-[-120px]
          top-20
          -z-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-indigo-500/10
          blur-[170px]
        "
      />

      <SectionContainer>

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <FadeUp>

            <SectionBadge>
              Testimonials
            </SectionBadge>

            <SectionTitle>
              Loved by
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
                Modern Businesses
              </span>
            </SectionTitle>

            <SectionDescription>
              See what businesses and teams say about
              their experience working with Zenova.
            </SectionDescription>

          </FadeUp>

        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <TestimonialCarousel />
        </div>

      </SectionContainer>
    </section>
  );
}
