import AnimatedCounter from "@/components/common/AnimatedCounter";

type Props = {
  end: number;
  suffix: string;
  label: string;
};

export default function StatCard({
  end,
  suffix,
  label,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        bg-card
        p-8
        text-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <h3 className="text-5xl font-black text-primary">
        <AnimatedCounter
          end={end}
          suffix={suffix}
        />
      </h3>

      <p className="mt-4 text-muted-foreground">
        {label}
      </p>
    </div>
  );
}