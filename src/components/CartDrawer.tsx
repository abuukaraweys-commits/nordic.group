import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  FileCheck 
} from 'lucide-react';
import { Product } from '../types';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
  onClearCart?: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  // Constants for messaging channels as specified by customer
  const RECIPIENT_EMAIL = 'email@nordicgroup.com';
  const RECIPIENT_WHATSAPP = '+252617453777'; // Somalia recipient contact number

  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fullName, setFullName] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const formSectionRef = useRef<HTMLDivElement>(null);

  // Initialize and reset relevant cart display states on open
  useEffect(() => {
    if (isOpen) {
      setShowQuoteForm(false);
      setSuccess(false);
    }
  }, [isOpen]);

  // Smooth scroll to the form element when displayed
  useEffect(() => {
    if (showQuoteForm && formSectionRef.current) {
      setTimeout(() => {
        formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [showQuoteForm]);

  if (!isOpen) return null;

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Format cart list items for export
  const getProductsSummaryString = () => {
    return cartItems
      .map((item, idx) => `• ${item.product.name} (Qty: ${item.quantity}, Ref: ${item.product.catalogRef})`)
      .join('\n');
  };

  // Log quotation activity to local dashboard state
  const logInquiryToLocalDatabase = () => {
    const productsString = cartItems
      .map(item => `${item.product.name} (x${item.quantity})`)
      .join(', ');

    const newInquiry = {
      id: `INQ-${Math.floor(4000 + Math.random() * 5900)}`,
      name: `${fullName} ${clinicName ? `(${clinicName})` : ''}`,
      email: 'not.provided@clinic.com',
      phone: phoneNumber,
      message: `[Cart Request] Sourced Items: ${productsString}`,
      date: new Date().toISOString().split('T')[0],
      status: 'new' as const
    };

    try {
      const existing = localStorage.getItem('nordic_inquiries');
      const parsed = existing ? JSON.parse(existing) : [];
      localStorage.setItem('nordic_inquiries', JSON.stringify([newInquiry, ...parsed]));
    } catch (e) {
      console.error('Error recording admin inquiry:', e);
    }
  };

  // Button 1: Send via WhatsApp
  const handleSendWhatsApp = () => {
    if (!fullName.trim() || !phoneNumber.trim()) return;
    
    logInquiryToLocalDatabase();

    const productsLines = getProductsSummaryString();
    const message = `New Quote Request:
Customer Name: ${fullName.trim()}
Clinic Name: ${clinicName.trim() || 'Not Specified'}
Phone Number: ${phoneNumber.trim()}

Requested Products:
${productsLines}`;

    // Strip non-numeric helper characters out of the target sender number
    const numericWhatsApp = RECIPIENT_WHATSAPP.replace(/[^\d]/g, '');
    const url = `https://wa.me/${numericWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    setSuccess(true);
  };

  // Button 2: Send via Email
  const handleSendEmail = () => {
    if (!fullName.trim() || !phoneNumber.trim()) return;

    logInquiryToLocalDatabase();

    const productsLines = getProductsSummaryString();

    const subject = `Clinical Quote Request - ${clinicName.trim() || fullName.trim()}`;
    const body = `New Clinical Quote Request

Customer Name: ${fullName.trim()}
Clinic Name: ${clinicName.trim() || 'Not Specified'}
Phone Number: ${phoneNumber.trim()}

Products Requisition List:
${productsLines}

Sent via Nordic Group Dental online portal.`;

    const url = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;

    setSuccess(true);
  };

  const handleDone = () => {
    onClearCart?.();
    setShowQuoteForm(false);
    setSuccess(false);
    setFullName('');
    setClinicName('');
    setPhoneNumber('');
    onClose();
  };

  const isFormValid = fullName.trim() !== '' && phoneNumber.trim() !== '';

  return (
    <div
      id="quote-cart-drawer-overlay"
      className="fixed inset-0 bg-slate-950/60 backdrop-blur-[2px] z-[120] flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="quote-cart-drawer-panel"
        className="bg-white w-[460px] max-w-[95vw] h-screen shadow-2xl flex flex-col justify-between relative animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="p-6 border-b border-[#e1e3e4] shrink-0 bg-[#0e3d3e] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#2c8fa0]/20 border border-[#2c8fa0]/30 flex items-center justify-center text-cyan-300">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white tracking-tight">Your Requisition Cart</h3>
              <p className="text-xs text-slate-300 mt-0.5 font-medium">{totalItemsCount} dental items Sourced</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 border border-slate-600 rounded-lg text-slate-350 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic drawer middle body */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {success ? (
            /* Success View */
            <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-[#f0f8fa] border border-[#2c8fa0]/25 rounded-full flex items-center justify-center text-[#218090] mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-base font-extrabold text-[#1a3a42] tracking-tight">Your Requisition Dispatch Ready!</h3>
              <p className="text-xs text-[#6b8f96] max-w-sm mx-auto leading-relaxed">
                The quotation has been compiled automatically. Click clear below to edit your list or start a new requisition session.
              </p>
              
              <div className="bg-[#f0f8fa] border border-[#2c8fa0]/20 rounded-xl p-4 text-left space-y-2 mt-4">
                <p className="text-xs text-slate-600 font-medium font-sans">
                  👩‍💻 If your clinical browser blocks external apps, click or type to contact our logistical administrators:
                </p>
                <p className="text-xs text-slate-700 font-semibold">💬 WhatsApp: <strong className="font-mono text-[#2c8fa0]">{RECIPIENT_WHATSAPP}</strong></p>
                <p className="text-xs text-slate-700 font-semibold">📧 Email: <strong className="text-[#2c8fa0]">{RECIPIENT_EMAIL}</strong></p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleDone}
                  className="w-full py-3.5 bg-[#2c8fa0] hover:bg-[#1a6e7e] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Clear Requisition & Close
                </button>
              </div>
            </div>
          ) : (
            /* Cart Items OR Discrete Quote Form depending on steps */
            <div className="space-y-6 animate-in fade-in duration-200">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                  <div className="w-16 h-16 rounded-full bg-slate-50 border border-dashed border-[#bfc8ca]/40 flex items-center justify-center text-gray-300 mb-4">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-extrabold text-[#1a3a42]">Requisition list is empty</p>
                  <p className="text-xs text-[#6b8f96] mt-1.5 max-w-xs leading-relaxed">
                    Browse our high-quality Nordic dental tools and click "Add to Cart" to start compiling your customized proposal list.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-5 py-2.5 bg-[#2c8fa0] hover:bg-[#1a6e7e] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Browse Catalog
                  </button>
                </div>
              ) : !showQuoteForm ? (
                /* STEP 1: RENDER CART ITEMS LIST COVERED */
                <div className="space-y-4">
                  <div className="bg-[#f0f8fa] rounded-xl p-3.5 border border-[#2c8fa0]/15 text-xs text-[#1a3a42] font-semibold leading-relaxed">
                    📦 Add all medical/dental supplies you need, adjust quantities, then request price quotes on WhatsApp or Email instantly with no payment needed.
                  </div>

                  {/* Render Current List Items */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={item.product.id}
                        className="p-4 bg-white border border-[#e1e3e4] rounded-xl hover:border-[#2c8fa0]/30 transition-all flex items-start gap-4 shadow-xs"
                      >
                        {/* Product Image */}
                        <div className="w-14 h-14 bg-white rounded-lg border border-[#e1e3e4] overflow-hidden shrink-0 flex items-center justify-center p-1">
                          {item.product.imageUrl ? (
                            <img
                              src={item.product.imageUrl}
                              alt={item.product.name}
                              referrerPolicy="no-referrer"
                              className="max-w-full max-h-full object-contain"
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
                                  // Primary fallback: use highly-compatible drive thumbnail
                                  if (!currentUrl.includes('drive.google.com/thumbnail')) {
                                    target.src = `https://drive.google.com/thumbnail?id=${driveId}&sz=w250`;
                                    return;
                                  }
                                  // Secondary fallback: docs.google.com/uc
                                  if (!currentUrl.includes('uc?export=view')) {
                                    target.src = `https://docs.google.com/uc?export=view&id=${driveId}`;
                                    return;
                                  }
                                }
                                
                                target.onerror = null;
                                target.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=150&q=80';
                              }}
                            />
                          ) : (
                            <div className="w-full h-full bg-slate-50 flex items-center justify-center text-[10px] text-gray-400 font-mono">
                              Item
                            </div>
                          )}
                        </div>

                        {/* Product details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="text-xs font-extrabold text-[#1a3a42] tracking-tight truncate">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-md cursor-pointer"
                              title="Remove"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex gap-2 text-[9px] font-bold text-gray-400 font-mono mt-0.5">
                            <span>{item.product.catalogRef}</span>
                            <span>•</span>
                            <span className="text-[#2c8fa0] uppercase tracking-wider">{item.product.origin}</span>
                          </div>

                          {/* Modifiers */}
                          <div className="mt-2.5 flex items-center justify-between">
                            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Quantity:</span>
                            
                            <div className="flex items-center gap-1 border border-slate-200 bg-white rounded-lg p-0.5">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                                className="p-1 text-[#40484a] hover:bg-slate-50 rounded transition-all cursor-pointer disabled:opacity-50"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-extrabold text-[#1a3a42] font-mono min-w-[18px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="p-1 text-[#40484a] hover:bg-slate-50 rounded transition-all cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* STEP 2: SHOW QUOTE FORM WITH SIDE-BY-SIDE BUTTONS DIRECTLY BELOW IT */
                <div className="space-y-5 animate-in slide-in-from-right duration-300">
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setShowQuoteForm(false)}
                      className="text-xs font-bold text-[#2c8fa0] hover:underline flex items-center gap-1"
                    >
                      ← Back to edit cart
                    </button>
                    <span className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-widest">Quote Request</span>
                  </div>

                  <div className="bg-[#f0f8fa] rounded-xl p-3.5 border border-[#2c8fa0]/15 text-xs text-[#1a3a42] font-semibold leading-relaxed">
                    📝 Enter your details below. Clicking either dispatch button will instantly launch your preferred app with a draft message of your selected components. No checkout or payment is required.
                  </div>

                  {/* The Request Form */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4 shadow-xs">
                    <div>
                      <label className="block text-[10px] font-extrabold text-[#40484a] uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Dr. John Doe"
                        className={`w-full px-3 py-2 text-xs bg-white rounded-lg border text-slate-800 font-sans focus:outline-none shadow-sm transition-colors ${
                          fullName.trim() === '' ? 'border-amber-300 focus:border-amber-500 bg-amber-50/10' : 'border-slate-200 focus:border-[#2c8fa0]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold text-[#40484a] uppercase tracking-wider mb-1.5">
                        Clinic Name
                      </label>
                      <input
                        type="text"
                        value={clinicName}
                        onChange={(e) => setClinicName(e.target.value)}
                        placeholder="Nordic Dental Clinic"
                        className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-200 text-slate-800 font-sans focus:outline-none focus:border-[#2c8fa0] shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold text-[#40484a] uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="e.g. +252 61 745 3777"
                        className={`w-full px-3 py-2 text-xs bg-white rounded-lg border text-slate-800 font-mono focus:outline-none shadow-sm transition-colors ${
                          phoneNumber.trim() === '' ? 'border-amber-300 focus:border-amber-500 bg-amber-50/10' : 'border-slate-200 focus:border-[#2c8fa0]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* BOTH BUTTONS SIDE-BY-SIDE IMMEDIATELY BELOW THE FORM */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3.5">
                      {/* Button 1: Send via WhatsApp (Green) */}
                      <button
                        type="button"
                        onClick={handleSendWhatsApp}
                        disabled={!isFormValid}
                        className="py-3.5 px-2 bg-[#25D366] hover:bg-[#20ba59] disabled:bg-slate-100 disabled:text-slate-400 disabled:border-slate-200 text-white hover:-translate-y-0.5 disabled:-translate-y-0 transition-all text-xs font-black uppercase tracking-wider rounded-lg shadow-md disabled:shadow-none flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed text-center border border-transparent"
                        title={isFormValid ? "Submit Quote via WhatsApp" : "Please fill out Name and Phone Number"}
                      >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span>Send via WhatsApp</span>
                      </button>

                      {/* Button 2: Send via Email (Blue) */}
                      <button
                        type="button"
                        onClick={handleSendEmail}
                        disabled={!isFormValid}
                        className="py-3.5 px-2 bg-[#06B6D4] hover:bg-[#05a0bc] disabled:bg-slate-100 disabled:text-slate-400 disabled:border-slate-200 text-white hover:-translate-y-0.5 disabled:-translate-y-0 transition-all text-xs font-black uppercase tracking-wider rounded-lg shadow-md disabled:shadow-none flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed text-center border border-transparent"
                        title={isFormValid ? "Submit Quote via Email" : "Please fill out Name and Phone Number"}
                      >
                        <Mail className="w-4 h-4 shrink-0" />
                        <span>Send via Email</span>
                      </button>
                    </div>

                    {!isFormValid && (
                      <p className="text-[10px] text-amber-600 text-center font-bold bg-amber-50 p-2.5 border border-amber-200/50 rounded-lg animate-pulse">
                        ⚠️ Please specify your Full Name and Phone Number to enable the send channels.
                      </p>
                    )}
                  </div>

                  {/* Summary list below the buttons */}
                  <div className="p-4 border border-slate-200 rounded-xl bg-slate-50/50">
                    <h5 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2 font-mono">
                      Current Cart Items ({cartItems.length} styles)
                    </h5>
                    <div className="space-y-1.5 max-h-[160px] overflow-y-auto divide-y divide-slate-100 pr-1">
                      {cartItems.map((item, idx) => (
                        <div key={item.product.id} className="text-xs pt-1.5 first:pt-0 flex justify-between gap-2.5">
                          <span className="font-semibold text-[#1a3a42] truncate">{item.product.name}</span>
                          <span className="text-[#2c8fa0] font-mono font-bold shrink-0">Qty: {item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions (Send Quote Request trigger on Cart state) */}
        {cartItems.length > 0 && !success && !showQuoteForm && (
          <div className="p-6 bg-[#f8f9fa] border-t border-[#e1e3e4] shrink-0 space-y-4 font-sans">
            <div className="flex justify-between items-center text-xs">
              <span className="font-extrabold text-gray-400 uppercase tracking-widest">Selected Lines</span>
              <span className="font-extrabold text-[#1a3a42] font-mono">{cartItems.length} categories</span>
            </div>
            
            <div className="flex justify-between items-center text-xs">
              <span className="font-extrabold text-gray-400 uppercase tracking-widest">Total Quantity</span>
              <span className="font-extrabold text-[#2c8fa0] font-mono bg-white border border-[#2c8fa0]/25 px-2.5 py-1 rounded-md">
                {totalItemsCount} units
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowQuoteForm(true)}
              className="w-full text-center py-4 bg-[#26ccca] hover:bg-[#1fbaba] text-slate-900 font-extrabold rounded-lg shadow-sm hover:shadow-md transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileCheck className="w-4.5 h-4.5" />
              Send Quote Request
            </button>
            
            <p className="text-[10px] text-gray-400 text-center leading-normal">
              Important: No checkout, payment, or banking is done here. Our freight logistics desk compiles customized clinical proposal shipping terms directly.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
