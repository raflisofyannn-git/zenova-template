import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div
      className="
        group
        relative
        flex
        h-full
        min-h-[300px]
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-border/60
        bg-white
        p-8
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
          h-40
          w-40
          rounded-full
          bg-indigo-500/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-indigo-600
          via-violet-600
          to-cyan-500
          text-white
          shadow-lg
          shadow-indigo-500/20
          transition-transform
          duration-500
          group-hover:scale-110
          group-hover:rotate-3
        "
      >
        <Icon size={26} />
      </div>

      {/* Badge */}
      <span
        className="
          mt-7
          w-fit
          rounded-full
          bg-indigo-50
          px-3
          py-1
          text-[11px]
          font-bold
          uppercase
          tracking-wider
          text-indigo-600
        "
      >
        Zenova
      </span>

      {/* Title */}
      <h3
        className="
          mt-4
          text-xl
          font-bold
          tracking-tight
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-3
          leading-7
          text-muted-foreground
        "
      >
        {description}
      </p>

      {/* Accent */}
      <div className="mt-auto pt-7">
        <div
          className="
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
    </div>
  );
}
