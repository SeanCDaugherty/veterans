import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 min-h-11 px-4 text-[0.95rem] font-medium tracking-wide transition-[transform,background-color,border-color,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-fg rounded-md",
        secondary: "bg-surface-2 text-fg border border-border rounded-md",
        outline: "border border-border-strong text-fg rounded-md bg-transparent",
        ghost: "text-fg rounded-md bg-transparent",
        crisis: "bg-crisis text-crisis-fg rounded-md",
        sand: "bg-sand text-accent-fg rounded-md",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: { variant: "primary", block: false },
  },
);

export function Button({
  className,
  variant,
  block,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return (
    <button type={type} className={cn(buttonVariants({ variant, block }), className)} {...props} />
  );
}

export function IconBtn({
  className,
  label,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-md text-fg transition-transform duration-150 ease-out active:scale-[0.96]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Chip({
  active,
  children,
  onClick,
  className,
}: {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-11 rounded-full border px-3.5 text-sm font-medium transition-colors duration-150",
        active
          ? "border-accent bg-accent text-accent-fg"
          : "border-border bg-surface-2 text-fg",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium text-fg">{label}</span>
      {children}
      {hint ? <span className="block text-xs text-muted">{hint}</span> : null}
    </label>
  );
}

const inputClass =
  "w-full min-h-11 rounded-md border border-border bg-surface-2 px-3 text-fg placeholder:text-subtle";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      suppressHydrationWarning
      className={cn(inputClass, className)}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      suppressHydrationWarning
      className={cn(inputClass, "min-h-24 py-2.5", className)}
      {...props}
    />
  );
}

export function Toggle({
  checked,
  onChange,
  label,
  hint,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  hint?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-surface px-4 py-3 text-left min-h-14"
    >
      <span>
        <span className="block text-sm font-medium">{label}</span>
        {hint ? <span className="block text-xs text-muted mt-0.5">{hint}</span> : null}
      </span>
      <span
        className={cn(
          "relative h-6 w-11 shrink-0 rounded-full transition-colors duration-150",
          checked ? "bg-accent" : "bg-border-strong",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 size-5 rounded-full bg-fg transition-transform duration-150",
            checked && "translate-x-5",
          )}
        />
      </span>
    </button>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sand">
      {children}
    </p>
  );
}

export function RallyMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path fill="currentColor" d="M16 3.5 27 16.2 16 11.4 5 16.2Z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        d="M16 12.2 V27.5"
      />
    </svg>
  );
}

export function ExtLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-accent underline-offset-2 hover:underline",
        className,
      )}
    >
      {children}
    </a>
  );
}
