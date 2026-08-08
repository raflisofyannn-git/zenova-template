"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          bg-gradient-to-br
          from-indigo-500/12
          via-violet-500/12
          to-cyan-500/12
          blur-[140px]
          transition-all
          duration-500
        "
        style={{
          left: pos.x - 260,
          top: pos.y - 260,
        }}
      />
    </div>
  );
}
