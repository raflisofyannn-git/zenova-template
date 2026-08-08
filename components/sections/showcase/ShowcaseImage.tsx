import DashboardMockup from "@/components/dashboard/DashboardMockup";

export default function ShowcaseImage() {
  return (
    <div
      className="
        relative
        flex
        min-h-[360px]
        items-center
        justify-center
        overflow-hidden
        rounded-[36px]
        border
        border-border/60
        bg-gradient-to-br
        from-indigo-50
        via-white
        to-cyan-50
        p-6
        shadow-2xl
        sm:p-10
        lg:min-h-[620px]
        lg:p-16
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/10
          blur-[150px]
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-50
          [background-image:linear-gradient(to_right,#4F46E508_1px,transparent_1px),linear-gradient(to_bottom,#4F46E508_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* Dashboard */}
      <div
        className="
          relative
          z-10
          origin-center
          scale-[0.52]
          sm:scale-[0.62]
          md:scale-[0.72]
          lg:scale-[0.9]
          xl:scale-100
        "
      >
        <DashboardMockup />
      </div>
    </div>
  );
}
