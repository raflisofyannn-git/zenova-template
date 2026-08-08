const members = [
  {
    name: "Emma Wilson",
    role: "UI Designer",
    color: "from-indigo-500 to-violet-500",
  },
  {
    name: "Michael Brown",
    role: "Developer",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Sophia Lee",
    role: "Marketing",
    color: "from-pink-500 to-violet-500",
  },
];

export default function TeamMembers() {
  return (
    <div
      className="
        rounded-[28px]
        border
        border-border/60
        bg-white/80
        p-6
        backdrop-blur-xl
      "
    >
      <h3 className="text-lg font-bold">
        Team Members
      </h3>

      <div className="mt-6 space-y-5">

        {members.map((member) => (

          <div
            key={member.name}
            className="flex items-center gap-4"
          >

            <div
              className={`
                h-12
                w-12
                rounded-full
                bg-gradient-to-br
                ${member.color}
              `}
            />

            <div className="flex-1">

              <h4 className="font-semibold">
                {member.name}
              </h4>

              <p className="text-sm text-muted-foreground">
                {member.role}
              </p>

            </div>

            <div
              className="
                h-3
                w-3
                rounded-full
                bg-emerald-500
              "
            />

          </div>

        ))}

      </div>
    </div>
  );
}