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
      {/* Gradient Glow */}
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
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative
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
          group-hover:shadow-lg
          group-hover:shadow-indigo-500/20
        "
      >
        <Icon size={30} strokeWidth={1.8} />
      </div>

      {/* Badge */}
      <span
        className="
          mt-7
          inline-flex
          rounded-full
          border
          border-indigo-200
          bg-indigo-50
          px-3
          py-1
          text-xs
          font-semibold
          uppercase
          tracking-wide
          text-indigo-700
        "
      >
        Premium
      </span>

      {/* Title */}
      <h3
        className="
          mt-5
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

      {/* Description */}
      <p
        className="
          mt-4
          leading-7
          text-muted-foreground
        "
      >
        {description}
      </p>

      {/* Bottom Gradient Line */}
      <div
        className="
          mt-8
          h-1
          w-0
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