import FadeLeft from "@/components/animation/FadeLeft";
import DashboardMockup from "@/components/dashboard/DashboardMockup";

export default function HeroImage() {
  return (
    <div
      className="
        relative
        flex
        min-h-[540px]
        w-full
        items-center
        justify-center
        lg:min-h-[560px]
      "
    >
      {/* Dashboard */}
      <FadeLeft>
        <div
          className="
            relative
            origin-center
            -translate-y-4
            scale-[0.64]
            sm:scale-[0.72]
            lg:scale-[0.74]
            xl:scale-[0.82]
          "
        >
          <DashboardMockup />
        </div>
      </FadeLeft>

      {/* Projects */}
      <div
        className="
          absolute
          right-0
          top-6
          z-30
          w-[118px]
          rounded-[24px]
          border
          border-border/60
          bg-white/95
          p-4
          shadow-xl
          backdrop-blur-xl
          sm:right-2
          lg:right-0
        "
      >
        <p className="text-xs text-muted-foreground">
          Projects
        </p>

        <h3 className="mt-1 text-2xl font-bold tracking-tight">
          250+
        </h3>

        <p className="mt-1 text-xs font-semibold text-indigo-600">
          Active
        </p>
      </div>

      {/* Conversion */}
      <div
        className="
          absolute
          right-1
          top-40
          z-30
          w-[118px]
          rounded-[24px]
          border
          border-border/60
          bg-white/95
          p-4
          shadow-xl
          backdrop-blur-xl
          sm:right-2
          lg:right-1
        "
      >
        <p className="text-xs text-muted-foreground">
          Conversion
        </p>

        <h3 className="mt-1 text-2xl font-bold tracking-tight">
          18.4%
        </h3>

        <p className="mt-1 text-xs font-semibold text-emerald-600">
          ▲ +3.8%
        </p>
      </div>

      {/* Revenue */}
      <div
        className="
          absolute
          bottom-20
          left-0
          z-30
          w-[120px]
          rounded-[24px]
          border
          border-border/60
          bg-white/95
          p-4
          shadow-xl
          backdrop-blur-xl
          sm:left-2
          lg:left-0
        "
      >
        <p className="text-xs text-muted-foreground">
          Revenue
        </p>

        <h3 className="mt-1 text-2xl font-bold tracking-tight">
          $120K
        </h3>

        <p className="mt-1 text-xs font-semibold text-emerald-600">
          ▲ +18.2%
        </p>
      </div>
    </div>
  );
}