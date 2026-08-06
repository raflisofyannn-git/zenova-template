import FadeLeft from "@/components/animation/FadeLeft";

export default function AboutImage() {
  return (
    <FadeLeft>
      <div
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          bg-background
          p-10
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="mb-10 flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        {/* Dashboard */}
        <div className="space-y-6">

          <div className="h-6 w-56 rounded bg-slate-200" />

          <div className="grid grid-cols-2 gap-5">

            <div className="h-32 rounded-2xl bg-slate-100" />

            <div className="h-32 rounded-2xl bg-slate-100" />

          </div>

          <div className="h-56 rounded-3xl bg-slate-100" />

        </div>

        {/* Floating Card */}
        <div
          className="
            absolute
            -right-8
            bottom-10
            rounded-3xl
            border
            bg-background
            p-6
            shadow-xl
          "
        >
          <p className="text-sm text-muted-foreground">
            Growth
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            +245%
          </h3>

          <p className="mt-2 text-sm text-emerald-600">
            This Year
          </p>
        </div>

      </div>
    </FadeLeft>
  );
}