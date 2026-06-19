import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for excavationcontractorinsurance.com, operated by Contractors Choice Agency.",
  alternates: { canonical: "https://excavationcontractorinsurance.com/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-sans text-4xl font-extrabold text-slate-900">Terms of Service</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: June 2026</p>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700">
          <p>
            These Terms of Service govern your use of excavationcontractorinsurance.com, operated by
            Contractors Choice Agency. By accessing or using this website, you agree to these terms.
          </p>

          <h2 className="pt-2 font-sans text-2xl font-bold text-slate-900">Informational Purpose</h2>
          <p>
            The content on this website is provided for general informational purposes only and does
            not constitute insurance advice or an offer to sell insurance. Coverage descriptions are
            general summaries; actual coverage is governed solely by the terms, conditions, and
            exclusions of the policy as issued. Coverage availability varies by state and is subject
            to underwriting approval.
          </p>

          <h2 className="pt-2 font-sans text-2xl font-bold text-slate-900">No Guarantee of Coverage</h2>
          <p>
            Submitting a quote request does not bind coverage or guarantee that insurance will be
            issued. No coverage is in effect until a policy is issued and any required premium is
            paid.
          </p>

          <h2 className="pt-2 font-sans text-2xl font-bold text-slate-900">Licensing</h2>
          <p>
            Contractors Choice Agency is licensed to transact insurance in all 50 states. National
            Producer Number 8608479.
          </p>

          <h2 className="pt-2 font-sans text-2xl font-bold text-slate-900">Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, and logos, is the property of
            Contractors Choice Agency or its licensors and is protected by applicable intellectual
            property laws. You may not reproduce or redistribute content without permission.
          </p>

          <h2 className="pt-2 font-sans text-2xl font-bold text-slate-900">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Contractors Choice Agency is not liable for any
            damages arising from your use of this website or reliance on its content. The website is
            provided &ldquo;as is&rdquo; without warranties of any kind.
          </p>

          <h2 className="pt-2 font-sans text-2xl font-bold text-slate-900">Contact</h2>
          <p>
            Questions about these terms may be directed to josh@contractorschoiceagency.com or
            844-967-5247.
          </p>
        </div>
      </div>
    </section>
  );
}
