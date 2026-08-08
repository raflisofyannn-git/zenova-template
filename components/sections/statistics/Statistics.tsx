import FadeUp from "@/components/animation/FadeUp";

import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import StatisticCard from "./StatisticCard";

import { statistics } from "@/data/statistics";

export default function Statistics() {
  return (
    <section
      id="statistics"
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
          right-[-120px]
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
              Our Impact
            </SectionBadge>

            <SectionTitle>
              Numbers That Speak
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
                For Themselves
              </span>
            </SectionTitle>

            <SectionDescription>
              Businesses choose Zenova to create
              better digital experiences, launch
              faster and scale with confidence.
            </SectionDescription>

          </FadeUp>

        </div>

        {/* Statistics */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            xl:grid-cols-4
            xl:gap-8
          "
        >
          {statistics.map((item, index) => (
            <FadeUp
              key={item.title}
              delay={index * 0.1}
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
