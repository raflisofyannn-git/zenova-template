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
        rounded-[32px]
        border
        border-border/60
        bg-background
        p-10
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <Quote
        size={42}
        strokeWidth={1.5}
        className="text-primary"
      />

      <p className="mt-8 text-lg leading-8 text-muted-foreground">
        {review}
      </p>

      <div className="mt-8">
        <RatingStars rating={rating} />
      </div>

      <div className="mt-8 flex items-center gap-5">
        <div className="shrink-0">
          <Avatar
            src={avatar}
            alt={name}
          />
        </div>

        <div className="flex-1">
          <h4 className="text-lg font-semibold">
            {name}
          </h4>

          <p className="mt-1 text-sm text-muted-foreground">
            {position}
          </p>

          <p className="text-sm text-primary font-medium">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
}