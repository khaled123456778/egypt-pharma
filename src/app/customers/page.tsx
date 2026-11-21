import React from "react";
import Link from "next/link";
import { ChevronRight, Building2, CheckCircle2, Award, ShieldCheck, Truck, BarChart3 } from "lucide-react";

interface ClientPartner {
  name: string;
  shortName: string;
  category: string;
  description: string;
  suppliedItems: string;
  partnershipYears: string;
}

const CLIENTS_LIST: ClientPartner[] = [
  {
    name: "Egyptian International Pharmaceutical Industries Co. (EIPICO)",
    shortName: "EIPICO",
    category: "Multinational Exporter",
    description: "Egypt's leading pharmaceutical manufacturer and exporter to over 65 countries worldwide, headquartered in 10th of Ramadan City.",
    suppliedItems: "Aluminium P.P. Caps (28*18 mm) with multi-color lithography & high-barrier PE liners for oral liquid lines.",
    partnershipYears: "Partner since 2002",
  },
  {
    name: "Pharco Pharmaceuticals",
    shortName: "PHARCO",
    category: "Pharma Group Leader",
    description: "One of the largest pharmaceutical manufacturers in the MENA region, providing millions of essential therapeutic treatments daily.",
    suppliedItems: "Precision pilfer-proof closures and high-elasticity EPE sealing wads engineered for automated high-speed capping lines.",
    partnershipYears: "Partner since 2001",
  },
  {
    name: "October Pharma S.A.E.",
    shortName: "OCTOBER PHARMA",
    category: "Specialized Formulations",
    description: "Pioneering producer of human pharmaceuticals in 6th of October City, committed to rigorous cGMP quality benchmarks.",
    suppliedItems: "Custom-printed Roll-on Pilfer-Proof closures with controlled-torque bridges for pediatric syrups.",
    partnershipYears: "Partner since 2004",
  },
  {
    name: "Chemical Industries Development (CID)",
    shortName: "CID",
    category: "National Pioneer",
    description: "Historic Egyptian pharmaceutical enterprise with an expansive portfolio of life-saving therapeutics and oral suspensions.",
    suppliedItems: "Tamper-evident aluminium closures and leak-proof virgin PE liners for amber glass bottles.",
    partnershipYears: "Partner since 2000",
  },
  {
    name: "Misr Company for Pharmaceutical Industries",
    shortName: "MISR PHARMA",
    category: "Heritage Leader",
    description: "Founded in 1939, Misr Pharma is among the founding pillars of the Egyptian pharmaceutical industrial base.",
    suppliedItems: "Hermetic sealing closures with European certified lacquer coatings meeting EDA regulatory guidelines.",
    partnershipYears: "Partner since 2003",
  },
  {
    name: "Memphis Pharmaceutical & Chemical Industries",
    shortName: "MEMPHIS",
    category: "Established Laboratory",
    description: "Renowned manufacturer of high-quality medicinal products and specialized medical preparations for Egyptian healthcare.",
    suppliedItems: "28*18 mm Aluminium P.P. Caps and chemical-resistant Polyethylene wads.",
    partnershipYears: "Partner since 2005",
  },
  {
    name: "Amriya Pharmaceuticals Industries",
    shortName: "AMRIYA",
    category: "Pharco Subsidiary",
    description: "Ultra-modern pharmaceutical production complex situated in Alexandria, specializing in high-volume liquid antibiotics and syrups.",
    suppliedItems: "High-speed line compatible aluminium closures with zero particulate shedding guarantees.",
    partnershipYears: "Partner since 2006",
  },
  {
    name: "Hikma Pharmaceuticals",
    shortName: "HIKMA",
    category: "Global Healthcare",
    description: "Multinational pharmaceutical company supplying high-quality branded generic medicines across North America, Europe, and MENA.",
    suppliedItems: "Audited cGMP-compliant closures adhering to international pharmacopeial safety standards.",
    partnershipYears: "Partner since 2011",
  },
  {
    name: "Pharaonia Pharmaceuticals (Pharo Pharma)",
    shortName: "PHARAONIA",
    category: "Pharma Group",
    description: "Prominent pharmaceutical developer located in Alexandria, renowned for innovative formulations and strict batch release protocols.",
    suppliedItems: "Printed aluminium closures and virgin PE gaskets for pharmaceutical liquid dosage forms.",
    partnershipYears: "Partner since 2007",
  },
  {
    name: "Alexandria Co. for Pharmaceuticals & Chemical Industries",
    shortName: "ALEXANDRIA",
    category: "Public Sector Leader",
    description: "Major public pharmaceutical enterprise providing affordable, top-grade pharmaceuticals to hospitals and pharmacies nationwide.",
    suppliedItems: "Standard and customized 28*18 mm aluminium closures with tamper-proof drop rings.",
    partnershipYears: "Partner since 2002",
  },
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Our Clients &amp; Partners
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Supplying Egypt and the region’s premier pharmaceutical manufacturers with certified, defect-free closures.
            </p>
            <nav className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10" aria-label="Breadcrumbs">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-sky-400 font-medium">Customers</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {/* Partnership Metrics Banner */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <h3 className="text-3xl sm:text-4xl font-black text-sky-600 mb-1">24+</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Years Continuous Trust</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <h3 className="text-3xl sm:text-4xl font-black text-emerald-600 mb-1">10+</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Pharma Giants Supplied</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <h3 className="text-3xl sm:text-4xl font-black text-purple-600 mb-1">100%</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Batch Release Rate</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <h3 className="text-3xl sm:text-4xl font-black text-amber-600 mb-1">250M+</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Annual Closures Delivered</p>
          </div>
        </section>

        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-3">
            Long-Standing Partnerships
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            The Preferred Closure Partner for Egypt’s Pharmaceutical Leaders
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Since our establishment in 2000, Egypt Pharma has built deep-rooted relationships with the country’s largest pharmaceutical manufacturing facilities. Our customers trust our consistent dimensional accuracy, European raw material purity, and reliable supply continuity.
          </p>
        </div>

        {/* Clients Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLIENTS_LIST.map((client) => (
            <article 
              key={client.shortName} 
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                    {client.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {client.partnershipYears}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{client.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{client.description}</p>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 mb-4 leading-relaxed">
                  <strong className="block text-slate-900 mb-0.5">Supplied Solutions:</strong>
                  {client.suppliedItems}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <CheckCircle2 size={16} /> <span>Verified Active Partner</span>
              </div>
            </article>
          ))}
        </div>

        {/* Partnership Assurance Section */}
        <section className="pt-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-3">
              Why Manufacturers Rely On Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Supplier Commitments to Pharmaceutical Plants
            </h2>
            <div className="w-16 h-1 bg-sky-600 rounded mx-auto mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600 mb-6">
                <Truck size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Just-in-Time Regional Delivery</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dedicated logistics fleet providing scheduled just-in-time delivery to pharmaceutical production campuses in 10th of Ramadan, 6th of October, Borg El Arab, and Obour City.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-600 mb-6">
                <ShieldCheck size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">COA With Every Lot</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every delivered batch is accompanied by a Certificate of Analysis (COA) detailing dimensional tolerance, lacquer cure tests, and raw material mill test certificates from Germany and France.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-50 text-purple-600 mb-6">
                <BarChart3 size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">High-Speed Capping Compatibility</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered for automated capping machines (Zalkin, Arol, Bosch). Our closures run smoothly at 400+ bpm with zero jam rates and zero metal burr contamination.
              </p>
            </div>
          </div>
        </section>

        {/* Partner Request Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Become a Certified Supply Partner</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Looking to upgrade your closure supply chain or establish a new primary packaging line? Contact our technical sales team for validation samples and competitive terms.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 shrink-0 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto text-center justify-center px-6 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-sky-500/25"
            >
              Inquire Now
            </Link>
            <a 
              href="tel:+201001713508" 
              className="w-full sm:w-auto text-center justify-center px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-sm transition-all"
            >
              Call Commercial Dept
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
