import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sparkles, ArrowRight, ShieldCheck, Microscope, Layers, Factory } from "lucide-react";

export default function ProductsPage() {
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

        {/* Technical Specifications Matrix */}
        <section className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
          <div className="mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-2">
              Comparative Technical Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Closure Specifications &amp; Quality Parameters
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
              Every production lot is subjected to rigorous quality control protocols in accordance with ISO 15378 and Egyptian Ministry of Health standards.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 text-slate-800 font-bold">
                  <th className="py-3 px-4">Quality Parameter</th>
                  <th className="py-3 px-4">Aluminium P.P. Caps (28*18)</th>
                  <th className="py-3 px-4">Polyethylene (PE) Liners</th>
                  <th className="py-3 px-4">Polypropylene (PP) Caps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-800">Primary Raw Material</td>
                  <td className="py-3.5 px-4">Aluminium Alloy 8011 (France/Germany)</td>
                  <td className="py-3.5 px-4">Virgin Low-Density PE (Germany)</td>
                  <td className="py-3.5 px-4">Homopolymer PP (USP Class VI)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-800">Dimensional Precision</td>
                  <td className="py-3.5 px-4">± 0.15 mm</td>
                  <td className="py-3.5 px-4">± 0.10 mm thickness</td>
                  <td className="py-3.5 px-4">± 0.12 mm</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-800">Tamper-Evident Mechanism</td>
                  <td className="py-3.5 px-4">Precision-slit drop ring (ROPP)</td>
                  <td className="py-3.5 px-4">Optional induction heat seal foil</td>
                  <td className="py-3.5 px-4">Tear-off retaining collar</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-800">Sealing Pressure Rating</td>
                  <td className="py-3.5 px-4">&gt; 2.5 bar with EPE liner</td>
                  <td className="py-3.5 px-4">Hermetic airtight seal</td>
                  <td className="py-3.5 px-4">&gt; 2.0 bar with integrated bore</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-800">Regulatory Compliance</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-200">✓ ISO 15378 / cGMP</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-200">✓ FDA 21 CFR § 177.1520</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-200">✓ EP 3.1.3 / USP &lt;661&gt;</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-800">Opening Torque</td>
                  <td className="py-3.5 px-4">1.2 – 1.8 N·m</td>
                  <td className="py-3.5 px-4">N/A (Liner)</td>
                  <td className="py-3.5 px-4">1.4 – 2.0 N·m</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-800">Standard Packaging</td>
                  <td className="py-3.5 px-4">5,000 pcs / food-grade lined carton</td>
                  <td className="py-3.5 px-4">10,000 pcs / sealed double PE bag</td>
                  <td className="py-3.5 px-4">4,000 pcs / poly-lined carton</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sample Request Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Need Test Samples for Your Capping Line?</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We provide certified sample batches and complete Technical Data Sheets (TDS) &amp; Certificates of Analysis (COA) for validation on your pharmaceutical filling lines.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 shrink-0 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto text-center justify-center px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-sm transition-all"
            >
              Contact Sales Team
            </Link>
            <a 
              href="tel:+201001713508" 
              className="w-full sm:w-auto text-center justify-center px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-sky-900 font-bold text-sm transition-all shadow-md"
            >
              Call +20 100 171 3508
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
