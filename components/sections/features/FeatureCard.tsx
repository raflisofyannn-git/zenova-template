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
        rounded-3xl
        border
        bg-background
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-primary/10
          text-primary
          transition
          group-hover:scale-110
        "
      >
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-muted-foreground leading-7">
        {description}
      </p>
    </div>
  );
}