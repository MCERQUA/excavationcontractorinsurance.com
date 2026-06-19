import Link from "next/link";
import {
  Shield,
  Award,
  HardHat,
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Mountain,
  Layers,
  Trees,
  PipetteIcon,
  Construction,
  Phone,
  FileText,
  Handshake,
} from "lucide-react";
import { services } from "@/lib/services";
import HeroSection from "@/components/hero-section";
import FaqSection from "@/components/faq-section";
import Reveal from "@/components/reveal";
import ServiceIcon from "@/components/service-icon";

const trustBadges = [
  { icon: Shield, label: "Licensed All 50 States" },
  { icon: Award, label: "20+ Years Experience" },
  { icon: HardHat, label: "Former Contractor" },
  { icon: Clock, label: "15-Min Quote Turnaround" },
];

const operations = [
  { icon: Construction, title: "Foundation Excavation", desc: "Digging and shoring for footings, basements, and structural foundations." },
  { icon: Layers, title: "Trenching & Utilities", desc: "Open-cut trenching and underground utility installation with XCU exposure." },
  { icon: Mountain, title: "Grading & Earthmoving", desc: "Bulk earthmoving, cut-and-fill, and precision grading operations." },
  { icon: Trees, title: "Land Clearing", desc: "Tree removal, brush clearing, and site stripping with fire and debris risk." },
  { icon: PipetteIcon, title: "Underground Utilities", desc: "Water, sewer, gas, electric, and fiber line installation and repair." },
  { icon: HardHat, title: "Site Preparation", desc: "Full-scope site prep combining clearing, excavation, and grading." },
];

const steps = [
  { icon: Phone, title: "Tell Us About Your Operation", desc: "Call or request a quote and tell us about your excavation work, equipment, and crew." },
  { icon: FileText, title: "We Build Your Program", desc: "We structure GL with XCU, workers comp, equipment, auto, and pollution around your real exposures." },
  { icon: Handshake, title: "Get Covered & Bid Work", desc: "Receive your quote in about 15 minutes and get certificates fast so you never lose a job." },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "298", label: "Active Clients" },
  { value: "50", label: "States Licensed" },
  { value: "15 Min", label: "Quote Turnaround" },
  { value: "24/7", label: "Claims Support" },
];

const testimonials = [
  {
    quote:
      "They actually understood XCU and made sure our underground work was covered. Our old policy had it excluded and we never knew. Saved us from a disaster.",
    name: "Mike R.",
    role: "Owner, Underground Utility Contractor",
  },
  {
    quote:
      "We hit a buried oil tank on a job and the pollution policy they set us up with covered the whole cleanup. A generic agent would have left us exposed.",
    name: "Dave T.",
    role: "Excavation & Site Prep",
  },
  {
    quote:
      "Fast certificates, fair pricing, and they reviewed our workers comp class codes and cut our premium. These guys know excavation.",
    name: "Carlos M.",
    role: "Grading & Earthmoving Contractor",
  },
];

const homeFaqs = [
  {
    q: "What insurance does an excavation contractor need?",
    a: "At a minimum: general liability with XCU coverage, workers compensation, commercial auto, inland-marine equipment coverage, and pollution liability — usually topped with a commercial umbrella. We build all of these into one coordinated program.",
  },
  {
    q: "Why is XCU coverage so important for excavation?",
    a: "XCU stands for explosion, collapse, and underground property damage. Many generic policies exclude it, which is catastrophic when your entire business is digging. We make sure your GL affirmatively grants XCU so struck utilities and trench collapses are covered.",
  },
  {
    q: "Do I really need pollution liability if I just dig dirt?",
    a: "Yes. Standard GL excludes pollution entirely. Fuel spills, hydraulic releases, contaminated soil, and silt runoff are all pollution events GL won't cover. Contractors pollution liability fills that gap and is increasingly required by contract.",
  },
  {
    q: "How fast can I get a quote and certificate?",
    a: "We deliver quotes in about 15 minutes once we understand your operation, and we issue certificates of insurance fast — often same-day — so you're never stuck off a jobsite waiting on paperwork.",
  },
  {
    q: "Are you licensed in my state?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states, so we can cover your excavation operation wherever you work.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Trust bar */}
      <section className="bg-[#f4f6f8] py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center justify-center gap-3 text-center">
              <b.icon className="h-7 w-7 flex-shrink-0 text-brand" />
              <span className="text-sm font-semibold text-slate-800">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-3xl font-bold text-slate-900 sm:text-4xl">
              Complete Coverage for Excavation Contractors
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A coordinated program of policies built around the real risks of dirt work,
              trenching, grading, and earthmoving.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-sans text-xl font-bold text-slate-900">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{s.shortDesc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we cover */}
      <section className="bg-[#f4f6f8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-3xl font-bold text-slate-900 sm:text-4xl">
              We Cover Every Type of Excavation Operation
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From foundation digging to full-scope site prep, we tailor coverage to the work you do.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {operations.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.05}>
                <div className="flex h-full gap-4 rounded-xl bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <o.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-slate-900">{o.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{o.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why CCA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-wider text-brand">Why Contractors Choice</span>
            <h2 className="mt-3 font-sans text-3xl font-bold text-slate-900 sm:text-4xl">
              Built by Contractors, for Contractors
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Contractors Choice Agency was founded in 2005 by Josh Cotner, a former contractor who
              turned his jobsite experience into an insurance practice. We don&apos;t sell generic
              policies — we structure programs around how excavation crews actually operate.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Former contractor ownership — we understand your jobsite",
                "20+ years specializing in contractor trades",
                "We make sure XCU and pollution gaps are actually closed",
                "15-minute quotes and fast certificate turnaround",
                "2-hour claims response guarantee when it matters most",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                  <span className="text-base text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-bold text-white transition-colors hover:bg-accent-dark"
            >
              About Our Agency <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="/images/insurance-consult.jpg"
              alt="Insurance professional reviewing an excavation contractor policy"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#f4f6f8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-3xl font-bold text-slate-900 sm:text-4xl">
              Getting Covered Is Simple
            </h2>
            <p className="mt-4 text-lg text-slate-600">Three steps to a program built for your operation.</p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative rounded-xl bg-white p-8 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div className="mt-3 font-sans text-sm font-bold uppercase tracking-wider text-brand">
                    Step {i + 1}
                  </div>
                  <h3 className="mt-2 font-sans text-xl font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-sans text-4xl font-extrabold text-white">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-white/85">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-3xl font-bold text-slate-900 sm:text-4xl">
              Trusted by Excavation Contractors
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <figure className="flex h-full flex-col rounded-xl border border-slate-200 bg-[#f4f6f8] p-7">
                  <div className="flex gap-1 text-brand">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-700">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5">
                    <div className="font-sans font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f4f6f8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={homeFaqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Protect Your Excavation Business?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Get a quote in about 15 minutes. Licensed in all 50 states, backed by a 2-hour claims
            response guarantee.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-base font-bold text-brand shadow-lg transition-colors hover:bg-slate-100"
            >
              Get Your Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:8449675247"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white hover:text-brand"
            >
              <Phone className="h-5 w-5" /> Call 844-967-5247
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
