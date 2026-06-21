import { useState, useMemo, useEffect } from 'react';
import { Product, CategoryKey } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';
import { Search, MapPin, BadgeCheck, FileText, X, ChevronRight } from 'lucide-react';

interface ProductCatalogProps {
  initialCategory: CategoryKey | null;
  onContactProduct: (product: Product) => void;
  onNavigateToContact: () => void;
  products?: Product[];
  onAddToCart?: (product: Product) => void;
  cartItems?: { product: Product; quantity: number }[];
  onSelectProduct?: (product: Product) => void;
}

export default function ProductCatalog({ 
  initialCategory, 
  onContactProduct,
  onNavigateToContact,
  products = PRODUCTS,
  onAddToCart,
  cartItems = [],
  onSelectProduct
}: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | 'all'>(
    initialCategory || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductDetails, setSelectedProductDetails] = useState<Product | null>(null);

  const getCartItemQty = (productId: string): number => {
    return cartItems.find((item) => item.product.id === productId)?.quantity || 0;
  };

  // Sync category if initialCategory changes
  useEffect(() => {
    setSelectedCategory(initialCategory || 'all');
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.catalogRef.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery, products]);

  const activeCategoryInfo = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return CATEGORIES.find((c) => c.key === selectedCategory) || null;
  }, [selectedCategory]);

  // Maps category key to custom catalog code
  const getCatalogCode = (key: CategoryKey): string => {
    switch (key) {
      case 'composites': return 'NG-FM';
      case 'tools': return 'NG-UT';
      case 'imaging': return 'NG-RO';
      default: return 'NG-CA';
    }
  };

  return (
    <div id="product-catalog-section" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PRODUKTSIDA - Hero-banner */}
        <div className="bg-[#eff7f8] border border-[#41808F]/20 rounded-3xl p-8 sm:p-12 mb-12 text-center max-w-7xl mx-auto relative overflow-hidden">
          {/* Subtle graphic overlay */}
          <div className="absolute right-0 top-0 opacity-10 select-none pointer-events-none transform translate-x-12 -translate-y-12">
            <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="#41808F" strokeWidth="2" />
              <path d="M50 20v60M20 50h60" stroke="#41808F" strokeWidth="2" />
            </svg>
          </div>

          <span className="text-[10px] font-black tracking-widest text-[#41808F] uppercase bg-white border border-[#41808F]/20 px-3.5 py-1.5 rounded-full">
            Nordic Group Reference Catalog
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#191c1d] tracking-tight mt-4">
            Premium Medical-Grade Dental Products
          </h1>
          <p className="text-sm text-[#40484a] max-w-2xl mx-auto mt-3 leading-relaxed">
            Our collection is environmentally certified and handpicked to ensure standard clinical efficacy. Discover high-performance, certified products for dental professionals.
          </p>
        </div>

        {/* Filterknappar & Sökruta */}
        <div className="flex flex-col lg:flex-row gap-5 items-stretch lg:items-center justify-between pb-8 border-b border-[#e1e3e4] mb-10">
          
          {/* Filterknappar */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all tracking-wider border cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#41808F] border-transparent text-white shadow-sm'
                  : 'bg-[#f8f9fa] border-[#bfc8ca]/30 text-[#40484a] hover:bg-[#eff7f8]'
              }`}
            >
              All ({products.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = products.filter((p) => p.category === cat.key).length;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all tracking-wider border cursor-pointer ${
                    selectedCategory === cat.key
                      ? 'bg-[#41808F] border-transparent text-white shadow-sm'
                      : 'bg-[#f8f9fa] border-[#bfc8ca]/30 text-[#40484a] hover:bg-[#eff7f8]'
                  }`}
                >
                  {cat.title} ({count})
                </button>
              );
            })}
          </div>

          {/* Sökruta */}
          <div className="relative min-w-[280px]">
            <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-[#40484a]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name or reference code..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#f8f9fa] rounded-lg border border-[#bfc8ca]/45 text-sm font-medium focus:outline-none focus:border-[#41808F] focus:ring-1 focus:ring-[#41808F]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-xs text-gray-400 hover:text-[#191c1d]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Selected Category Highlights banner */}
        {activeCategoryInfo && (
          <div className="bg-[#f8f9fa] border border-[#e1e3e4] rounded-2xl p-6 mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="max-w-2xl">
              <h3 className="text-lg font-extrabold text-[#191c1d] tracking-tight">{activeCategoryInfo.title}</h3>
              <p className="text-xs text-[#40484a] mt-1.5 leading-normal">{activeCategoryInfo.fullDescription}</p>
            </div>
            <div className="flex gap-2.5 self-stretch md:self-auto shrink-0 border-t md:border-t-0 border-[#e1e3e4] pt-4 md:pt-0">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white px-2.5 py-1.5 rounded-md border border-[#bfc8ca]/30">CE-Certified</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white px-2.5 py-1.5 rounded-md border border-[#bfc8ca]/30">Swedish Manufactured / Tested</span>
            </div>
          </div>
        )}

        {/* Results Info */}
        <div className="mb-6 flex justify-between items-center text-xs text-slate-500 font-bold uppercase tracking-wider">
          <span>Showing {filteredProducts.length} matching products</span>
          {searchQuery && <span>Filtered by term: "{searchQuery}"</span>}
        </div>

        {/* Products Grid Vault Container */}
        <div className="bg-[#358082]/[0.02] border border-[#358082]/10 rounded-3xl p-6 sm:p-10 mb-12 shadow-xs relative overflow-hidden">
          {/* Subtle design accent inside the panel */}
          <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-[0.05] scale-150">
            <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="#0e7490" strokeWidth="1" />
            </svg>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-[#358082]/20 rounded-2xl bg-white">
              <p className="text-sm font-semibold text-[#358082]">No certified dental products matched your filter.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-4 py-2 bg-[#358082]/15 text-[#0e7490] text-xs font-bold uppercase tracking-wider rounded-lg border border-[#358082]/30 cursor-pointer hover:bg-[#358082]/25 transition-all animate-none"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  style={{
                    backgroundColor: 'rgba(53,128,130,0.06)',
                    border: '1px solid rgba(53,128,130,0.25)',
                    borderRadius: '12px'
                  }}
                  className="overflow-hidden hover:shadow-lg hover:border-[#1a5a5c]/40 transition-all duration-300 flex flex-col h-full group bg-white bg-opacity-40"
                >
                  {/* Image Wrapper */}
                  <div 
                    onClick={() => onSelectProduct?.(product)}
                    className="relative aspect-[4/3] bg-white border-b border-[#358082]/15 flex items-center justify-center p-4 overflow-hidden cursor-pointer"
                  >
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const currentUrl = target.src;
                          
                          // Check if there is a Google Drive file ID
                          let driveId: string | null = null;
                          const idMatch = currentUrl.match(/(?:id=|\/d\/|d\/)([a-zA-Z0-9_-]{25,50})/);
                          if (idMatch) {
                            driveId = idMatch[1];
                          }
                          
                          if (driveId) {
                            // If we weren't on 'drive.google.com/thumbnail', try it as it is extremely reliable
                            if (!currentUrl.includes('drive.google.com/thumbnail')) {
                              target.src = `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`;
                              return;
                            }
                            // Next attempt: docs.google.com/uc
                            if (!currentUrl.includes('uc?export=view')) {
                              target.src = `https://docs.google.com/uc?export=view&id=${driveId}`;
                              return;
                            }
                            // Next attempt: lh3.googleusercontent.com/d/
                            if (!currentUrl.includes('lh3.googleusercontent.com/d/')) {
                              target.src = `https://lh3.googleusercontent.com/d/${driveId}`;
                              return;
                            }
                          }

                          // If all Google Drive endpoints failed, apply category-specific Unsplash mockup as high-quality fallback
                          target.onerror = null; // Prevent loop
                          let fallbackUrl = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80';
                          if (product.category === 'composites') {
                            fallbackUrl = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80';
                          } else if (product.category === 'tools') {
                            fallbackUrl = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80';
                          } else if (product.category === 'imaging') {
                            fallbackUrl = 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80';
                          } else if (product.category === 'collections') {
                            fallbackUrl = 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80';
                          }
                          target.src = fallbackUrl;
                        }}
                        className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-102"
                      />
                    ) : (
                      // Subtle abstract modern dental gradient
                      <div className="absolute inset-0 bg-gradient-to-br from-[#eff7f8]/30 to-[#eef5f6]/10" />
                    )}
                    
                    {/* Aesthetic baseline color band */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0e7490] z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Produktkort Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1.5 mb-2.5 flex-wrap">
                        <span className="text-[10px] font-extrabold text-[#358082] uppercase tracking-widest">
                          {CATEGORIES.find((c) => c.key === product.category)?.title}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-bold font-mono text-[#0e7490] bg-[#eff7f8] border border-[#358082]/15 px-2 py-0.5 rounded">
                            {product.catalogRef}
                          </span>
                        </div>
                      </div>
                      <h4 
                        onClick={() => onSelectProduct?.(product)}
                        className="text-base font-bold text-[#1a5a5c] tracking-tight group-hover:text-[#0e7490] transition-colors line-clamp-1 cursor-pointer hover:underline"
                      >
                        {product.name}
                      </h4>
                      <p 
                        style={{ color: '#358082' }}
                        className="text-xs mt-2 line-clamp-3 leading-relaxed"
                      >
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

                    {/* Actions with custom layout metrics matching user styles */}
                    <div className="mt-6 pt-5 border-t border-[#358082]/15 flex items-center gap-3">
                      <button
                        onClick={() => {
                          if (onSelectProduct) {
                            onSelectProduct(product);
                          } else {
                            setSelectedProductDetails(product);
                          }
                        }}
                        style={{
                          backgroundColor: 'rgba(6,182,212,0.12)',
                          color: '#0e7490',
                          border: '1px solid rgba(6,182,212,0.35)',
                          borderRadius: '6px'
                        }}
                        className="flex-1 py-2.5 text-xs font-bold uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:bg-[rgba(6,182,212,0.22)] hover:-translate-y-0.5"
                      >
                        <FileText className="w-4 h-4" />
                        Specs & Info
                      </button>
                      <button
                        onClick={() => {
                          if (onAddToCart) {
                            onAddToCart(product);
                          } else {
                            onContactProduct(product);
                          }
                        }}
                        style={{
                          backgroundColor: getCartItemQty(product.id) > 0 ? '#1a5a5c' : 'rgba(6,182,212,0.12)',
                          color: getCartItemQty(product.id) > 0 ? '#ffffff' : '#0e7490',
                          border: getCartItemQty(product.id) > 0 ? '1px solid #1a5a5c' : '1px solid rgba(6,182,212,0.35)',
                          borderRadius: '6px'
                        }}
                        className="flex-1 py-2.5 text-xs font-bold uppercase transition-all tracking-wider cursor-pointer text-center hover:opacity-95 hover:-translate-y-0.5 flex items-center justify-center gap-1"
                      >
                        {getCartItemQty(product.id) > 0 ? `In Cart (${getCartItemQty(product.id)})` : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA längst ner på produktsidan */}
        <div className="mt-16 bg-[#f8f9fa] border border-[#e1e3e4] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-extrabold text-[#191c1d] tracking-tight">Can't find the product you are looking for?</h3>
            <p className="text-xs text-[#40484a] mt-1 pr-0 sm:pr-8 leading-normal">
              We cooperate with hundreds of certified manufacturers in Northern Europe. Contact us directly and we will source the dedicated dental devices or items your clinic needs.
            </p>
          </div>
          <button
            onClick={onNavigateToContact}
            className="w-full sm:w-auto shrink-0 px-6 py-3 bg-[#41808F] hover:bg-[#316470] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center"
          >
            Contact Sourcing Team
          </button>
        </div>

      </div>

      {/* Individual Product Detailed Specs Drawer */}
      {selectedProductDetails && (
        <div className="fixed inset-0 bg-[#191c1d]/60 backdrop-blur-xs flex items-center justify-center p-4 z-[110] animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#bfc8ca]/30 flex flex-col max-h-[85vh]">
            
            {/* Modal header */}
            <div className="px-6 py-5 bg-[#f8f9fa] border-b border-[#e1e3e4] flex justify-between items-center shrink-0">
              <div>
                <span className="text-[10px] font-black text-[#41808F] uppercase tracking-widest bg-white border border-[#41808F]/20 px-2.5 py-1 rounded-md">
                  {selectedProductDetails.catalogRef}
                </span>
                <h3 className="text-base font-extrabold text-[#191c1d] mt-2 tracking-tight">Detailed Specifications</h3>
              </div>
              <button
                onClick={() => setSelectedProductDetails(null)}
                className="p-1.5 rounded-lg text-gray-500 hover:bg-white hover:text-black shrink-0 transition-all border border-[#bfc8ca]/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Spec Sheet details */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div>
                <h4 className="text-sm font-extrabold text-[#191c1d]">{selectedProductDetails.name}</h4>
                <p className="text-xs text-[#40484a] mt-1.5 leading-normal">{selectedProductDetails.description}</p>
              </div>

              {/* Sourcing credentials */}
              <div className="bg-[#eff7f8] rounded-xl p-3 border border-[#41808F]/15 flex items-center gap-3">
                <div className="text-xs">
                  <p className="font-bold text-[#191c1d]">Scandinavian Distribution</p>
                  <p className="text-gray-500 mt-0.5">Fully meets EU specifications for medical biosecurity.</p>
                </div>
              </div>

              {/* Merits */}
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Clinical Features</span>
                <div className="space-y-2">
                  {selectedProductDetails.features.map((feat, i) => (
                    <div key={i} className="flex gap-2 text-xs text-[#40484a] leading-normal font-medium">
                      <BadgeCheck className="w-4 h-4 text-[#41808F] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Properties matrix */}
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2.5">Technical Datasheet</span>
                <div className="border border-[#e1e3e4] rounded-xl overflow-hidden divide-y divide-[#e1e3e4] text-xs">
                  {Object.entries(selectedProductDetails.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-center p-3 gap-2 justify-between font-medium bg-white">
                      <span className="text-gray-500 font-bold shrink-0">{key}</span>
                      <span className="text-[#191c1d] text-left sm:text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[#bfc8ca]/30" />

              <div className="text-[11px] text-gray-500 leading-normal bg-amber-50 rounded-lg p-3 text-amber-800 border border-amber-200/40">
                ⚠️ Information: Direct distribution authorized for dental clinics. Perfect autoclave compatibility is guaranteed under mechanical processing.
              </div>
            </div>

            {/* Actions Footer */}
            <div className="p-4 bg-[#f8f9fa] border-t border-[#e1e3e4] flex items-center justify-end gap-3 shrink-0">
              <button
                onClick={() => setSelectedProductDetails(null)}
                className="px-4 py-2 border border-[#bfc8ca]/45 rounded-lg text-xs font-bold uppercase text-[#40484a] id-btn-close-specs hover:bg-white cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const prod = selectedProductDetails;
                  setSelectedProductDetails(null);
                  if (onAddToCart && prod) {
                    onAddToCart(prod);
                  } else if (prod) {
                    onContactProduct(prod);
                  }
                }}
                className="px-5 py-2 bg-[#41808F] hover:bg-[#316470] text-white rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                {selectedProductDetails && getCartItemQty(selectedProductDetails.id) > 0 
                  ? `Add More (${getCartItemQty(selectedProductDetails.id)} in Cart)` 
                  : 'Add to Cart'}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
