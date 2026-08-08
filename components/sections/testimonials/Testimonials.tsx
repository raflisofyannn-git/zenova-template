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
          left-1/2
          top-40
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
              Testimonials
            </SectionBadge>

            <SectionTitle>
              Trusted by Businesses
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
                Worldwide
              </span>
            </SectionTitle>

            <SectionDescription>
              Hear what our clients say about
              building their digital products
              with Zenova.
            </SectionDescription>

          </FadeUp>

        </div>

        <TestimonialCarousel />

      </SectionContainer>
    </section>
  );
}