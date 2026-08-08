const activities = [
  {
    title: "Payment Received",
    description: "Invoice INV-024 has been paid",
    time: "2 min ago",
    color: "bg-emerald-500",
  },
  {
    title: "New Invoice",
    description: "Invoice INV-025 created",
    time: "15 min ago",
    color: "bg-blue-500",
  },
  {
    title: "New Customer",
    description: "John Anderson joined",
    time: "1 hour ago",
    color: "bg-violet-500",
  },
  {
    title: "Project Completed",
    description: "Landing Page finished",
    time: "Today",
    color: "bg-orange-500",
  },
];

export default function ActivityList() {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-border/60
        bg-card
        p-6
        transition-all
        duration-500
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-bold">
          Recent Activity
        </h3>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Live
        </span>
      </div>

      <div className="space-y-5">
        {activities.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 rounded-2xl p-3 transition hover:bg-muted/40"
          >
            <div
              className={`mt-1.5 h-3 w-3 rounded-full ${item.color}`}
            />

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-semibold">
                  {item.title}
                </p>

                <span className="text-xs text-muted-foreground">
                  {item.time}
                </span>
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}