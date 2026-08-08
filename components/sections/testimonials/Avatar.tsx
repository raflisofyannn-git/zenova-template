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
    <div className="relative h-14 w-14 overflow-hidden rounded-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
}