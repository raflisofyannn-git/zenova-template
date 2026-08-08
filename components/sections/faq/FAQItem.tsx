"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface Props {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        overflow-hidden
        rounded-[24px]
        border
        border-border/60
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:border-indigo-200
        hover:shadow-lg
        hover:shadow-indigo-500/5
      "
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-6
          px-6
          py-6
          text-left
          sm:px-8
        "
      >
        <span className="text-base font-semibold sm:text-lg">
          {question}
        </span>

        <span
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            transition-all
            duration-300
            ${
              open
                ? "rotate-45 bg-indigo-600 text-white"
                : "bg-indigo-50 text-indigo-600"
            }
          `}
        >
          <Plus size={18} />
        </span>
      </button>

      <div
        className={`
          grid
          transition-all
          duration-300
          ${
            open
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border/60 px-6 pb-6 pt-5 sm:px-8">
            <p className="leading-7 text-muted-foreground">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
