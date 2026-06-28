import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

import dentalChairImg from '../assets/images/dental_unit_chair_1782572921699.jpg';
import charismaImg from '../assets/images/charisma_composite_1782572937466.jpg';
import realColorImg from '../assets/images/real_color_pastes_1782572953921.jpg';

interface HeroProps {
  onViewProducts: () => void;
}

interface Slide {
  url: string;
  alt: string;
  title: string;
  subtitle: string;
  background: string;
  buttonColor: string;
}

const DEFAULT_SLIDES: Slide[] = [
  {
    url: dentalChairImg,
    alt: 'Premium Ergonomic Dental Unit Chair',
    title: 'Premium Ergonomic Dental Unit Chair',
    subtitle: 'Fully integrated clinical workstation designed for patient comfort and professional treatment precision.',
    background: 'linear-gradient(135deg, #0B2545 0%, #1a6e7e 100%)', // Clinical deep blue/teal gradient matching dental equipment catalogs
    buttonColor: '#41808F'
  },
  {
    url: charismaImg,
    alt: 'Kulzer Charisma Dental Composite Syringes',
    title: 'Kulzer Charisma Dental Composite Syringes',
    subtitle: 'Easy-handling hybrid restorative composite with lifelike enamel-matching aesthetics.',
    background: 'linear-gradient(135deg, #0A0A0A 0%, #7E1C1E 100%)', // Matches the original black & red geometric box of Kulzer Charisma E4SY
    buttonColor: '#C1272D'
  },
  {
    url: realColorImg,
    alt: 'Dentex Real Color Light Cure Color Pastes',
    title: 'Dentex Real Color Light Cure Color Pastes',
    subtitle: 'Premium light-cure resin characterization kit for custom aesthetic dental restorations.',
    background: 'linear-gradient(135deg, #0C071C 0%, #4C1D63 100%)', // Matches the rich artistic violet & rainbow accents of the Dentex Real Color packaging
    buttonColor: '#7C3AED'
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
      className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px] overflow-hidden flex items-center border-b border-[#bfc8ca]/25"
    >
      {/* BACKGROUND SLIDESHOW - smooth crossfade of packaging-matched gradients */}
      <div className="absolute inset-0 w-full h-full z-0 transition-all duration-1000">
        {DEFAULT_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ background: slide.background }}
          />
        ))}
      </div>

      {/* Decorative subtle background overlay to add depth */}
      <div className="absolute inset-0 bg-black/15 z-0 pointer-events-none" />

      {/* Content layout: Left-side text and button, Right-side image */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col md:flex-row items-center justify-between z-10 py-8 md:py-0 gap-6 md:gap-12">
        
        {/* TEXT COLUMN - LEFT SIDE */}
        <div className="flex-1 text-left flex flex-col justify-center items-start h-full max-w-xl w-full">
          <div className="relative w-full min-h-[140px] sm:min-h-[160px] md:min-h-[220px]">
            {DEFAULT_SLIDES.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full flex flex-col gap-3 justify-center transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
                }`}
              >
                <h1 className="text-2xl sm:text-3.5xl md:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-white/90 font-sans leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8">
            <button
              onClick={onViewProducts}
              style={{ backgroundColor: activeSlide.buttonColor }}
              className="px-8 py-4 text-white rounded-xl font-sans text-xs sm:text-sm font-bold tracking-wider uppercase shadow-2xl transition-all duration-500 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer group border border-white/20 hover:brightness-110"
            >
              <span>View Our Products</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>

        {/* IMAGE COLUMN - RIGHT SIDE */}
        <div className="flex-1 w-full h-[180px] sm:h-[240px] md:h-full flex items-center justify-center relative">
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
                className="max-w-[90%] max-h-[90%] md:max-h-[80%] object-contain object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Position indicators - white dot indicators at the bottom right */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 shadow-lg">
        <div className="flex gap-1.5">
          {DEFAULT_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === i ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/65'
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
