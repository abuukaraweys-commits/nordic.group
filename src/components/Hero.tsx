import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

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
  glow: string;
}

const DEFAULT_SLIDES: Slide[] = [
  {
    brand: 'Kulzer / Nordic Group',
    name: 'Charisma E4SY',
    desc: 'Universal light-curing hybrid composite. Syringe Assortment 4×4g. Microglass II, radio-opaque.',
    tag: 'Precision Restorations',
    tagsub: 'with Confidence',
    url: '/images/products/Charisma%C2%AE%20E4SY.png',
    alt: 'Charisma E4SY Composite',
    glow: 'rgba(180,40,40,0.12)'
  },
  {
    brand: 'Dentex / Nordic Group',
    name: 'DX Flow Color',
    desc: 'Light Cure Color Pastes — Real Color system with 7 shades, brushes and accessories included.',
    tag: 'Artistic Dental Aesthetics',
    tagsub: 'with Precision',
    url: '/images/products/DX.%20Flow-Color.png',
    alt: 'DX Flow Color Pastes',
    glow: 'rgba(65,200,100,0.12)'
  },
  {
    brand: 'SY / Nordic Group',
    name: 'Dental Unit QL2028 II',
    desc: 'Premium dental treatment chair with integrated LED light, instrument tray and ergonomic design.',
    tag: 'Complete Clinic Setup',
    tagsub: 'with Comfort',
    url: '/images/products/Dental%20Unit%20QL2028%20II.png',
    alt: 'Dental Unit QL2028 II',
    glow: 'rgba(120,160,180,0.15)'
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
        height: '420px',
        background: 'linear-gradient(120deg, #e8f0f2 0%, #c8dde2 40%, #d4e8ed 70%, #b8d4da 100%)'
      }}
    >
      {/* Glow behind image */}
      <div
        className="absolute right-[8%] top-[8%] w-64 h-64 rounded-full pointer-events-none z-0"
        style={{ background: `radial-gradient(circle, ${s.glow} 0%, transparent 70%)` }}
      />

      {/* LEFT — Text */}
      <div className="absolute left-0 top-0 h-full z-10 flex flex-col justify-center pl-10 sm:pl-14 lg:pl-20" style={{ width: '50%' }}>

        <p className="text-xs font-bold italic text-[#1a3a42] mb-1.5 tracking-wide">
          {s.brand}
        </p>

        <h1
          className="font-extrabold text-[#41808F] leading-tight mb-3"
          style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
        >
          {s.name}
        </h1>

        <p
          className="text-[#2a4a52] leading-relaxed mb-3 max-w-xs"
          style={{ fontSize: 'clamp(12px, 1.3vw, 14px)' }}
        >
          {s.desc}
        </p>

        <p className="font-bold text-[#1a3a42] text-sm mb-0.5">{s.tag}</p>
        <p className="text-[#4a6a72] text-xs mb-6">{s.tagsub}</p>

        <button
          onClick={onViewProducts}
          className="inline-flex items-center gap-2 bg-[#41808F] hover:bg-[#2c5b66] text-white font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-lg transition-all duration-200 w-max cursor-pointer group border-none"
        >
          <span>View Our Products</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* RIGHT — Product image */}
      <div
        className="absolute right-0 top-0 h-full z-[1] flex items-center justify-center"
        style={{ width: '52%' }}
      >
        <img
          key={currentSlide}
          src={s.url}
          alt={s.alt}
          className="object-contain"
          style={{
            width: '88%',
            height: '88%',
            mixBlendMode: 'multiply'
          }}
        />
      </div>

      {/* CE Badge */}
      <div className="absolute top-5 right-12 z-20 bg-[#1a3a42] text-white text-center px-3 py-2 rounded text-[10px] font-bold uppercase tracking-wide leading-tight">
        CE<br />Certified
      </div>

      {/* Dots — vertical right side */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 items-center">
        {DEFAULT_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className="w-1.5 rounded-full border-none cursor-pointer transition-all duration-300 p-0"
            style={{
              height: currentSlide === i ? '20px' : '6px',
              background: currentSlide === i ? '#41808F' : 'rgba(26,58,66,0.25)'
            }}
          />
        ))}
      </div>
    </div>
  );
}
