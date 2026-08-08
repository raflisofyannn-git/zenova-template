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
        w-full
        max-w-[720px]
        overflow-hidden
        rounded-[36px]
        border
        border-white/40
        bg-white/85
        shadow-[0_40px_120px_rgba(79,70,229,0.18)]
        backdrop-blur-2xl
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -right-24
          -top-24
          h-80
          w-80
          rounded-full
          bg-gradient-to-br
          from-indigo-500/20
          via-violet-500/20
          to-cyan-500/20
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -left-24
          h-96
          w-96
          rounded-full
          bg-cyan-400/10
          blur-[140px]
        "
      />

      <BrowserHeader />

      <div className="flex h-[560px]">

        <Sidebar />

        <div
          className="
            relative
            flex-1
            overflow-hidden
            border-l
            border-border/50
            bg-gradient-to-br
            from-white
            via-slate-50
            to-indigo-50/40
            p-6
          "
        >
          <div className="space-y-6">

            <StatsGrid />

            <RevenueChart />

            <div className="grid grid-cols-2 gap-6">

              <ActivityList />

              <ProgressCard />

            </div>

            <div className="grid grid-cols-2 gap-6">

              <TeamMembers />

              <NotificationCard />

            </div>

          </div>

          {/* Floating Analytics */}

          <div
            className="
              absolute
              right-6
              top-6
              rounded-3xl
              border
              border-white/40
              bg-white/90
              px-5
              py-4
              shadow-xl
              backdrop-blur-xl
            "
          >
            <p className="text-xs text-muted-foreground">
              Conversion Rate
            </p>

            <h3
              className="
                mt-2
                bg-gradient-to-r
                from-indigo-600
                via-violet-600
                to-cyan-500
                bg-clip-text
                text-3xl
                font-black
                text-transparent
              "
            >
              18.4%
            </h3>

            <p className="mt-2 text-xs text-emerald-600">
              ▲ +3.8% this week
            </p>
          </div>

          {/* Live */}

          <div
            className="
              absolute
              bottom-6
              right-6
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/40
              bg-white/90
              px-5
              py-3
              shadow-xl
              backdrop-blur-xl
            "
          >
            <div
              className="
                h-3
                w-3
                animate-pulse
                rounded-full
                bg-emerald-500
              "
            />

            <span className="text-sm font-medium">
              Live Dashboard
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}