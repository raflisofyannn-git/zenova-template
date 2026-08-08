export default function RevenueChart() {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-border/60
        bg-white/80
        p-7
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-500
        hover:shadow-2xl
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -right-16
          -top-16
          h-56
          w-56
          rounded-full
          bg-gradient-to-br
          from-indigo-500/15
          via-violet-500/15
          to-cyan-500/15
          blur-[90px]
        "
      />

      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-muted-foreground">
            Revenue Overview
          </p>

          <h2
            className="
              mt-2
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-cyan-500
              bg-clip-text
              text-4xl
              font-black
              text-transparent
            "
          >
            $245,800
          </h2>

        </div>

        <div
          className="
            rounded-full
            bg-emerald-100
            px-4
            py-2
            text-sm
            font-semibold
            text-emerald-700
          "
        >
          ▲ +18.2%
        </div>

      </div>

      <div className="relative mt-8">

        <svg
          viewBox="0 0 620 240"
          className="h-64 w-full"
        >
          <defs>

            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#4F46E5"
              />

              <stop
                offset="50%"
                stopColor="#8B5CF6"
              />

              <stop
                offset="100%"
                stopColor="#06B6D4"
              />
            </linearGradient>

            <linearGradient
              id="fillGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#6366F1"
                stopOpacity="0.35"
              />

              <stop
                offset="100%"
                stopColor="#06B6D4"
                stopOpacity="0"
              />
            </linearGradient>

          </defs>

          {/* Grid */}

          <line x1="0" y1="40" x2="620" y2="40" stroke="#E5E7EB" />

          <line x1="0" y1="100" x2="620" y2="100" stroke="#E5E7EB" />

          <line x1="0" y1="160" x2="620" y2="160" stroke="#E5E7EB" />

          <line x1="0" y1="220" x2="620" y2="220" stroke="#E5E7EB" />

          {/* Area */}

          <path
            d="
              M0 210
              C60 190 90 120 150 140
              S250 60 320 90
              S450 170 620 40
              L620 240
              L0 240
              Z
            "
            fill="url(#fillGradient)"
          />

          {/* Line */}

          <path
            d="
              M0 210
              C60 190 90 120 150 140
              S250 60 320 90
              S450 170 620 40
            "
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Points */}

          {[
            [0,210],
            [150,140],
            [320,90],
            [620,40],
          ].map(([x,y],i)=>(
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r="8"
                fill="#fff"
              />

              <circle
                cx={x}
                cy={y}
                r="5"
                fill="#6366F1"
              />
            </g>
          ))}

        </svg>

      </div>

      <div className="mt-2 flex justify-between px-2 text-sm text-muted-foreground">

        <span>Jan</span>

        <span>Feb</span>

        <span>Mar</span>

        <span>Apr</span>

        <span>May</span>

        <span>Jun</span>

      </div>

    </div>
  );
}