import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import FAQAccordion from "./FAQAccordion";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-32"
    >
      <SectionContainer>

        <div className="mx-auto max-w-3xl text-center">

          <SectionBadge>
            FAQ
          </SectionBadge>

          <SectionTitle>
            Frequently Asked Questions
          </SectionTitle>

          <SectionDescription>
            Everything you need to know before
            choosing Zenova.
          </SectionDescription>

        </div>

        <FAQAccordion />

      </SectionContainer>
    </section>
  );
}