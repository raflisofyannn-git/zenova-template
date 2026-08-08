import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-indigo-600
          via-violet-600
          to-cyan-500
          font-black
          text-white
          shadow-lg
        "
      >
        Z
      </div>

      <div>

        <h1
          className="
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
            bg-clip-text
            text-2xl
            font-black
            tracking-tight
            text-transparent
          "
        >
          Zenova
        </h1>

        <p className="text-xs text-muted-foreground">
          Premium Next.js Template
        </p>

      </div>
    </Link>
  );
}