import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import FadeUp from "@/components/animation/FadeUp";

import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import { Button } from "@/components/ui/button";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@zenova.com",
    href: "mailto:hello@zenova.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+62 812 3456 7890",
    href: "tel:+6281234567890",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Jakarta, Indonesia",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-20
        lg:py-32
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-b
          from-background
          via-indigo-50/20
          to-cyan-50/30
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          left-0
          top-20
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-500/10
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          -z-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-500/10
          blur-[160px]
        "
      />

      <SectionContainer>

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <FadeUp>

            <SectionBadge>
              Contact
            </SectionBadge>

            <SectionTitle>
              Let's Build Something
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-indigo-600
                  via-violet-600
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                "
              >
                Amazing Together
              </span>
            </SectionTitle>

            <SectionDescription>
              Have a project in mind? Tell us what
              you're building and let's turn your
              idea into reality.
            </SectionDescription>

          </FadeUp>

        </div>

        {/* Content */}
        <div
          className="
            mt-16
            grid
            gap-8
            lg:mt-20
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >

          {/* Contact Information */}
          <FadeUp>

            <div
              className="
                h-full
                rounded-[32px]
                border
                border-border/60
                bg-white/80
                p-8
                backdrop-blur-xl
                lg:p-10
              "
            >

              <div>

                <h3 className="text-2xl font-bold">
                  Get in touch
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                    text-muted-foreground
                  "
                >
                  We're always happy to discuss
                  new projects, ideas and
                  opportunities.
                </p>

              </div>

              <div className="mt-10 space-y-5">

                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      className="
                        group
                        flex
                        items-center
                        gap-5
                        rounded-2xl
                        border
                        border-border/50
                        p-5
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-indigo-200
                        hover:bg-indigo-50/50
                      "
                    >

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-indigo-100
                          via-violet-100
                          to-cyan-100
                          text-indigo-600
                        "
                      >
                        <Icon size={21} />
                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="text-sm text-muted-foreground">
                          {item.title}
                        </p>

                        <p className="mt-1 truncate font-semibold">
                          {item.value}
                        </p>

                      </div>

                      <ArrowUpRight
                        size={18}
                        className="
                          text-muted-foreground
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-indigo-600
                        "
                      />

                    </a>
                  );
                })}

              </div>

              {/* Status */}
              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-emerald-50
                  px-5
                  py-4
                "
              >
                <span
                  className="
                    h-3
                    w-3
                    animate-pulse
                    rounded-full
                    bg-emerald-500
                  "
                />

                <span className="text-sm font-medium text-emerald-700">
                  Available for new projects
                </span>
              </div>

            </div>

          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.15}>

            <form
              className="
                rounded-[32px]
                border
                border-border/60
                bg-white/80
                p-8
                backdrop-blur-xl
                lg:p-10
              "
            >

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-border/60
                      bg-background
                      px-5
                      outline-none
                      transition
                      focus:border-indigo-400
                      focus:ring-4
                      focus:ring-indigo-500/10
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-border/60
                      bg-background
                      px-5
                      outline-none
                      transition
                      focus:border-indigo-400
                      focus:ring-4
                      focus:ring-indigo-500/10
                    "
                  />
                </div>

              </div>

              <div className="mt-5">

                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium"
                >
                  Company
                </label>

                <input
                  id="company"
                  type="text"
                  placeholder="Company name"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-border/60
                    bg-background
                    px-5
                    outline-none
                    transition
                    focus:border-indigo-400
                    focus:ring-4
                    focus:ring-indigo-500/10
                  "
                />

              </div>

              <div className="mt-5">

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-border/60
                    bg-background
                    p-5
                    outline-none
                    transition
                    focus:border-indigo-400
                    focus:ring-4
                    focus:ring-indigo-500/10
                  "
                />

              </div>

              <Button
                type="submit"
                className="
                  mt-6
                  h-14
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-600
                  via-violet-600
                  to-cyan-500
                  font-semibold
                  shadow-lg
                  shadow-indigo-500/20
                  transition-all
                  duration-300
                  hover:opacity-90
                "
              >
                Send Message

                <ArrowUpRight
                  size={18}
                  className="ml-2"
                />
              </Button>

            </form>

          </FadeUp>

        </div>

      </SectionContainer>
    </section>
  );
}