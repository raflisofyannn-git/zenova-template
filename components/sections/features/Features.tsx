import FadeUp from "@/components/animation/FadeUp";
import FeatureCard from "./FeatureCard";
import { features } from "@/data/features";

import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

export default function Features() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background to-primary/5" />

      {/* Glow */}
      <div className="absolute left-1/2 top-20 -z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <SectionContainer>
        <div className="text-center">
          <FadeUp>
            <SectionBadge>
              Why Choose Aureon
            </SectionBadge>

            <SectionTitle>
              Everything You Need to Build Premium Websites
            </SectionTitle>

            <div className="mx-auto">
              <SectionDescription>
                Carefully crafted components designed for agencies,
                startups, and modern businesses.
              </SectionDescription>
            </div>
          </FadeUp>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FadeUp
              key={feature.title}
              delay={index * 0.15}
            >
              <FeatureCard {...feature} />
            </FadeUp>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}