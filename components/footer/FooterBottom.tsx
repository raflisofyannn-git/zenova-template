import SocialIcons from "./SocialIcons";

export default function FooterBottom() {
  return (
    <div
      className="
        mt-20
        flex
        flex-col
        items-center
        justify-between
        gap-8
        border-t
        border-border/40
        pt-8
        lg:flex-row
      "
    >
      <p className="text-sm text-slate-400">
        © 2026 Aureon. All rights reserved.
      </p>

      <SocialIcons />
    </div>
  );
}