interface Props {
  children: React.ReactNode;
}

export default function SectionContainer({
  children,
}: Props) {
  return (
    <div className="mx-auto max-w-7xl px-8">
      {children}
    </div>
  );
}