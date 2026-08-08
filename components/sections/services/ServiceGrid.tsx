import FadeUp from "@/components/animation/FadeUp";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServiceGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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