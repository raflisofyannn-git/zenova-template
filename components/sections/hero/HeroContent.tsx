import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div>

      <span className="rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
        Welcome to Aureon
      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
        Build
        <br />
        Modern Business
        <br />
        Websites.
      </h1>

      <p className="mt-8 max-w-xl text-lg text-muted-foreground">
        Premium Next.js template crafted for
        agencies, startups and enterprise companies.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button size="lg">
          Get Started
        </Button>

        <Button
          variant="outline"
          size="lg"
        >
          Live Demo
        </Button>
      </div>

    </div>
  );
}