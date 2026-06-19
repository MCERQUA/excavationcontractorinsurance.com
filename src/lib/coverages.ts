export interface Coverage {
  slug: string;
  name: string;
  shortDesc: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
}

export const coverages: Coverage[] = [
  {
    slug: "underground-utility-coverage",
    name: "Underground Utility & Trenching Coverage",
    shortDesc:
      "Specialized protection for trenching and underground utility work, addressing the explosion, collapse, and underground (XCU) exposures that generic policies exclude.",
    highlights: [
      "Affirmative XCU coverage for struck gas, water, electric, and fiber lines",
      "Trench-collapse and cave-in liability protection",
      "Coverage for damage to subsurface structures and existing utilities",
      "Backfill and compaction completed-operations protection",
      "Locate-failure and mis-marked utility loss support",
    ],
    faqs: [
      {
        q: "What is XCU coverage and why does it matter for trenching?",
        a: "XCU stands for explosion, collapse, and underground property damage. These exposures are commonly excluded on generic contractor policies but are central to trenching and utility work. We make sure your policy affirmatively grants XCU.",
      },
      {
        q: "Am I covered if I hit an unmarked utility line?",
        a: "With proper underground (U) coverage, damage to underground utilities is covered subject to policy terms. We confirm your policy includes it so a struck line doesn't become an uncovered out-of-pocket loss.",
      },
      {
        q: "Does this cover trench cave-ins?",
        a: "Liability arising from a trench collapse affecting third parties or property is addressed under the collapse (C) portion of XCU, and employee injuries are covered by workers compensation. We coordinate both.",
      },
    ],
  },
  {
    slug: "grading-earthmoving-coverage",
    name: "Grading & Earthmoving Coverage",
    shortDesc:
      "Liability and operations coverage tailored to grading, earthmoving, and bulk-excavation work where altered drainage and soil movement create unique claims.",
    highlights: [
      "Coverage for property damage from altered drainage and water flow",
      "Soil-settlement and subsidence completed-operations protection",
      "Damage to adjacent structures from earthmoving and compaction",
      "Equipment-in-use liability for dozers, scrapers, and graders",
      "Off-site spoil and fill liability",
    ],
    faqs: [
      {
        q: "Am I liable if my grading work causes flooding next door?",
        a: "Redirecting stormwater that floods a neighboring property is a common excavation claim. With proper general liability and completed-operations coverage, this third-party property damage is addressed. We verify the wording.",
      },
      {
        q: "Does this cover soil settlement after I finish?",
        a: "Soil settlement and subsidence claims often surface months after demobilization. Completed-operations coverage that extends past project closeout is essential, and we make sure yours does.",
      },
      {
        q: "Is damage to adjacent structures covered?",
        a: "Damage to neighboring buildings from compaction, vibration, or earthmoving is covered under general liability, ideally with collapse and underground extensions for subsurface impacts.",
      },
    ],
  },
  {
    slug: "land-clearing-coverage",
    name: "Land Clearing Coverage",
    shortDesc:
      "Protection for land-clearing operations including tree removal, brush clearing, and site stripping, with attention to fire, debris, and environmental exposures.",
    highlights: [
      "Liability for tree-felling and debris-related property damage",
      "Fire-suppression and burn-related exposure support",
      "Mulching, grinding, and chipping operations coverage",
      "Off-site debris hauling and disposal liability",
      "Coordination with pollution liability for cleared-material runoff",
    ],
    faqs: [
      {
        q: "Is damage from a falling tree covered?",
        a: "Property damage to third parties from tree-felling operations is covered under general liability. We make sure land-clearing operations are properly disclosed so the coverage responds.",
      },
      {
        q: "What about controlled burns or fire risk?",
        a: "Burning cleared debris creates serious fire exposure. We review your policy for any burning exclusions and structure coverage and limits appropriate to your fire risk.",
      },
      {
        q: "Do I need pollution coverage for land clearing?",
        a: "If clearing disturbs soil or creates sediment runoff, pollution liability fills the gap GL excludes. We often pair land-clearing operations with a contractors pollution policy.",
      },
    ],
  },
  {
    slug: "site-preparation-coverage",
    name: "Site Preparation Coverage",
    shortDesc:
      "Comprehensive coverage for full-scope site-prep contractors handling clearing, excavation, grading, and utility rough-in on commercial and residential projects.",
    highlights: [
      "Blanket coverage across multiple site-prep operations",
      "Additional-insured and contractual-liability support for GC contracts",
      "Completed-operations protection for the full prepared site",
      "Coordination of GL, equipment, auto, and pollution in one program",
      "Certificate management for fast onboarding to new jobsites",
    ],
    faqs: [
      {
        q: "I do everything from clearing to utilities — can one program cover it?",
        a: "Yes. Full-scope site-prep contractors need a coordinated program spanning GL, equipment, auto, and pollution. We build a single program so every operation is covered without gaps between policies.",
      },
      {
        q: "Can you handle additional-insured requirements for GCs?",
        a: "Absolutely. We add additional-insured, waiver-of-subrogation, and primary-and-noncontributory wording so your certificates meet general-contractor contract requirements the first time.",
      },
      {
        q: "How fast can I get a certificate for a new job?",
        a: "We provide fast certificate turnaround so you're never stuck off a jobsite waiting on paperwork. Many certificates are issued same-day.",
      },
    ],
  },
  {
    slug: "contractor-bonds",
    name: "Contractor Bonds",
    shortDesc:
      "Bid, performance, and payment bonds that let excavation contractors qualify for and complete bonded public and commercial projects.",
    highlights: [
      "Bid bonds to qualify for public and commercial bid lists",
      "Performance bonds guaranteeing project completion",
      "Payment bonds protecting subcontractors and suppliers",
      "License and permit bonds for regulatory compliance",
      "Surety relationships sized to your bonding capacity needs",
    ],
    faqs: [
      {
        q: "What's the difference between a bond and insurance?",
        a: "Insurance protects you; a bond protects the project owner by guaranteeing your performance. If you fail to perform, the surety pays the owner and seeks reimbursement from you. Both are often required on public work.",
      },
      {
        q: "Do I need bonds for public excavation projects?",
        a: "Almost always. Public and many large commercial projects require bid, performance, and payment bonds. We help you establish surety capacity so you can bid bonded work.",
      },
      {
        q: "How is my bonding capacity determined?",
        a: "Sureties evaluate your financials, work history, and experience. We help present your business to underwriters to secure the bonding capacity your project pipeline requires.",
      },
    ],
  },
  {
    slug: "builders-risk",
    name: "Builders Risk Coverage",
    shortDesc:
      "Course-of-construction coverage protecting the work in progress, materials, and site improvements on excavation and sitework projects until completion.",
    highlights: [
      "Coverage for work in progress and installed materials",
      "Protection for materials stored on site and in transit",
      "Coverage against fire, theft, vandalism, and weather events",
      "Soft-cost and project-delay extensions available",
      "Coordination with the GC's wrap-up or project-specific policy",
    ],
    faqs: [
      {
        q: "What does builders risk cover on an excavation project?",
        a: "It covers the project work in progress, materials, and site improvements against perils like fire, theft, vandalism, and weather during construction, before the project is handed over.",
      },
      {
        q: "Who buys builders risk — me or the GC?",
        a: "It varies by contract. Sometimes the GC carries a wrap-up policy; other times the sub or owner buys it. We review your contract to confirm whether you need to provide it.",
      },
      {
        q: "Does builders risk cover my equipment?",
        a: "No. Builders risk covers the project itself; your owned equipment is covered by inland marine. We coordinate both so the project and your iron are each protected.",
      },
    ],
  },
];

export function getCoverage(slug: string): Coverage | undefined {
  return coverages.find((c) => c.slug === slug);
}
