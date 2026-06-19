"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-brand py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl font-extrabold text-white sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Questions about coverage? Reach out and a specialist will get right back to you.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-sans text-2xl font-bold text-slate-900">Send Us a Message</h2>
            {submitted ? (
              <div className="mt-8 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-6">
                <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-sans font-bold text-slate-900">Message sent</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Thanks for reaching out. A specialist will respond shortly. For urgent matters,
                    call 844-967-5247.
                  </p>
                </div>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={() => setSubmitted(true)}
                className="mt-8 space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Name</label>
                    <input
                      name="name"
                      required
                      className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Company</label>
                    <input
                      name="company"
                      className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-brand px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-brand-dark"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="font-sans text-2xl font-bold text-slate-900">Get in Touch</h2>
            <div className="mt-8 space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "844-967-5247", href: "tel:8449675247" },
                { icon: Mail, label: "Email", value: "josh@contractorschoiceagency.com", href: "mailto:josh@contractorschoiceagency.com" },
                { icon: MapPin, label: "Office", value: "12220 E Riggs Rd, Chandler, AZ 85249" },
                { icon: Clock, label: "Claims", value: "24/7 reporting · 2-hour response guarantee" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wider text-slate-500">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="mt-0.5 block text-base font-semibold text-slate-900 hover:text-brand">
                        {item.value}
                      </a>
                    ) : (
                      <div className="mt-0.5 text-base font-semibold text-slate-900">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-[#f4f6f8] p-6">
              <p className="text-sm leading-relaxed text-slate-600">
                Contractors Choice Agency is licensed in all 50 states. National Producer Number
                8608479. Whatever excavation work you do, we can help you get covered.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
