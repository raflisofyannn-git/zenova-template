import FadeUp from "@/components/animation/FadeUp";
import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <div
      className="
        mt-16
        grid
        grid-cols-1
        items-stretch
        gap-8
        md:grid-cols-2
        lg:gap-10
      "
    >
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="min-w-0"
        >
          <FadeUp delay={index * 0.1}>
            <ProjectCard {...project} />
          </FadeUp>
        </div>
      ))}
    </div>
  );
}
