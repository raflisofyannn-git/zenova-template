import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

export default function Heading({
  children,
}: HeadingProps) {
  return (
    <h2
      className="
      text-4xl
      md:text-5xl
      font-bold
      tracking-tight
    "
    >
      {children}
    </h2>
  );
}