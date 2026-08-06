import Link from "next/link";
import Logo from "@/components/layout/Logo";

const product = [
  "Features",
  "Dashboard",
  "Pricing",
  "Integrations",
];

const company = [
  "About",
  "Careers",
  "Blog",
  "Contact",
];

const resources = [
  "Documentation",
  "Help Center",
  "Support",
  "Changelog",
];

export default function FooterLinks() {
  return (
    <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

      {/* Logo */}

      <div className="max-w-sm">

        <Logo />

        <p className="mt-6 leading-8 text-slate-400">
          Aureon is a modern Next.js template crafted
          for startups, agencies, and growing businesses.
        </p>

      </div>

      {/* Product */}

      <div>

        <h3 className="text-lg font-bold text-white">
          Product
        </h3>

        <div className="mt-6 space-y-3">

          {product.map((item) => (
            <Link
              key={item}
              href="#"
              className="block text-slate-400 transition hover:text-primary"
            >
              {item}
            </Link>
          ))}

        </div>

      </div>

      {/* Company */}

      <div>

        <h3 className="text-lg font-bold text-white">
          Company
        </h3>

        <div className="mt-6 space-y-3">

          {company.map((item) => (
            <Link
              key={item}
              href="#"
              className="block text-slate-400 transition hover:text-primary"
            >
              {item}
            </Link>
          ))}

        </div>

      </div>

      {/* Resources */}

      <div>

        <h3 className="text-lg font-bold text-white">
          Resources
        </h3>

        <div className="mt-6 space-y-3">

          {resources.map((item) => (
            <Link
              key={item}
              href="#"
              className="block text-slate-400 transition hover:text-primary"
            >
              {item}
            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}