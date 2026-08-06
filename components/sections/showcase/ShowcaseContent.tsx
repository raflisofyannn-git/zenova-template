import FadeUp from "@/components/animation/FadeUp";
import { Button } from "@/components/ui/button";

import SectionBadge from "@/components/common/SectionBadge";
import SectionTitle from "@/components/common/SectionTitle";
import SectionDescription from "@/components/common/SectionDescription";

import { showcase } from "@/data/showcase";

export default function ShowcaseContent() {
  return (
    <div className="max-w-xl">

      <FadeUp>
        <SectionBadge>
          {showcase.badge}
        </SectionBadge>
      </FadeUp>

      <FadeUp delay={0.1}>
        <SectionTitle>
          {showcase.title}
        </SectionTitle>
      </FadeUp>

      <FadeUp delay={0.2}>
        <SectionDescription>
          {showcase.description}
        </SectionDescription>
      </FadeUp>

      <FadeUp delay={0.3}>
        <Button
          size="lg"
          className="mt-10 rounded-full px-8"
        >
          {showcase.button}
        </Button>
      </FadeUp>

    </div>
  );
}