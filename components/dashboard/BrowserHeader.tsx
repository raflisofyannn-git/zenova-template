import { Bell, Search } from "lucide-react";

export default function BrowserHeader() {
  return (
    <div
      className="
        flex
        h-16
        items-center
        justify-between
        border-b
        border-border/60
        bg-white/80
        px-6
        backdrop-blur-xl
      "
    >
      <div className="flex items-center gap-3">

        <div className="flex gap-2">

          <div className="h-3 w-3 rounded-full bg-red-400" />

          <div className="h-3 w-3 rounded-full bg-yellow-400" />

          <div className="h-3 w-3 rounded-full bg-green-400" />

        </div>

        <span
          className="
            ml-4
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
            bg-clip-text
            text-lg
            font-black
            text-transparent
          "
        >
          Zenova
        </span>

      </div>

      <div className="flex items-center gap-4">

        <Search
          size={18}
          className="text-slate-500"
        />

        <Bell
          size={18}
          className="text-slate-500"
        />

        <div
          className="
            h-10
            w-10
            rounded-full
            bg-gradient-to-br
            from-indigo-600
            via-violet-600
            to-cyan-500
          "
        />

      </div>
    </div>
  );
}