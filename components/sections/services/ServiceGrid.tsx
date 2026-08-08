import FadeUp from "@/components/animation/FadeUp";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServiceGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        items-stretch
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
        lg:gap-8
      "
    >
      {services.map((service, index) => (
        <FadeUp
          key={service.title}
          delay={index * 0.1}
        >
          <ServiceCard
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        </FadeUp>
      ))}
    </div>
  );
}
