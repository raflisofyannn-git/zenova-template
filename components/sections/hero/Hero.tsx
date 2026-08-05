import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Glow */}

      <div className="absolute left-1/2 top-32 -z-10 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <HeroContent />

        <HeroImage />

      </div>

    </section>
  );
}