export default function ProgressCard() {
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
      <p className="text-sm text-muted-foreground">
        Monthly Goal
      </p>

      <h3 className="mt-2 text-3xl font-black">
        82%
      </h3>

      <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="
            h-full
            w-[82%]
            rounded-full
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
          "
        />

      </div>

      <div className="mt-6 flex justify-between">

        <span className="text-sm text-muted-foreground">
          Progress
        </span>

        <span className="font-semibold text-indigo-600">
          82%
        </span>

      </div>
    </div>
  );
}
