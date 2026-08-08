import {
  Check,
  ArrowRight,
} from "lucide-react";

interface Props {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
}: Props) {
  return (
    <article
      className={`
        relative
        flex
        h-full
        min-h-[520px]
        flex-col
        overflow-hidden
        rounded-[32px]
        border
        p-8
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        ${
          popular
            ? "border-indigo-400 bg-slate-950 text-white shadow-indigo-500/20"
            : "border-border/60 bg-white"
        }
      `}
    >
      {popular && (
        <div
          className="
            absolute
            right-6
            top-6
            rounded-full
            bg-gradient-to-r
            from-indigo-500
            via-violet-500
            to-cyan-500
            px-3
            py-1.5
            text-[11px]
            font-bold
            uppercase
            tracking-wider
            text-white
          "
        >
          Most Popular
        </div>
      )}

      <div>
        <p
          className={
            popular
              ? "text-sm font-semibold text-indigo-300"
              : "text-sm font-semibold text-indigo-600"
          }
        >
          {name}
        </p>

        <div className="mt-6 flex items-end gap-2">
          <span className="text-5xl font-black tracking-tight">
            {price}
          </span>

          <span
            className={
              popular
                ? "mb-1 text-sm text-slate-400"
                : "mb-1 text-sm text-muted-foreground"
            }
          >
            / project
          </span>
        </div>

        <p
          className={`
            mt-5
            leading-7
            ${
              popular
                ? "text-slate-400"
                : "text-muted-foreground"
            }
          `}
        >
          {description}
        </p>
      </div>

      <div
        className={`
          my-8
          h-px
          ${
            popular
              ? "bg-white/10"
              : "bg-border/60"
          }
        `}
      />

      <div className="flex-1 space-y-4">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-3"
          >
            <div
              className={`
                mt-0.5
                flex
                h-5
                w-5
                shrink-0
                items-center
                justify-center
                rounded-full
                ${
                  popular
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "bg-indigo-50 text-indigo-600"
                }
              `}
            >
              <Check size={12} />
            </div>

            <span
              className={`
                text-sm
                ${
                  popular
                    ? "text-slate-300"
                    : "text-muted-foreground"
                }
              `}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`
          mt-8
          flex
          h-13
          w-full
          items-center
          justify-center
          rounded-2xl
          font-semibold
          transition-all
          duration-300
          ${
            popular
              ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/20 hover:opacity-90"
              : "border border-border/60 bg-slate-50 text-foreground hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
          }
        `}
      >
        Get Started

        <ArrowRight
          size={17}
          className="ml-2"
        />
      </button>

      {popular && (
        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -right-24
            h-64
            w-64
            rounded-full
            bg-indigo-500/20
            blur-[100px]
          "
        />
      )}
    </article>
  );
}
