import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const resources = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-slate-950 text-white">
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-0
          h-80
          w-80
          rounded-full
          bg-indigo-600/20
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-80
          w-80
          rounded-full
          bg-cyan-500/10
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-indigo-600
                  via-violet-600
                  to-cyan-500
                  text-lg
                  font-black
                  shadow-lg
                  shadow-indigo-500/20
                "
              >
                Z
              </span>

              <span>
                <span className="block text-xl font-bold">
                  Zenova
                </span>

                <span className="block text-xs text-slate-500">
                  Premium Next.js Template
                </span>
              </span>
            </Link>

            <p className="mt-6 leading-7 text-slate-400">
              A premium digital experience template
              built for startups, SaaS companies,
              agencies and modern businesses.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              <SocialIcon
                label="Website"
                href="#home"
                icon={Globe}
              />

              <SocialIcon
                label="Email"
                href="mailto:hello@example.com"
                icon={Mail}
              />

              <SocialIcon
                label="Phone"
                href="tel:+15551234567"
                icon={Phone}
              />

              <SocialIcon
                label="Location"
                href="#contact"
                icon={MapPin}
              />
            </div>
          </div>

          {/* Navigation */}
          <FooterColumn
            title="Navigation"
            links={navigation}
          />

          {/* Resources */}
          <FooterColumn
            title="Resources"
            links={resources}
          />

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-sm text-slate-400">
              <a
                href="mailto:hello@example.com"
                className="block transition-colors hover:text-white"
              >
                hello@example.com
              </a>

              <a
                href="tel:+15551234567"
                className="block transition-colors hover:text-white"
              >
                +1 (000) 000-0000
              </a>

              <p>
                Your City,
                <br />
                Your Country
              </p>
            </div>

            <Link
              href="#contact"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-indigo-300
                transition-colors
                hover:text-white
              "
            >
              Start a project
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-14
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-7
            text-sm
            text-slate-500
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            Â© {new Date().getFullYear()} Zenova.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold">
        {title}
      </h3>

      <div className="mt-6 space-y-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="
              block
              text-sm
              text-slate-400
              transition-colors
              hover:text-white
            "
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof Globe;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-white/5
        text-slate-400
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-400/30
        hover:bg-indigo-500/10
        hover:text-white
      "
    >
      <Icon size={17} />
    </a>
  );
}
