interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-7xl
        px-6
        sm:px-8
        lg:px-10
        ${className}
      `}
    >
      {children}
    </div>
  );
}
