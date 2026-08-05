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
        rounded-3xl
        border
        border-border/60
        bg-card
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/30
        hover:shadow-2xl
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-primary/5
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
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-primary/10
          text-primary
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <Icon size={30} />
      </div>

      {/* Badge */}
      <span
        className="
          inline-flex
          rounded-full
          bg-primary/10
          px-3
          py-1
          text-xs
          font-semibold
          uppercase
          tracking-wide
          text-primary
        "
      >
        Premium
      </span>

      {/* Title */}
      <h3 className="mt-5 text-2xl font-bold tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>

      {/* Bottom Line */}
      <div
        className="
          mt-8
          h-1
          w-0
          rounded-full
          bg-primary
          transition-all
          duration-500
          group-hover:w-16
        "
      />
    </div>
  );
}