"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-border/60
        bg-background/85
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[78px]
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <span
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-indigo-600
              via-violet-600
              to-cyan-500
              text-lg
              font-black
              text-white
              shadow-lg
              shadow-indigo-500/20
              transition-transform
              duration-300
              group-hover:scale-105
            "
          >
            Z
          </span>

          <span className="hidden sm:block">
            <span className="block text-xl font-bold tracking-tight">
              Zenova
            </span>

            <span className="block text-xs text-muted-foreground">
              Premium Next.js Template
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                text-sm
                font-medium
                text-muted-foreground
                transition-colors
                duration-200
                hover:text-primary
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="
            hidden
            items-center
            gap-2
            rounded-full
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
            px-6
            py-3
            text-sm
            font-bold
            text-white
            shadow-lg
            shadow-indigo-500/20
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-xl
            lg:inline-flex
          "
        >
          Get Started
          <ArrowRight size={16} />
        </Link>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-border/60
            bg-background
            text-foreground
            transition-colors
            hover:bg-muted
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

      {/* Mobile Menu */}
      <div
        className={`
          overflow-hidden
          border-t
          border-border/60
          bg-background/95
          backdrop-blur-xl
          transition-all
          duration-300
          lg:hidden
          ${
            open
              ? "max-h-[420px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="
                  border-b
                  border-border/40
                  py-4
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-colors
                  hover:text-primary
                "
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={closeMenu}
              className="
                mt-5
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                via-violet-600
                to-cyan-500
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-indigo-500/20
              "
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
