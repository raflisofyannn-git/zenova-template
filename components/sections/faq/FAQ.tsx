import FadeUp from "@/components/animation/FadeUp";
import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import FAQItem from "./FAQItem";

import { faq } from "@/data/faq";

export default function FAQ() {
  return (
    <section
      id="faq"
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
          right-[-150px]
          top-20
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      <SectionContainer>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <SectionBadge>
              Frequently Asked Questions
            </SectionBadge>

            <SectionTitle>
              Everything You Need
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
                to Know
              </span>
            </SectionTitle>

            <SectionDescription>
              Answers to the most common questions about
              Zenova and our digital solutions.
            </SectionDescription>
          </FadeUp>
        </div>

        {/* FAQ */}
        <div
          className="
            mx-auto
            mt-16
            max-w-4xl
            space-y-4
          "
        >
          {faq.map((item, index) => (
            <FadeUp
              key={item.question}
              delay={index * 0.08}
            >
              <FAQItem
                question={item.question}
                answer={item.answer}
              />
            </FadeUp>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
