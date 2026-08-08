import Image from "next/image";
import FadeUp from "@/components/animation/FadeUp";
import SectionContainer from "@/components/common/SectionContainer";

const logos = [
  ["Google", "/logos/google.svg"],
  ["Microsoft", "/logos/microsoft.svg"],
  ["Spotify", "/logos/spotify.svg"],
  ["Stripe", "/logos/stripe.svg"],
  ["Slack", "/logos/slack.svg"],
  ["Airbnb", "/logos/airbnb.svg"],
];

export default function LogoCloud() {
  const items = [...logos, ...logos];

  return (
    <section className="overflow-hidden border-y border-border/50 bg-white/70 py-16 backdrop-blur-xl">
      <SectionContainer>
        <FadeUp>
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by innovative companies
          </p>
        </FadeUp>

        <div className="relative mt-10 overflow-hidden">
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-24
              bg-gradient-to-r
              from-white
              to-transparent
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-24
              bg-gradient-to-l
              from-white
              to-transparent
            "
          />

          <div className="zenova-marquee flex w-max items-center gap-12 md:gap-20">
            {items.map(([name, src], index) => (
              <div
                key={`${name}-${index}`}
                className="
                  group
                  flex
                  h-12
                  w-32
                  shrink-0
                  items-center
                  justify-center
                  opacity-50
                  grayscale
                  transition-all
                  duration-300
                  hover:opacity-100
                  hover:grayscale-0
                "
              >
                <Image
                  src={src}
                  alt={name}
                  width={120}
                  height={40}
                  className="
                    max-h-8
                    w-auto
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}