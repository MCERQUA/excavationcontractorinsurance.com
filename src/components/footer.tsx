import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-sans text-lg font-bold text-white">
              <span className="text-brand">Excavation</span> Contractor Insurance
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Specialized commercial insurance for excavation contractors, dirt-work
              operators, trenching crews, and earthmoving companies. Provided by
              Contractors Choice Agency.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href="tel:8449675247" className="flex items-center gap-2 transition-colors hover:text-brand">
                <Phone className="h-4 w-4 text-brand" /> 844-967-5247
              </a>
              <a href="mailto:josh@contractorschoiceagency.com" className="flex items-center gap-2 transition-colors hover:text-brand">
                <Mail className="h-4 w-4 text-brand" /> josh@contractorschoiceagency.com
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-brand" /> 12220 E Riggs Rd, Chandler, AZ 85249
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/services" className="transition-colors hover:text-brand">Services</Link></li>
              <li><Link href="/coverages" className="transition-colors hover:text-brand">Coverages</Link></li>
              <li><Link href="/quote" className="transition-colors hover:text-brand">Get a Quote</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-brand">Contact</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-brand">Blog</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-brand">About</Link></li>
              <li><Link href="/privacy" className="transition-colors hover:text-brand">Privacy Policy</Link></li>
              <li><Link href="/terms" className="transition-colors hover:text-brand">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-white">Why Contractors Choice</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Licensed in all 50 states</li>
              <li>20+ years of contractor focus</li>
              <li>Former contractor ownership</li>
              <li>15-minute quote turnaround</li>
              <li>2-hour claims response guarantee</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-xs leading-relaxed text-slate-500">
          <p>
            Contractors Choice Agency &middot; Josh Cotner Insurance Services &middot; National Producer
            Number 8608479 &middot; Licensed in all 50 states.
          </p>
          <p className="mt-2">
            This website is for informational purposes only and does not constitute an offer to
            sell insurance. Coverage descriptions are general; actual coverage is governed by the
            terms of the issued policy. Coverage availability varies by state and is subject to
            underwriting approval.
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Contractors Choice Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
