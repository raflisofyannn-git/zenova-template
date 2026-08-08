import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GradientBorder({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-[32px]
        bg-gradient-to-br
        from-indigo-500
        via-violet-500
        to-cyan-500
        p-[1px]
        ${className}
      `}
    >
      <div className="rounded-[31px] bg-background">
        {children}
      </div>
    </div>
  );
}
