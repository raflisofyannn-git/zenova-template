import FadeUp from "@/components/animation/FadeUp";

import { testimonials } from "@/data/testimonials";

import TestimonialCard from "./TestimonialCard";

export default function TestimonialCarousel() {
  return (
    <div
      className="
        grid
        grid-cols-1
        items-stretch
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
        xl:gap-8
      "
    >
      {testimonials.map((item, index) => (
        <FadeUp
          key={item.id}
          delay={index * 0.1}
        >
          <TestimonialCard {...item} />
        </FadeUp>
      ))}
    </div>
  );
}