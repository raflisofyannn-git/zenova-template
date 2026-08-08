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
            text-indigo-700
          "
        >
          ✨ Next Generation Business Template
        </span>

      </FadeUp>

      <FadeUp delay={0.2}>

        <h1
          className="
            mt-8
            text-5xl
            font-black
            leading-[1.05]
            tracking-tight
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

          The Future.
        </h1>

      </FadeUp>

      <FadeUp delay={0.4}>

        <p
          className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-muted-foreground
          "
        >
          Zenova is a premium Next.js template designed for
          startups, SaaS companies, agencies and modern
          businesses that want to build beautiful digital
          experiences with confidence.
        </p>

      </FadeUp>

      <FadeUp delay={0.6}>

        <div className="mt-10 flex flex-wrap items-center gap-4">

          <Button
            size="lg"
            className="
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-cyan-500
              px-8
              text-base
              shadow-xl
              shadow-indigo-500/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-indigo-500/40
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
              h-14
              rounded-2xl
              px-8
            "
          >
            <Play
              size={16}
              className="mr-2"
            />

            Live Demo

          </Button>

        </div>

      </FadeUp>

      <FadeUp delay={0.8}>

        <div className="mt-14 flex flex-wrap items-center gap-10">

          <div>
            <h3 className="text-3xl font-black text-indigo-600">
              1.2K+
            </h3>

            <p className="text-sm text-muted-foreground">
              Happy Clients
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black text-violet-600">
              250+
            </h3>

            <p className="text-sm text-muted-foreground">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black text-cyan-600">
              99%
            </h3>

            <p className="text-sm text-muted-foreground">
              Satisfaction
            </p>
          </div>

        </div>

      </FadeUp>

    </div>
  );
}