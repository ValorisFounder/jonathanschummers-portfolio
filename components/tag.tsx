import { cn } from "@/lib/cn";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block",
        "border border-border-strong",
        "rounded-pill",
        "px-[10px] py-[4px]",
        "font-body font-semibold text-[11px] uppercase tracking-[0.08em]",
        "text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
