import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-border/60
        bg-background
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-primary/10
          text-primary
        "
      >
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}