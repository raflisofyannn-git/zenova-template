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
        flex
        min-h-[210px]
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-[30px]
        border
        border-border/60
        bg-white
        p-8
        text-center
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-indigo-200
        hover:shadow-2xl
        hover:shadow-indigo-500/10
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-36
          w-36
          rounded-full
          bg-indigo-500/10
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
          text-5xl
          font-black
          tracking-tight
          sm:text-6xl
        "
      >
        <span
          className="
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
            bg-clip-text
            text-transparent
          "
        >
          {number}
          {suffix}
        </span>
      </div>

      {/* Title */}
      <p
        className="
          relative
          mt-4
          text-sm
          font-medium
          text-muted-foreground
        "
      >
        {title}
      </p>

      {/* Accent */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-1
          w-8
          -translate-x-1/2
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