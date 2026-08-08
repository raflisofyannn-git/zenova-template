interface Props {
  title: string;
  value: string;
}

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-border/60
        bg-white/70
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-indigo-300
        hover:shadow-2xl
      "
    >
      <div
        className="
          absolute
          -right-10
          -top-10
          h-28
          w-28
          rounded-full
          bg-gradient-to-br
          from-indigo-500/20
          via-violet-500/20
          to-cyan-500/20
          blur-3xl
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      <p className="relative text-sm font-medium text-muted-foreground">
        {title}
      </p>

      <h3
        className="
          relative
          mt-3
          bg-gradient-to-r
          from-indigo-600
          via-violet-600
          to-cyan-500
          bg-clip-text
          text-3xl
          font-black
          text-transparent
        "
      >
        {value}
      </h3>

      <div className="relative mt-5 flex items-center gap-2">
        <span
          className="
            rounded-full
            bg-emerald-100
            px-2.5
            py-1
            text-xs
            font-semibold
            text-emerald-700
          "
        >
          +12.5%
        </span>

        <p className="text-xs text-muted-foreground">
          this month
        </p>
      </div>
    </div>
  );
}
