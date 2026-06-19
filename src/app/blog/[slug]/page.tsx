import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://excavationcontractorinsurance.com/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.dateISO,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    author: { "@type": "Organization", name: "Contractors Choice Agency" },
    publisher: { "@type": "Organization", name: "Contractors Choice Agency" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-[#0f172a] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light hover:text-brand">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="mt-6 inline-block rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {post.category}
          </span>
          <h1 className="mt-4 font-sans text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-5 text-sm text-slate-400">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <article className="lg:col-span-2">
            <div className="space-y-5">
              {post.content.map((block, i) =>
                block.startsWith("## ") ? (
                  <h2 key={i} className="pt-4 font-sans text-2xl font-bold text-slate-900">
                    {block.replace(/^##\s+/, "")}
                  </h2>
                ) : (
                  <p key={i} className="text-base leading-relaxed text-slate-700">
                    {block}
                  </p>
                )
              )}
            </div>

            <div className="mt-12 rounded-2xl bg-brand p-8 text-center text-white">
              <h3 className="font-sans text-2xl font-bold">Get Your Excavation Insurance Quote</h3>
              <p className="mt-3 text-white/90">
                Quotes in about 15 minutes. Licensed in all 50 states.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/quote" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-bold text-brand hover:bg-slate-100">
                  Get a Quote <ArrowRight className="h-5 w-5" />
                </Link>
                <a href="tel:8449675247" className="inline-flex items-center gap-2 rounded-md border-2 border-white px-6 py-3 font-bold text-white hover:bg-white hover:text-brand">
                  <Phone className="h-5 w-5" /> 844-967-5247
                </a>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-[#f4f6f8] p-7">
                <h3 className="font-sans text-lg font-bold text-slate-900">Related Articles</h3>
                <ul className="mt-4 space-y-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/blog/${r.slug}`} className="group block">
                        <span className="font-sans text-sm font-bold text-slate-900 group-hover:text-brand">
                          {r.title}
                        </span>
                        <span className="mt-1 block text-xs text-slate-500">{r.readTime}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-accent p-7 text-white">
                <h3 className="font-sans text-lg font-bold">Talk to a Specialist</h3>
                <p className="mt-2 text-sm text-white/90">
                  Questions about your coverage? We&apos;re here to help.
                </p>
                <a href="tel:8449675247" className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-bold text-accent hover:bg-slate-100">
                  <Phone className="h-5 w-5" /> 844-967-5247
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
