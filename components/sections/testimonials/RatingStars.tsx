import { Star } from "lucide-react";

interface Props {
  rating: number;
}

export default function RatingStars({
  rating,
}: Props) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map(
        (_, index) => (
          <Star
            key={index}
            size={17}
            strokeWidth={0}
            fill={
              index < rating
                ? "#F59E0B"
                : "#E5E7EB"
            }
          />
        )
      )}
    </div>
  );
}
