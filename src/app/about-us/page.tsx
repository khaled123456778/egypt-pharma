"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, 
  Building2, 
  Award, 
  ShieldCheck, 
  Microscope, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  FileCheck, 
  Maximize2, 
  X, 
  ExternalLink,
  Flame,
  ArrowRight
} from "lucide-react";

interface CertDetails {
  title: string;
  titleAr: string;
  image: string;
  meta: string;
}

export default function AboutUsPage() {
  const [selectedCert, setSelectedCert] = useState<CertDetails | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when certificate modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              About Egypt Pharma
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Pioneers in manufacturing pharmaceutical accessories, bottle closures, and high-precision liners since 2000.
            </p>
            <nav className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10" aria-label="Breadcrumbs">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-sky-400 font-medium">About Us</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
        {/* Intro Story & Timeline Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
              Our Corporate Legacy
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Two Decades of Engineering Trust in Primary Pharmaceutical Packaging
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong>Egypt Pharma for Pharmaceutical Industries Accessories</strong> was established on <strong>June 18th, 2000</strong> as an Egyptian joint-stock company dedicated to localizing high-precision primary packaging and closure systems for the pharmaceutical sector.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Operating under the provisions of <strong>Egyptian Investment Guarantees and Incentives Law No. 8 of 1997</strong> and under the direct supervision of the <strong>General Authority for Investment and Free Zones (GAFI)</strong>, our state-of-the-art manufacturing plant is strategically situated in the 10th of Ramadan City Industrial Zone.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Over the last 24 years, Egypt Pharma has evolved from a pioneering closure facility into a national benchmark for primary pharmaceutical packaging, supplying over 80% of Egypt’s leading public and private pharmaceutical laboratories with hermetic, tamper-evident closure solutions.
            </p>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-900">
              <ShieldCheck size={28} className="text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <strong className="block font-bold text-emerald-950 mb-1">Official GAFI &amp; EDA Regulation:</strong>
                <p className="text-emerald-800 leading-relaxed">
                  Regulated under Egyptian Investment Law No. 8 of 1997. Certified compliance with Egyptian Drug Authority (EDA) packaging standards and national manufacturing codes.
                </p>
              </div>
            </div>
          </div>

          {/* History Timeline */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
            <div className="mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Milestones of Growth</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                A continuous trajectory of technical modernization
              </p>
            </div>
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
              <div className="relative flex items-start gap-4 pl-8">
                <span className="absolute left-0 top-1 w-7 h-7 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center ring-4 ring-white shadow-sm">
                  00
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">Founding in 10th of Ramadan</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">Inaugurated first high-speed European automated press line for 28*18 mm Aluminium P.P. Caps.</p>
                </div>
              </div>
              <div className="relative flex items-start gap-4 pl-8">
                <span className="absolute left-0 top-1 w-7 h-7 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center ring-4 ring-white shadow-sm">
                  08
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">Clean Room Wad Extrusion</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">Added specialized cleanroom cutting and laminating facilities for FDA-compliant Polyethylene liners.</p>
                </div>
              </div>
              <div className="relative flex items-start gap-4 pl-8">
                <span className="absolute left-0 top-1 w-7 h-7 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center ring-4 ring-white shadow-sm">
                  16
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">High-Precision Lithography</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">Integrated computerized multi-color offset printing machines with automated optical vision inspection.</p>
                </div>
              </div>
              <div className="relative flex items-start gap-4 pl-8">
                <span className="absolute left-0 top-1 w-7 h-7 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center ring-4 ring-white shadow-sm">
                  24
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">Advanced PP Injection Line</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">Expanded medical-grade polypropylene closures with tamper-evident rings for pediatric formulations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FEATURED ACCREDITATION: INDUSTRIAL DEVELOPMENT AUTHORITY (IDA) CERTIFICATE
            ========================================================================= */}
        <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/30">
                <FileCheck size={14} />
                <span>Certified Government Accreditation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Official Industrial Registry Certificate (IDA)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium" dir="rtl">
                شهادة السجل الصناعي الرسمية - وزارة التجارة والصناعة (الهيئة العامة للتنمية الصناعية)
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Registered under Egyptian Industrial Law No. 24 of 1977 with the <strong>Industrial Development Authority (IDA)</strong>. Authorized facility for manufacturing high-precision aluminium closures for pharmaceutical applications with an annual certified capacity of <strong>65 Million units</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="block text-[11px] text-slate-400">Registry No.</span>
                  <span className="text-sm font-bold text-sky-400">2003/29971</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="block text-[11px] text-slate-400">Annual Capacity</span>
                  <span className="text-sm font-bold text-emerald-400">65,000,000 Caps</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="block text-[11px] text-slate-400">Factory Plot</span>
                  <span className="text-sm font-bold text-indigo-400">Plot 86, Zone A6</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  onClick={() => setSelectedCert({
                    title: "Official Industrial Registry Certificate (IDA)",
                    titleAr: "الهيئة العامة للتنمية الصناعية - قيد رقم 2003/29971",
                    image: "/images/certificates/industrial-registry-certificate.jpg",
                    meta: "10th of Ramadan City Plant, Zone A6, Plot 86 • 65 Million Annual Capacity"
                  })}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
                >
                  <Maximize2 size={16} />
                  <span>Inspect IDA Registry (65M)</span>
                </button>
                <button
                  onClick={() => setSelectedCert({
                    title: "Ministry of Health Compliance Certificate",
                    titleAr: "شهادة مطابقة واعتماد وزارة الصحة والسكان المصرية",
                    image: "/images/certificates/ministry-of-health-certificate.jpg",
                    meta: "Official Clearance for Primary Pharmaceutical Packaging & Closure Manufacturing"
                  })}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
                >
                  <FileCheck size={16} />
                  <span>Ministry of Health</span>
                </button>
                <button
                  onClick={() => setSelectedCert({
                    title: "Chamber of Pharmaceuticals Membership Certificate",
                    titleAr: "شهادة عضوية غرفة صناعة الأدوية ومستحضرات التجميل - اتحاد الصناعات المصرية",
                    image: "/images/certificates/chamber-membership-certificate.jpg",
                    meta: "Active Corporate Member - Federation of Egyptian Industries (FEI)"
                  })}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
                >
                  <Award size={16} />
                  <span>FEI Chamber Member</span>
                </button>
              </div>
            </div>

            {/* Certificate Preview Card */}
            <div className="lg:col-span-5 flex flex-col items-center gap-3">
              <div 
                className="relative group cursor-pointer w-full max-w-sm rounded-2xl overflow-hidden bg-white border-4 border-slate-700 shadow-2xl transition-all duration-300 hover:border-sky-400"
                onClick={() => setSelectedCert({
                  title: "Official Industrial Registry Certificate (IDA)",
                  titleAr: "الهيئة العامة للتنمية الصناعية - قيد رقم 2003/29971",
                  image: "/images/certificates/industrial-registry-certificate.jpg",
                  meta: "10th of Ramadan City Plant, Zone A6, Plot 86 • 65 Million Annual Capacity"
                })}
              >
                <div className="relative h-80 sm:h-96 w-full bg-slate-100">
                  <Image
                    src="/images/certificates/industrial-registry-certificate.jpg"
                    alt="Official Industrial Registry Certificate of Egypt Pharma"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2">
                      <Maximize2 size={24} />
                    </div>
                    <span className="font-semibold text-xs sm:text-sm">Click to View Full Document</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-800 text-center">
                  <span className="text-xs font-semibold text-slate-300 flex items-center justify-center gap-1.5">
                    <FileCheck size={14} className="text-emerald-400" />
                    <span>4 Official Government Accreditations Available</span>
                  </span>
                </div>
              </div>

              {/* Quick Document Switchers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-lg justify-center">
                <button
                  type="button"
                  onClick={() => setSelectedCert({
                    title: "Official Industrial Registry Certificate (IDA)",
                    titleAr: "الهيئة العامة للتنمية الصناعية - قيد رقم 2003/29971",
                    image: "/images/certificates/industrial-registry-certificate.jpg",
                    meta: "10th of Ramadan City Plant, Zone A6, Plot 86 • 65 Million Annual Capacity"
                  })}
                  className="py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-slate-300 hover:text-white border border-slate-700 text-center transition-colors"
                >
                  IDA Registry
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCert({
                    title: "Permanent Operating License (IDA)",
                    titleAr: "رخصة تشغيل دائمة بنظام الإخطار - التنمية الصناعية",
                    image: "/images/certificates/operating-license.jpg",
                    meta: "Permanent Industrial Operating License under Egyptian Law"
                  })}
                  className="py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-slate-300 hover:text-white border border-slate-700 text-center transition-colors"
                >
                  Operating License
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCert({
                    title: "Ministry of Health Compliance Certificate",
                    titleAr: "شهادة مطابقة واعتماد وزارة الصحة والسكان المصرية",
                    image: "/images/certificates/ministry-of-health-certificate.jpg",
                    meta: "Official Clearance for Primary Pharmaceutical Packaging & Closure Manufacturing"
                  })}
                  className="py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-slate-300 hover:text-white border border-slate-700 text-center transition-colors"
                >
                  Health Ministry
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCert({
                    title: "Chamber of Pharmaceuticals Membership Certificate",
                    titleAr: "شهادة عضوية غرفة صناعة الأدوية ومستحضرات التجميل - اتحاد الصناعات المصرية",
                    image: "/images/certificates/chamber-membership-certificate.jpg",
                    meta: "Active Corporate Member - Federation of Egyptian Industries (FEI)"
                  })}
                  className="py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-slate-300 hover:text-white border border-slate-700 text-center transition-colors"
                >
                  FEI Chamber
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Pillars Section */}
        <section className="pt-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-3">
              Manufacturing Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Three Pillars of Production Quality
            </h2>
            <div className="w-16 h-1 bg-sky-600 rounded mx-auto mb-4" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every closure manufactured in our 10th of Ramadan facility undergoes multi-stage automated and laboratory verification to guarantee zero leakage and patient safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-sky-50 text-sky-600 mb-6">
                <Building2 size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">ISO 14644 Cleanrooms</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Production of liners and sterile closures takes place in environmentally controlled cleanroom zones equipped with HEPA filtration, positive differential air pressure, and constant particulate monitoring.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-50 text-indigo-600 mb-6">
                <Cpu size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">European Machinery</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Automated multi-stage stamping presses and rotary capping toolsets sourced from top European manufacturers ensure micro-millimeter precision (±0.15mm) across every single production run.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-600 mb-6">
                <Microscope size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Analytical Laboratory</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                In-house testing facility equipped with digital torque analyzers, vacuum leak decay chambers, coating adhesion testers, and optical comparators verifying 100% batch release compliance.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FACILITY SAFETY & SANITIZATION SPOTLIGHT
            ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-100/80 border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-3">
                Industrial Hygiene &amp; Life Safety
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Plant Hygiene &amp; Certified Safety Infrastructure
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Rigorous daily aerosol sanitization across machinery lines, paired with civil defense approved fire pumps, gas suppression systems, and optical early detection networks.
              </p>
            </div>
            <div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
              >
                <span>View All 18 Facility Photos</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sanitization Sample Card */}
            <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full bg-slate-900">
                <Image
                  src="/images/gallery/Disinfection_(30).jpg"
                  alt="Production Floor Sanitization"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-600/90 text-white">
                  Cleanroom Protocol
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Floor Sanitization &amp; Air Misting</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Scheduled decontamination covering packaging staging and press machinery.
                </p>
              </div>
            </div>

            {/* Fire Pump Sample Card */}
            <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full bg-slate-900">
                <Image
                  src="/images/gallery/Fire-Fighting-Equipments_(6).jpg"
                  alt="Fire Pump House Station"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-600/90 text-white">
                  NFPA Fire Station
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Central Pump Station &amp; Booster</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dual electric and diesel booster sets ensuring continuous emergency water pressure.
                </p>
              </div>
            </div>

            {/* Gas Suppression Sample Card */}
            <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full bg-slate-900">
                <Image
                  src="/images/gallery/Fire-Fighting-Equipments_(7).jpg"
                  alt="Clean Agent Gas Suppression"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[11px] font-bold bg-indigo-600/90 text-white">
                  Electrical Safety
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Clean Agent Gas Suppression</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automated non-water gas flooding cylinders protecting critical electrical switchrooms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Quality Policy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <Award className="text-sky-600" /> Our Vision &amp; Mission
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              To remain the primary packaging partner of choice for pharmaceutical laboratories across Egypt and the Middle East, delivering closures that protect medicine stability, prevent counterfeiting, and ensure consumer convenience.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> 
                <span>100% On-Time Delivery Guarantee for Pharma Plants</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> 
                <span>Continuous Investment in Automation &amp; Cleanliness</span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <Layers className="text-sky-600" /> Strict Raw Material Sourcing
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              We never compromise on base material purity. Our aluminium coils are imported exclusively from certified French and German rolling mills, with complete traceability certificates back to the smelting furnace.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> 
                <span>Certified Low-Density Virgin Polyethylene (FDA 21 CFR)</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> 
                <span>Heavy-Metal-Free Internal Protective Lacquers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Schedule a Factory Audit or Consultation</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We welcome quality audit teams and procurement officers from pharmaceutical manufacturers to inspect our 10th of Ramadan facilities and review our quality management system.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 shrink-0 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto text-center justify-center px-6 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-sky-500/25"
            >
              Request Plant Visit
            </Link>
            <Link 
              href="/gallery" 
              className="w-full sm:w-auto text-center justify-center px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-sm transition-all"
            >
              Explore Facility Gallery
            </Link>
          </div>
        </section>
      </div>

      {/* =========================================================================
          PORTAL CERTIFICATE INSPECTION MODAL: 100% FULL-SCREEN & TRUE CENTERED
          ========================================================================= */}
      {mounted && selectedCert && createPortal(
        <div 
          className="fixed inset-0 top-0 left-0 right-0 bottom-0 w-full h-full min-h-[100dvh] z-[999999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col m-auto max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <FileCheck size={20} className="text-emerald-400" />
                  <span>{selectedCert.title}</span>
                </h3>
                <span className="text-xs text-slate-400" dir="rtl">
                  {selectedCert.titleAr}
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close Preview"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative flex-1 min-h-[400px] sm:min-h-[550px] bg-slate-950 flex items-center justify-center overflow-auto p-4">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <span>{selectedCert.meta}</span>
              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>Open Full Size Document</span>
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
