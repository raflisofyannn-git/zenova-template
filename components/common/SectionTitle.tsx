interface Props {
  children: React.ReactNode;
}

export default function SectionTitle({
  children,
}: Props) {
  return (
    <h2
      className="
        mt-8
        max-w-3xl
        text-4xl
        font-bold
        leading-tight
        lg:text-5xl
      "
    >
      {children}
    </h2>
  );
}