import { cn } from "@/lib/cn";

interface BrowserFrameProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export function BrowserFrame({ url, children, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "rounded-[12px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-[10px] bg-surface border-b border-border px-[16px] py-[12px]">
        {/* Traffic light dots */}
        <div className="flex gap-[6px]">
          <span className="size-[10px] rounded-full bg-[#ef4444]" />
          <span className="size-[10px] rounded-full bg-[#f59e0b]" />
          <span className="size-[10px] rounded-full bg-[#22c55e]" />
        </div>
        {/* URL bar */}
        <div className="flex-1 rounded-md bg-background px-[12px] py-[6px] text-[12px] text-text-tertiary truncate">
          {url}
        </div>
      </div>

      {/* Viewport */}
      <div className="bg-background">
        {children}
      </div>
    </div>
  );
}
