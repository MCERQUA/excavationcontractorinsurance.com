import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Shield, Award, HardHat, Clock } from "lucide-react";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "About Contractors Choice Agency",
  description:
    "Founded in 2005 by former contractor Josh Cotner, Contractors Choice Agency specializes in insurance for excavation contractors. Licensed in all 50 states.",
  alternates: { canonical: "https://excavationcontractorinsurance.com/about" },
};

const values = [
  { title: "Contractor-First", desc: "We were contractors. We structure coverage around jobsite reality, not generic templates." },
  { title: "No Hidden Gaps", desc: "We make sure XCU and pollution exposures are affirmatively covered, not quietly excluded." },
  { title: "Fast & Responsive", desc: "15-minute quotes, fast certificates, and a 2-hour claims response guarantee." },
  { title: "Specialist Knowledge", desc: "20+ years focused exclusively on contractor trades across all 50 states." },
];

const badges = [
  { icon: Shield, label: "Licensed All 50 States" },
  { icon: Award, label: "Founded 2005" },
  { icon: HardHat, label: "Former Contractor" },
  { icon: Clock, label: "15-Min Quotes" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl font-extrabold text-white sm:text-5xl">
            About Contractors Choice Agency
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            An insurance agency built by a contractor, for contractors.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-wider text-brand">Our Story</span>
            <h2 className="mt-3 font-sans text-3xl font-bold text-slate-900 sm:text-4xl">
              From the Jobsite to the Agency
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Contractors Choice Agency was founded in 2005 by Josh Cotner, a former contractor who
                spent years on jobsites before moving into insurance. That background is the
                difference. Josh understands the difference between a quote that looks cheap and a
                policy that actually responds when an excavator strikes a buried gas line or a trench
                wall collapses.
              </p>
              <p>
                Over 20+ years we have grown into a specialist agency serving contractors across all
                50 states, with deep focus on the trades that generic agents get wrong — excavation,
                trenching, grading, and earthmoving among them. We know the XCU exclusions, the
                pollution gaps, and the workers-comp class codes that make or break a contractor&apos;s
                program.
              </p>
              <p>
                Today we run a lean, responsive operation that puts speed and accuracy first: quotes
                in about 15 minutes, fast certificate turnaround, and a 2-hour claims response
                guarantee. When something goes wrong on your site, you reach a real person who knows
                your business.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="/images/operator.jpg"
              alt="Excavation equipment operator in the cab of a modern excavator"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f6f8] py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center justify-center gap-3 text-center">
              <b.icon className="h-7 w-7 flex-shrink-0 text-brand" />
              <span className="text-sm font-semibold text-slate-800">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              How we approach every excavation contractor&apos;s program.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="flex h-full gap-4 rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-brand" />
                  <div>
                    <h3 className="font-sans text-lg font-bold text-slate-900">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl font-extrabold text-white">
            Let&apos;s Build Your Program
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Talk to a specialist who actually understands excavation risk.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-base font-bold text-brand transition-colors hover:bg-slate-100"
            >
              Get a Quote <ArrowRight className="h-5 w-5" />
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
