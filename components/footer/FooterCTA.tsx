import { Button } from "@/components/ui/button";
import FadeUp from "@/components/animation/FadeUp";

export default function FooterCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />

      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/10
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-4xl px-8 text-center">

        <FadeUp>

          <h2 className="text-5xl font-black text-white">
            Ready to Build
            <br />
            Something Amazing?
          </h2>

        </FadeUp>

        <FadeUp delay={0.15}>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80">
            Build beautiful, modern websites faster using Aureon.
          </p>

        </FadeUp>

        <FadeUp delay={0.3}>

          <div className="mt-12 flex justify-center gap-4">

            <Button
              size="lg"
              className="rounded-full bg-white text-black hover:bg-white/90"
            >
              Get Started
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="rounded-full"
            >
              Live Demo
            </Button>

          </div>

        </FadeUp>

      </div>
    </section>
  );
}