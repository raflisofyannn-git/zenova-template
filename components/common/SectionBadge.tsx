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
        items-center
        rounded-full
        border
        border-indigo-200
        bg-indigo-50
        px-4
        py-2
        text-xs
        font-bold
        uppercase
        tracking-[0.16em]
        text-indigo-600
      "
    >
      {children}
    </span>
  );
}