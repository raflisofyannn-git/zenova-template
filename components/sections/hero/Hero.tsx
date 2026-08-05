import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Glow Effect */}
      <div className="absolute left-1/2 top-40 -z-20 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-primary/30 blur-[180px]" />

      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      <div
        className="
          mx-auto
          flex
          h-[calc(100vh-80px)]
          max-w-7xl
          items-center
          justify-between
          gap-28 xl:gap-32
          px-8 xl:px-10
          py-10
          lg:flex-row
          flex-col
        "
      >
        {/* Left */}
        <div className="w-full lg:max-w-[520px]">
          <HeroContent />
        </div>

        {/* Right */}
        <div className="flex w-full justify-end">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}