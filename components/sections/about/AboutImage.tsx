import FadeLeft from "@/components/animation/FadeLeft";
import AboutDashboard from "./AboutDashboard";

export default function AboutImage() {
  return (
    <div className="relative">
      <FadeLeft>
        <AboutDashboard />
      </FadeLeft>

      {/* Floating Card */}
      <div
        className="
          absolute
          -bottom-8
          -right-8
          rounded-3xl
          border
          border-border/60
          bg-background
          p-6
          shadow-2xl
        "
      >
        <p className="text-sm text-muted-foreground">
          Monthly Revenue
        </p>

        <h3 className="mt-2 text-4xl font-black">
          $54K
        </h3>

        <div className="mt-4 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />

          <p className="font-medium text-emerald-600">
            +18.4% this month
          </p>
        </div>
      </div>
    </div>
  );
}
