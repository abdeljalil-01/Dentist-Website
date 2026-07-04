import { FieldError } from "react-hook-form";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FieldShellProps = {
  label: string;
  error?: FieldError;
  children: ReactNode;
};

export function FieldShell({ label, error, children }: FieldShellProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-brand-text">
      <span>{label}</span>
      {children}
      {error ? <span className="text-xs font-semibold text-rose-600">{error.message}</span> : null}
    </label>
  );
}

export const fieldClassName = cn(
  "min-h-12 rounded-2xl border border-brand-border bg-white px-4 text-sm text-brand-ink outline-none transition",
  "placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-blue-100"
);
