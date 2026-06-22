import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, Phone, ArrowRight, Shield } from "lucide-react";
import { coverages, getCoverage } from "@/lib/coverages";
import FaqSection from "@/components/faq-section";

export function generateStaticParams() {
  return coverages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const coverage = getCoverage(slug);
  if (!coverage) return { title: "Coverage Not Found" };
  return {
    title: coverage.name,
    description: coverage.shortDesc,
    alternates: { canonical: `https://excavationcontractorinsurance.com/coverages/${coverage.slug}` },
  };
}

export default async function CoveragePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const coverage = getCoverage(slug);
  if (!coverage) notFound();

  return (
    <>
      <section className="bg-accent py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 text-white">
            <Shield className="h-7 w-7" />
          </div>
          <h1 className="mt-5 font-sans text-4xl font-extrabold text-white sm:text-5xl">
            {coverage.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90">{coverage.shortDesc}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="font-sans text-2xl font-bold text-slate-900">Coverage Highlights</h2>
            <ul className="mt-6 space-y-3">
              {coverage.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-base text-slate-700">{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-14">
              <FaqSection faqs={coverage.faqs} title="Common Questions" />
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-[#f4f6f8] p-7 shadow-sm">
              <h3 className="font-sans text-xl font-bold text-slate-900">Get a Free Quote</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We&apos;ll structure {coverage.name.toLowerCase()} around your operation. Quotes in about 15 minutes.
              </p>
              <Link
                href="/quote"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-brand px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-brand-dark"
              >
                Start My Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:8449675247"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border-2 border-accent px-6 py-3.5 text-base font-bold text-accent transition-colors hover:bg-accent hover:text-white"
              >
                <Phone className="h-5 w-5" /> 844-967-5247
              </a>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-500">
                  Other Coverages
                </h4>
                <ul className="mt-3 space-y-2">
                  {coverages
                    .filter((c) => c.slug !== coverage.slug)
                    .slice(0, 5)
                    .map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/coverages/${c.slug}`}
                          className="text-sm font-semibold text-slate-700 transition-colors hover:text-accent"
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
