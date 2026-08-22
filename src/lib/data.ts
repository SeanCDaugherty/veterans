import type { CardId, Era, Struggle } from "./store";

export const ERAS: { id: Era; label: string; hint: string }[] = [
  { id: "oef-oif-ond", label: "OEF / OIF / OND", hint: "Afghanistan, Iraq, New Dawn" },
  { id: "gwot", label: "Other GWOT", hint: "Post-9/11, other theaters" },
  { id: "desert-storm", label: "Desert Storm / Shield", hint: "Gulf War era" },
  { id: "vietnam", label: "Vietnam", hint: "Including in-country and era" },
  { id: "korea-wwii", label: "Korea / WWII", hint: "Or earlier service" },
  { id: "other", label: "Other / peacetime", hint: "Any other chapter" },
  { id: "prefer-not", label: "Prefer not to say", hint: "No issue" },
];

export const STRUGGLES: { id: Struggle; label: string; hint: string }[] = [
  { id: "sleep", label: "Sleep", hint: "Nights are the fight" },
  { id: "ptsd", label: "PTSD / memories", hint: "Hypervigilance, startle, loops" },
  { id: "anger", label: "Anger / irritability", hint: "Short fuse, afterburn" },
  { id: "claims", label: "VA claims", hint: "Filing, waiting, evidence" },
  { id: "job", label: "Work / school", hint: "Civilian job or GI Bill" },
  { id: "family", label: "Family", hint: "Spouse, kids, distance" },
  { id: "isolation", label: "Isolation", hint: "Nobody gets it" },
  { id: "pain", label: "Pain / body", hint: "Joints, back, headaches" },
  { id: "money", label: "Money / housing", hint: "Bills, roof, next month" },
];

export type CardDef = {
  id: CardId;
  title: string;
  blurb: string;
  screen: string;
  tags: string[];
};

export const CARDS: CardDef[] = [
  { id: "breathe", title: "Breathe", blurb: "Box, tactical, 4-7-8. One round is enough.", screen: "breathe", tags: ["breathe", "regulate", "anxiety", "panic"] },
  { id: "grounding", title: "Ground", blurb: "5-4-3-2-1. Get back in the room.", screen: "grounding", tags: ["grounding", "ptsd", "flashback"] },
  { id: "mood", title: "Mood", blurb: "Private check-in. No feed. No scoreboard.", screen: "mood", tags: ["mood", "tracker", "mental"] },
  { id: "sleep", title: "Sleep wind-down", blurb: "Dump the day. Slow the body. Lights out.", screen: "sleep", tags: ["sleep", "insomnia", "night"] },
  { id: "anger", title: "Anger log", blurb: "Name the heat before it names you.", screen: "anger", tags: ["anger", "irritability"] },
  { id: "safety", title: "Safety plan", blurb: "Write it once. Use it when you need it.", screen: "safety", tags: ["safety", "crisis", "plan"] },
  { id: "claims", title: "Claims hub", blurb: "Checklists, PACT, secondaries, next step.", screen: "claims", tags: ["va", "claim", "pact", "supplemental"] },
  { id: "rating", title: "Rating estimator", blurb: "VA math + 2026 pay. Not a decision.", screen: "rating", tags: ["rating", "back pay", "combined"] },
  { id: "jobs", title: "Work & MOS", blurb: "Translate the job. Build a resume.", screen: "jobs", tags: ["job", "mos", "resume", "career"] },
  { id: "gi-bill", title: "GI Bill", blurb: "Months, housing, official comparison tool.", screen: "gi-bill", tags: ["gi bill", "school", "education"] },
  { id: "family", title: "Family", blurb: "Caregiver, CHAMPVA, how to talk about it.", screen: "family", tags: ["family", "spouse", "kids", "champva"] },
  { id: "meds", title: "Meds", blurb: "What you take. When. On this device only.", screen: "meds", tags: ["medication", "rx", "reminder"] },
  { id: "appointments", title: "Appointments", blurb: "C&P, PT, primary. Don’t drop one.", screen: "appointments", tags: ["appointment", "c&p", "clinic"] },
  { id: "community", title: "Local & tribe", blurb: "Vet Centers, posts, volunteer slots.", screen: "community", tags: ["vet center", "vfw", "legion", "volunteer"] },
  { id: "pt", title: "Body / PT", blurb: "Short routines. Pain is not a character test.", screen: "pt", tags: ["pt", "pain", "stretch"] },
];

const STRUGGLE_PINS: Record<Struggle, CardId[]> = {
  sleep: ["breathe", "sleep", "mood"],
  ptsd: ["breathe", "grounding", "mood", "safety"],
  anger: ["breathe", "anger", "grounding"],
  claims: ["claims", "rating", "appointments"],
  job: ["jobs", "gi-bill", "rating"],
  family: ["family", "appointments", "safety"],
  isolation: ["community", "family", "mood"],
  pain: ["pt", "meds", "appointments"],
  money: ["claims", "rating", "jobs"],
};

export function defaultPinsFor(struggles: Struggle[]): CardId[] {
  const seen = new Set<CardId>();
  const pins: CardId[] = [];
  for (const s of struggles) {
    for (const id of STRUGGLE_PINS[s] ?? []) {
      if (!seen.has(id)) {
        seen.add(id);
        pins.push(id);
      }
    }
  }
  if (!pins.includes("breathe")) pins.unshift("breathe");
  return pins.slice(0, 6);
}

export const MISSIONS = [
  "Four rounds of box breathing. That’s the whole mission.",
  "Drink a glass of water. Sit down to do it.",
  "Text one person who already knows you.",
  "Step outside for two minutes. Name five things you can see.",
  "Write down one thing that did not go wrong today.",
  "Lie on the floor and reset your back for three minutes.",
  "Check claim status. Ten minutes. Then stop.",
  "Take your meds on time. Log it.",
  "Put the phone in another room for one song.",
  "Tell your people one true, small sentence.",
  "Eat something with protein. Not a lecture. Just fuel.",
  "If you have a Vet Center number, save it in your phone.",
];

export function missionForDate(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0);
  const day = Math.floor((date.getTime() - start.getTime()) / 86400000);
  return MISSIONS[day % MISSIONS.length];
}

export const BREATHE = {
  box: {
    id: "box" as const,
    name: "Box breathing",
    blurb: "Four sides. Same count. Used in the fleet and the teams.",
    phases: [
      { label: "In", seconds: 4 },
      { label: "Hold", seconds: 4 },
      { label: "Out", seconds: 4 },
      { label: "Hold", seconds: 4 },
    ],
  },
  tactical: {
    id: "tactical" as const,
    name: "Tactical breathing",
    blurb: "Combat breathing. Longer exhale. Down-regulate.",
    phases: [
      { label: "In", seconds: 4 },
      { label: "Hold", seconds: 4 },
      { label: "Out", seconds: 6 },
      { label: "Hold", seconds: 2 },
    ],
  },
  "478": {
    id: "478" as const,
    name: "4-7-8",
    blurb: "Long hold, longer out. Night tool.",
    phases: [
      { label: "In", seconds: 4 },
      { label: "Hold", seconds: 7 },
      { label: "Out", seconds: 8 },
    ],
  },
  diaphragm: {
    id: "diaphragm" as const,
    name: "Diaphragmatic",
    blurb: "Belly rises. Chest stays quiet. Slow is the point.",
    phases: [
      { label: "In through the nose", seconds: 4 },
      { label: "Out through the mouth", seconds: 6 },
    ],
  },
};

export const PCL5 = [
  "Repeated, disturbing, unwanted memories of the stressful experience",
  "Repeated, disturbing dreams of the stressful experience",
  "Suddenly feeling or acting as if the stressful experience were happening again",
  "Feeling very upset when something reminded you of the stressful experience",
  "Having strong physical reactions when something reminded you of it (heart, breath, sweat)",
  "Avoiding memories, thoughts, or feelings related to the stressful experience",
  "Avoiding external reminders (people, places, conversations, situations)",
  "Trouble remembering important parts of the stressful experience",
  "Strong negative beliefs about yourself, other people, or the world",
  "Blaming yourself or someone else for the stressful experience or what happened after",
  "Strong negative feelings such as fear, horror, anger, guilt, or shame",
  "Loss of interest in activities that you used to enjoy",
  "Feeling distant or cut off from other people",
  "Trouble experiencing positive feelings (happiness, loving feelings)",
  "Irritable behavior, angry outbursts, or acting aggressively",
  "Taking too many risks or doing things that could cause you harm",
  "Being “superalert” or watchful or on guard",
  "Feeling jumpy or easily startled",
  "Having difficulty concentrating",
  "Trouble falling or staying asleep",
];

export const PCL_SCALE = [
  "Not at all",
  "A little bit",
  "Moderately",
  "Quite a bit",
  "Extremely",
];

export type Official = {
  id: string;
  title: string;
  blurb: string;
  href?: string;
  tel?: string;
  sms?: string;
  category: string;
  tags: string[];
};

export const OFFICIAL: Official[] = [
  {
    id: "vcl-call",
    title: "Veterans Crisis Line — call",
    blurb: "Dial 988, then press 1. 24/7. You do not need to be enrolled in VA.",
    tel: "988",
    href: "https://www.veteranscrisisline.net/",
    category: "Crisis",
    tags: ["crisis", "988", "suicide", "hotline"],
  },
  {
    id: "vcl-text",
    title: "Veterans Crisis Line — text",
    blurb: "Text 838255. 24/7 confidential.",
    sms: "838255",
    category: "Crisis",
    tags: ["crisis", "text", "838255"],
  },
  {
    id: "vcl-chat",
    title: "Veterans Crisis Line — chat",
    blurb: "Confidential chat with a VA responder.",
    href: "https://www.veteranscrisisline.net/get-help-now/chat/",
    category: "Crisis",
    tags: ["crisis", "chat"],
  },
  {
    id: "911",
    title: "Emergency — 911",
    blurb: "If you or someone else is in immediate danger.",
    tel: "911",
    category: "Crisis",
    tags: ["emergency", "911"],
  },
  {
    id: "vet-center-call",
    title: "Vet Center call center",
    blurb: "1-877-WAR-VETS. 24/7. Combat vets and families. Counseling, no claim required.",
    tel: "8779278387",
    href: "https://www.vetcenter.va.gov/",
    category: "Crisis",
    tags: ["vet center", "counseling", "readjustment"],
  },
  {
    id: "homeless",
    title: "National Call Center for Homeless Veterans",
    blurb: "1-877-4AID-VET. 24/7. Housing, HUD-VASH, prevention.",
    tel: "8774243838",
    href: "https://www.va.gov/homeless/",
    category: "Housing",
    tags: ["homeless", "housing", "hud-vash"],
  },
  {
    id: "myva411",
    title: "MyVA411",
    blurb: "Main VA information line. 24/7. 1-800-698-2411.",
    tel: "8006982411",
    href: "https://www.va.gov/contact-us/",
    category: "VA phones",
    tags: ["va", "411", "information"],
  },
  {
    id: "benefits-hotline",
    title: "VA benefits hotline",
    blurb: "Compensation, pension, claims. 1-800-827-1000. Mon–Fri 8a–9p ET.",
    tel: "8008271000",
    href: "https://www.va.gov/disability/",
    category: "VA phones",
    tags: ["benefits", "claim", "compensation"],
  },
  {
    id: "health-hotline",
    title: "VA health benefits hotline",
    blurb: "1-877-222-VETS (8387). Mon–Fri 8a–8p ET.",
    tel: "8772228387",
    href: "https://www.va.gov/health-care/",
    category: "VA phones",
    tags: ["health", "enrollment", "clinic"],
  },
  {
    id: "gi-hotline",
    title: "GI Bill hotline",
    blurb: "1-888-GI-BILL-1 (1-888-442-4551). Mon–Fri 8a–7p ET.",
    tel: "8884424551",
    href: "https://www.va.gov/education/about-gi-bill-benefits/",
    category: "VA phones",
    tags: ["gi bill", "education", "school"],
  },
  {
    id: "champva-phone",
    title: "CHAMPVA",
    blurb: "Family health when the veteran is 100% P&T (or in some cases 100% schedular). 1-800-733-8387.",
    tel: "8007338387",
    href: "https://www.va.gov/health-care/family-caregiver-benefits/champva/",
    category: "Family",
    tags: ["champva", "family", "insurance", "p&t"],
  },
  {
    id: "caregiver",
    title: "VA caregiver support line",
    blurb: "1-855-260-3274. Mon–Fri 8a–8p ET.",
    tel: "8552603274",
    href: "https://www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregivers/",
    category: "Family",
    tags: ["caregiver", "family"],
  },
  {
    id: "women-vets",
    title: "Women Veterans call center",
    blurb: "1-855-VA-WOMEN (1-855-829-6636).",
    tel: "8558296636",
    href: "https://www.womenshealth.va.gov/womenshealth/womenveteranscallcenter.asp",
    category: "VA phones",
    tags: ["women", "call center"],
  },
  {
    id: "loan-guaranty",
    title: "VA loan guaranty",
    blurb: "Home loan questions. 1-877-827-3702.",
    tel: "8778273702",
    href: "https://www.va.gov/housing-assistance/home-loans/",
    category: "Housing",
    tags: ["home loan", "mortgage", "housing"],
  },
  {
    id: "white-house-va",
    title: "White House VA hotline",
    blurb: "1-855-948-2311. Independent VA customer-service line.",
    tel: "8559482311",
    href: "https://www.va.gov/whva/",
    category: "VA phones",
    tags: ["hotline", "complaint"],
  },
  {
    id: "find-locations",
    title: "Find a VA facility / Vet Center",
    blurb: "Clinics, hospitals, Vet Centers near you.",
    href: "https://www.va.gov/find-locations/",
    category: "Local",
    tags: ["locator", "clinic", "vet center", "hospital"],
  },
  {
    id: "vet-center-find",
    title: "Find a Vet Center",
    blurb: "Community readjustment counseling. No claim, no copay.",
    href: "https://www.va.gov/find-locations/?facilityType=vet_center",
    category: "Local",
    tags: ["vet center", "counseling"],
  },
  {
    id: "file-claim",
    title: "File a disability claim",
    blurb: "VA.gov 21-526EZ. Start with an intent to file if you need time.",
    href: "https://www.va.gov/disability/how-to-file-claim/",
    category: "Claims",
    tags: ["file", "526", "intent to file"],
  },
  {
    id: "claim-status",
    title: "Check claim or appeal status",
    blurb: "Sign in on VA.gov.",
    href: "https://www.va.gov/claim-or-appeal-status/",
    category: "Claims",
    tags: ["status", "appeal", "supplemental"],
  },
  {
    id: "pact",
    title: "PACT Act",
    blurb: "Toxic exposure, burn pits, presumptives. File even if you were denied before.",
    href: "https://www.va.gov/resources/the-pact-act-and-your-va-benefits/",
    category: "Claims",
    tags: ["pact", "burn pit", "toxic", "presumptive"],
  },
  {
    id: "vso",
    title: "Find an accredited VSO",
    blurb: "Free help. DAV, VFW, American Legion, state, county.",
    href: "https://www.va.gov/disability/get-help-filing-claim/",
    category: "Claims",
    tags: ["vso", "dav", "representative"],
  },
  {
    id: "accreditation",
    title: "Accredited attorney / agent locator",
    blurb: "VA Office of General Counsel search. Confirm accreditation before you sign.",
    href: "https://www.va.gov/ogc/apps/accreditation/index.asp",
    category: "Claims",
    tags: ["attorney", "lawyer", "agent", "accredited"],
  },
  {
    id: "decision-reviews",
    title: "Decision reviews",
    blurb: "Supplemental claim, Higher-Level Review, Board appeal.",
    href: "https://www.va.gov/decision-reviews/",
    category: "Claims",
    tags: ["supplemental", "hlr", "board", "appeal"],
  },
  {
    id: "rates",
    title: "Current compensation rates",
    blurb: "Official 2026 tables. Dependents, SMC, A&A.",
    href: "https://www.va.gov/disability/compensation-rates/veteran-rates/",
    category: "Claims",
    tags: ["pay", "rates", "smc"],
  },
  {
    id: "ch31",
    title: "VR&E (Chapter 31)",
    blurb: "Voc rehab. Training, tools, sometimes independent living. You can use it employed.",
    href: "https://www.va.gov/careers-employment/vocational-rehabilitation/",
    category: "Work",
    tags: ["vre", "chapter 31", "voc rehab"],
  },
  {
    id: "ch35",
    title: "Chapter 35 DEA",
    blurb: "Education for dependents of veterans who are 100% P&T, or who died of service-connected causes.",
    href: "https://www.va.gov/education/survivor-dependent-benefits/dependents-education-assistance/",
    category: "Family",
    tags: ["chapter 35", "dea", "dependents", "college"],
  },
  {
    id: "gi-compare",
    title: "GI Bill comparison tool",
    blurb: "Official school + housing estimator. Use this, not a random blog.",
    href: "https://www.va.gov/education/gi-bill-comparison-tool/",
    category: "Work",
    tags: ["gi bill", "school", "bah"],
  },
  {
    id: "usajobs",
    title: "USAJOBS — veterans",
    blurb: "Federal jobs. Preference, VRA, 30% compensable.",
    href: "https://www.usajobs.gov/help/working-in-government/unique-hiring-paths/veterans/",
    category: "Work",
    tags: ["jobs", "federal", "usajobs"],
  },
  {
    id: "dol-vets",
    title: "DoL VETS",
    blurb: "Employment services, USERRA, Gold Card.",
    href: "https://www.dol.gov/agencies/vets",
    category: "Work",
    tags: ["jobs", "dol", "userra"],
  },
  {
    id: "va-careers",
    title: "VA careers & employment",
    blurb: "VA employment hub, job fairs, tools.",
    href: "https://www.va.gov/careers-employment/",
    category: "Work",
    tags: ["jobs", "career"],
  },
  {
    id: "hud-vash",
    title: "HUD-VASH",
    blurb: "Housing voucher + VA case management for veterans experiencing homelessness.",
    href: "https://www.va.gov/homeless/hud-vash.asp",
    category: "Housing",
    tags: ["hud-vash", "voucher", "homeless"],
  },
  {
    id: "financial-counseling",
    title: "VA financial counseling (home loan)",
    blurb: "Personal Financial Affairs / financial assessment resources around VA home loans.",
    href: "https://www.va.gov/housing-assistance/home-loans/",
    category: "Housing",
    tags: ["money", "counseling", "budget"],
  },
  {
    id: "ptsd-coach",
    title: "PTSD Coach (VA)",
    blurb: "Official self-management tools from the National Center for PTSD.",
    href: "https://mobile.va.gov/app/ptsd-coach",
    category: "VA apps",
    tags: ["ptsd", "app", "coach"],
  },
  {
    id: "mindfulness-coach",
    title: "Mindfulness Coach (VA)",
    blurb: "Gradual, self-guided mindfulness training.",
    href: "https://mobile.va.gov/app/mindfulness-coach",
    category: "VA apps",
    tags: ["mindfulness", "app"],
  },
  {
    id: "aims",
    title: "AIMS for Anger Management (VA)",
    blurb: "Track and manage anger and irritability.",
    href: "https://mobile.va.gov/app/aims-anger-management",
    category: "VA apps",
    tags: ["anger", "aims", "app"],
  },
  {
    id: "vetchange",
    title: "VetChange (VA)",
    blurb: "Drinking, stress, and healthier habits.",
    href: "https://mobile.va.gov/app/vetchange",
    category: "VA apps",
    tags: ["alcohol", "vetchange", "app"],
  },
  {
    id: "safety-plan-app",
    title: "Safety Plan (VA)",
    blurb: "Official Stanley-Brown style safety plan app.",
    href: "https://mobile.va.gov/app/safety-plan",
    category: "VA apps",
    tags: ["safety", "app"],
  },
  {
    id: "insomnia-coach",
    title: "Insomnia Coach (VA)",
    blurb: "CBT-I style self-care for sleep. Standalone.",
    href: "https://mobile.va.gov/app/insomnia-coach",
    category: "VA apps",
    tags: ["sleep", "insomnia", "app"],
  },
  {
    id: "cbti-coach",
    title: "CBT-i Coach (VA)",
    blurb: "Companion for CBT-I with a provider. Not a solo replacement.",
    href: "https://mobile.va.gov/app/cbt-i-coach",
    category: "VA apps",
    tags: ["sleep", "cbt", "app"],
  },
  {
    id: "family-coach",
    title: "PTSD Family Coach (VA)",
    blurb: "For families living with PTSD. Education + tools.",
    href: "https://mobile.va.gov/app/ptsd-family-coach",
    category: "VA apps",
    tags: ["family", "ptsd", "app"],
  },
  {
    id: "ptsd-online",
    title: "PTSD Coach Online",
    blurb: "Browser tools if you don’t want another app.",
    href: "https://www.ptsd.va.gov/apps/ptsdcoachonline/default.htm",
    category: "VA apps",
    tags: ["ptsd", "online"],
  },
  {
    id: "nctptsd",
    title: "National Center for PTSD",
    blurb: "About PTSD, treatments that actually work, family resources.",
    href: "https://www.ptsd.va.gov/",
    category: "Learn",
    tags: ["ptsd", "education"],
  },
  {
    id: "vfw",
    title: "VFW post locator",
    blurb: "Find a post. Membership is optional for some events.",
    href: "https://www.vfw.org/find-a-post",
    category: "Local",
    tags: ["vfw", "post", "community"],
  },
  {
    id: "legion",
    title: "American Legion post locator",
    blurb: "Posts, programs, local help.",
    href: "https://www.legion.org/posts",
    category: "Local",
    tags: ["legion", "post", "community"],
  },
  {
    id: "dav",
    title: "DAV",
    blurb: "Free claims help. Rides. Community.",
    href: "https://www.dav.org/",
    category: "Local",
    tags: ["dav", "vso", "rides"],
  },
  {
    id: "iava",
    title: "IAVA",
    blurb: "Post-9/11 community and policy.",
    href: "https://iava.org/",
    category: "Local",
    tags: ["iava", "post-9/11"],
  },
  {
    id: "team-rubicon",
    title: "Team Rubicon",
    blurb: "Disaster response. A mission with a start and an end.",
    href: "https://teamrubiconusa.org/",
    category: "Local",
    tags: ["volunteer", "team rubicon"],
  },
  {
    id: "mission-continues",
    title: "The Mission Continues",
    blurb: "Service platoons in cities.",
    href: "https://www.missioncontinues.org/",
    category: "Local",
    tags: ["volunteer", "mission continues"],
  },
  {
    id: "state-va",
    title: "State veterans agencies",
    blurb: "State benefits, property tax, plates, homes. Don’t skip your state.",
    href: "https://www.va.gov/statedva.htm",
    category: "Claims",
    tags: ["state", "benefits"],
  },
];

export const CLAIM_STEPS = [
  { title: "Intent to file", body: "Locks your effective date for a year. Do this even if the packet isn’t ready. VA.gov or a VSO." },
  { title: "Records", body: "DD214. STR. VA medical. Private records. DBQs. Buddy statements (21-10210). Your own statement — dates, units, what happened, what it does now." },
  { title: "File", body: "21-526EZ on VA.gov, or through an accredited VSO / attorney. Fully developed if you can. Don’t wait for perfect." },
  { title: "C&P exam", body: "Show up. Tell the truth. Describe your worst days, not your best. Bring a list of symptoms. You can have someone wait with you." },
  { title: "Decision", body: "Read the whole letter. Rating. Effective date. What they granted, deferred, denied. Keep it." },
  { title: "If it’s wrong", body: "Supplemental (new evidence). Higher-Level Review (same evidence, different reviewer). Board. Deadlines matter. Use an accredited rep." },
];

export const PACT_NOTES = [
  "Burn pits, oil fires, sandstorms, contaminated water, Agent Orange, radiation, and other toxic exposures.",
  "If you were denied before the PACT Act, you can file again. Many presumptives were added.",
  "You do not need a nexus letter for a presumptive condition. You still need a diagnosis and service in a qualifying location/time.",
  "Secondaries still need a medical link (sleep apnea secondary to PTSD/rhinitis, GERD to meds or PTSD, radiculopathy to the back, and so on).",
];

export const SECONDARIES = [
  { from: "PTSD", to: "Migraines, GERD, IBS, sleep apnea, ED / SMC-K, bruxism, depression, alcohol use, hypertension" },
  { from: "Tinnitus / hearing", to: "Mental health increase, balance issues — case by case" },
  { from: "Knee / ankle / back", to: "Opposite joint, hips, radiculopathy, gait" },
  { from: "Sinusitis / rhinitis", to: "Sleep apnea, migraines, anosmia" },
  { from: "Meds for SC conditions", to: "ED, GERD, kidney issues — bring the Rx list" },
];

export const DOC_CHECKLIST = [
  "DD214 / DD215",
  "Service treatment records",
  "VA medical records",
  "Private / community care records",
  "DBQ or specialist notes",
  "Personal statement (lay evidence)",
  "Buddy / spouse statements",
  "Intent to File confirmation",
  "Dependency docs (marriage, birth)",
  "C&P exam copy (if you have it)",
];

export type MosRow = {
  code: string;
  branch: string;
  mil: string;
  civ: string[];
  skills: string;
};

export const MOS: MosRow[] = [
  { code: "0311", branch: "USMC", mil: "Rifleman", civ: ["Security specialist", "Law enforcement", "Warehouse lead", "Field technician"], skills: "Small-unit leadership, weapons safety, field problem-solving" },
  { code: "0331", branch: "USMC", mil: "Machine Gunner", civ: ["Security", "Heavy equipment", "Operations"], skills: "Crew-served systems, discipline under load" },
  { code: "0341", branch: "USMC", mil: "Mortarman", civ: ["Survey", "Logistics", "Emergency management"], skills: "Fire direction, maps, teamwork" },
  { code: "0351", branch: "USMC", mil: "Infantry Assault", civ: ["Demolition (licensed)", "Construction", "Security"], skills: "Breaching, demo safety, small teams" },
  { code: "0369", branch: "USMC", mil: "Infantry Unit Leader", civ: ["Operations manager", "Supervisor", "Project coordinator"], skills: "NCO leadership, training, accountability" },
  { code: "0861", branch: "USMC", mil: "Fire Support / ANGLICO path", civ: ["Emergency management", "Dispatcher", "Operations analyst"], skills: "Joint fires, comms, high-tempo coordination" },
  { code: "11B", branch: "Army", mil: "Infantryman", civ: ["Security", "Law enforcement", "Labor lead"], skills: "Team tactics, endurance, fieldcraft" },
  { code: "11C", branch: "Army", mil: "Indirect Fire Infantryman", civ: ["Survey", "Construction", "Logistics"], skills: "Gunnery math, crew drills" },
  { code: "13F", branch: "Army", mil: "Fire Support Specialist", civ: ["Emergency management", "GIS tech", "Analyst"], skills: "Targeting, maps, joint ops" },
  { code: "19K", branch: "Army", mil: "Armor Crewman", civ: ["Heavy equipment", "Mechanic helper", "Logistics"], skills: "Tracked vehicles, maintenance, crew" },
  { code: "25B", branch: "Army", mil: "IT Specialist", civ: ["Help desk", "Systems admin", "Network tech"], skills: "DoD systems, tickets, security basics" },
  { code: "25U", branch: "Army", mil: "Signal Support", civ: ["Telecom", "Field IT", "Radio tech"], skills: "Comms gear, troubleshooting" },
  { code: "31B", branch: "Army", mil: "Military Police", civ: ["Police", "Security manager", "Corrections", "Loss prevention"], skills: "Law, traffic, investigations intro" },
  { code: "35F", branch: "Army", mil: "Intel Analyst", civ: ["Analyst", "Researcher", "Threat intel"], skills: "Link analysis, briefings, writing" },
  { code: "68W", branch: "Army", mil: "Combat Medic", civ: ["EMT", "Paramedic track", "CNA", "Medical assistant"], skills: "Trauma, triage, calm under pressure" },
  { code: "88M", branch: "Army", mil: "Motor Transport", civ: ["CDL driver", "Fleet", "Dispatch"], skills: "Convoy, maintenance, hours" },
  { code: "92Y", branch: "Army", mil: "Unit Supply", civ: ["Inventory", "Purchasing", "Warehouse"], skills: "Property book, accountability" },
  { code: "12B", branch: "Army", mil: "Combat Engineer", civ: ["Construction", "Heavy equipment", "Survey"], skills: "Demo, fortification, machines" },
  { code: "15T", branch: "Army", mil: "UH-60 Repairer", civ: ["A&P track", "Aviation maintenance"], skills: "Airframe, TM, QA" },
  { code: "HM", branch: "Navy", mil: "Hospital Corpsman", civ: ["EMT", "Medical assistant", "LPN track"], skills: "Sick call, trauma, FMF if attached" },
  { code: "MA", branch: "Navy", mil: "Master-at-Arms", civ: ["Police", "Port security", "Federal LE"], skills: "Force protection, investigations" },
  { code: "IT", branch: "Navy", mil: "Information Systems Tech", civ: ["Network admin", "Cyber", "Help desk"], skills: "Networks, messages, security" },
  { code: "BM", branch: "Navy", mil: "Boatswain’s Mate", civ: ["Maritime", "Crane / deck", "Supervisor"], skills: "Deck ops, small boats, leadership" },
  { code: "MM", branch: "Navy", mil: "Machinist’s Mate", civ: ["Industrial mechanic", "Power plant", "HVAC helper"], skills: "Engines, pipes, watchstanding" },
  { code: "OS", branch: "Navy", mil: "Operations Specialist", civ: ["Dispatcher", "Air traffic support", "Analyst"], skills: "Radar, CIC, comms" },
  { code: "3P0", branch: "USAF", mil: "Security Forces", civ: ["Police", "Federal LE", "Security manager"], skills: "Base defense, law, weapons" },
  { code: "1N0", branch: "USAF", mil: "All Source Intel", civ: ["Analyst", "OSINT", "Research"], skills: "Briefings, fusion, writing" },
  { code: "1D7", branch: "USAF", mil: "Cyber Defense", civ: ["SOC analyst", "Sysadmin", "IT"], skills: "Networks, incident response" },
  { code: "4N0", branch: "USAF", mil: "Aerospace Medical Service", civ: ["EMT", "Medical assistant", "Nurse track"], skills: "Clinic + emergency" },
  { code: "2T2", branch: "USAF", mil: "Air Transportation", civ: ["Logistics", "Cargo", "Airline ops"], skills: "Load planning, hazmat, pallets" },
  { code: "3E", branch: "USAF", mil: "Civil Engineer (various)", civ: ["Trades", "Facilities", "Project"], skills: "Base infrastructure" },
  { code: "SO", branch: "USCG", mil: "Maritime Enforcement", civ: ["Federal LE", "Port security", "Police"], skills: "Boarding, law, small boats" },
  { code: "OS-CG", branch: "USCG", mil: "Operations Specialist", civ: ["Dispatch", "Watchfloor", "Analyst"], skills: "C2, search and rescue support" },
  { code: "GM", branch: "USCG", mil: "Gunner’s Mate", civ: ["Armorer", "Security", "Instructor"], skills: "Weapons systems, training" },
];

export const JOB_BOARDS: Official[] = [
  { id: "jb-usa", title: "USAJOBS — veterans path", blurb: "Federal. Preference is real if you use it.", href: "https://www.usajobs.gov/help/working-in-government/unique-hiring-paths/veterans/", category: "Work", tags: ["jobs"] },
  { id: "jb-va", title: "VA employment hub", blurb: "VA’s own career tools and events.", href: "https://www.va.gov/careers-employment/", category: "Work", tags: ["jobs"] },
  { id: "jb-dol", title: "DoL veteran employment", blurb: "AJCs, Gold Card, USERRA.", href: "https://www.dol.gov/agencies/vets", category: "Work", tags: ["jobs"] },
  { id: "jb-hireheroes", title: "Hire Heroes USA", blurb: "Free resume and job help for veterans and spouses.", href: "https://www.hireheroesusa.org/", category: "Work", tags: ["resume", "jobs"] },
  { id: "jb-recruit", title: "RecruitMilitary", blurb: "Veteran job fairs and listings.", href: "https://recruitmilitary.com/", category: "Work", tags: ["jobs", "fair"] },
];

export const PT_ROUTINES = [
  {
    id: "back",
    title: "Low back — 6 minutes",
    steps: [
      "Lie on your back, knees bent. Breathe into the belly. 6 slow breaths.",
      "Knee-to-chest, one side then the other. 5 each. No yanking.",
      "Figure-4 stretch, 30 seconds each side.",
      "Cat-cow on hands and knees, 8 slow cycles.",
      "Stop if pain shoots down a leg or goes numb. That’s a provider conversation.",
    ],
  },
  {
    id: "ankle",
    title: "Ankle — 5 minutes",
    steps: [
      "Alphabet with your toes, sitting. 2 times.",
      "Ankle circles, 10 each way.",
      "Towel stretch for the calf, 30 seconds × 3.",
      "If you have a band: inversion/eversion 10 slow reps.",
      "Swelling, give, or locking — get it seen. Old helo landings still count.",
    ],
  },
  {
    id: "shoulders",
    title: "Shoulders / neck — 5 minutes",
    steps: [
      "Chin tucks, 8 slow. Think ‘make a double chin,’ not look up.",
      "Doorway pec stretch, 30 seconds each side.",
      "Scapular squeezes, 10. Elbows at your sides.",
      "Pendulum hangs, 30 seconds each arm if a shoulder is angry.",
    ],
  },
  {
    id: "head",
    title: "Headache / migraine reset",
    steps: [
      "Dark room. This app is already dark.",
      "Box breathing, 4 rounds. Optional 4-7-8 after.",
      "Water. Then a snack if you’ve been empty.",
      "Cold pack on the neck, not the eyes, if that is your pattern.",
      "If this is sudden, worst-of-life, or with weakness/vision loss — 911.",
    ],
  },
];

export const PROFILES = [
  {
    id: "claims",
    callsign: "Marcus R.",
    era: "oef-oif-ond" as const,
    struggles: ["claims", "money", "pain"] as Struggle[],
    pins: ["claims", "rating", "appointments", "meds", "breathe"] as CardId[],
    title: "Claims-focused",
    blurb: "OIF. Rated, not done. PACT, secondaries, the letter that still isn’t right. Home is the hub, the estimator, and the next exam.",
  },
  {
    id: "ptsd",
    callsign: "Elena V.",
    era: "oef-oif-ond" as const,
    struggles: ["sleep", "ptsd", "anger", "isolation"] as Struggle[],
    pins: ["breathe", "sleep", "grounding", "mood", "safety", "anger"] as CardId[],
    title: "PTSD / sleep-focused",
    blurb: "OEF. Nights are the fight. Home is breathe, wind-down, grounding, a private log, a plan. Claims can wait in Tools.",
  },
  {
    id: "job",
    callsign: "Devon K.",
    era: "gwot" as const,
    struggles: ["job", "money", "family"] as Struggle[],
    pins: ["jobs", "gi-bill", "rating", "community", "family"] as CardId[],
    title: "Job-search-focused",
    blurb: "Just now civilian. MOS on the résumé is a foreign language. Home is translator, GI Bill, pay estimator, and a place to land.",
  },
];

export function searchIndex() {
  const rows: { id: string; title: string; blurb: string; screen?: string; href?: string; tel?: string; sms?: string; kind: string }[] = [];
  for (const c of CARDS) {
    rows.push({
      id: `card-${c.id}`,
      title: c.title,
      blurb: c.blurb,
      screen: c.screen,
      kind: "Tool",
    });
  }
  for (const o of OFFICIAL) {
    rows.push({
      id: o.id,
      title: o.title,
      blurb: o.blurb,
      href: o.href,
      tel: o.tel,
      sms: o.sms,
      kind: o.category,
    });
  }
  rows.push(
    { id: "s-breathe", title: "Box breathing", blurb: "Four-count. In, hold, out, hold.", screen: "breathe", kind: "Tool" },
    { id: "s-tactical", title: "Tactical / combat breathing", blurb: "Longer exhale.", screen: "breathe", kind: "Tool" },
    { id: "s-54321", title: "5-4-3-2-1 grounding", blurb: "Senses. Back in the room.", screen: "grounding", kind: "Tool" },
    { id: "s-pcl", title: "PCL-5 symptom log", blurb: "Private PTSD checklist. Not a diagnosis.", screen: "pcl5", kind: "Tool" },
    { id: "s-thought", title: "Thought stopping", blurb: "Notice. Label. Stop. Replace.", screen: "thought", kind: "Tool" },
    { id: "s-distress", title: "Distress tolerance", blurb: "Short skills when you’re already in it.", screen: "distress", kind: "Tool" },
    { id: "s-backpay", title: "Back-pay calculator", blurb: "Effective date × monthly rate.", screen: "rating", kind: "Tool" },
    { id: "s-mos", title: "MOS translator", blurb: "0311, 11B, HM, 68W…", screen: "jobs", kind: "Tool" },
  );
  return rows;
}

export function matchesQuery(q: string, title: string, blurb: string, extra = "") {
  const n = q.trim().toLowerCase();
  if (!n) return false;
  const hay = `${title} ${blurb} ${extra}`.toLowerCase();
  return n.split(/\s+/).every((w) => hay.includes(w));
}
