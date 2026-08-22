import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import {
  CLAIM_STEPS,
  DOC_CHECKLIST,
  JOB_BOARDS,
  MOS,
  OFFICIAL,
  PACT_NOTES,
  PT_ROUTINES,
  SECONDARIES,
} from "@/lib/data";
import { useRally } from "@/lib/store";
import { monthsBetween } from "@/lib/utils";
import {
  applyBilateral,
  formatUsd,
  monthlyFor,
} from "@/lib/va-math";
import { Button, Card, Chip, Input, SectionLabel, Textarea } from "@/components/ui";
import { LinkRow, Note, RowButton, Screen } from "@/components/screen";

export function ResourcesHub({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <Screen title="Resources" kicker="Official doors">
      <Note>
        We point at VA, VSOs, and real hotlines instead of inventing a second
        bureaucracy. If a site is down, the phone still works.
      </Note>
      <SectionLabel>VA benefits & claims</SectionLabel>
      <RowButton title="Claims hub" blurb="Filing, PACT, secondaries, checklist." onClick={() => onOpen("claims")} />
      <RowButton title="Combined rating + back pay" blurb="VA math. 2026 veteran-alone rates." onClick={() => onOpen("rating")} />
      <SectionLabel>Civilian transition</SectionLabel>
      <RowButton title="MOS translator + resume" blurb="Say it in civilian." onClick={() => onOpen("jobs")} />
      <RowButton title="GI Bill" blurb="Months left. Official comparison tool." onClick={() => onOpen("gi-bill")} />
      <RowButton title="Housing & money" blurb="Home loan, HUD-VASH, 877-424-3838." onClick={() => onOpen("housing")} />
      <SectionLabel>Daily life & family</SectionLabel>
      <RowButton title="Family" blurb="CHAMPVA, Chapter 35, caregiver, Family Coach." onClick={() => onOpen("family")} />
      <RowButton title="Local & tribe" blurb="Vet Centers, VFW, Legion, volunteer." onClick={() => onOpen("community")} />
      <RowButton title="Body / PT" blurb="Short routines. Not a PT clinic." onClick={() => onOpen("pt")} />
      <RowButton title="Meds & appointments" blurb="Reminders that live on this phone." onClick={() => onOpen("meds")} />
      <SectionLabel>Directory</SectionLabel>
      <RowButton title="All official numbers & links" blurb="The full list. Search works too." onClick={() => onOpen("directory")} />
    </Screen>
  );
}

export function Claims({ onBack }: { onBack: () => void }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  return (
    <Screen title="Claims hub" onBack={onBack}>
      <Note>
        An accredited VSO is free. An accredited attorney is not always. Check
        the OGC list before you sign.
      </Note>
      <SectionLabel>The path</SectionLabel>
      {CLAIM_STEPS.map((s, i) => (
        <Card key={s.title}>
          <p className="font-display text-xl uppercase">
            {i + 1}. {s.title}
          </p>
          <p className="mt-1 text-sm text-muted">{s.body}</p>
        </Card>
      ))}
      <SectionLabel>Document checklist</SectionLabel>
      {DOC_CHECKLIST.map((d) => (
        <button
          key={d}
          type="button"
          onClick={() => setChecked((c) => ({ ...c, [d]: !c[d] }))}
          className="flex min-h-12 w-full items-center gap-3 rounded-xl border border-border bg-surface px-4 text-left text-sm"
        >
          <span
            className={`grid size-5 place-items-center rounded-sm border ${
              checked[d] ? "border-accent bg-accent text-accent-fg" : "border-border-strong"
            }`}
          >
            {checked[d] ? <Check className="size-3.5" strokeWidth={3} /> : null}
          </span>
          {d}
        </button>
      ))}
      <SectionLabel>PACT Act</SectionLabel>
      <ul className="space-y-2 text-sm text-muted">
        {PACT_NOTES.map((n) => (
          <li key={n} className="rounded-xl border border-border bg-surface p-3">
            {n}
          </li>
        ))}
      </ul>
      <SectionLabel>Common secondaries</SectionLabel>
      {SECONDARIES.map((s) => (
        <Card key={s.from}>
          <p className="font-medium">{s.from}</p>
          <p className="text-sm text-muted mt-1">{s.to}</p>
        </Card>
      ))}
      {OFFICIAL.filter((o) => o.category === "Claims").map((o) => (
        <LinkRow key={o.id} item={o} />
      ))}
    </Screen>
  );
}

export function RatingCalc({ onBack }: { onBack: () => void }) {
  const ratings = useRally((s) => s.ratings);
  const add = useRally((s) => s.addRating);
  const update = useRally((s) => s.updateRating);
  const remove = useRally((s) => s.removeRating);
  const [effective, setEffective] = useState("2025-01-01");
  const [prior, setPrior] = useState(0);

  const bi = ratings.filter((r) => r.bilateral).map((r) => r.value);
  const other = ratings.filter((r) => !r.bilateral).map((r) => r.value);
  const result =
    bi.length >= 2 ? applyBilateral(bi, other) : applyBilateral([], ratings.map((r) => r.value));
  const monthly = monthlyFor(result.rounded);
  const months = monthsBetween(effective);
  const backpay = Math.max(0, (monthly - monthlyFor(prior)) * months);

  return (
    <Screen title="Rating estimator" onBack={onBack}>
      <Note>
        VA math (38 CFR 4.25 / 4.26). Not a rating decision. 2026 veteran-alone
        pay. Dependents and SMC add more. Confirm on VA.gov.
      </Note>
      {ratings.map((r) => (
        <div key={r.id} className="rounded-xl border border-border bg-surface p-3 space-y-2">
          <Input
            value={r.label}
            onChange={(e) => update(r.id, { label: e.target.value })}
            aria-label="Condition name"
          />
          <div className="flex flex-wrap gap-1">
            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((v) => (
              <Chip key={v} active={r.value === v} onClick={() => update(r.id, { value: v })}>
                {v}
              </Chip>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="text-sm text-sand min-h-11"
              onClick={() => update(r.id, { bilateral: !r.bilateral })}
            >
              {r.bilateral ? "Bilateral on" : "Mark bilateral"}
            </button>
            <button
              type="button"
              className="text-sm text-crisis min-h-11"
              onClick={() => remove(r.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <Button variant="secondary" block onClick={add}>
        Add condition
      </Button>
      <Card>
        <p className="text-sm text-muted">Exact combined</p>
        <p className="font-display text-4xl tabular-nums">
          {result.exact.toFixed(1)}%
        </p>
        <p className="mt-2 text-sm text-muted">Rounded (VA)</p>
        <p className="font-display text-5xl tabular-nums text-accent">
          {result.rounded}%
        </p>
        <p className="mt-2 text-sm">
          Veteran-alone 2026: <span className="tabular-nums">{formatUsd(monthly)}</span>/mo
        </p>
        <p className="text-xs text-subtle mt-1">
          SMC-K (loss of use / ED, etc.) pays on top of this. See official rates.
        </p>
      </Card>
      <SectionLabel>Back-pay sketch</SectionLabel>
      <label className="block text-sm space-y-1">
        <span>Proposed effective date</span>
        <Input type="date" value={effective} onChange={(e) => setEffective(e.target.value)} />
      </label>
      <label className="block text-sm space-y-1">
        <span>Prior combined % (0 if new)</span>
        <Input
          type="number"
          min={0}
          max={100}
          value={prior}
          onChange={(e) => setPrior(Number(e.target.value) || 0)}
        />
      </label>
      <Card>
        <p className="text-sm text-muted">{months} months × difference in veteran-alone rate</p>
        <p className="font-display text-4xl tabular-nums">{formatUsd(backpay)}</p>
        <p className="text-xs text-subtle mt-1">
          Real back pay uses your actual dependents, SMC, and the date VA
          assigns. This is a sketch so you know the scale.
        </p>
      </Card>
      <LinkRow item={OFFICIAL.find((o) => o.id === "rates")!} />
    </Screen>
  );
}

export function Jobs({ onBack }: { onBack: () => void }) {
  const [q, setQ] = useState("");
  const resume = useRally((s) => s.resume);
  const setResume = useRally((s) => s.setResume);
  const hits = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return MOS.slice(0, 8);
    return MOS.filter(
      (m) =>
        m.code.toLowerCase().includes(n) ||
        m.mil.toLowerCase().includes(n) ||
        m.branch.toLowerCase().includes(n) ||
        m.civ.some((c) => c.toLowerCase().includes(n)),
    );
  }, [q]);

  const text = [
    resume.name || "YOUR NAME",
    resume.mos && `MOS ${resume.mos}${resume.years ? ` · ${resume.years}` : ""}`,
    "",
    resume.summary,
    "",
    "Skills",
    resume.skills,
    "",
    "Selected work",
    resume.bullets,
  ]
    .filter((l) => l !== undefined)
    .join("\n");

  return (
    <Screen title="Work & MOS" onBack={onBack}>
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search MOS, rating, or job — 0311, 68W, intel…"
        aria-label="Search MOS"
      />
      {hits.map((m) => (
        <Card key={`${m.branch}-${m.code}`}>
          <p className="text-xs uppercase tracking-widest text-sand">
            {m.branch} · {m.code}
          </p>
          <p className="font-display text-2xl uppercase">{m.mil}</p>
          <p className="mt-1 text-sm">{m.civ.join(" · ")}</p>
          <p className="mt-1 text-sm text-muted">{m.skills}</p>
          <Button
            variant="ghost"
            className="mt-1 px-0"
            onClick={() =>
              setResume({
                mos: `${m.code} ${m.mil}`,
                skills: m.skills,
                summary: `Veteran ${m.branch} ${m.mil}. Translates to ${m.civ[0]}.`,
              })
            }
          >
            Drop into resume
          </Button>
        </Card>
      ))}
      {hits.length === 0 ? (
        <p className="text-sm text-muted">No MOS hit. Try the code or the civilian title.</p>
      ) : null}
      <SectionLabel>Resume builder</SectionLabel>
      <Note>Plain text. Copy it into Word or a VSO workshop. No cloud.</Note>
      <Input value={resume.name} onChange={(e) => setResume({ name: e.target.value })} placeholder="Name" />
      <Input value={resume.mos} onChange={(e) => setResume({ mos: e.target.value })} placeholder="MOS / rating" />
      <Input value={resume.years} onChange={(e) => setResume({ years: e.target.value })} placeholder="Years / era" />
      <Textarea value={resume.summary} onChange={(e) => setResume({ summary: e.target.value })} placeholder="Three-line summary" />
      <Textarea value={resume.skills} onChange={(e) => setResume({ skills: e.target.value })} placeholder="Skills" />
      <Textarea value={resume.bullets} onChange={(e) => setResume({ bullets: e.target.value })} placeholder={"Led a 12-person team…\nAccountable for…"} />
      <Button
        variant="secondary"
        block
        onClick={() => void navigator.clipboard?.writeText(text)}
      >
        Copy resume text
      </Button>
      <SectionLabel>Job boards</SectionLabel>
      {JOB_BOARDS.map((j) => (
        <LinkRow key={j.id} item={j} />
      ))}
      {OFFICIAL.filter((o) => o.category === "Work" && !JOB_BOARDS.find((j) => j.id === o.id)).map(
        (o) => (
          <LinkRow key={o.id} item={o} />
        ),
      )}
    </Screen>
  );
}

export function GiBill({ onBack }: { onBack: () => void }) {
  const giMonths = useRally((s) => s.giMonths);
  const giBah = useRally((s) => s.giBah);
  const setGi = useRally((s) => s.setGi);
  return (
    <Screen title="GI Bill" onBack={onBack}>
      <Note>
        The official comparison tool is the source of truth for school housing
        rates. This is a napkin for months and a monthly number you type in.
      </Note>
      <label className="block text-sm space-y-1">
        <span>Months remaining (Post-9/11 default 36)</span>
        <Input
          type="number"
          min={0}
          max={48}
          value={giMonths}
          onChange={(e) => setGi({ giMonths: Number(e.target.value) || 0 })}
        />
      </label>
      <label className="block text-sm space-y-1">
        <span>Housing estimate you’ll actually get ($ / mo)</span>
        <Input
          type="number"
          min={0}
          value={giBah}
          onChange={(e) => setGi({ giBah: Number(e.target.value) || 0 })}
        />
      </label>
      <Card>
        <p className="text-sm text-muted">Rough remaining housing</p>
        <p className="font-display text-4xl tabular-nums">
          {formatUsd(giMonths * giBah)}
        </p>
        <p className="text-xs text-subtle mt-1">
          Housing is pro-rated and zip-based. Chapter 31 (VR&E) can be a better
          door if you’re rated and need training while employed.
        </p>
      </Card>
      <LinkRow item={OFFICIAL.find((o) => o.id === "gi-compare")!} />
      <LinkRow item={OFFICIAL.find((o) => o.id === "gi-hotline")!} />
      <LinkRow item={OFFICIAL.find((o) => o.id === "ch31")!} />
    </Screen>
  );
}

export function Housing({ onBack }: { onBack: () => void }) {
  return (
    <Screen title="Housing & money" onBack={onBack}>
      <Note>
        If the roof is the issue tonight, skip everything else and call
        877-424-3838.
      </Note>
      {OFFICIAL.filter((o) => o.category === "Housing").map((o) => (
        <LinkRow key={o.id} item={o} />
      ))}
      <Card>
        <p className="font-display text-2xl uppercase">VA home loan, short</p>
        <ul className="mt-2 space-y-1 text-sm text-muted list-disc pl-4">
          <li>$0 down for most eligible veterans. Funding fee may apply; often waived if rated.</li>
          <li>No monthly PMI.</li>
          <li>Certificate of Eligibility on VA.gov.</li>
          <li>Still a mortgage. Still underwriting. Still read the numbers.</li>
        </ul>
      </Card>
    </Screen>
  );
}

export function Family({ onBack }: { onBack: () => void }) {
  return (
    <Screen title="Family" onBack={onBack}>
      <Note>
        They didn’t go with you and they still live with it. Give them tools,
        not a lecture they didn’t ask for.
      </Note>
      {OFFICIAL.filter((o) => o.category === "Family" || o.id === "family-coach").map((o) => (
        <LinkRow key={o.id} item={o} />
      ))}
      <Card>
        <p className="font-display text-2xl uppercase">CHAMPVA, short</p>
        <p className="mt-1 text-sm text-muted">
          Spouse and kids can get CHAMPVA when you’re 100% permanent and total
          (and in some related cases). It is not TRICARE. Confirm eligibility
          before you drop employer insurance. Maternity is covered when the
          dependent is enrolled.
        </p>
      </Card>
      <Card>
        <p className="font-display text-2xl uppercase">Chapter 35</p>
        <p className="mt-1 text-sm text-muted">
          Education money for dependents of veterans who are 100% P&T, or who
          died of service-connected causes. Months are finite. Apply early.
        </p>
      </Card>
    </Screen>
  );
}

export function Community({ onBack }: { onBack: () => void }) {
  return (
    <Screen title="Local & tribe" onBack={onBack}>
      <Note>
        A Vet Center does not require a claim. That’s the whole point.
      </Note>
      {OFFICIAL.filter((o) => o.category === "Local").map((o) => (
        <LinkRow key={o.id} item={o} />
      ))}
    </Screen>
  );
}

export function Pt({ onBack }: { onBack: () => void }) {
  return (
    <Screen title="Body / PT" onBack={onBack}>
      <Note>
        Not medical advice. If it shoots, goes numb, or swells fast — clinic,
        not this list.
      </Note>
      {PT_ROUTINES.map((r) => (
        <Card key={r.id}>
          <p className="font-display text-2xl uppercase">{r.title}</p>
          <ol className="mt-2 space-y-1.5 text-sm text-muted list-decimal pl-4">
            {r.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </Card>
      ))}
    </Screen>
  );
}

export function Directory({ onBack }: { onBack: () => void }) {
  const groups = useMemo(() => {
    const g: Record<string, typeof OFFICIAL> = {};
    for (const o of OFFICIAL) {
      (g[o.category] ??= []).push(o);
    }
    return g;
  }, []);
  return (
    <Screen title="Official directory" onBack={onBack}>
      <Note>
        Numbers and URLs from VA properties. If one changes, VA.gov wins.
      </Note>
      {Object.entries(groups).map(([cat, items]) => (
        <div key={cat} className="space-y-2">
          <SectionLabel>{cat}</SectionLabel>
          {items.map((o) => (
            <LinkRow key={o.id} item={o} />
          ))}
        </div>
      ))}
    </Screen>
  );
}

export function LifeMeds({ onBack }: { onBack: () => void }) {
  const meds = useRally((s) => s.meds);
  const addMed = useRally((s) => s.addMed);
  const removeMed = useRally((s) => s.removeMed);
  const toggle = useRally((s) => s.toggleMedTaken);
  const taken = useRally((s) => s.takenMedsOn);
  const appts = useRally((s) => s.appointments);
  const addAppt = useRally((s) => s.addAppt);
  const removeAppt = useRally((s) => s.removeAppt);
  const [name, setName] = useState("");
  const [dose, setDose] = useState("");
  const [time, setTime] = useState("08:00");
  const [title, setTitle] = useState("");
  const [when, setWhen] = useState("");
  const [where, setWhere] = useState("");
  const today = new Date().toISOString().slice(0, 10);
  const takenToday = taken[today] ?? [];

  return (
    <Screen title="Meds & appointments" onBack={onBack}>
      <SectionLabel>Meds today</SectionLabel>
      {meds.length === 0 ? <p className="text-sm text-muted">None listed.</p> : null}
      {meds.map((m) => (
        <button
          key={m.id}
          type="button"
          onClick={() => toggle(m.id)}
          className="flex w-full min-h-14 items-center justify-between rounded-xl border border-border bg-surface px-4 text-left"
        >
          <span>
            <span className="block font-medium">{m.name}</span>
            <span className="text-xs text-muted">
              {m.dose} · {m.time}
            </span>
          </span>
          <span className="text-xs uppercase tracking-widest text-sand">
            {takenToday.includes(m.id) ? "Taken" : "Due"}
          </span>
        </button>
      ))}
      <div className="grid grid-cols-2 gap-2">
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <Input value={dose} onChange={(e) => setDose(e.target.value)} placeholder="Dose" />
      </div>
      <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <Button
        variant="secondary"
        block
        onClick={() => {
          if (!name.trim()) return;
          addMed({ name: name.trim(), dose: dose.trim(), time });
          setName("");
          setDose("");
        }}
      >
        Add med
      </Button>
      {meds.map((m) => (
        <button
          key={`rm-${m.id}`}
          type="button"
          className="text-xs text-crisis"
          onClick={() => removeMed(m.id)}
        >
          Remove {m.name}
        </button>
      ))}
      <SectionLabel>Appointments</SectionLabel>
      {appts.map((a) => (
        <Card key={a.id}>
          <p className="font-medium">{a.title}</p>
          <p className="text-sm text-muted">
            {a.when} {a.where ? `· ${a.where}` : ""}
          </p>
          <button type="button" className="text-xs text-crisis mt-1" onClick={() => removeAppt(a.id)}>
            Remove
          </button>
        </Card>
      ))}
      <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="C&P, PT, primary…" />
      <Input type="datetime-local" value={when} onChange={(e) => setWhen(e.target.value)} />
      <Input value={where} onChange={(e) => setWhere(e.target.value)} placeholder="Where" />
      <Button
        variant="secondary"
        block
        onClick={() => {
          if (!title.trim() || !when) return;
          addAppt({ title: title.trim(), when, where: where.trim() });
          setTitle("");
          setWhen("");
          setWhere("");
        }}
      >
        Add appointment
      </Button>
    </Screen>
  );
}
