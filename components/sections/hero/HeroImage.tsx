export default function HeroImage() {
  return (
    <div className="relative hidden lg:flex items-center justify-center">

      {/* Dashboard */}

      <div
        className="
          relative
          h-[520px]
          w-[620px]
          overflow-hidden
          rounded-[36px]
          border
          bg-white
          shadow-2xl
        "
      >

        <div className="border-b p-6">

          <div className="flex gap-2">

            <div className="h-3 w-3 rounded-full bg-red-400" />

            <div className="h-3 w-3 rounded-full bg-yellow-400" />

            <div className="h-3 w-3 rounded-full bg-green-400" />

          </div>

        </div>

        <div className="space-y-6 p-8">

          <div className="h-6 w-60 rounded bg-slate-200" />

          <div className="grid grid-cols-2 gap-6">

            <div className="h-36 rounded-2xl bg-slate-100" />

            <div className="h-36 rounded-2xl bg-slate-100" />

            <div className="col-span-2 h-52 rounded-2xl bg-slate-100" />
        <div
            className="
                absolute
                -left-10
                bottom-20
                rounded-3xl
                border
                bg-background
                p-6
                shadow-xl
            "
            >

            <p className="text-sm text-muted-foreground">
                Revenue
            </p>

            <h3 className="mt-2 text-3xl font-bold">
                $120K
            </h3>

            </div>

            <div
            className="
                absolute
                -right-10
                top-20
                rounded-3xl
                border
                bg-background
                p-6
                shadow-xl
            "
            >

            <p className="text-sm text-muted-foreground">
                Projects
            </p>

            <h3 className="mt-2 text-3xl font-bold">
                250+
            </h3>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}