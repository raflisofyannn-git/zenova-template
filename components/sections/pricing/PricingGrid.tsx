import FadeUp from "@/components/animation/FadeUp";
import { pricing } from "@/data/pricing";
import PricingCard from "./PricingCard";

export default function PricingGrid() {
  return (
    <div
      className="
        mt-16
        grid
        items-stretch
        gap-6
        lg:grid-cols-3
        lg:gap-8
      "
    >
      {pricing.map((plan) => (
        <FadeUp
          key={plan.name}
        >
          <div className="h-full">
            <PricingCard
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
            />
          </div>
        </FadeUp>
      ))}
    </div>
  );
}
