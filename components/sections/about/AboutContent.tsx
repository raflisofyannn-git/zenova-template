import FadeUp from "@/components/animation/FadeUp";
import FeatureList from "./FeatureList";
import { aboutFeatures } from "@/data/about";
import { Button } from "@/components/ui/button";

export default function AboutContent() {
  return (
    <div>

      <FadeUp>
        <span className="rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          About Aureon
        </span>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h2 className="mt-8 text-5xl font-black leading-tight">
          Building Digital
          <br />
          Experiences That
          <br />
          Inspire Growth.
        </h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Aureon helps businesses build premium websites,
          scalable products and unforgettable digital
          experiences with modern technologies.
        </p>
      </FadeUp>

      <FadeUp delay={0.3}>
        <FeatureList items={aboutFeatures} />
      </FadeUp>

      <FadeUp delay={0.4}>
        <Button
          size="lg"
          className="mt-10"
        >
          Learn More
        </Button>
      </FadeUp>

    </div>
  );
}