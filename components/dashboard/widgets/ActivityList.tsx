import {
  ArrowUpRight,
  CreditCard,
  FolderKanban,
  UserPlus,
} from "lucide-react";

const activities = [
  {
    icon: CreditCard,
    title: "Payment Received",
    subtitle: "Enterprise Plan",
    time: "2 min ago",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: UserPlus,
    title: "New Customer",
    subtitle: "John Anderson",
    time: "15 min ago",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: FolderKanban,
    title: "Project Created",
    subtitle: "Zenova Dashboard",
    time: "1 hour ago",
    color: "bg-violet-100 text-violet-600",
  },
];

export default function ActivityList() {
  return (
    <div
      className="
        rounded-[28px]
        border
        border-border/60
        bg-white/80
        p-6
        backdrop-blur-xl
      "
    >
      <div className="mb-6 flex items-center justify-between">

        <div>

          <h3 className="text-lg font-bold">
            Recent Activity
          </h3>

          <p className="text-sm text-muted-foreground">
            Latest updates
          </p>

        </div>

        <ArrowUpRight
          size={18}
          className="text-muted-foreground"
        />

      </div>

      <div className="space-y-5">

        {activities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                flex
                items-center
                gap-4
              "
            >
              <div
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  ${item.color}
                `}
              >
                <Icon size={20} />
              </div>

              <div className="flex-1">

                <h4 className="font-semibold">
                  {item.title}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {item.subtitle}
                </p>

              </div>

              <span className="text-xs text-muted-foreground">
                {item.time}
              </span>

            </div>
          );
        })}

      </div>
    </div>
  );
}
