import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onViewProducts: () => void;
}

interface Slide {
  url: string;
  alt: string;
  title: string;
  subtitle: string;
}

const DEFAULT_SLIDES: Slide[] = [
  {
    url: 'https://drive.google.com/thumbnail?id=1JCd6R_9VUTQleuzRULkBPbs99sVPaXWQ&sz=w1000',
    alt: 'Clinik Universal Nano-Hybrid Composite',
    title: 'Clinik Universal Nano-Hybrid Composite',
    subtitle: 'High-performance restorative composite with excellent polishability and natural opalescence.'
  },
  {
    url: 'https://drive.google.com/thumbnail?id=1D5Vu8BdLkWWAvm8al8TfCTkB0FAFILkr&sz=w1000',
    alt: 'Nordic Prime Bond & Adhesive System',
    title: 'Nordic Prime Bond & Adhesive System',
    subtitle: 'Light-cure, single-component dental adhesive engineered for highly reliable clinical restorations.'
  },
  {
    url: 'https://drive.google.com/thumbnail?id=1IMAR_U3hqsf4mdiL-OAlkX1AVoC61mNg&sz=w1000',
    alt: 'Nordic Translucent Ceramic Brackets',
    title: 'Nordic Translucent Ceramic Brackets',
    subtitle: 'Premium monocrystalline sapphire brackets with a completely transparent chassis that blends with enamel.'
  }
];

export default function Hero({ onViewProducts }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % DEFAULT_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = DEFAULT_SLIDES[currentSlide];

  return (
    <div 
      id="homepage-hero-redesign" 
      className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] bg-[#f8fafb] overflow-hidden flex items-end justify-start border-b border-[#bfc8ca]/25"
    >
      {/* BACKGROUND SLIDESHOW - beautifully centered product presentation */}
      <div className="absolute inset-0 w-full h-full z-0 p-8 sm:p-12 lg:p-16 flex items-center justify-center">
        {DEFAULT_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              referrerPolicy="no-referrer"
              className="max-w-[85%] max-h-[80%] sm:max-h-[85%] sm:max-w-[80%] object-contain object-center transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>

      {/* Hero content - only the prominent "View Our Products" button at the bottom */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 pb-8 sm:pb-12 lg:pb-14 flex items-end justify-start">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 pointer-events-auto">
          <button
            onClick={onViewProducts}
            className="px-8 py-4 bg-[#41808F] hover:bg-[#2c5b66] text-white rounded-xl font-sans text-xs sm:text-sm font-bold tracking-wider uppercase shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer group border border-white/20"
          >
            <span>View Our Products</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>

      {/* Position indicators */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-black/5 shadow-md">
        <div className="flex gap-1.5">
          {DEFAULT_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === i ? 'w-5 bg-[#41808F]' : 'w-1.5 bg-[#41808F]/25 hover:bg-[#41808F]/50'
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
