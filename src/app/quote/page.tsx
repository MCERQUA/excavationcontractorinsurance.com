"use client";

import { useState } from "react";
import { CheckCircle, Phone, Clock, ShieldCheck, FileCheck } from "lucide-react";

const STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
];

const excavationTypes = [
  "Foundation Excavation",
  "Trenching",
  "Grading",
  "Land Clearing",
  "Underground Utilities",
  "Earthmoving",
  "Site Preparation",
  "Other",
];

const revenues = ["Under $500K", "$500K-$1M", "$1M-$2.5M", "$2.5M-$5M", "$5M+"];
const yearsOptions = ["0-2", "3-5", "6-10", "10+"];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "quote", ...data }),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  return (
    <>
      <section className="bg-brand py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl font-extrabold text-white sm:text-5xl">
            Get Your Free Excavation Insurance Quote
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Tell us about your operation and we&apos;ll build a program around your real risk —
            usually in about 15 minutes.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex items-start gap-4 rounded-2xl border border-green-200 bg-green-50 p-8">
                <CheckCircle className="mt-1 h-8 w-8 flex-shrink-0 text-green-600" />
                <div>
                  <h2 className="font-sans text-2xl font-bold text-slate-900">Quote request received</h2>
                  <p className="mt-2 text-base text-slate-600">
                    Thanks. A specialist is reviewing your information and will reach out shortly with
                    your quote. For anything urgent, call{" "}
                    <a href="tel:8449675247" className="font-semibold text-brand">844-967-5247</a>.
                  </p>
                </div>
              </div>
            ) : (
              <form
                name="quote"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="quote" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Full Name *</label>
                    <input name="name" required className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Business Name *</label>
                    <input name="businessName" required className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand" />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Email *</label>
                    <input type="email" name="email" required className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Phone *</label>
                    <input type="tel" name="phone" required className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand" />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">State *</label>
                    <select name="state" required defaultValue="" className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand">
                      <option value="" disabled>Select a state</option>
                      {STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Primary Excavation Type *</label>
                    <select name="excavationType" required defaultValue="" className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand">
                      <option value="" disabled>Select work type</option>
                      {excavationTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Annual Revenue</label>
                    <select name="annualRevenue" defaultValue="" className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand">
                      <option value="" disabled>Select revenue range</option>
                      {revenues.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Years in Business</label>
                    <select name="yearsInBusiness" defaultValue="" className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand">
                      <option value="" disabled>Select range</option>
                      {yearsOptions.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700">
                    Tell Us About Your Operation
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Equipment owned, crew size, current coverage, contract requirements, etc."
                    className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-brand px-6 py-4 text-base font-bold text-white transition-colors hover:bg-brand-dark"
                >
                  Request My Free Quote
                </button>
                <p className="text-center text-xs text-slate-500">
                  No obligation. We&apos;ll never sell your information.
                </p>
              </form>
            )}
          </div>

          {/* Info panel */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-[#f4f6f8] p-7">
                <h3 className="font-sans text-xl font-bold text-slate-900">Why Get a Quote?</h3>
                <ul className="mt-5 space-y-4">
                  {[
                    { icon: ShieldCheck, t: "Coverage That Actually Responds", d: "We close the XCU and pollution gaps generic agents miss." },
                    { icon: Clock, t: "15-Minute Turnaround", d: "Fast quotes so you can bid work without delay." },
                    { icon: FileCheck, t: "Fast Certificates", d: "COIs issued quickly so you never lose a job to paperwork." },
                  ].map((item) => (
                    <li key={item.t} className="flex gap-3">
                      <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                      <div>
                        <div className="font-sans text-sm font-bold text-slate-900">{item.t}</div>
                        <div className="text-sm text-slate-600">{item.d}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-accent p-7 text-white">
                <h3 className="font-sans text-lg font-bold">Prefer to Talk?</h3>
                <p className="mt-2 text-sm text-white/90">
                  Call a specialist directly and get answers right now.
                </p>
                <a
                  href="tel:8449675247"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-base font-bold text-accent transition-colors hover:bg-slate-100"
                >
                  <Phone className="h-5 w-5" /> 844-967-5247
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <h3 className="font-sans text-lg font-bold text-slate-900">What to Expect</h3>
                <ol className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>1. Submit your details above.</li>
                  <li>2. A specialist reviews your operation and exposures.</li>
                  <li>3. You receive a tailored quote, usually within 15 minutes.</li>
                  <li>4. We issue certificates fast so you can get to work.</li>
                </ol>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
