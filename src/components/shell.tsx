import {
  Briefcase,
  Home,
  MessageSquare,
  Phone,
  Search,
  Shield,
  User,
  Wrench,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { matchesQuery, searchIndex } from "@/lib/data";
import { cn } from "@/lib/utils";
import { IconBtn, Input, RallyMark, SectionLabel, buttonVariants } from "./ui";

export type Tab = "home" | "tools" | "resources" | "me";

export function TopBar({
  onCrisis,
  onSearch,
}: {
  onCrisis: () => void;
  onSearch: () => void;
}) {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-1 border-b border-border bg-bg px-2 pt-[max(0.4rem,env(safe-area-inset-top))] pb-1">
      <div className="flex min-w-0 flex-1 items-center gap-2 px-2 text-accent">
        <RallyMark className="size-6" />
        <span className="font-display text-lg font-semibold uppercase tracking-[0.16em]">
          Rally Point
        </span>
      </div>
      <IconBtn label="Search" onClick={onSearch}>
        <Search className="size-5" />
      </IconBtn>
      <button
        type="button"
        onClick={onCrisis}
        className="mr-1 inline-flex min-h-11 items-center gap-1.5 rounded-md border border-crisis px-3 text-sm font-medium text-crisis bg-transparent"
      >
        <Phone className="size-4" />
        Crisis
      </button>
    </header>
  );
}

export function BottomNav({
  tab,
  onTab,
}: {
  tab: Tab;
  onTab: (t: Tab) => void;
}) {
  const items: { id: Tab; label: string; icon: typeof Home }[] = [
    { id: "home", label: "Home", icon: Home },
    { id: "tools", label: "Tools", icon: Wrench },
    { id: "resources", label: "Resources", icon: Briefcase },
    { id: "me", label: "Me", icon: User },
  ];
  return (
    <nav
      className="absolute inset-x-0 bottom-0 z-20 border-t border-border bg-surface pb-[max(0.4rem,env(safe-area-inset-bottom))] pt-1"
      aria-label="Primary"
    >
      <ul className="grid grid-cols-4">
        {items.map((it) => {
          const on = tab === it.id;
          const Icon = it.icon;
          return (
            <li key={it.id}>
              <button
                type="button"
                onClick={() => onTab(it.id)}
                className={cn(
                  "flex min-h-14 w-full flex-col items-center justify-center gap-0.5 text-[11px] font-medium tracking-wide",
                  on ? "text-accent" : "text-muted",
                )}
                aria-current={on ? "page" : undefined}
              >
                <Icon className="size-5" strokeWidth={on ? 2.2 : 1.7} />
                {it.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function CrisisSheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="absolute inset-0 z-40 flex flex-col justify-end bg-bg-deep/70">
      <button
        type="button"
        className="flex-1"
        aria-label="Dismiss crisis sheet"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-labelledby="crisis-title"
        className="rounded-t-2xl border-t border-border bg-surface px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <SectionLabel>Veterans Crisis Line</SectionLabel>
            <h2 id="crisis-title" className="font-display text-3xl uppercase mt-1">
              You’re not alone. Pick one.
            </h2>
          </div>
          <IconBtn label="Close" onClick={onClose}>
            <X className="size-5" />
          </IconBtn>
        </div>
        <p className="mt-2 text-sm text-muted">
          24/7. Confidential. You do not need to be enrolled in VA.
        </p>
        <div className="mt-4 space-y-2">
          <a href="tel:988" className={buttonVariants({ variant: "crisis", block: true })}>
            <Phone className="size-4" />
            Dial 988, then press 1
          </a>
          <a href="sms:838255" className={buttonVariants({ variant: "secondary", block: true })}>
            <MessageSquare className="size-4" />
            Text 838255
          </a>
          <a
            href="https://www.veteranscrisisline.net/get-help-now/chat/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "secondary", block: true })}
          >
            Chat at VeteransCrisisLine.net
          </a>
          <a
            href="https://www.va.gov/find-locations/?facilityType=vet_center"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", block: true })}
          >
            <Shield className="size-4" />
            Local Vet Center / VA locator
          </a>
        </div>
        <p className="mt-3 text-xs text-subtle">
          If this is an emergency and someone is in immediate danger, call 911.
        </p>
      </div>
    </div>
  );
}

export function SearchOverlay({
  open,
  onClose,
  onOpen,
}: {
  open: boolean;
  onClose: () => void;
  onOpen: (screen: string) => void;
}) {
  const [q, setQ] = useState("");
  const index = useMemo(() => searchIndex(), []);
  const hits = useMemo(() => {
    if (!q.trim()) return index.slice(0, 8);
    return index.filter((r) => matchesQuery(q, r.title, r.blurb, r.kind)).slice(0, 20);
  }, [q, index]);

  if (!open) return null;
  return (
    <div className="absolute inset-0 z-30 flex flex-col bg-bg">
      <div className="flex items-center gap-1 px-2 pt-[max(0.5rem,env(safe-area-inset-top))]">
        <IconBtn label="Close search" onClick={onClose}>
          <X className="size-5" />
        </IconBtn>
        <Input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Claims, breathing, Vet Center, GI Bill…"
          aria-label="Search Rally Point"
          className="flex-1"
        />
      </div>
      <ul className="flex-1 overflow-y-auto px-4 py-3 space-y-2 pb-8">
        {hits.map((h) => {
          const tel = h.tel ? `tel:${h.tel}` : undefined;
          const sms = h.sms ? `sms:${h.sms}` : undefined;
          const href = tel || sms || h.href;
          const body = (
            <>
              <span className="text-[10px] uppercase tracking-widest text-sand">{h.kind}</span>
              <span className="block font-medium">{h.title}</span>
              <span className="block text-sm text-muted">{h.blurb}</span>
            </>
          );
          if (h.screen) {
            return (
              <li key={h.id}>
                <button
                  type="button"
                  className="w-full rounded-xl border border-border bg-surface p-3 text-left"
                  onClick={() => {
                    onOpen(h.screen!);
                    onClose();
                  }}
                >
                  {body}
                </button>
              </li>
            );
          }
          return (
            <li key={h.id}>
              <a
                href={href}
                target={h.href && !tel && !sms ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block rounded-xl border border-border bg-surface p-3"
              >
                {body}
              </a>
            </li>
          );
        })}
        {hits.length === 0 ? (
          <li className="text-sm text-muted px-1">Nothing for that. Try “PACT”, “988”, or “MOS”.</li>
        ) : null}
      </ul>
    </div>
  );
}
