import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
        A
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight">
          {siteConfig.name}
        </h1>

        <p className="text-xs text-muted-foreground">
          Premium Template
        </p>
      </div>
    </Link>
  );
}