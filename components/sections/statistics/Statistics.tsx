import FadeUp from "@/components/animation/FadeUp";
import SectionContainer from "@/components/common/SectionContainer";
import SectionBadge from "@/components/common/SectionBadge";
import SectionTitle from "@/components/common/SectionTitle";
import SectionDescription from "@/components/common/SectionDescription";

import StatCard from "./StatCard";
import { statistics } from "@/data/statistics";

export default function Statistics() {
  return (
    <section className="py-32">
      <SectionContainer>
        <div className="text-center">
          <SectionBadge>
            Our Impact
          </SectionBadge>

          <SectionTitle>
            Trusted by Businesses Worldwide
          </SectionTitle>

          <SectionDescription>
            Thousands of companies rely on Aureon to
            build modern, scalable digital experiences.
          </SectionDescription>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((item, index) => (
            <FadeUp
              key={item.label}
              delay={index * 0.1}
            >
              <StatCard
                value={item.value}
                label={item.label}
              />
            </FadeUp>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}