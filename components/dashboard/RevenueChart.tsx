export default function RevenueChart() {
  return (
    <div className="rounded-2xl border bg-card p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <p className="text-sm text-muted-foreground">
            Revenue Overview
          </p>

          <h3 className="text-2xl font-bold">
            $245,000
          </h3>

        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
          +18.2%
        </span>

      </div>

      <svg
        viewBox="0 0 500 180"
        className="h-52 w-full"
      >
        <path
          d="M0 140
             C60 120 80 100 120 105
             S200 70 260 90
             S360 150 500 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-primary"
        />

        <path
          d="M0 180
             L0 140
             C60 120 80 100 120 105
             S200 70 260 90
             S360 150 500 40
             L500 180"
          className="fill-primary/10"
        />
      </svg>

    </div>
  );
}