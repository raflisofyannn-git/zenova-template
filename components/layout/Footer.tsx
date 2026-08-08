import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-20">

      <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-4">

        <div>

          <Logo />

          <p className="mt-6 leading-8 text-muted-foreground">
            Premium Next.js template
            designed for startups,
            SaaS and digital agencies.
          </p>

        </div>

        <div>

          <h3 className="font-bold">
            Company
          </h3>

          <div className="mt-6 space-y-4">

            <a href="#">About</a>

            <a href="#" className="block">
              Services
            </a>

            <a href="#" className="block">
              Pricing
            </a>

            <a href="#" className="block">
              Contact
            </a>

          </div>

        </div>

        <div>

          <h3 className="font-bold">
            Resources
          </h3>

          <div className="mt-6 space-y-4">

            <a href="#">Documentation</a>

            <a href="#" className="block">
              Changelog
            </a>

            <a href="#" className="block">
              Support
            </a>

            <a href="#" className="block">
              License
            </a>

          </div>

        </div>

        <div>

          <h3 className="font-bold">
            Newsletter
          </h3>

          <p className="mt-6 text-muted-foreground">
            Receive product news and
            updates every month.
          </p>

          <input
            placeholder="Email address"
            className="
              mt-6
              h-12
              w-full
              rounded-xl
              border
              px-4
            "
          />

          <button
            className="
              mt-4
              h-12
              w-full
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-cyan-500
              font-semibold
              text-white
            "
          >
            Subscribe
          </button>

        </div>

      </div>

      <div
        className="
          mx-auto
          mt-16
          flex
          max-w-7xl
          items-center
          justify-between
          border-t
          pt-8
          text-sm
          text-muted-foreground
          px-8
        "
      >
        <span>
          © 2026 Zenova. All rights reserved.
        </span>

        <span>
          Crafted with Next.js & Tailwind CSS
        </span>

      </div>

    </footer>
  );
}