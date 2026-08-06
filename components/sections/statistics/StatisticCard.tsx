"use client";

import CountUp from "react-countup";

type StatisticCardProps = {
  number: number;
  suffix?: string;
  title: string;
};

export default function StatisticCard({
  number,
  suffix = "",
  title,
}: StatisticCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-border/70
        bg-background
        p-10
        text-center
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/30
        hover:shadow-2xl
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-primary/5
          via-transparent
          to-transparent
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      <h3 className="relative text-5xl font-black text-primary">
        <CountUp
          end={number}
          duration={2}
        />
        {suffix}
      </h3>

      <p className="relative mt-5 text-lg text-muted-foreground">
        {title}
      </p>
    </div>
  );
}