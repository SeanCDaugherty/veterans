import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Briefcase, S as Calendar, _ as Flame, a as User, b as ChevronLeft, c as Search, d as Moon, f as MessageSquare, g as GraduationCap, h as HeartPulse, i as Users, l as Pill, m as House, n as Wrench, p as MapPin, r as Wind, s as Shield, t as X, u as Phone, v as FileText, w as Activity, x as Check, y as CircleDot } from "../_libs/lucide-react.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-HjXiyNkJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ERAS = [
	{
		id: "oef-oif-ond",
		label: "OEF / OIF / OND",
		hint: "Afghanistan, Iraq, New Dawn"
	},
	{
		id: "gwot",
		label: "Other GWOT",
		hint: "Post-9/11, other theaters"
	},
	{
		id: "desert-storm",
		label: "Desert Storm / Shield",
		hint: "Gulf War era"
	},
	{
		id: "vietnam",
		label: "Vietnam",
		hint: "Including in-country and era"
	},
	{
		id: "korea-wwii",
		label: "Korea / WWII",
		hint: "Or earlier service"
	},
	{
		id: "other",
		label: "Other / peacetime",
		hint: "Any other chapter"
	},
	{
		id: "prefer-not",
		label: "Prefer not to say",
		hint: "No issue"
	}
];
var STRUGGLES = [
	{
		id: "sleep",
		label: "Sleep",
		hint: "Nights are the fight"
	},
	{
		id: "ptsd",
		label: "PTSD / memories",
		hint: "Hypervigilance, startle, loops"
	},
	{
		id: "anger",
		label: "Anger / irritability",
		hint: "Short fuse, afterburn"
	},
	{
		id: "claims",
		label: "VA claims",
		hint: "Filing, waiting, evidence"
	},
	{
		id: "job",
		label: "Work / school",
		hint: "Civilian job or GI Bill"
	},
	{
		id: "family",
		label: "Family",
		hint: "Spouse, kids, distance"
	},
	{
		id: "isolation",
		label: "Isolation",
		hint: "Nobody gets it"
	},
	{
		id: "pain",
		label: "Pain / body",
		hint: "Joints, back, headaches"
	},
	{
		id: "money",
		label: "Money / housing",
		hint: "Bills, roof, next month"
	}
];
var CARDS = [
	{
		id: "breathe",
		title: "Breathe",
		blurb: "Box, tactical, 4-7-8. One round is enough.",
		screen: "breathe",
		tags: [
			"breathe",
			"regulate",
			"anxiety",
			"panic"
		]
	},
	{
		id: "grounding",
		title: "Ground",
		blurb: "5-4-3-2-1. Get back in the room.",
		screen: "grounding",
		tags: [
			"grounding",
			"ptsd",
			"flashback"
		]
	},
	{
		id: "mood",
		title: "Mood",
		blurb: "Private check-in. No feed. No scoreboard.",
		screen: "mood",
		tags: [
			"mood",
			"tracker",
			"mental"
		]
	},
	{
		id: "sleep",
		title: "Sleep wind-down",
		blurb: "Dump the day. Slow the body. Lights out.",
		screen: "sleep",
		tags: [
			"sleep",
			"insomnia",
			"night"
		]
	},
	{
		id: "anger",
		title: "Anger log",
		blurb: "Name the heat before it names you.",
		screen: "anger",
		tags: ["anger", "irritability"]
	},
	{
		id: "safety",
		title: "Safety plan",
		blurb: "Write it once. Use it when you need it.",
		screen: "safety",
		tags: [
			"safety",
			"crisis",
			"plan"
		]
	},
	{
		id: "claims",
		title: "Claims hub",
		blurb: "Checklists, PACT, secondaries, next step.",
		screen: "claims",
		tags: [
			"va",
			"claim",
			"pact",
			"supplemental"
		]
	},
	{
		id: "rating",
		title: "Rating estimator",
		blurb: "VA math + 2026 pay. Not a decision.",
		screen: "rating",
		tags: [
			"rating",
			"back pay",
			"combined"
		]
	},
	{
		id: "jobs",
		title: "Work & MOS",
		blurb: "Translate the job. Build a resume.",
		screen: "jobs",
		tags: [
			"job",
			"mos",
			"resume",
			"career"
		]
	},
	{
		id: "gi-bill",
		title: "GI Bill",
		blurb: "Months, housing, official comparison tool.",
		screen: "gi-bill",
		tags: [
			"gi bill",
			"school",
			"education"
		]
	},
	{
		id: "family",
		title: "Family",
		blurb: "Caregiver, CHAMPVA, how to talk about it.",
		screen: "family",
		tags: [
			"family",
			"spouse",
			"kids",
			"champva"
		]
	},
	{
		id: "meds",
		title: "Meds",
		blurb: "What you take. When. On this device only.",
		screen: "meds",
		tags: [
			"medication",
			"rx",
			"reminder"
		]
	},
	{
		id: "appointments",
		title: "Appointments",
		blurb: "C&P, PT, primary. Don’t drop one.",
		screen: "appointments",
		tags: [
			"appointment",
			"c&p",
			"clinic"
		]
	},
	{
		id: "community",
		title: "Local & tribe",
		blurb: "Vet Centers, posts, volunteer slots.",
		screen: "community",
		tags: [
			"vet center",
			"vfw",
			"legion",
			"volunteer"
		]
	},
	{
		id: "pt",
		title: "Body / PT",
		blurb: "Short routines. Pain is not a character test.",
		screen: "pt",
		tags: [
			"pt",
			"pain",
			"stretch"
		]
	}
];
var STRUGGLE_PINS = {
	sleep: [
		"breathe",
		"sleep",
		"mood"
	],
	ptsd: [
		"breathe",
		"grounding",
		"mood",
		"safety"
	],
	anger: [
		"breathe",
		"anger",
		"grounding"
	],
	claims: [
		"claims",
		"rating",
		"appointments"
	],
	job: [
		"jobs",
		"gi-bill",
		"rating"
	],
	family: [
		"family",
		"appointments",
		"safety"
	],
	isolation: [
		"community",
		"family",
		"mood"
	],
	pain: [
		"pt",
		"meds",
		"appointments"
	],
	money: [
		"claims",
		"rating",
		"jobs"
	]
};
function defaultPinsFor(struggles) {
	const seen = /* @__PURE__ */ new Set();
	const pins = [];
	for (const s of struggles) for (const id of STRUGGLE_PINS[s] ?? []) if (!seen.has(id)) {
		seen.add(id);
		pins.push(id);
	}
	if (!pins.includes("breathe")) pins.unshift("breathe");
	return pins.slice(0, 6);
}
var MISSIONS = [
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
	"If you have a Vet Center number, save it in your phone."
];
function missionForDate(date = /* @__PURE__ */ new Date()) {
	const start = new Date(date.getFullYear(), 0, 0);
	return MISSIONS[Math.floor((date.getTime() - start.getTime()) / 864e5) % MISSIONS.length];
}
var BREATHE = {
	box: {
		id: "box",
		name: "Box breathing",
		blurb: "Four sides. Same count. Used in the fleet and the teams.",
		phases: [
			{
				label: "In",
				seconds: 4
			},
			{
				label: "Hold",
				seconds: 4
			},
			{
				label: "Out",
				seconds: 4
			},
			{
				label: "Hold",
				seconds: 4
			}
		]
	},
	tactical: {
		id: "tactical",
		name: "Tactical breathing",
		blurb: "Combat breathing. Longer exhale. Down-regulate.",
		phases: [
			{
				label: "In",
				seconds: 4
			},
			{
				label: "Hold",
				seconds: 4
			},
			{
				label: "Out",
				seconds: 6
			},
			{
				label: "Hold",
				seconds: 2
			}
		]
	},
	"478": {
		id: "478",
		name: "4-7-8",
		blurb: "Long hold, longer out. Night tool.",
		phases: [
			{
				label: "In",
				seconds: 4
			},
			{
				label: "Hold",
				seconds: 7
			},
			{
				label: "Out",
				seconds: 8
			}
		]
	},
	diaphragm: {
		id: "diaphragm",
		name: "Diaphragmatic",
		blurb: "Belly rises. Chest stays quiet. Slow is the point.",
		phases: [{
			label: "In through the nose",
			seconds: 4
		}, {
			label: "Out through the mouth",
			seconds: 6
		}]
	}
};
var PCL5 = [
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
	"Trouble falling or staying asleep"
];
var PCL_SCALE = [
	"Not at all",
	"A little bit",
	"Moderately",
	"Quite a bit",
	"Extremely"
];
var OFFICIAL = [
	{
		id: "vcl-call",
		title: "Veterans Crisis Line — call",
		blurb: "Dial 988, then press 1. 24/7. You do not need to be enrolled in VA.",
		tel: "988",
		href: "https://www.veteranscrisisline.net/",
		category: "Crisis",
		tags: [
			"crisis",
			"988",
			"suicide",
			"hotline"
		]
	},
	{
		id: "vcl-text",
		title: "Veterans Crisis Line — text",
		blurb: "Text 838255. 24/7 confidential.",
		sms: "838255",
		category: "Crisis",
		tags: [
			"crisis",
			"text",
			"838255"
		]
	},
	{
		id: "vcl-chat",
		title: "Veterans Crisis Line — chat",
		blurb: "Confidential chat with a VA responder.",
		href: "https://www.veteranscrisisline.net/get-help-now/chat/",
		category: "Crisis",
		tags: ["crisis", "chat"]
	},
	{
		id: "911",
		title: "Emergency — 911",
		blurb: "If you or someone else is in immediate danger.",
		tel: "911",
		category: "Crisis",
		tags: ["emergency", "911"]
	},
	{
		id: "vet-center-call",
		title: "Vet Center call center",
		blurb: "1-877-WAR-VETS. 24/7. Combat vets and families. Counseling, no claim required.",
		tel: "8779278387",
		href: "https://www.vetcenter.va.gov/",
		category: "Crisis",
		tags: [
			"vet center",
			"counseling",
			"readjustment"
		]
	},
	{
		id: "homeless",
		title: "National Call Center for Homeless Veterans",
		blurb: "1-877-4AID-VET. 24/7. Housing, HUD-VASH, prevention.",
		tel: "8774243838",
		href: "https://www.va.gov/homeless/",
		category: "Housing",
		tags: [
			"homeless",
			"housing",
			"hud-vash"
		]
	},
	{
		id: "myva411",
		title: "MyVA411",
		blurb: "Main VA information line. 24/7. 1-800-698-2411.",
		tel: "8006982411",
		href: "https://www.va.gov/contact-us/",
		category: "VA phones",
		tags: [
			"va",
			"411",
			"information"
		]
	},
	{
		id: "benefits-hotline",
		title: "VA benefits hotline",
		blurb: "Compensation, pension, claims. 1-800-827-1000. Mon–Fri 8a–9p ET.",
		tel: "8008271000",
		href: "https://www.va.gov/disability/",
		category: "VA phones",
		tags: [
			"benefits",
			"claim",
			"compensation"
		]
	},
	{
		id: "health-hotline",
		title: "VA health benefits hotline",
		blurb: "1-877-222-VETS (8387). Mon–Fri 8a–8p ET.",
		tel: "8772228387",
		href: "https://www.va.gov/health-care/",
		category: "VA phones",
		tags: [
			"health",
			"enrollment",
			"clinic"
		]
	},
	{
		id: "gi-hotline",
		title: "GI Bill hotline",
		blurb: "1-888-GI-BILL-1 (1-888-442-4551). Mon–Fri 8a–7p ET.",
		tel: "8884424551",
		href: "https://www.va.gov/education/about-gi-bill-benefits/",
		category: "VA phones",
		tags: [
			"gi bill",
			"education",
			"school"
		]
	},
	{
		id: "champva-phone",
		title: "CHAMPVA",
		blurb: "Family health when the veteran is 100% P&T (or in some cases 100% schedular). 1-800-733-8387.",
		tel: "8007338387",
		href: "https://www.va.gov/health-care/family-caregiver-benefits/champva/",
		category: "Family",
		tags: [
			"champva",
			"family",
			"insurance",
			"p&t"
		]
	},
	{
		id: "caregiver",
		title: "VA caregiver support line",
		blurb: "1-855-260-3274. Mon–Fri 8a–8p ET.",
		tel: "8552603274",
		href: "https://www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregivers/",
		category: "Family",
		tags: ["caregiver", "family"]
	},
	{
		id: "women-vets",
		title: "Women Veterans call center",
		blurb: "1-855-VA-WOMEN (1-855-829-6636).",
		tel: "8558296636",
		href: "https://www.womenshealth.va.gov/womenshealth/womenveteranscallcenter.asp",
		category: "VA phones",
		tags: ["women", "call center"]
	},
	{
		id: "loan-guaranty",
		title: "VA loan guaranty",
		blurb: "Home loan questions. 1-877-827-3702.",
		tel: "8778273702",
		href: "https://www.va.gov/housing-assistance/home-loans/",
		category: "Housing",
		tags: [
			"home loan",
			"mortgage",
			"housing"
		]
	},
	{
		id: "white-house-va",
		title: "White House VA hotline",
		blurb: "1-855-948-2311. Independent VA customer-service line.",
		tel: "8559482311",
		href: "https://www.va.gov/whva/",
		category: "VA phones",
		tags: ["hotline", "complaint"]
	},
	{
		id: "find-locations",
		title: "Find a VA facility / Vet Center",
		blurb: "Clinics, hospitals, Vet Centers near you.",
		href: "https://www.va.gov/find-locations/",
		category: "Local",
		tags: [
			"locator",
			"clinic",
			"vet center",
			"hospital"
		]
	},
	{
		id: "vet-center-find",
		title: "Find a Vet Center",
		blurb: "Community readjustment counseling. No claim, no copay.",
		href: "https://www.va.gov/find-locations/?facilityType=vet_center",
		category: "Local",
		tags: ["vet center", "counseling"]
	},
	{
		id: "file-claim",
		title: "File a disability claim",
		blurb: "VA.gov 21-526EZ. Start with an intent to file if you need time.",
		href: "https://www.va.gov/disability/how-to-file-claim/",
		category: "Claims",
		tags: [
			"file",
			"526",
			"intent to file"
		]
	},
	{
		id: "claim-status",
		title: "Check claim or appeal status",
		blurb: "Sign in on VA.gov.",
		href: "https://www.va.gov/claim-or-appeal-status/",
		category: "Claims",
		tags: [
			"status",
			"appeal",
			"supplemental"
		]
	},
	{
		id: "pact",
		title: "PACT Act",
		blurb: "Toxic exposure, burn pits, presumptives. File even if you were denied before.",
		href: "https://www.va.gov/resources/the-pact-act-and-your-va-benefits/",
		category: "Claims",
		tags: [
			"pact",
			"burn pit",
			"toxic",
			"presumptive"
		]
	},
	{
		id: "vso",
		title: "Find an accredited VSO",
		blurb: "Free help. DAV, VFW, American Legion, state, county.",
		href: "https://www.va.gov/disability/get-help-filing-claim/",
		category: "Claims",
		tags: [
			"vso",
			"dav",
			"representative"
		]
	},
	{
		id: "accreditation",
		title: "Accredited attorney / agent locator",
		blurb: "VA Office of General Counsel search. Confirm accreditation before you sign.",
		href: "https://www.va.gov/ogc/apps/accreditation/index.asp",
		category: "Claims",
		tags: [
			"attorney",
			"lawyer",
			"agent",
			"accredited"
		]
	},
	{
		id: "decision-reviews",
		title: "Decision reviews",
		blurb: "Supplemental claim, Higher-Level Review, Board appeal.",
		href: "https://www.va.gov/decision-reviews/",
		category: "Claims",
		tags: [
			"supplemental",
			"hlr",
			"board",
			"appeal"
		]
	},
	{
		id: "rates",
		title: "Current compensation rates",
		blurb: "Official 2026 tables. Dependents, SMC, A&A.",
		href: "https://www.va.gov/disability/compensation-rates/veteran-rates/",
		category: "Claims",
		tags: [
			"pay",
			"rates",
			"smc"
		]
	},
	{
		id: "ch31",
		title: "VR&E (Chapter 31)",
		blurb: "Voc rehab. Training, tools, sometimes independent living. You can use it employed.",
		href: "https://www.va.gov/careers-employment/vocational-rehabilitation/",
		category: "Work",
		tags: [
			"vre",
			"chapter 31",
			"voc rehab"
		]
	},
	{
		id: "ch35",
		title: "Chapter 35 DEA",
		blurb: "Education for dependents of veterans who are 100% P&T, or who died of service-connected causes.",
		href: "https://www.va.gov/education/survivor-dependent-benefits/dependents-education-assistance/",
		category: "Family",
		tags: [
			"chapter 35",
			"dea",
			"dependents",
			"college"
		]
	},
	{
		id: "gi-compare",
		title: "GI Bill comparison tool",
		blurb: "Official school + housing estimator. Use this, not a random blog.",
		href: "https://www.va.gov/education/gi-bill-comparison-tool/",
		category: "Work",
		tags: [
			"gi bill",
			"school",
			"bah"
		]
	},
	{
		id: "usajobs",
		title: "USAJOBS — veterans",
		blurb: "Federal jobs. Preference, VRA, 30% compensable.",
		href: "https://www.usajobs.gov/help/working-in-government/unique-hiring-paths/veterans/",
		category: "Work",
		tags: [
			"jobs",
			"federal",
			"usajobs"
		]
	},
	{
		id: "dol-vets",
		title: "DoL VETS",
		blurb: "Employment services, USERRA, Gold Card.",
		href: "https://www.dol.gov/agencies/vets",
		category: "Work",
		tags: [
			"jobs",
			"dol",
			"userra"
		]
	},
	{
		id: "va-careers",
		title: "VA careers & employment",
		blurb: "VA employment hub, job fairs, tools.",
		href: "https://www.va.gov/careers-employment/",
		category: "Work",
		tags: ["jobs", "career"]
	},
	{
		id: "hud-vash",
		title: "HUD-VASH",
		blurb: "Housing voucher + VA case management for veterans experiencing homelessness.",
		href: "https://www.va.gov/homeless/hud-vash.asp",
		category: "Housing",
		tags: [
			"hud-vash",
			"voucher",
			"homeless"
		]
	},
	{
		id: "financial-counseling",
		title: "VA financial counseling (home loan)",
		blurb: "Personal Financial Affairs / financial assessment resources around VA home loans.",
		href: "https://www.va.gov/housing-assistance/home-loans/",
		category: "Housing",
		tags: [
			"money",
			"counseling",
			"budget"
		]
	},
	{
		id: "ptsd-coach",
		title: "PTSD Coach (VA)",
		blurb: "Official self-management tools from the National Center for PTSD.",
		href: "https://mobile.va.gov/app/ptsd-coach",
		category: "VA apps",
		tags: [
			"ptsd",
			"app",
			"coach"
		]
	},
	{
		id: "mindfulness-coach",
		title: "Mindfulness Coach (VA)",
		blurb: "Gradual, self-guided mindfulness training.",
		href: "https://mobile.va.gov/app/mindfulness-coach",
		category: "VA apps",
		tags: ["mindfulness", "app"]
	},
	{
		id: "aims",
		title: "AIMS for Anger Management (VA)",
		blurb: "Track and manage anger and irritability.",
		href: "https://mobile.va.gov/app/aims-anger-management",
		category: "VA apps",
		tags: [
			"anger",
			"aims",
			"app"
		]
	},
	{
		id: "vetchange",
		title: "VetChange (VA)",
		blurb: "Drinking, stress, and healthier habits.",
		href: "https://mobile.va.gov/app/vetchange",
		category: "VA apps",
		tags: [
			"alcohol",
			"vetchange",
			"app"
		]
	},
	{
		id: "safety-plan-app",
		title: "Safety Plan (VA)",
		blurb: "Official Stanley-Brown style safety plan app.",
		href: "https://mobile.va.gov/app/safety-plan",
		category: "VA apps",
		tags: ["safety", "app"]
	},
	{
		id: "insomnia-coach",
		title: "Insomnia Coach (VA)",
		blurb: "CBT-I style self-care for sleep. Standalone.",
		href: "https://mobile.va.gov/app/insomnia-coach",
		category: "VA apps",
		tags: [
			"sleep",
			"insomnia",
			"app"
		]
	},
	{
		id: "cbti-coach",
		title: "CBT-i Coach (VA)",
		blurb: "Companion for CBT-I with a provider. Not a solo replacement.",
		href: "https://mobile.va.gov/app/cbt-i-coach",
		category: "VA apps",
		tags: [
			"sleep",
			"cbt",
			"app"
		]
	},
	{
		id: "family-coach",
		title: "PTSD Family Coach (VA)",
		blurb: "For families living with PTSD. Education + tools.",
		href: "https://mobile.va.gov/app/ptsd-family-coach",
		category: "VA apps",
		tags: [
			"family",
			"ptsd",
			"app"
		]
	},
	{
		id: "ptsd-online",
		title: "PTSD Coach Online",
		blurb: "Browser tools if you don’t want another app.",
		href: "https://www.ptsd.va.gov/apps/ptsdcoachonline/default.htm",
		category: "VA apps",
		tags: ["ptsd", "online"]
	},
	{
		id: "nctptsd",
		title: "National Center for PTSD",
		blurb: "About PTSD, treatments that actually work, family resources.",
		href: "https://www.ptsd.va.gov/",
		category: "Learn",
		tags: ["ptsd", "education"]
	},
	{
		id: "vfw",
		title: "VFW post locator",
		blurb: "Find a post. Membership is optional for some events.",
		href: "https://www.vfw.org/find-a-post",
		category: "Local",
		tags: [
			"vfw",
			"post",
			"community"
		]
	},
	{
		id: "legion",
		title: "American Legion post locator",
		blurb: "Posts, programs, local help.",
		href: "https://www.legion.org/posts",
		category: "Local",
		tags: [
			"legion",
			"post",
			"community"
		]
	},
	{
		id: "dav",
		title: "DAV",
		blurb: "Free claims help. Rides. Community.",
		href: "https://www.dav.org/",
		category: "Local",
		tags: [
			"dav",
			"vso",
			"rides"
		]
	},
	{
		id: "iava",
		title: "IAVA",
		blurb: "Post-9/11 community and policy.",
		href: "https://iava.org/",
		category: "Local",
		tags: ["iava", "post-9/11"]
	},
	{
		id: "team-rubicon",
		title: "Team Rubicon",
		blurb: "Disaster response. A mission with a start and an end.",
		href: "https://teamrubiconusa.org/",
		category: "Local",
		tags: ["volunteer", "team rubicon"]
	},
	{
		id: "mission-continues",
		title: "The Mission Continues",
		blurb: "Service platoons in cities.",
		href: "https://www.missioncontinues.org/",
		category: "Local",
		tags: ["volunteer", "mission continues"]
	},
	{
		id: "state-va",
		title: "State veterans agencies",
		blurb: "State benefits, property tax, plates, homes. Don’t skip your state.",
		href: "https://www.va.gov/statedva.htm",
		category: "Claims",
		tags: ["state", "benefits"]
	}
];
var CLAIM_STEPS = [
	{
		title: "Intent to file",
		body: "Locks your effective date for a year. Do this even if the packet isn’t ready. VA.gov or a VSO."
	},
	{
		title: "Records",
		body: "DD214. STR. VA medical. Private records. DBQs. Buddy statements (21-10210). Your own statement — dates, units, what happened, what it does now."
	},
	{
		title: "File",
		body: "21-526EZ on VA.gov, or through an accredited VSO / attorney. Fully developed if you can. Don’t wait for perfect."
	},
	{
		title: "C&P exam",
		body: "Show up. Tell the truth. Describe your worst days, not your best. Bring a list of symptoms. You can have someone wait with you."
	},
	{
		title: "Decision",
		body: "Read the whole letter. Rating. Effective date. What they granted, deferred, denied. Keep it."
	},
	{
		title: "If it’s wrong",
		body: "Supplemental (new evidence). Higher-Level Review (same evidence, different reviewer). Board. Deadlines matter. Use an accredited rep."
	}
];
var PACT_NOTES = [
	"Burn pits, oil fires, sandstorms, contaminated water, Agent Orange, radiation, and other toxic exposures.",
	"If you were denied before the PACT Act, you can file again. Many presumptives were added.",
	"You do not need a nexus letter for a presumptive condition. You still need a diagnosis and service in a qualifying location/time.",
	"Secondaries still need a medical link (sleep apnea secondary to PTSD/rhinitis, GERD to meds or PTSD, radiculopathy to the back, and so on)."
];
var SECONDARIES = [
	{
		from: "PTSD",
		to: "Migraines, GERD, IBS, sleep apnea, ED / SMC-K, bruxism, depression, alcohol use, hypertension"
	},
	{
		from: "Tinnitus / hearing",
		to: "Mental health increase, balance issues — case by case"
	},
	{
		from: "Knee / ankle / back",
		to: "Opposite joint, hips, radiculopathy, gait"
	},
	{
		from: "Sinusitis / rhinitis",
		to: "Sleep apnea, migraines, anosmia"
	},
	{
		from: "Meds for SC conditions",
		to: "ED, GERD, kidney issues — bring the Rx list"
	}
];
var DOC_CHECKLIST = [
	"DD214 / DD215",
	"Service treatment records",
	"VA medical records",
	"Private / community care records",
	"DBQ or specialist notes",
	"Personal statement (lay evidence)",
	"Buddy / spouse statements",
	"Intent to File confirmation",
	"Dependency docs (marriage, birth)",
	"C&P exam copy (if you have it)"
];
var MOS = [
	{
		code: "0311",
		branch: "USMC",
		mil: "Rifleman",
		civ: [
			"Security specialist",
			"Law enforcement",
			"Warehouse lead",
			"Field technician"
		],
		skills: "Small-unit leadership, weapons safety, field problem-solving"
	},
	{
		code: "0331",
		branch: "USMC",
		mil: "Machine Gunner",
		civ: [
			"Security",
			"Heavy equipment",
			"Operations"
		],
		skills: "Crew-served systems, discipline under load"
	},
	{
		code: "0341",
		branch: "USMC",
		mil: "Mortarman",
		civ: [
			"Survey",
			"Logistics",
			"Emergency management"
		],
		skills: "Fire direction, maps, teamwork"
	},
	{
		code: "0351",
		branch: "USMC",
		mil: "Infantry Assault",
		civ: [
			"Demolition (licensed)",
			"Construction",
			"Security"
		],
		skills: "Breaching, demo safety, small teams"
	},
	{
		code: "0369",
		branch: "USMC",
		mil: "Infantry Unit Leader",
		civ: [
			"Operations manager",
			"Supervisor",
			"Project coordinator"
		],
		skills: "NCO leadership, training, accountability"
	},
	{
		code: "0861",
		branch: "USMC",
		mil: "Fire Support / ANGLICO path",
		civ: [
			"Emergency management",
			"Dispatcher",
			"Operations analyst"
		],
		skills: "Joint fires, comms, high-tempo coordination"
	},
	{
		code: "11B",
		branch: "Army",
		mil: "Infantryman",
		civ: [
			"Security",
			"Law enforcement",
			"Labor lead"
		],
		skills: "Team tactics, endurance, fieldcraft"
	},
	{
		code: "11C",
		branch: "Army",
		mil: "Indirect Fire Infantryman",
		civ: [
			"Survey",
			"Construction",
			"Logistics"
		],
		skills: "Gunnery math, crew drills"
	},
	{
		code: "13F",
		branch: "Army",
		mil: "Fire Support Specialist",
		civ: [
			"Emergency management",
			"GIS tech",
			"Analyst"
		],
		skills: "Targeting, maps, joint ops"
	},
	{
		code: "19K",
		branch: "Army",
		mil: "Armor Crewman",
		civ: [
			"Heavy equipment",
			"Mechanic helper",
			"Logistics"
		],
		skills: "Tracked vehicles, maintenance, crew"
	},
	{
		code: "25B",
		branch: "Army",
		mil: "IT Specialist",
		civ: [
			"Help desk",
			"Systems admin",
			"Network tech"
		],
		skills: "DoD systems, tickets, security basics"
	},
	{
		code: "25U",
		branch: "Army",
		mil: "Signal Support",
		civ: [
			"Telecom",
			"Field IT",
			"Radio tech"
		],
		skills: "Comms gear, troubleshooting"
	},
	{
		code: "31B",
		branch: "Army",
		mil: "Military Police",
		civ: [
			"Police",
			"Security manager",
			"Corrections",
			"Loss prevention"
		],
		skills: "Law, traffic, investigations intro"
	},
	{
		code: "35F",
		branch: "Army",
		mil: "Intel Analyst",
		civ: [
			"Analyst",
			"Researcher",
			"Threat intel"
		],
		skills: "Link analysis, briefings, writing"
	},
	{
		code: "68W",
		branch: "Army",
		mil: "Combat Medic",
		civ: [
			"EMT",
			"Paramedic track",
			"CNA",
			"Medical assistant"
		],
		skills: "Trauma, triage, calm under pressure"
	},
	{
		code: "88M",
		branch: "Army",
		mil: "Motor Transport",
		civ: [
			"CDL driver",
			"Fleet",
			"Dispatch"
		],
		skills: "Convoy, maintenance, hours"
	},
	{
		code: "92Y",
		branch: "Army",
		mil: "Unit Supply",
		civ: [
			"Inventory",
			"Purchasing",
			"Warehouse"
		],
		skills: "Property book, accountability"
	},
	{
		code: "12B",
		branch: "Army",
		mil: "Combat Engineer",
		civ: [
			"Construction",
			"Heavy equipment",
			"Survey"
		],
		skills: "Demo, fortification, machines"
	},
	{
		code: "15T",
		branch: "Army",
		mil: "UH-60 Repairer",
		civ: ["A&P track", "Aviation maintenance"],
		skills: "Airframe, TM, QA"
	},
	{
		code: "HM",
		branch: "Navy",
		mil: "Hospital Corpsman",
		civ: [
			"EMT",
			"Medical assistant",
			"LPN track"
		],
		skills: "Sick call, trauma, FMF if attached"
	},
	{
		code: "MA",
		branch: "Navy",
		mil: "Master-at-Arms",
		civ: [
			"Police",
			"Port security",
			"Federal LE"
		],
		skills: "Force protection, investigations"
	},
	{
		code: "IT",
		branch: "Navy",
		mil: "Information Systems Tech",
		civ: [
			"Network admin",
			"Cyber",
			"Help desk"
		],
		skills: "Networks, messages, security"
	},
	{
		code: "BM",
		branch: "Navy",
		mil: "Boatswain’s Mate",
		civ: [
			"Maritime",
			"Crane / deck",
			"Supervisor"
		],
		skills: "Deck ops, small boats, leadership"
	},
	{
		code: "MM",
		branch: "Navy",
		mil: "Machinist’s Mate",
		civ: [
			"Industrial mechanic",
			"Power plant",
			"HVAC helper"
		],
		skills: "Engines, pipes, watchstanding"
	},
	{
		code: "OS",
		branch: "Navy",
		mil: "Operations Specialist",
		civ: [
			"Dispatcher",
			"Air traffic support",
			"Analyst"
		],
		skills: "Radar, CIC, comms"
	},
	{
		code: "3P0",
		branch: "USAF",
		mil: "Security Forces",
		civ: [
			"Police",
			"Federal LE",
			"Security manager"
		],
		skills: "Base defense, law, weapons"
	},
	{
		code: "1N0",
		branch: "USAF",
		mil: "All Source Intel",
		civ: [
			"Analyst",
			"OSINT",
			"Research"
		],
		skills: "Briefings, fusion, writing"
	},
	{
		code: "1D7",
		branch: "USAF",
		mil: "Cyber Defense",
		civ: [
			"SOC analyst",
			"Sysadmin",
			"IT"
		],
		skills: "Networks, incident response"
	},
	{
		code: "4N0",
		branch: "USAF",
		mil: "Aerospace Medical Service",
		civ: [
			"EMT",
			"Medical assistant",
			"Nurse track"
		],
		skills: "Clinic + emergency"
	},
	{
		code: "2T2",
		branch: "USAF",
		mil: "Air Transportation",
		civ: [
			"Logistics",
			"Cargo",
			"Airline ops"
		],
		skills: "Load planning, hazmat, pallets"
	},
	{
		code: "3E",
		branch: "USAF",
		mil: "Civil Engineer (various)",
		civ: [
			"Trades",
			"Facilities",
			"Project"
		],
		skills: "Base infrastructure"
	},
	{
		code: "SO",
		branch: "USCG",
		mil: "Maritime Enforcement",
		civ: [
			"Federal LE",
			"Port security",
			"Police"
		],
		skills: "Boarding, law, small boats"
	},
	{
		code: "OS-CG",
		branch: "USCG",
		mil: "Operations Specialist",
		civ: [
			"Dispatch",
			"Watchfloor",
			"Analyst"
		],
		skills: "C2, search and rescue support"
	},
	{
		code: "GM",
		branch: "USCG",
		mil: "Gunner’s Mate",
		civ: [
			"Armorer",
			"Security",
			"Instructor"
		],
		skills: "Weapons systems, training"
	}
];
var JOB_BOARDS = [
	{
		id: "jb-usa",
		title: "USAJOBS — veterans path",
		blurb: "Federal. Preference is real if you use it.",
		href: "https://www.usajobs.gov/help/working-in-government/unique-hiring-paths/veterans/",
		category: "Work",
		tags: ["jobs"]
	},
	{
		id: "jb-va",
		title: "VA employment hub",
		blurb: "VA’s own career tools and events.",
		href: "https://www.va.gov/careers-employment/",
		category: "Work",
		tags: ["jobs"]
	},
	{
		id: "jb-dol",
		title: "DoL veteran employment",
		blurb: "AJCs, Gold Card, USERRA.",
		href: "https://www.dol.gov/agencies/vets",
		category: "Work",
		tags: ["jobs"]
	},
	{
		id: "jb-hireheroes",
		title: "Hire Heroes USA",
		blurb: "Free resume and job help for veterans and spouses.",
		href: "https://www.hireheroesusa.org/",
		category: "Work",
		tags: ["resume", "jobs"]
	},
	{
		id: "jb-recruit",
		title: "RecruitMilitary",
		blurb: "Veteran job fairs and listings.",
		href: "https://recruitmilitary.com/",
		category: "Work",
		tags: ["jobs", "fair"]
	}
];
var PT_ROUTINES = [
	{
		id: "back",
		title: "Low back — 6 minutes",
		steps: [
			"Lie on your back, knees bent. Breathe into the belly. 6 slow breaths.",
			"Knee-to-chest, one side then the other. 5 each. No yanking.",
			"Figure-4 stretch, 30 seconds each side.",
			"Cat-cow on hands and knees, 8 slow cycles.",
			"Stop if pain shoots down a leg or goes numb. That’s a provider conversation."
		]
	},
	{
		id: "ankle",
		title: "Ankle — 5 minutes",
		steps: [
			"Alphabet with your toes, sitting. 2 times.",
			"Ankle circles, 10 each way.",
			"Towel stretch for the calf, 30 seconds × 3.",
			"If you have a band: inversion/eversion 10 slow reps.",
			"Swelling, give, or locking — get it seen. Old helo landings still count."
		]
	},
	{
		id: "shoulders",
		title: "Shoulders / neck — 5 minutes",
		steps: [
			"Chin tucks, 8 slow. Think ‘make a double chin,’ not look up.",
			"Doorway pec stretch, 30 seconds each side.",
			"Scapular squeezes, 10. Elbows at your sides.",
			"Pendulum hangs, 30 seconds each arm if a shoulder is angry."
		]
	},
	{
		id: "head",
		title: "Headache / migraine reset",
		steps: [
			"Dark room. This app is already dark.",
			"Box breathing, 4 rounds. Optional 4-7-8 after.",
			"Water. Then a snack if you’ve been empty.",
			"Cold pack on the neck, not the eyes, if that is your pattern.",
			"If this is sudden, worst-of-life, or with weakness/vision loss — 911."
		]
	}
];
var PROFILES = [
	{
		id: "claims",
		callsign: "Marcus R.",
		era: "oef-oif-ond",
		struggles: [
			"claims",
			"money",
			"pain"
		],
		pins: [
			"claims",
			"rating",
			"appointments",
			"meds",
			"breathe"
		],
		title: "Claims-focused",
		blurb: "OIF. Rated, not done. PACT, secondaries, the letter that still isn’t right. Home is the hub, the estimator, and the next exam."
	},
	{
		id: "ptsd",
		callsign: "Elena V.",
		era: "oef-oif-ond",
		struggles: [
			"sleep",
			"ptsd",
			"anger",
			"isolation"
		],
		pins: [
			"breathe",
			"sleep",
			"grounding",
			"mood",
			"safety",
			"anger"
		],
		title: "PTSD / sleep-focused",
		blurb: "OEF. Nights are the fight. Home is breathe, wind-down, grounding, a private log, a plan. Claims can wait in Tools."
	},
	{
		id: "job",
		callsign: "Devon K.",
		era: "gwot",
		struggles: [
			"job",
			"money",
			"family"
		],
		pins: [
			"jobs",
			"gi-bill",
			"rating",
			"community",
			"family"
		],
		title: "Job-search-focused",
		blurb: "Just now civilian. MOS on the résumé is a foreign language. Home is translator, GI Bill, pay estimator, and a place to land."
	}
];
function searchIndex() {
	const rows = [];
	for (const c of CARDS) rows.push({
		id: `card-${c.id}`,
		title: c.title,
		blurb: c.blurb,
		screen: c.screen,
		kind: "Tool"
	});
	for (const o of OFFICIAL) rows.push({
		id: o.id,
		title: o.title,
		blurb: o.blurb,
		href: o.href,
		tel: o.tel,
		sms: o.sms,
		kind: o.category
	});
	rows.push({
		id: "s-breathe",
		title: "Box breathing",
		blurb: "Four-count. In, hold, out, hold.",
		screen: "breathe",
		kind: "Tool"
	}, {
		id: "s-tactical",
		title: "Tactical / combat breathing",
		blurb: "Longer exhale.",
		screen: "breathe",
		kind: "Tool"
	}, {
		id: "s-54321",
		title: "5-4-3-2-1 grounding",
		blurb: "Senses. Back in the room.",
		screen: "grounding",
		kind: "Tool"
	}, {
		id: "s-pcl",
		title: "PCL-5 symptom log",
		blurb: "Private PTSD checklist. Not a diagnosis.",
		screen: "pcl5",
		kind: "Tool"
	}, {
		id: "s-thought",
		title: "Thought stopping",
		blurb: "Notice. Label. Stop. Replace.",
		screen: "thought",
		kind: "Tool"
	}, {
		id: "s-distress",
		title: "Distress tolerance",
		blurb: "Short skills when you’re already in it.",
		screen: "distress",
		kind: "Tool"
	}, {
		id: "s-backpay",
		title: "Back-pay calculator",
		blurb: "Effective date × monthly rate.",
		screen: "rating",
		kind: "Tool"
	}, {
		id: "s-mos",
		title: "MOS translator",
		blurb: "0311, 11B, HM, 68W…",
		screen: "jobs",
		kind: "Tool"
	});
	return rows;
}
function matchesQuery(q, title, blurb, extra = "") {
	const n = q.trim().toLowerCase();
	if (!n) return false;
	const hay = `${title} ${blurb} ${extra}`.toLowerCase();
	return n.split(/\s+/).every((w) => hay.includes(w));
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function todayKey() {
	const d = /* @__PURE__ */ new Date();
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function greetingForHour(hour) {
	if (hour < 5) return "Late watch";
	if (hour < 12) return "Morning";
	if (hour < 17) return "Afternoon";
	if (hour < 21) return "Evening";
	return "Night watch";
}
function monthsBetween(fromIso, to = /* @__PURE__ */ new Date()) {
	const from = new Date(fromIso);
	if (Number.isNaN(from.getTime())) return 0;
	const years = to.getFullYear() - from.getFullYear();
	const months = to.getMonth() - from.getMonth();
	let total = years * 12 + months;
	if (to.getDate() < from.getDate()) total -= 1;
	return Math.max(0, total);
}
var initial = {
	onboarded: false,
	name: "",
	era: "",
	struggles: [],
	pins: [
		"breathe",
		"claims",
		"mood",
		"jobs"
	],
	hidden: [],
	highContrast: false,
	largeText: false,
	reduceMotion: false,
	voiceOn: false,
	hapticOn: true,
	breatheTechnique: "box",
	breatheMinutes: 3,
	breatheSound: "off",
	skippedMissionOn: "",
	moodLog: [],
	angerLog: [],
	pclLog: [],
	safetyPlan: {
		warningSigns: "",
		coping: "",
		peoplePlaces: "",
		helpPeople: "",
		professionals: "",
		environment: "",
		reasons: ""
	},
	meds: [],
	takenMedsOn: {},
	appointments: [],
	ratings: [{
		id: "r1",
		label: "PTSD",
		value: 70,
		bilateral: false
	}, {
		id: "r2",
		label: "Tinnitus",
		value: 10,
		bilateral: false
	}],
	resume: {
		name: "",
		mos: "",
		years: "",
		summary: "",
		skills: "",
		bullets: ""
	},
	giMonths: 36,
	giBah: 1800
};
function uid() {
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}
var useRally = create()(persist((set, get) => ({
	...initial,
	completeOnboarding: ({ name, era, struggles, pins }) => set({
		onboarded: true,
		name,
		era,
		struggles,
		pins: pins.length ? pins : defaultPinsFor(struggles)
	}),
	loadProfile: ({ name, era, struggles, pins }) => set({
		onboarded: true,
		name,
		era,
		struggles,
		pins,
		hidden: []
	}),
	setName: (name) => set({ name }),
	setPins: (pins) => set({ pins }),
	toggleHidden: (id) => {
		set({ hidden: get().hidden.includes(id) ? get().hidden.filter((h) => h !== id) : [...get().hidden, id] });
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
			hidden: get().hidden.filter((h) => h !== id)
		});
	},
	setPref: (key, value) => set({ [key]: value }),
	setBreathe: (patch) => set(patch),
	skipMission: () => set({ skippedMissionOn: todayKey() }),
	addMood: (mood, note) => set({ moodLog: [{
		id: uid(),
		date: (/* @__PURE__ */ new Date()).toISOString(),
		mood,
		note
	}, ...get().moodLog].slice(0, 90) }),
	addAnger: (level, trigger) => set({ angerLog: [{
		id: uid(),
		date: (/* @__PURE__ */ new Date()).toISOString(),
		level,
		trigger
	}, ...get().angerLog].slice(0, 90) }),
	addPcl: (scores) => set({ pclLog: [{
		id: uid(),
		date: (/* @__PURE__ */ new Date()).toISOString(),
		scores
	}, ...get().pclLog].slice(0, 24) }),
	setSafety: (patch) => set({ safetyPlan: {
		...get().safetyPlan,
		...patch
	} }),
	addMed: (med) => set({ meds: [...get().meds, {
		...med,
		id: uid()
	}] }),
	removeMed: (id) => set({ meds: get().meds.filter((m) => m.id !== id) }),
	toggleMedTaken: (id) => {
		const key = todayKey();
		const current = get().takenMedsOn[key] ?? [];
		const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
		set({ takenMedsOn: {
			...get().takenMedsOn,
			[key]: next
		} });
	},
	addAppt: (a) => set({ appointments: [...get().appointments, {
		...a,
		id: uid()
	}] }),
	removeAppt: (id) => set({ appointments: get().appointments.filter((a) => a.id !== id) }),
	addRating: () => set({ ratings: [...get().ratings, {
		id: uid(),
		label: "Condition",
		value: 10,
		bilateral: false
	}] }),
	updateRating: (id, patch) => set({ ratings: get().ratings.map((r) => r.id === id ? {
		...r,
		...patch
	} : r) }),
	removeRating: (id) => set({ ratings: get().ratings.filter((r) => r.id !== id) }),
	setResume: (patch) => set({ resume: {
		...get().resume,
		...patch
	} }),
	setGi: (patch) => set(patch),
	resetAll: () => set({ ...initial })
}), {
	name: "rally-point-v1",
	storage: createJSONStorage(() => localStorage),
	skipHydration: true
}));
var buttonVariants = cva("inline-flex items-center justify-center gap-2 min-h-11 px-4 text-[0.95rem] font-medium tracking-wide transition-[transform,background-color,border-color,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg rounded-md",
			secondary: "bg-surface-2 text-fg border border-border rounded-md",
			outline: "border border-border-strong text-fg rounded-md bg-transparent",
			ghost: "text-fg rounded-md bg-transparent",
			crisis: "bg-crisis text-crisis-fg rounded-md",
			sand: "bg-sand text-accent-fg rounded-md"
		},
		block: {
			true: "w-full",
			false: ""
		}
	},
	defaultVariants: {
		variant: "primary",
		block: false
	}
});
function Button({ className, variant, block, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			block
		}), className),
		...props
	});
}
function IconBtn({ className, label, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		className: cn("inline-flex size-11 items-center justify-center rounded-md text-fg transition-transform duration-150 ease-out active:scale-[0.96]", className),
		...props,
		children
	});
}
function Card({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-2xl border border-border bg-surface p-4", className),
		children
	});
}
function Chip({ active, children, onClick, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("min-h-11 rounded-full border px-3.5 text-sm font-medium transition-colors duration-150", active ? "border-accent bg-accent text-accent-fg" : "border-border bg-surface-2 text-fg", className),
		children
	});
}
var inputClass = "w-full min-h-11 rounded-md border border-border bg-surface-2 px-3 text-fg placeholder:text-subtle";
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		suppressHydrationWarning: true,
		className: cn(inputClass, className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		suppressHydrationWarning: true,
		className: cn(inputClass, "min-h-24 py-2.5", className),
		...props
	});
}
function Toggle({ checked, onChange, label, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		onClick: () => onChange(!checked),
		className: "flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-surface px-4 py-3 text-left min-h-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-sm font-medium",
			children: label
		}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs text-muted mt-0.5",
			children: hint
		}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("relative h-6 w-11 shrink-0 rounded-full transition-colors duration-150", checked ? "bg-accent" : "bg-border-strong"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-0.5 left-0.5 size-5 rounded-full bg-fg transition-transform duration-150", checked && "translate-x-5") })
		})]
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sand",
		children
	});
}
function RallyMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-6", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M16 3.5 27 16.2 16 11.4 5 16.2Z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2.2",
			strokeLinecap: "round",
			d: "M16 12.2 V27.5"
		})]
	});
}
function speak(text, on) {
	if (!on || typeof window === "undefined" || !window.speechSynthesis) return;
	window.speechSynthesis.cancel();
	const u = new SpeechSynthesisUtterance(text);
	u.rate = .85;
	u.pitch = .9;
	u.volume = .85;
	window.speechSynthesis.speak(u);
}
function haptic(on) {
	if (!on || typeof navigator === "undefined" || !navigator.vibrate) return;
	navigator.vibrate(28);
}
function startBrown() {
	const AC = window.AudioContext || window.webkitAudioContext;
	if (!AC) return () => {};
	const ctx = new AC();
	const bufferSize = 2 * ctx.sampleRate;
	const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
	const data = buffer.getChannelData(0);
	let last = 0;
	for (let i = 0; i < bufferSize; i++) {
		const white = Math.random() * 2 - 1;
		last = (last + .02 * white) / 1.02;
		data[i] = last * 3.5;
	}
	const src = ctx.createBufferSource();
	src.buffer = buffer;
	src.loop = true;
	const gain = ctx.createGain();
	gain.gain.value = .12;
	src.connect(gain).connect(ctx.destination);
	ctx.resume();
	src.start();
	return () => {
		try {
			src.stop();
			ctx.close();
		} catch {}
	};
}
function BreatheSession({ onClose }) {
	const technique = useRally((s) => s.breatheTechnique);
	const minutes = useRally((s) => s.breatheMinutes);
	const sound = useRally((s) => s.breatheSound);
	const voiceOn = useRally((s) => s.voiceOn);
	const hapticOn = useRally((s) => s.hapticOn);
	const reduceMotion = useRally((s) => s.reduceMotion);
	const setBreathe = useRally((s) => s.setBreathe);
	const spec = BREATHE[technique];
	const [running, setRunning] = (0, import_react.useState)(false);
	const [phase, setPhase] = (0, import_react.useState)(0);
	const [remain, setRemain] = (0, import_react.useState)(spec.phases[0].seconds);
	const [elapsed, setElapsed] = (0, import_react.useState)(0);
	const total = minutes * 60;
	const stopNoise = (0, import_react.useRef)(null);
	const cycle = spec.phases;
	const current = cycle[phase % cycle.length];
	const inhaling = current.label.toLowerCase().startsWith("in");
	const holding = current.label.toLowerCase().includes("hold");
	const scale = (0, import_react.useMemo)(() => {
		if (holding) return inhaling ? 1 : .45;
		return inhaling ? 1 : .45;
	}, [holding, inhaling]);
	(0, import_react.useEffect)(() => {
		if (!running) return;
		const id = window.setInterval(() => {
			setElapsed((e) => e + 1);
			setRemain((r) => r - 1);
		}, 1e3);
		return () => window.clearInterval(id);
	}, [running]);
	(0, import_react.useEffect)(() => {
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
	}, [
		remain,
		running,
		elapsed,
		total,
		phase,
		cycle,
		voiceOn,
		hapticOn
	]);
	(0, import_react.useEffect)(() => {
		if (running && sound === "brown") stopNoise.current = startBrown();
		return () => {
			stopNoise.current?.();
			stopNoise.current = null;
		};
	}, [running, sound]);
	(0, import_react.useEffect)(() => {
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
	const durationMs = current.seconds * 1e3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg px-5 pb-8 pt-[max(1rem,env(safe-area-inset-top))]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Breathe" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					label: "Close",
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid size-64 place-items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "breathe-ring absolute inset-0 rounded-full border border-border",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "breathe-ring absolute inset-6 rounded-full border-2 border-accent bg-accent/15",
								style: reduceMotion || !running ? { transform: running ? `scale(${scale})` : "scale(0.7)" } : {
									transform: `scale(${scale})`,
									transition: `transform ${durationMs}ms linear`
								},
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-5xl font-semibold uppercase tabular-nums",
									children: running ? current.label : "Ready"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-3xl tabular-nums text-sand",
									children: running ? remain : `${minutes} min`
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-[28ch] text-center text-sm text-muted",
						children: spec.blurb
					}),
					running ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs tabular-nums text-subtle",
						children: [Math.max(0, total - elapsed), "s left"]
					}) : null
				]
			}),
			!running ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: Object.keys(BREATHE).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: technique === id,
							onClick: () => setBreathe({ breatheTechnique: id }),
							children: BREATHE[id].name
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "Duration"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1",
							children: [
								1,
								3,
								5,
								10
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
								active: minutes === m,
								onClick: () => setBreathe({ breatheMinutes: m }),
								children: [m, "m"]
							}, m))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: sound === "off",
							onClick: () => setBreathe({ breatheSound: "off" }),
							children: "Silent"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: sound === "brown",
							onClick: () => setBreathe({ breatheSound: "brown" }),
							children: "Brown noise"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						block: true,
						onClick: start,
						children: "Begin"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "secondary",
				block: true,
				onClick: stop,
				children: "End session"
			})
		]
	});
}
var STEPS = 4;
function Onboarding({ onDemo }) {
	const complete = useRally((s) => s.completeOnboarding);
	const [step, setStep] = (0, import_react.useState)(0);
	const [name, setName] = (0, import_react.useState)("");
	const [era, setEra] = (0, import_react.useState)("");
	const [struggles, setStruggles] = (0, import_react.useState)([]);
	const suggested = (0, import_react.useMemo)(() => defaultPinsFor(struggles), [struggles]);
	const [pins, setPins] = (0, import_react.useState)([]);
	const activePins = pins.length ? pins : suggested;
	function toggleStruggle(id) {
		setStruggles((cur) => cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]);
		setPins([]);
	}
	function togglePin(id) {
		const base = pins.length ? pins : suggested;
		setPins(base.includes(id) ? base.filter((x) => x !== id) : [...base, id]);
	}
	function finish() {
		complete({
			name: name.trim(),
			era,
			struggles,
			pins: activePins.slice(0, 8)
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg px-5 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-2 text-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RallyMark, { className: "size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xl font-semibold tracking-[0.14em] uppercase",
					children: "Rally Point"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted",
				children: [
					step + 1,
					" of ",
					STEPS
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 h-1 overflow-hidden rounded-full bg-surface-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-accent transition-[width] duration-250 ease-out",
					style: { width: `${(step + 1) / STEPS * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex-1",
				children: [
					step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl font-semibold uppercase",
								children: "You made it in."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted max-w-[34ch]",
								children: "This is a civilian CP. Dark. Quiet. Yours. No account. Nothing leaves this phone unless you tap a link out."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "What do we call you?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: name,
									onChange: (e) => setName(e.target.value),
									placeholder: "First name or callsign — optional",
									autoComplete: "given-name"
								})]
							})
						]
					}),
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl font-semibold uppercase",
								children: "Era"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: "Helps us point you at the right doors. Skip if you want."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2",
								children: ERAS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setEra(e.id),
									className: `min-h-14 rounded-xl border px-4 py-3 text-left transition-colors duration-150 ${era === e.id ? "border-accent bg-surface-2" : "border-border bg-surface"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium",
										children: e.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs text-muted",
										children: e.hint
									})]
								}, e.id))
							})
						]
					}),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl font-semibold uppercase",
								children: "What’s hitting you hardest right now?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: "Tap all that apply. This builds your home screen."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: STRUGGLES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: struggles.includes(s.id),
									onClick: () => toggleStruggle(s.id),
									children: s.label
								}, s.id))
							})
						]
					}),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl font-semibold uppercase",
								children: "Your home screen"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: "Only these cards land on Home. Change it any time in ten seconds."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2",
								children: CARDS.map((c) => {
									const on = activePins.includes(c.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => togglePin(c.id),
										className: `flex min-h-14 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left ${on ? "border-accent bg-surface-2" : "border-border bg-surface"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-medium",
											children: c.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs text-muted",
											children: c.blurb
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs uppercase tracking-widest text-sand",
											children: on ? "On" : "Off"
										})]
									}, c.id);
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-2",
				children: [step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					block: true,
					onClick: () => setStep((s) => s + 1),
					children: "Continue"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					block: true,
					onClick: finish,
					children: "Set my rally point"
				}), step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					block: true,
					onClick: () => setStep((s) => s - 1),
					children: "Back"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					block: true,
					onClick: onDemo,
					children: "Show me three sample homes"
				})]
			})
		]
	});
}
function TopBar({ onCrisis, onSearch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-20 flex items-center gap-1 border-b border-border bg-bg px-2 pt-[max(0.4rem,env(safe-area-inset-top))] pb-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 items-center gap-2 px-2 text-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RallyMark, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg font-semibold uppercase tracking-[0.16em]",
					children: "Rally Point"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
				label: "Search",
				onClick: onSearch,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onCrisis,
				className: "mr-1 inline-flex min-h-11 items-center gap-1.5 rounded-md border border-crisis px-3 text-sm font-medium text-crisis bg-transparent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "Crisis"]
			})
		]
	});
}
function BottomNav({ tab, onTab }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "absolute inset-x-0 bottom-0 z-20 border-t border-border bg-surface pb-[max(0.4rem,env(safe-area-inset-bottom))] pt-1",
		"aria-label": "Primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-4",
			children: [
				{
					id: "home",
					label: "Home",
					icon: House
				},
				{
					id: "tools",
					label: "Tools",
					icon: Wrench
				},
				{
					id: "resources",
					label: "Resources",
					icon: Briefcase
				},
				{
					id: "me",
					label: "Me",
					icon: User
				}
			].map((it) => {
				const on = tab === it.id;
				const Icon = it.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onTab(it.id),
					className: cn("flex min-h-14 w-full flex-col items-center justify-center gap-0.5 text-[11px] font-medium tracking-wide", on ? "text-accent" : "text-muted"),
					"aria-current": on ? "page" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-5",
						strokeWidth: on ? 2.2 : 1.7
					}), it.label]
				}) }, it.id);
			})
		})
	});
}
function CrisisSheet({ open, onClose }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-40 flex flex-col justify-end bg-bg-deep/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "flex-1",
			"aria-label": "Dismiss crisis sheet",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-labelledby": "crisis-title",
			className: "rounded-t-2xl border-t border-border bg-surface px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Veterans Crisis Line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "crisis-title",
						className: "font-display text-3xl uppercase mt-1",
						children: "You’re not alone. Pick one."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						label: "Close",
						onClick: onClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "24/7. Confidential. You do not need to be enrolled in VA."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:988",
							className: buttonVariants({
								variant: "crisis",
								block: true
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "Dial 988, then press 1"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "sms:838255",
							className: buttonVariants({
								variant: "secondary",
								block: true
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), "Text 838255"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.veteranscrisisline.net/get-help-now/chat/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: buttonVariants({
								variant: "secondary",
								block: true
							}),
							children: "Chat at VeteransCrisisLine.net"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.va.gov/find-locations/?facilityType=vet_center",
							target: "_blank",
							rel: "noopener noreferrer",
							className: buttonVariants({
								variant: "outline",
								block: true
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4" }), "Local Vet Center / VA locator"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-subtle",
					children: "If this is an emergency and someone is in immediate danger, call 911."
				})
			]
		})]
	});
}
function SearchOverlay({ open, onClose, onOpen }) {
	const [q, setQ] = (0, import_react.useState)("");
	const index = (0, import_react.useMemo)(() => searchIndex(), []);
	const hits = (0, import_react.useMemo)(() => {
		if (!q.trim()) return index.slice(0, 8);
		return index.filter((r) => matchesQuery(q, r.title, r.blurb, r.kind)).slice(0, 20);
	}, [q, index]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-30 flex flex-col bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1 px-2 pt-[max(0.5rem,env(safe-area-inset-top))]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
				label: "Close search",
				onClick: onClose,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				autoFocus: true,
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Claims, breathing, Vet Center, GI Bill…",
				"aria-label": "Search Rally Point",
				className: "flex-1"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "flex-1 overflow-y-auto px-4 py-3 space-y-2 pb-8",
			children: [hits.map((h) => {
				const tel = h.tel ? `tel:${h.tel}` : void 0;
				const sms = h.sms ? `sms:${h.sms}` : void 0;
				const href = tel || sms || h.href;
				const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] uppercase tracking-widest text-sand",
						children: h.kind
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium",
						children: h.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-muted",
						children: h.blurb
					})
				] });
				if (h.screen) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "w-full rounded-xl border border-border bg-surface p-3 text-left",
					onClick: () => {
						onOpen(h.screen);
						onClose();
					},
					children: body
				}) }, h.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					target: h.href && !tel && !sms ? "_blank" : void 0,
					rel: "noopener noreferrer",
					className: "block rounded-xl border border-border bg-surface p-3",
					children: body
				}) }, h.id);
			}), hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "text-sm text-muted px-1",
				children: "Nothing for that. Try “PACT”, “988”, or “MOS”."
			}) : null]
		})]
	});
}
/** VA combined-rating math, 38 CFR 4.25. Highest first. Whole-person method. */
function combineExact(ratings) {
	const sorted = ratings.filter((r) => r > 0).sort((a, b) => b - a);
	let remaining = 100;
	for (const r of sorted) remaining = remaining * (1 - Math.min(r, 100) / 100);
	return 100 - remaining;
}
/** VA rounds combined value to nearest 10; values ending in 5 round up. */
function roundToNearestTen(value) {
	const floored = Math.floor(value);
	const ones = floored % 10;
	const base = floored - ones;
	if (ones >= 5) return Math.min(100, base + 10);
	return base;
}
function combineRatings(ratings) {
	const exact = combineExact(ratings);
	return {
		exact,
		rounded: roundToNearestTen(exact),
		leftover: 100 - exact
	};
}
/**
* Bilateral factor: 10% of the combined value of bilateral pairs is added
* before combining with remaining ratings (38 CFR 4.26).
*/
function applyBilateral(bilateral, others) {
	if (bilateral.length < 2) return combineRatings([...bilateral, ...others]);
	const pair = combineExact(bilateral);
	return combineRatings([pair + pair * .1, ...others]);
}
/** 2026 veteran-alone monthly rates (effective Dec 1, 2025). Confirm on VA.gov. */
var RATES_2026_ALONE = {
	10: 180.42,
	20: 356.66,
	30: 552.47,
	40: 795.84,
	50: 1132.9,
	60: 1435.02,
	70: 1808.45,
	80: 2102.15,
	90: 2362.3,
	100: 3938.58
};
function monthlyFor(rounded) {
	return RATES_2026_ALONE[Math.round(Math.max(0, Math.min(100, rounded)) / 10) * 10] ?? 0;
}
function formatUsd(n) {
	return n.toLocaleString("en-US", {
		style: "currency",
		currency: "USD"
	});
}
var ICONS = {
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
	pt: HeartPulse
};
function HomeScreen({ onOpen, onCustomize }) {
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
	const greet = greetingForHour((/* @__PURE__ */ new Date()).getHours());
	const who = name.trim() || "You're in.";
	const mission = missionForDate();
	const showMission = skip !== todayKey();
	const visible = pins.filter((id) => !hidden.includes(id));
	const combined = combineRatings(ratings.map((r) => r.value));
	const taken = takenMap[todayKey()] ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pb-28 pt-3 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: greet }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-[2.15rem] font-semibold uppercase leading-none mt-1",
					children: who
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted max-w-[36ch]",
					children: "Your rally point. Only what you asked for. Crisis is one tap up top."
				})
			] }),
			showMission ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Mission of the day" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[0.95rem]",
					children: mission
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						className: "flex-1",
						onClick: () => onOpen("breathe"),
						children: "Do it"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "flex-1",
						onClick: skipMission,
						children: "Skip"
					})]
				})
			] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Home cards" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCustomize,
					className: "text-sm text-accent min-h-11 px-1",
					children: "Edit"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: visible.map((id) => {
					const def = CARDS.find((c) => c.id === id);
					if (!def) return null;
					const Icon = ICONS[id];
					let extra = null;
					if (id === "rating") extra = `Combined ~${combined.rounded}% · ${formatUsd(monthlyFor(combined.rounded))}/mo veteran-alone`;
					if (id === "mood" && moodLog[0]) extra = `Last check-in: ${moodLog[0].mood}/5`;
					if (id === "meds" && meds.length) extra = `${taken.length}/${meds.length} taken today`;
					if (id === "appointments" && appointments.length) extra = `${appointments.length} on the board`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onOpen(def.screen),
						className: "flex min-h-20 items-center gap-3 rounded-2xl border border-border bg-surface p-4 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 shrink-0 place-items-center rounded-md bg-surface-2 text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: 1.75
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-xl font-semibold uppercase leading-none",
								children: def.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-muted",
								children: extra ?? def.blurb
							})]
						})]
					}, id);
				})
			}),
			visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Home is empty on purpose — or by accident. Pin a card."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-3",
				block: true,
				onClick: onCustomize,
				children: "Choose cards"
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onOpen("directory"),
				className: "flex w-full items-center gap-2 rounded-xl border border-dashed border-border px-4 py-3 text-left text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4" }), "Need something that isn’t here? Search, or open Resources."]
			})
		]
	});
}
function Screen({ title, onBack, children, kicker }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-full flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-10 flex items-center gap-1 border-b border-border bg-bg/95 px-2 py-2 backdrop-blur-sm",
			children: [onBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
				label: "Back",
				onClick: onBack,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-6" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: kicker }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "truncate font-display text-2xl font-semibold uppercase leading-tight",
					children: title
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 space-y-4 px-4 py-4 pb-28",
			children
		})]
	});
}
function Note({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-xl border border-border bg-surface-2 px-3 py-2.5 text-sm text-muted",
		children
	});
}
function LinkRow({ item, onOpen }) {
	const tel = item.tel ? `tel:${item.tel}` : void 0;
	const sms = item.sms ? `sms:${item.sms}` : void 0;
	const href = tel || sms || item.href;
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "min-w-0 flex-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block font-medium",
			children: item.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 block text-sm text-muted",
			children: item.blurb
		})]
	}), item.tel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
		className: "size-4 shrink-0 text-sand",
		"aria-hidden": true
	}) : null] });
	const cls = cn("flex w-full items-start gap-3 rounded-xl border border-border bg-surface p-4 text-left min-h-14");
	if (!href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cls,
		onClick: onOpen,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: cls,
		href,
		target: item.href && !tel && !sms ? "_blank" : void 0,
		rel: item.href && !tel && !sms ? "noopener noreferrer" : void 0,
		children: inner
	});
}
function RowButton({ title, blurb, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "flex w-full min-h-14 flex-col items-start rounded-xl border border-border bg-surface p-4 text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-muted",
			children: blurb
		})]
	});
}
function MeHub({ onOpen }) {
	const name = useRally((s) => s.name);
	const era = useRally((s) => s.era);
	const eraLabel = ERAS.find((e) => e.id === era)?.label ?? "Not set";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Me",
		kicker: "Yours",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl uppercase",
					children: name || "No name set"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted mt-1",
					children: eraLabel
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted mt-2",
					children: "No account. Data stays on this device unless you follow a link out."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onOpen("customize"),
				className: "flex w-full min-h-14 flex-col items-start rounded-xl border border-border bg-surface p-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: "Customize home"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: "Pin, hide, reorder. Ten seconds."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onOpen("display"),
				className: "flex w-full min-h-14 flex-col items-start rounded-xl border border-border bg-surface p-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: "Display & access"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: "High contrast, large text, motion, voice, haptics."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onOpen("profiles"),
				className: "flex w-full min-h-14 flex-col items-start rounded-xl border border-border bg-surface p-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: "Three sample homes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: "Claims. PTSD / sleep. Job search."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onOpen("manual"),
				className: "flex w-full min-h-14 flex-col items-start rounded-xl border border-border bg-surface p-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: "Field manual"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: "IA, palette, how this is built."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onOpen("privacy"),
				className: "flex w-full min-h-14 flex-col items-start rounded-xl border border-border bg-surface p-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: "Privacy & data"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: "Export. Wipe. No cloud."
				})]
			})
		]
	});
}
function Customize({ onBack }) {
	const pins = useRally((s) => s.pins);
	const hidden = useRally((s) => s.hidden);
	const setPins = useRally((s) => s.setPins);
	const toggleHidden = useRally((s) => s.toggleHidden);
	const movePin = useRally((s) => s.movePin);
	const pinCard = useRally((s) => s.pinCard);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Customize home",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Top of this list is top of Home. Hidden cards still live in Tools." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "On home" }),
			pins.map((id, i) => {
				const c = CARDS.find((x) => x.id === id);
				if (!c) return null;
				const hid = hidden.includes(id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-xl border border-border bg-surface p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: c.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: hid ? "Hidden" : "Visible"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 px-2 text-sm",
							disabled: i === 0,
							onClick: () => movePin(id, -1),
							children: "Up"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 px-2 text-sm",
							disabled: i === pins.length - 1,
							onClick: () => movePin(id, 1),
							children: "Down"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 px-2 text-sm text-sand",
							onClick: () => toggleHidden(id),
							children: hid ? "Show" : "Hide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 px-2 text-sm text-crisis",
							onClick: () => setPins(pins.filter((p) => p !== id)),
							children: "Unpin"
						})
					]
				}, id);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Available" }),
			CARDS.filter((c) => !pins.includes(c.id)).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => pinCard(c.id),
				className: "flex w-full min-h-12 items-center justify-between rounded-xl border border-border bg-surface px-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-medium",
					children: c.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs text-muted",
					children: c.blurb
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-widest text-sand",
					children: "Pin"
				})]
			}, c.id))
		]
	});
}
function Display({ onBack }) {
	const highContrast = useRally((s) => s.highContrast);
	const largeText = useRally((s) => s.largeText);
	const reduceMotion = useRally((s) => s.reduceMotion);
	const voiceOn = useRally((s) => s.voiceOn);
	const hapticOn = useRally((s) => s.hapticOn);
	const setPref = useRally((s) => s.setPref);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Display & access",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
				checked: highContrast,
				onChange: (v) => setPref("highContrast", v),
				label: "High contrast",
				hint: "Stronger borders. Brighter type."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
				checked: largeText,
				onChange: (v) => setPref("largeText", v),
				label: "Large text",
				hint: "Bumps the whole interface. VoiceOver still works."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
				checked: reduceMotion,
				onChange: (v) => setPref("reduceMotion", v),
				label: "Reduce motion",
				hint: "No expanding ring. No sliding chrome."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
				checked: voiceOn,
				onChange: (v) => setPref("voiceOn", v),
				label: "Calm voice on breathe",
				hint: "Uses the phone’s speech engine. Off by default."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
				checked: hapticOn,
				onChange: (v) => setPref("hapticOn", v),
				label: "Haptics on breathe",
				hint: "A short buzz on each phase. Silence if the device can’t."
			})
		]
	});
}
function Profiles({ onBack }) {
	const load = useRally((s) => s.loadProfile);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Sample homes",
		onBack,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Three veterans. Three home screens. Loads the cards they would actually keep. Your logs stay put." }), PROFILES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-widest text-sand",
				children: p.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl uppercase mt-1",
				children: p.callsign
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: p.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-subtle",
				children: ["Home: ", p.pins.map((id) => CARDS.find((c) => c.id === id)?.title).join(" · ")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-3",
				onClick: () => {
					load({
						name: p.callsign,
						era: p.era,
						struggles: p.struggles,
						pins: p.pins
					});
					onBack();
				},
				children: "Load this home"
			})
		] }, p.id))]
	});
}
function Privacy({ onBack }) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Privacy & data",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Core tools do not require an account. Mood, PCL-5, meds, safety plan, and ratings live in this browser. Clearing site data wipes them." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "secondary",
				block: true,
				onClick: exportJson,
				children: "Export my data"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "crisis",
				block: true,
				onClick: () => {
					if (confirm("Wipe Rally Point data on this device?")) resetAll();
				},
				children: "Wipe this device"
			})
		]
	});
}
function Manual({ onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Field manual",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Mission" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "The single customizable home base for combat veterans. A trusted battle buddy: calm, direct, never overwhelming, instantly useful in a crisis or on a quiet Tuesday."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Information architecture" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "whitespace-pre-wrap text-xs leading-5 text-muted font-sans",
				children: `Onboarding (60s)
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
  Me — customize, display, sample homes, privacy`
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Palette" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2",
				children: [
					["#0d1210", "Field"],
					["#161c18", "Surface"],
					["#8f9b72", "Olive"],
					["#e6e4d8", "Parchment"],
					["#c4b496", "Sand"],
					["#b85c4a", "Crisis"]
				].map(([hex, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-12",
						style: { background: hex }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "px-2 py-1.5 text-[11px]",
						children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-subtle",
							children: hex
						})]
					})]
				}, hex))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Type" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl uppercase",
				children: "Barlow Condensed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Source Sans 3 for body. Large targets. No sudden motion."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Principles" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "text-sm text-muted space-y-1 list-disc pl-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dark mode default. Muted navy / olive / earth." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Four tabs. Everything else is search or a card." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Veteran decides what stays on Home." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Suggest official VA tools instead of cloning them." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Copy like a fellow veteran. Short sentences. No lectures." })
				]
			})
		]
	});
}
function ResourcesHub({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Resources",
		kicker: "Official doors",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "We point at VA, VSOs, and real hotlines instead of inventing a second bureaucracy. If a site is down, the phone still works." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "VA benefits & claims" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Claims hub",
				blurb: "Filing, PACT, secondaries, checklist.",
				onClick: () => onOpen("claims")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Combined rating + back pay",
				blurb: "VA math. 2026 veteran-alone rates.",
				onClick: () => onOpen("rating")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Civilian transition" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "MOS translator + resume",
				blurb: "Say it in civilian.",
				onClick: () => onOpen("jobs")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "GI Bill",
				blurb: "Months left. Official comparison tool.",
				onClick: () => onOpen("gi-bill")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Housing & money",
				blurb: "Home loan, HUD-VASH, 877-424-3838.",
				onClick: () => onOpen("housing")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Daily life & family" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Family",
				blurb: "CHAMPVA, Chapter 35, caregiver, Family Coach.",
				onClick: () => onOpen("family")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Local & tribe",
				blurb: "Vet Centers, VFW, Legion, volunteer.",
				onClick: () => onOpen("community")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Body / PT",
				blurb: "Short routines. Not a PT clinic.",
				onClick: () => onOpen("pt")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Meds & appointments",
				blurb: "Reminders that live on this phone.",
				onClick: () => onOpen("meds")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Directory" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "All official numbers & links",
				blurb: "The full list. Search works too.",
				onClick: () => onOpen("directory")
			})
		]
	});
}
function Claims({ onBack }) {
	const [checked, setChecked] = (0, import_react.useState)({});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Claims hub",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "An accredited VSO is free. An accredited attorney is not always. Check the OGC list before you sign." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "The path" }),
			CLAIM_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-xl uppercase",
				children: [
					i + 1,
					". ",
					s.title
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: s.body
			})] }, s.title)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Document checklist" }),
			DOC_CHECKLIST.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setChecked((c) => ({
					...c,
					[d]: !c[d]
				})),
				className: "flex min-h-12 w-full items-center gap-3 rounded-xl border border-border bg-surface px-4 text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `grid size-5 place-items-center rounded-sm border ${checked[d] ? "border-accent bg-accent text-accent-fg" : "border-border-strong"}`,
					children: checked[d] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "size-3.5",
						strokeWidth: 3
					}) : null
				}), d]
			}, d)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "PACT Act" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2 text-sm text-muted",
				children: PACT_NOTES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-xl border border-border bg-surface p-3",
					children: n
				}, n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Common secondaries" }),
			SECONDARIES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: s.from
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted mt-1",
				children: s.to
			})] }, s.from)),
			OFFICIAL.filter((o) => o.category === "Claims").map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: o }, o.id))
		]
	});
}
function RatingCalc({ onBack }) {
	const ratings = useRally((s) => s.ratings);
	const add = useRally((s) => s.addRating);
	const update = useRally((s) => s.updateRating);
	const remove = useRally((s) => s.removeRating);
	const [effective, setEffective] = (0, import_react.useState)("2025-01-01");
	const [prior, setPrior] = (0, import_react.useState)(0);
	const bi = ratings.filter((r) => r.bilateral).map((r) => r.value);
	const other = ratings.filter((r) => !r.bilateral).map((r) => r.value);
	const result = bi.length >= 2 ? applyBilateral(bi, other) : applyBilateral([], ratings.map((r) => r.value));
	const monthly = monthlyFor(result.rounded);
	const months = monthsBetween(effective);
	const backpay = Math.max(0, (monthly - monthlyFor(prior)) * months);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Rating estimator",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "VA math (38 CFR 4.25 / 4.26). Not a rating decision. 2026 veteran-alone pay. Dependents and SMC add more. Confirm on VA.gov." }),
			ratings.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-surface p-3 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: r.label,
						onChange: (e) => update(r.id, { label: e.target.value }),
						"aria-label": "Condition name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1",
						children: [
							0,
							10,
							20,
							30,
							40,
							50,
							60,
							70,
							80,
							90,
							100
						].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: r.value === v,
							onClick: () => update(r.id, { value: v }),
							children: v
						}, v))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-sm text-sand min-h-11",
							onClick: () => update(r.id, { bilateral: !r.bilateral }),
							children: r.bilateral ? "Bilateral on" : "Mark bilateral"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-sm text-crisis min-h-11",
							onClick: () => remove(r.id),
							children: "Remove"
						})]
					})
				]
			}, r.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "secondary",
				block: true,
				onClick: add,
				children: "Add condition"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Exact combined"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-4xl tabular-nums",
					children: [result.exact.toFixed(1), "%"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Rounded (VA)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-5xl tabular-nums text-accent",
					children: [result.rounded, "%"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm",
					children: [
						"Veteran-alone 2026: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: formatUsd(monthly)
						}),
						"/mo"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-subtle mt-1",
					children: "SMC-K (loss of use / ED, etc.) pays on top of this. See official rates."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Back-pay sketch" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Proposed effective date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "date",
					value: effective,
					onChange: (e) => setEffective(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Prior combined % (0 if new)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "number",
					min: 0,
					max: 100,
					value: prior,
					onChange: (e) => setPrior(Number(e.target.value) || 0)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [months, " months × difference in veteran-alone rate"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl tabular-nums",
					children: formatUsd(backpay)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-subtle mt-1",
					children: "Real back pay uses your actual dependents, SMC, and the date VA assigns. This is a sketch so you know the scale."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: OFFICIAL.find((o) => o.id === "rates") })
		]
	});
}
function Jobs({ onBack }) {
	const [q, setQ] = (0, import_react.useState)("");
	const resume = useRally((s) => s.resume);
	const setResume = useRally((s) => s.setResume);
	const hits = (0, import_react.useMemo)(() => {
		const n = q.trim().toLowerCase();
		if (!n) return MOS.slice(0, 8);
		return MOS.filter((m) => m.code.toLowerCase().includes(n) || m.mil.toLowerCase().includes(n) || m.branch.toLowerCase().includes(n) || m.civ.some((c) => c.toLowerCase().includes(n)));
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
		resume.bullets
	].filter((l) => l !== void 0).join("\n");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Work & MOS",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search MOS, rating, or job — 0311, 68W, intel…",
				"aria-label": "Search MOS"
			}),
			hits.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-widest text-sand",
					children: [
						m.branch,
						" · ",
						m.code
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl uppercase",
					children: m.mil
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm",
					children: m.civ.join(" · ")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: m.skills
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					className: "mt-1 px-0",
					onClick: () => setResume({
						mos: `${m.code} ${m.mil}`,
						skills: m.skills,
						summary: `Veteran ${m.branch} ${m.mil}. Translates to ${m.civ[0]}.`
					}),
					children: "Drop into resume"
				})
			] }, `${m.branch}-${m.code}`)),
			hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No MOS hit. Try the code or the civilian title."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Resume builder" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Plain text. Copy it into Word or a VSO workshop. No cloud." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: resume.name,
				onChange: (e) => setResume({ name: e.target.value }),
				placeholder: "Name"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: resume.mos,
				onChange: (e) => setResume({ mos: e.target.value }),
				placeholder: "MOS / rating"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: resume.years,
				onChange: (e) => setResume({ years: e.target.value }),
				placeholder: "Years / era"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				value: resume.summary,
				onChange: (e) => setResume({ summary: e.target.value }),
				placeholder: "Three-line summary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				value: resume.skills,
				onChange: (e) => setResume({ skills: e.target.value }),
				placeholder: "Skills"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				value: resume.bullets,
				onChange: (e) => setResume({ bullets: e.target.value }),
				placeholder: "Led a 12-person team…\nAccountable for…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "secondary",
				block: true,
				onClick: () => void navigator.clipboard?.writeText(text),
				children: "Copy resume text"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Job boards" }),
			JOB_BOARDS.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: j }, j.id)),
			OFFICIAL.filter((o) => o.category === "Work" && !JOB_BOARDS.find((j) => j.id === o.id)).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: o }, o.id))
		]
	});
}
function GiBill({ onBack }) {
	const giMonths = useRally((s) => s.giMonths);
	const giBah = useRally((s) => s.giBah);
	const setGi = useRally((s) => s.setGi);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "GI Bill",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "The official comparison tool is the source of truth for school housing rates. This is a napkin for months and a monthly number you type in." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Months remaining (Post-9/11 default 36)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "number",
					min: 0,
					max: 48,
					value: giMonths,
					onChange: (e) => setGi({ giMonths: Number(e.target.value) || 0 })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Housing estimate you’ll actually get ($ / mo)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "number",
					min: 0,
					value: giBah,
					onChange: (e) => setGi({ giBah: Number(e.target.value) || 0 })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Rough remaining housing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl tabular-nums",
					children: formatUsd(giMonths * giBah)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-subtle mt-1",
					children: "Housing is pro-rated and zip-based. Chapter 31 (VR&E) can be a better door if you’re rated and need training while employed."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: OFFICIAL.find((o) => o.id === "gi-compare") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: OFFICIAL.find((o) => o.id === "gi-hotline") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: OFFICIAL.find((o) => o.id === "ch31") })
		]
	});
}
function Housing({ onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Housing & money",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "If the roof is the issue tonight, skip everything else and call 877-424-3838." }),
			OFFICIAL.filter((o) => o.category === "Housing").map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: o }, o.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl uppercase",
				children: "VA home loan, short"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-2 space-y-1 text-sm text-muted list-disc pl-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "$0 down for most eligible veterans. Funding fee may apply; often waived if rated." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No monthly PMI." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Certificate of Eligibility on VA.gov." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Still a mortgage. Still underwriting. Still read the numbers." })
				]
			})] })
		]
	});
}
function Family({ onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Family",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "They didn’t go with you and they still live with it. Give them tools, not a lecture they didn’t ask for." }),
			OFFICIAL.filter((o) => o.category === "Family" || o.id === "family-coach").map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: o }, o.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl uppercase",
				children: "CHAMPVA, short"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Spouse and kids can get CHAMPVA when you’re 100% permanent and total (and in some related cases). It is not TRICARE. Confirm eligibility before you drop employer insurance. Maternity is covered when the dependent is enrolled."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl uppercase",
				children: "Chapter 35"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Education money for dependents of veterans who are 100% P&T, or who died of service-connected causes. Months are finite. Apply early."
			})] })
		]
	});
}
function Community({ onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Local & tribe",
		onBack,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "A Vet Center does not require a claim. That’s the whole point." }), OFFICIAL.filter((o) => o.category === "Local").map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: o }, o.id))]
	});
}
function Pt({ onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Body / PT",
		onBack,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Not medical advice. If it shoots, goes numb, or swells fast — clinic, not this list." }), PT_ROUTINES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl uppercase",
			children: r.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-2 space-y-1.5 text-sm text-muted list-decimal pl-4",
			children: r.steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
		})] }, r.id))]
	});
}
function Directory({ onBack }) {
	const groups = (0, import_react.useMemo)(() => {
		const g = {};
		for (const o of OFFICIAL) (g[o.category] ??= []).push(o);
		return g;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Official directory",
		onBack,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Numbers and URLs from VA properties. If one changes, VA.gov wins." }), Object.entries(groups).map(([cat, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: cat }), items.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: o }, o.id))]
		}, cat))]
	});
}
function LifeMeds({ onBack }) {
	const meds = useRally((s) => s.meds);
	const addMed = useRally((s) => s.addMed);
	const removeMed = useRally((s) => s.removeMed);
	const toggle = useRally((s) => s.toggleMedTaken);
	const taken = useRally((s) => s.takenMedsOn);
	const appts = useRally((s) => s.appointments);
	const addAppt = useRally((s) => s.addAppt);
	const removeAppt = useRally((s) => s.removeAppt);
	const [name, setName] = (0, import_react.useState)("");
	const [dose, setDose] = (0, import_react.useState)("");
	const [time, setTime] = (0, import_react.useState)("08:00");
	const [title, setTitle] = (0, import_react.useState)("");
	const [when, setWhen] = (0, import_react.useState)("");
	const [where, setWhere] = (0, import_react.useState)("");
	const takenToday = taken[(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)] ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Meds & appointments",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Meds today" }),
			meds.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "None listed."
			}) : null,
			meds.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => toggle(m.id),
				className: "flex w-full min-h-14 items-center justify-between rounded-xl border border-border bg-surface px-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-medium",
					children: m.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted",
					children: [
						m.dose,
						" · ",
						m.time
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-widest text-sand",
					children: takenToday.includes(m.id) ? "Taken" : "Due"
				})]
			}, m.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: name,
					onChange: (e) => setName(e.target.value),
					placeholder: "Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: dose,
					onChange: (e) => setDose(e.target.value),
					placeholder: "Dose"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "time",
				value: time,
				onChange: (e) => setTime(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "secondary",
				block: true,
				onClick: () => {
					if (!name.trim()) return;
					addMed({
						name: name.trim(),
						dose: dose.trim(),
						time
					});
					setName("");
					setDose("");
				},
				children: "Add med"
			}),
			meds.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "text-xs text-crisis",
				onClick: () => removeMed(m.id),
				children: ["Remove ", m.name]
			}, `rm-${m.id}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Appointments" }),
			appts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: a.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						a.when,
						" ",
						a.where ? `· ${a.where}` : ""
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-xs text-crisis mt-1",
					onClick: () => removeAppt(a.id),
					children: "Remove"
				})
			] }, a.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: title,
				onChange: (e) => setTitle(e.target.value),
				placeholder: "C&P, PT, primary…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "datetime-local",
				value: when,
				onChange: (e) => setWhen(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: where,
				onChange: (e) => setWhere(e.target.value),
				placeholder: "Where"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "secondary",
				block: true,
				onClick: () => {
					if (!title.trim() || !when) return;
					addAppt({
						title: title.trim(),
						when,
						where: where.trim()
					});
					setTitle("");
					setWhen("");
					setWhere("");
				},
				children: "Add appointment"
			})
		]
	});
}
function ToolsHub({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Tools",
		kicker: "On this device",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Crisis tools work without an account and without a network, except the call / text / chat handoff." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Regulate" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Breathe",
				blurb: "Box, tactical, 4-7-8, diaphragm. Expanding ring.",
				onClick: () => onOpen("breathe")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "5-4-3-2-1 grounding",
				blurb: "Senses. Get back in the room.",
				onClick: () => onOpen("grounding")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Thought stopping",
				blurb: "Notice. Label. Stop. Replace.",
				onClick: () => onOpen("thought")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Distress tolerance",
				blurb: "Short skills when you’re already in it.",
				onClick: () => onOpen("distress")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Sleep wind-down",
				blurb: "Dump the day. Slow the body.",
				onClick: () => onOpen("sleep")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Track (private)" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Mood check-in",
				blurb: "One number. Optional note. Stays here.",
				onClick: () => onOpen("mood")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Anger / irritability",
				blurb: "Level plus trigger. Patterns, not shame.",
				onClick: () => onOpen("anger")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "PTSD symptom log (PCL-5)",
				blurb: "20 items. Not a diagnosis. Yours.",
				onClick: () => onOpen("pcl5")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowButton, {
				title: "Safety plan",
				blurb: "Write it now. Use it later.",
				onClick: () => onOpen("safety")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Official VA apps" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted -mt-2",
				children: "We don’t clone these. We send you to the people who keep them current."
			}),
			OFFICIAL.filter((o) => o.category === "VA apps").map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: o }, o.id))
		]
	});
}
var SENSES = [
	{
		n: 5,
		sense: "see",
		prompt: "Five things you can see. Name them out loud if you can."
	},
	{
		n: 4,
		sense: "feel",
		prompt: "Four things you can feel. Floor. Fabric. Air. Weight."
	},
	{
		n: 3,
		sense: "hear",
		prompt: "Three sounds. Far, near, inside the room."
	},
	{
		n: 2,
		sense: "smell",
		prompt: "Two smells. Or two things you know the smell of."
	},
	{
		n: 1,
		sense: "taste",
		prompt: "One taste. Coffee, metal, morning. Or just your mouth."
	}
];
function Grounding({ onBack }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const s = SENSES[step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Ground",
		kicker: "5-4-3-2-1",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-surface p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-6xl font-semibold tabular-nums text-accent leading-none",
						children: s.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-3xl uppercase",
						children: s.sense
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: s.prompt
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					className: "flex-1",
					onClick: () => setStep((n) => n - 1),
					children: "Back"
				}) : null, step < SENSES.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					onClick: () => setStep((n) => n + 1),
					children: "Next"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					onClick: onBack,
					children: "I’m here"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				block: true,
				onClick: () => onBack(),
				children: "Enough. Leave."
			})
		]
	});
}
function ThoughtStop({ onBack }) {
	const [phase, setPhase] = (0, import_react.useState)(0);
	const [replacement, setReplacement] = (0, import_react.useState)("I am in this room. Today is now.");
	const p = [
		{
			t: "Notice",
			b: "Catch the loop. Don’t argue with it yet. Just mark it."
		},
		{
			t: "Label",
			b: "Call it what it is: a memory, a forecast, a threat scan. Not a fact about this minute."
		},
		{
			t: "Stop",
			b: "Picture a hard stop. Hand up. You are not required to finish the thought."
		},
		{
			t: "Replace",
			b: "Park a true, boring sentence in its place. Repeat it until the volume drops."
		}
	][phase];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Thought stopping",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-4xl uppercase",
				children: p.t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: p.b
			})] }),
			phase === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				value: replacement,
				onChange: (e) => setReplacement(e.target.value),
				"aria-label": "Replacement sentence"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [phase > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					className: "flex-1",
					onClick: () => setPhase((n) => n - 1),
					children: "Back"
				}) : null, phase < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					onClick: () => setPhase((n) => n + 1),
					children: "Next"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					onClick: onBack,
					children: "Hold that line"
				})]
			})
		]
	});
}
function Distress({ onBack, onBreathe }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Distress tolerance",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Not a therapy session. Four short moves when you’re already in the red." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl uppercase",
				children: "Temperature"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Cold water on the face or wrists. Ice pack on the back of the neck. It interrupts the surge. Don’t do breath-holds in water."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl uppercase",
				children: "Intense — brief"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Wall push-ups to failure, or a fast walk around the block. Ninety seconds. Then stop."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl uppercase",
					children: "Paced breathing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Longer out-breath than in. Tactical or 4-7-8."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-3",
					onClick: onBreathe,
					children: "Open breathe"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl uppercase",
				children: "Paired muscle"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Fists, 5 seconds, release. Shoulders, 5, release. Jaw, 5, release. You’re teaching the body the off switch."
			})] })
		]
	});
}
function SleepWind({ onBack, onBreathe }) {
	const [dump, setDump] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Sleep wind-down",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Screens off after this if you can. VA’s Insomnia Coach is the deeper tool if nights are the whole war." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Park the day" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				value: dump,
				onChange: (e) => setDump(e.target.value),
				placeholder: "Unfinished loops. Tomorrow’s first move. Then close it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "space-y-3 text-sm text-muted list-decimal pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Lights down. Room cooler than you think." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Same wind-down, same order, every night you can." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "If you’re not asleep in ~20 minutes, get up. No doom-scroll." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Don’t chase sleep. It’s a landing, not a takedown." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: onBreathe,
				children: "4-7-8 now"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: OFFICIAL.find((o) => o.id === "insomnia-coach") })
		]
	});
}
function Mood({ onBack }) {
	const log = useRally((s) => s.moodLog);
	const add = useRally((s) => s.addMood);
	const [mood, setMood] = (0, import_react.useState)(3);
	const [note, setNote] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Mood",
		kicker: "Private",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "1 is the floor. 5 is a good day. No audience."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: [
					1,
					2,
					3,
					4,
					5
				].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: mood === n,
					onClick: () => setMood(n),
					className: "flex-1",
					children: n
				}, n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				value: note,
				onChange: (e) => setNote(e.target.value),
				placeholder: "Optional note"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				block: true,
				onClick: () => {
					add(mood, note.trim());
					setNote("");
				},
				children: "Log it"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Recent" }),
			log.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Nothing yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: log.slice(0, 12).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-surface px-3 py-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-sand",
							children: [e.mood, "/5"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-subtle",
							children: [" · ", new Date(e.date).toLocaleString()]
						}),
						e.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: e.note
						}) : null
					]
				}, e.id))
			})
		]
	});
}
function Anger({ onBack }) {
	const log = useRally((s) => s.angerLog);
	const add = useRally((s) => s.addAnger);
	const [level, setLevel] = (0, import_react.useState)(3);
	const [trigger, setTrigger] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Anger log",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Irritability is a PTSD symptom, not a moral failure. Official deeper tool: AIMS." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: [
					1,
					2,
					3,
					4,
					5
				].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: level === n,
					onClick: () => setLevel(n),
					className: "flex-1",
					children: n
				}, n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: trigger,
				onChange: (e) => setTrigger(e.target.value),
				placeholder: "What set it off — traffic, tone, a look"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				block: true,
				onClick: () => {
					add(level, trigger.trim());
					setTrigger("");
				},
				children: "Log it"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: log.slice(0, 12).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-surface px-3 py-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-sand",
							children: [e.level, "/5"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-subtle",
							children: [" · ", new Date(e.date).toLocaleString()]
						}),
						e.trigger ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: e.trigger
						}) : null
					]
				}, e.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: OFFICIAL.find((o) => o.id === "aims") })
		]
	});
}
function Pcl5({ onBack }) {
	const add = useRally((s) => s.addPcl);
	const log = useRally((s) => s.pclLog);
	const [scores, setScores] = (0, import_react.useState)(() => Array(20).fill(-1));
	const [done, setDone] = (0, import_react.useState)(false);
	const filled = scores.every((s) => s >= 0);
	const total = scores.reduce((a, b) => a + Math.max(0, b), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "PCL-5 log",
		kicker: "Not a diagnosis",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "National Center for PTSD checklist. Past month. Private. A common research cutoff for further evaluation is 31–33. This is a log, not a claim exam and not a diagnosis." }),
			!done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				PCL5.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sand tabular-nums",
								children: [i + 1, "."]
							}),
							" ",
							q
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-5 gap-1",
						children: PCL_SCALE.map((label, v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setScores((s) => {
								const n = [...s];
								n[i] = v;
								return n;
							}),
							className: `min-h-11 rounded-md text-[11px] leading-tight px-1 ${scores[i] === v ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"}`,
							children: v
						}, label))
					})]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-subtle",
					children: "0 not at all — 4 extremely"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					block: true,
					disabled: !filled,
					onClick: () => {
						add(scores);
						setDone(true);
					},
					children: ["Save this check-in ", filled ? `· ${total}` : ""]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-5xl tabular-nums",
					children: total
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted mt-2",
					children: "Total 0–80. If this is climbing, or you’re not safe, use Crisis. Talk to a clinician or Vet Center — this number is for you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4",
					variant: "secondary",
					onClick: () => {
						setDone(false);
						setScores(Array(20).fill(-1));
					},
					children: "New check-in"
				})
			] }),
			log[0] && !done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Last total: ",
					log[0].scores.reduce((a, b) => a + b, 0),
					" on",
					" ",
					new Date(log[0].date).toLocaleDateString()
				]
			}) : null
		]
	});
}
var SAFETY_FIELDS = [
	{
		key: "warningSigns",
		label: "1. Warning signs",
		hint: "Thoughts, body, behavior that mean you’re sliding."
	},
	{
		key: "coping",
		label: "2. Internal coping",
		hint: "What you can do alone. Breathe. Walk. Cold water."
	},
	{
		key: "peoplePlaces",
		label: "3. People / places for distraction",
		hint: "Not for the heavy talk. Just not-alone."
	},
	{
		key: "helpPeople",
		label: "4. People I can ask for help",
		hint: "Names and numbers. Tell them they’re on this list."
	},
	{
		key: "professionals",
		label: "5. Professionals / agencies",
		hint: "Vet Center, clinician, 988 then 1, 838255."
	},
	{
		key: "environment",
		label: "6. Make the environment safer",
		hint: "Means restriction. Who holds what. Be specific."
	},
	{
		key: "reasons",
		label: "Reasons for living",
		hint: "People, dogs, unfinished business. Short is fine."
	}
];
function Safety({ onBack }) {
	const plan = useRally((s) => s.safetyPlan);
	const setSafety = useRally((s) => s.setSafety);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Safety plan",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Stanley-Brown structure, same family as the VA Safety Plan app. Fills stay on this device. Official app if you want sync across phones." }),
			SAFETY_FIELDS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium",
					children: f.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: plan[f.key],
					onChange: (e) => setSafety({ [f.key]: e.target.value }),
					placeholder: f.hint
				})]
			}, f.key)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, { item: OFFICIAL.find((o) => o.id === "safety-plan-app") })
		]
	});
}
function Home() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const onboarded = useRally((s) => s.onboarded);
	const highContrast = useRally((s) => s.highContrast);
	const largeText = useRally((s) => s.largeText);
	const reduceMotion = useRally((s) => s.reduceMotion);
	(0, import_react.useEffect)(() => {
		useRally.persist.rehydrate();
		const unsub = useRally.persist.onFinishHydration(() => setHydrated(true));
		if (useRally.persist.hasHydrated()) setHydrated(true);
		return unsub;
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		const root = document.documentElement;
		root.classList.toggle("high-contrast", highContrast);
		root.classList.toggle("large-text", largeText);
		root.classList.toggle("reduce-motion", reduceMotion);
	}, [
		hydrated,
		highContrast,
		largeText,
		reduceMotion
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "phone-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "phone-frame",
			children: !onboarded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gate, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {})
		})
	});
}
function Gate() {
	const [demo, setDemo] = (0, import_react.useState)(false);
	if (demo) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Profiles, { onBack: () => setDemo(false) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, { onDemo: () => setDemo(true) });
}
function Shell() {
	const [tab, setTab] = (0, import_react.useState)("home");
	const [stack, setStack] = (0, import_react.useState)([]);
	const [crisis, setCrisis] = (0, import_react.useState)(false);
	const [search, setSearch] = (0, import_react.useState)(false);
	const [breathe, setBreathe] = (0, import_react.useState)(false);
	function open(id) {
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
	function goTab(t) {
		setTab(t);
		setStack([]);
	}
	const top = stack[stack.length - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-bg",
		children: [
			breathe ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreatheSession, { onClose: () => setBreathe(false) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
					onCrisis: () => setCrisis(true),
					onSearch: () => setSearch(true)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-[calc(100dvh-7.5rem)]",
					children: [
						!top && tab === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {
							onOpen: open,
							onCustomize: () => open("customize")
						}) : null,
						!top && tab === "tools" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsHub, { onOpen: open }) : null,
						!top && tab === "resources" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourcesHub, { onOpen: open }) : null,
						!top && tab === "me" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeHub, { onOpen: open }) : null,
						top ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenSwitch, {
							id: top,
							onBack: back,
							onOpen: open
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {
					tab,
					onTab: goTab
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchOverlay, {
				open: search,
				onClose: () => setSearch(false),
				onOpen: open
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrisisSheet, {
				open: crisis,
				onClose: () => setCrisis(false)
			})
		]
	});
}
function ScreenSwitch({ id, onBack, onOpen }) {
	switch (id) {
		case "grounding": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grounding, { onBack });
		case "thought": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThoughtStop, { onBack });
		case "distress": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Distress, {
			onBack,
			onBreathe: () => onOpen("breathe")
		});
		case "sleep": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SleepWind, {
			onBack,
			onBreathe: () => onOpen("breathe")
		});
		case "mood": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mood, { onBack });
		case "anger": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anger, { onBack });
		case "pcl5": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pcl5, { onBack });
		case "safety": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Safety, { onBack });
		case "claims": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Claims, { onBack });
		case "rating": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatingCalc, { onBack });
		case "jobs": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Jobs, { onBack });
		case "gi-bill": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiBill, { onBack });
		case "housing": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Housing, { onBack });
		case "family": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Family, { onBack });
		case "community": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Community, { onBack });
		case "pt": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pt, { onBack });
		case "meds":
		case "appointments": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeMeds, { onBack });
		case "directory": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Directory, { onBack });
		case "customize": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Customize, { onBack });
		case "display": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Display, { onBack });
		case "profiles": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Profiles, { onBack });
		case "privacy": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Privacy, { onBack });
		case "manual": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manual, { onBack });
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "That tool isn’t wired."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 text-accent",
				onClick: onBack,
				children: "Back"
			})]
		});
	}
}
//#endregion
export { Home as component };
