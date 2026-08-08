import { Check, Sparkles } from "lucide-react";
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
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[32px]
        border
        p-8
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-2xl
        lg:p-10
        ${
          popular
            ? "border-indigo-400 bg-gradient-to-b from-indigo-50 via-white to-cyan-50 shadow-xl shadow-indigo-500/10"
            : "border-border/60 bg-white/80 backdrop-blur-xl"
        }
      `}
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

      {/* Popular Badge */}
      {popular && (
        <div
          className="
            absolute
            right-6
            top-6
            flex
            items-center
            gap-1.5
            rounded-full
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
            px-4
            py-2
            text-xs
            font-bold
            text-white
          "
        >
          <Sparkles size={13} />
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="relative">

        <h3 className="text-2xl font-bold">
          {name}
        </h3>

        <p className="mt-3 min-h-[48px] text-sm leading-6 text-muted-foreground">
          {description}
        </p>

      </div>

      {/* Price */}
      <div className="relative mt-8 flex items-end gap-1">

        <span
          className="
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
            bg-clip-text
            text-5xl
            font-black
            tracking-tight
            text-transparent
          "
        >
          {price}
        </span>

        {period && (
          <span className="mb-2 text-sm text-muted-foreground">
            {period}
          </span>
        )}

      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-border/60" />

      {/* Features */}
      <div className="relative flex-1 space-y-5">

        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <div
              className="
                flex
                h-7
                w-7
                shrink-0
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

            <span className="text-sm">
              {feature}
            </span>
          </div>
        ))}

      </div>

      {/* Button */}
      <Button
        className={`
          relative
          mt-10
          h-14
          w-full
          rounded-2xl
          font-semibold
          transition-all
          duration-300
          ${
            popular
              ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 shadow-lg shadow-indigo-500/20 hover:opacity-90"
              : "bg-slate-950 hover:bg-indigo-600"
          }
        `}
      >
        {button}
      </Button>

      {/* Bottom Accent */}
      <div
        className="
          absolute
          bottom-0
          left-8
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