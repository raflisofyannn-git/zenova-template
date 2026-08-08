import SocialIcons from "./SocialIcons";

export default function FooterBottom() {
  return (
    <div
      className="
        mt-16
        flex
        flex-col
        items-center
        justify-between
        gap-6
        border-t
        border-white/10
        pt-8
        text-center
        lg:flex-row
        lg:text-left
      "
    >
      <p className="text-sm text-slate-500">
        © 2026 Zenova. All rights reserved.
      </p>

      <SocialIcons />
    </div>
  );
}