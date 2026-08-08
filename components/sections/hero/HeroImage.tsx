import FadeLeft from "@/components/animation/FadeLeft";
import DashboardMockup from "@/components/dashboard/DashboardMockup";

export default function HeroImage() {
  return (
    <div
      className="
        relative
        flex
        min-h-[560px]
        w-full
        items-center
        justify-center
        lg:min-h-[620px]
        lg:justify-end
      "
    >
      {/* Dashboard */}
      <FadeLeft>
        <div
          className="
            relative
            z-10
            origin-center
            scale-[0.72]
            sm:scale-[0.82]
            md:scale-[0.88]
            lg:scale-[0.88]
            xl:scale-95
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
          top-8
          z-30
          w-[125px]
          rounded-3xl
          border
          border-border/60
          bg-background/95
          p-5
          shadow-2xl
          backdrop-blur-xl
          sm:right-2
          sm:w-[135px]
          lg:right-0
          lg:top-10
        "
      >
        <p className="text-xs text-muted-foreground">
          Projects
        </p>

        <h3 className="mt-2 text-2xl font-black">
          250+
        </h3>

        <p className="mt-2 text-xs font-semibold text-primary">
          Active
        </p>
      </div>

      {/* Conversion */}
      <div
        className="
          absolute
          right-2
          top-40
          z-30
          w-[130px]
          rounded-3xl
          border
          border-border/60
          bg-background/95
          p-5
          shadow-2xl
          backdrop-blur-xl
          sm:right-4
          lg:right-0
          lg:top-44
        "
      >
        <p className="text-xs text-muted-foreground">
          Conversion
        </p>

        <h3 className="mt-2 text-2xl font-black">
          18.4%
        </h3>

        <p className="mt-2 text-xs font-semibold text-emerald-600">
          â–² +3.8%
        </p>
      </div>

      {/* Revenue */}
      <div
        className="
          absolute
          bottom-2
          left-2
          z-30
          w-[130px]
          rounded-3xl
          border
          border-border/60
          bg-background/95
          p-5
          shadow-2xl
          backdrop-blur-xl
          sm:left-4
          lg:bottom-0
          lg:left-0
        "
      >
        <p className="text-xs text-muted-foreground">
          Revenue
        </p>

        <h3 className="mt-2 text-2xl font-black">
          $120K
        </h3>

        <p className="mt-2 text-xs font-semibold text-emerald-600">
          â–² +18.2%
        </p>
      </div>
    </div>
  );
}
