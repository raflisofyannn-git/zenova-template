import BrowserHeader from "./BrowserHeader";
import StatsGrid from "./StatsGrid";
import RevenueChart from "./RevenueChart";

export default function DashboardMockup() {
  return (
    <div
      className="
        h-[520px]
        w-[620px]
        overflow-hidden
        rounded-[36px]
        border
        bg-background
        shadow-2xl
      "
    >
      <BrowserHeader />

      <div className="space-y-8 p-8">

        <StatsGrid />

        <RevenueChart />

      </div>

    </div>
  );
}