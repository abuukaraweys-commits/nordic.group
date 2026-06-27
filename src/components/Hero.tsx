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
}

const DEFAULT_SLIDES: Slide[] = [
  {
    brand: 'Kulzer / Nordic Group',
    name: 'Clinik Composite',
    desc: 'Universal Nano-Hybrid Composite with excellent polishability and natural opalescence.',
    tag: 'High Performance Restoration',
    tagsub: 'with Precision',
    url: 'https://drive.google.com/thumbnail?id=1JCd6R_9VUTQleuzRULkBPbs99sVPaXWQ&sz=w1000',
    alt: 'Clinik Universal Nano-Hybrid Composite'
  },
  {
    brand: 'Nordic Prime / Nordic Group',
    name: 'Prime Bond',
    desc: 'Light-cure, single-component dental adhesive engineered for highly reliable clinical restorations.',
    tag: 'Superior Bond Strength',
    tagsub: 'with Confidence',
    url: 'https://drive.google.com/thumbnail?id=1D5Vu8BdLkWWAvm8al8TfCTkB0FAFILkr&sz=w1000',
    alt: 'Nordic Prime Bond & Adhesive System'
  },
  {
    brand: 'Nordic Ortho / Nordic Group',
    name: 'Ceramic Brackets',
    desc: 'Premium monocrystalline sapphire brackets with a transparent chassis that blends with enamel.',
    tag: 'Invisible Orthodontics',
    tagsub: 'with Elegance',
    url: 'https://drive.google.com/thumbnail?id=1IMAR_U3hqsf4mdiL-OAlkX1AVoC61mNg&sz=w1000',
    alt: 'Nordic Translucent Ceramic Brackets'
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
      {/* Glow effect behind image */}
      <div
        className="absolute right-[10%] top-[10%] w-72 h-72 rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(65,128,143,0.2) 0%, transparent 70%)' }}
      />

      {/* LEFT — Text */}
      <div className="absolute left-0 top-0 h-full z-10 flex flex-col justify-center pl-10 sm:pl-14 lg:pl-20" style={{ width: '52%' }}>
        
        {/* Brand label */}
        <p className="text-sm font-bold italic text-[#1a3a42] mb-1 tracking-wide">
          {s.brand}
        </p>

        {/* Product name — large teal */}
        <h1 className="font-extrabold text-[#41808F] leading-tight mb-3"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
          {s.name}
        </h1>

        {/* Description */}
        <p className="text-[#2a4a52] leading-relaxed mb-4 max-w-sm"
          style={{ fontSize: 'clamp(13px, 1.4vw, 16px)' }}>
          {s.desc}
        </p>

        {/* Tagline */}
        <p className="font-bold text-[#1a3a42] text-sm mb-0.5">{s.tag}</p>
        <p className="text-[#4a6a72] text-xs mb-6">{s.tagsub}</p>

        {/* CTA Button */}
        <button
          onClick={onViewProducts}
          className="inline-flex items-center gap-2 bg-[#41808F] hover:bg-[#2c5b66] text-white font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-lg transition-all duration-200 w-max cursor-pointer group"
        >
          <span>View Our Products</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* RIGHT — Product image */}
      <div className="absolute right-0 top-0 h-full z-[1] flex items-center justify-center" style={{ width: '52%' }}>
        <img
          key={currentSlide}
          src={s.url}
          alt={s.alt}
          referrerPolicy="no-referrer"
          className="object-contain"
          style={{
            maxWidth: '92%',
            maxHeight: '90%',
            filter: 'drop-shadow(0 12px 40px rgba(0,0,0,0.18))'
          }}
        />
      </div>

      {/* CE Badge — top right */}
      <div className="absolute top-5 right-16 z-20 bg-[#1a3a42] text-white text-center px-4 py-2 rounded text-xs font-bold uppercase tracking-wide leading-tight">
        CE<br />Certified
      </div>

      {/* Dots — right side vertical */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
        {DEFAULT_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className="w-1.5 rounded-full border-none cursor-pointer transition-all duration-300"
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
