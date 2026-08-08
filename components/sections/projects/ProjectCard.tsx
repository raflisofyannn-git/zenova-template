import Image from "next/image";
import TechBadge from "./TechBadge";

interface Props {
  title: string;
  category: string;
  image: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  category,
  image,
  technologies,
}: Props) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-border/60
        bg-background
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div className="relative aspect-[16/10] overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

      </div>

      <div className="p-7">

        <p className="text-sm text-primary">
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {title}
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">

          {technologies.map((tech) => (
            <TechBadge
              key={tech}
              name={tech}
            />
          ))}

        </div>

      </div>
    </div>
  );
}