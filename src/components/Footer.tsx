import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b132b] text-slate-300 pt-16 mt-16 border-t-4 border-pharma-navy" id="colophon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Company Bio */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[46px] h-[46px] rounded-md bg-gradient-to-br from-pharma-navy to-pharma-sky flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                EP
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-tight">
                  Egypt Pharma
                </span>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Pharmaceutical Accessories
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Egypt Pharma for Pharmaceutical Industries Accessories was founded on 18th June 2000,
              as an Egyptian joint stock co. under Law 8 of 1997 & under the control of the
              “General Authority for Investment & Free Zones” (GAFI).
            </p>
            <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
              <ShieldCheck size={18} className="flex-shrink-0" />
              <span>Compliant with FDA & European Pharmacopeia Standards</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-sky-500">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="/" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-white hover:translate-x-1 inline-block transition-transform">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Products & Specs</Link></li>
              <li><Link href="/customers" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Our Clients</Link></li>
              <li><Link href="/gallery" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Factory Gallery</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-sky-500">
              Information
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="/blog" className="hover:text-white hover:translate-x-1 inline-block transition-transform">News & Articles</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Contact & Map</Link></li>
              <li><Link href="/products#quality" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Quality Certifications</Link></li>
              <li><Link href="/about-us#raw-materials" className="hover:text-white hover:translate-x-1 inline-block transition-transform">European Raw Materials</Link></li>
            </ul>
          </div>

          {/* Headquarters & Contact */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-sky-500">
              Factory & Location
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-slate-400 mb-3">
              <MapPin size={20} className="text-sky-400 flex-shrink-0 mt-0.5" />
              <span>10th of Ramadan City, Industrial Zone A6, Plot 86, Egypt</span>
            </div>
            <a
              href="https://maps.app.goo.gl/K8MmxJ2VgyLcqQrW9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors mb-3"
            >
              <span>View Factory on Google Maps</span>
              <span>→</span>
            </a>
            <div className="flex items-start gap-2.5 text-sm text-slate-400 mb-3">
              <Mail size={18} className="text-sky-400 flex-shrink-0 mt-0.5" />
              <span>info@egypt-pharma.com</span>
            </div>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center md:text-left">
          <p>
            © 2024 Egypt Pharma . All Rights Reserved By{" "}
            <a
              href="https://web.archive.org/web/20240223202609/http://www.entshr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 hover:underline font-medium transition-colors"
            >
              Entshr
            </a>
          </p>
          <p>Industrial Excellence & High-Precision Packaging Solutions</p>
        </div>
      </div>
    </footer>
  );
}
