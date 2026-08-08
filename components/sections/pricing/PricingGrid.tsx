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
      {pricing.map((plan, index) => (
        <div
          key={plan.name}
          className="h-full"
        >
          <FadeUp delay={index * 0.12}>
            <PricingCard {...plan} />
          </FadeUp>
        </div>
      ))}
    </div>
  );
}