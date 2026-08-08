interface Props {
  children: React.ReactNode;
}

export default function SectionDescription({
  children,
}: Props) {
  return (
    <p
      className="
        mx-auto
        mt-6
        max-w-2xl
        text-base
        leading-7
        text-muted-foreground
        sm:text-lg
        sm:leading-8
      "
    >
      {children}
    </p>
  );
}