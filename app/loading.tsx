export default function Loading() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
      "
    >
      <div className="text-center">

        <div
          className="
            mx-auto
            h-20
            w-20
            animate-spin
            rounded-full
            border-[6px]
            border-indigo-200
            border-t-indigo-600
          "
        />

        <h2
          className="
            mt-8
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
            bg-clip-text
            text-2xl
            font-black
            text-transparent
          "
        >
          Loading...
        </h2>

      </div>
    </main>
  );
}