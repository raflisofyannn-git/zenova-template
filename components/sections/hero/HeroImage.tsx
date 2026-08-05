import FadeLeft from "@/components/animation/FadeLeft";
import DashboardMockup from "@/components/dashboard/DashboardMockup";

export default function HeroImage() {
  return (
    <div className="relative hidden h-full w-full items-center justify-end lg:flex">
      {/* Dashboard */}
      <FadeLeft>
        <div className="relative scale-95 xl:scale-100">
          <DashboardMockup />
        </div>
      </FadeLeft>

      {/* Revenue Card */}
      <div
        className="
          absolute
          left-0
          bottom-28
          z-20
          rounded-3xl
          border
          border-white/40
          bg-white/80
          backdrop-blur-xl
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
          right-[-28px]
          top-16
          z-20
          rounded-3xl
          border
          border-white/40
          bg-white/80
          backdrop-blur-xl
          p-6
          shadow-2xl
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