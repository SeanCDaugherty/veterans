import { CARDS, ERAS, PROFILES } from "@/lib/data";
import { useRally, type CardId } from "@/lib/store";
import { Button, Card, SectionLabel, Toggle } from "@/components/ui";
import { Note, Screen } from "@/components/screen";

export function MeHub({
  onOpen,
}: {
  onOpen: (id: string) => void;
}) {
  const name = useRally((s) => s.name);
  const era = useRally((s) => s.era);
  const eraLabel = ERAS.find((e) => e.id === era)?.label ?? "Not set";
  return (
    <Screen title="Me" kicker="Yours">
      <Card>
        <p className="font-display text-3xl uppercase">{name || "No name set"}</p>
        <p className="text-sm text-muted mt-1">{eraLabel}</p>
        <p className="text-sm text-muted mt-2">
          No account. Data stays on this device unless you follow a link out.
        </p>
      </Card>
      <button
        type="button"
        onClick={() => onOpen("customize")}
        className="flex w-full min-h-14 flex-col items-start rounded-xl border border-border bg-surface p-4 text-left"
      >
        <span className="font-medium">Customize home</span>
        <span className="text-sm text-muted">Pin, hide, reorder. Ten seconds.</span>
      </button>
      <button
        type="button"
        onClick={() => onOpen("display")}
        className="flex w-full min-h-14 flex-col items-start rounded-xl border border-border bg-surface p-4 text-left"
      >
        <span className="font-medium">Display & access</span>
        <span className="text-sm text-muted">High contrast, large text, motion, voice, haptics.</span>
      </button>
      <button
        type="button"
        onClick={() => onOpen("profiles")}
        className="flex w-full min-h-14 flex-col items-start rounded-xl border border-border bg-surface p-4 text-left"
      >
        <span className="font-medium">Three sample homes</span>
        <span className="text-sm text-muted">Claims. PTSD / sleep. Job search.</span>
      </button>
      <button
        type="button"
        onClick={() => onOpen("manual")}
        className="flex w-full min-h-14 flex-col items-start rounded-xl border border-border bg-surface p-4 text-left"
      >
        <span className="font-medium">Field manual</span>
        <span className="text-sm text-muted">IA, palette, how this is built.</span>
      </button>
      <button
        type="button"
        onClick={() => onOpen("privacy")}
        className="flex w-full min-h-14 flex-col items-start rounded-xl border border-border bg-surface p-4 text-left"
      >
        <span className="font-medium">Privacy & data</span>
        <span className="text-sm text-muted">Export. Wipe. No cloud.</span>
      </button>
    </Screen>
  );
}

export function Customize({ onBack }: { onBack: () => void }) {
  const pins = useRally((s) => s.pins);
  const hidden = useRally((s) => s.hidden);
  const setPins = useRally((s) => s.setPins);
  const toggleHidden = useRally((s) => s.toggleHidden);
  const movePin = useRally((s) => s.movePin);
  const pinCard = useRally((s) => s.pinCard);

  return (
    <Screen title="Customize home" onBack={onBack}>
      <Note>Top of this list is top of Home. Hidden cards still live in Tools.</Note>
      <SectionLabel>On home</SectionLabel>
      {pins.map((id, i) => {
        const c = CARDS.find((x) => x.id === id);
        if (!c) return null;
        const hid = hidden.includes(id);
        return (
          <div
            key={id}
            className="flex items-center gap-2 rounded-xl border border-border bg-surface p-3"
          >
            <div className="flex-1 min-w-0">
              <p className="font-medium">{c.title}</p>
              <p className="text-xs text-muted">{hid ? "Hidden" : "Visible"}</p>
            </div>
            <button type="button" className="min-h-11 px-2 text-sm" disabled={i === 0} onClick={() => movePin(id, -1)}>
              Up
            </button>
            <button
              type="button"
              className="min-h-11 px-2 text-sm"
              disabled={i === pins.length - 1}
              onClick={() => movePin(id, 1)}
            >
              Down
            </button>
            <button type="button" className="min-h-11 px-2 text-sm text-sand" onClick={() => toggleHidden(id)}>
              {hid ? "Show" : "Hide"}
            </button>
            <button
              type="button"
              className="min-h-11 px-2 text-sm text-crisis"
              onClick={() => setPins(pins.filter((p) => p !== id))}
            >
              Unpin
            </button>
          </div>
        );
      })}
      <SectionLabel>Available</SectionLabel>
      {CARDS.filter((c) => !pins.includes(c.id as CardId)).map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => pinCard(c.id)}
          className="flex w-full min-h-12 items-center justify-between rounded-xl border border-border bg-surface px-4 text-left"
        >
          <span>
            <span className="block font-medium">{c.title}</span>
            <span className="block text-xs text-muted">{c.blurb}</span>
          </span>
          <span className="text-xs uppercase tracking-widest text-sand">Pin</span>
        </button>
      ))}
    </Screen>
  );
}

export function Display({ onBack }: { onBack: () => void }) {
  const highContrast = useRally((s) => s.highContrast);
  const largeText = useRally((s) => s.largeText);
  const reduceMotion = useRally((s) => s.reduceMotion);
  const voiceOn = useRally((s) => s.voiceOn);
  const hapticOn = useRally((s) => s.hapticOn);
  const setPref = useRally((s) => s.setPref);
  return (
    <Screen title="Display & access" onBack={onBack}>
      <Toggle
        checked={highContrast}
        onChange={(v) => setPref("highContrast", v)}
        label="High contrast"
        hint="Stronger borders. Brighter type."
      />
      <Toggle
        checked={largeText}
        onChange={(v) => setPref("largeText", v)}
        label="Large text"
        hint="Bumps the whole interface. VoiceOver still works."
      />
      <Toggle
        checked={reduceMotion}
        onChange={(v) => setPref("reduceMotion", v)}
        label="Reduce motion"
        hint="No expanding ring. No sliding chrome."
      />
      <Toggle
        checked={voiceOn}
        onChange={(v) => setPref("voiceOn", v)}
        label="Calm voice on breathe"
        hint="Uses the phone’s speech engine. Off by default."
      />
      <Toggle
        checked={hapticOn}
        onChange={(v) => setPref("hapticOn", v)}
        label="Haptics on breathe"
        hint="A short buzz on each phase. Silence if the device can’t."
      />
    </Screen>
  );
}

export function Profiles({ onBack }: { onBack: () => void }) {
  const load = useRally((s) => s.loadProfile);
  return (
    <Screen title="Sample homes" onBack={onBack}>
      <Note>
        Three veterans. Three home screens. Loads the cards they would actually
        keep. Your logs stay put.
      </Note>
      {PROFILES.map((p) => (
        <Card key={p.id}>
          <p className="text-xs uppercase tracking-widest text-sand">{p.title}</p>
          <p className="font-display text-3xl uppercase mt-1">{p.callsign}</p>
          <p className="mt-2 text-sm text-muted">{p.blurb}</p>
          <p className="mt-2 text-xs text-subtle">
            Home: {p.pins.map((id) => CARDS.find((c) => c.id === id)?.title).join(" · ")}
          </p>
          <Button
            className="mt-3"
            onClick={() => {
              load({
                name: p.callsign,
                era: p.era,
                struggles: p.struggles,
                pins: p.pins,
              });
              onBack();
            }}
          >
            Load this home
          </Button>
        </Card>
      ))}
    </Screen>
  );
}

export function Privacy({ onBack }: { onBack: () => void }) {
  const resetAll = useRally((s) => s.resetAll);
  function exportJson() {
    const raw = localStorage.getItem("rally-point-v1");
    const blob = new Blob([raw ?? "{}"], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rally-point-data.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <Screen title="Privacy & data" onBack={onBack}>
      <Note>
        Core tools do not require an account. Mood, PCL-5, meds, safety plan,
        and ratings live in this browser. Clearing site data wipes them.
      </Note>
      <Button variant="secondary" block onClick={exportJson}>
        Export my data
      </Button>
      <Button
        variant="crisis"
        block
        onClick={() => {
          if (confirm("Wipe Rally Point data on this device?")) resetAll();
        }}
      >
        Wipe this device
      </Button>
    </Screen>
  );
}

export function Manual({ onBack }: { onBack: () => void }) {
  return (
    <Screen title="Field manual" onBack={onBack}>
      <SectionLabel>Mission</SectionLabel>
      <p className="text-sm text-muted">
        The single customizable home base for combat veterans. A trusted battle
        buddy: calm, direct, never overwhelming, instantly useful in a crisis or
        on a quiet Tuesday.
      </p>
      <SectionLabel>Information architecture</SectionLabel>
      <Card>
        <pre className="whitespace-pre-wrap text-xs leading-5 text-muted font-sans">
{`Onboarding (60s)
  Era → Struggles → Home cards

Shell
  Crisis (always) · Search
  Home    — pinned cards + skippable mission
  Tools   — breathe, ground, thought, distress,
            sleep, mood, anger, PCL-5, safety,
            official VA apps
  Resources — claims, rating/back pay, MOS/jobs,
              GI Bill, housing, family, local, PT,
              directory of numbers
  Me — customize, display, sample homes, privacy`}
        </pre>
      </Card>
      <SectionLabel>Palette</SectionLabel>
      <div className="grid grid-cols-3 gap-2">
        {[
          ["#0d1210", "Field"],
          ["#161c18", "Surface"],
          ["#8f9b72", "Olive"],
          ["#e6e4d8", "Parchment"],
          ["#c4b496", "Sand"],
          ["#b85c4a", "Crisis"],
        ].map(([hex, label]) => (
          <div key={hex} className="rounded-xl border border-border overflow-hidden">
            <div className="h-12" style={{ background: hex }} />
            <p className="px-2 py-1.5 text-[11px]">
              {label}
              <span className="block text-subtle">{hex}</span>
            </p>
          </div>
        ))}
      </div>
      <SectionLabel>Type</SectionLabel>
      <p className="font-display text-3xl uppercase">Barlow Condensed</p>
      <p className="text-sm text-muted">Source Sans 3 for body. Large targets. No sudden motion.</p>
      <SectionLabel>Principles</SectionLabel>
      <ul className="text-sm text-muted space-y-1 list-disc pl-4">
        <li>Dark mode default. Muted navy / olive / earth.</li>
        <li>Four tabs. Everything else is search or a card.</li>
        <li>Veteran decides what stays on Home.</li>
        <li>Suggest official VA tools instead of cloning them.</li>
        <li>Copy like a fellow veteran. Short sentences. No lectures.</li>
      </ul>
    </Screen>
  );
}
