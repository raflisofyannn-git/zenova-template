"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
        bg-background/80
        backdrop-blur-xl
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
        "
      >
        <Logo />

        <nav className="hidden items-center gap-10 lg:flex">

          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
                text-sm
                font-medium
                transition
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
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-cyan-500
            "
          >
            Get Started
          </Button>

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

      </div>

      {open && (

        <div
          className="
            border-t
            bg-background
            lg:hidden
          "
        >
          <div className="flex flex-col p-6">

            {menu.map((item) => (

              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-4"
              >
                {item.title}
              </Link>

            ))}

            <Button
              className="
                mt-6
                bg-gradient-to-r
                from-indigo-600
                via-violet-600
                to-cyan-500
              "
            >
              Get Started
            </Button>

          </div>

        </div>

      )}
    </header>
  );
}