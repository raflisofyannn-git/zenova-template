import FadeUp from "@/components/animation/FadeUp";
import { testimonials } from "@/data/testimonials";

import TestimonialCard from "./TestimonialCard";

export default function TestimonialCarousel() {
  return (
    <div
      className="
        mt-16
        grid
        items-stretch
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {testimonials.map((item, index) => (
        <div
          key={item.id}
          className="h-full"
        >
          <FadeUp delay={index * 0.12}>
            <TestimonialCard {...item} />
          </FadeUp>
        </div>
      ))}
    </div>
  );
}