import FooterCTA from "@/components/footer/FooterCTA";
import FooterLinks from "@/components/footer/FooterLinks";
import FooterBottom from "@/components/footer/FooterBottom";

export default function Footer() {
  return (
    <>
      <FooterCTA />

      <footer
        className="
          border-t
          border-border/40
          bg-slate-950
          text-white
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-8
            py-20
          "
        >
          <FooterLinks />

          <FooterBottom />
        </div>
      </footer>
    </>
  );
}