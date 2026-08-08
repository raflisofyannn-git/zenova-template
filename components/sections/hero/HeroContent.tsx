import FadeUp from "@/components/animation/FadeUp";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroContent() {
  return (
    <div>
      <FadeUp>
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-indigo-200
            bg-indigo-50
            px-5
            py-2
            text-sm
            font-semibold
            text-indigo-600
          "
        >
          Welcome to Zenova
        </span>
      </FadeUp>

      <FadeUp delay={0.15}>
        <h1
          className="
            mt-7
            text-5xl
            font-black
            leading-[1.05]
            tracking-[-0.04em]
            sm:text-6xl
            lg:text-7xl
          "
        >
          Build

          <br />

          <span
            className="
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-cyan-500
              bg-clip-text
              text-transparent
            "
          >
            Digital Products
          </span>

          <br />

          That Shape

          <br />

          The Future
        </h1>
      </FadeUp>

      <FadeUp delay={0.3}>
        <p
          className="
            mt-7
            max-w-xl
            text-base
            leading-7
            text-muted-foreground
            sm:text-lg
            sm:leading-8
          "
        >
          Premium Next.js template crafted for
          agencies, startups and enterprise
          companies.
        </p>
      </FadeUp>

      <FadeUp delay={0.45}>
        <div className="mt-9 flex flex-wrap gap-4">

          <Button
            size="lg"
            className="
              h-13
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-cyan-500
              px-7
              font-semibold
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
              size={18}
              className="ml-2"
            />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="
              h-13
              rounded-2xl
              border-border/70
              bg-white/70
              px-7
              font-semibold
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-indigo-300
              hover:text-indigo-600
            "
          >
            <Play
              size={16}
              className="mr-2 fill-current"
            />

            Live Demo
          </Button>

        </div>
      </FadeUp>

      <FadeUp delay={0.6}>
        <div
          className="
            mt-10
            flex
            flex-wrap
            items-center
            gap-x-6
            gap-y-3
            text-sm
            text-muted-foreground
          "
        >
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Production Ready
          </span>

          <span>Next.js</span>

          <span>TypeScript</span>

          <span>Tailwind CSS</span>
        </div>
      </FadeUp>
    </div>
  );
}
