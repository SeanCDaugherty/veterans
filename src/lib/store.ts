import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { todayKey } from "./utils";
import { defaultPinsFor } from "./data";

export type Era =
  | "oef-oif-ond"
  | "gwot"
  | "desert-storm"
  | "vietnam"
  | "korea-wwii"
  | "other"
  | "prefer-not";

export type Struggle =
  | "sleep"
  | "claims"
  | "job"
  | "family"
  | "anger"
  | "isolation"
  | "ptsd"
  | "pain"
  | "money";

export type CardId =
  | "breathe"
  | "grounding"
  | "mood"
  | "sleep"
  | "anger"
  | "safety"
  | "claims"
  | "rating"
  | "jobs"
  | "gi-bill"
  | "family"
  | "meds"
  | "appointments"
  | "community"
  | "pt";

export type BreatheTechnique =
  | "box"
  | "tactical"
  | "478"
  | "diaphragm";

export type MoodEntry = {
  id: string;
  date: string;
  mood: number;
  note: string;
};

export type AngerEntry = {
  id: string;
  date: string;
  level: number;
  trigger: string;
};

export type PclEntry = {
  id: string;
  date: string;
  scores: number[];
};

export type SafetyPlan = {
  warningSigns: string;
  coping: string;
  peoplePlaces: string;
  helpPeople: string;
  professionals: string;
  environment: string;
  reasons: string;
};

export type Med = {
  id: string;
  name: string;
  dose: string;
  time: string;
};

export type Appointment = {
  id: string;
  title: string;
  when: string;
  where: string;
};

export type ResumeDraft = {
  name: string;
  mos: string;
  years: string;
  summary: string;
  skills: string;
  bullets: string;
};

type RallyState = {
  onboarded: boolean;
  name: string;
  era: Era | "";
  struggles: Struggle[];
  pins: CardId[];
  hidden: CardId[];
  highContrast: boolean;
  largeText: boolean;
  reduceMotion: boolean;
  voiceOn: boolean;
  hapticOn: boolean;
  breatheTechnique: BreatheTechnique;
  breatheMinutes: number;
  breatheSound: "off" | "brown";
  skippedMissionOn: string;
  moodLog: MoodEntry[];
  angerLog: AngerEntry[];
  pclLog: PclEntry[];
  safetyPlan: SafetyPlan;
  meds: Med[];
  takenMedsOn: Record<string, string[]>;
  appointments: Appointment[];
  ratings: { id: string; label: string; value: number; bilateral: boolean }[];
  resume: ResumeDraft;
  giMonths: number;
  giBah: number;

  completeOnboarding: (p: {
    name: string;
    era: Era | "";
    struggles: Struggle[];
    pins: CardId[];
  }) => void;
  loadProfile: (p: {
    name: string;
    era: Era;
    struggles: Struggle[];
    pins: CardId[];
  }) => void;
  setName: (name: string) => void;
  setPins: (pins: CardId[]) => void;
  toggleHidden: (id: CardId) => void;
  movePin: (id: CardId, dir: -1 | 1) => void;
  pinCard: (id: CardId) => void;
  setPref: (
    key:
      | "highContrast"
      | "largeText"
      | "reduceMotion"
      | "voiceOn"
      | "hapticOn",
    value: boolean,
  ) => void;
  setBreathe: (
    patch: Partial<
      Pick<RallyState, "breatheTechnique" | "breatheMinutes" | "breatheSound">
    >,
  ) => void;
  skipMission: () => void;
  addMood: (mood: number, note: string) => void;
  addAnger: (level: number, trigger: string) => void;
  addPcl: (scores: number[]) => void;
  setSafety: (patch: Partial<SafetyPlan>) => void;
  addMed: (med: Omit<Med, "id">) => void;
  removeMed: (id: string) => void;
  toggleMedTaken: (id: string) => void;
  addAppt: (a: Omit<Appointment, "id">) => void;
  removeAppt: (id: string) => void;
  addRating: () => void;
  updateRating: (
    id: string,
    patch: Partial<{ label: string; value: number; bilateral: boolean }>,
  ) => void;
  removeRating: (id: string) => void;
  setResume: (patch: Partial<ResumeDraft>) => void;
  setGi: (patch: { giMonths?: number; giBah?: number }) => void;
  resetAll: () => void;
};

const emptySafety: SafetyPlan = {
  warningSigns: "",
  coping: "",
  peoplePlaces: "",
  helpPeople: "",
  professionals: "",
  environment: "",
  reasons: "",
};

const emptyResume: ResumeDraft = {
  name: "",
  mos: "",
  years: "",
  summary: "",
  skills: "",
  bullets: "",
};

const initial = {
  onboarded: false,
  name: "",
  era: "" as const,
  struggles: [] as Struggle[],
  pins: ["breathe", "claims", "mood", "jobs"] as CardId[],
  hidden: [] as CardId[],
  highContrast: false,
  largeText: false,
  reduceMotion: false,
  voiceOn: false,
  hapticOn: true,
  breatheTechnique: "box" as BreatheTechnique,
  breatheMinutes: 3,
  breatheSound: "off" as const,
  skippedMissionOn: "",
  moodLog: [] as MoodEntry[],
  angerLog: [] as AngerEntry[],
  pclLog: [] as PclEntry[],
  safetyPlan: emptySafety,
  meds: [] as Med[],
  takenMedsOn: {} as Record<string, string[]>,
  appointments: [] as Appointment[],
  ratings: [
    { id: "r1", label: "PTSD", value: 70, bilateral: false },
    { id: "r2", label: "Tinnitus", value: 10, bilateral: false },
  ],
  resume: emptyResume,
  giMonths: 36,
  giBah: 1800,
};

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export const useRally = create<RallyState>()(
  persist(
    (set, get) => ({
      ...initial,
      completeOnboarding: ({ name, era, struggles, pins }) =>
        set({
          onboarded: true,
          name,
          era,
          struggles,
          pins: pins.length ? pins : defaultPinsFor(struggles),
        }),
      loadProfile: ({ name, era, struggles, pins }) =>
        set({
          onboarded: true,
          name,
          era,
          struggles,
          pins,
          hidden: [],
        }),
      setName: (name) => set({ name }),
      setPins: (pins) => set({ pins }),
      toggleHidden: (id) => {
        const hidden = get().hidden.includes(id)
          ? get().hidden.filter((h) => h !== id)
          : [...get().hidden, id];
        set({ hidden });
      },
      movePin: (id, dir) => {
        const pins = [...get().pins];
        const i = pins.indexOf(id);
        if (i < 0) return;
        const j = i + dir;
        if (j < 0 || j >= pins.length) return;
        [pins[i], pins[j]] = [pins[j], pins[i]];
        set({ pins });
      },
      pinCard: (id) => {
        const pins = get().pins;
        if (pins.includes(id)) return;
        set({
          pins: [...pins, id],
          hidden: get().hidden.filter((h) => h !== id),
        });
      },
      setPref: (key, value) => set({ [key]: value }),
      setBreathe: (patch) => set(patch),
      skipMission: () => set({ skippedMissionOn: todayKey() }),
      addMood: (mood, note) =>
        set({
          moodLog: [
            { id: uid(), date: new Date().toISOString(), mood, note },
            ...get().moodLog,
          ].slice(0, 90),
        }),
      addAnger: (level, trigger) =>
        set({
          angerLog: [
            { id: uid(), date: new Date().toISOString(), level, trigger },
            ...get().angerLog,
          ].slice(0, 90),
        }),
      addPcl: (scores) =>
        set({
          pclLog: [
            { id: uid(), date: new Date().toISOString(), scores },
            ...get().pclLog,
          ].slice(0, 24),
        }),
      setSafety: (patch) =>
        set({ safetyPlan: { ...get().safetyPlan, ...patch } }),
      addMed: (med) =>
        set({ meds: [...get().meds, { ...med, id: uid() }] }),
      removeMed: (id) =>
        set({ meds: get().meds.filter((m) => m.id !== id) }),
      toggleMedTaken: (id) => {
        const key = todayKey();
        const current = get().takenMedsOn[key] ?? [];
        const next = current.includes(id)
          ? current.filter((x) => x !== id)
          : [...current, id];
        set({ takenMedsOn: { ...get().takenMedsOn, [key]: next } });
      },
      addAppt: (a) =>
        set({
          appointments: [...get().appointments, { ...a, id: uid() }],
        }),
      removeAppt: (id) =>
        set({
          appointments: get().appointments.filter((a) => a.id !== id),
        }),
      addRating: () =>
        set({
          ratings: [
            ...get().ratings,
            { id: uid(), label: "Condition", value: 10, bilateral: false },
          ],
        }),
      updateRating: (id, patch) =>
        set({
          ratings: get().ratings.map((r) =>
            r.id === id ? { ...r, ...patch } : r,
          ),
        }),
      removeRating: (id) =>
        set({ ratings: get().ratings.filter((r) => r.id !== id) }),
      setResume: (patch) => set({ resume: { ...get().resume, ...patch } }),
      setGi: (patch) => set(patch),
      resetAll: () => set({ ...initial }),
    }),
    {
      name: "rally-point-v1",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
