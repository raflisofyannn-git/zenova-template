import FadeUp from "@/components/animation/FadeUp";
import { Button } from "@/components/ui/button";
import { showcase } from "@/data/showcase";

export default function ShowcaseContent() {
  return (
    <div className="max-w-xl">
      <FadeUp>
        <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          {showcase.badge}
        </span>
      </FadeUp>

      <FadeUp delay={0.2}>
        <h2 className="mt-8 text-5xl font-bold leading-tight">
          {showcase.title}
        </h2>
      </FadeUp>

      <FadeUp delay={0.4}>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {showcase.description}
        </p>
      </FadeUp>

      <FadeUp delay={0.6}>
        <Button size="lg" className="mt-10">
          {showcase.button}
        </Button>
      </FadeUp>
    </div>
  );
}