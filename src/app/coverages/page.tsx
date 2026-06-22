import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { coverages } from "@/lib/coverages";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Excavation Insurance Coverages",
  description:
    "Specialized coverages for excavation contractors: underground utility XCU, grading and earthmoving, land clearing, site preparation, contractor bonds, and builders risk.",
  alternates: { canonical: "https://excavationcontractorinsurance.com/coverages" },
};

export default function CoveragesPage() {
  return (
    <>
      <section className="bg-accent py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl font-extrabold text-white sm:text-5xl">
            Specialized Excavation Coverages
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Targeted protection for the specific operations excavation contractors perform — from
            trenching to land clearing.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coverages.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  href={`/coverages/${c.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-sans text-xl font-bold text-slate-900">{c.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{c.shortDesc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
