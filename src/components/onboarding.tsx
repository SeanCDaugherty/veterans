import { useMemo, useState } from "react";
import { CARDS, ERAS, STRUGGLES, defaultPinsFor } from "@/lib/data";
import type { CardId, Era, Struggle } from "@/lib/store";
import { useRally } from "@/lib/store";
import { Button, Chip, Input, RallyMark, SectionLabel } from "./ui";

const STEPS = 4;

export function Onboarding({ onDemo }: { onDemo: () => void }) {
  const complete = useRally((s) => s.completeOnboarding);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [era, setEra] = useState<Era | "">("");
  const [struggles, setStruggles] = useState<Struggle[]>([]);
  const suggested = useMemo(() => defaultPinsFor(struggles), [struggles]);
  const [pins, setPins] = useState<CardId[]>([]);
  const activePins = pins.length ? pins : suggested;

  function toggleStruggle(id: Struggle) {
    setStruggles((cur) =>
      cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id],
    );
    setPins([]);
  }

  function togglePin(id: CardId) {
    const base = pins.length ? pins : suggested;
    setPins(
      base.includes(id) ? base.filter((x) => x !== id) : [...base, id],
    );
  }

  function finish() {
    complete({
      name: name.trim(),
      era,
      struggles,
      pins: activePins.slice(0, 8),
    });
  }

  return (
    <div className="flex min-h-dvh flex-col bg-bg px-5 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))]">
      <header className="flex items-center gap-2 text-accent">
        <RallyMark className="size-7" />
        <span className="font-display text-xl font-semibold tracking-[0.14em] uppercase">
          Rally Point
        </span>
      </header>

      <p className="mt-6 text-sm text-muted">
        {step + 1} of {STEPS}
      </p>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-surface-2">
        <div
          className="h-full bg-accent transition-[width] duration-250 ease-out"
          style={{ width: `${((step + 1) / STEPS) * 100}%` }}
        />
      </div>

      <div className="mt-8 flex-1">
        {step === 0 && (
          <div className="space-y-5">
            <h1 className="font-display text-4xl font-semibold uppercase">
              You made it in.
            </h1>
            <p className="text-muted max-w-[34ch]">
              This is a civilian CP. Dark. Quiet. Yours. No account. Nothing
              leaves this phone unless you tap a link out.
            </p>
            <label className="block space-y-2">
              <SectionLabel>What do we call you?</SectionLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name or callsign — optional"
                autoComplete="given-name"
              />
            </label>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5">
            <h1 className="font-display text-4xl font-semibold uppercase">
              Era
            </h1>
            <p className="text-muted">Helps us point you at the right doors. Skip if you want.</p>
            <div className="grid gap-2">
              {ERAS.map((e) => (
                <button
                  key={e.id}
                  type="button"
                  onClick={() => setEra(e.id)}
                  className={`min-h-14 rounded-xl border px-4 py-3 text-left transition-colors duration-150 ${
                    era === e.id
                      ? "border-accent bg-surface-2"
                      : "border-border bg-surface"
                  }`}
                >
                  <span className="block font-medium">{e.label}</span>
                  <span className="block text-xs text-muted">{e.hint}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <h1 className="font-display text-4xl font-semibold uppercase">
              What’s hitting you hardest right now?
            </h1>
            <p className="text-muted">Tap all that apply. This builds your home screen.</p>
            <div className="flex flex-wrap gap-2">
              {STRUGGLES.map((s) => (
                <Chip
                  key={s.id}
                  active={struggles.includes(s.id)}
                  onClick={() => toggleStruggle(s.id)}
                >
                  {s.label}
                </Chip>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <h1 className="font-display text-4xl font-semibold uppercase">
              Your home screen
            </h1>
            <p className="text-muted">
              Only these cards land on Home. Change it any time in ten seconds.
            </p>
            <div className="grid gap-2">
              {CARDS.map((c) => {
                const on = activePins.includes(c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => togglePin(c.id)}
                    className={`flex min-h-14 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left ${
                      on ? "border-accent bg-surface-2" : "border-border bg-surface"
                    }`}
                  >
                    <span>
                      <span className="block font-medium">{c.title}</span>
                      <span className="block text-xs text-muted">{c.blurb}</span>
                    </span>
                    <span className="text-xs uppercase tracking-widest text-sand">
                      {on ? "On" : "Off"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 space-y-2">
        {step < 3 ? (
          <Button block onClick={() => setStep((s) => s + 1)}>
            Continue
          </Button>
        ) : (
          <Button block onClick={finish}>
            Set my rally point
          </Button>
        )}
        {step > 0 ? (
          <Button variant="ghost" block onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
        ) : (
          <Button variant="ghost" block onClick={onDemo}>
            Show me three sample homes
          </Button>
        )}
      </div>
    </div>
  );
}
