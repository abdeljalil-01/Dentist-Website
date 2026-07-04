import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white shadow-glow hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:ring-brand-blue",
  secondary:
    "border border-brand-border bg-white text-brand-ink shadow-soft hover:-translate-y-0.5 hover:border-blue-200 hover:text-brand-blue focus-visible:ring-brand-blue",
  ghost:
    "text-brand-text hover:bg-slate-100 hover:text-brand-blue focus-visible:ring-brand-blue",
  dark:
    "bg-brand-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:ring-brand-ink"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  )
);

Button.displayName = "Button";
