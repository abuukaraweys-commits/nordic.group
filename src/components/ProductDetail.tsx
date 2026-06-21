import { useState } from 'react';
import { Product, CategoryKey } from '../types';
import { CATEGORIES } from '../data';
import { 
  ArrowLeft, 
  MapPin, 
  BadgeCheck, 
  Plus, 
  Minus, 
  ShoppingCart, 
  Building,
  Info
} from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  cartItems?: { product: Product; quantity: number }[];
}

export default function ProductDetail({
  product,
  onBack,
  onAddToCart,
  cartItems = []
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);

  const getCartItemQty = (productId: string): number => {
    return cartItems.find((item) => item.product.id === productId)?.quantity || 0;
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
  };

  // Category Info matching the product category
  const categoryInfo = CATEGORIES.find((c) => c.key === product.category);

  // Get image URL or fallback structure
  const getProductImageSrc = () => {
    if (imageError || !product.imageUrl) {
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
      return fallbackUrl;
    }

    // Google drive thumbnail format is very robust, bypass standard formats
    if (product.imageUrl.includes('drive.google.com') && !product.imageUrl.includes('thumbnail')) {
      const idMatch = product.imageUrl.match(/(?:id=|\/d\/|d\/)([a-zA-Z0-9_-]{25,50})/);
      if (idMatch && idMatch[1]) {
        return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
      }
    }
    return product.imageUrl;
  };

  const currentlyInCart = getCartItemQty(product.id);

  return (
    <div id="product-detail-view" className="py-12 bg-[#f4f7f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Breadcrumb actions */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#0e7490] hover:text-[#1a5a5c] bg-white border border-[#358082]/20 rounded-xl transition-all cursor-pointer shadow-xs mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </button>

        {/* Outer details panel */}
        <div className="bg-white rounded-3xl border border-[#bfc8ca]/30 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* LEFT COLUMN: Gallery & basic metadata */}
          <div className="lg:col-span-5 bg-[#fafbfc] border-r border-[#bfc8ca]/20 p-8 flex flex-col justify-between">
            <div className="flex-1 flex items-center justify-center min-h-[320px] lg:min-h-[440px] p-6 bg-white rounded-2xl border border-[#e1e3e4] overflow-hidden relative">
              <img
                src={getProductImageSrc()}
                alt={product.name}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="max-w-full max-h-[380px] object-contain transition-transform duration-300 hover:scale-102"
              />
              
              {/* Dynamic decorative category flag */}
              <span className="absolute top-4 left-4 text-[10px] font-extrabold text-[#0e7490] bg-[#eff7f8] border border-[#a5f3fc]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                {categoryInfo?.title || product.category}
              </span>
            </div>

            <div className="mt-6 space-y-3.5">
              <div className="flex items-center justify-between gap-4 text-xs font-medium text-gray-500 bg-white p-3 rounded-xl border border-[#e1e3e4]">
                <span className="font-bold">Catalog Ref Number:</span>
                <span className="font-mono text-[#0e7490] font-black bg-[#eff7f8] px-2.5 py-0.5 rounded border border-[#358082]/10">{product.catalogRef}</span>
              </div>
              
              <div className="flex items-center gap-3 bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/40 text-amber-900 text-xs">
                <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Authorized medical distribution package. Autoclave compatible structures are guaranteed across all dental mechanical usage patterns.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Specific specs, details, description and Add to Cart action */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* Top metadata row */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-black bg-[#eef5f6] text-[#2c8fa0] px-3 py-1 rounded border border-[#2c8fa0]/25 uppercase tracking-widest">
                  {categoryInfo?.title}
                </span>
                
                <span className="text-[10px] font-black text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded uppercase tracking-widest inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Sourced in {product.origin}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a3a42] tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-sm text-[#40484a] mt-4 leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Merits & Clinical benefits */}
              <div className="pt-2 border-t border-[#bfc8ca]/20">
                <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Clinical Benefits & Features</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex gap-2.5 text-xs text-[#40484a] leading-normal font-medium bg-[#fafbfc] border border-[#e1e3e4]/70 p-2.5 rounded-xl">
                      <BadgeCheck className="w-4.5 h-4.5 text-[#2c8fa0] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Matrix */}
              <div className="border-t border-[#bfc8ca]/20 pt-4">
                <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Technical Specifications Matrix</span>
                <div className="border border-[#e1e3e4] rounded-xl overflow-hidden divide-y divide-[#e1e3e4] text-xs">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex p-3 justify-between font-medium bg-white hover:bg-slate-50/50 transition-colors">
                      <span className="text-gray-500 font-bold">{key}</span>
                      <span className="text-[#191c1d] font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PURCHASE & CART CONTROLS */}
            <div className="pt-6 border-t border-[#bfc8ca]/20 bg-[#fafbfc] -mx-8 -mb-8 p-8 flex flex-col sm:flex-row items-center gap-5 justify-between">
              
              {/* Quantity Changer widget */}
              <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Select Quantities</span>
                <div className="flex items-center bg-white border border-[#bfc8ca]/60 rounded-xl overflow-hidden p-1 min-w-[130px] justify-between">
                  <button
                    onClick={handleDecrease}
                    disabled={quantity <= 1}
                    className="p-2 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-600 disabled:opacity-40 disabled:hover:bg-transparent transition-all cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-sm font-bold text-[#191c1d] px-3 select-none">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrease}
                    className="p-2 rounded-lg hover:bg-emerald-50 text-gray-500 hover:text-emerald-600 transition-all cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart checkout button wrapper */}
              <div className="w-full sm:flex-1 flex flex-col gap-2">
                <button
                  onClick={handleAddToCartClick}
                  className="w-full py-4 bg-[#2c8fa0] hover:bg-[#1a6e7e] text-white rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all cursor-pointer hover:shadow-md active:scale-99 flex items-center justify-center gap-2.5"
                >
                  <ShoppingCart className="w-4.5 h-4.5" />
                  <span>Add To Proposal Cart</span>
                </button>
                
                {currentlyInCart > 0 && (
                  <p className="text-[11px] text-center text-emerald-800 font-bold bg-emerald-50/70 border border-emerald-100/60 py-1 rounded-lg">
                    ✨ {currentlyInCart} of this product already in proposal list
                  </p>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
