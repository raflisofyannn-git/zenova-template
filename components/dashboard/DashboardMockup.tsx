import BrowserHeader from "./BrowserHeader";
import Sidebar from "./Sidebar";
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

      <div className="flex h-[calc(100%-64px)]">
        <Sidebar />

        <div className="flex-1 space-y-5 overflow-hidden p-5">
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
        </div>
      </div>
    </div>
  );
}