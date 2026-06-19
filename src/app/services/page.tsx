import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { services } from "@/lib/services";
import ServiceIcon from "@/components/service-icon";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Excavation Insurance Services & Policies",
  description:
    "Explore the insurance policies excavation contractors need: general liability with XCU, pollution liability, workers comp, commercial auto, equipment coverage, and umbrella.",
  alternates: { canonical: "https://excavationcontractorinsurance.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl font-extrabold text-white sm:text-5xl">
            Insurance Services for Excavation Contractors
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            A coordinated program of policies built around the real risks of dirt work, trenching,
            grading, and earthmoving.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-sans text-xl font-bold text-slate-900">{s.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{s.shortDesc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <a
              href="tel:8449675247"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-accent-dark"
            >
              <Phone className="h-5 w-5" /> Call 844-967-5247
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
