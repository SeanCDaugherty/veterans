import {
  Activity,
  Briefcase,
  Calendar,
  CircleDot,
  FileText,
  Flame,
  GraduationCap,
  HeartPulse,
  Home as HomeIcon,
  MapPin,
  Moon,
  Pill,
  Shield,
  Users,
  Wind,
} from "lucide-react";
import { CARDS, missionForDate } from "@/lib/data";
import { useRally, type CardId } from "@/lib/store";
import { todayKey, greetingForHour } from "@/lib/utils";
import { Button, Card, SectionLabel } from "@/components/ui";
import { combineRatings, formatUsd, monthlyFor } from "@/lib/va-math";

const ICONS: Record<CardId, typeof Wind> = {
  breathe: Wind,
  grounding: CircleDot,
  mood: Activity,
  sleep: Moon,
  anger: Flame,
  safety: Shield,
  claims: FileText,
  rating: FileText,
  jobs: Briefcase,
  "gi-bill": GraduationCap,
  family: Users,
  meds: Pill,
  appointments: Calendar,
  community: MapPin,
  pt: HeartPulse,
};

export function HomeScreen({
  onOpen,
  onCustomize,
}: {
  onOpen: (id: string) => void;
  onCustomize: () => void;
}) {
  const name = useRally((s) => s.name);
  const pins = useRally((s) => s.pins);
  const hidden = useRally((s) => s.hidden);
  const skip = useRally((s) => s.skippedMissionOn);
  const skipMission = useRally((s) => s.skipMission);
  const ratings = useRally((s) => s.ratings);
  const moodLog = useRally((s) => s.moodLog);
  const meds = useRally((s) => s.meds);
  const takenMap = useRally((s) => s.takenMedsOn);
  const appointments = useRally((s) => s.appointments);

  const hour = new Date().getHours();
  const greet = greetingForHour(hour);
  const who = name.trim() || "You're in.";
  const mission = missionForDate();
  const showMission = skip !== todayKey();
  const visible = pins.filter((id) => !hidden.includes(id));
  const combined = combineRatings(ratings.map((r) => r.value));
  const taken = takenMap[todayKey()] ?? [];

  return (
    <div className="px-4 pb-28 pt-3 space-y-4">
      <div>
        <SectionLabel>{greet}</SectionLabel>
        <h1 className="font-display text-[2.15rem] font-semibold uppercase leading-none mt-1">
          {who}
        </h1>
        <p className="mt-2 text-sm text-muted max-w-[36ch]">
          Your rally point. Only what you asked for. Crisis is one tap up top.
        </p>
      </div>

      {showMission ? (
        <Card>
          <SectionLabel>Mission of the day</SectionLabel>
          <p className="mt-2 text-[0.95rem]">{mission}</p>
          <div className="mt-3 flex gap-2">
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => onOpen("breathe")}
            >
              Do it
            </Button>
            <Button variant="ghost" className="flex-1" onClick={skipMission}>
              Skip
            </Button>
          </div>
        </Card>
      ) : null}

      <div className="flex items-center justify-between">
        <SectionLabel>Home cards</SectionLabel>
        <button
          type="button"
          onClick={onCustomize}
          className="text-sm text-accent min-h-11 px-1"
        >
          Edit
        </button>
      </div>

      <div className="grid gap-3">
        {visible.map((id) => {
          const def = CARDS.find((c) => c.id === id);
          if (!def) return null;
          const Icon = ICONS[id];
          let extra: string | null = null;
          if (id === "rating") {
            extra = `Combined ~${combined.rounded}% · ${formatUsd(monthlyFor(combined.rounded))}/mo veteran-alone`;
          }
          if (id === "mood" && moodLog[0]) {
            extra = `Last check-in: ${moodLog[0].mood}/5`;
          }
          if (id === "meds" && meds.length) {
            extra = `${taken.length}/${meds.length} taken today`;
          }
          if (id === "appointments" && appointments.length) {
            extra = `${appointments.length} on the board`;
          }
          return (
            <button
              key={id}
              type="button"
              onClick={() => onOpen(def.screen)}
              className="flex min-h-20 items-center gap-3 rounded-2xl border border-border bg-surface p-4 text-left"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-md bg-surface-2 text-accent">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-xl font-semibold uppercase leading-none">
                  {def.title}
                </span>
                <span className="mt-1 block text-sm text-muted">
                  {extra ?? def.blurb}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <Card>
          <p className="text-sm text-muted">
            Home is empty on purpose — or by accident. Pin a card.
          </p>
          <Button className="mt-3" block onClick={onCustomize}>
            Choose cards
          </Button>
        </Card>
      ) : null}

      <button
        type="button"
        onClick={() => onOpen("directory")}
        className="flex w-full items-center gap-2 rounded-xl border border-dashed border-border px-4 py-3 text-left text-sm text-muted"
      >
        <HomeIcon className="size-4" />
        Need something that isn’t here? Search, or open Resources.
      </button>
    </div>
  );
}
