"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface Faq {
  q: string;
  a: string;
}

export default function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
}: {
  faqs: Faq[];
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {title && (
        <h2 className="text-center font-sans text-3xl font-bold text-slate-900 sm:text-4xl">
          {title}
        </h2>
      )}
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {faqs.map((f, i) => (
          <div key={i}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-sans text-base font-semibold text-slate-900 sm:text-lg">
                {f.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-brand transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === i && (
              <div className="px-6 pb-5 text-base leading-relaxed text-slate-600">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
