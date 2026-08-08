"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const scroll = () => {
      const total =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      setProgress(
        (window.scrollY / total) * 100
      );
    };

    scroll();

    window.addEventListener(
      "scroll",
      scroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        scroll
      );
  }, []);

  return (
    <div
      className="
        fixed
        left-0
        top-0
        z-[999]
        h-1
        bg-gradient-to-r
        from-indigo-600
        via-violet-600
        to-cyan-500
      "
      style={{
        width: `${progress}%`,
      }}
    />
  );
}
