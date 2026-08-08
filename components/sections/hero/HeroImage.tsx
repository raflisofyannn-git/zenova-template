import FadeLeft from "@/components/animation/FadeLeft";
import DashboardMockup from "@/components/dashboard/DashboardMockup";

export default function HeroImage() {
  return (
    <div
      className="
        relative
        flex
        w-full
        items-center
        justify-center
        py-10
        lg:justify-end
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          bg-gradient-to-br
          from-indigo-500/20
          via-violet-500/20
          to-cyan-500/20
          blur-[120px]
        "
      />

      {/* Dashboard */}
      <FadeLeft>
        <div
          className="
            relative
            z-10
            scale-[0.72]
            sm:scale-[0.82]
            lg:scale-[0.90]
            xl:scale-100
          "
        >
          <DashboardMockup />
        </div>
      </FadeLeft>

      {/* Revenue */}
      <div
        className="
          absolute
          left-0
          bottom-10
          z-20
          hidden
          rounded-[28px]
          border
          border-white/40
          bg-white/85
          p-6
          shadow-2xl
          backdrop-blur-xl
          lg:block
        "
      >
        <p className="text-sm text-muted-foreground">
          Revenue
        </p>

        <h3
          className="
            mt-2
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
            bg-clip-text
            text-4xl
            font-black
            text-transparent
          "
        >
          $245K
        </h3>

        <div className="mt-3 flex items-center gap-2">

          <span
            className="
              rounded-full
              bg-emerald-100
              px-3
              py-1
              text-xs
              font-semibold
              text-emerald-700
            "
          >
            ▲ +18.2%
          </span>

          <span className="text-xs text-muted-foreground">
            this month
          </span>

        </div>
      </div>

      {/* Projects */}
      <div
        className="
          absolute
          right-0
          top-10
          z-20
          hidden
          rounded-[28px]
          border
          border-white/40
          bg-white/85
          p-6
          shadow-2xl
          backdrop-blur-xl
          lg:block
        "
      >
        <p className="text-sm text-muted-foreground">
          Active Projects
        </p>

        <h3
          className="
            mt-2
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
            bg-clip-text
            text-4xl
            font-black
            text-transparent
          "
        >
          250+
        </h3>

        <p className="mt-3 text-sm font-semibold text-cyan-600">
          Running
        </p>
      </div>

      {/* Floating Badge */}
      <div
        className="
          absolute
          bottom-0
          right-20
          hidden
          rounded-full
          border
          border-white/40
          bg-white/90
          px-6
          py-3
          shadow-xl
          backdrop-blur-xl
          xl:flex
          items-center
          gap-3
        "
      >
        <div
          className="
            h-3
            w-3
            rounded-full
            bg-emerald-500
          "
        />

        <span className="text-sm font-medium">
          System Online
        </span>
      </div>
    </div>
  );
}