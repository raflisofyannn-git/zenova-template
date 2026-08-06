import FadeLeft from "@/components/animation/FadeLeft";
import DashboardMockup from "@/components/dashboard/DashboardMockup";

export default function HeroImage() {
  return (
    <div
      className="
        relative
        hidden
        min-h-[620px]
        items-center
        justify-center
        lg:flex
      "
    >
      {/* Dashboard */}
      <FadeLeft>
        <div className="origin-center scale-[0.88] xl:scale-95">
          <DashboardMockup />
        </div>
      </FadeLeft>

      {/* Revenue Card */}
      <div
        className="
          absolute
          left-0
          bottom-14
          z-20
          rounded-3xl
          border
          border-border/60
          bg-background
          p-6
          shadow-2xl
        "
      >
        <p className="text-sm text-muted-foreground">
          Revenue
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          $120K
        </h3>

        <p className="mt-2 text-sm font-semibold text-emerald-600">
          ▲ +18.2%
        </p>
      </div>

      {/* Projects Card */}
      <div
        className="
          absolute
          right-0
          top-12
          z-20
          rounded-3xl
          border
          border-border/60
          bg-background/90
          p-6
          shadow-2xl
          backdrop-blur-xl
        "
      >
        <p className="text-sm text-muted-foreground">
          Projects
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          250+
        </h3>

        <p className="mt-2 text-sm font-semibold text-blue-600">
          Active
        </p>
      </div>
    </div>
  );
}