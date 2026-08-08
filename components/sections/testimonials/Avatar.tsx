import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function Avatar({ src, alt }: Props) {
  return (
    <div
      className="
        relative
        h-14
        w-14
        shrink-0
        overflow-hidden
        rounded-full
        border
        border-border
        bg-slate-100
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="56px"
        className="object-cover"
      />
    </div>
  );
}