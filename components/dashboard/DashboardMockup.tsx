import BrowserHeader from "./BrowserHeader";
import Sidebar from "./Sidebar";

import StatsGrid from "./widgets/StatsGrid";
import ActivityList from "./widgets/ActivityList";
import TeamMembers from "./widgets/TeamMembers";

import RevenueChart from "./charts/RevenueChart";

import ProgressCard from "./cards/ProgressCard";
import NotificationCard from "./cards/NotificationCard";

export default function DashboardMockup() {
  return (
    <div
      className="
        relative
        h-[520px]
        w-[620px]
        shrink-0
        overflow-hidden
        rounded-[36px]
        border
        border-border/60
        bg-white
        shadow-2xl
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-indigo-500/10
          blur-[120px]
        "
      />

      <BrowserHeader />

      <div className="flex h-[calc(100%-64px)] min-h-0">

        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div
          className="
            min-w-0
            flex-1
            overflow-hidden
            border-l
            border-border/60
            bg-slate-50/60
            p-5
          "
        >
          <div className="space-y-5">

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
    </div>
  );
}
