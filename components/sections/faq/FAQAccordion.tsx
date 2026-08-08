"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faq } from "@/data/faq";

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-16 max-w-4xl space-y-4">
      {faq.map((item, index) => {
        const isOpen = open === index;

        return (
          <div
            key={item.question}
            className={`
              group
              overflow-hidden
              rounded-[28px]
              border
              bg-white/80
              backdrop-blur-xl
              transition-all
              duration-300
              ${
                isOpen
                  ? "border-indigo-300 shadow-lg shadow-indigo-500/10"
                  : "border-border/60 hover:border-indigo-200"
              }
            `}
          >
            <button
              type="button"
              onClick={() =>
                setOpen(isOpen ? null : index)
              }
              aria-expanded={isOpen}
              className="
                flex
                w-full
                items-center
                justify-between
                gap-6
                p-6
                text-left
                sm:p-8
              "
            >
              <span
                className={`
                  text-base
                  font-semibold
                  transition-colors
                  duration-300
                  sm:text-lg
                  ${
                    isOpen
                      ? "text-indigo-600"
                      : "text-foreground"
                  }
                `}
              >
                {item.question}
              </span>

              <span
                className={`
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "rotate-180 border-indigo-200 bg-indigo-100 text-indigo-600"
                      : "border-border/60 bg-white text-muted-foreground"
                  }
                `}
              >
                <ChevronDown size={19} />
              </span>
            </button>

            <div
              className={`
                grid
                transition-all
                duration-300
                ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }
              `}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-7 sm:px-8">
                  <div className="h-px bg-border/50" />

                  <p
                    className="
                      pt-6
                      leading-7
                      text-muted-foreground
                    "
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
