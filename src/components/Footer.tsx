import { Mail, Phone, Clock, MapPin } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: 'home' | 'products' | 'about' | 'contact' | 'portal') => void;
  onRequestQuote: () => void;
}

export default function Footer({ onPageChange, onRequestQuote }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-[#0e3d3e] border-t border-[#2c8fa0]/20 pt-16 pb-8 text-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Företagsnamn, adress och beskrivning */}
          <div className="space-y-4">
            <div className="flex items-center bg-transparent">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 400 100" 
                className="h-10 w-auto"
                aria-label="Nordic Group Dental Logo"
              >
                <defs>
                  <linearGradient id="logoGradientFooter" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2c8fa0" />
                    <stop offset="100%" stopColor="#1a6e7e" />
                  </linearGradient>
                </defs>

                <g transform="translate(20, 15)">
                  <rect x="0" y="0" width="70" height="70" rx="20" fill="url(#logoGradientFooter)" />
                  <path d="M35 24 C31 20 23 20 23 27 C23 35 21 44 24 49 C25.5 51.5 28.5 51.5 28.5 49 C28.5 45 32 42 35 42 C38 42 41.5 45 41.5 49 C41.5 51.5 44.5 51.5 46 49 C49 44 47 35 47 27 C47 20 39 20 35 24 Z" fill="#ffffff" />
                  <path d="M31 30 C31 29 32 28 35 28 C38 28 39 29 39 30" stroke="#2c8fa0" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.45"/>
                </g>

                <g transform="translate(110, 58)">
                  <text fontFamily="'Inter', 'Plus Jakarta Sans', sans-serif" fontSize="36" letterSpacing="-1px">
                    <tspan fontWeight="800" fill="#ffffff">nordic</tspan>
                    <tspan fontWeight="300" fill="#2c8fa0"> group</tspan>
                  </text>
                </g>
              </svg>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Premium medical and dental supply company sourcing and distributing across Somalia. We connect clinics with high-quality, certified products and materials securely with direct logistics from Dubai.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2c8fa0] bg-[#f0f8fa]/10 px-3 py-1.5 rounded-md inline-block w-max">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2c8fa0] animate-pulse"></span>
              CE-Certified Dental Products
            </div>
          </div>

          {/* Snabblänkar (Hem | Om oss | Produkter | Kontakt) */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onPageChange('home')}
                  className="hover:text-[#2c8fa0] text-white/80 transition-colors hover:underline underline-offset-4 cursor-pointer text-left font-medium"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('about')}
                  className="hover:text-[#2c8fa0] text-white/80 transition-colors hover:underline underline-offset-4 cursor-pointer text-left font-medium"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('products')}
                  className="hover:text-[#2c8fa0] text-white/80 transition-colors hover:underline underline-offset-4 cursor-pointer text-left font-medium"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('contact')}
                  className="hover:text-[#2c8fa0] text-white/80 transition-colors hover:underline underline-offset-4 cursor-pointer text-left font-medium"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('portal')}
                  className="hover:text-[#2c8fa0] text-white/80 transition-colors hover:underline underline-offset-4 cursor-pointer text-left font-medium"
                >
                  Portal / Admin Workspace
                </button>
              </li>
              <li>
                <button
                  onClick={onRequestQuote}
                  className="text-[#2c8fa0] font-semibold hover:underline underline-offset-4 text-left cursor-pointer transition-colors"
                >
                  Request Customized Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Adress, telefon och e-post */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Contact Details</h3>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2c8fa0] shrink-0" />
                <span className="text-xs font-medium">Phone: <a href="tel:+252617453777" className="hover:underline font-bold text-white">+252 61 745 3777</a></span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2c8fa0] shrink-0" />
                <a href="mailto:info@nordicgr.com" className="hover:text-[#2c8fa0] text-xs font-semibold hover:underline text-white/90">
                  info@nordicgr.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2c8fa0] shrink-0 mt-0.5" />
                <div className="text-xs leading-normal text-white/80">
                  <p><strong>Sourcing Office:</strong> Deira, Dubai, UAE</p>
                  <p className="mt-1"><strong>Logistics Hub:</strong> Mogadishu, Somalia</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-xs text-white/60">
                <Clock className="w-4 h-4 text-[#2c8fa0] shrink-0 mt-0.5" />
                <span>
                  Support Hours: Monday – Friday 09:00 – 17:00 (Dubai Time). We respond to quote inquiries promptly.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator */}
        <div className="h-px bg-white/10 my-10" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-[#2c8fa0]">NORDIC GROUP DENTAL</span>
            <span>•</span>
            <span>Clinical excellence from Dubai to Mogadishu</span>
          </div>
          <p>
            © {currentYear} Nordic Group. All rights reserved. Certified Medical Importer.
          </p>
        </div>
      </div>
    </footer>
  );
}
