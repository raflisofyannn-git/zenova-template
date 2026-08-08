export default function FloatingShape() {
  return (
    <>
      <div
        className="
          absolute
          left-20
          top-32
          h-40
          w-40
          rounded-full
          bg-indigo-500/10
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          right-20
          top-96
          h-56
          w-56
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-20
          left-1/2
          h-60
          w-60
          -translate-x-1/2
          rounded-full
          bg-violet-500/10
          blur-[120px]
        "
      />
    </>
  );
}