import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { resolveImageUrl } from '../types';

interface HeroProps {
  onViewProducts: () => void;
}

interface Slide {
  brand: string;
  name: string;
  desc: string;
  tag: string;
  tagsub: string;
  url: string;
  alt: string;
}

/*
  Image filenames in public/images/products/ :
     charisma.png
     den-link.png
     dental-chair.png
  (true transparent PNGs)
*/
const DEFAULT_SLIDES: Slide[] = [
  {
    brand: 'Kulzer / Nordic Group',
    name: 'Charisma E4SY',
    desc: 'Universal light-cure hybrid composite. Syringe Assortment 4×4g. Microglass II, radio-opaque.',
    tag: 'Precision Restorations',
    tagsub: 'with Confidence',
    url: '/images/products/chrisma.png',
    alt: 'Charisma E4SY Composite'
  },
  {
    brand: 'Dentex / Nordic Group',
    name: 'Den Link Kit',
    desc: 'Porcelain Fracture Repair Kit with MZ Primer, DX Bond, PC Primer and DX Flow etch system.',
    tag: 'Complete Repair System',
    tagsub: 'with Precision',
    url: '/images/products/denlink.png',
    alt: 'Den Link Porcelain Repair Kit'
  },
  {
    brand: 'SY / Nordic Group',
    name: 'Dental Unit QL2028 II',
    desc: 'Premium dental treatment chair with integrated LED light, instrument tray and ergonomic design.',
    tag: 'Complete Clinic Setup',
    tagsub: 'with Comfort',
    url: '/images/products/dentalstol.png',
    alt: 'Dental Unit QL2028 II'
  }
];

export default function Hero({ onViewProducts }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % DEFAULT_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const s = DEFAULT_SLIDES[currentSlide];

  return (
    <div
      id="homepage-hero"
      className="relative w-full overflow-hidden border-b border-[#bfc8ca]/25"
      style={{
        background: 'linear-gradient(100deg, #d4e4e8 0%, #deeaed 35%, #eef5f6 60%, #f4f9fa 100%)'
      }}
    >
      {/* ========================================= */}
      {/* DESKTOP LAYOUT (lg and up) — unchanged side-by-side         */}
      {/* ========================================= */}
      <div className="hidden lg:block relative" style={{ height: '440px' }}>
        {/* LEFT — Text */}
        <div
          className="absolute left-0 top-0 h-full z-30 flex flex-col justify-center pl-20"
          style={{ width: '40%' }}
        >
          <p className="text-xs font-bold italic text-[#1a3a42] mb-1.5 tracking-wide">{s.brand}</p>
          <h1 className="font-extrabold text-[#41808F] leading-tight mb-3" style={{ fontSize: 'clamp(24px, 3.2vw, 40px)' }}>
            {s.name}
          </h1>
          <p className="text-[#2a4a52] leading-relaxed mb-3" style={{ fontSize: '14px', maxWidth: '290px' }}>
            {s.desc}
          </p>
          <p className="font-bold text-[#1a3a42] text-sm mb-0.5">{s.tag}</p>
          <p className="text-[#4a6a72] text-xs mb-6">{s.tagsub}</p>
          <button
            onClick={onViewProducts}
            className="inline-flex items-center gap-2 bg-[#41808F] hover:bg-[#2c5b66] text-white font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-lg transition-all duration-200 w-max cursor-pointer border-none"
          >
            <span>View Our Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* RIGHT — Image */}
        <div className="absolute right-0 top-0 h-full z-[1] flex items-center justify-center" style={{ width: '64%' }}>
          <img key={currentSlide} src={resolveImageUrl(s.url)} alt={s.alt} className="object-contain" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* CE Badge */}
        <div className="absolute top-5 right-12 z-40 bg-[#1a3a42] text-white text-center px-3 py-2 rounded text-[10px] font-bold uppercase tracking-wide leading-tight">
          CE<br />Certified
        </div>

        {/* Dots — vertical right */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 items-center">
          {DEFAULT_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className="w-1.5 rounded-full border-none cursor-pointer transition-all duration-300 p-0"
              style={{ height: currentSlide === i ? '20px' : '6px', background: currentSlide === i ? '#41808F' : 'rgba(26,58,66,0.25)' }}
            />
          ))}
        </div>
      </div>

      {/* ========================================= */}
      {/* MOBILE LAYOUT (below lg) — big image on top, text below      */}
      {/* ========================================= */}
      <div className="lg:hidden flex flex-col">
        {/* Image — large, takes most of the space */}
        <div className="relative w-full flex items-center justify-center" style={{ height: '300px' }}>
          <img
            key={currentSlide}
            src={s.url}
            alt={s.alt}
            className="object-contain"
            style={{ width: '92%', height: '92%' }}
          />
          {/* CE Badge */}
          <div className="absolute top-3 right-3 z-40 bg-[#1a3a42] text-white text-center px-2.5 py-1.5 rounded text-[9px] font-bold uppercase tracking-wide leading-tight">
            CE<br />Certified
          </div>
        </div>

        {/* Text — compact, below image */}
        <div className="px-6 pb-5 pt-1 flex flex-col items-start">
          <p className="text-[11px] font-bold italic text-[#1a3a42] mb-1 tracking-wide">{s.brand}</p>
          <h1 className="font-extrabold text-[#41808F] leading-tight mb-2" style={{ fontSize: 'clamp(22px, 7vw, 30px)' }}>
            {s.name}
          </h1>
          <p className="text-[#2a4a52] leading-relaxed mb-3 text-[13px]">{s.desc}</p>
          <button
            onClick={onViewProducts}
            className="inline-flex items-center gap-2 bg-[#41808F] hover:bg-[#2c5b66] text-white font-bold uppercase tracking-wider text-xs px-5 py-2.5 rounded-lg transition-all duration-200 w-max cursor-pointer border-none"
          >
            <span>View Our Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Dots — horizontal, centered */}
        <div className="flex justify-center gap-2 pb-5">
          {DEFAULT_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className="h-1.5 rounded-full border-none cursor-pointer transition-all duration-300 p-0"
              style={{ width: currentSlide === i ? '20px' : '6px', background: currentSlide === i ? '#41808F' : 'rgba(26,58,66,0.25)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
