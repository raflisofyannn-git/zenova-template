import SectionContainer from "@/components/common/SectionContainer";

import ShowcaseContent from "./ShowcaseContent";
import ShowcaseImage from "./ShowcaseImage";

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-primary/5 via-background to-background" />

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-24
          -z-10
          h-[550px]
          w-[550px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[180px]
        "
      />

      <SectionContainer>
        <div className="grid items-center gap-24 lg:grid-cols-2">
          <ShowcaseContent />

          <ShowcaseImage />
        </div>
      </SectionContainer>
    </section>
  );
}