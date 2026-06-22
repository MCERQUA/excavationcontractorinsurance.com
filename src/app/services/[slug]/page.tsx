import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { services, getService } from "@/lib/services";
import FaqSection from "@/components/faq-section";
import ServiceIcon from "@/components/service-icon";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.name} for Excavation Contractors`,
    description: service.shortDesc,
    alternates: { canonical: `https://excavationcontractorinsurance.com/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-brand py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 text-white">
            <ServiceIcon name={service.icon} className="h-7 w-7" />
          </div>
          <h1 className="mt-5 font-sans text-4xl font-extrabold text-white sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90">{service.shortDesc}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <div className="space-y-5 text-base leading-relaxed text-slate-700">
              {service.longDesc.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h2 className="mt-12 font-sans text-2xl font-bold text-slate-900">
              What This Coverage Includes
            </h2>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                  <span className="text-base text-slate-700">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-14">
              <FaqSection faqs={service.faqs} title="Common Questions" />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-[#f4f6f8] p-7 shadow-sm">
              <h3 className="font-sans text-xl font-bold text-slate-900">
                Get a Free Quote
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Tell us about your excavation operation and we&apos;ll structure {service.name.toLowerCase()} around your real exposures — usually in about 15 minutes.
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
                  Other Services
                </h4>
                <ul className="mt-3 space-y-2">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 5)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-sm font-semibold text-slate-700 transition-colors hover:text-brand"
                        >
                          {s.name}
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
