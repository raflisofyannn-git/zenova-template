interface Props {
  children: React.ReactNode;
}

export default function SectionBadge({
  children,
}: Props) {
  return (
    <span
      className="
        inline-flex
        rounded-full
        bg-primary/10
        px-4
        py-2
        text-sm
        font-semibold
        uppercase
        tracking-[0.2em]
        text-primary
      "
    >
      {children}
    </span>
  );
}