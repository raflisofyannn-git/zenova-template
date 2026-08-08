import FadeUp from "@/components/animation/FadeUp";

import StatisticCard from "@/components/sections/statistics/StatisticCard";
import { statistics } from "@/data/statistics";

import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

export default function Statistics() {
  return (
    <section
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
          via-indigo-50/30
          to-cyan-50/40
        "
      />

      {/* Indigo Glow */}
      <div
        className="
          absolute
          right-0
          top-20
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-500/10
          blur-[180px]
        "
      />

      {/* Cyan Glow */}
      <div
        className="
          absolute
          bottom-0
          left-0
          -z-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-500/10
          blur-[160px]
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
              Thousands of companies rely on Zenova
              to build modern, scalable and beautiful
              digital experiences.
            </SectionDescription>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div
              className="
                mx-auto
                mt-12
                h-1
                w-20
                rounded-full
                bg-gradient-to-r
                from-indigo-600
                via-violet-600
                to-cyan-500
              "
            />
          </FadeUp>
        </div>

        <div
          className="
            mt-20
            grid
            gap-6
            md:grid-cols-2
            xl:mt-24
            xl:grid-cols-4
          "
        >
          {statistics.map((item, index) => (
            <FadeUp
              key={item.title}
              delay={index * 0.12}
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