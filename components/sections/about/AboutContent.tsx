import FadeUp from "@/components/animation/FadeUp";
import FeatureList from "./FeatureList";
import { aboutFeatures } from "@/data/about";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutContent() {
  return (
    <div className="max-w-xl">

      {/* Badge */}
      <FadeUp>
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-primary/20
            bg-primary/10
            px-5
            py-2
            text-sm
            font-semibold
            text-primary
          "
        >
          About ZENOVA
        </span>
      </FadeUp>

      {/* Title */}
      <FadeUp delay={0.1}>
        <h2 className="mt-8 text-5xl font-black leading-[1.05] lg:text-6xl">
          Building Digital
          <br />
          Experiences That
          <br />
          Inspire Growth.
        </h2>
      </FadeUp>

      {/* Description */}
      <FadeUp delay={0.2}>
        <p className="mt-8 text-lg leading-8 text-muted-foreground">
          ZENOVA helps businesses build premium websites,
          scalable products, and unforgettable digital
          experiences powered by modern technologies.
        </p>
      </FadeUp>

      {/* Checklist */}
      <FadeUp delay={0.3}>
        <FeatureList items={aboutFeatures} />
      </FadeUp>

      {/* Buttons */}
      <FadeUp delay={0.45}>
        <div className="mt-12 flex flex-wrap gap-4">

          <Button
            size="lg"
            className="rounded-full px-8"
          >
            Learn More

            <ArrowRight
              size={18}
              className="ml-2"
            />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8"
          >
            Contact Us
          </Button>

        </div>
      </FadeUp>

    </div>
  );
}
