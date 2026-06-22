import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for excavationcontractorinsurance.com, operated by Contractors Choice Agency.",
  alternates: { canonical: "https://excavationcontractorinsurance.com/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-sans text-4xl font-extrabold text-slate-900">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: June 2026</p>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700">
          <p>
            Contractors Choice Agency (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            operates excavationcontractorinsurance.com. This Privacy Policy explains how we collect,
            use, and protect your information when you use our website and request insurance quotes.
          </p>

          <h2 className="pt-2 font-sans text-2xl font-bold text-slate-900">Information We Collect</h2>
          <p>
            When you submit a quote request or contact form, we collect the information you provide,
            which may include your name, business name, email address, phone number, state, business
            details, and any message you send. We may also automatically collect limited technical
            data such as your IP address and browser type for security and analytics purposes.
          </p>

          <h2 className="pt-2 font-sans text-2xl font-bold text-slate-900">How We Use Your Information</h2>
          <p>
            We use your information to prepare and deliver insurance quotes, respond to your
            inquiries, service your policy, comply with legal and regulatory obligations, and improve
            our website and services. We do not sell your personal information to third parties.
          </p>

          <h2 className="pt-2 font-sans text-2xl font-bold text-slate-900">Sharing of Information</h2>
          <p>
            We may share your information with insurance carriers and underwriters as necessary to
            obtain quotes and bind coverage, and with service providers who help us operate our
            business under confidentiality obligations. We may disclose information when required by
            law.
          </p>

          <h2 className="pt-2 font-sans text-2xl font-bold text-slate-900">Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical safeguards to protect
            your information. However, no method of transmission over the internet is completely
            secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="pt-2 font-sans text-2xl font-bold text-slate-900">Your Choices</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information by
            contacting us. You may also opt out of marketing communications at any time.
          </p>

          <h2 className="pt-2 font-sans text-2xl font-bold text-slate-900">Contact Us</h2>
          <p>
            For privacy questions, contact Contractors Choice Agency at
            josh@contractorschoiceagency.com or 844-967-5247, 12220 E Riggs Rd, Chandler, AZ 85249.
          </p>
        </div>
      </div>
    </section>
  );
}
