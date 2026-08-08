import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-background
      "
    >
      {/* Background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          bg-gradient-to-br
          from-background
          via-background
          to-indigo-50/60
        "
      />

      {/* Main Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-32
          -z-20
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/15
          blur-[160px]
        "
      />

      {/* Cyan Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          -z-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-60
          [background-image:linear-gradient(to_right,#4F46E508_1px,transparent_1px),linear-gradient(to_bottom,#4F46E508_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div
        className="
          mx-auto
          flex
          min-h-[680px]
          max-w-7xl
          flex-col
          items-center
          justify-center
          gap-12
          px-6
          py-20
          sm:px-8
          lg:min-h-[700px]
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-8
          lg:px-10
        "
      >
        {/* Content */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-2xl
            lg:max-w-[540px]
          "
        >
          <HeroContent />
        </div>

        {/* Dashboard */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            max-w-[650px]
            justify-center
            lg:max-w-[620px]
            lg:justify-end
          "
        >
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
