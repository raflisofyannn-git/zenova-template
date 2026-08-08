import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import TestimonialCarousel from "./TestimonialCarousel";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-32"
    >
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background to-primary/5" />

      <SectionContainer>

        <div className="mx-auto max-w-3xl text-center">

          <SectionBadge>
            Testimonials
          </SectionBadge>

          <SectionTitle>
            Trusted by Businesses Worldwide
          </SectionTitle>

          <SectionDescription>
            Hear what our clients say about working with Aureon.
          </SectionDescription>

        </div>

        <TestimonialCarousel />

      </SectionContainer>
    </section>
  );
}