import { useState } from "react";
import { PCL5, PCL_SCALE, OFFICIAL } from "@/lib/data";
import { useRally, type SafetyPlan } from "@/lib/store";
import { Button, Card, Chip, Input, SectionLabel, Textarea } from "@/components/ui";
import { Note, RowButton, Screen } from "@/components/screen";
import { LinkRow } from "@/components/screen";

export function ToolsHub({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <Screen title="Tools" kicker="On this device">
      <Note>
        Crisis tools work without an account and without a network, except the
        call / text / chat handoff.
      </Note>
      <SectionLabel>Regulate</SectionLabel>
      <RowButton title="Breathe" blurb="Box, tactical, 4-7-8, diaphragm. Expanding ring." onClick={() => onOpen("breathe")} />
      <RowButton title="5-4-3-2-1 grounding" blurb="Senses. Get back in the room." onClick={() => onOpen("grounding")} />
      <RowButton title="Thought stopping" blurb="Notice. Label. Stop. Replace." onClick={() => onOpen("thought")} />
      <RowButton title="Distress tolerance" blurb="Short skills when you’re already in it." onClick={() => onOpen("distress")} />
      <RowButton title="Sleep wind-down" blurb="Dump the day. Slow the body." onClick={() => onOpen("sleep")} />
      <SectionLabel>Track (private)</SectionLabel>
      <RowButton title="Mood check-in" blurb="One number. Optional note. Stays here." onClick={() => onOpen("mood")} />
      <RowButton title="Anger / irritability" blurb="Level plus trigger. Patterns, not shame." onClick={() => onOpen("anger")} />
      <RowButton title="PTSD symptom log (PCL-5)" blurb="20 items. Not a diagnosis. Yours." onClick={() => onOpen("pcl5")} />
      <RowButton title="Safety plan" blurb="Write it now. Use it later." onClick={() => onOpen("safety")} />
      <SectionLabel>Official VA apps</SectionLabel>
      <p className="text-sm text-muted -mt-2">
        We don’t clone these. We send you to the people who keep them current.
      </p>
      {OFFICIAL.filter((o) => o.category === "VA apps").map((o) => (
        <LinkRow key={o.id} item={o} />
      ))}
    </Screen>
  );
}

const SENSES = [
  { n: 5, sense: "see", prompt: "Five things you can see. Name them out loud if you can." },
  { n: 4, sense: "feel", prompt: "Four things you can feel. Floor. Fabric. Air. Weight." },
  { n: 3, sense: "hear", prompt: "Three sounds. Far, near, inside the room." },
  { n: 2, sense: "smell", prompt: "Two smells. Or two things you know the smell of." },
  { n: 1, sense: "taste", prompt: "One taste. Coffee, metal, morning. Or just your mouth." },
];

export function Grounding({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(0);
  const s = SENSES[step];
  return (
    <Screen title="Ground" kicker="5-4-3-2-1" onBack={onBack}>
      <div className="rounded-2xl border border-border bg-surface p-6">
        <p className="font-display text-6xl font-semibold tabular-nums text-accent leading-none">
          {s.n}
        </p>
        <p className="mt-3 font-display text-3xl uppercase">{s.sense}</p>
        <p className="mt-3 text-muted">{s.prompt}</p>
      </div>
      <div className="flex gap-2">
        {step > 0 ? (
          <Button variant="secondary" className="flex-1" onClick={() => setStep((n) => n - 1)}>
            Back
          </Button>
        ) : null}
        {step < SENSES.length - 1 ? (
          <Button className="flex-1" onClick={() => setStep((n) => n + 1)}>
            Next
          </Button>
        ) : (
          <Button className="flex-1" onClick={onBack}>
            I’m here
          </Button>
        )}
      </div>
      <Button variant="ghost" block onClick={() => onBack()}>
        Enough. Leave.
      </Button>
    </Screen>
  );
}

export function ThoughtStop({ onBack }: { onBack: () => void }) {
  const [phase, setPhase] = useState(0);
  const [replacement, setReplacement] = useState("I am in this room. Today is now.");
  const phases = [
    { t: "Notice", b: "Catch the loop. Don’t argue with it yet. Just mark it." },
    { t: "Label", b: "Call it what it is: a memory, a forecast, a threat scan. Not a fact about this minute." },
    { t: "Stop", b: "Picture a hard stop. Hand up. You are not required to finish the thought." },
    { t: "Replace", b: "Park a true, boring sentence in its place. Repeat it until the volume drops." },
  ];
  const p = phases[phase];
  return (
    <Screen title="Thought stopping" onBack={onBack}>
      <Card>
        <p className="font-display text-4xl uppercase">{p.t}</p>
        <p className="mt-2 text-muted">{p.b}</p>
      </Card>
      {phase === 3 ? (
        <Textarea
          value={replacement}
          onChange={(e) => setReplacement(e.target.value)}
          aria-label="Replacement sentence"
        />
      ) : null}
      <div className="flex gap-2">
        {phase > 0 ? (
          <Button variant="secondary" className="flex-1" onClick={() => setPhase((n) => n - 1)}>
            Back
          </Button>
        ) : null}
        {phase < 3 ? (
          <Button className="flex-1" onClick={() => setPhase((n) => n + 1)}>
            Next
          </Button>
        ) : (
          <Button className="flex-1" onClick={onBack}>
            Hold that line
          </Button>
        )}
      </div>
    </Screen>
  );
}

export function Distress({ onBack, onBreathe }: { onBack: () => void; onBreathe: () => void }) {
  return (
    <Screen title="Distress tolerance" onBack={onBack}>
      <Note>Not a therapy session. Four short moves when you’re already in the red.</Note>
      <Card>
        <p className="font-display text-2xl uppercase">Temperature</p>
        <p className="mt-1 text-sm text-muted">
          Cold water on the face or wrists. Ice pack on the back of the neck. It
          interrupts the surge. Don’t do breath-holds in water.
        </p>
      </Card>
      <Card>
        <p className="font-display text-2xl uppercase">Intense — brief</p>
        <p className="mt-1 text-sm text-muted">
          Wall push-ups to failure, or a fast walk around the block. Ninety
          seconds. Then stop.
        </p>
      </Card>
      <Card>
        <p className="font-display text-2xl uppercase">Paced breathing</p>
        <p className="mt-1 text-sm text-muted">Longer out-breath than in. Tactical or 4-7-8.</p>
        <Button className="mt-3" onClick={onBreathe}>
          Open breathe
        </Button>
      </Card>
      <Card>
        <p className="font-display text-2xl uppercase">Paired muscle</p>
        <p className="mt-1 text-sm text-muted">
          Fists, 5 seconds, release. Shoulders, 5, release. Jaw, 5, release.
          You’re teaching the body the off switch.
        </p>
      </Card>
    </Screen>
  );
}

export function SleepWind({ onBack, onBreathe }: { onBack: () => void; onBreathe: () => void }) {
  const [dump, setDump] = useState("");
  return (
    <Screen title="Sleep wind-down" onBack={onBack}>
      <Note>
        Screens off after this if you can. VA’s Insomnia Coach is the deeper
        tool if nights are the whole war.
      </Note>
      <SectionLabel>Park the day</SectionLabel>
      <Textarea
        value={dump}
        onChange={(e) => setDump(e.target.value)}
        placeholder="Unfinished loops. Tomorrow’s first move. Then close it."
      />
      <ol className="space-y-3 text-sm text-muted list-decimal pl-5">
        <li>Lights down. Room cooler than you think.</li>
        <li>Same wind-down, same order, every night you can.</li>
        <li>If you’re not asleep in ~20 minutes, get up. No doom-scroll.</li>
        <li>Don’t chase sleep. It’s a landing, not a takedown.</li>
      </ol>
      <Button onClick={onBreathe}>4-7-8 now</Button>
      <LinkRow item={OFFICIAL.find((o) => o.id === "insomnia-coach")!} />
    </Screen>
  );
}

export function Mood({ onBack }: { onBack: () => void }) {
  const log = useRally((s) => s.moodLog);
  const add = useRally((s) => s.addMood);
  const [mood, setMood] = useState(3);
  const [note, setNote] = useState("");
  return (
    <Screen title="Mood" kicker="Private" onBack={onBack}>
      <p className="text-sm text-muted">1 is the floor. 5 is a good day. No audience.</p>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <Chip key={n} active={mood === n} onClick={() => setMood(n)} className="flex-1">
            {n}
          </Chip>
        ))}
      </div>
      <Textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Optional note" />
      <Button
        block
        onClick={() => {
          add(mood, note.trim());
          setNote("");
        }}
      >
        Log it
      </Button>
      <SectionLabel>Recent</SectionLabel>
      {log.length === 0 ? (
        <p className="text-sm text-muted">Nothing yet.</p>
      ) : (
        <ul className="space-y-2">
          {log.slice(0, 12).map((e) => (
            <li key={e.id} className="rounded-xl border border-border bg-surface px-3 py-2 text-sm">
              <span className="tabular-nums text-sand">{e.mood}/5</span>
              <span className="text-subtle"> · {new Date(e.date).toLocaleString()}</span>
              {e.note ? <p className="mt-1">{e.note}</p> : null}
            </li>
          ))}
        </ul>
      )}
    </Screen>
  );
}

export function Anger({ onBack }: { onBack: () => void }) {
  const log = useRally((s) => s.angerLog);
  const add = useRally((s) => s.addAnger);
  const [level, setLevel] = useState(3);
  const [trigger, setTrigger] = useState("");
  return (
    <Screen title="Anger log" onBack={onBack}>
      <Note>
        Irritability is a PTSD symptom, not a moral failure. Official deeper
        tool: AIMS.
      </Note>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <Chip key={n} active={level === n} onClick={() => setLevel(n)} className="flex-1">
            {n}
          </Chip>
        ))}
      </div>
      <Input
        value={trigger}
        onChange={(e) => setTrigger(e.target.value)}
        placeholder="What set it off — traffic, tone, a look"
      />
      <Button
        block
        onClick={() => {
          add(level, trigger.trim());
          setTrigger("");
        }}
      >
        Log it
      </Button>
      <ul className="space-y-2">
        {log.slice(0, 12).map((e) => (
          <li key={e.id} className="rounded-xl border border-border bg-surface px-3 py-2 text-sm">
            <span className="tabular-nums text-sand">{e.level}/5</span>
            <span className="text-subtle"> · {new Date(e.date).toLocaleString()}</span>
            {e.trigger ? <p className="mt-1">{e.trigger}</p> : null}
          </li>
        ))}
      </ul>
      <LinkRow item={OFFICIAL.find((o) => o.id === "aims")!} />
    </Screen>
  );
}

export function Pcl5({ onBack }: { onBack: () => void }) {
  const add = useRally((s) => s.addPcl);
  const log = useRally((s) => s.pclLog);
  const [scores, setScores] = useState<number[]>(() => Array(20).fill(-1));
  const [done, setDone] = useState(false);
  const filled = scores.every((s) => s >= 0);
  const total = scores.reduce((a, b) => a + Math.max(0, b), 0);

  return (
    <Screen title="PCL-5 log" kicker="Not a diagnosis" onBack={onBack}>
      <Note>
        National Center for PTSD checklist. Past month. Private. A common
        research cutoff for further evaluation is 31–33. This is a log, not a
        claim exam and not a diagnosis.
      </Note>
      {!done ? (
        <>
          {PCL5.map((q, i) => (
            <div key={i} className="rounded-xl border border-border bg-surface p-3">
              <p className="text-sm">
                <span className="text-sand tabular-nums">{i + 1}.</span> {q}
              </p>
              <div className="mt-2 grid grid-cols-5 gap-1">
                {PCL_SCALE.map((label, v) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() =>
                      setScores((s) => {
                        const n = [...s];
                        n[i] = v;
                        return n;
                      })
                    }
                    className={`min-h-11 rounded-md text-[11px] leading-tight px-1 ${
                      scores[i] === v
                        ? "bg-accent text-accent-fg"
                        : "bg-surface-2 text-muted"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <p className="text-xs text-subtle">0 not at all — 4 extremely</p>
          <Button
            block
            disabled={!filled}
            onClick={() => {
              add(scores);
              setDone(true);
            }}
          >
            Save this check-in {filled ? `· ${total}` : ""}
          </Button>
        </>
      ) : (
        <Card>
          <p className="font-display text-5xl tabular-nums">{total}</p>
          <p className="text-sm text-muted mt-2">
            Total 0–80. If this is climbing, or you’re not safe, use Crisis.
            Talk to a clinician or Vet Center — this number is for you.
          </p>
          <Button className="mt-4" variant="secondary" onClick={() => { setDone(false); setScores(Array(20).fill(-1)); }}>
            New check-in
          </Button>
        </Card>
      )}
      {log[0] && !done ? (
        <p className="text-sm text-muted">
          Last total: {log[0].scores.reduce((a, b) => a + b, 0)} on{" "}
          {new Date(log[0].date).toLocaleDateString()}
        </p>
      ) : null}
    </Screen>
  );
}

const SAFETY_FIELDS: { key: keyof SafetyPlan; label: string; hint: string }[] = [
  { key: "warningSigns", label: "1. Warning signs", hint: "Thoughts, body, behavior that mean you’re sliding." },
  { key: "coping", label: "2. Internal coping", hint: "What you can do alone. Breathe. Walk. Cold water." },
  { key: "peoplePlaces", label: "3. People / places for distraction", hint: "Not for the heavy talk. Just not-alone." },
  { key: "helpPeople", label: "4. People I can ask for help", hint: "Names and numbers. Tell them they’re on this list." },
  { key: "professionals", label: "5. Professionals / agencies", hint: "Vet Center, clinician, 988 then 1, 838255." },
  { key: "environment", label: "6. Make the environment safer", hint: "Means restriction. Who holds what. Be specific." },
  { key: "reasons", label: "Reasons for living", hint: "People, dogs, unfinished business. Short is fine." },
];

export function Safety({ onBack }: { onBack: () => void }) {
  const plan = useRally((s) => s.safetyPlan);
  const setSafety = useRally((s) => s.setSafety);
  return (
    <Screen title="Safety plan" onBack={onBack}>
      <Note>
        Stanley-Brown structure, same family as the VA Safety Plan app. Fills
        stay on this device. Official app if you want sync across phones.
      </Note>
      {SAFETY_FIELDS.map((f) => (
        <label key={f.key} className="block space-y-1.5">
          <span className="text-sm font-medium">{f.label}</span>
          <Textarea
            value={plan[f.key]}
            onChange={(e) => setSafety({ [f.key]: e.target.value })}
            placeholder={f.hint}
          />
        </label>
      ))}
      <LinkRow item={OFFICIAL.find((o) => o.id === "safety-plan-app")!} />
    </Screen>
  );
}
