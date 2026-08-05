import Image from "next/image";

type LogoItemProps = {
  name: string;
  logo: string;
};

export default function LogoItem({
  name,
  logo,
}: LogoItemProps) {
  return (
    <div
      className="
        group
        flex
        h-24
        items-center
        justify-center
        rounded-3xl
        border
        border-border/60
        bg-card
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      <Image
        src={logo}
        alt={name}
        width={120}
        height={40}
        className="
          h-8
          w-auto
          opacity-60
          grayscale
          transition-all
          duration-500
          group-hover:opacity-100
          group-hover:grayscale-0
        "
      />
    </div>
  );
}