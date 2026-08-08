import FadeUp from "@/components/animation/FadeUp";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <div className="mt-20 grid gap-8 lg:grid-cols-2">
      {projects.map((project, index) => (
        <FadeUp
          key={project.title}
          delay={index * 0.15}
        >
          <ProjectCard {...project} />
        </FadeUp>
      ))}
    </div>
  );
}