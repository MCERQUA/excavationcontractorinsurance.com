import Link from "next/link";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-[#f4f6f8] py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-sans text-7xl font-extrabold text-brand">404</p>
        <h1 className="mt-4 font-sans text-3xl font-bold text-slate-900">Page Not Found</h1>
        <p className="mt-4 text-lg text-slate-600">
          We couldn&apos;t find the page you were looking for. Let&apos;s get you back on solid ground.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-brand-dark"
          >
            <Home className="h-5 w-5" /> Back to Home
          </Link>
          <a
            href="tel:8449675247"
            className="inline-flex items-center gap-2 rounded-md border-2 border-accent px-7 py-3.5 text-base font-bold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            <Phone className="h-5 w-5" /> Call 844-967-5247
          </a>
        </div>
      </div>
    </section>
  );
}
