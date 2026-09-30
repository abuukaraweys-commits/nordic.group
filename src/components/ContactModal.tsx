import { useState, FormEvent } from 'react';
import { X, Send, CheckCircle2, ShieldAlert, Loader2, AlertCircle } from 'lucide-react';
import { useAuth, useUser } from '@clerk/react';
import { Product } from '../types';
import { submitQuoteRequest } from '../lib/submitQuoteRequest';
import { isValidEmail } from '../lib/quoteRequest';

interface ContactModalProps {
  selectedProduct: Product | null;
  cartItems?: { product: Product; quantity: number }[];
  onClose: () => void;
  onClearCart?: () => void;
}

export default function ContactModal({ selectedProduct, cartItems, onClose, onClearCart }: ContactModalProps) {
  const [name, setName] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState('Somalia');
  
  const [message, setMessage] = useState(() => {
    if (selectedProduct) {
      return `Hello Nordic Group. I would like to request technical details and a quote for: ${selectedProduct.name} (Ref: ${selectedProduct.catalogRef}).`;
    }
    if (cartItems && cartItems.length > 0) {
      const itemsList = cartItems
        .map((item, index) => `${index + 1}. ${item.product.name} (Ref: ${item.product.catalogRef}) - Qty: ${item.quantity}`)
        .join('\n');
      return `Hello Nordic Group. We would like to request a customized quote for the following items in our requisition list:\n\n${itemsList}\n\nPlease prepare a proposal with delivery terms.`;
    }
    return 'Hello Nordic Group. We are interested in your dental supply catalog. Please contact us to discuss our clinic requirements.';
  });

  const [submitted, setSubmitted] = useState(false);
  const [website, setWebsite] = useState(''); // honeypot, stays empty for real people
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [sentTo, setSentTo] = useState('');

  const { isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  // Signed-in users get the confirmation at their account email; the field is locked.
  const accountEmail = isSignedIn ? user?.primaryEmailAddress?.emailAddress ?? '' : '';
  const effectiveEmail = accountEmail || email;

  // Products this request is about: the cart, or the single product it was opened for.
  const quoteItems = cartItems && cartItems.length > 0
    ? cartItems.map((item) => ({ productId: item.product.id, name: item.product.name, quantity: item.quantity }))
    : selectedProduct
      ? [{ productId: selectedProduct.id, name: selectedProduct.name, quantity: 1 }]
      : [];
  const hasItems = quoteItems.length > 0;

  const emailEntered = effectiveEmail.trim() !== '';
  const emailValid = isValidEmail(effectiveEmail);
  const canSend = hasItems && name.trim() !== '' && clinicName.trim() !== '' && phone.trim() !== '' && emailValid;

  // Log to local dashboard state (Admin page)
  const logInquiryToLocalDatabase = () => {
    const cartTextLabel = cartItems && cartItems.length > 0
      ? `[Cart Request: ${cartItems.length} categories]`
      : '';
    const newInquiry = {
      id: `INQ-${Math.floor(4000 + Math.random() * 5900)}`,
      name: `${name} ${clinicName ? `(${clinicName})` : ''}`,
      email: effectiveEmail,
      phone,
      message: `${selectedProduct ? `[Product Ref: ${selectedProduct.catalogRef}] ` : ''}${cartTextLabel ? `${cartTextLabel} ` : ''}${message}`,
      date: new Date().toISOString().split('T')[0],
      status: 'new' as const
    };
    try {
      const existing = localStorage.getItem('nordic_inquiries');
      const parsed = existing ? JSON.parse(existing) : [];
      localStorage.setItem('nordic_inquiries', JSON.stringify([newInquiry, ...parsed]));
    } catch (err) {
      console.error('Error saving inquiry:', err);
    }
  };

  // Save the request and send the emails (both happen on the server).
  // On failure the form and cart are kept so the customer can try again.
  const handleSendQuote = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSend || sending) return;
    setSending(true);
    setSendError('');
    const result = await submitQuoteRequest(
      {
        name,
        company: clinicName,
        phone,
        email: effectiveEmail,
        notes: `Region: ${region}\n\n${message}`,
        website,
        items: quoteItems
      },
      getToken,
      !!isSignedIn
    );
    setSending(false);
    if (result.ok === false) {
      setSendError(result.error);
      return;
    }
    logInquiryToLocalDatabase();
    setConfirmationSent(result.emailed.customer);
    setSentTo(effectiveEmail.trim());
    setSubmitted(true);
    onClearCart?.();
  };

  return (
    <div id="contact-order-modal" className="fixed inset-0 bg-[#191c1d]/65 backdrop-blur-xs flex items-center justify-center p-4 z-[100] animate-in fade-in duration-200">
      <div 
        id="modal-card" 
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-[#bfc8ca]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="sticky top-0 bg-white px-6 py-4 border-b border-[#e1e3e4] flex items-center justify-between z-10">
          <div>
            <h2 className="text-lg font-bold text-[#191c1d]">Request Catalog Quotation</h2>
            <p className="text-xs text-gray-400 mt-0.5">Dubai / Deira & Somalia Sourcing Liaison</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#40484a] hover:bg-[#f8f9fa] hover:text-[#191c1d] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#eff7f8] text-[#41808F] flex items-center justify-center border border-[#41808F]/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-[#191c1d]">Quote Request Sent!</h3>
            <p className="text-sm text-[#40484a] leading-relaxed max-w-sm">
              Thank you. We have received your request and will reply with prices, availability and delivery details.
            </p>
            {confirmationSent ? (
              <p className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>A confirmation was emailed to <strong>{sentTo}</strong>.</span>
              </p>
            ) : (
              <p className="flex items-start gap-2 text-left text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>We saved your request, but couldn't send the confirmation email. We will still contact you.</span>
              </p>
            )}
            <p className="text-xs text-[#40484a]">
              Questions? WhatsApp <strong className="text-primary">+252 61 745 3777</strong> or email <strong className="text-primary">info@nordicgr.com</strong>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-[#41808F] hover:bg-[#316470] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSendQuote} noValidate className="p-6 space-y-4">
            {/* Context Product Indicator */}
            {selectedProduct ? (
              <div className="bg-[#eff7f8] rounded-xl p-3 border border-[#41808F]/20 flex justify-between items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest leading-none">Inquiring Product</span>
                  <span className="text-sm font-bold text-[#191c1d] mt-1 line-clamp-1">{selectedProduct.name}</span>
                </div>
                <span className="text-xs font-mono bg-white px-2 py-0.5 rounded border border-[#bfc8ca]/30 text-[#40484a] shrink-0">
                  {selectedProduct.catalogRef}
                </span>
              </div>
            ) : cartItems && cartItems.length > 0 ? (
              <div className="bg-[#eff7f8] rounded-xl p-4 border border-[#41808F]/25">
                <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest leading-none block mb-2">Requisition Cart Items ({cartItems.length})</span>
                <div className="max-h-[140px] overflow-y-auto space-y-2 pr-1.5 divide-y divide-[#2c8fa0]/15">
                  {cartItems.map((item, index) => (
                    <div key={item.product.id} className="pt-2 first:pt-0 flex justify-between items-center gap-2 text-xs">
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-[#1a3a42] truncate">{item.product.name}</p>
                        <p className="text-[10px] text-gray-400 font-mono mt-0.5">{item.product.catalogRef}</p>
                      </div>
                      <span className="shrink-0 font-extrabold bg-white text-[#2c8fa0] px-2.5 py-0.5 rounded-md border border-[#2c8fa0]/20 font-mono text-xs">
                        Qty: {item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Note about prices and carts */}
            <div className="bg-amber-50 rounded-xl p-3 border border-amber-200/50 flex gap-2.5 items-start">
              <ShieldAlert className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-[11px] text-amber-800 leading-normal">
                Nordic Group is an exclusive medical/dental importer catalog. There are no online payments or shopping carts. Orders are compiled manually with clinical invoice terms.
              </p>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#40484a] uppercase tracking-wider mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dr. Mohamed Ali"
                  className="w-full px-3.5 py-2 rounded-lg border border-[#bfc8ca]/40 text-sm focus:outline-none focus:border-[#41808F] focus:ring-1 focus:ring-[#41808F]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#40484a] uppercase tracking-wider mb-1">Clinic Name *</label>
                <input
                  type="text"
                  required
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  placeholder="Mogadishu Dental Center"
                  className="w-full px-3.5 py-2 rounded-lg border border-[#bfc8ca]/40 text-sm focus:outline-none focus:border-[#41808F] focus:ring-1 focus:ring-[#41808F]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#40484a] uppercase tracking-wider mb-1">
                  Email Address *
                  {accountEmail && <span className="normal-case font-semibold text-gray-400"> (from your account)</span>}
                </label>
                <input
                  type="email"
                  required
                  value={effectiveEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly={!!accountEmail}
                  placeholder="doctor@clinic.com"
                  aria-invalid={emailEntered && !emailValid}
                  className={`w-full px-3.5 py-2 rounded-lg border text-sm focus:outline-none focus:ring-1 ${
                    accountEmail
                      ? 'bg-slate-100 text-slate-600 border-[#bfc8ca]/40 cursor-not-allowed'
                      : emailEntered && !emailValid
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-[#bfc8ca]/40 focus:border-[#41808F] focus:ring-[#41808F]'
                  }`}
                />
                {emailEntered && !emailValid && (
                  <p className="text-[11px] text-red-600 font-semibold mt-1">Please enter a valid email address.</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#40484a] uppercase tracking-wider mb-1">WhatsApp / Phone *</label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+252 61..."
                  className="w-full px-3.5 py-2 rounded-lg border border-[#bfc8ca]/40 text-sm focus:outline-none focus:border-[#41808F] focus:ring-1 focus:ring-[#41808F]"
                />
              </div>
            </div>

            {/* Honeypot: hidden from people, bots fill it in */}
            <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
              <label>
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#40484a] uppercase tracking-wider mb-1">Primary Region</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-3.5 py-2 bg-white rounded-lg border border-[#bfc8ca]/40 text-sm focus:outline-none focus:border-[#41808F] focus:ring-1 focus:ring-[#41808F]"
              >
                <option value="Somalia">Somalia (Somali Clinics)</option>
                <option value="UAE">UAE (Dubai Sourcing)</option>
                <option value="Norway">Norway</option>
                <option value="Kenya">Kenya</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Other East Africa">Other East Africa</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#40484a] uppercase tracking-wider mb-1">Message / Items Required *</label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Include estimated quantities if known"
                className="w-full px-3.5 py-2 rounded-lg border border-[#bfc8ca]/40 text-sm focus:outline-none focus:border-[#41808F] focus:ring-1 focus:ring-[#41808F]"
              />
            </div>

            <div className="h-px bg-[#bfc8ca]/25 my-2" />

            <div className="space-y-2.5">
              {!hasItems && (
                <p className="text-xs text-[#40484a] bg-[#eff7f8] border border-[#41808F]/20 rounded-lg p-3 leading-relaxed">
                  Your cart is empty. Add products to your cart to request a quote. For general questions, message us on WhatsApp at <strong>+252 61 745 3777</strong> or email <strong>info@nordicgr.com</strong>.
                </p>
              )}

              {sendError && (
                <p role="alert" className="flex items-start gap-2 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{sendError}</span>
                </p>
              )}

              <button
                type="submit"
                disabled={!canSend || sending}
                className={`w-full py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border ${
                  canSend && !sending
                    ? 'bg-[#41808F] hover:bg-[#316470] text-white border-transparent cursor-pointer shadow-sm'
                    : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                }`}
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4.5 h-4.5 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4.5 h-4.5" />
                    {sendError ? 'Try Again' : 'Send Quote Request'}
                  </>
                )}
              </button>

              {hasItems && !canSend && !sending && (
                <p className="text-[11px] text-amber-700 text-center font-semibold">
                  Please fill in your name, clinic name, phone number and a valid email.
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
