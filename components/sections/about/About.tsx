import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-32 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-24 px-8 lg:grid-cols-2">

        <AboutContent />

        <AboutImage />

      </div>
    </section>
  );
}