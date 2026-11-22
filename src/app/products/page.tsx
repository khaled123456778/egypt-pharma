"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  FileText, 
  CheckCircle2, 
  X, 
  Download 
} from "lucide-react";

interface ProductTDS {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  dimensions: string;
  alloy: string;
  thickness: string;
  liner: string;
  torque: string;
  pressure: string;
  compliance: string[];
  packaging: string;
  applications: string[];
  image: string;
}

const TDS_DATA: Record<string, ProductTDS> = {
  "aluminium-caps": {
    id: "tds-aluminium-28x18",
    title: "Technical Data Sheet: Aluminium P.P. Caps (28*18 mm)",
    titleAr: "بطاقة المواصفات الفنية: أغطية الألومنيوم الدوائية 28*18 مم",
    category: "Aluminium Pilfer-Proof Closures (ROPP)",
    dimensions: "28.00 mm Outer Diameter × 18.00 mm Height (Tolerance ±0.15 mm)",
    alloy: "Aluminium Alloy 8011 H14 / H16 (Imported from France & Germany)",
    thickness: "0.21 mm – 0.23 mm Sheet Gauge",
    liner: "Expanded Polyethylene (EPE) 1.50 mm / Tri-seal / Saranex barrier",
    torque: "Opening Bridge Torque: 1.2 – 1.8 N·m | Sealing Head Torque: 1.8 – 2.2 N·m",
    pressure: "Internal Pressure Resistance > 2.5 bar (Zero Leakage under vacuum test)",
    compliance: [
      "ISO 15378: Primary Packaging Materials for Medicinal Products",
      "European Pharmacopoeia (EP 3.1.3 & 3.1.5)",
      "US FDA 21 CFR § 175.300 (Food-contact resin and polymer coatings)",
      "Egyptian Drug Authority (EDA) Packaging Approval",
      "IDA Industrial License No. 2003/29971"
    ],
    packaging: "5,000 caps per poly-lined double corrugated carton (Palletized 24 cartons/Euro pallet)",
    applications: [
      "Liquid oral syrups and pediatric suspensions (Glass & PET bottles)",
      "Antibiotic dry syrups requiring reconstitution",
      "Antiseptic and surgical topical solutions",
      "Herbal syrups and OTC healthcare formulations"
    ],
    image: "/images/products/cap-28-18-bottles.jpg"
  },
  "pe-liners": {
    id: "tds-pe-liners",
    title: "Technical Data Sheet: Virgin Polyethylene (PE) Liners & Wads",
    titleAr: "بطاقة المواصفات الفنية: بطانات وحشوات البولي إيثيلين الدوائية العذراء",
    category: "Pharmaceutical Sealing Liners & Gaskets",
    dimensions: "27.50 mm Diameter × 1.50 mm Standard Thickness (Range: 1.0 – 2.0 mm)",
    alloy: "Virgin Low-Density Polyethylene (LDPE - Medical Grade, Germany)",
    thickness: "1.50 mm ±0.10 mm with >90% elastic recovery",
    liner: "100% Virgin Polymer without plasticizers or heavy metal additives",
    torque: "Optimum compression deflection achieved at 1.4 – 1.8 N·m application torque",
    pressure: "Hermetic seal withstanding > 2.5 bar positive pressure without seepage",
    compliance: [
      "FDA 21 CFR § 177.1520 (Olefin Polymers for direct food & drug contact)",
      "European Pharmacopoeia (EP 3.1.3: Polyolefines)",
      "USP <661> Containers - Plastics & Physicochemical Tests",
      "Leaching & Extractables Certified Non-Migrating",
      "Ministry of Health and Population Sanitary Clearance"
    ],
    packaging: "10,000 liners per sealed double virgin PE bag inside heavy-duty carton",
    applications: [
      "Airtight barrier for liquid syrup and suspension bottle capping",
      "Moisture-vapor barrier for effervescent and hygroscopic tablets",
      "Volatile solvent and alcohol preservation closures"
    ],
    image: "/images/gallery/Disinfection_(34).jpg"
  },
  "pp-caps": {
    id: "tds-pp-caps",
    title: "Technical Data Sheet: Polypropylene (Plastic) Caps (28*18 mm)",
    titleAr: "بطاقة المواصفات الفنية: أغطية البولي بروبيلين البلاستيكية 28*18 مم",
    category: "Injection Molded Medical Plastic Closures",
    dimensions: "28.00 mm Outer Diameter × 18.00 mm Height (DIN 6094 / GPI 28-400 Finish)",
    alloy: "Medical Grade Homopolymer PP (USP Class VI Certified Resin)",
    thickness: "1.20 mm Uniform Wall Thickness with 60 Knurled Outer Grips",
    liner: "Integral molded sealing crab-claw ring or pre-fitted with 1.5 mm EPE liner",
    torque: "Removal Torque: 1.4 – 2.0 N·m with anti-tamper tear-off drop band",
    pressure: "Pressure resistance > 2.0 bar with integrated bore seal",
    compliance: [
      "USP Class VI Biocompatibility Certified",
      "FDA 21 CFR § 177.1520 (Polypropylene Contact Compliance)",
      "ISO 15378 Cleanroom Injection Molding",
      "Gamma and Ethylene Oxide (EtO) Sterilization Stable"
    ],
    packaging: "4,000 pcs per anti-static poly-lined carton",
    applications: [
      "Plastic PET and HDPE pharmaceutical bottles for dry and liquid syrups",
      "Diagnostic and laboratory reagent bottles",
      "Ergonomic pediatric syrup closures requiring high torque grip"
    ],
    image: "/images/products/cap-28-18-single.jpg"
  }
};

export default function ProductsPage() {
  const [selectedTds, setSelectedTds] = useState<ProductTDS | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedTds) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedTds]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTds(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Products &amp; Specifications
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Engineered for pharmaceutical excellence: Aluminium P.P. Caps, Polyethylene Liners, and Polypropylene Closures.
            </p>
            <nav className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10" aria-label="Breadcrumbs">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-sky-400 font-medium">Products</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {/* European Raw Materials Highlight */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
              Premium Raw Materials
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              100% Certified European Sourcing
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To ensure zero contamination and highest barrier performance, Egypt Pharma exclusively imports prime aluminium alloys (8011 &amp; 3105) and virgin medical-grade polymers from top-tier certified suppliers in <strong>Germany and France</strong>.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                🇩🇪 <strong>German Polymer Granules</strong> (FDA 21 CFR)
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                🇫🇷 <strong>French Aluminium Alloys</strong> (EN 573-3)
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                🇪🇬 <strong>Manufactured in Egypt</strong> (ISO 15378 Cleanrooms)
              </span>
            </div>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link 
              href="/gallery" 
              className="px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-xs sm:text-sm transition-all text-center"
            >
              Tour Factory Floor
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-sky-500/25 whitespace-nowrap block text-center"
            >
              Request Material TDS
            </Link>
          </div>
        </section>

        {/* Product Catalog Cards */}
        <div className="space-y-12">
          {/* Product 1: Aluminium P.P. Caps */}
          <article id="aluminium-caps" className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mb-3">
                  Flagship Product
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Aluminium P.P. Caps (28*18 mm)</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  Pilfer-Proof (P.P.) aluminium closures designed specifically for pharmaceutical glass and PET syrup bottles, dry suspensions, and sterile syrups. Features a precision-slit tamper-evident drop band that separates smoothly upon first twist.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">Dimensions</span>
                    <span className="text-sm font-bold text-slate-800">28.00 mm x 18.00 mm (±0.15mm)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">Base Alloy</span>
                    <span className="text-sm font-bold text-slate-800">Alloy 8011 H14 / H16 (France / Germany)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">Closure Type</span>
                    <span className="text-sm font-bold text-slate-800">Roll-on Pilfer-Proof (ROPP)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">Liner Compatibility</span>
                    <span className="text-sm font-bold text-slate-800">Expanded PE, Tri-seal, Saranex</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  href="/contact?product=aluminium-28x18" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-sky-500/25"
                >
                  Order Sample Batch
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedTds(TDS_DATA["aluminium-caps"])}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-sm transition-all shadow-sm"
                >
                  <FileText size={16} className="text-sky-600" />
                  <span>View Full TDS / Specs</span>
                </button>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700"
                >
                  <span>View Press Machinery in Gallery</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Visual Column with Authentic Product Photo */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-sky-950 p-6 sm:p-8 text-white flex flex-col justify-between space-y-5">
              <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-slate-950">
                <Image
                  src="/images/products/cap-28-18-bottles.jpg"
                  alt="Egypt Pharma 28*18 mm Aluminium P.P. Caps Sealed on Glass and PET Bottles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 text-white backdrop-blur-sm border border-white/10">
                  Original 28*18 mm Caps on Pharma Bottles
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">Key Technical Highlights</h3>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span><strong>Multi-Color Lithography:</strong> Up to 5 colors top printing with non-toxic, food-grade inks.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span><strong>Controlled Bridge Strength:</strong> Bridges break under 1.2 to 1.8 N·m without metal burrs.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span><strong>Capping Line Friendly:</strong> Engineered for speeds exceeding +400 bpm.</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Product 2: Polyethylene Liners */}
          <article id="pe-liners" className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
                  Hermetic Sealing
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Polyethylene (PE) Liners &amp; Wads</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  High-resilience Expanded Polyethylene (EPE) wads and multi-laminate barrier liners produced strictly with virgin European polymers. Provides a 100% airtight, leak-proof barrier that preserves formulation integrity and shelf life.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">Standard Thickness</span>
                    <span className="text-sm font-bold text-slate-800">1.50 mm (Range: 1.0 mm – 2.0 mm)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">Polymer Grade</span>
                    <span className="text-sm font-bold text-slate-800">Low-Density Virgin PE (German origin)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">Regulatory Norms</span>
                    <span className="text-sm font-bold text-slate-800">FDA 21 CFR § 177.1520 &amp; EP 3.1.3</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">Seal Integrity</span>
                    <span className="text-sm font-bold text-slate-800">Withstands &gt; 2.5 bar pressure</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  href="/contact?product=pe-liners" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-sky-500/25"
                >
                  Inquire Liner Types
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedTds(TDS_DATA["pe-liners"])}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-sm transition-all shadow-sm"
                >
                  <FileText size={16} className="text-emerald-600" />
                  <span>View Full TDS / Specs</span>
                </button>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  <span>View Cleanroom Assembly in Gallery</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Visual Column with Real Photo */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-teal-950 p-6 sm:p-8 text-white flex flex-col justify-between space-y-5">
              <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <Image
                  src="/images/gallery/Disinfection_(34).jpg"
                  alt="Sterile Contact-Wipe & Assembly Environment for Liners and Closures"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 text-white backdrop-blur-sm border border-white/10">
                  Cleanroom Liner Contact Tooling
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">Seal Protection Properties</h3>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span><strong>Zero Chemical Leaching:</strong> Pure virgin polymer with zero plasticizer migration.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span><strong>Elastic Recovery:</strong> High springback ensures reliable re-sealing after opening.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span><strong>Broad Resistance:</strong> Fully compatible with syrups, suspensions, and alcohol.</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Product 3: PP Plastic Caps */}
          <article id="pp-caps" className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 mb-3">
                  Modern Plastic Closures
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Polypropylene (PP) Caps 28*18 mm</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  Precision-molded medical grade polypropylene caps featuring fine external knurling for patient-friendly opening and closing. Built with an internal ring or fitted with our pharmaceutical EPE liners for dual-barrier security.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">Diameter &amp; Height</span>
                    <span className="text-sm font-bold text-slate-800">28 mm Outer Dia. x 18 mm Height</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">Raw Material</span>
                    <span className="text-sm font-bold text-slate-800">Medical Grade PP (USP Class VI)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">Thread Profile</span>
                    <span className="text-sm font-bold text-slate-800">Standard DIN 6094 / GPI 28-400</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">Customization</span>
                    <span className="text-sm font-bold text-slate-800">Embossed logos &amp; Medical Pantone</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  href="/contact?product=pp-caps" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-sky-500/25"
                >
                  Request Specs Sheet
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedTds(TDS_DATA["pp-caps"])}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-sm transition-all shadow-sm"
                >
                  <FileText size={16} className="text-purple-600" />
                  <span>View Full TDS / Specs</span>
                </button>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-600 hover:text-purple-700"
                >
                  <span>View Conveyor Lines in Gallery</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Visual Column with Authentic Single Closure Photo */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-purple-950 p-6 sm:p-8 text-white flex flex-col justify-between space-y-5">
              <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-slate-950">
                <Image
                  src="/images/products/cap-28-18-single.jpg"
                  alt="Egypt Pharma Precision 28*18 mm Single Closure Detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 text-white backdrop-blur-sm border border-white/10">
                  Precision 28*18 mm Closure Architecture
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">Engineering Advantages</h3>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span><strong>Clean Room Injection:</strong> Molded in class-certified cleanroom environments.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span><strong>Ergonomic Knurling:</strong> 60 vertical ribs providing optimal caregiver grip.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span><strong>Sterilization Ready:</strong> Suitable for EtO and Gamma radiation protocols.</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* =========================================================================
            SECTION: 4-STEP CLEANROOM & QUALITY VERIFICATION PIPELINE
            ========================================================================= */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-3">
              Certified Manufacturing Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Precision Production &amp; Cleanroom Quality Control
            </h2>
            <div className="w-16 h-1 bg-sky-600 rounded mx-auto mb-4" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every pharmaceutical closure manufactured in our 10th of Ramadan plant passes through 4 automated production and verification stages before batch release.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col group hover:shadow-lg transition-all">
              <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/gallery/inside/In-Side-Factory-28-scaled.jpg"
                  alt="High-Speed European Aluminium Stamping & Forming Press"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-sky-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md">
                  01
                </span>
                <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                  Aluminium Stamping
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">High-Speed Pressing</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Precision European press tooling drawing Alloy 8011 sheets into seamless 28*18 mm shells with accurate knurling.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/60 text-[11px] font-semibold text-sky-600">
                  Tolerance: ±0.15 mm
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col group hover:shadow-lg transition-all">
              <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/gallery/Disinfection_(31).jpg"
                  alt="Automatic Conveying & Optical Camera Inspection"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md">
                  02
                </span>
                <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                  Hygiene Conveying
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Optical Inspection</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Enclosed stainless-steel hygienic conveyors with optical vision systems checking lithography, rim smoothness, and band scoring.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/60 text-[11px] font-semibold text-emerald-600">
                  100% Surface Inspection
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col group hover:shadow-lg transition-all">
              <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/gallery/Disinfection_(34).jpg"
                  alt="Cleanroom Assembly & EPE Wad Sealing Line"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-teal-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md">
                  03
                </span>
                <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                  Cleanroom Assembly
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">PE Liner Insertion</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Automated high-speed insertion of virgin European 1.50 mm EPE wads in positive pressure cleanroom atmosphere.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/60 text-[11px] font-semibold text-teal-600">
                  FDA 21 CFR § 177.1520
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col group hover:shadow-lg transition-all">
              <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/gallery/Disinfection_(18).jpg"
                  alt="Quality Assurance Laboratory & Digital Torque Capping Test Line"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md">
                  04
                </span>
                <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                  QA Torque Lab
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Laboratory Verification</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Hourly batch sampling verifying bridge rupture torque (1.2–1.8 N·m) and chamber vacuum decay to guarantee zero seepage.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/60 text-[11px] font-semibold text-indigo-600">
                  Pressure: &gt; 2.5 bar
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: AUTHENTIC PRODUCT & PACKAGING PHOTOGRAPHY STRIP
            ========================================================================= */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-2">
                Production Floor Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Authentic Product &amp; Packaging Photography
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
                Close-up photography of our 28*18 mm closures, cleanroom contact tooling, and high-speed capping lines.
              </p>
            </div>
            <div>
              <Link 
                href="/gallery" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
              >
                <span>View All 188 Facility Photos</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="group relative h-40 sm:h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm cursor-pointer" onClick={() => setSelectedTds(TDS_DATA["aluminium-caps"])}>
              <Image
                src="/images/products/cap-28-18-bottles.jpg"
                alt="28*18 mm Caps on Pharma Bottles"
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[11px] font-bold text-white line-clamp-1">Bottles Capped</span>
              </div>
            </div>

            <div className="group relative h-40 sm:h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm cursor-pointer" onClick={() => setSelectedTds(TDS_DATA["pp-caps"])}>
              <Image
                src="/images/products/cap-28-18-single.jpg"
                alt="28*18 mm Single Closure Detail"
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[11px] font-bold text-white line-clamp-1">Single Closure</span>
              </div>
            </div>

            <div className="group relative h-40 sm:h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm cursor-pointer" onClick={() => setSelectedTds(TDS_DATA["aluminium-caps"])}>
              <Image
                src="/images/gallery/Disinfection_(27).jpg"
                alt="High-Speed Knurling Press Line"
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[11px] font-bold text-white line-clamp-1">Stamping Press</span>
              </div>
            </div>

            <div className="group relative h-40 sm:h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm cursor-pointer" onClick={() => setSelectedTds(TDS_DATA["pe-liners"])}>
              <Image
                src="/images/gallery/Disinfection_(34).jpg"
                alt="Cleanroom Liner Contact Tooling"
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[11px] font-bold text-white line-clamp-1">PE Liner Line</span>
              </div>
            </div>

            <div className="group relative h-40 sm:h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm cursor-pointer" onClick={() => setSelectedTds(TDS_DATA["pp-caps"])}>
              <Image
                src="/images/gallery/Disinfection_(31).jpg"
                alt="Sorting & Conveying Line"
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[11px] font-bold text-white line-clamp-1">Conveyor Sorting</span>
              </div>
            </div>

            <div className="group relative h-40 sm:h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm cursor-pointer" onClick={() => setSelectedTds(TDS_DATA["aluminium-caps"])}>
              <Image
                src="/images/gallery/inside/In-Side-Factory-1-scaled.jpg"
                alt="Factory Cleanroom Stamping Bay"
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[11px] font-bold text-white line-clamp-1">Factory Hall</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================================
          INTERACTIVE TECHNICAL DATA SHEET (TDS) MODAL VIA PORTAL
          ========================================================================= */}
      {mounted && selectedTds && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedTds(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-start justify-between gap-4">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950 border border-sky-800 px-3 py-1 rounded-full mb-3">
                  Official Technical Data Sheet (TDS)
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  {selectedTds.title}
                </h3>
                <p className="text-sm font-semibold text-slate-300 mt-1" dir="rtl">
                  {selectedTds.titleAr}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTds(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Close TDS Dialog"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
              {/* Product Visual & Key Specs Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="sm:col-span-5 relative h-40 sm:h-44 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm">
                  <Image
                    src={selectedTds.image}
                    alt={selectedTds.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 250px"
                    className="object-cover"
                  />
                </div>
                <div className="sm:col-span-7 space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 font-semibold block text-[11px]">Category</span>
                    <strong className="text-slate-900 text-sm">{selectedTds.category}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold block text-[11px]">Standard Dimensions</span>
                    <strong className="text-slate-800">{selectedTds.dimensions}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold block text-[11px]">Material Grade</span>
                    <strong className="text-slate-800">{selectedTds.alloy}</strong>
                  </div>
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-xs text-slate-400 font-semibold block mb-1">Thickness / Sheet Gauge</span>
                  <span className="text-sm font-bold text-slate-800">{selectedTds.thickness}</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-xs text-slate-400 font-semibold block mb-1">Liner Specification</span>
                  <span className="text-sm font-bold text-slate-800">{selectedTds.liner}</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-xs text-slate-400 font-semibold block mb-1">Torque Parameters</span>
                  <span className="text-sm font-bold text-slate-800">{selectedTds.torque}</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-xs text-slate-400 font-semibold block mb-1">Sealing Pressure Rating</span>
                  <span className="text-sm font-bold text-slate-800">{selectedTds.pressure}</span>
                </div>
              </div>

              {/* Regulatory Compliance Badges */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  <span>Mandatory Compliance Standards</span>
                </h4>
                <div className="space-y-2">
                  {selectedTds.compliance.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Layers size={16} className="text-sky-600" />
                  <span>Validated Formulation Applications</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {selectedTds.applications.map((app, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900">
                <strong className="block font-bold text-blue-950 mb-1">Standard Packaging &amp; Palletization:</strong>
                <span>{selectedTds.packaging}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-100 p-4 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Certified Egypt Pharma QA Lab • 10th of Ramadan City
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-xs transition-all"
                >
                  <Download size={14} />
                  <span>Print TDS</span>
                </button>
                <Link
                  href={`/contact?product=${selectedTds.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-md transition-all whitespace-nowrap"
                  onClick={() => setSelectedTds(null)}
                >
                  <span>Request Sample Batch</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
