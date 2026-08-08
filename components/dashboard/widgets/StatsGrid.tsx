import StatsCard from "../cards/StatsCard";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-3 gap-5">

      <StatsCard
        title="Revenue"
        value="$245K"
      />

      <StatsCard
        title="Customers"
        value="8,420"
      />

      <StatsCard
        title="Growth"
        value="+32%"
      />

    </div>
  );
}
