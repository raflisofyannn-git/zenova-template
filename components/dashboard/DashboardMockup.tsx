import BrowserHeader from "./BrowserHeader";
import StatsGrid from "./StatsGrid";
import RevenueChart from "./RevenueChart";
import ActivityList from "./ActivityList";
import ProgressCard from "./ProgressCard";
import TeamMembers from "./TeamMembers";
import NotificationCard from "./NotificationCard";

export default function DashboardMockup() {
  return (
    <div
      className="
        h-[640px]
        w-[680px]
        overflow-hidden
        rounded-[36px]
        border
        bg-background
        shadow-2xl
      "
    >
      <BrowserHeader />

      <div className="space-y-6 p-6">
        <StatsGrid />

        <RevenueChart />

        <div className="grid grid-cols-2 gap-6">
            <ActivityList />
            <ProgressCard />

        <div className="grid grid-cols-2 gap-6">
            <TeamMembers />
            <NotificationCard />
            </div>
        </div>
        </div>

    </div>
  );
}