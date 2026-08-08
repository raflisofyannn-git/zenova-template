import FadeUp from "@/components/animation/FadeUp";
import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import FeatureCard from "./FeatureCard";

import { features } from "@/data/features";

export default function Features() {
  return (
    <section
      id="features"
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
          left-1/2
          top-20
          -z-10
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/10
          blur-[160px]
        "
      />

      <SectionContainer>

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <FadeUp>

            <SectionBadge>
              Why Choose Zenova
            </SectionBadge>

            <SectionTitle>
              Everything You Need to Build
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
                Premium Websites
              </span>
            </SectionTitle>

            <SectionDescription>
              A complete collection of modern components,
              powerful layouts and polished interactions
              designed to help you launch faster.
            </SectionDescription>

          </FadeUp>

        </div>

        {/* Cards */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-8
          "
        >
          {features.map((feature, index) => (
            <FadeUp
              key={feature.title}
              delay={index * 0.1}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </FadeUp>
          ))}
        </div>

      </SectionContainer>
    </section>
  );
}