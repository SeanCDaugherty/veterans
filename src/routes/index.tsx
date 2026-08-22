import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BreatheSession } from "@/components/breathe";
import { Onboarding } from "@/components/onboarding";
import {
  BottomNav,
  CrisisSheet,
  SearchOverlay,
  TopBar,
  type Tab,
} from "@/components/shell";
import { HomeScreen } from "@/screens/home";
import {
  Customize,
  Display,
  Manual,
  MeHub,
  Privacy,
  Profiles,
} from "@/screens/me";
import {
  Claims,
  Community,
  Directory,
  Family,
  GiBill,
  Housing,
  Jobs,
  LifeMeds,
  Pt,
  RatingCalc,
  ResourcesHub,
} from "@/screens/resources";
import {
  Anger,
  Distress,
  Grounding,
  Mood,
  Pcl5,
  Safety,
  SleepWind,
  ThoughtStop,
  ToolsHub,
} from "@/screens/tools";
import { useRally } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [hydrated, setHydrated] = useState(false);
  const onboarded = useRally((s) => s.onboarded);
  const highContrast = useRally((s) => s.highContrast);
  const largeText = useRally((s) => s.largeText);
  const reduceMotion = useRally((s) => s.reduceMotion);

  useEffect(() => {
    void useRally.persist.rehydrate();
    const unsub = useRally.persist.onFinishHydration(() => setHydrated(true));
    if (useRally.persist.hasHydrated()) setHydrated(true);
    return unsub;
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const root = document.documentElement;
    root.classList.toggle("high-contrast", highContrast);
    root.classList.toggle("large-text", largeText);
    root.classList.toggle("reduce-motion", reduceMotion);
  }, [hydrated, highContrast, largeText, reduceMotion]);

  return (
    <div className="phone-shell">
      <div className="phone-frame">
        {!onboarded ? <Gate /> : <Shell />}
      </div>
    </div>
  );
}

function Gate() {
  const [demo, setDemo] = useState(false);
  if (demo) return <Profiles onBack={() => setDemo(false)} />;
  return <Onboarding onDemo={() => setDemo(true)} />;
}

function Shell() {
  const [tab, setTab] = useState<Tab>("home");
  const [stack, setStack] = useState<string[]>([]);
  const [crisis, setCrisis] = useState(false);
  const [search, setSearch] = useState(false);
  const [breathe, setBreathe] = useState(false);

  function open(id: string) {
    if (id === "breathe") {
      setBreathe(true);
      return;
    }
    if (id === "crisis") {
      setCrisis(true);
      return;
    }
    if (id === "search") {
      setSearch(true);
      return;
    }
    setStack((s) => [...s, id]);
  }

  function back() {
    setStack((s) => s.slice(0, -1));
  }

  function goTab(t: Tab) {
    setTab(t);
    setStack([]);
  }

  const top = stack[stack.length - 1];

  return (
    <div className="relative min-h-dvh bg-bg">
      {breathe ? (
        <BreatheSession onClose={() => setBreathe(false)} />
      ) : (
        <>
          <TopBar onCrisis={() => setCrisis(true)} onSearch={() => setSearch(true)} />
          <div className="min-h-[calc(100dvh-7.5rem)]">
            {!top && tab === "home" ? (
              <HomeScreen onOpen={open} onCustomize={() => open("customize")} />
            ) : null}
            {!top && tab === "tools" ? <ToolsHub onOpen={open} /> : null}
            {!top && tab === "resources" ? <ResourcesHub onOpen={open} /> : null}
            {!top && tab === "me" ? <MeHub onOpen={open} /> : null}
            {top ? <ScreenSwitch id={top} onBack={back} onOpen={open} /> : null}
          </div>
          <BottomNav tab={tab} onTab={goTab} />
        </>
      )}
      <SearchOverlay open={search} onClose={() => setSearch(false)} onOpen={open} />
      <CrisisSheet open={crisis} onClose={() => setCrisis(false)} />
    </div>
  );
}

function ScreenSwitch({
  id,
  onBack,
  onOpen,
}: {
  id: string;
  onBack: () => void;
  onOpen: (id: string) => void;
}) {
  switch (id) {
    case "grounding":
      return <Grounding onBack={onBack} />;
    case "thought":
      return <ThoughtStop onBack={onBack} />;
    case "distress":
      return <Distress onBack={onBack} onBreathe={() => onOpen("breathe")} />;
    case "sleep":
      return <SleepWind onBack={onBack} onBreathe={() => onOpen("breathe")} />;
    case "mood":
      return <Mood onBack={onBack} />;
    case "anger":
      return <Anger onBack={onBack} />;
    case "pcl5":
      return <Pcl5 onBack={onBack} />;
    case "safety":
      return <Safety onBack={onBack} />;
    case "claims":
      return <Claims onBack={onBack} />;
    case "rating":
      return <RatingCalc onBack={onBack} />;
    case "jobs":
      return <Jobs onBack={onBack} />;
    case "gi-bill":
      return <GiBill onBack={onBack} />;
    case "housing":
      return <Housing onBack={onBack} />;
    case "family":
      return <Family onBack={onBack} />;
    case "community":
      return <Community onBack={onBack} />;
    case "pt":
      return <Pt onBack={onBack} />;
    case "meds":
    case "appointments":
      return <LifeMeds onBack={onBack} />;
    case "directory":
      return <Directory onBack={onBack} />;
    case "customize":
      return <Customize onBack={onBack} />;
    case "display":
      return <Display onBack={onBack} />;
    case "profiles":
      return <Profiles onBack={onBack} />;
    case "privacy":
      return <Privacy onBack={onBack} />;
    case "manual":
      return <Manual onBack={onBack} />;
    default:
      return (
        <div className="p-6">
          <p className="text-muted">That tool isn’t wired.</p>
          <button type="button" className="mt-3 text-accent" onClick={onBack}>
            Back
          </button>
        </div>
      );
  }
}
