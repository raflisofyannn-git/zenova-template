import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import FadeUp from "@/components/animation/FadeUp";
import SectionBadge from "@/components/common/SectionBadge";
import SectionContainer from "@/components/common/SectionContainer";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";

import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <SectionContainer>

        <div className="mx-auto max-w-3xl text-center">

          <SectionBadge>
            Contact
          </SectionBadge>

          <SectionTitle>
            Let's Build Something Amazing
          </SectionTitle>

          <SectionDescription>
            We'd love to hear about your next
            project. Reach out anytime.
          </SectionDescription>

        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          <FadeUp>

            <div
              className="
                rounded-[36px]
                border
                border-border/60
                bg-background
                p-10
              "
            >
              <div className="space-y-8">

                <div className="flex gap-5">

                  <div className="rounded-2xl bg-indigo-100 p-4">
                    <Mail className="text-indigo-600" />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Email
                    </h3>

                    <p className="mt-2 text-muted-foreground">
                      hello@zenova.com
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="rounded-2xl bg-cyan-100 p-4">
                    <Phone className="text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Phone
                    </h3>

                    <p className="mt-2 text-muted-foreground">
                      +62 812 3456 7890
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="rounded-2xl bg-violet-100 p-4">
                    <MapPin className="text-violet-600" />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Office
                    </h3>

                    <p className="mt-2 text-muted-foreground">
                      Jakarta, Indonesia
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </FadeUp>

          <FadeUp delay={0.2}>

            <form
              className="
                rounded-[36px]
                border
                border-border/60
                bg-background
                p-10
              "
            >

              <input
                placeholder="Your Name"
                className="mb-5 h-14 w-full rounded-2xl border px-5"
              />

              <input
                placeholder="Email Address"
                className="mb-5 h-14 w-full rounded-2xl border px-5"
              />

              <input
                placeholder="Company"
                className="mb-5 h-14 w-full rounded-2xl border px-5"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-2xl border p-5"
              />

              <Button
                className="
                  mt-6
                  h-14
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-600
                  via-violet-600
                  to-cyan-500
                "
              >
                Send Message
              </Button>

            </form>

          </FadeUp>

        </div>

      </SectionContainer>
    </section>
  );
}