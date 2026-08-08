import FadeUp from "@/components/animation/FadeUp";
import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
      "
    >
      {/* Background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          bg-gradient-to-b
          from-background
          via-indigo-50/20
          to-background
        "
      />

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-150px]
          top-20
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      <SectionContainer>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <SectionBadge>
              Contact Us
            </SectionBadge>

            <SectionTitle>
              Let's Start a
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
                Conversation
              </span>
            </SectionTitle>

            <SectionDescription>
              Have a project in mind? Tell us what
              you're building and let's create something
              remarkable together.
            </SectionDescription>
          </FadeUp>
        </div>

        {/* Content */}
        <div
          className="
            mx-auto
            mt-16
            grid
            max-w-6xl
            gap-8
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* Contact Info */}
          <FadeUp>
            <div
              className="
                h-full
                rounded-[32px]
                border
                border-border/60
                bg-slate-950
                p-8
                text-white
                shadow-2xl
                sm:p-10
              "
            >
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-white/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-indigo-200
                "
              >
                Get in touch
              </span>

              <h3
                className="
                  mt-7
                  text-3xl
                  font-black
                  tracking-tight
                "
              >
                Let's build your
                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-indigo-300
                    via-violet-300
                    to-cyan-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  next big idea.
                </span>
              </h3>

              <p
                className="
                  mt-5
                  leading-7
                  text-slate-400
                "
              >
                Our team is ready to help you transform
                your idea into a premium digital experience.
              </p>

              <div className="mt-10 space-y-6">
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  value="hello@zenova.com"
                />

                <ContactInfo
                  icon={Phone}
                  title="Phone"
                  value="+1 (555) 123-4567"
                />

                <ContactInfo
                  icon={MapPin}
                  title="Office"
                  value="San Francisco, California"
                />
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
                bg-white
                p-8
                shadow-xl
                sm:p-10
              "
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  label="Your Name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                />

                <FormField
                  label="Email Address"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>

              <div className="mt-6">
                <FormField
                  label="Subject"
                  name="subject"
                  placeholder="Tell us about your project"
                  type="text"
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-border
                    bg-background
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition
                    placeholder:text-muted-foreground
                    focus:border-indigo-400
                    focus:ring-4
                    focus:ring-indigo-500/10
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  mt-7
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-600
                  via-violet-600
                  to-cyan-500
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-indigo-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                Send Message
                <ArrowRight size={17} />
              </button>
            </form>
          </FadeUp>
        </div>
      </SectionContainer>
    </section>
  );
}

function ContactInfo({
  icon: Icon,
  title,
  value,
}: {
  icon: typeof Mail;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-white/10
          text-indigo-300
        "
      >
        <Icon size={20} />
      </div>

      <div className="min-w-0">
        <p className="text-xs text-slate-500">
          {title}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-slate-200">
          {value}
        </p>
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type,
}: {
  label: string;
  name: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="
          h-12
          w-full
          rounded-2xl
          border
          border-border
          bg-background
          px-4
          text-sm
          outline-none
          transition
          placeholder:text-muted-foreground
          focus:border-indigo-400
          focus:ring-4
          focus:ring-indigo-500/10
        "
      />
    </div>
  );
}
