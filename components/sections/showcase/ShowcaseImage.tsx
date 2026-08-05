import DashboardMockup from "@/components/dashboard/DashboardMockup";
import FadeLeft from "@/components/animation/FadeLeft";

export default function ShowcaseImage() {
  return (
    <FadeLeft>
      <div className="flex justify-center lg:justify-end">
        <div className="scale-95 xl:scale-100">
          <DashboardMockup />
        </div>
      </div>
    </FadeLeft>
  );
}