interface Props {
  children: React.ReactNode;
}

export default function SectionDescription({
  children,
}: Props) {
  return (
    <p
      className="
        mt-6
        max-w-2xl
        text-lg
        leading-8
        text-muted-foreground
      "
    >
      {children}
    </p>
  );
}