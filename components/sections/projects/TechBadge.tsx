interface Props {
  name: string;
}

export default function TechBadge({ name }: Props) {
  return (
    <span
      className="
        rounded-full
        border
        border-border/60
        bg-background/90
        px-3
        py-1
        text-xs
        font-medium
        backdrop-blur
      "
    >
      {name}
    </span>
  );
}
