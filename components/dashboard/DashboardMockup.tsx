import BrowserHeader from "./BrowserHeader";
import Sidebar from "./Sidebar";
import StatsGrid from "./widgets/StatsGrid";
import RevenueChart from "./charts/RevenueChart";
import ActivityList from "./ActivityList";
import ProgressCard from "./cards/ProgressCard";
import TeamMembers from "./TeamMembers";
import NotificationCard from "./cards/NotificationCard";

export default function DashboardMockup() {
  return (
    <div
      className="
        relative
        h-[520px]
        w-[620px]
        overflow-hidden
        rounded-[36px]
        border
        border-border/60
        bg-background/95
        shadow-2xl
        backdrop-blur
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      <BrowserHeader />

      <div className="flex h-[calc(100%-64px)]">
        <Sidebar />

        <div
          className="
            relative
            flex-1
            overflow-hidden
            border-l
            border-border/60
            bg-background/40
            p-5
            space-y-6
          "
        >
          <StatsGrid />

          <RevenueChart />

          <div className="grid grid-cols-2 gap-5">
            <ActivityList />
            <ProgressCard />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <TeamMembers />
            <NotificationCard />
          </div>

          {/* Floating Analytics */}
          <div
            className="
              absolute
              right-6
              top-6
              rounded-2xl
              border
              border-border/60
              bg-background
              px-4
              py-3
              shadow-xl
            "
          >
            <p className="text-xs text-muted-foreground">
              Conversion
            </p>

            <h4 className="mt-1 text-xl font-bold">
              18.4%
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}