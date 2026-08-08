import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        px-6
      "
    >
      <h1
        className="
          bg-gradient-to-r
          from-indigo-600
          via-violet-600
          to-cyan-500
          bg-clip-text
          text-8xl
          font-black
          text-transparent
        "
      >
        404
      </h1>

      <h2 className="mt-8 text-4xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-6 max-w-lg text-center text-muted-foreground">
        The page you're looking for doesn't
        exist or has been moved.
      </p>

      <Link
        href="/"
        className="
          mt-10
          rounded-2xl
          bg-gradient-to-r
          from-indigo-600
          via-violet-600
          to-cyan-500
          px-8
          py-4
          font-semibold
          text-white
        "
      >
        Back Home
      </Link>
    </main>
  );
}
