import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "brand" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  invert?: boolean;
  href?: string;
}

export function Button({
  variant = "primary",
  invert = false,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center",
    "font-body font-semibold text-[14px]",
    "px-md py-[12px]",
    "rounded-sm",
    "transition-colors duration-[var(--dur-fast)] ease-out",
    "focus-visible:outline-2 focus-visible:outline-fg focus-visible:outline-offset-2",
    "active:scale-[0.98]",
    "disabled:cursor-not-allowed disabled:bg-disabled-bg disabled:text-disabled-fg"
  );

  const variants: Record<string, string> = {
    primary: invert
      ? "bg-invert-bg text-invert-fg [@media(hover:hover){&:hover}]:bg-[#e4e4e7]"
      : "bg-fg text-bg [@media(hover:hover){&:hover}]:bg-[#3f3f47]",
    brand:
      "bg-accent text-white [@media(hover:hover){&:hover}]:bg-accent-hover",
    outline: invert
      ? "border border-border-strong text-invert-fg bg-transparent [@media(hover:hover){&:hover}]:bg-invert-bg [@media(hover:hover){&:hover}]:text-invert-fg"
      : "border border-border-strong text-fg bg-transparent [@media(hover:hover){&:hover}]:bg-fg [@media(hover:hover){&:hover}]:text-bg",
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
