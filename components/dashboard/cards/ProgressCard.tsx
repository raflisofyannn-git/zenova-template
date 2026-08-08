export default function ProgressCard() {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <h3 className="text-lg font-semibold">
        Project Progress
      </h3>

      <div className="mt-8 space-y-6">
        <div>
          <div className="mb-2 flex justify-between">
            <span>UI Design</span>
            <span>90%</span>
          </div>

          <div className="h-2 rounded-full bg-muted">
            <div className="h-2 w-[90%] rounded-full bg-primary" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between">
            <span>Development</span>
            <span>75%</span>
          </div>

          <div className="h-2 rounded-full bg-muted">
            <div className="h-2 w-[75%] rounded-full bg-primary" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between">
            <span>Marketing</span>
            <span>62%</span>
          </div>

          <div className="h-2 rounded-full bg-muted">
            <div className="h-2 w-[62%] rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}