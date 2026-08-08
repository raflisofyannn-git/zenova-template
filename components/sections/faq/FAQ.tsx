import FadeUp from "@/components/animation/FadeUp";

import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import FAQAccordion from "./FAQAccordion";

export default function FAQ() {
  return (
    <section
      id="faq"
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
          right-0
          top-20
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
              FAQ
            </SectionBadge>

            <SectionTitle>
              Frequently Asked
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
                Questions
              </span>
            </SectionTitle>

            <SectionDescription>
              Everything you need to know about
              Zenova and how it can help your
              business grow.
            </SectionDescription>

          </FadeUp>

        </div>

        <FAQAccordion />

      </SectionContainer>
    </section>
  );
}