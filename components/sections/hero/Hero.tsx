import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-white via-indigo-50/40 to-cyan-50/60" />

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-32
          -z-20
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/20
          blur-[180px]
        "
      />

      {/* Secondary Glow */}
      <div
        className="
          absolute
          right-0
          top-0
          -z-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/15
          blur-[140px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[linear-gradient(to_right,#4F46E508_1px,transparent_1px),linear-gradient(to_bottom,#4F46E508_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* Blur Circle */}
      <div
        className="
          absolute
          bottom-10
          left-10
          -z-20
          h-72
          w-72
          rounded-full
          bg-violet-400/10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          max-w-7xl
          flex-col-reverse
          items-center
          justify-center
          gap-20
          px-6
          py-20
          lg:flex-row
          lg:justify-between
          lg:gap-28
        "
      >

        {/* Left */}

        <div className="w-full lg:max-w-[560px]">
          <HeroContent />
        </div>

        {/* Right */}

        <div className="flex w-full justify-center lg:justify-end">
          <HeroImage />
        </div>

      </div>

    </section>
  );
}