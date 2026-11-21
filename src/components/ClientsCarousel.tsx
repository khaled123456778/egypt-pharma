"use client";

import React from "react";
import Link from "next/link";
import { Shield, Building2, CheckCircle2 } from "lucide-react";

interface Client {
  id: string;
  name: string;
  fullName: string;
  initials: string;
  category: string;
  color: string;
}

const clients: Client[] = [
  {
    id: "eipico",
    name: "EIPICO",
    fullName: "Egyptian International Pharmaceutical Industries Co.",
    initials: "EP",
    category: "Top Tier Manufacturer",
    color: "#0284c7",
  },
  {
    id: "pharco",
    name: "PHARCO",
    fullName: "Pharco Pharmaceuticals Group",
    initials: "PH",
    category: "Multinational Healthcare",
    color: "#2563eb",
  },
  {
    id: "october",
    name: "October Pharma",
    fullName: "October Pharma Joint Stock Co.",
    initials: "OP",
    category: "Specialized Formulations",
    color: "#0d9488",
  },
  {
    id: "cid",
    name: "C.I.D.",
    fullName: "Chemical Industries Development",
    initials: "CID",
    category: "National Pioneer",
    color: "#7c3aed",
  },
  {
    id: "misr",
    name: "Misr Co.",
    fullName: "Misr Company for Pharmaceuticals",
    initials: "MC",
    category: "Public Enterprise Partner",
    color: "#d97706",
  },
  {
    id: "memphis",
    name: "Memphis",
    fullName: "Memphis Pharmaceuticals & Chemical Industries",
    initials: "MP",
    category: "Heritage Leader",
    color: "#059669",
  },
  {
    id: "amriya",
    name: "Amriya",
    fullName: "Amriya Pharmaceutical Industries (Pharco)",
    initials: "AP",
    category: "High-Volume Production",
    color: "#dc2626",
  },
  {
    id: "hikma",
    name: "Hikma",
    fullName: "Hikma Pharmaceuticals (أدوية الحكمة)",
    initials: "HP",
    category: "Global Healthcare",
    color: "#0891b2",
  },
  {
    id: "pharaonia",
    name: "Pharaonia",
    fullName: "Pharaonia Pharmaceuticals (Pharo Pharma)",
    initials: "PP",
    category: "Injectables & Liquids",
    color: "#4f46e5",
  },
  {
    id: "alexandria",
    name: "Alexandria",
    fullName: "Alexandria Co. for Pharmaceuticals",
    initials: "AC",
    category: "Government & Private Sector",
    color: "#0284c7",
  },
];

export default function ClientsCarousel() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-12">
        {clients.map((client) => (
          <div 
            key={client.id} 
            className="flex flex-col items-center text-center p-5 rounded-xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-lg transition-all duration-300 group"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg mb-3.5 border transition-transform duration-300 group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${client.color}15, ${client.color}30)`,
                borderColor: `${client.color}40`,
                color: client.color,
              }}
            >
              <span>{client.initials}</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <h4 className="text-base font-bold text-slate-800 mb-1">{client.name}</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">{client.fullName}</p>
              <div className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                <CheckCircle2 size={12} color={client.color} />
                <span>Verified Partner</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border border-slate-800 text-white shadow-xl">
        <div className="text-center md:text-left">
          <h4 className="text-lg sm:text-xl font-bold mb-1 text-white">Join Egypt's Most Respected Pharmaceutical Manufacturers</h4>
          <p className="text-sm text-slate-300">We supply custom tailored 28*18 mm caps, high-purity liners, and full batch traceability.</p>
        </div>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-sky-500/25 shrink-0"
        >
          Request Partner Samples
        </Link>
      </div>
    </div>
  );
}
