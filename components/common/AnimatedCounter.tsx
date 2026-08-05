"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          end={end}
          duration={duration}
          suffix={suffix}
        />
      ) : (
        0
      )}
    </div>
  );
}