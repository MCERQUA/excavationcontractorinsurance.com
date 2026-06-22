export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: "general-liability",
    name: "General Liability Insurance",
    icon: "Shield",
    shortDesc:
      "Core third-party protection for excavation contractors against bodily injury and property damage claims that arise from dirt work, trenching, and earthmoving operations.",
    longDesc:
      "General liability insurance is the foundation of every excavation contractor's risk program. When you operate heavy machinery, open trenches, and move thousands of cubic yards of earth, the potential for third-party bodily injury and property damage is constant and severe. A single struck-by incident, a damaged underground gas line, or a property-owner slip-and-fall on your jobsite can generate a claim that easily exceeds six figures once medical bills, legal defense, and settlement costs are tallied.\n\nFor excavation contractors specifically, general liability responds to the dirt-work hazards that define your trade. If your excavator bucket swings into a parked vehicle, if a passerby is injured by falling spoil, if your grading work redirects stormwater and floods a neighboring basement, or if you damage a buried utility line that was not properly located — your GL policy is the first line of defense. It pays for the injured party's medical costs, repairs to damaged property, your attorney fees, and any judgment or settlement up to your policy limits.\n\nExcavation general liability requires careful attention to the so-called XCU exposures — explosion, collapse, and underground property damage. Many off-the-shelf contractor policies quietly exclude these coverages, which is catastrophic for a contractor whose entire business is digging. We make sure your policy affirmatively grants XCU coverage so a collapsed trench wall, a damaged underground fiber line, or a subsidence claim is actually covered rather than denied. We also confirm your completed-operations coverage extends past project closeout, because soil settlement and backfill failures often surface months after you have demobilized.\n\nBeyond protecting your balance sheet, general liability is frequently a contractual requirement. General contractors, municipalities, and developers will not let you on site without a certificate of insurance naming them as additional insured, and most require waivers of subrogation and primary-and-noncontributory wording. As former contractors ourselves, we structure your GL so it satisfies those contract demands the first time, getting you onto the job without back-and-forth. With 20+ years specializing in contractor trades and a 15-minute quote turnaround, we make sure your excavation business is covered for the exposures that actually put it at risk.",
    benefits: [
      "Third-party bodily injury and property damage protection on every jobsite",
      "Affirmative XCU coverage — explosion, collapse, and underground damage included",
      "Products and completed-operations coverage for post-job soil settlement and backfill claims",
      "Additional insured, waiver of subrogation, and primary-and-noncontributory endorsements for GC contracts",
      "Legal defense costs covered even for groundless or fraudulent suits",
      "Fast certificate-of-insurance turnaround so you never lose a job waiting on paperwork",
    ],
    faqs: [
      {
        q: "Does general liability cover underground utility damage?",
        a: "Only if your policy includes XCU (explosion, collapse, underground) coverage. Many generic policies exclude it. We make sure your excavation GL affirmatively grants underground property damage coverage so a struck gas, water, or fiber line is actually covered.",
      },
      {
        q: "How much general liability coverage do excavation contractors need?",
        a: "Most excavation contractors carry a $1M per-occurrence / $2M aggregate limit as a baseline, but larger commercial and municipal jobs often require higher limits backed by an umbrella. We match your limits to your actual contracts.",
      },
      {
        q: "Will general liability cover injuries to my own employees?",
        a: "No. Employee injuries are handled by workers compensation, not general liability. GL covers third parties — the public, other trades, and property owners. You need both policies to be fully protected.",
      },
    ],
  },
  {
    slug: "pollution-liability",
    name: "Pollution Liability Insurance",
    icon: "AlertTriangle",
    shortDesc:
      "Environmental coverage for the contamination and pollution exposures that excavation work creates and that standard general liability policies specifically exclude.",
    longDesc:
      "Pollution liability insurance closes one of the most dangerous coverage gaps in the excavation trade. Standard general liability policies contain an absolute pollution exclusion, which means that the moment a claim involves a contaminant, a pollutant, or environmental damage, your GL carrier walks away. For a contractor whose work disturbs soil, unearths buried tanks, and operates fuel-laden heavy equipment all day, that exclusion is a serious problem.\n\nExcavation contractors create pollution exposures constantly, often without realizing it. Cutting into contaminated soil and spreading it across a clean site, rupturing an abandoned underground storage tank, a hydraulic hose bursting and releasing fluid into a stormwater drain, diesel spilling during refueling, or silt and sediment runoff from an open site fouling a nearby stream — every one of these is a pollution event that your general liability policy will not touch. Regulators do not care that the contamination was accidental; under environmental law you can be held strictly liable for cleanup costs, third-party bodily injury, and natural-resource damages.\n\nContractors pollution liability (CPL) responds where GL stops. It pays for emergency response and remediation, third-party bodily injury and property damage from a pollution condition, government-mandated cleanup, legal defense, and even reputational and business-interruption costs on better forms. For excavation contractors, we make sure the policy is written on an occurrence or robust claims-made basis with coverage for both sudden and gradual pollution conditions, transported-materials coverage for hauling spoil and contaminated soil, and non-owned disposal site coverage protecting you if the dump site you used is later found to be contaminated.\n\nMany general contractors and project owners now require pollution liability by contract — it is no longer optional on commercial, municipal, and environmental remediation work. Carrying CPL not only protects you from catastrophic cleanup bills that can bankrupt a small operation, it also opens the door to higher-value projects that mandate the coverage. As contractor insurance specialists, we structure your pollution liability to match the soil conditions, fuel handling, and disposal practices specific to your excavation operation, so the coverage actually responds when a spill or contamination event occurs.",
    benefits: [
      "Covers the pollution and contamination claims that GL absolutely excludes",
      "Sudden and gradual pollution conditions — fuel spills, hydraulic releases, silt runoff",
      "Government-mandated cleanup and remediation cost coverage",
      "Transported-materials coverage for hauling spoil and contaminated soil",
      "Non-owned disposal site coverage protecting you against contaminated dump sites",
      "Satisfies pollution-liability requirements on commercial and municipal contracts",
    ],
    faqs: [
      {
        q: "Why can't my general liability policy cover pollution?",
        a: "Standard GL policies contain an absolute pollution exclusion. The instant a claim involves a contaminant or pollutant, GL coverage disappears. Contractors pollution liability is a separate policy specifically built to fill that gap.",
      },
      {
        q: "What kinds of excavation incidents trigger pollution liability?",
        a: "Fuel or hydraulic-fluid spills, rupturing a buried storage tank, spreading contaminated soil, silt and sediment runoff polluting waterways, and disturbing hazardous materials are all common triggers that GL will deny but CPL will cover.",
      },
      {
        q: "Is pollution liability required for excavation contractors?",
        a: "It is increasingly mandated by contract on commercial, municipal, and environmental projects. Even when not required, the catastrophic cost of a cleanup makes CPL essential for any contractor disturbing soil.",
      },
    ],
  },
  {
    slug: "workers-compensation",
    name: "Workers Compensation",
    icon: "HardHat",
    shortDesc:
      "Mandatory coverage that protects your excavation crew and your business when an on-the-job injury happens in one of construction's highest-hazard trades.",
    longDesc:
      "Workers compensation is both a legal mandate and a financial necessity for excavation contractors. Excavation consistently ranks among the most dangerous construction trades — trench collapses, cave-ins, struck-by equipment incidents, falls into open excavations, and crush injuries from heavy machinery cause some of the most severe injuries in the industry. When one of your operators or laborers is hurt, workers compensation pays their medical bills, replaces lost wages, and covers rehabilitation, while shielding your business from being sued directly by the injured worker.\n\nNearly every state requires workers compensation the moment you hire your first employee, and the penalties for going without it are severe — stop-work orders, six-figure fines, and in some states criminal liability for the owner. Beyond the legal mandate, general contractors and project owners will not let an uninsured subcontractor on site, so a valid workers comp certificate is your ticket to bid and work on commercial projects.\n\nExcavation workers compensation is priced on payroll and governing class codes, and those codes carry some of the higher rates in construction because of the trade's hazard profile. This is exactly where specialist placement pays off. We make sure your payroll is split correctly across class codes — clerical and supervisory payroll should not be rated at the excavation laborer rate — and we audit your experience modification factor to confirm you are not overpaying because of mis-rated or stale claims data. A clean experience mod can mean tens of thousands of dollars in annual premium savings on an excavation payroll.\n\nWe also help you manage the levers that actually control workers comp cost over time: a documented safety program with trench-protective-systems and competent-person training, prompt claims reporting, return-to-work programs that get injured employees back on light duty, and proper classification of subcontractors so you are not unexpectedly charged for their payroll at audit. As former contractors who understand jobsite reality, we structure your workers comp to keep your crew protected, your projects compliant, and your premium under control — backed by our 2-hour claims response guarantee so an injured worker gets help fast.",
    benefits: [
      "Satisfies the legal workers comp mandate in all 50 states",
      "Pays medical costs, lost wages, and rehabilitation for injured crew members",
      "Protects your business from direct injury lawsuits by employees",
      "Correct class-code splitting so clerical payroll isn't rated as excavation labor",
      "Experience-modification review to eliminate overcharges from mis-rated claims",
      "Return-to-work and safety-program guidance to lower long-term premium",
    ],
    faqs: [
      {
        q: "Is workers compensation required for excavation contractors?",
        a: "Yes. Almost every state requires workers comp as soon as you have employees. Operating without it exposes you to stop-work orders, heavy fines, and personal liability. It is also required to work on virtually any commercial jobsite.",
      },
      {
        q: "Why is excavation workers comp so expensive?",
        a: "Excavation class codes carry high rates because the trade has elevated injury severity — trench collapses, struck-by, and crush injuries. Premium is driven by payroll, class code, and your experience mod. Correct classification and a clean mod are the biggest cost levers.",
      },
      {
        q: "Does workers comp cover trench collapse injuries?",
        a: "Yes. Workers comp covers job-related injuries to your employees including trench cave-ins and crush injuries, regardless of fault. It pays medical and wage-replacement benefits and is the primary protection for your crew.",
      },
    ],
  },
  {
    slug: "commercial-auto",
    name: "Commercial Auto Insurance",
    icon: "Truck",
    shortDesc:
      "Coverage for the dump trucks, lowboys, equipment haulers, and pickups your excavation business drives to and from every jobsite.",
    longDesc:
      "Commercial auto insurance protects the rolling fleet that keeps an excavation operation moving. Dump trucks hauling spoil, lowboy trailers transporting excavators and dozers, water trucks, fuel-and-lube trucks, and crew pickups all spend their days on public roads and busy jobsites. The size and weight of these vehicles means that when an accident happens, the damage and injuries — and the resulting claims — are far more serious than a typical passenger-car collision. A personal auto policy categorically excludes business use of these vehicles, so commercial auto is non-negotiable.\n\nFor excavation contractors, commercial auto responds to both the liability and physical-damage sides of a loss. Liability coverage pays for bodily injury and property damage you cause to others — the most expensive exposure, since a loaded dump truck rear-ending a car or a lowboy jackknifing on the highway can produce catastrophic injury claims. Physical damage coverage (comprehensive and collision) pays to repair or replace your own trucks and trailers after a wreck, theft, vandalism, or weather event. Given that a single tandem dump truck or lowboy tractor can be worth well over a hundred thousand dollars, that protection matters.\n\nExcavation fleets have specific exposures that a generic auto policy can miss. We make sure your trailers and the equipment they carry are properly scheduled, that hired-and-non-owned auto coverage protects you when an employee runs an errand in a personal vehicle or you rent a truck for a surge, and that any DOT-regulated vehicles carry the required filings — including MCS-90 endorsements and the federal liability minimums for interstate hauling. Misclassifying a vehicle's radius of operation or use can leave a gap that surfaces at the worst possible moment.\n\nWe also coordinate your commercial auto with your inland-marine equipment policy so there is no confusion about whether a dropped excavator is an auto loss or an equipment loss, and we align your auto liability limits with your umbrella so large highway claims are fully backed. As contractor specialists, we structure your commercial auto around how excavation crews actually operate — heavy vehicles, equipment transport, multiple drivers, and DOT compliance — so a fleet loss does not become a business-ending event.",
    benefits: [
      "Liability protection for dump trucks, haulers, and crew vehicles on road and jobsite",
      "Comprehensive and collision coverage for trucks, tractors, and trailers",
      "Properly scheduled trailers and transported equipment",
      "Hired and non-owned auto coverage for rentals and employee vehicles",
      "DOT, MCS-90, and federal filing compliance for interstate hauling",
      "Coordinated with umbrella and equipment policies to close coverage gaps",
    ],
    faqs: [
      {
        q: "Can I insure my dump trucks on a personal auto policy?",
        a: "No. Personal auto policies exclude business use of heavy and commercial vehicles. Dump trucks, lowboys, and work trucks must be insured on a commercial auto policy, which is also required for any DOT-regulated operation.",
      },
      {
        q: "Does commercial auto cover the equipment I'm hauling on a trailer?",
        a: "Auto liability covers damage you cause to others, but the excavator or dozer on your trailer is best protected by inland-marine equipment coverage. We coordinate both policies so a transit loss is clearly covered with no gap.",
      },
      {
        q: "What is an MCS-90 and do I need one?",
        a: "An MCS-90 is a federal endorsement guaranteeing public liability minimums for motor carriers in interstate commerce. If you haul across state lines or operate DOT-regulated vehicles, you likely need it. We handle the required filings.",
      },
    ],
  },
  {
    slug: "inland-marine",
    name: "Inland Marine / Equipment Insurance",
    icon: "Wrench",
    shortDesc:
      "Protection for the excavators, dozers, loaders, and attachments your excavation business owns, leases, or rents — against theft, damage, and transit loss.",
    longDesc:
      "Inland marine insurance, often called a contractor's equipment floater, protects the most valuable assets an excavation contractor owns: the iron. A single hydraulic excavator can cost several hundred thousand dollars, and a full fleet of dozers, loaders, skid steers, and attachments represents a massive capital investment. Standard property and general liability policies do not cover mobile equipment, so inland marine is the policy that actually responds when a machine is stolen, damaged, vandalized, or lost in transit.\n\nFor excavation contractors, the exposures are constant and varied. Equipment is stolen off unsecured jobsites overnight, attachments disappear from gang boxes, machines are damaged by fire, flood, or overturning, hydraulic systems fail under load, and equipment is dropped or damaged while being loaded onto trailers for transport. Inland marine covers all of these wherever the equipment goes — on the jobsite, in your yard, in transit on a lowboy, or parked at a rental location. Because excavation equipment is mobile by nature, this floating coverage is exactly what the trade needs.\n\nWe make sure your equipment is scheduled at accurate replacement values so you are not underinsured when a total loss happens, and we add critical endorsements that excavation contractors rely on. Rented and leased equipment coverage protects you when you bring in a machine for a big job and the rental contract makes you responsible for damage. Rental reimbursement pays to rent a replacement so your project keeps moving while your damaged machine is repaired. We also offer coverage for newly acquired equipment so a machine you buy mid-policy is automatically protected, and we structure deductibles to balance premium against your cash-flow tolerance.\n\nBeyond the obvious physical-damage protection, inland marine keeps your business operating. When a key excavator is sidelined by a loss, the policy gets you a replacement and keeps you on schedule, preventing the cascading penalties and lost revenue that come from missing project deadlines. As former contractors, we know that idle iron is lost money, so we build your equipment program to recover quickly from a loss. With our specialist placement and fast claims response, your fleet is protected against the events most likely to take a machine out of service.",
    benefits: [
      "Covers owned, leased, and rented excavators, dozers, loaders, and attachments",
      "Protection on the jobsite, in your yard, and in transit on trailers",
      "Theft, fire, flood, vandalism, overturn, and accidental damage covered",
      "Rented and leased equipment coverage for short-term machine rentals",
      "Rental-reimbursement coverage to keep projects moving after a loss",
      "Newly acquired equipment automatically protected mid-policy",
    ],
    faqs: [
      {
        q: "Doesn't my general liability or property policy cover my equipment?",
        a: "No. GL covers third-party claims and standard commercial property covers buildings — neither covers mobile equipment. Inland marine (a contractor's equipment floater) is the policy that protects your excavators, dozers, and attachments.",
      },
      {
        q: "Does inland marine cover rented equipment?",
        a: "Yes, with the proper endorsement. When you rent a machine for a big job and the rental contract makes you liable for damage, rented and leased equipment coverage protects you. We add it so you're covered on rentals.",
      },
      {
        q: "What happens if my excavator is damaged and out of service?",
        a: "Inland marine pays to repair or replace the machine, and with rental-reimbursement coverage it also pays to rent a substitute so your project stays on schedule instead of stalling while repairs are made.",
      },
    ],
  },
  {
    slug: "umbrella",
    name: "Commercial Umbrella Insurance",
    icon: "Umbrella",
    shortDesc:
      "Extra liability limits that sit on top of your general liability, commercial auto, and employer's liability for the catastrophic claims excavation work can produce.",
    longDesc:
      "Commercial umbrella insurance provides an additional layer of liability protection above the limits of your underlying general liability, commercial auto, and employer's liability policies. For excavation contractors, this excess coverage is not a luxury — it is essential. The hazards of the trade produce some of the largest liability claims in construction. A trench collapse that injures multiple workers, a loaded dump truck causing a multi-vehicle highway accident, or underground utility damage that knocks out service to an entire neighborhood can generate claims that blow straight through a standard $1 million primary limit and reach into the millions.\n\nWhen a catastrophic claim exceeds your primary policy limits, your umbrella drops down and continues paying — for the injured parties, for property damage, and for your legal defense — up to the umbrella limit, commonly $1 million to $5 million or more in stacked layers. Without that excess coverage, every dollar above your primary limit comes directly out of your business assets, your equipment, and potentially your personal wealth. A single large judgment can end an otherwise healthy excavation company.\n\nUmbrella coverage is also a frequent contractual requirement. General contractors, developers, and public agencies routinely demand $2 million, $5 million, or higher combined limits on excavation work, and the only practical way to reach those numbers is to layer an umbrella over your primary policies. Carrying adequate umbrella limits is therefore both a protection strategy and a business-development tool — it qualifies you for larger, more profitable projects that smaller contractors cannot bid because they lack the limits.\n\nWe structure your umbrella to sit cleanly over your GL, auto, and workers-comp employer's-liability coverage with no gaps in the underlying limits, because an umbrella only responds correctly when the policies beneath it meet the carrier's required attachment points. We confirm those underlying limits, coordinate the schedule of underlying insurance, and size the umbrella to your largest contract requirements. As contractor specialists who understand how severe excavation claims can be, we make sure that when the worst happens, you have the limits to absorb it and keep your business standing.",
    benefits: [
      "Excess liability limits above your GL, auto, and employer's liability",
      "Responds to catastrophic claims — trench collapse, highway accidents, utility outages",
      "Protects business and personal assets from large judgments",
      "Satisfies high combined-limit requirements on commercial and public contracts",
      "Qualifies you to bid larger, higher-value excavation projects",
      "Coordinated attachment points so the umbrella responds without gaps",
    ],
    faqs: [
      {
        q: "How much umbrella coverage do excavation contractors need?",
        a: "It depends on your contracts and exposure. Many excavation contractors carry $2M-$5M in umbrella limits; larger commercial and public jobs often require more. We size your umbrella to your biggest contract requirements and risk profile.",
      },
      {
        q: "What does an umbrella sit on top of?",
        a: "It provides excess limits above your general liability, commercial auto, and the employer's-liability portion of workers comp. The umbrella only responds correctly when those underlying policies meet the carrier's required limits, which we confirm.",
      },
      {
        q: "Is an umbrella the same as higher primary limits?",
        a: "An umbrella is usually a more cost-effective way to reach high limits than raising each primary policy individually, and it spreads excess protection across multiple underlying policies at once. We compare both approaches for your situation.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
