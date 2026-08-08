"use client";

import {
  useRef,
  type ReactNode,
  type MouseEvent,
} from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function SpotlightCard({
  children,
  className = "",
}: Props) {
  const ref =
    useRef<HTMLDivElement>(null);

  const handleMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    const element = ref.current;

    if (!element) return;

    const rect =
      element.getBoundingClientRect();

    element.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`
    );

    element.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`
        group
        relative
        overflow-hidden
        ${className}
      `}
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(99,102,241,0.12), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
