import Logo from "./Logo";
import FooterBottom from "./FooterBottom";

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const resourceLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-border/50
        bg-slate-950
        text-white
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -left-32
          -top-32
          h-96
          w-96
          rounded-full
          bg-indigo-600/20
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-32
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[160px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          py-20
          lg:px-8
        "
      >
        <div
          className="
            grid
            gap-12
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]
          "
        >
          {/* Brand */}
          <div>
            <Logo />

            <p
              className="
                mt-6
                max-w-sm
                leading-7
                text-slate-400
              "
            >
              Zenova is a premium digital
              experience template built for
              modern businesses, startups
              and ambitious teams.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold">
              Company
            </h3>

            <div className="mt-6 space-y-4">
              {companyLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    block
                    text-sm
                    text-slate-400
                    transition-colors
                    hover:text-white
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold">
              Resources
            </h3>

            <div className="mt-6 space-y-4">
              {resourceLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    block
                    text-sm
                    text-slate-400
                    transition-colors
                    hover:text-white
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold">
              Stay Updated
            </h3>

            <p className="mt-6 text-sm leading-6 text-slate-400">
              Get the latest updates, product
              news and design inspiration.
            </p>

            <div className="mt-5 flex">
              <input
                type="email"
                placeholder="Email address"
                className="
                  h-12
                  min-w-0
                  flex-1
                  rounded-l-xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-slate-500
                  focus:border-indigo-400
                "
              />

              <button
                type="button"
                className="
                  h-12
                  rounded-r-xl
                  bg-gradient-to-r
                  from-indigo-600
                  via-violet-600
                  to-cyan-500
                  px-5
                  text-sm
                  font-semibold
                "
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}