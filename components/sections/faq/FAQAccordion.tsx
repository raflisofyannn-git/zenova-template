"use client";

import { useState } from "react";
import { faq } from "@/data/faq";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto mt-20 max-w-4xl space-y-6">

      {faq.map((item, index) => (

        <div
          key={item.question}
          className="
            overflow-hidden
            rounded-3xl
            border
            border-border/60
            bg-white
            shadow-sm
          "
        >
          <button
            onClick={() =>
              setOpen(open === index ? -1 : index)
            }
            className="
              flex
              w-full
              items-center
              justify-between
              p-8
              text-left
            "
          >
            <h3 className="text-xl font-semibold">
              {item.question}
            </h3>

            <ChevronDown
              className={`transition ${
                open === index ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ${
              open === index
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">

              <p
                className="
                  px-8
                  pb-8
                  leading-8
                  text-muted-foreground
                "
              >
                {item.answer}
              </p>

            </div>
          </div>

        </div>

      ))}

    </div>
  );
}