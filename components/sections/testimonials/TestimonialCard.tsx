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
        rounded-[32px]
        border
        border-border/60
        bg-background
        p-10
        shadow-xl
      "
    >
      <Quote
        size={36}
        className="text-primary"
      />

      <p className="mt-8 text-lg leading-8 text-muted-foreground">
        {review}
      </p>

      <div className="mt-8">
        <RatingStars rating={rating} />
      </div>

      <div className="mt-8 flex items-center gap-4">

        <Avatar
          src={avatar}
          alt={name}
        />

        <div>

          <h4 className="font-semibold">
            {name}
          </h4>

          <p className="text-sm text-muted-foreground">
            {position} · {company}
          </p>

        </div>

      </div>
    </div>
  );
}