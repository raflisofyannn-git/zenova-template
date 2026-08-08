import { Quote } from "lucide-react";

import RatingStars from "./RatingStars";
import Avatar from "./Avatar";

interface Props {
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
}

export default function TestimonialCard({
  name,
  position,
  company,
  avatar,
  rating,
  review,
}: Props) {
  return (
    <div
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[32px]
        border
        border-border/60
        bg-white/80
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-indigo-300
        hover:shadow-2xl
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-gradient-to-br
          from-indigo-500/20
          via-violet-500/20
          to-cyan-500/20
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Quote */}
      <div
        className="
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-indigo-100
          via-violet-100
          to-cyan-100
          text-indigo-600
        "
      >
        <Quote
          size={24}
          fill="currentColor"
        />
      </div>

      {/* Review */}
      <p
        className="
          relative
          mt-7
          flex-1
          text-lg
          leading-8
          text-muted-foreground
        "
      >
        "{review}"
      </p>

      {/* Rating */}
      <div className="relative mt-7">
        <RatingStars rating={rating} />
      </div>

      {/* Author */}
      <div
        className="
          relative
          mt-8
          flex
          items-center
          gap-4
          border-t
          border-border/50
          pt-7
        "
      >
        <Avatar
          src={avatar}
          alt={name}
        />

        <div className="min-w-0">
          <h4 className="truncate text-base font-bold">
            {name}
          </h4>

          <p className="mt-1 truncate text-sm text-muted-foreground">
            {position} · {company}
          </p>
        </div>
      </div>

      {/* Accent */}
      <div
        className="
          absolute
          bottom-0
          left-8
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
  );
}