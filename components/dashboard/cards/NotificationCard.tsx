export default function NotificationCard() {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <h3 className="text-lg font-semibold">
        Notifications
      </h3>

      <div className="mt-5 rounded-xl bg-muted p-4">
        <p className="font-medium">
          🎉 New project approved
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          5 minutes ago
        </p>
      </div>
    </div>
  );
}