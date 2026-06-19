"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/coverages", label: "Coverages" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-sans text-lg font-extrabold tracking-tight text-slate-900">
          <span className="text-brand">Excavation</span>
          <span className="hidden sm:inline">Contractor Insurance</span>
          <span className="sm:hidden">Insurance</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:8449675247"
            className="flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
          >
            <Phone className="h-4 w-4" /> 844-967-5247
          </a>
          <Link
            href="/quote"
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6 text-slate-900" /> : <Menu className="h-6 w-6 text-slate-900" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block rounded-md px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:8449675247"
              className="block rounded-md px-3 py-2 text-base font-semibold text-accent"
            >
              Call 844-967-5247
            </a>
            <Link
              href="/quote"
              className="mt-2 block rounded-md bg-brand px-3 py-2.5 text-center text-base font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
