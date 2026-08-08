import {
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
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
          -right-20
          -top-20
          h-48
          w-48
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

      {/* Icon */}
      <div className="relative flex items-start justify-between">

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-indigo-100
            via-violet-100
            to-cyan-100
            text-indigo-600
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:rotate-6
          "
        >
          <Icon
            size={28}
            strokeWidth={1.8}
          />
        </div>

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-border/60
            text-muted-foreground
            transition-all
            duration-500
            group-hover:border-indigo-300
            group-hover:bg-indigo-600
            group-hover:text-white
          "
        >
          <ArrowUpRight size={19} />
        </div>

      </div>

      {/* Content */}
      <h3
        className="
          relative
          mt-8
          text-2xl
          font-bold
          tracking-tight
          transition-colors
          duration-300
          group-hover:text-indigo-600
        "
      >
        {title}
      </h3>

      <p
        className="
          relative
          mt-4
          leading-7
          text-muted-foreground
        "
      >
        {description}
      </p>

      {/* Accent */}
      <div
        className="
          mt-8
          h-1
          w-8
          rounded-full
          bg-gradient-to-r
          from-indigo-600
          via-violet-600
          to-cyan-500
          transition-all
          duration-500
          group-hover:w-20
        "
      />

    </div>
  );
}