import Image from "next/image";
import FadeUp from "@/components/animation/FadeUp";
import SectionContainer from "@/components/common/SectionContainer";

const logos = [
  {
    name: "NOVA",
    src: "/logos/google.svg",
  },
  {
    name: "VERTEX",
    src: "/logos/microsoft.svg",
  },
  {
    name: "ORBIT",
    src: "/logos/spotify.svg",
  },
  {
    name: "PULSE",
    src: "/logos/slack.svg",
  },
  {
    name: "NEXA",
    src: "/logos/stripe.svg",
  },
  {
    name: "APEX",
    src: "/logos/airbnb.svg",
  },
];

export default function LogoCloud() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-y
        border-border/50
        bg-white
        py-20
      "
    >
      {/* Background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-indigo-50/40
          via-transparent
          to-cyan-50/40
        "
      />

      <SectionContainer>
        <FadeUp>
          <div className="text-center">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-muted-foreground
              "
            >
              Trusted by innovative companies
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div
            className="
              mt-12
              grid
              grid-cols-2
              items-center
              gap-8
              sm:grid-cols-3
              lg:grid-cols-6
              lg:gap-10
            "
          >
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="
                  flex
                  h-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-transparent
                  bg-white
                  px-6
                  transition-all
                  duration-300
                  hover:border-indigo-100
                  hover:bg-indigo-50/40
                "
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={110}
                  height={36}
                  className="
                    h-8
                    w-auto
                    object-contain
                    opacity-50
                    grayscale
                    transition-all
                    duration-300
                    hover:opacity-100
                    hover:grayscale-0
                  "
                />
              </div>
            ))}
          </div>
        </FadeUp>
      </SectionContainer>
    </section>
  );
}
