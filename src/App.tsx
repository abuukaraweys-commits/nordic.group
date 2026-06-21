import { useState, useEffect } from 'react';
import { 
  Compass,
  Target,
  FileCheck,
  PhoneCall,
  Mail,
  MapPin,
  MessageSquare
} from 'lucide-react';
import { CategoryKey, Product } from './types';
import { PRODUCTS } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import AboutUs from './components/AboutUs';
import ContactPage from './components/ContactPage';
import ContactModal from './components/ContactModal';
import Portal from './components/Portal';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'about' | 'contact' | 'portal'>('home');
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalSelectedProduct, setModalSelectedProduct] = useState<Product | null>(null);
  const [productsList, setProductsList] = useState<Product[]>(() => {
    const stored = localStorage.getItem('nordic_products');
    if (stored) {
      try {
        const storedList = JSON.parse(stored) as Product[];
        const defaultIds = new Set(PRODUCTS.map((p) => p.id));
        const customProducts = storedList.filter(
          (p) => !defaultIds.has(p.id) || p.id.startsWith('custom-')
        );
        const mergedList = [...customProducts, ...PRODUCTS];
        // Persist the corrected list immediately so it gets stored in localStorage
        localStorage.setItem('nordic_products', JSON.stringify(mergedList));
        return mergedList;
      } catch (e) {
        return PRODUCTS;
      }
    }
    return PRODUCTS;
  });

  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>(() => {
    const stored = localStorage.getItem('nordic_cart');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        return [];
      }
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('nordic_cart', JSON.stringify(cart));
  }, [cart]);

  // Scroll to top helper on switches
  const navigateToPage = (page: 'home' | 'products' | 'about' | 'contact' | 'portal') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddCustomProduct = (newProd: Product) => {
    const newList = [newProd, ...productsList];
    setProductsList(newList);
    localStorage.setItem('nordic_products', JSON.stringify(newList));
  };

  const handleContactProduct = (product: Product) => {
    setModalSelectedProduct(product);
    setIsContactModalOpen(true);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    // Auto-open the cart drawer so the user immediately sees it worked
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCartCheckout = () => {
    setIsCartOpen(false);
  };

  const handleGeneralContact = () => {
    setModalSelectedProduct(null);
    setIsContactModalOpen(true);
  };

  const handleCategorySelectFromHome = (key: CategoryKey) => {
    setActiveCategory(key);
    navigateToPage('products');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div id="nordic-group-app" className="min-h-screen bg-[#f4f7f9] text-[#1a3a42] flex flex-col justify-between selection:bg-[#2c8fa0]/20">
      
      {/* HEADER NAVBAR */}
      <Header
        currentPage={currentPage}
        activeCategory={activeCategory}
        onPageChange={navigateToPage}
        onCategorySelect={setActiveCategory}
        onRequestQuote={handleGeneralContact}
        cartItemsCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* PRIMARY SECTION VIEWPORT */}
      <main className="flex-grow">
        
        {/* HOMEPAGE VIEW */}
        {currentPage === 'home' && (
          <div id="home-view" className="space-y-0">
            
            {/* Hero Slideshow + rubrik + knapp "Begär offert" (handled inside Hero component) */}
            <Hero onViewProducts={() => navigateToPage('products')} />

            {/* Certifications Quick Bar info */}
            <section id="trust-bar" className="bg-[#f0f8fa] border-y border-[#2c8fa0]/15 py-5 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center select-none">
                <p className="font-sans text-xs sm:text-sm font-extrabold text-[#2c8fa0] tracking-wide uppercase">
                  CE-Certified Products • Sourced from leading clinical laboratories • Assured for clinics in Somalia & East Africa
                </p>
              </div>
            </section>

            {/* Vilka vi är (Kort text: 2–3 meningar) */}
            <section id="who-we-are" className="py-20 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <span className="text-[10px] bg-[#f0f8fa] border border-[#2c8fa0]/20 text-[#2c8fa0] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest inline-block mb-4">
                  Sourcing & Direct Route from Dubai to Somalia
                </span>
                <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1a3a42] tracking-tight">
                  Who We Are
                </h2>
                <div className="text-sm sm:text-base text-[#6b8f96] max-w-3xl mx-auto mt-6 leading-relaxed font-normal space-y-4">
                  <p>
                    Nordic Group is a dental distribution company founded in 2022 with one belief: dental professionals in emerging markets deserve access to the same certified products as clinics in Europe — at prices that make sense.
                  </p>
                  <p>
                    Our business operates directly from Dubai to Somalia.
                  </p>
                  <p>
                    Our range covers everything a clinic needs — impression materials, composites, bonding agents, orthodontic products, disposables, endodontics, cements, disinfection, polishing, and surgical accessories — from trusted brands including Kulzer, 3M, Dentex, Dengen, Atbio, and Jen Dental, all certified to EN-ISO 9001 and EN-ISO 13485.
                  </p>
                  <p className="font-medium text-[#1a3a42]">
                    We are not the biggest. We aim to be the most reliable — the right product, to the right professional, on time, at a price that works.
                  </p>
                </div>

                {/* Shipping route schema graphic preview */}
                <div className="bg-[#f0f8fa] border border-[#2c8fa0]/15 rounded-xl p-6 mt-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
                  <div className="flex-1">
                    <p className="font-bold text-[#1a3a42] text-sm md:text-xs lg:text-sm">Dubai Sourcing</p>
                    <p className="text-[#6b8f96] mt-1 text-xs font-medium">Global Sourcing & Trade Hub</p>
                  </div>
                  
                  <div className="hidden md:flex flex-col items-center flex-1">
                    <div className="w-full h-px relative flex justify-center">
                      <div className="absolute w-full border-t border-dashed border-[#2c8fa0]/40 -top-0.5"></div>
                      <span className="absolute -top-3 text-[9px] bg-[#f0f8fa] text-[#2c8fa0] border border-[#2c8fa0]/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider scale-90">Logistics</span>
                    </div>
                  </div>

                  <div className="flex-1 bg-white border border-[#2c8fa0]/20 rounded-lg py-3 px-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                    <p className="font-bold text-[#2c8fa0] text-sm md:text-xs lg:text-sm">Mogadishu Depot</p>
                    <p className="text-[#1a3a42] mt-0.5 text-xs font-semibold">Customs Clearing & Local Hub</p>
                  </div>

                  <div className="hidden md:flex flex-col items-center flex-1">
                    <div className="w-full h-px relative flex justify-center">
                      <div className="absolute w-full border-t border-dashed border-[#2c8fa0]/40 -top-0.5"></div>
                      <span className="absolute -top-3 text-[9px] bg-[#f0f8fa] text-[#2c8fa0] border border-[#2c8fa0]/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider scale-90">Sourcing</span>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-right">
                    <p className="font-bold text-[#1a3a42] text-sm md:text-xs lg:text-sm">Somalia Clinics</p>
                    <p className="text-[#6b8f96] mt-1 text-xs font-medium">Direct Local Distribution</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vision & Mission (1 mening var) */}
            <section id="vision-mission" className="py-20 bg-[#f0f8fa] border-y border-[#bfc8ca]/25">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                  
                  {/* Vision card */}
                  <div className="p-8 bg-white border border-[#e1e3e4] rounded-2xl flex gap-5 items-start shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                    <div className="w-12 h-12 rounded-xl bg-[#f0f8fa] text-[#2c8fa0] flex items-center justify-center shrink-0 border border-[#bfc8ca]/30 shadow-xs">
                      <Compass className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#1a3a42] tracking-tight">Our Vision</h3>
                      <p className="text-xs sm:text-sm text-[#6b8f96] mt-3 leading-relaxed">
                        Nordic Group aims to be the most trusted dental supplier in the markets we serve. We want dentists, clinic owners, and dental technicians in Somalia and across the region to think of us first, not because we are the biggest, but because we are reliable, honest, and genuinely understand what they need.
                      </p>
                    </div>
                  </div>

                  {/* Mission card */}
                  <div className="p-8 bg-white border border-[#e1e3e4] rounded-2xl flex gap-5 items-start shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                    <div className="w-12 h-12 rounded-xl bg-[#f0f8fa] text-[#2c8fa0] flex items-center justify-center shrink-0 border border-[#bfc8ca]/30 shadow-xs">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#1a3a42] tracking-tight">Our Mission</h3>
                      <p className="text-xs sm:text-sm text-[#6b8f96] mt-3 leading-relaxed">
                        Nordic Group connects dental professionals with certified, high-quality products at competitive prices. We cut unnecessary steps out of the supply chain so that clinics in emerging markets get access to the same materials as clinics in Europe, without the markup that usually comes with distance. Our role is simple: the right product to the right professional, on time, at a price that works.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Begär offert (CTA) - Rubrik + knapp → leder till kontaktsidan */}
            <section id="contact-cta" className="py-16 bg-[#2c8fa0] text-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight">
                  Interested in our products? Request a custom quote today.
                </h2>
                <p className="text-xs sm:text-sm text-[#f0f8fa] opacity-95 mt-3 max-w-xl mx-auto leading-relaxed">
                  List your clinic requirements for modern consumables, surgical instruments, sterilization pouches, or radiography items. Our Dubai-coordinated procurement office will compile a customized proposal free of charge.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => navigateToPage('contact')}
                    className="w-full sm:w-auto px-8 py-4 bg-white text-[#2c8fa0] hover:bg-[#f0f8fa] font-sans text-xs font-bold uppercase tracking-wider transition-all rounded-[6px] shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>Request Quote</span>
                  </button>

                  <a
                    href="https://wa.me/252617453777?text=Hello%20Nordic%20Group.%20I%20would%20like%20to%20request%20a%20clinical%20quote%20for%20our%20dental%20practice."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 bg-[#1a6e7e] hover:bg-[#155663] text-white rounded-[6px] font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/10"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Contact us on WhatsApp</span>
                  </a>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* PRODUKTSIDA VIEW */}
        {currentPage === 'products' && (
          <ProductCatalog
            products={productsList}
            initialCategory={activeCategory}
            onContactProduct={handleContactProduct}
            onNavigateToContact={() => navigateToPage('contact')}
            onAddToCart={handleAddToCart}
            cartItems={cart}
          />
        )}

        {/* OM OSS VIEW */}
        {currentPage === 'about' && (
          <AboutUs onNavigateToContact={() => navigateToPage('contact')} />
        )}

        {/* KONTAKT VIEW */}
        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {/* PORTAL & ADMIN WORKSPACE VIEW */}
        {currentPage === 'portal' && (
          <Portal onAddCustomProduct={handleAddCustomProduct} />
        )}

      </main>

      {/* FOOTER */}
      <Footer 
        onPageChange={navigateToPage} 
        onRequestQuote={handleGeneralContact} 
      />

      {/* Floating interactive WhatsApp Quick Chat Button */}
      <a
        href="https://wa.me/252617453777?text=Hello%20Nordic%20Group%20Dental.%20We%20are%20interested%20in%20your%20clinical%20dental%20supplies."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#20ba59] hover:scale-110 transition-all duration-300 group"
      >
        <MessageSquare className="w-7 h-7 fill-current group-hover:rotate-12 transition-transform" />
      </a>

      {/* Quotes and items drawer modal dialog */}
      {isContactModalOpen && (
        <ContactModal
          selectedProduct={modalSelectedProduct}
          cartItems={modalSelectedProduct ? undefined : cart}
          onClose={() => {
            setIsContactModalOpen(false);
            setModalSelectedProduct(null);
          }}
          onClearCart={modalSelectedProduct ? undefined : handleClearCart}
        />
      )}

      {/* Cart Drawer Panel */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCartCheckout}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
