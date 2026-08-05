import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">

      <StatsCard
        title="Revenue"
        value="$120K"
      />

      <StatsCard
        title="Orders"
        value="2,540"
      />

      <StatsCard
        title="Clients"
        value="540"
      />

    </div>
  );
}