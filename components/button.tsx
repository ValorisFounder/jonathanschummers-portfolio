import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "brand" | "outline";
type ButtonSize = "default" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  invert?: boolean;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "default",
  invert = false,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center",
    "font-body font-semibold",
    size === "xl" ? "text-body-lg px-lg py-sm" : "text-body px-md py-[12px]",
    "rounded-sm",
    "transition-all duration-[var(--dur-fast)] ease-out",
    "focus-visible:outline-2 focus-visible:outline-fg focus-visible:outline-offset-2",
    "active:scale-[0.98]",
    "disabled:cursor-not-allowed disabled:bg-disabled-bg disabled:text-disabled-fg disabled:pointer-events-none"
  );

  const variants: Record<string, string> = {
    primary: invert
      ? "bg-invert-bg text-invert-fg [@media(hover:hover){&:hover}]:bg-border-strong [@media(hover:hover){&:hover}]:brightness-108 active:brightness-[1.08]"
      : "bg-btn-primary text-btn-primary-fg [@media(hover:hover){&:hover}]:bg-btn-primary-hover active:bg-btn-primary-hover active:brightness-[1.08]",
    brand:
      "bg-accent text-white [@media(hover:hover){&:hover}]:bg-accent-hover active:bg-accent-hover active:brightness-[1.08]",
    outline: invert
      ? "border border-border-strong text-invert-fg bg-transparent [@media(hover:hover){&:hover}]:bg-invert-fg/10 active:bg-invert-fg/15"
      : "border border-border-strong text-text-primary bg-transparent [@media(hover:hover){&:hover}]:bg-surface active:bg-border",
  };

  const cls = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
