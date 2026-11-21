"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building,
  FileCheck,
  Sparkles,
} from "lucide-react";

function ContactContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productLine: "aluminium-28x18",
    volume: "1m-5m",
    needSamples: true,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refNumber, setRefNumber] = useState("");

  // Sync with URL query parameter ?product=...
  useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam) {
      setFormData((prev) => ({ ...prev, productLine: productParam }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate real-time submission to CRM / ERP
    setTimeout(() => {
      setRefNumber(`EP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  const getProductName = (code: string) => {
    switch (code) {
      case "aluminium-28x18":
        return "Aluminium P.P. Caps (28*18 mm)";
      case "pe-liners":
        return "Polyethylene (PE) Liners & Wads";
      case "pp-caps":
        return "Polypropylene (PP) Plastic Closures";
      case "custom-batch":
        return "Custom Printed Batch / All Lines";
      default:
        return code;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Contact &amp; Inquiries
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Reach our technical sales and QA engineering teams for product samples, technical datasheets, and plant audits in 10th of Ramadan City.
            </p>
            <nav className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10" aria-label="Breadcrumbs">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-sky-400 font-medium">Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Contact Layout: Info stack on left, RFQ form on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-3">
                Connect Directly
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Commercial &amp; Factory Office
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our engineering and sales representatives are available to support your formulation packaging requirements and supply contracts.
              </p>
            </div>

            {/* Factory Address */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 hover:border-sky-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-slate-900">Manufacturing Plant</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Plot 86, Industrial Zone A6 (Formerly Zone B4), 10th of Ramadan City, Sharqia Governorate, Arab Republic of Egypt.
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    IDA Reg: 2003/29971
                  </span>
                  <a
                    href="https://maps.app.goo.gl/K8MmxJ2VgyLcqQrW9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700"
                  >
                    Google Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Hotlines */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 hover:border-sky-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-slate-900">Phone &amp; WhatsApp Hotlines</h4>
                <p className="text-xs text-slate-500">Direct lines to our sales and technical support department:</p>
                <div className="flex flex-col gap-1 text-xs sm:text-sm font-medium text-slate-800">
                  <a href="tel:+201001713508" className="hover:text-sky-600 transition-colors">+20 100 171 3508</a>
                  <a href="tel:+201012288535" className="hover:text-sky-600 transition-colors">+20 101 228 8535</a>
                  <a href="tel:+2015411200" className="hover:text-sky-600 transition-colors">+20 15 411 200 (Landline)</a>
                </div>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 hover:border-sky-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-slate-900">Electronic Inquiries</h4>
                <p className="text-xs text-slate-500">Send RFQs, tender documents, or sample specifications:</p>
                <div className="flex flex-col gap-1 text-xs sm:text-sm font-medium text-slate-800">
                  <a href="mailto:info@egypt-pharma.com" className="hover:text-sky-600 transition-colors">info@egypt-pharma.com</a>
                  <a href="mailto:sales@egypt-pharma.com" className="hover:text-sky-600 transition-colors">sales@egypt-pharma.com</a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 hover:border-sky-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">Hours of Operation</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>Commercial Office:</strong> Sunday – Thursday: 8:00 AM – 5:00 PM
                  <br />
                  <strong>Factory Production:</strong> 24/7 Continuous Automated Shifts
                </p>
              </div>
            </div>
          </div>

          {/* Right RFQ Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Technical Quotation / Samples</h2>
            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              Fill out the inquiry details below. Our technical sales team will review your bottle neck dimensions and provide sample batches within 24 hours.
            </p>

            {submitted ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-4 animate-fadeIn">
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={36} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white mb-2">
                      Reference #{refNumber}
                    </div>
                    <h4 className="text-xl font-bold text-emerald-950 mb-1">
                      Inquiry Dispatched Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong> from <strong>{formData.company}</strong>. Our engineering department has logged your request for <strong>{getProductName(formData.productLine)}</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-emerald-200 text-xs text-slate-600 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Target Product:</span>
                    <span className="font-semibold text-slate-800">{getProductName(formData.productLine)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Confirmation Sent To:</span>
                    <span className="font-semibold text-slate-800">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Follow-up Hotline:</span>
                    <span className="font-semibold text-slate-800">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Physical Sample Delivery:</span>
                    <span className="font-semibold text-emerald-700">{formData.needSamples ? "Requested (Included)" : "Data Sheets Only"}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        productLine: "aluminium-28x18",
                        volume: "1m-5m",
                        needSamples: true,
                        message: "",
                      });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Ahmed Hassan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company / Lab Name *
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      placeholder="e.g. Pharco / EIPICO"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Business Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+20 100 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="productLine" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Product of Interest *
                    </label>
                    <select
                      id="productLine"
                      value={formData.productLine}
                      onChange={(e) => setFormData({ ...formData, productLine: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium text-slate-800"
                    >
                      <option value="aluminium-28x18">Aluminium P.P. Caps (28*18 mm)</option>
                      <option value="pe-liners">Polyethylene (PE) Liners &amp; Wads</option>
                      <option value="pp-caps">Polypropylene (PP) Plastic Closures</option>
                      <option value="custom-batch">Custom Printed Batch / All Lines</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="volume" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Estimated Annual Volume
                    </label>
                    <select
                      id="volume"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    >
                      <option value="under-1m">Under 1 Million pcs</option>
                      <option value="1m-5m">1 Million – 5 Million pcs</option>
                      <option value="5m-20m">5 Million – 20 Million pcs</option>
                      <option value="20m+">20 Million+ pcs (Strategic Contract)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-3 cursor-pointer text-xs sm:text-sm text-slate-700 font-medium">
                    <input
                      type="checkbox"
                      checked={formData.needSamples}
                      onChange={(e) => setFormData({ ...formData, needSamples: e.target.checked })}
                      className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300"
                    />
                    <span>Yes, please dispatch sample closures and Technical Data Sheets (TDS) for testing.</span>
                  </label>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message &amp; Specifications (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Provide specific details such as glass/PET bottle neck finish, print colors, sterilization requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-sky-500/25 disabled:opacity-50"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Inquiry to Technical Team...</span>
                    </span>
                  ) : (
                    <>
                      <Send size={18} /> <span>Submit Official Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Plant Map Embed */}
        <section className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md">
          <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-1">
                Plant Location
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                10th of Ramadan Manufacturing Facility
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Industrial Zone A6, Plot 86 — GPS Coordinates: 30.236234, 31.747923
              </p>
            </div>
            <div>
              <a
                href="https://maps.app.goo.gl/K8MmxJ2VgyLcqQrW9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-medium transition-colors shadow-sm"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
          <div className="h-[400px] w-full bg-slate-100">
            <iframe
              title="Egypt Pharma Factory Location"
              src="https://maps.google.com/maps?q=30.236234,31.747923&t=m&z=17&output=embed&iwloc=near"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-400">Loading Contact...</div>}>
      <ContactContent />
    </Suspense>
  );
}
