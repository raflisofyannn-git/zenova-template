export default function AboutDashboard() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-border/60
        bg-background/90
        p-8
        shadow-2xl
        backdrop-blur
      "
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <span className="text-sm font-medium text-muted-foreground">
          Dashboard
        </span>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-5">

        {[
          {
            title: "Revenue",
            value: "$245K",
          },
          {
            title: "Orders",
            value: "2,540",
          },
          {
            title: "Clients",
            value: "540",
          },
          {
            title: "Growth",
            value: "+18%",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="
              rounded-2xl
              border
              border-border/60
              bg-card
              p-5
              transition-all
              duration-300
              hover:border-primary/30
              hover:shadow-lg
            "
          >
            <p className="text-sm text-muted-foreground">
              {item.title}
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              {item.value}
            </h3>
          </div>
        ))}

      </div>

      {/* Fake Line Chart */}
      <div
        className="
          mt-8
          rounded-3xl
          border
          border-border/60
          bg-card
          p-6
        "
      >
        <p className="mb-6 text-sm font-medium text-muted-foreground">
          Revenue Analytics
        </p>

        <svg
          viewBox="0 0 600 220"
          className="h-48 w-full"
        >
          <defs>
            <linearGradient
              id="chartGradient"
              x1="0%"
              x2="0%"
              y1="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="currentColor"
                stopOpacity="0.35"
              />
              <stop
                offset="100%"
                stopColor="currentColor"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <path
            d="
              M20 170
              C80 120,
              120 130,
              170 90
              S270 40,
              330 85
              S430 160,
              580 50
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            className="text-primary"
          />

          <path
            d="
              M20 170
              C80 120,
              120 130,
              170 90
              S270 40,
              330 85
              S430 160,
              580 50
              L580 220
              L20 220
              Z
            "
            fill="url(#chartGradient)"
            className="text-primary"
          />
        </svg>
      </div>

    </div>
  );
}