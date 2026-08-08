import StatsCard from "../cards/StatsCard";

const stats = [
  {
    title: "Revenue",
    value: "$120K",
    change: "+18.2%",
  },
  {
    title: "Orders",
    value: "2,540",
    change: "+12.4%",
  },
  {
    title: "Clients",
    value: "540",
    change: "+9.8%",
  },
  {
    title: "Growth",
    value: "18%",
    change: "+4.3%",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <StatsCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
        />
      ))}
    </div>
  );
}