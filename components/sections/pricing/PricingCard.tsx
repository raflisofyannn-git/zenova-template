import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  name: string;
  price: string;
  period: string;
  description: string;
  popular: boolean;
  features: string[];
  button: string;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  popular,
  features,
  button,
}: Props) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[36px]
        border
        p-10
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-2xl

        ${
          popular
            ? "border-indigo-500 bg-gradient-to-b from-indigo-50 via-white to-cyan-50 shadow-xl"
            : "border-border/60 bg-background"
        }
      `}
    >
      {popular && (

        <div
          className="
            absolute
            right-8
            top-8
            rounded-full
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
            px-4
            py-1.5
            text-xs
            font-bold
            text-white
          "
        >
          MOST POPULAR
        </div>

      )}

      <h3 className="text-2xl font-bold">
        {name}
      </h3>

      <p className="mt-3 text-muted-foreground">
        {description}
      </p>

      <div className="mt-8 flex items-end gap-1">

        <span
          className="
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
            bg-clip-text
            text-5xl
            font-black
            text-transparent
          "
        >
          {price}
        </span>

        <span className="pb-2 text-muted-foreground">
          {period}
        </span>

      </div>

      <div className="mt-10 space-y-5">

        {features.map((item) => (

          <div
            key={item}
            className="flex items-center gap-3"
          >

            <div
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-indigo-100
              "
            >
              <Check
                size={15}
                className="text-indigo-600"
              />
            </div>

            <span>{item}</span>

          </div>

        ))}

      </div>

      <Button
        className={`
          mt-10
          h-14
          w-full
          rounded-2xl

          ${
            popular
              ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500"
              : ""
          }
        `}
      >
        {button}
      </Button>

    </div>
  );
}