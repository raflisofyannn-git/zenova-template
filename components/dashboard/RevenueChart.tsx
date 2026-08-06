export default function RevenueChart() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border/60
        bg-card
        p-6
        transition-all
        duration-300
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <p className="text-sm text-muted-foreground">
            Revenue Overview
          </p>

          <h3 className="mt-1 text-3xl font-black">
            $245,000
          </h3>

        </div>

        <span
          className="
            rounded-full
            bg-emerald-100
            px-4
            py-2
            text-xs
            font-bold
            text-emerald-700
          "
        >
          ▲ +18.2%
        </span>

      </div>

      {/* Chart */}

      <svg
        viewBox="0 0 600 260"
        className="h-60 w-full"
      >
        <defs>

          <linearGradient
            id="revenueGradient"
            x1="0%"
            y1="0%"
            x2="0%"
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

        {/* Grid */}

        {[40, 90, 140, 190, 240].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="600"
            y2={y}
            stroke="rgb(226 232 240)"
            strokeDasharray="6 6"
          />
        ))}

        {/* Area */}

        <path
          d="
            M20 210
            C80 170,
            120 180,
            170 120
            S270 40,
            340 90
            S430 190,
            580 70
            L580 250
            L20 250
            Z
          "
          fill="url(#revenueGradient)"
          className="text-primary"
        />

        {/* Line */}

        <path
          d="
            M20 210
            C80 170,
            120 180,
            170 120
            S270 40,
            340 90
            S430 190,
            580 70
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          className="text-primary"
          strokeLinecap="round"
        />

        {/* Data Points */}

        {[
          [20,210],
          [170,120],
          [340,90],
          [580,70],
        ].map(([x,y]) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="6"
            className="fill-primary"
          />
        ))}

        {/* Labels */}

        {["Jan","Feb","Mar","Apr","May","Jun"].map((month,index)=>(
          <text
            key={month}
            x={30 + index*100}
            y="255"
            textAnchor="middle"
            className="fill-muted-foreground text-[12px]"
          >
            {month}
          </text>
        ))}

      </svg>
    </div>
  );
}