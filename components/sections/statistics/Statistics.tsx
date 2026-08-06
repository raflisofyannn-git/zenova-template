import FadeUp from "@/components/animation/FadeUp";

import StatisticCard from "@/components/sections/statistics/StatisticCard";

import { statistics } from "@/data/statistics";

import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

export default function Statistics() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background to-primary/5" />

      {/* Glow */}

      <div
        className="
          absolute
          right-0
          top-20
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary/10
          blur-[180px]
        "
      />

      <SectionContainer>

        <div className="mx-auto max-w-3xl text-center">

          <FadeUp>

            <SectionBadge>
              Our Impact
            </SectionBadge>

            <SectionTitle>
              Trusted by Businesses Worldwide
            </SectionTitle>

            <SectionDescription>
              Thousands of companies rely on Aureon to build
              modern, scalable digital experiences.
            </SectionDescription>

          </FadeUp>

          <FadeUp delay={0.15}>
            <div
              className="
                mx-auto
                mt-12
                h-px
                w-28
                rounded-full
                bg-border
              "
            />
          </FadeUp>

        </div>

        <div
          className="
            mt-24
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {statistics.map((item, index) => (
            <FadeUp
              key={item.title}
              delay={index * 0.15}
            >
              <StatisticCard
                number={item.number}
                suffix={item.suffix}
                title={item.title}
              />
            </FadeUp>
          ))}
        </div>

      </SectionContainer>

    </section>
  );
}