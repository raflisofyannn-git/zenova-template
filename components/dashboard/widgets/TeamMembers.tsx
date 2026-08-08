export default function TeamMembers() {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <h3 className="mb-5 text-lg font-semibold">
        Team Members
      </h3>

      <div className="flex -space-x-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-slate-300 font-semibold">
          A
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-slate-400 font-semibold text-white">
          B
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-slate-500 font-semibold text-white">
          C
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground font-semibold">
          +8
        </div>
      </div>
    </div>
  );
}