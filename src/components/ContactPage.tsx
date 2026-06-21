import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const coreEmail = 'info@nordicgr.com';
  const whatsappNumber = '252617453777';

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Nordic Group Web Contact - ${name}`);
    const emailBody = encodeURIComponent(`Name: ${name}
Email: ${email}
Phone: ${phone || 'Not specified'}

Message:
${message}`);

    // Save to local storage for Admin tracking
    const newInquiry = {
      id: `INQ-${Math.floor(4000 + Math.random() * 5900)}`,
      name,
      email,
      phone: phone || 'Not specified',
      message,
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

    window.open(`mailto:${coreEmail}?subject=${subject}&body=${emailBody}`, '_blank');
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    if (!name || !message) return;

    const text = encodeURIComponent(`*Nordic Group Dental Web Contact*
*Name:* ${name}
*Email:* ${email || 'Not specified'}
*Phone:* ${phone || 'Not specified'}

*Message:*
${message}`);

    // Save to local storage for Admin tracking
    const newInquiry = {
      id: `INQ-${Math.floor(4000 + Math.random() * 5900)}`,
      name,
      email: email || 'not.specified@clinic.com',
      phone: phone || 'Not specified',
      message,
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

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div id="contact-full-page" className="py-16 bg-[#f4f7f9] animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-[#2c8fa0] bg-[#f0f8fa] border border-[#2c8fa0]/20 px-3.5 py-1.5 rounded-full uppercase tracking-widest block w-max mx-auto mb-4">
            Assured Sourcing & Logistics Security
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#1a3a42] tracking-tight">
            Contact Information & Support
          </h1>
          <p className="text-sm text-[#6b8f96] mt-3 leading-relaxed">
            Do you have questions about our product inventory or want to request a custom quote? Our dedicated teams in Dubai and Mogadishu are ready to guide you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* KONTAKTFORMULÄR (Namn, E-post, Telefon, Meddelande, Skicka) */}
          <div className="lg:col-span-7 bg-white border border-[#bfc8ca]/35 rounded-2xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.07)] border-t-[3px] border-t-[#2c8fa0]">
            <h2 className="font-sans font-extrabold text-xl text-[#1a3a42] tracking-tight mb-6">
              Send us a message
            </h2>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#f0f8fa] text-[#2c8fa0] flex items-center justify-center border border-[#2c8fa0]/25">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#1a3a42]">Message sent successfully!</h3>
                <p className="text-xs text-[#6b8f96] leading-relaxed max-w-md">
                  Our team will coordinate with our office in Dubai and respond to you as soon as possible. You may also email us directly at <strong>info@nordicgr.com</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="mt-4 px-5 py-2.5 bg-[#2c8fa0] hover:bg-[#1a6e7e] text-white rounded-[6px] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Write a new message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendEmail} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-[#6b8f96] uppercase tracking-wider mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Abdi Farah"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#bfc8ca]/40 text-sm focus:outline-none focus:border-[#2c8fa0] focus:ring-1 focus:ring-[#2c8fa0]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#6b8f96] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@clinic.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#bfc8ca]/40 text-sm focus:outline-none focus:border-[#2c8fa0] focus:ring-1 focus:ring-[#2c8fa0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#6b8f96] uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+252 61..."
                      className="w-full px-4 py-2.5 rounded-lg border border-[#bfc8ca]/40 text-sm focus:outline-none focus:border-[#2c8fa0] focus:ring-1 focus:ring-[#2c8fa0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#6b8f96] uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your product requests or general questions here..."
                    className="w-full px-4 py-2.5 rounded-lg border border-[#bfc8ca]/40 text-sm focus:outline-none focus:border-[#2c8fa0] focus:ring-1 focus:ring-[#2c8fa0]"
                  />
                </div>

                <div className="h-px bg-[#bfc8ca]/25 my-4" />

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#2c8fa0] hover:bg-[#1a6e7e] text-white rounded-[6px] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:-translate-y-0.1"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    disabled={!name || !message}
                    className={`flex-1 py-3 rounded-[6px] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border ${
                      name && message
                        ? 'bg-[#25D366] hover:bg-[#20ba59] text-white border-transparent cursor-pointer shadow-xs hover:-translate-y-0.1'
                        : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    }`}
                  >
                    <MessageSquare className="w-4.5 h-4.5" />
                    <span>Send directly via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* TELEFON, E-POST, ADRESS, ÖPPETTIDER */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Kontaktuppgifter block */}
            <div className="bg-white border border-[#e1e3e4] border-t-[3px] border-t-[#2c8fa0] shadow-[0_2px_12px_rgba(0,0,0,0.07)] rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="font-sans font-extrabold text-xl text-[#1a3a42] tracking-tight pb-2 border-b border-[#e1e3e4]">
                Contact Details
              </h2>

              <div className="space-y-4">
                {/* Telefon */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0f8fa] text-[#2c8fa0] flex items-center justify-center shrink-0 border border-[#bfc8ca]/30">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#6b8f96] tracking-wider">Phone</h4>
                    <p className="text-sm font-bold text-[#1a3a42] mt-1 hover:text-[#2c8fa0]">
                      <a href="tel:+252617453777">+252 61 745 3777</a>
                    </p>
                    <p className="text-xs text-[#6b8f96] mt-0.5">Our support team speaks English, Arabic, and Somali.</p>
                  </div>
                </div>

                {/* E-post */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0f8fa] text-[#2c8fa0] flex items-center justify-center shrink-0 border border-[#bfc8ca]/30">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#6b8f96] tracking-wider">Email</h4>
                    <p className="text-sm font-bold text-[#1a3a42] mt-1 hover:text-[#2c8fa0]">
                      <a href="mailto:info@nordicgr.com">info@nordicgr.com</a>
                    </p>
                    <p className="text-xs text-[#6b8f96] mt-0.5">We usually respond to quote requests within 12-24 hours.</p>
                  </div>
                </div>

                {/* Adress */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0f8fa] text-[#2c8fa0] flex items-center justify-center shrink-0 border border-[#bfc8ca]/30">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#6b8f96] tracking-wider">Address & Offices</h4>
                    <div className="text-xs text-[#6b8f96] mt-1.5 space-y-2">
                      <p>
                        <strong className="text-[#1a3a42]">Dubai Office:</strong><br />
                        Office No. 812, Shaikha Maryam Building, Baniyas Square, Deira, Dubai
                      </p>
                      <p>
                        <strong className="text-[#1a3a42]">Local Distribution Hub:</strong><br />
                        Mogadishu, Somalia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Öppettider */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0f8fa] text-[#2c8fa0] flex items-center justify-center shrink-0 border border-[#bfc8ca]/30">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#6b8f96] tracking-wider">Operating Hours</h4>
                    <div className="text-xs text-[#6b8f96] mt-1.5 space-y-1">
                      <p className="flex justify-between font-bold text-[#1a3a42]">
                        <span>Monday – Friday:</span>
                        <span>09:00 – 17:00 (Dubai Time)</span>
                      </p>
                      <p className="flex justify-between text-[11px] text-[#6b8f96]">
                        <span>Equivalent Mogadishu:</span>
                        <span>08:00 – 16:00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Saturday – Sunday:</span>
                        <span className="text-[#6b8f96]/50 font-bold">Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GOOGLE MAPS (Valfritt - Geolocation Pipeline Scheme) */}
            <div className="border border-[#e1e3e4] border-t-[3px] border-t-[#2c8fa0] rounded-2xl p-6 bg-slate-900 text-white relative overflow-hidden select-none shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
              <span className="text-[9px] bg-[#2c8fa0] text-[#f0f8fa] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider block w-max mb-3">
                Freight & Logistics Route
              </span>
              <h3 className="text-sm font-sans font-bold leading-tight">Direct Route Dubai – Somalia</h3>
              <p className="text-[11px] text-gray-400 mt-1">Secure air freight with full customs clearance to East Africa.</p>

              {/* Styled SVG pipeline scheme mimicking elegant route map */}
              <div className="mt-6 relative h-40 bg-slate-950/40 rounded-xl border border-white/5 p-4 flex flex-col justify-between overflow-hidden">
                
                {/* Visual Gothenburg node */}
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2c8fa0] ring-4 ring-[#2c8fa0]/20 animate-pulse" />
                  <div className="text-xs font-sans">
                     <p className="font-bold text-white leading-none">Dubai Sourcing Center</p>
                    <p className="text-[10px] text-[#2c8fa0] mt-0.5 font-mono">Dubai (H01)</p>
                  </div>
                </div>

                {/* Connecting dotted trajectory pathway vector line */}
                <div className="absolute left-[13px] top-[26px] bottom-[26px] border-l border-dashed border-[#2c8fa0]/40 flex items-center justify-center">
                  <span className="bg-slate-900 border border-[#2c8fa0]/30 text-[9px] text-[#2c8fa0] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest rotate-270 translate-x-2">Consolidated</span>
                </div>

                {/* Visual Mogadishu node */}
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1a6e7e] ring-4 ring-[#1a6e7e]/20" />
                  <div className="text-xs font-sans">
                     <p className="font-bold text-white leading-none">Mogadishu Distribution Hub</p>
                    <p className="text-[10px] text-[#1a6e7e] mt-0.5 font-mono">Somalia (D02)</p>
                  </div>
                </div>

              </div>
              <div className="mt-3 text-[10px] text-gray-450 leading-relaxed">
                With consolidated air routes, we reduce delivery lead times to local clinics by up to 60%.
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
