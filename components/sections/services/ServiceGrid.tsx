import FadeUp from "@/components/animation/FadeUp";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

export default function ServiceGrid() {
  return (
    <div
      className="
        mt-20
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {services.map((service, index) => (
        <FadeUp
          key={service.title}
          delay={index * 0.1}
        >
          <ServiceCard {...service} />
        </FadeUp>
      ))}
    </div>
  );
}