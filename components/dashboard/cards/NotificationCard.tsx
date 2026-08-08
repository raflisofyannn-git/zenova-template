import { Bell } from "lucide-react";

export default function NotificationCard() {
  return (
    <div
      className="
        overflow-hidden
        rounded-[28px]
        bg-gradient-to-br
        from-indigo-600
        via-violet-600
        to-cyan-500
        p-6
        text-white
        shadow-xl
      "
    >
      <Bell size={34} />

      <h3 className="mt-6 text-2xl font-bold">
        18 Notifications
      </h3>

      <p className="mt-3 text-sm leading-7 text-white/80">
        Your workspace has new updates waiting
        for review.
      </p>

      <button
        className="
          mt-8
          rounded-xl
          bg-white
          px-5
          py-3
          text-sm
          font-semibold
          text-indigo-700
          transition
          hover:scale-105
        "
      >
        View Notifications
      </button>
    </div>
  );
}
