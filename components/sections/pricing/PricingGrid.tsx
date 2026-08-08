import { pricing } from "@/data/pricing";
import PricingCard from "./PricingCard";

export default function PricingGrid() {
  return (
    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      {pricing.map((plan) => (
        <PricingCard
          key={plan.name}
          {...plan}
        />
      ))}

    </div>
  );
}