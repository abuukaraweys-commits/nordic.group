import { useState, useEffect } from 'react';
import { 
  Compass,
  Target,
  FileCheck,
  PhoneCall,
  Mail,
  MapPin,
  MessageSquare,
  ChevronRight,
  FileText
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
import ProductDetail from './components/ProductDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'about' | 'contact' | 'portal' | 'product-detail'>('home');
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
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

  // Curated list of New Arrival products
  const newArrivalIds = ['cons-01', 'tool-01', 'equip-01', 'img-11'];
  const newArrivals = newArrivalIds
    .map(id => productsList.find(p => p.id === id))
    .filter((p): p is Product => !!p);

  // Curated list of Most Sold products
  const mostSoldIds = ['best-01', 'best-02', 'equip-04', 'img-04'];
  const mostSoldProducts = mostSoldIds
    .map(id => productsList.find(p => p.id === id))
    .filter((p): p is Product => !!p);

  useEffect(() => {
    localStorage.setItem('nordic_cart', JSON.stringify(cart));
  }, [cart]);

  // Helper to parse the hash and synchronize React state
  const syncStateFromHash = () => {
    const hash = window.location.hash || '#home';
    
    let page: 'home' | 'products' | 'about' | 'contact' | 'portal' | 'product-detail' = 'home';
    let category: CategoryKey | null = null;
    let productId: string | null = null;

    if (hash.startsWith('#products')) {
      page = 'products';
      if (hash.includes('?')) {
        const queryStr = hash.split('?')[1];
        const params = new URLSearchParams(queryStr);
        category = params.get('category') as CategoryKey | null;
      }
    } else if (hash.startsWith('#product-detail')) {
      page = 'product-detail';
      if (hash.includes('?')) {
        const queryStr = hash.split('?')[1];
        const params = new URLSearchParams(queryStr);
        productId = params.get('id');
      }
    } else if (hash === '#about') {
      page = 'about';
    } else if (hash === '#contact') {
      page = 'contact';
    } else if (hash === '#portal') {
      page = 'portal';
    }

    setCurrentPage(page);
    setActiveCategory(category);
    if (productId) {
      const foundProduct = productsList.find(p => p.id === productId);
      if (foundProduct) {
        setSelectedProductForDetail(foundProduct);
      }
    } else {
      setSelectedProductForDetail(null);
    }
  };

  // Listen to browser forward/back buttons (popstate and hashchange)
  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home');
    }
    syncStateFromHash();

    const handlePopState = () => {
      syncStateFromHash();
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, [productsList]);

  // Synchronize React state changes back to the browser's URL hash (without firing redundant popstates)
  useEffect(() => {
    let targetHash = '#home';
    if (currentPage === 'products') {
      targetHash = activeCategory ? `#products?category=${activeCategory}` : '#products';
    } else if (currentPage === 'product-detail') {
      targetHash = selectedProductForDetail ? `#product-detail?id=${selectedProductForDetail.id}` : '#products';
    } else if (currentPage === 'about') {
      targetHash = '#about';
    } else if (currentPage === 'contact') {
      targetHash = '#contact';
    } else if (currentPage === 'portal') {
      targetHash = '#portal';
    }

    if (window.location.hash !== targetHash) {
      if (targetHash === '#home' && !window.location.hash) {
        return;
      }
      window.history.pushState(null, '', targetHash);
    }
  }, [currentPage, activeCategory, selectedProductForDetail]);

  // Scroll to top helper on switches
  const navigateToPage = (page: 'home' | 'products' | 'about' | 'contact' | 'portal' | 'product-detail') => {
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

  const handleAddToCart = (product: Product, quantityToAdd: number = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantityToAdd
        };
        return updated;
      }
      return [...prevCart, { product, quantity: quantityToAdd }];
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

            {/* New Arrival Products Section instead of Who We Are */}
            <section id="new-arrivals" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="text-[10px] bg-[#f0f8fa] border border-[#2c8fa0]/20 text-[#2c8fa0] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest inline-block mb-4">
                    Just Arrived in Our Catalog
                  </span>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1a3a42] tracking-tight">
                    New Arrival Products
                  </h2>
                  <p className="text-sm text-[#6b8f96] mt-3 leading-relaxed">
                    Explore our latest additions of CE-certified dental materials, state-of-the-art diagnostic instruments, and digital imaging solutions sourced directly from Sweden and leading clinical hubs.
                  </p>
                </div>

                {/* Grid of New Arrivals */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {newArrivals.map((product) => {
                    const inCartQty = cart.find(item => item.product.id === product.id)?.quantity || 0;
                    return (
                      <div
                        key={product.id}
                        style={{ backgroundColor: '#ffffff', border: '1px solid rgba(53,128,130,0.15)', borderRadius: '16px' }}
                        className="overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.13)] hover:-translate-y-1 hover:border-[#1a5a5c]/40 transition-all duration-300 flex flex-col h-full group"
                      >
                        {/* Image wrapper */}
                        <div
                          onClick={() => {
                            setSelectedProductForDetail(product);
                            navigateToPage('product-detail');
                          }}
                          className="relative aspect-[4/3] bg-white border-b border-[#358082]/15 flex items-center justify-center p-4 cursor-pointer overflow-hidden"
                        >
                          {/* CE Certified badge */}
                          <span className="absolute top-2.5 left-2.5 z-20 text-[8px] font-extrabold uppercase tracking-wider text-white bg-[#1a3a42] px-2 py-1 rounded shadow-sm">
                            CE Certified
                          </span>
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            referrerPolicy="no-referrer"
                            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              const currentUrl = target.src;
                              let driveId: string | null = null;
                              const idMatch = currentUrl.match(/(?:id=|\/d\/|d\/)([a-zA-Z0-9_-]{25,50})/);
                              if (idMatch) {
                                driveId = idMatch[1];
                              }
                              if (driveId) {
                                if (!currentUrl.includes('drive.google.com/thumbnail')) {
                                  target.src = `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`;
                                  return;
                                }
                              }
                              // Fallback images matching categories
                              target.onerror = null;
                              let fallbackUrl = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80';
                              if (product.category === 'composites') {
                                fallbackUrl = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80';
                              } else if (product.category === 'tools') {
                                fallbackUrl = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80';
                              } else if (product.category === 'imaging') {
                                fallbackUrl = 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80';
                              }
                              target.src = fallbackUrl;
                            }}
                          />
                          {/* Hover baseline band */}
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0e7490] z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Product details */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-[10px] font-extrabold text-[#358082] uppercase tracking-widest">
                                {product.category === 'composites' ? 'Composites' : product.category === 'tools' ? 'Tools' : 'X-Ray & Imaging'}
                              </span>
                              <span className="text-[9px] font-bold font-mono text-[#0e7490] bg-[#eff7f8] border border-[#358082]/15 px-2 py-0.5 rounded">
                                {product.catalogRef}
                              </span>
                            </div>
                            <h3
                              onClick={() => {
                                setSelectedProductForDetail(product);
                                navigateToPage('product-detail');
                              }}
                              className="text-base font-bold text-[#1a5a5c] tracking-tight group-hover:text-[#0e7490] transition-colors line-clamp-1 cursor-pointer hover:underline text-left"
                            >
                              {product.name}
                            </h3>
                            <p style={{ color: '#358082' }} className="text-xs mt-2 line-clamp-3 leading-relaxed text-left">
                              {product.description}
                            </p>

                            {/* Features checklist */}
                            <div className="mt-4 space-y-1.5">
                              {product.features.slice(0, 2).map((feat, i) => (
                                <div key={i} className="flex items-start gap-1.5 text-xs text-[#358082]/70">
                                  <ChevronRight className="w-3.5 h-3.5 text-[#0e7490] shrink-0 mt-0.5" />
                                  <span className="line-clamp-1 text-[#358082]/90 font-medium">{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="mt-6 pt-5 border-t border-[#358082]/15">
                            <button
                              onClick={() => {
                                setSelectedProductForDetail(product);
                                navigateToPage('product-detail');
                              }}
                              style={{ backgroundColor: 'rgba(6,182,212,0.12)', color: '#0e7490', border: '1px solid rgba(6,182,212,0.35)', borderRadius: '6px' }}
                              className="w-full py-2.5 text-xs font-bold uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:bg-[rgba(6,182,212,0.22)] hover:-translate-y-0.5"
                            >
                              <FileText className="w-4 h-4" />
                              <span>More Details</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Link to view whole catalog */}
                <div className="text-center mt-12">
                  <button
                    onClick={() => navigateToPage('products')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2c8fa0] hover:bg-[#1a6e7e] text-white text-xs font-bold uppercase tracking-wider transition-all rounded-[6px] shadow-sm cursor-pointer"
                  >
                    <span>View Full Product Catalog</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* Most Sold Products Section */}
            <section id="most-sold" className="py-20 bg-[#f4f9fa]/50 border-t border-[#2c8fa0]/15">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="text-[10px] bg-[#e2f1f4] border border-[#2c8fa0]/25 text-[#2c8fa0] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest inline-block mb-4">
                    Trusted Clinical Favorites
                  </span>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1a3a42] tracking-tight">
                    Most Sold Products
                  </h2>
                  <p className="text-sm text-[#6b8f96] mt-3 leading-relaxed">
                    Our top-selling clinical essentials, highly recommended by leading dental professionals and clinics for their reliable performance and CE-certified quality.
                  </p>
                </div>

                {/* Grid of Most Sold Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {mostSoldProducts.map((product) => {
                    const inCartQty = cart.find(item => item.product.id === product.id)?.quantity || 0;
                    return (
                      <div
                        key={product.id}
                        style={{ backgroundColor: '#ffffff', border: '1px solid rgba(53,128,130,0.15)', borderRadius: '16px' }}
                        className="overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.13)] hover:-translate-y-1 hover:border-[#1a5a5c]/40 transition-all duration-300 flex flex-col h-full group"
                      >
                        {/* Image wrapper */}
                        <div
                          onClick={() => {
                            setSelectedProductForDetail(product);
                            navigateToPage('product-detail');
                          }}
                          className="relative aspect-[4/3] bg-white border-b border-[#358082]/15 flex items-center justify-center p-4 cursor-pointer overflow-hidden"
                        >
                          {/* CE Certified badge */}
                          <span className="absolute top-2.5 left-2.5 z-20 text-[8px] font-extrabold uppercase tracking-wider text-white bg-[#1a3a42] px-2 py-1 rounded shadow-sm">
                            CE Certified
                          </span>
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            referrerPolicy="no-referrer"
                            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              const currentUrl = target.src;
                              let driveId: string | null = null;
                              const idMatch = currentUrl.match(/(?:id=|\/d\/|d\/)([a-zA-Z0-9_-]{25,50})/);
                              if (idMatch) {
                                driveId = idMatch[1];
                              }
                              if (driveId) {
                                if (!currentUrl.includes('drive.google.com/thumbnail')) {
                                  target.src = `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`;
                                  return;
                                }
                              }
                              // Fallback images matching categories
                              target.onerror = null;
                              let fallbackUrl = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80';
                              if (product.category === 'composites') {
                                fallbackUrl = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80';
                              } else if (product.category === 'tools') {
                                fallbackUrl = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80';
                              } else if (product.category === 'imaging') {
                                fallbackUrl = 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80';
                              }
                              target.src = fallbackUrl;
                            }}
                          />
                          {/* Hover baseline band */}
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0e7490] z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Product details */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-[10px] font-extrabold text-[#358082] uppercase tracking-widest">
                                {product.category === 'composites' ? 'Composites' : product.category === 'tools' ? 'Tools' : 'X-Ray & Imaging'}
                              </span>
                              <span className="text-[9px] font-bold font-mono text-[#0e7490] bg-[#eff7f8] border border-[#358082]/15 px-2 py-0.5 rounded">
                                {product.catalogRef}
                              </span>
                            </div>
                            <h3
                              onClick={() => {
                                setSelectedProductForDetail(product);
                                navigateToPage('product-detail');
                              }}
                              className="text-base font-bold text-[#1a5a5c] tracking-tight group-hover:text-[#0e7490] transition-colors line-clamp-1 cursor-pointer hover:underline text-left"
                            >
                              {product.name}
                            </h3>
                            <p style={{ color: '#358082' }} className="text-xs mt-2 line-clamp-3 leading-relaxed text-left">
                              {product.description}
                            </p>

                            {/* Features checklist */}
                            <div className="mt-4 space-y-1.5">
                              {product.features.slice(0, 2).map((feat, i) => (
                                <div key={i} className="flex items-start gap-1.5 text-xs text-[#358082]/70">
                                  <ChevronRight className="w-3.5 h-3.5 text-[#0e7490] shrink-0 mt-0.5" />
                                  <span className="line-clamp-1 text-[#358082]/90 font-medium">{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="mt-6 pt-5 border-t border-[#358082]/15">
                            <button
                              onClick={() => {
                                setSelectedProductForDetail(product);
                                navigateToPage('product-detail');
                              }}
                              style={{ backgroundColor: 'rgba(6,182,212,0.12)', color: '#0e7490', border: '1px solid rgba(6,182,212,0.35)', borderRadius: '6px' }}
                              className="w-full py-2.5 text-xs font-bold uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:bg-[rgba(6,182,212,0.22)] hover:-translate-y-0.5"
                            >
                              <FileText className="w-4 h-4" />
                              <span>More Details</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
            onSelectProduct={(product) => {
              setSelectedProductForDetail(product);
              navigateToPage('product-detail');
            }}
            onCategoryChange={setActiveCategory}
          />
        )}

        {/* PRODUCT DETAIL VIEW */}
        {currentPage === 'product-detail' && selectedProductForDetail && (
          <ProductDetail
            product={selectedProductForDetail}
            onBack={() => {
              if (window.history.length > 1) {
                window.history.back();
              } else {
                navigateToPage('products');
              }
            }}
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

