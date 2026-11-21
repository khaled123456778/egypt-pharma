import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Egypt Pharma - Pharmaceutical Industries Accessories",
  description:
    "Egypt Pharma for Pharmaceutical Industries Accessories, founded on 18th June 2000. Manufacturer of high-quality Aluminium P.P. Caps (28*18 mm), Polyethylene Liners, and Polypropylene Plastic Closures.",
  keywords: [
    "Egypt Pharma",
    "Pharmaceutical Accessories",
    "Aluminium Caps 28*18",
    "P.P. Caps",
    "Pharmaceutical Closures",
    "Polyethylene Liners",
    "Polypropylene Caps",
    "FDA Compliant Caps",
  ],
  authors: [{ name: "Egypt Pharma" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💊</text></svg>" />
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased font-sans">
        <div id="wrapper" className="flex flex-col min-h-screen">
          <Header />
          <main id="primary" className="flex-1 w-full">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
