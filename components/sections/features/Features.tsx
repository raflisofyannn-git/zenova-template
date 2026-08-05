import FadeUp from "@/components/animation/FadeUp";
import FeatureCard from "./FeatureCard";
import { features } from "@/data/features";

export default function Features() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-8">
        <FadeUp>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Why Choose Aureon
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-center text-5xl font-bold leading-tight">
            Everything You Need to Build Premium Websites
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
            Carefully crafted components designed for agencies,
            startups, and modern businesses.
          </p>
        </FadeUp>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FadeUp key={feature.title} delay={index * 0.1}>
              <FeatureCard {...feature} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}