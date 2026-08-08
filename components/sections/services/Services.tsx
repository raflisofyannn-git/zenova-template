import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import ServiceGrid from "./ServiceGrid";

export default function Services() {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background to-primary/5" />

      <SectionContainer>

        <div className="mx-auto max-w-3xl text-center">

          <SectionBadge>
            Services
          </SectionBadge>

          <SectionTitle>
            Everything You Need
            <br />
            To Grow Your Business
          </SectionTitle>

          <SectionDescription>
            Professional digital solutions designed
            for startups, agencies and modern companies.
          </SectionDescription>

        </div>

        <ServiceGrid />

      </SectionContainer>
    </section>
  );
}