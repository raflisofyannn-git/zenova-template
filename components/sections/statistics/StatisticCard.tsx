import Counter from "@/components/animation/Counter";

interface Props {
  number: number;
  suffix?: string;
  title: string;
}

export default function StatisticCard({
  number,
  suffix = "",
  title,
}: Props) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-border/60
        bg-white/80
        p-8
        text-center
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-indigo-300
        hover:shadow-2xl
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-gradient-to-br
          from-indigo-500/20
          via-violet-500/20
          to-cyan-500/20
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Number */}
      <div
        className="
          relative
          bg-gradient-to-r
          from-indigo-600
          via-violet-600
          to-cyan-500
          bg-clip-text
          text-5xl
          font-black
          tracking-tight
          text-transparent
          lg:text-6xl
        "
      >
        <Counter
          value={number}
          suffix={suffix}
        />
      </div>

      {/* Title */}
      <p
        className="
          relative
          mt-4
          text-sm
          font-medium
          text-muted-foreground
          lg:text-base
        "
      >
        {title}
      </p>

      {/* Accent */}
      <div
        className="
          relative
          mx-auto
          mt-6
          h-1
          w-8
          rounded-full
          bg-gradient-to-r
          from-indigo-600
          via-violet-600
          to-cyan-500
          transition-all
          duration-500
          group-hover:w-16
        "
      />
    </div>
  );
}