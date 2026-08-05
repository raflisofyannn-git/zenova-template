type LogoItemProps = {
  name: string;
};

export default function LogoItem({ name }: LogoItemProps) {
  return (
    <div
      className="
        flex
        h-24
        items-center
        justify-center
        rounded-2xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      <span
        className="
          text-lg
          font-semibold
          tracking-wide
          text-slate-500
        "
      >
        {name}
      </span>
    </div>
  );
}