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
        "rounded-md",
        "px-[10px] py-[6px]", /* px: Figma exact (10px), intentional exception off 8px grid */
        "font-body font-medium text-tag",
        "text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
