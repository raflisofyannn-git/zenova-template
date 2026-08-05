import ShowcaseContent from "./ShowcaseContent";
import ShowcaseImage from "./ShowcaseImage";

export default function Showcase() {
  return (
    <section className="py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-8 lg:flex-row">
        <ShowcaseContent />

        <ShowcaseImage />
      </div>
    </section>
  );
}