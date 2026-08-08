import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
    <article
      className="
        group
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-[32px]
        border
        border-border/60
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-indigo-300
        hover:shadow-2xl
        hover:shadow-indigo-500/10
      "
    >
      {/* IMAGE */}
      <div
        className="
          relative
          aspect-[16/10]
          w-full
          shrink-0
          overflow-hidden
          bg-slate-100
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1280px) 50vw,
            600px
          "
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/40
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        <div
          className="
            absolute
            right-5
            top-5
            flex
            h-11
            w-11
            translate-y-2
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-indigo-600
            opacity-0
            shadow-lg
            backdrop-blur
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={19} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-7">

        <p className="text-sm font-semibold text-indigo-600">
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight">
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

        <div className="mt-auto pt-7">
          <div
            className="
              h-1
              w-8
              rounded-full
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-cyan-500
              transition-all
              duration-500
              group-hover:w-20
            "
          />
        </div>

      </div>
    </article>
  );
}
