"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { menu } from "@/config/menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-border/40
        bg-white/75
        backdrop-blur-2xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
                relative
                text-sm
                font-medium
                text-muted-foreground
                transition-colors
                duration-300
                hover:text-indigo-600
              "
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            className="
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-cyan-500
              px-6
              shadow-lg
              shadow-indigo-500/20
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:opacity-90
            "
          >
            Get Started

            <ArrowRight
              size={16}
              className="ml-2"
            />
          </Button>
        </div>

        <button
          type="button"
          aria-label={
            open
              ? "Close menu"
              : "Open menu"
          }
          onClick={() => setOpen(!open)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-border/60
            bg-white
            lg:hidden
          "
        >
          {open ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </div>

      {open && (
        <div
          className="
            border-t
            border-border/40
            bg-white/95
            backdrop-blur-2xl
            lg:hidden
          "
        >
          <div className="mx-auto max-w-7xl px-6 py-6">

            <nav className="flex flex-col">
              {menu.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    border-b
                    border-border/40
                    py-4
                    text-sm
                    font-medium
                    transition-colors
                    hover:text-indigo-600
                  "
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <Button
              className="
                mt-6
                h-12
                w-full
                rounded-xl
                bg-gradient-to-r
                from-indigo-600
                via-violet-600
                to-cyan-500
              "
            >
              Get Started

              <ArrowRight
                size={16}
                className="ml-2"
              />
            </Button>

          </div>
        </div>
      )}
    </header>
  );
}