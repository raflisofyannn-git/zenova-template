import FadeUp from "@/components/animation/FadeUp";
import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div>
      <FadeUp>
        <span className="rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          Welcome to Aureon
        </span>
      </FadeUp>

      <FadeUp delay={0.2}>
        <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
          Build Modern
          <br />
          Business Websites.
        </h1>
      </FadeUp>

      <FadeUp delay={0.4}>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Premium Next.js template crafted for agencies,
          startups and enterprise companies.
        </p>
      </FadeUp>

      <FadeUp delay={0.6}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button size="lg">
            Get Started
          </Button>

          <Button
            variant="outline"
            size="lg"
          >
            Live Demo
          </Button>
        </div>
      </FadeUp>
    </div>
  );
}