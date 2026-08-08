import { Quote } from "lucide-react";

import Avatar from "./Avatar";
import RatingStars from "./RatingStars";

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
    <article
      className="
        group
        flex
        h-full
        min-h-[390px]
        flex-col
        rounded-[30px]
        border
        border-border/60
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-indigo-200
        hover:shadow-2xl
        hover:shadow-indigo-500/10
        sm:p-9
      "
    >
      {/* Quote */}
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-indigo-50
          text-indigo-600
          transition-all
          duration-300
          group-hover:bg-indigo-600
          group-hover:text-white
        "
      >
        <Quote size={23} />
      </div>

      {/* Review */}
      <p
        className="
          mt-7
          flex-1
          text-base
          leading-7
          text-muted-foreground
        "
      >
        “{review}”
      </p>

      {/* Rating */}
      <div className="mt-7">
        <RatingStars rating={rating} />
      </div>

      {/* Divider */}
      <div className="my-7 h-px bg-border/60" />

      {/* User */}
      <div className="flex items-center gap-4">

        <div className="shrink-0">
          <Avatar
            src={avatar}
            alt={name}
          />
        </div>

        <div className="min-w-0">
          <h4 className="truncate text-base font-bold">
            {name}
          </h4>

          <p className="mt-1 truncate text-sm text-muted-foreground">
            {position} · {company}
          </p>
        </div>

      </div>
    </article>
  );
}