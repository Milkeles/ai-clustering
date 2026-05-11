import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: Readonly<LogoProps>) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Three small clustered points — a tiny clustering visual mark */}
        <circle cx="8" cy="8" r="3" fill="var(--primary)" />
        <circle cx="20" cy="10" r="3" fill="var(--secondary)" />
        <circle cx="14" cy="20" r="3" fill="var(--chart-3)" />
      </svg>
      <span className="text-sm font-bold tracking-[0.2em] uppercase text-foreground">
        Clusters
      </span>
    </div>
  );
}