import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-background via-background to-primary/5" />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          -z-20
          bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-20
          -z-10
          h-[520px]
          w-[520px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[160px]
        "
      />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-24
          px-8
          lg:grid-cols-[48%_52%]
        "
      >
        <AboutContent />

        <AboutImage />
      </div>
    </section>
  );
}