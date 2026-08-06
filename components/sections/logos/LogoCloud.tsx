import FadeUp from "@/components/animation/FadeUp";
import LogoItem from "./LogoItem";
import { logoCloud } from "@/data/logoCloud";

export default function LogoCloud() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-8">

        <FadeUp>

          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Trusted by Innovative Companies
          </p>

          <h2 className="mt-4 text-center text-4xl font-bold">
            Powering Teams Around the World
          </h2>

        </FadeUp>

        <div
          className="
            mt-16
            grid
            gap-6
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
          "
        >
          {logoCloud.map((logo) => (
            <LogoItem
                key={logo.name}
                name={logo.name}
                logo={logo.logo}
            />
          ))}
        </div>

      </div>

    </section>
  );
}