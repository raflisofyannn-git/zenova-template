import { Check } from "lucide-react";

type Props = {
  items: string[];
};

export default function FeatureList({ items }: Props) {
  return (
    <div className="mt-10 space-y-5">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-4"
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-primary/10
              text-primary
            "
          >
            <Check size={18} />
          </div>

          <span className="text-lg font-medium">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}