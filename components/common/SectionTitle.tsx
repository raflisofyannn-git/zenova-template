interface Props {
  children: React.ReactNode;
}

export default function SectionTitle({
  children,
}: Props) {
  return (
    <h2
      className="
        mt-5
        text-4xl
        font-black
        leading-tight
        tracking-tight
        sm:text-5xl
        lg:text-6xl
      "
    >
      {children}
    </h2>
  );
}
