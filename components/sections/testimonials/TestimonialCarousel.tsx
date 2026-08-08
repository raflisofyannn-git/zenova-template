import FadeUp from "@/components/animation/FadeUp";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialCarousel() {
  return (
    <div className="mt-20 grid gap-8 lg:grid-cols-3">
      {testimonials.map((item, index) => (
        <FadeUp
          key={item.id}
          delay={index * 0.15}
        >
          <TestimonialCard {...item} />
        </FadeUp>
      ))}
    </div>
  );
}