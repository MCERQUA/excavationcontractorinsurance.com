import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Excavation Insurance Blog & Guides",
  description:
    "Guides and insights on excavation contractor insurance — coverage gaps, pollution liability, workers comp, equipment protection, and how to control cost.",
  alternates: { canonical: "https://excavationcontractorinsurance.com/blog" },
};

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <section className="bg-accent py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl font-extrabold text-white sm:text-5xl">
            Excavation Insurance Insights
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Practical guides on protecting your excavation business and controlling insurance cost.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-lg lg:grid-cols-2"
            >
              <div className="flex flex-col justify-center bg-[#0f172a] p-10 text-white">
                <span className="inline-block w-fit rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Featured · {featured.category}
                </span>
                <h2 className="mt-4 font-sans text-3xl font-bold leading-tight">{featured.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-5 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {featured.readTime}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-light">
                  Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <img
                src="/images/trenching.jpg"
                alt={featured.title}
                className="h-full min-h-[280px] w-full object-cover"
              />
            </Link>
          </Reveal>

          {/* Rest */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                    {p.category}
                  </span>
                  <h3 className="mt-4 font-sans text-lg font-bold leading-snug text-slate-900">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.excerpt}</p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.readTime}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
