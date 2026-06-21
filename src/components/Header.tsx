import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageSquare, PhoneCall, ShoppingCart } from 'lucide-react';
import { CategoryKey } from '../types';
import { CATEGORIES } from '../data';

interface HeaderProps {
  currentPage: 'home' | 'products' | 'about' | 'contact' | 'portal' | 'product-detail';
  activeCategory: CategoryKey | null;
  onPageChange: (page: 'home' | 'products' | 'about' | 'contact' | 'portal' | 'product-detail') => void;
  onCategorySelect: (category: CategoryKey | null) => void;
  onRequestQuote: () => void;
  cartItemsCount?: number;
  onOpenCart?: () => void;
}

export default function Header({
  currentPage,
  activeCategory,
  onPageChange,
  onCategorySelect,
  onRequestQuote,
  cartItemsCount = 0,
  onOpenCart
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (key: CategoryKey) => {
    onCategorySelect(key);
    onPageChange('products');
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleAllProductsClick = () => {
    onCategorySelect(null);
    onPageChange('products');
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (page: 'home' | 'products' | 'about' | 'contact' | 'portal' | 'product-detail') => {
    onPageChange(page);
    if (page !== 'products') {
      onCategorySelect(null);
    }
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Maps category key to custom catalog code
  const getCatalogCode = (key: CategoryKey): string => {
    switch (key) {
      case 'composites': return 'NG-FM';
      case 'tools': return 'NG-UT';
      case 'imaging': return 'NG-RO';
      case 'collections': return 'NG-CO';
      default: return 'NG-CA';
    }
  };

  return (
    <header
      id="app-header"
      className="relative w-full z-50 transition-all duration-300 border-b bg-[#0e3d3e] border-[#2c8fa0]/20 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div
          id="brand-logo-container"
          onClick={() => navigateToPage('home')}
          className="flex items-center cursor-pointer group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 400 100" 
            className="h-12 w-auto"
            aria-label="Nordic Group Dental Logo"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2c8fa0" />
                <stop offset="100%" stopColor="#1a6e7e" />
              </linearGradient>
            </defs>

            <g transform="translate(20, 15)">
              {/* Squircle Icon Container */}
              <rect x="0" y="0" width="70" height="70" rx="20" fill="url(#logoGradient)" />
              
              {/* Flat White Tooth Glyph */}
              <path d="M35 24 C31 20 23 20 23 27 C23 35 21 44 24 49 C25.5 51.5 28.5 51.5 28.5 49 C28.5 45 32 42 35 42 C38 42 41.5 45 41.5 49 C41.5 51.5 44.5 51.5 46 49 C49 44 47 35 47 27 C47 20 39 20 35 24 Z" fill="#ffffff" />
              <path d="M31 30 C31 29 32 28 35 28 C38 28 39 29 39 30" stroke="#2c8fa0" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.45"/>
            </g>

            {/* Logo Typography */}
            <g transform="translate(110, 58)">
              <text fontFamily="'Inter', 'Plus Jakarta Sans', sans-serif" fontSize="36" letterSpacing="-1px">
                <tspan fontWeight="800" fill="#ffffff">nordic</tspan>
                <tspan fontWeight="300" fill="#2c8fa0"> group</tspan>
              </text>
            </g>
          </svg>
        </div>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => navigateToPage('home')}
            className={`font-sans text-sm font-semibold tracking-wide transition-colors py-2 relative cursor-pointer ${
              currentPage === 'home'
                ? 'text-[#2c8fa0]'
                : 'text-white hover:text-[#2c8fa0]'
            }`}
          >
            Home
            {currentPage === 'home' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2c8fa0] rounded-full" />
            )}
          </button>

          {/* Products Dropdown Trigger */}
          <div
            id="products-dropdown-container"
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => {
                onCategorySelect(null);
                navigateToPage('products');
              }}
              className={`flex items-center gap-1 font-sans text-sm font-semibold tracking-wide transition-colors py-2 cursor-pointer ${
                currentPage === 'products'
                  ? 'text-[#2c8fa0]'
                  : 'text-white hover:text-[#2c8fa0]'
              }`}
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform duration-250 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                id="products-dropdown-menu"
                className="absolute left-0 mt-0 w-80 bg-white rounded-xl shadow-xl border border-[#bfc8ca]/30 py-3 animate-in fade-in slide-in-from-top-2 duration-150 z-[60]"
              >
                <div className="px-4 pb-2 border-b border-[#e1e3e4] mb-2 flex justify-between items-center bg-[#f0f8fa] py-1.5 rounded-t-lg mx-2">
                  <span className="text-xs font-bold text-[#6b8f96] tracking-wider uppercase">Product Categories</span>
                  <button
                    onClick={handleAllProductsClick}
                    className="text-xs font-semibold text-[#2c8fa0] hover:underline cursor-pointer"
                  >
                    View All
                  </button>
                </div>
                <div className="space-y-1 px-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => handleCategoryClick(cat.key)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                        currentPage === 'products' && activeCategory === cat.key
                          ? 'bg-[#f0f8fa] text-[#2c8fa0]'
                          : 'text-[#1a3a42] hover:bg-[#f0f8fa] hover:text-[#2c8fa0]'
                      }`}
                    >
                      <span>{cat.title}</span>
                      <span className="text-[10px] bg-white border border-[#bfc8ca]/40 px-1.5 py-0.5 rounded text-gray-500 font-mono">
                        {getCatalogCode(cat.key)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => navigateToPage('about')}
            className={`font-sans text-sm font-semibold tracking-wide transition-colors py-2 relative cursor-pointer ${
              currentPage === 'about'
                ? 'text-[#2c8fa0]'
                : 'text-white hover:text-[#2c8fa0]'
            }`}
          >
            About Us
            {currentPage === 'about' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2c8fa0] rounded-full" />
            )}
          </button>

          <button
            onClick={() => navigateToPage('contact')}
            className={`font-sans text-sm font-semibold tracking-wide transition-colors py-2 relative cursor-pointer ${
              currentPage === 'contact'
                ? 'text-[#2c8fa0]'
                : 'text-white hover:text-[#2c8fa0]'
            }`}
          >
            Contact Us
            {currentPage === 'contact' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2c8fa0] rounded-full" />
            )}
          </button>

          {/* New Portal navigation link as Admin */}
          <button
            onClick={() => navigateToPage('portal')}
            className={`font-sans text-sm font-semibold tracking-wide transition-colors py-2 relative cursor-pointer ${
              currentPage === 'portal'
                ? 'text-[#2c8fa0]'
                : 'text-white hover:text-[#2c8fa0]'
            }`}
          >
            Admin
            {currentPage === 'portal' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2c8fa0] rounded-full" />
            )}
          </button>
        </nav>

        {/* Header Right Interactions */}
        <div id="header-right-actions" className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+252617453777"
            className="flex items-center gap-1.5 text-xs text-white/90 font-semibold hover:text-[#2c8fa0] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#2c8fa0]" />
            <span className="hidden xl:inline">Contact Office:</span> +252 61 745 3777
          </a>

          {/* Dynamic Cart Icon Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-lg text-white hover:bg-white/10 transition-all flex items-center gap-1 cursor-pointer"
            title="Open Quote Cart"
          >
            <ShoppingCart className="w-5 h-5 text-[#2c8fa0] group-hover:scale-105" />
            <span className="hidden xl:inline text-xs font-bold text-white/90">My Cart</span>
            {cartItemsCount > 0 ? (
              <span className="bg-cyan-400 text-slate-900 font-mono text-[9px] font-extrabold h-5 w-5 rounded-full flex items-center justify-center animate-pulse shadow-md">
                {cartItemsCount}
              </span>
            ) : null}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Mobile Cart Icon Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-lg text-white hover:bg-white/10 transition-all cursor-pointer"
            title="Open Quote Cart"
          >
            <ShoppingCart className="w-5.5 h-5.5 text-[#2c8fa0]" />
            {cartItemsCount > 0 ? (
              <span className="absolute -top-1 -right-1 bg-cyan-400 text-slate-900 font-mono text-[9px] font-extrabold h-4.5 w-4.5 rounded-full flex items-center justify-center animate-pulse shadow-md">
                {cartItemsCount}
              </span>
            ) : null}
          </button>
          
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-[2px] z-[120] lg:hidden flex justify-end"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            id="mobile-drawer-panel"
            className="bg-white w-[320px] max-w-[85vw] h-screen overflow-y-auto shadow-2xl flex flex-col justify-between p-6 relative animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Sidebar Header with close indicator */}
              <div className="flex justify-between items-center pb-4 border-b border-[#bfc8ca]/30 mb-5">
                <div className="flex items-center gap-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 400 100" 
                    className="h-7 w-auto"
                    aria-label="Nordic Group Dental Logo"
                  >
                    <defs>
                      <linearGradient id="logoGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2c8fa0" />
                        <stop offset="100%" stopColor="#1a6e7e" />
                      </linearGradient>
                    </defs>

                    <g transform="translate(20, 15)">
                      <rect x="0" y="0" width="70" height="70" rx="20" fill="url(#logoGradientMobile)" />
                      <path d="M35 24 C31 20 23 20 23 27 C23 35 21 44 24 49 C25.5 51.5 28.5 51.5 28.5 49 C28.5 45 32 42 35 42 C38 42 41.5 45 41.5 49 C41.5 51.5 44.5 51.5 46 49 C49 44 47 35 47 27 C47 20 39 20 35 24 Z" fill="#ffffff" />
                      <path d="M31 30 C31 29 32 28 35 28 C38 28 39 29 39 30" stroke="#2c8fa0" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.45"/>
                    </g>

                    <g transform="translate(110, 58)">
                      <text fontFamily="'Inter', 'Plus Jakarta Sans', sans-serif" fontSize="36" letterSpacing="-1px">
                        <tspan fontWeight="800" fill="#1a3a42">nordic</tspan>
                        <tspan fontWeight="300" fill="#2c8fa0"> group</tspan>
                      </text>
                    </g>
                  </svg>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 border border-[#bfc8ca]/20 rounded-md text-gray-500 hover:text-[#1a3a42] hover:bg-[#f0f8fa] transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] bg-[#f0f8fa] text-[#2c8fa0] w-max px-2 py-0.5 rounded font-bold uppercase tracking-widest">Navigation</span>
                
                {/* Home */}
                <button
                  onClick={() => navigateToPage('home')}
                  className={`text-left text-sm font-bold py-1 transition-colors cursor-pointer ${
                    currentPage === 'home' ? 'text-[#2c8fa0]' : 'text-[#6b8f96] hover:text-[#2c8fa0]'
                  }`}
                >
                  Home
                </button>

                {/* Products with Collapsible Panel */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    className={`text-left text-sm font-bold py-1 transition-colors flex items-center justify-between cursor-pointer ${
                      currentPage === 'products' ? 'text-[#2c8fa0]' : 'text-[#6b8f96] hover:text-[#2c8fa0]'
                    }`}
                  >
                    <span>Products</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileProductsOpen && (
                    <div className="pl-4 flex flex-col gap-2.5 mt-2 border-l-2 border-[#2c8fa0]/30 py-1">
                      <button
                        onClick={handleAllProductsClick}
                        className={`text-left text-xs font-semibold transition-colors cursor-pointer ${
                          currentPage === 'products' && activeCategory === null
                            ? 'text-[#2c8fa0]'
                            : 'text-[#6b8f96] hover:text-[#2c8fa0]'
                        }`}
                      >
                        View All Products
                      </button>
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.key}
                          onClick={() => handleCategoryClick(cat.key)}
                          className={`text-left text-xs transition-colors cursor-pointer ${
                            currentPage === 'products' && activeCategory === cat.key
                              ? 'text-[#2c8fa0] font-bold'
                              : 'text-[#1a3a42] hover:text-[#2c8fa0]'
                          }`}
                        >
                          {cat.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* About Us */}
                <button
                  onClick={() => navigateToPage('about')}
                  className={`text-left text-sm font-bold py-1 transition-colors cursor-pointer ${
                    currentPage === 'about' ? 'text-[#2c8fa0]' : 'text-[#6b8f96] hover:text-[#2c8fa0]'
                  }`}
                >
                  About Us
                </button>

                {/* Contact Us */}
                <button
                  onClick={() => navigateToPage('contact')}
                  className={`text-left text-sm font-bold py-1 transition-colors cursor-pointer ${
                    currentPage === 'contact' ? 'text-[#2c8fa0]' : 'text-[#6b8f96] hover:text-[#2c8fa0]'
                  }`}
                >
                  Contact Us
                </button>

                {/* Admin */}
                <button
                  onClick={() => navigateToPage('portal')}
                  className={`text-left text-sm font-bold py-1 transition-colors cursor-pointer ${
                    currentPage === 'portal' ? 'text-[#2c8fa0]' : 'text-[#6b8f96] hover:text-[#2c8fa0]'
                  }`}
                >
                  Admin
                </button>
              </div>
            </div>

            {/* Bottom Actions of Side Panel */}
            <div className="pt-4 border-t border-[#bfc8ca]/30 flex flex-col gap-4 mt-8">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-extrabold mb-0.5">Dubai Sourcing & Logistics</p>
                <p className="text-xs font-semibold text-[#1a3a42] leading-tight flex items-center justify-between">Nordic Group Dental</p>
                <p className="text-[10px] text-[#6b8f96] mt-0.5">Sourcing & Logistics for clinics</p>
              </div>
               <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenCart) onOpenCart();
                }}
                className="w-full text-center py-2.5 bg-[#06B6D4] border border-[#06B6D4] text-white hover:bg-[#05a0bc] hover:border-[#05a0bc] font-sans text-xs font-bold tracking-wider uppercase rounded-[6px] shadow-xs transition-colors cursor-pointer"
              >
                View Cart {cartItemsCount > 0 ? `(${cartItemsCount})` : ''}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
