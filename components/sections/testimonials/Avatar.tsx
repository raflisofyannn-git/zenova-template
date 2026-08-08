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
        bg-gradient-to-br
        from-indigo-500
        via-violet-500
        to-cyan-500
        p-[2px]
      "
    >
      <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="56px"
          className="object-cover"
        />
      </div>
    </div>
  );
}