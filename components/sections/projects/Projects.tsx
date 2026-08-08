import SectionContainer from "@/components/common/SectionContainer";
import SectionBadge from "@/components/common/SectionBadge";
import SectionTitle from "@/components/common/SectionTitle";
import SectionDescription from "@/components/common/SectionDescription";

import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  return (
    <section className="relative py-32">

      <SectionContainer>

        <div className="mx-auto max-w-3xl text-center">

          <SectionBadge>
            Featured Work
          </SectionBadge>

          <SectionTitle>
            Selected Projects
          </SectionTitle>

          <SectionDescription>
            Explore some of our latest digital products,
            websites and premium user experiences.
          </SectionDescription>

        </div>

        <ProjectGrid />

      </SectionContainer>

    </section>
  );
}