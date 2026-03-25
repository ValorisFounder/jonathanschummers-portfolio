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
        "font-body font-semibold text-label uppercase tracking-label",
        "text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
