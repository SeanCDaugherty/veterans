import type { ReactNode } from "react";
import { ChevronLeft, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconBtn, SectionLabel } from "./ui";
import type { Official } from "@/lib/data";

export function Screen({
  title,
  onBack,
  children,
  kicker,
}: {
  title: string;
  onBack?: () => void;
  children: ReactNode;
  kicker?: string;
}) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-10 flex items-center gap-1 border-b border-border bg-bg/95 px-2 py-2 backdrop-blur-sm">
        {onBack ? (
          <IconBtn label="Back" onClick={onBack}>
            <ChevronLeft className="size-6" />
          </IconBtn>
        ) : (
          <span className="w-2" />
        )}
        <div className="min-w-0 flex-1">
          {kicker ? <SectionLabel>{kicker}</SectionLabel> : null}
          <h1 className="truncate font-display text-2xl font-semibold uppercase leading-tight">
            {title}
          </h1>
        </div>
      </header>
      <div className="flex-1 space-y-4 px-4 py-4 pb-28">{children}</div>
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-border bg-surface-2 px-3 py-2.5 text-sm text-muted">
      {children}
    </p>
  );
}

export function LinkRow({
  item,
  onOpen,
}: {
  item: Official;
  onOpen?: () => void;
}) {
  const tel = item.tel ? `tel:${item.tel}` : undefined;
  const sms = item.sms ? `sms:${item.sms}` : undefined;
  const href = tel || sms || item.href;
  const inner = (
    <>
      <span className="min-w-0 flex-1">
        <span className="block font-medium">{item.title}</span>
        <span className="mt-0.5 block text-sm text-muted">{item.blurb}</span>
      </span>
      {item.tel ? (
        <Phone className="size-4 shrink-0 text-sand" aria-hidden />
      ) : null}
    </>
  );
  const cls = cn(
    "flex w-full items-start gap-3 rounded-xl border border-border bg-surface p-4 text-left min-h-14",
  );
  if (!href) {
    return (
      <div className={cls} onClick={onOpen}>
        {inner}
      </div>
    );
  }
  return (
    <a
      className={cls}
      href={href}
      target={item.href && !tel && !sms ? "_blank" : undefined}
      rel={item.href && !tel && !sms ? "noopener noreferrer" : undefined}
    >
      {inner}
    </a>
  );
}

export function RowButton({
  title,
  blurb,
  onClick,
}: {
  title: string;
  blurb: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full min-h-14 flex-col items-start rounded-xl border border-border bg-surface p-4 text-left"
    >
      <span className="font-medium">{title}</span>
      <span className="text-sm text-muted">{blurb}</span>
    </button>
  );
}
