"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Award, Factory } from "lucide-react";

interface SlideData {
  id: number;
  badge: string;
  badgeIcon: React.ReactNode;
  title: string;
  highlight: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  bgGradient: string;
  bgImage: string;
  accentColor: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    badge: "Established June 2000 • GAFI Regulated",
    badgeIcon: <Award size={16} />,
    title: "Egypt Pharma for",
    highlight: "Pharmaceutical Industries Accessories",
    description:
      "Premier Egyptian joint stock manufacturer delivering world-class Aluminium P.P. Caps (28*18 mm), precision liners, and advanced closures for high-demand pharmaceutical packaging.",
    primaryCta: { text: "Read more", href: "/about-us" },
    secondaryCta: { text: "View Products", href: "/products" },
    bgGradient: "radial-gradient(circle at 20% 50%, rgba(15, 23, 42, 0.88) 0%, rgba(11, 19, 43, 0.95) 100%)",
    bgImage: "/images/hero/slide-1.jpg",
    accentColor: "#38bdf8",
  },
  {
    id: 2,
    badge: "Supplying Leading Pharmaceutical Giants",
    badgeIcon: <ShieldCheck size={16} />,
    title: "The Best Solution For",
    highlight: "Any Medical Company",
    description:
      "Trusted strategic supplier for Egypt's flagship pharma manufacturers including EIPICO, Pharco, October Pharma, CID, and Memphis with zero-defect sealing guarantees.",
    primaryCta: { text: "Our Clients", href: "/customers" },
    secondaryCta: { text: "Contact Engineering", href: "/contact" },
    bgGradient: "radial-gradient(circle at 80% 50%, rgba(15, 23, 42, 0.85) 0%, rgba(13, 148, 136, 0.90) 100%)",
    bgImage: "/images/hero/slide-2.jpg",
    accentColor: "#2dd4bf",
  },
  {
    id: 3,
    badge: "100% German & French Sourced Materials",
    badgeIcon: <Factory size={16} />,
    title: "Certified European Standards &",
    highlight: "FDA Regulatory Compliance",
    description:
      "All aluminium coils and polyethylene liner gaskets meet stringent FDA and European Pharmacopeia requirements for direct pharmaceutical and medical contact.",
    primaryCta: { text: "Explore Products", href: "/products" },
    secondaryCta: { text: "Facility Overview", href: "/gallery" },
    bgGradient: "radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.85) 0%, rgba(29, 78, 216, 0.90) 100%)",
    bgImage: "/images/hero/slide-3.jpg",
    accentColor: "#60a5fa",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[current];

  return (
    <div
      className="relative min-h-[580px] md:min-h-[640px] flex items-center overflow-hidden bg-slate-950 text-white"
      role="region"
      aria-label="Homepage Feature Showcase"
    >
      {/* Background Visual Layer with Real Photography Backdrop */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{
              backgroundImage: `url(${s.bgImage})`,
              transitionProperty: "opacity, transform",
            }}
          >
            {/* Dark contrast gradient overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: s.bgGradient,
              }}
            />
            {/* Subtle grid pattern for modern touch */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
          </div>
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl animate-fadeIn" key={activeSlide.id}>
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 border bg-slate-900/60 backdrop-blur-md transition-all shadow-sm"
            style={{ borderColor: activeSlide.accentColor }}
          >
            <span style={{ color: activeSlide.accentColor }}>{activeSlide.badgeIcon}</span>
            <span className="text-slate-200">{activeSlide.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            {activeSlide.title}{" "}
            <span style={{ color: activeSlide.accentColor }}>
              {activeSlide.highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
            {activeSlide.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
            <Link
              href={activeSlide.primaryCta.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm sm:text-base shadow-lg hover:shadow-sky-500/25 transition-all duration-200"
            >
              <span>{activeSlide.primaryCta.text}</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href={activeSlide.secondaryCta.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-sm sm:text-base backdrop-blur-sm transition-all duration-200"
            >
              <span>{activeSlide.secondaryCta.text}</span>
            </Link>
          </div>
        </div>

        {/* Slider Controls (Arrows + Dots + Counter) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              onClick={prevSlide}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              onClick={nextSlide}
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === current ? "w-8 bg-sky-400" : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400">
            <span className="text-white">0{current + 1}</span> / <span>0{slides.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
