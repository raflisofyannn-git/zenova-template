import {
  LayoutDashboard,
  BarChart3,
  FolderKanban,
  Users,
  CreditCard,
  Settings,
} from "lucide-react";

const menu = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
  },
  {
    icon: BarChart3,
    label: "Analytics",
  },
  {
    icon: FolderKanban,
    label: "Projects",
  },
  {
    icon: Users,
    label: "Customers",
  },
  {
    icon: CreditCard,
    label: "Billing",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
        flex
        w-64
        flex-col
        border-r
        border-border/60
        bg-gradient-to-b
        from-slate-50
        via-white
        to-indigo-50/40
        p-6
      "
    >
      <div className="mb-10">

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-indigo-600
            via-violet-600
            to-cyan-500
            text-xl
            font-black
            text-white
            shadow-lg
          "
        >
          Z
        </div>

      </div>

      <nav className="space-y-3">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`
                group
                flex
                w-full
                items-center
                gap-4
                rounded-2xl
                px-4
                py-3
                text-left
                transition-all
                duration-300

                ${
                  item.active
                    ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white shadow-lg"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                }
              `}
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.label}
              </span>
            </button>
          );
        })}

      </nav>

      <div className="mt-auto">

        <div
          className="
            overflow-hidden
            rounded-3xl
            bg-gradient-to-br
            from-indigo-600
            via-violet-600
            to-cyan-500
            p-6
            text-white
            shadow-xl
          "
        >
          <p className="text-xs uppercase tracking-[0.25em] opacity-80">
            PRO
          </p>

          <h3 className="mt-3 text-xl font-bold">
            Upgrade
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/80">
            Unlock all premium dashboard features.
          </p>

          <button
            className="
              mt-6
              w-full
              rounded-xl
              bg-white
              py-3
              text-sm
              font-semibold
              text-indigo-700
              transition
              hover:scale-[1.03]
            "
          >
            Upgrade Now
          </button>
        </div>

      </div>

    </aside>
  );
}
