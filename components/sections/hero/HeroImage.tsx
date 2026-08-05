import FadeLeft from "@/components/animation/FadeLeft";
import DashboardMockup from "@/components/dashboard/DashboardMockup";

export default function HeroImage() {
  return (
    <div className="relative hidden items-center justify-center lg:flex lg:-translate-y-6">
      {/* Dashboard */}
      <FadeLeft>
        <div className="scale-90 origin-center">
        <DashboardMockup />
        </div>
        
      </FadeLeft>

      {/* Revenue Card */}
      <div
        className="
        absolute
        -left-10
        bottom-5
        z-20
        rounded-3xl
        border
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
          -right-21
          top-6
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