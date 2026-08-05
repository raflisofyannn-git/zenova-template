const activities = [
  {
    title: "Payment received",
    time: "2 min ago",
  },
  {
    title: "New invoice created",
    time: "15 min ago",
  },
  {
    title: "New customer joined",
    time: "1 hour ago",
  },
  {
    title: "Project completed",
    time: "Today",
  },
];

export default function ActivityList() {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <h3 className="mb-6 text-lg font-semibold">
        Recent Activity
      </h3>

      <div className="space-y-5">
        {activities.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-3"
          >
            <div className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />

            <div>
              <p className="font-medium">
                {item.title}
              </p>

              <p className="text-sm text-muted-foreground">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}