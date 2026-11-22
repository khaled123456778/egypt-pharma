"use client";

import React, { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { 
  Search, 
  Menu, 
  X, 
  Facebook, 
  Twitter, 
  Instagram, 
  ArrowRight,
  Layers,
  ShieldCheck,
  Factory,
  FileCheck,
  Building2,
  Users,
  Send,
  Newspaper,
  Flame,
  CheckCircle2
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Customers", href: "/customers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

interface SearchItem {
  id: string;
  title: string;
  category: "Product" | "Facility" | "Document" | "Company" | "News";
  description: string;
  href: string;
  tags: string[];
}

const SEARCH_ITEMS: SearchItem[] = [
  {
    id: "prod-1",
    title: "Aluminium P.P. Caps (28*18 mm)",
    category: "Product",
    description: "Roll-on pilfer-proof closures with multi-color lithography for syrup and medical bottles.",
    href: "/products#aluminium-caps",
    tags: ["caps", "aluminium", "closures", "28*18", "ropp", "أغطية", "الومنيوم", "معدنية"],
  },
  {
    id: "prod-2",
    title: "Polyethylene (PE) Liners & Wads",
    category: "Product",
    description: "Expanded PE wads produced from virgin German polymer complying with FDA 21 CFR.",
    href: "/products#pe-liners",
    tags: ["liners", "wads", "pe", "gasket", "بطانات", "جوانات", "بولي ايثيلين"],
  },
  {
    id: "prod-3",
    title: "Polypropylene (PP) Plastic Closures 28*18 mm",
    category: "Product",
    description: "Precision-molded medical grade polypropylene caps with fine ergonomic knurling.",
    href: "/products#pp-caps",
    tags: ["plastic", "pp", "polypropylene", "caps", "بلاستيك", "بولي بروبيلين"],
  },
  {
    id: "gal-1",
    title: "Factory & Safety Photo Gallery",
    category: "Facility",
    description: "18 Authentic high-resolution photos of our production lines, cleanrooms, and safety infrastructure.",
    href: "/gallery",
    tags: ["gallery", "photos", "factory", "cleanroom", "صور", "المصنع", "معرض"],
  },
  {
    id: "gal-2",
    title: "Production Line #2 Equipment & Air Curtains",
    category: "Facility",
    description: "High-speed stamping presses and boundary air curtains in 10th of Ramadan City.",
    href: "/gallery",
    tags: ["line 2", "production", "machinery", "خط 2", "تعقيم"],
  },
  {
    id: "gal-3",
    title: "Central Fire Pump House & Gas Suppression",
    category: "Facility",
    description: "Civil defense approved dual electric/diesel fire pumps and FM200 electrical gas cylinders.",
    href: "/gallery",
    tags: ["fire", "safety", "pumps", "اطفاء", "مضخات", "حريق", "سلامة"],
  },
  {
    id: "doc-1",
    title: "Official Industrial Registry Certificate (IDA No. 2003/29971)",
    category: "Document",
    description: "Official Industrial Development Authority accreditation with 65 Million annual capacity.",
    href: "/about-us",
    tags: ["ida", "certificate", "license", "registry", "سجل", "صناعي", "ترخيص", "اعتماد"],
  },
  {
    id: "doc-2",
    title: "Ministry of Health Compliance Certificate",
    category: "Document",
    description: "Egyptian Ministry of Health official clearance for primary pharmaceutical closure production.",
    href: "/gallery",
    tags: ["health", "ministry", "moh", "صحة", "وزارة الصحة", "اعتماد", "مطابقة"],
  },
  {
    id: "doc-3",
    title: "Chamber of Pharmaceuticals & Cosmetics Membership (FEI)",
    category: "Document",
    description: "Federation of Egyptian Industries certified chamber registration for pharmaceutical packaging.",
    href: "/gallery",
    tags: ["chamber", "fei", "اتحاد", "الصناعات", "غرفة", "عضوية"],
  },
  {
    id: "comp-1",
    title: "About Egypt Pharma & Corporate Story",
    category: "Company",
    description: "Founded on June 18th 2000 in 10th of Ramadan City under Investment Law No. 8 of 1997.",
    href: "/about-us",
    tags: ["about", "history", "gafi", "شركة", "عن الشركة", "تأسيس"],
  },
  {
    id: "comp-2",
    title: "Strategic Clients & Pharmaceutical Partners",
    category: "Company",
    description: "Supplying trusted closures to EIPICO, Pharco, October Pharma, CID, and Memphis.",
    href: "/customers",
    tags: ["clients", "customers", "partners", "eipico", "pharco", "عملاء", "شركاء"],
  },
  {
    id: "comp-3",
    title: "Request Samples & Technical Quotation (RFQ)",
    category: "Company",
    description: "Submit technical inquiries and order certified sample batches with TDS and COA.",
    href: "/contact",
    tags: ["sample", "rfq", "quote", "order", "طلب", "عينات", "تواصل", "سعر"],
  },
  {
    id: "news-1",
    title: "Company News & Announcements",
    category: "News",
    description: "Corporate milestones, religious celebration greetings, and operational lectures.",
    href: "/blog",
    tags: ["news", "articles", "blog", "اخبار", "مقالات"],
  },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile menu or search modal is open
  useEffect(() => {
    if (searchOpen || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen, mobileMenuOpen]);

  // Keyboard shortcut: Escape closes search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Filter search items based on query
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_ITEMS.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  const handleSelectResult = (href: string) => {
    setSearchOpen(false);
    setSearchQuery("");
    router.push(href);
  };

  const getCategoryBadgeClass = (category: SearchItem["category"]) => {
    switch (category) {
      case "Product":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Facility":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Document":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "Company":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "News":
        return "bg-amber-50 text-amber-700 border-amber-200";
    }
  };

  const getCategoryIcon = (category: SearchItem["category"]) => {
    switch (category) {
      case "Product":
        return <Layers size={14} className="text-blue-600" />;
      case "Facility":
        return <Factory size={14} className="text-emerald-600" />;
      case "Document":
        return <FileCheck size={14} className="text-indigo-600" />;
      case "Company":
        return <Building2 size={14} className="text-purple-600" />;
      case "News":
        return <Newspaper size={14} className="text-amber-600" />;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200 h-20 flex items-center" id="masthead">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            {/* Branding with Authentic Logo */}
            <Link href="/" className="flex items-center gap-3.5 group" aria-label="Egypt Pharma Home">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-200/80 shadow-sm bg-white shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/brand/logo-original.jpg"
                  alt="Egypt Pharma Official Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-pharma-dark tracking-tight leading-tight">
                  Egypt Pharma
                </span>
                <span className="text-[0.72rem] text-slate-500 font-medium uppercase tracking-wider">
                  Pharmaceutical Accessories
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center" aria-label="Primary Navigation">
              <ul className="flex items-center gap-1.5 list-none">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`relative inline-block px-3.5 py-2 font-semibold text-[0.925rem] rounded-md transition-all ${
                          active
                            ? "text-pharma-navy font-bold after:content-[''] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-pharma-blue after:rounded-full"
                            : "text-slate-600 hover:text-pharma-blue hover:bg-slate-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Actions & Social Links */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 hover:text-pharma-blue hover:bg-slate-100 transition-colors"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                title="Search Egypt Pharma"
              >
                <Search size={18} />
              </button>

              <div className="hidden sm:flex items-center gap-1 border-l border-slate-200 pl-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-pharma-blue hover:bg-slate-100 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-pharma-blue hover:bg-slate-100 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-pharma-blue hover:bg-slate-100 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="lg:hidden w-10 h-10 rounded-md flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 w-[280px] max-w-[80vw] h-full bg-white z-50 shadow-2xl p-6 flex flex-col transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-pharma-navy to-pharma-sky flex items-center justify-center text-white font-bold text-sm">
              EP
            </div>
            <span className="font-bold text-base text-pharma-dark">
              Egypt Pharma
            </span>
          </div>
          <button
            type="button"
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Search Quick Action */}
        <div className="mb-4">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setSearchOpen(true);
            }}
            className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-700 text-xs font-semibold transition-colors border border-slate-200/80"
          >
            <Search size={15} className="text-slate-400" />
            <span>Search Catalog &amp; Docs...</span>
          </button>
        </div>

        <ul className="flex flex-col gap-1.5 list-none">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    active
                      ? "bg-blue-50 text-pharma-navy font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-pharma-blue"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto pt-6 border-t border-slate-100">
          <p className="text-xs text-slate-400 mb-3">Connect with us:</p>
          <div className="flex gap-2.5">
            <a href="https://facebook.com" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-pharma-blue" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="https://twitter.com" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-pharma-blue" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="https://instagram.com" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-pharma-blue" aria-label="Instagram">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          REAL INSTANT SEARCH MODAL: 100% FULL-SCREEN & TRUE CENTERED VIA PORTAL
          ========================================================================= */}
      {mounted && searchOpen && createPortal(
        <div
          className="fixed inset-0 top-0 left-0 right-0 bottom-0 w-full h-full min-h-[100dvh] bg-slate-950/95 backdrop-blur-md z-[999999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setSearchOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden relative m-auto flex flex-col max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Search size={18} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    Search Egypt Pharma Catalog
                  </h3>
                  <p className="text-xs text-slate-500">Products, Cleanrooms, Official Certificates &amp; News</p>
                </div>
              </div>
              <button
                type="button"
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-800 transition-colors"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>

            {/* Input Bar */}
            <div className="p-4 sm:p-6 border-b border-slate-100">
              <div className="flex items-center gap-3 bg-slate-100/80 border-2 border-slate-200 rounded-2xl px-4 py-3 focus-within:border-sky-500 focus-within:bg-white transition-all shadow-inner">
                <Search size={20} className="text-slate-400 shrink-0" />
                <input
                  type="search"
                  placeholder="Type to search (e.g. Aluminium, Liners, IDA, Safety, EIPICO)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400 text-sm font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-xs text-slate-400 hover:text-slate-700 px-2 py-1 rounded bg-slate-200"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Search Content Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-slate-100 space-y-1">
              {searchQuery.trim() === "" ? (
                /* Quick Suggestions State */
                <div className="py-4 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Popular Quick Searches
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSearchQuery("Aluminium")}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 transition-colors flex items-center gap-1.5"
                    >
                      <Layers size={13} /> <span>Aluminium Caps 28*18</span>
                    </button>
                    <button
                      onClick={() => setSearchQuery("Liners")}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center gap-1.5"
                    >
                      <ShieldCheck size={13} /> <span>Polyethylene (PE) Liners</span>
                    </button>
                    <button
                      onClick={() => setSearchQuery("Gallery")}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 transition-colors flex items-center gap-1.5"
                    >
                      <Factory size={13} /> <span>18 Factory Photos</span>
                    </button>
                    <button
                      onClick={() => setSearchQuery("IDA")}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 transition-colors flex items-center gap-1.5"
                    >
                      <FileCheck size={13} /> <span>السجل الصناعي المعتمد</span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Directory Shortcuts
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SEARCH_ITEMS.slice(0, 4).map((item) => (
                        <div
                          key={item.id}
                          onClick={() => handleSelectResult(item.href)}
                          className="p-3 rounded-xl border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/50 cursor-pointer transition-all flex items-start gap-3"
                        >
                          <div className="p-2 rounded-lg bg-slate-100 shrink-0">
                            {getCategoryIcon(item.category)}
                          </div>
                          <div className="truncate">
                            <span className="text-xs font-bold text-slate-800 block truncate">{item.title}</span>
                            <span className="text-[11px] text-slate-500 block truncate">{item.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                /* Filtered Results */
                <div className="space-y-2 py-2">
                  <div className="text-xs text-slate-400 mb-2 font-medium">
                    Found {searchResults.length} matching result{searchResults.length > 1 ? "s" : ""}:
                  </div>
                  {searchResults.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelectResult(item.href)}
                      className="group p-4 rounded-2xl hover:bg-sky-50 border border-transparent hover:border-sky-200 cursor-pointer transition-all flex items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-100 group-hover:bg-white shrink-0 transition-colors shadow-sm">
                          {getCategoryIcon(item.category)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getCategoryBadgeClass(item.category)}`}>
                              {item.category}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  ))}
                </div>
              ) : (
                /* Empty Result */
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                    <Search size={22} />
                  </div>
                  <h4 className="text-base font-bold text-slate-800">No Direct Matches Found</h4>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                    We could not find anything matching &quot;{searchQuery}&quot;. Try searching for &quot;Aluminium&quot;, &quot;Liners&quot;, &quot;Cleanrooms&quot;, or &quot;IDA Certificate&quot;.
                  </p>
                </div>
              )}
            </div>

            {/* Footer with Keyboard Hint */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded bg-slate-200 font-mono text-[10px]">ESC</span>
                <span>to close</span>
              </span>
              <button
                onClick={() => setSearchOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium transition-colors"
              >
                Close Search
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
