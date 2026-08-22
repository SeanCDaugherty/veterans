import { useEffect, useMemo, useRef, useState } from "react";
import { BREATHE } from "@/lib/data";
import { useRally, type BreatheTechnique } from "@/lib/store";
import { Button, Chip, IconBtn, SectionLabel } from "./ui";
import { X } from "lucide-react";

function speak(text: string, on: boolean) {
  if (!on || typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.85;
  u.pitch = 0.9;
  u.volume = 0.85;
  window.speechSynthesis.speak(u);
}

function haptic(on: boolean) {
  if (!on || typeof navigator === "undefined" || !navigator.vibrate) return;
  navigator.vibrate(28);
}

function startBrown(): () => void {
  const AC =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext })
      .webkitAudioContext;
  if (!AC) return () => {};
  const ctx = new AC();
  const bufferSize = 2 * ctx.sampleRate;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.02 * white) / 1.02;
    data[i] = last * 3.5;
  }
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.loop = true;
  const gain = ctx.createGain();
  gain.gain.value = 0.12;
  src.connect(gain).connect(ctx.destination);
  void ctx.resume();
  src.start();
  return () => {
    try {
      src.stop();
      void ctx.close();
    } catch {
      /* ignore */
    }
  };
}

export function BreatheSession({ onClose }: { onClose: () => void }) {
  const technique = useRally((s) => s.breatheTechnique);
  const minutes = useRally((s) => s.breatheMinutes);
  const sound = useRally((s) => s.breatheSound);
  const voiceOn = useRally((s) => s.voiceOn);
  const hapticOn = useRally((s) => s.hapticOn);
  const reduceMotion = useRally((s) => s.reduceMotion);
  const setBreathe = useRally((s) => s.setBreathe);

  const spec = BREATHE[technique];
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState(0);
  const [remain, setRemain] = useState(spec.phases[0].seconds);
  const [elapsed, setElapsed] = useState(0);
  const total = minutes * 60;
  const stopNoise = useRef<(() => void) | null>(null);

  const cycle = spec.phases;
  const current = cycle[phase % cycle.length];
  const inhaling = current.label.toLowerCase().startsWith("in");
  const holding = current.label.toLowerCase().includes("hold");

  const scale = useMemo(() => {
    if (holding) return inhaling ? 1 : 0.45;
    return inhaling ? 1 : 0.45;
  }, [holding, inhaling]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setElapsed((e) => e + 1);
      setRemain((r) => r - 1);
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (!running) return;
    if (elapsed >= total) {
      setRunning(false);
      speak("Done. Good work.", voiceOn);
      return;
    }
    if (remain > 0) return;
    const next = (phase + 1) % cycle.length;
    setPhase(next);
    setRemain(cycle[next].seconds);
    haptic(hapticOn);
    speak(cycle[next].label, voiceOn);
  }, [remain, running, elapsed, total, phase, cycle, voiceOn, hapticOn]);

  useEffect(() => {
    if (running && sound === "brown") {
      stopNoise.current = startBrown();
    }
    return () => {
      stopNoise.current?.();
      stopNoise.current = null;
    };
  }, [running, sound]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis?.cancel();
    };
  }, []);

  function start() {
    setPhase(0);
    setRemain(cycle[0].seconds);
    setElapsed(0);
    setRunning(true);
    haptic(hapticOn);
    speak(cycle[0].label, voiceOn);
  }

  function stop() {
    setRunning(false);
    if (typeof window !== "undefined") window.speechSynthesis?.cancel();
  }

  const durationMs = current.seconds * 1000;

  return (
    <div className="flex min-h-dvh flex-col bg-bg px-5 pb-8 pt-[max(1rem,env(safe-area-inset-top))]">
      <div className="flex items-center justify-between">
        <SectionLabel>Breathe</SectionLabel>
        <IconBtn label="Close" onClick={onClose}>
          <X className="size-5" />
        </IconBtn>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="relative grid size-64 place-items-center">
          <div
            className="breathe-ring absolute inset-0 rounded-full border border-border"
            aria-hidden
          />
          <div
            className="breathe-ring absolute inset-6 rounded-full border-2 border-accent bg-accent/15"
            style={
              reduceMotion || !running
                ? { transform: running ? `scale(${scale})` : "scale(0.7)" }
                : {
                    transform: `scale(${scale})`,
                    transition: `transform ${durationMs}ms linear`,
                  }
            }
            aria-hidden
          />
          <div className="relative text-center">
            <p className="font-display text-5xl font-semibold uppercase tabular-nums">
              {running ? current.label : "Ready"}
            </p>
            <p className="mt-1 font-display text-3xl tabular-nums text-sand">
              {running ? remain : `${minutes} min`}
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-[28ch] text-center text-sm text-muted">
          {spec.blurb}
        </p>
        {running ? (
          <p className="mt-2 text-xs tabular-nums text-subtle">
            {Math.max(0, total - elapsed)}s left
          </p>
        ) : null}
      </div>

      {!running ? (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(BREATHE) as BreatheTechnique[]).map((id) => (
              <Chip
                key={id}
                active={technique === id}
                onClick={() => setBreathe({ breatheTechnique: id })}
              >
                {BREATHE[id].name}
              </Chip>
            ))}
          </div>
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="text-muted">Duration</span>
            <div className="flex gap-1">
              {[1, 3, 5, 10].map((m) => (
                <Chip
                  key={m}
                  active={minutes === m}
                  onClick={() => setBreathe({ breatheMinutes: m })}
                >
                  {m}m
                </Chip>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Chip
              active={sound === "off"}
              onClick={() => setBreathe({ breatheSound: "off" })}
            >
              Silent
            </Chip>
            <Chip
              active={sound === "brown"}
              onClick={() => setBreathe({ breatheSound: "brown" })}
            >
              Brown noise
            </Chip>
          </div>
          <Button block onClick={start}>
            Begin
          </Button>
        </div>
      ) : (
        <Button variant="secondary" block onClick={stop}>
          End session
        </Button>
      )}
    </div>
  );
}
