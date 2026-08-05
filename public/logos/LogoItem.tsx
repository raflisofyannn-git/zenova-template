type Props = {
  name: string;
};

export default function LogoItem({ name }: Props) {
  return (
    <div
      className="
        flex
        h-20
        items-center
        justify-center
        rounded-2xl
        border
        bg-background
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <span
        className="
          text-xl
          font-semibold
          tracking-wide
          text-muted-foreground
        "
      >
        {name}
      </span>
    </div>
  );
}