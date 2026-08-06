interface Props {
  title: string;
  value: string;
  change: string;
}

export default function StatsCard({
  title,
  value,
  change,
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
        bg-card
        p-5
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
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

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">
          {title}
        </p>

        <div
          className="
            h-3
            w-3
            rounded-full
            bg-emerald-500
          "
        />
      </div>

      {/* Value */}
      <h3 className="relative mt-4 text-3xl font-black tracking-tight">
        {value}
      </h3>

      {/* Trend */}
      <div className="relative mt-4 flex items-center gap-2">
        <span
          className="
            rounded-full
            bg-emerald-100
            px-2.5
            py-1
            text-xs
            font-bold
            text-emerald-700
          "
        >
          ▲ {change}
        </span>

        <span className="text-xs text-muted-foreground">
          this month
        </span>
      </div>
    </div>
  );
}