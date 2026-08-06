import Link from "next/link";

import Logo from "./Logo";

import { menu } from "@/config/menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
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
          px-8
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
                text-muted-foreground
                transition-all
                duration-300
                hover:text-foreground
              "
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <Button
          className="
            hidden
            rounded-full
            px-6
            lg:inline-flex
          "
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}