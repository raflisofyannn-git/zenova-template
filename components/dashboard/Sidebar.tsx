import {
  LayoutDashboard,
  BarChart3,
  Users,
  FolderKanban,
  Settings,
} from "lucide-react";

const menus = [
  LayoutDashboard,
  BarChart3,
  Users,
  FolderKanban,
  Settings,
];

export default function Sidebar() {
  return (
    <aside className="flex w-16 flex-col items-center gap-6 border-r py-6">
      {menus.map((Icon, index) => (
        <button
          key={index}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            text-muted-foreground
            transition
            hover:bg-primary
            hover:text-white
          "
        >
          <Icon size={18} />
        </button>
      ))}
    </aside>
  );
}