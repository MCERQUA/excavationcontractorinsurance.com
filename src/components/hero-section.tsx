"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Phone, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Large excavator digging a foundation on a construction site"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-[#0f172a]/40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-sm font-semibold text-brand-light ring-1 ring-brand/40">
            Contractors Choice Agency &middot; Licensed in all 50 states
          </span>
          <h1 className="mt-6 font-sans text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Insurance Built for Excavation Contractors
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            Protecting dirt work, trenching, grading, and earthmoving operations across all 50
            states. General liability with XCU, pollution coverage, workers comp, equipment, and
            more — structured by former contractors who know your risk.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-7 py-3.5 text-base font-bold text-white shadow-lg transition-colors hover:bg-brand-dark"
            >
              Get Your Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:8449675247"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/80 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white hover:text-slate-900"
            >
              <Phone className="h-5 w-5" /> Call 844-967-5247
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
