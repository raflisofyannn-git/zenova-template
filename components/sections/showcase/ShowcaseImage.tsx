import FadeLeft from "@/components/animation/FadeLeft";
import DashboardMockup from "@/components/dashboard/DashboardMockup";

export default function ShowcaseImage() {
  return (
    <FadeLeft>
      <div className="relative flex justify-center lg:justify-end">

        {/* Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -z-10
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/10
            blur-[120px]
          "
        />

        <div
          className="
            relative
            scale-95
            transition
            duration-700
            hover:scale-100
            xl:scale-100
          "
        >
          <DashboardMockup />
        </div>

      </div>
    </FadeLeft>
  );
}