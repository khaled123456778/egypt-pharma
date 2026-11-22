"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, 
  Maximize2, 
  X, 
  ChevronLeft, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  MapPin,
  ExternalLink,
  FileCheck
} from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/galleryData";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  const filteredItems = activeFilter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Lightbox navigation handlers
  const handlePrev = useCallback(() => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  }, [selectedItem, filteredItems]);

  const handleNext = useCallback(() => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  }, [selectedItem, filteredItems]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") setSelectedItem(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, handlePrev, handleNext]);

  // Calculate counts for badges
  const allCount = GALLERY_ITEMS.length;
  const sanitizationCount = GALLERY_ITEMS.filter((i) => i.category === "sanitization").length;
  const safetyCount = GALLERY_ITEMS.filter((i) => i.category === "safety").length;
  const certCount = GALLERY_ITEMS.filter((i) => i.category === "certifications").length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold mb-3 border border-sky-400/30">
              <Sparkles size={14} />
              <span>Real Factory &amp; Facility Tour</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Factory &amp; Safety Gallery
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Authentic visual documentation of Egypt Pharma’s manufacturing plant, automated lines, rigorous cleanroom sanitization, and certified fire protection infrastructure in 10th of Ramadan City.
            </p>
            <nav className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10" aria-label="Breadcrumbs">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-sky-400 font-medium">Gallery</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "all"
                ? "bg-sky-600 text-white shadow-md shadow-sky-500/25"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            <span>All Facilities &amp; Records</span>
            <span className={`px-2 py-0.5 rounded-full text-[11px] ${activeFilter === "all" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>
              {allCount}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter("sanitization")}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "sanitization"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            <ShieldCheck size={16} />
            <span>Sanitization &amp; Cleanrooms</span>
            <span className={`px-2 py-0.5 rounded-full text-[11px] ${activeFilter === "sanitization" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>
              {sanitizationCount}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter("safety")}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "safety"
                ? "bg-amber-600 text-white shadow-md shadow-amber-500/25"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            <Flame size={16} />
            <span>Safety &amp; Fire Protection</span>
            <span className={`px-2 py-0.5 rounded-full text-[11px] ${activeFilter === "safety" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>
              {safetyCount}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter("certifications")}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "certifications"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            <FileCheck size={16} />
            <span>Government Accreditations &amp; Licenses</span>
            <span className={`px-2 py-0.5 rounded-full text-[11px] ${activeFilter === "certifications" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>
              {certCount}
            </span>
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-sky-300 transition-all duration-300 flex flex-col"
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
            >
              {/* Photo Display */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md backdrop-blur-md ${
                    item.category === "certifications"
                      ? "bg-indigo-600/90 text-white border border-indigo-400/30"
                      : item.category === "safety"
                      ? "bg-amber-600/90 text-white border border-amber-400/30"
                      : "bg-emerald-600/90 text-white border border-emerald-400/30"
                  }`}>
                    {item.badge}
                  </span>
                </div>

                {/* Hover Inspector Overlay */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 text-white">
                    <Maximize2 size={24} />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm">Inspect Full Image &amp; Details</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mb-3" dir="rtl">
                    {item.titleAr}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 truncate max-w-[200px]">
                    <MapPin size={13} className="text-slate-400 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </span>
                  <span className="font-semibold text-sky-600 group-hover:text-sky-700 transition-colors">
                    View Specs →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Visit Invitation */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Interested in Seeing Our Plant in Person?</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We arrange guided technical tours for pharmaceutical QA/QC inspectors and procurement teams to witness our clean room standards firsthand.
            </p>
          </div>
          <div className="shrink-0">
            <Link 
              href="/contact" 
              className="px-6 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-sky-500/25 block text-center"
            >
              Book Factory Tour
            </Link>
          </div>
        </section>
      </div>

      {/* =========================================================================
          PORTAL LIGHTBOX MODAL: GUARANTEED 100% FULL-SCREEN & TRUE CENTERED
          ========================================================================= */}
      {mounted && selectedItem && createPortal(
        <div 
          className="fixed inset-0 top-0 left-0 right-0 bottom-0 w-full h-full min-h-[100dvh] z-[999999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row m-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white flex items-center justify-center transition-colors shadow-xl ring-2 ring-white/20"
              onClick={() => setSelectedItem(null)}
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>

            {/* Prev Button */}
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white flex items-center justify-center transition-colors shadow-xl ring-2 ring-white/20"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-3 lg:right-[390px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white flex items-center justify-center transition-colors shadow-xl ring-2 ring-white/20"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Left / Main: High-Res Image View */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[420px] lg:min-h-[560px] bg-slate-950 flex items-center justify-center overflow-hidden">
              <Image
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                fill
                priority
                className="object-contain p-2"
              />

              {/* Counter Tag */}
              <div className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                {filteredItems.findIndex((i) => i.id === selectedItem.id) + 1} / {filteredItems.length}
              </div>

              {/* Direct High-Res Link */}
              <a
                href={selectedItem.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 hover:bg-slate-900 backdrop-blur-sm text-white text-xs font-medium border border-white/10 transition-colors"
              >
                <ExternalLink size={12} />
                <span>Open Full Size</span>
              </a>
            </div>

            {/* Right / Sidebar: Technical Metadata Panel */}
            <div className="w-full lg:w-[380px] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200">
              <div className="space-y-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 mb-2">
                    {selectedItem.categoryLabel}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                    {selectedItem.title}
                  </h2>
                  <h3 className="text-sm font-semibold text-slate-600 mt-1" dir="rtl">
                    {selectedItem.titleAr}
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Technical Overview &amp; Protocol
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedItem.fullDesc}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200" dir="rtl">
                    {selectedItem.fullDescAr}
                  </p>
                </div>

                {/* Standards & Badges */}
                {selectedItem.standards && selectedItem.standards.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Compliance &amp; Norms
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.standards.map((std, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200"
                        >
                          ✓ {std}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2 text-xs text-slate-500 flex items-start gap-2">
                  <MapPin size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>{selectedItem.location}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col gap-2.5">
                <Link 
                  href="/contact" 
                  className="w-full text-center py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-md"
                >
                  Request Plant Audit &amp; Specs
                </Link>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full text-center py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold transition-colors"
                >
                  Close Inspection
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
