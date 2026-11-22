import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Factory, 
  Layers, 
  Award, 
  Calendar, 
  Sparkles,
  MapPin,
  FileCheck,
  ChevronRight,
  Flame,
  Maximize2,
  ExternalLink
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import ClientsCarousel from "@/components/ClientsCarousel";

export default function HomePage() {
  const latestArticles = [
    {
      id: 1,
      title: "تهنئة ذكرى الإسراء والمعراج",
      category: "مناسبات دينية ورسمية",
      date: "يناير 2026",
      excerpt: "في ذكرى ليلة الإسراء والمعراج المباركة، نسأل الله تعالى أن يتقبل منا صالح الأعمال، وأن يعيد هذه الذكرى العطرة على مصر والأمتين العربية والإسلامية بالخير واليمن والبركات.",
      slug: "/blog",
    },
    {
      id: 2,
      title: "رأس السنة الجديدة 2026",
      category: "تهاني ومناسبات",
      date: "ديسمبر 2025",
      excerpt: "إيجيبت فارما تتمنى لجميع شركاء النجاح من شركات الأدوية وكافة العاملين عاماً ميلادياً جديداً 2026 حافلاً بالإنجازات والتقدم ودوام الصحة والعافية.",
      slug: "/blog",
    },
    {
      id: 3,
      title: "حكمة اليوم: فلسفة الجودة",
      category: "ثقافة الشركة",
      date: "ديسمبر 2025",
      excerpt: "“الفرق بين العادي والاستثنائي هو ذلك الجهد الإضافي الصغير.” التزامنا بمعايير الجودة الصارمة في تصنيع أغطية الأدوية هو ما يمنح شركاءنا راحة البال التامة.",
      slug: "/blog",
    },
    {
      id: 4,
      title: "الموظف المثالي الناجح",
      category: "تطوير الكوادر",
      date: "ديسمبر 2025",
      excerpt: "(الأمانة، الإخلاص، الولاء والانتماء) ملخص المحاضرة التوعوية الدورية بمصنع العاشر من رمضان لترسيخ أعلى معايير الانضباط ومراقبة جودة خطوط الإنتاج.",
      slug: "/blog",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* =========================================================================
          SECTION 1: HERO SLIDER
          ========================================================================= */}
      <HeroSlider />

      {/* =========================================================================
          SECTION 2: WHO WE ARE
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-100/60 border-b border-slate-200" id="who-we-are">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-3">
                Company Profile
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Who We Are
              </h2>
              <div className="w-16 h-1 bg-sky-600 rounded mb-6" />
              
              <p className="text-lg sm:text-xl font-medium text-slate-800 mb-4 leading-relaxed">
                Egypt Pharma for Pharmaceutical Industries Accessories, founded on 18th June 2000.
              </p>
              
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Established as an Egyptian joint stock company under Law 8 of 1997, operating under
                the direct supervision and regulations of the <strong>“General Authority for Investment &amp; Free Zones” (GAFI)</strong> and holding <strong>Industrial Development Authority (IDA) License No. 2003/29971</strong>.
                For more than two decades, we have been setting industrial benchmarks in high-precision closures and packaging accessories.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                  <CheckCircle2 size={20} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>Licensed under Egyptian Joint Stock Investment Law 8 of 1997</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                  <CheckCircle2 size={20} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>Certified by Industrial Development Authority (IDA Reg: 2003/29971)</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                  <CheckCircle2 size={20} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>Full compliance with FDA and European Pharmacopeia regulations</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                  <CheckCircle2 size={20} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>Clean room manufacturing environment in 10th of Ramadan City</span>
                </li>
              </ul>

              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  href="/about-us" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-sky-500/25"
                >
                  <span>Read More About Us</span>
                  <ArrowRight size={16} />
                </Link>
                <Link 
                  href="/gallery" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium text-sm transition-all"
                >
                  <span>View Plant Gallery</span>
                </Link>
              </div>
            </div>

            {/* Visual Highlight Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-10 rounded-2xl border border-slate-700/60 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="text-5xl sm:text-6xl font-black text-sky-400">2000</div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center gap-1.5">
                  <FileCheck size={14} />
                  <span>IDA Certified</span>
                </span>
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Year of Establishment</div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Headquartered with a state-of-the-art manufacturing plant in 10th of Ramadan Industrial Zone (Plot 86, Zone A6),
                delivering 65+ million certified closures annually to Egypt and regional pharmaceutical producers.
              </p>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white block mb-1">Certified Raw Materials:</strong> 
                100% of our aluminium sheets, liners, and food/drug-grade polymers are imported from trusted European manufacturers, mainly Germany and France.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHAT WE DO (Core Product Lines)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white" id="what-we-do">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-3">
              Manufacturing Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              What We Do
            </h2>
            <div className="w-16 h-1 bg-sky-600 rounded mx-auto mb-4" />
            <p className="text-sm sm:text-base text-slate-600">
              High-precision manufacturing engineered for sterile, pharmaceutical-grade primary packaging.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-sky-50/70 border border-sky-100 text-center mb-10 max-w-4xl mx-auto">
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              We are using raw material (Aluminium Sheets &amp; Liners/Gasket) of very high quality,
              from European sources, mainly Germany &amp; France.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Aluminium */}
            <div className="flex flex-col p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600 mb-6">
                <Layers size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aluminium P.P. Caps</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                Our Pilfer-Proof (P.P.) caps of size <strong>28 * 18 mm</strong> are produced from special
                European Aluminium sheets, engineered with precision tamper-evident scoring and exceptional hermetic sealing.
              </p>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 mt-auto">
                <span>View Specifications</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 2: Polyethylene */}
            <div className="flex flex-col p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-600 mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Polyethylene Liners</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                All materials and gasket liners are in compliance with <strong>European Standards &amp; FDA</strong> (Food &amp; Drug Administration USA)
                regulations for materials intended to come into contact with pharmaceuticals and liquid medicines.
              </p>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-auto">
                <span>Compliance Details</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 3: Polypropylene */}
            <div className="flex flex-col p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-purple-50 text-purple-600 mb-6">
                <Factory size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Polypropylene Plastic Caps</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                Recently we installed a high-speed production line dedicated to <strong>Polypropylene (Plastic) Caps 28*18 mm</strong>,
                delivering ergonomic torque control, tamper evidence, and superior chemical resistance.
              </p>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-700 mt-auto">
                <span>New Production Line</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: REAL PLANT & FACILITY SHOWCASE
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-100/70 border-t border-b border-slate-200" id="facility-showcase">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-3 border border-sky-200">
                <Sparkles size={14} className="text-sky-600" />
                <span>Verified Cleanroom &amp; Safety Facility</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Inside Our 10th of Ramadan Manufacturing Plant
              </h2>
              <div className="w-16 h-1 bg-sky-600 rounded mt-3 mb-3" />
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Take a visual tour of our automated stamping lines, certified cleanrooms, rigorous sanitization protocols, and civil defense approved safety systems.
              </p>
            </div>
            <div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-md hover:shadow-sky-500/25 whitespace-nowrap"
              >
                <span>View Complete Facility Gallery</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Production Line #2 */}
            <Link 
              href="/gallery"
              className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/gallery/Disinfection_(33).jpg"
                  alt="Production Line #2 Equipment & Air Curtain Sanitization"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-600/90 text-white shadow-md">
                  Line #2 Sanitization
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1 leading-snug group-hover:text-sky-600 transition-colors">
                    Line #2 &amp; Air Curtains
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Aerosol disinfection around high-speed stamping presses and boundary air partitions.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Manufacturing Bay</span>
                  <span className="font-semibold text-sky-600">Inspect →</span>
                </div>
              </div>
            </Link>

            {/* Card 2: QC Test Lab */}
            <Link 
              href="/gallery"
              className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/gallery/Disinfection_(18).jpg"
                  alt="Quality Control & Capping Test Lab"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-600/90 text-white shadow-md">
                  QA Testing Lab
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1 leading-snug group-hover:text-sky-600 transition-colors">
                    Torque &amp; Capping Lab
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Continuous sanitization of test presses, digital torque meters, and vacuum decay chambers.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Quality Assurance</span>
                  <span className="font-semibold text-sky-600">Inspect →</span>
                </div>
              </div>
            </Link>

            {/* Card 3: Fire Pump Station */}
            <Link 
              href="/gallery"
              className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/gallery/Fire-Fighting-Equipments_(6).jpg"
                  alt="Central Fire Pump Station"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-600/90 text-white shadow-md">
                  NFPA Fire Pumps
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1 leading-snug group-hover:text-sky-600 transition-colors">
                    Central Pump House
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Redundant electric and diesel booster pump station powering internal &amp; external hydrants.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Utility Building</span>
                  <span className="font-semibold text-sky-600">Inspect →</span>
                </div>
              </div>
            </Link>

            {/* Card 4: Official IDA Certificate */}
            <Link 
              href="/about-us"
              className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/certificates/industrial-registry-certificate.jpg"
                  alt="Official IDA Industrial Registry Certificate"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-600/90 text-white shadow-md">
                  Official IDA License
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1 leading-snug group-hover:text-sky-600 transition-colors">
                    السجل الصناعي المعتمد
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Certified IDA License No. 2003/29971 authorizing 65M pharmaceutical caps per year.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Legal Accreditation</span>
                  <span className="font-semibold text-indigo-600">View Details →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: 20+ YEARS OF INDUSTRY LEADERSHIP
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white" id="leadership">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="text-5xl sm:text-6xl font-black text-sky-400 mb-2">20+</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Years of Industry Leadership</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Over two decades of dedication to the pharmaceutical sector. Our high-precision tooling,
                automated manufacturing lines, and stringent QA testing have made Egypt Pharma the preferred
                closure supplier for tier-one drug manufacturers.
              </p>
              <Link 
                href="/about-us" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-lg hover:shadow-sky-500/25"
              >
                <span>Explore Our Journey</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">65M+</div>
                <div className="text-xs sm:text-sm text-slate-400 leading-snug">Authorized Annual Closure Capacity</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">100%</div>
                <div className="text-xs sm:text-sm text-slate-400 leading-snug">European Certified Raw Materials</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 mb-1">28*18</div>
                <div className="text-xs sm:text-sm text-slate-400 leading-snug">Standard P.P. &amp; Plastic Cap Dimensions</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 mb-1">FDA / IDA</div>
                <div className="text-xs sm:text-sm text-slate-400 leading-snug">Contact Safety &amp; Legal Licensing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: OUR CLIENTS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white" id="clients">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-3">
              Strategic Partnerships
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Clients
            </h2>
            <div className="w-16 h-1 bg-sky-600 rounded mx-auto mb-4" />
            <p className="text-sm sm:text-base text-slate-600">
              We take pride in being the trusted manufacturing partner for Egypt and the Middle East's
              most distinguished pharmaceutical companies.
            </p>
          </div>

          <ClientsCarousel />
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: LATEST NEWS & EVENTS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-100/60 border-t border-b border-slate-200" id="latest-news">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-3">
              News &amp; Events
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Latest Articles &amp; Updates
            </h2>
            <div className="w-16 h-1 bg-sky-600 rounded mx-auto mb-4" />
            <p className="text-sm sm:text-base text-slate-600">
              Stay connected with internal company events, official announcements, and manufacturing milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestArticles.map((article) => (
              <div 
                key={article.id} 
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar size={13} />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug" dir="rtl">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6" dir="rtl">
                    {article.excerpt}
                  </p>
                </div>
                <div>
                  <Link 
                    href={article.slug} 
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700"
                  >
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FACTORY LOCATION & INTERACTIVE MAP
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white" id="factory-location">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-3">
              Facility Location
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Visit Our Manufacturing Plant
            </h2>
            <div className="w-16 h-1 bg-sky-600 rounded mx-auto mb-4" />
            <p className="text-sm sm:text-base text-slate-600 mb-4">
              Located in 10th of Ramadan City (Plot 86, Zone A6), Egypt's premier industrial hub with strategic logistics connectivity.
            </p>
            <a
              href="https://maps.app.goo.gl/K8MmxJ2VgyLcqQrW9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-sky-500/20"
            >
              <span>Open Egypt Pharma on Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <iframe
              title="Egypt Pharma Factory Location"
              src="https://maps.google.com/maps?q=30.236234,31.747923&t=m&z=17&output=embed&iwloc=near"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
