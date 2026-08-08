import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";
import PricingGrid from "./PricingGrid";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-32"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-indigo-50/50" />

      <SectionContainer>

        <div className="mx-auto max-w-3xl text-center">

          <SectionBadge>
            Pricing
          </SectionBadge>

          <SectionTitle>
            Flexible Pricing For Every Business
          </SectionTitle>

          <SectionDescription>
            Simple pricing with no hidden fees.
            Upgrade anytime as your business grows.
          </SectionDescription>

        </div>

        <PricingGrid />

      </SectionContainer>

    </section>
  );
}