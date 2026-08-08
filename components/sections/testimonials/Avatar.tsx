import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function Avatar({
  src,
  alt,
}: Props) {
  return (
    <div
      className="
        relative
        h-14
        w-14
        shrink-0
        overflow-hidden
        rounded-full
        border-2
        border-white
        bg-indigo-50
        shadow-md
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