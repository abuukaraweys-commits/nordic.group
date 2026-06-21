import React, { useState, useEffect, FormEvent } from 'react';
import { 
  Lock, 
  User, 
  Building, 
  Truck, 
  FileText, 
  Plus, 
  LogOut, 
  CheckCircle, 
  Clock, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Tag,
  Boxes,
  HelpCircle
} from 'lucide-react';
import { Product } from '../types';
import { CATEGORIES } from '../data';

// Sourcing ship tracker milestones
interface ShipmentMilestone {
  status: string;
  date: string;
  description: string;
  completed: boolean;
}

interface ClinicAccount {
  id: string;
  name: string;
  email: string;
  contactPerson: string;
  location: string;
  phone: string;
  status: 'active' | 'pending';
  recentShipments: {
    orderId: string;
    itemsCount: number;
    amount: string;
    route: string;
    status: 'In Transit' | 'At Mogadishu Depot' | 'Cleared Customs' | 'Delivered';
    milestones: ShipmentMilestone[];
  }[];
}

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  status: 'new' | 'reviewed' | 'quoted';
}

const DEFAULT_INQUIRIES: Inquiry[] = [
  {
    id: 'INQ-4081',
    name: 'Dr. Farhan Ali',
    email: 'dr.farhan@mogadishudental.com',
    phone: '+252 61 554 1122',
    message: 'We are requesting an urgent quote for 15 syringe kits of Kulzer Charisma Composites and 3M Bonding agents. Needed for our Mogadishu central clinic expansion.',
    date: '2026-06-12',
    status: 'new'
  },
  {
    id: 'INQ-3957',
    name: 'Dr. Leyla Warsame',
    email: 'warsame.leyla@hargeisahub.so',
    phone: '+252 63 448 3009',
    message: 'Can you provide technical catalog specifications and delivery periods for custom sterilization autoclaves (Class-B) and light-cure hybrids?',
    date: '2026-06-09',
    status: 'quoted'
  },
  {
    id: 'INQ-3841',
    name: 'Yusuf Omar',
    email: 'info@banadirdental.org',
    phone: '+252 61 777 2201',
    message: 'Interested in placing a bulk order for EN-ISO standard orthodontic brackets, disposables, and endodontics accessories sourced via your Deira hub.',
    date: '2026-06-05',
    status: 'reviewed'
  }
];

const DEFAULT_CLINICS: ClinicAccount[] = [
  {
    id: 'CLN-102',
    name: 'Mogadishu Central Dental Care',
    email: 'dr.farhan@mogadishudental.com',
    contactPerson: 'Dr. Farhan Ali',
    location: 'Mogadishu, Somalia',
    phone: '+252 61 554 1122',
    status: 'active',
    recentShipments: [
      {
        orderId: 'ND-ORD-9021',
        itemsCount: 14,
        amount: '$1,850 USD',
        route: 'Dubai -> Mogadishu Depot',
        status: 'In Transit',
        milestones: [
          { status: 'Sourced in Dubai', date: '2026-06-11', description: 'Certified items procured from Dubai central trade hub.', completed: true },
          { status: 'Customs Departure', date: '2026-06-12', description: 'Air freight cargo manifest loaded at Deira terminal.', completed: true },
          { status: 'Somalia Port Transit', date: 'In Progress', description: 'En route to Mogadishu distribution airport depot.', completed: false },
          { status: 'Clinic Final Delivery', date: 'Pending', description: 'Door-to-door temperature secure drop-off.', completed: false }
        ]
      }
    ]
  },
  {
    id: 'CLN-105',
    name: 'Hargeisa Specialized Dental Hub',
    email: 'warsame.leyla@hargeisahub.so',
    contactPerson: 'Dr. Leyla Warsame',
    location: 'Hargeisa, Somalia',
    phone: '+252 63 448 3009',
    status: 'active',
    recentShipments: [
      {
        orderId: 'ND-ORD-8840',
        itemsCount: 42,
        amount: '$6,420 USD',
        route: 'Dubai -> Mogadishu Depot -> Hargeisa',
        status: 'At Mogadishu Depot',
        milestones: [
          { status: 'Sourced in Dubai', date: '2026-06-04', description: 'Approved composites and precision hand instruments consolidated.', completed: true },
          { status: 'Customs Departure', date: '2026-06-06', description: 'Secure shipment cleared at Dubai Terminal.', completed: true },
          { status: 'At Mogadishu Depot', date: '2026-06-09', description: 'Received at local clearing hangar for clinical safety audits.', completed: true },
          { status: 'Clinic Final Delivery', date: 'Pending', description: 'Scheduled regional transport delivery.', completed: false }
        ]
      }
    ]
  },
  {
    id: 'CLN-109',
    name: 'Banadir Specialist Poly-Clinic',
    email: 'info@banadirdental.org',
    contactPerson: 'Dr. Yusuf Omar',
    location: 'Mogadishu, Somalia',
    phone: '+252 61 777 2201',
    status: 'active',
    recentShipments: [
      {
        orderId: 'ND-ORD-8210',
        itemsCount: 8,
        amount: '$980 USD',
        route: 'Dubai -> Mogadishu Direct',
        status: 'Delivered',
        milestones: [
          { status: 'Sourced in Dubai', date: '2026-05-18', description: 'Consumables, impression silicones selected.', completed: true },
          { status: 'Customs Departure', date: '2026-05-20', description: 'Air freight cleared.', completed: true },
          { status: 'At Mogadishu Depot', date: '2026-05-22', description: 'Fast local clearance.', completed: true },
          { status: 'Clinic Final Delivery', date: '2026-05-24', description: 'Successfully handed over to Dr. Yusuf Omar.', completed: true }
        ]
      }
    ]
  }
];

interface PortalProps {
  onAddCustomProduct?: (p: Product) => void;
}

export default function Portal({ onAddCustomProduct }: PortalProps) {
  // Session states
  const [userRole, setUserRole] = useState<'guest' | 'customer' | 'admin'>('guest');
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [currentClinic, setCurrentClinic] = useState<ClinicAccount | null>(null);

  // Form input states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Admin Panel states
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [clinics, setClinics] = useState<ClinicAccount[]>([]);
  const [activeTab, setActiveTab] = useState<'inquiries' | 'clinics' | 'add-product'>('inquiries');

  // Add Product form state
  const [newProdName, setNewProdName] = useState('');
  const [newProdCategory, setNewProdCategory] = useState<any>('composites');
  const [newProdRef, setNewProdRef] = useState('');
  const [newProdOrigin, setNewProdOrigin] = useState('Dubai Hub');
  const [newProdDesc, setNewProdDesc] = useState('');
  const [newProdFeatures, setNewProdFeatures] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Load initial data
  useEffect(() => {
    const storedInquiries = localStorage.getItem('nordic_inquiries');
    if (storedInquiries) {
      setInquiries(JSON.parse(storedInquiries));
    } else {
      setInquiries(DEFAULT_INQUIRIES);
      localStorage.setItem('nordic_inquiries', JSON.stringify(DEFAULT_INQUIRIES));
    }

    const storedClinics = localStorage.getItem('nordic_clinics');
    if (storedClinics) {
      setClinics(JSON.parse(storedClinics));
    } else {
      setClinics(DEFAULT_CLINICS);
      localStorage.setItem('nordic_clinics', JSON.stringify(DEFAULT_CLINICS));
    }
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    if (!cleanEmail || !cleanPass) {
      setLoginError('Please enter both email and password.');
      return;
    }

    // Check Admin login
    if (cleanEmail === 'admin@nordicgr.com' && cleanPass === 'admin123') {
      setUserRole('admin');
      setCurrentUserEmail(cleanEmail);
      return;
    }

    // Check if it belongs to one of our dental clinics
    const matchedClinic = clinics.find(
      (c) => c.email.toLowerCase() === cleanEmail && cleanPass === 'clinic123'
    );

    if (matchedClinic) {
      setUserRole('customer');
      setCurrentUserEmail(cleanEmail);
      setCurrentClinic(matchedClinic);
    } else if (cleanPass === 'clinic123') {
      // Create a dynamically generated clinic if they entered a custom email with clinic123 password
      const newClinic: ClinicAccount = {
        id: `CLN-${Math.floor(100 + Math.random() * 900)}`,
        name: cleanEmail.split('@')[0].toUpperCase().replace(/[^A-Z]/g, ' ') + ' CLINIC',
        email: cleanEmail,
        contactPerson: 'Dr. Registered Member',
        location: 'Somalia Central Region',
        phone: '+252 61...',
        status: 'active',
        recentShipments: [
          {
            orderId: `ND-ORD-${Math.floor(8000 + Math.random() * 1900)}`,
            itemsCount: 5,
            amount: '$450 USD',
            route: 'Dubai -> Mogadishu Depot',
            status: 'In Transit',
            milestones: [
              { status: 'Sourced in Dubai', date: 'Recent', description: 'Order consolidated at Deira office.', completed: true },
              { status: 'Customs Departure', date: 'In Progress', description: 'Prepared for air dispatch.', completed: false },
              { status: 'At Mogadishu Depot', date: 'Pending', description: 'Awaiting container check.', completed: false },
              { status: 'Clinic Delivery', date: 'Pending', description: 'Secure delivery.', completed: false }
            ]
          }
        ]
      };
      const updatedClinics = [...clinics, newClinic];
      setClinics(updatedClinics);
      localStorage.setItem('nordic_clinics', JSON.stringify(updatedClinics));

      setUserRole('customer');
      setCurrentUserEmail(cleanEmail);
      setCurrentClinic(newClinic);
    } else {
      setLoginError('Invalid credentials. Use admin@nordicgr.com (pass: admin123) or clinic email (pass: clinic123)');
    }
  };

  // Log in as customer directly (Masquerading / Impersonation) - implements "fix admin logged in to our customers"
  const handleImpersonateCustomer = (clinic: ClinicAccount) => {
    setUserRole('customer');
    setCurrentUserEmail(clinic.email);
    setCurrentClinic(clinic);
  };

  const handleLogout = () => {
    setUserRole('guest');
    setCurrentUserEmail('');
    setCurrentClinic(null);
    setEmail('');
    setPassword('');
    setLoginError('');
  };

  const handleUpdateInquiryStatus = (id: string, newStatus: 'new' | 'reviewed' | 'quoted') => {
    const updated = inquiries.map(iq => iq.id === id ? { ...iq, status: newStatus } : iq);
    setInquiries(updated);
    localStorage.setItem('nordic_inquiries', JSON.stringify(updated));
  };

  // Add custom catalog item for live preview updates in Products Catalog
  const handleAddNewProductSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newProdName || !newProdRef || !newProdDesc) {
      alert('Please fill out Name, Catalog Ref, and Description.');
      return;
    }

    const featureList = newProdFeatures
      ? newProdFeatures.split('\n').filter(f => f.trim() !== '')
      : ['ISO-9001 Sourcing Quality', 'Clinically compatible material'];

    const newProduct: Product = {
      id: `custom-${Date.now()}`,
      name: newProdName,
      category: newProdCategory,
      description: newProdDesc,
      features: featureList,
      specifications: {
        'Origin Location': newProdOrigin,
        'Logistics Class': 'Temperature controlled Air-Freight',
        'Regulatory Auditing': 'Medical Grade ISO 13485'
      },
      catalogRef: newProdRef,
      isFeatured: true,
      origin: newProdOrigin
    };

    if (onAddCustomProduct) {
      onAddCustomProduct(newProduct);
    }

    setSuccessMsg(`Successfully added "${newProdName}" (Ref: ${newProdRef}) to the product catalog!`);
    setNewProdName('');
    setNewProdRef('');
    setNewProdDesc('');
    setNewProdFeatures('');
    
    setTimeout(() => setSuccessMsg(''), 5000);
  };

  return (
    <div id="portal-full-screen" className="py-12 bg-[#f4f7f9] animate-in fade-in duration-300 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-bold text-[#2c8fa0] bg-[#f0f8fa] border border-[#2c8fa0]/20 px-3.5 py-1.5 rounded-full uppercase tracking-widest block w-max mx-auto mb-3">
            Nordic Group B2B Sourcing Hub
          </span>
          <h1 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1a3a42] tracking-tight">
            Integrated Client & Sourcing Portal
          </h1>
          <p className="text-xs sm:text-sm text-[#6b8f96] mt-2">
            Secure tracking of direct Air-Freight shipments, customized clinics quote workflows, and logistics monitoring.
          </p>
        </div>

        {/* ---------------- 1. LOGIN SCREEN ---------------- */}
        {userRole === 'guest' && (
          <div className="max-w-md mx-auto bg-white border border-[#bfc8ca]/35 rounded-2xl p-6 sm:p-8 shadow-[0_2px_15px_rgba(0,0,0,0.06)] border-t-[3px] border-t-[#2c8fa0] mt-4">
            
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#f0f8fa] text-[#2c8fa0] flex items-center justify-center mx-auto mb-3 border border-[#2c8fa0]/30 shadow-xs">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[#1a3a42]">Authorize Your Account</h2>
              <p className="text-xs text-[#6b8f96] mt-1">
                Access your clinics active order logs or admin dashboard safely.
              </p>
            </div>

            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-3.5 py-3 rounded-lg leading-relaxed mb-5">
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#6b8f96] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#6b8f96]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="clinic@nordicgr.com or admin@nordicgr.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#bfc8ca]/40 text-sm focus:outline-none focus:border-[#2c8fa0] focus:ring-1 focus:ring-[#2c8fa0]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#6b8f96] uppercase tracking-wider mb-1.5">
                  Security Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-[#6b8f96]" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#bfc8ca]/40 text-sm focus:outline-none focus:border-[#2c8fa0] focus:ring-1 focus:ring-[#2c8fa0]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#2c8fa0] hover:bg-[#1a6e7e] text-white rounded-[6px] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Access Secure Workspace</span>
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-[#bfc8ca]/25 text-center">
              <p className="text-[11px] text-[#6b8f96] leading-relaxed">
                <strong>💡 Demonstration Accounts:</strong><br />
                • Admin Account: <code className="text-[#1a3a42] font-mono bg-[#f0f8fa] px-1 rounded">admin@nordicgr.com</code> (pass: <code className="font-mono bg-[#f0f8fa] px-1 rounded text-[#1a3a42]">admin123</code>)<br />
                • Customer Account: Enter any clinic email to log in (pass: <code className="font-mono bg-[#f0f8fa] px-1 rounded text-[#1a3a42]">clinic123</code>)
              </p>
            </div>
          </div>
        )}

        {/* ---------------- 2. CUSTOMER CLINCAL VIEWPORT ---------------- */}
        {userRole === 'customer' && currentClinic && (
          <div className="bg-white border border-[#bfc8ca]/35 rounded-2xl p-6 sm:p-8 shadow-[0_2px_15px_rgba(0,0,0,0.06)] border-t-[3px] border-t-[#2c8fa0] space-y-8 animate-in fade-in duration-200">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e1e3e4] pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#f0f8fa] text-[#2c8fa0] flex items-center justify-center border border-[#2c8fa0]/20 shadow-xs">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#1a3a42] tracking-tight">{currentClinic.name}</h2>
                  <p className="text-xs text-[#6b8f96] font-medium flex items-center gap-1.5 mt-0.5">
                    <span>ID: {currentClinic.id}</span>
                    <span>•</span>
                    <span>Clinic Sourcing Liaison: {currentClinic.contactPerson}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-full border border-[#25D366]/20">
                  Secure Customer Session
                </span>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 text-xs text-[#6b8f96] hover:bg-red-50 hover:text-red-700 hover:border-red-200 border border-[#bfc8ca]/30 rounded-md transition-colors font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Exit Portal</span>
                </button>
              </div>
            </div>

            {/* Shipment Tracking details - sourcing directly Dubai to Somalia */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck className="w-5 h-5 text-[#2c8fa0]" />
                <h3 className="text-sm font-bold text-[#1a3a42] uppercase tracking-wider">Active Dubai Air-Freight Sourcing Pipeline</h3>
              </div>
              
              {currentClinic.recentShipments.map((ship, idx) => (
                <div key={idx} className="bg-[#f0f8fa] border border-[#2c8fa0]/20 rounded-xl p-5 space-y-6">
                  
                  {/* Freight header info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#2c8fa0]/15 pb-4 text-xs">
                    <div>
                      <p className="font-bold text-[#1a3a42]">Logistics Order Ref: <span className="font-mono text-[#2c8fa0]">{ship.orderId}</span></p>
                      <p className="text-[#6b8f96] mt-0.5">Sourcing Trajectory: <span className="font-semibold text-[#1a3a42]">{ship.route}</span></p>
                    </div>
                    <div className="text-right md:text-left flex md:flex-col items-center justify-between md:items-end gap-2 md:gap-0 font-sans">
                      <p className="text-[#1a3a42] font-semibold">Value: {ship.amount} ({ship.itemsCount} clinical categories)</p>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#2c8fa0] px-2.5 py-0.5 rounded-full mt-1">
                        {ship.status}
                      </span>
                    </div>
                  </div>

                  {/* Flow Steps Pipeline */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                    {ship.milestones.map((ms, mIdx) => (
                      <div key={mIdx} className="bg-white border border-[#bfc8ca]/25 p-4 rounded-lg relative flex gap-3 items-start shadow-xs transition-all hover:border-[#2c8fa0]/30">
                        {ms.completed ? (
                          <div className="w-6 h-6 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/25 mt-0.5">
                            <CheckCircle className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0 border border-yellow-200 mt-0.5 animate-pulse">
                            <Clock className="w-3.5 h-3.5" />
                          </div>
                        )}
                        <div>
                          <p className={`text-xs font-bold ${ms.completed ? 'text-[#1a3a42]' : 'text-[#6b8f96]'}`}>{ms.status}</p>
                          <p className="text-[10px] text-gray-400 mt-0.5">{ms.date}</p>
                          <p className="text-[10px] text-[#6b8f96] mt-1 leading-normal leading-relaxed">{ms.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

            {/* General Clinicial Document Support and Request Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              <div className="border border-[#e1e3e4] rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-4.5 h-4.5 text-[#2c8fa0]" />
                  <h4 className="text-sm font-bold text-[#1a3a42]">Clinical Documentation & Catalogs</h4>
                </div>
                <p className="text-xs text-[#6b8f96] leading-relaxed">
                  Your registration enables expedited custom duties checking at our local Mogadishu depot hangar. Standard CE certificates for imports (ISO-9001, ISO-13485) are issued alongside all transport manifests.
                </p>
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-[#2c8fa0] bg-[#f0f8fa] border border-[#2c8fa0]/15 px-3 py-1.5 rounded flex items-center justify-between w-max shrink-0 font-mono">
                    <span>Export-Status-Check: Active</span>
                  </span>
                </div>
              </div>

              <div className="border border-[#e1e3e4] rounded-xl p-5 space-y-4 bg-slate-900 text-white">
                <h4 className="text-sm font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#2c8fa0]" />
                  <span>Verified Safe Material Assurance</span>
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Every parcel leaving Deira (Dubai) terminal undergoes biological cold-chain regulatory monitoring. Any dental composite syringe (light cure polymerizers) arrives with thermal lock storage.
                </p>
                <div className="text-[11px] font-semibold text-gray-400">
                  Need custom wholesale pricing? Message support on WhatsApp at <strong className="text-white">+252 61 745 3777</strong>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ---------------- 3. ADMIN WORKSPACE VIEWPORT ---------------- */}
        {userRole === 'admin' && (
          <div className="bg-white border border-[#bfc8ca]/35 rounded-2xl p-6 sm:p-8 shadow-[0_2px_15px_rgba(0,0,0,0.06)] border-t-[3px] border-t-[#2c8fa0] space-y-8 animate-in fade-in duration-200">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e1e3e4] pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#f0f8fa] text-[#2c8fa0] flex items-center justify-center border border-[#2c8fa0]/20 shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#1a3a42] tracking-tight">System Admin Panel</h2>
                  <p className="text-xs text-[#6b8f96] font-medium mt-0.5">
                    Account: {currentUserEmail} • Sourcing, Catalog & Impersonation Hub
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase font-bold text-[#E2E8F0] bg-slate-800 text-[#06B6D4] px-2.5 py-1 rounded-full">
                  System Admin Mode
                </span>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 text-xs text-[#6b8f96] hover:bg-red-50 hover:text-red-700 hover:border-red-200 border border-[#bfc8ca]/30 rounded-md transition-colors font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Exit Workspace</span>
                </button>
              </div>
            </div>

            {/* TAB SELECT */}
            <div className="flex border-b border-gray-150 gap-4">
              <button
                onClick={() => setActiveTab('inquiries')}
                className={`py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                  activeTab === 'inquiries' ? 'border-[#2c8fa0] text-[#2c8fa0]' : 'border-transparent text-[#6b8f96] hover:text-[#2c8fa0]'
                }`}
              >
                Inquiries & Quote Requests ({inquiries.length})
              </button>
              <button
                onClick={() => setActiveTab('clinics')}
                className={`py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                  activeTab === 'clinics' ? 'border-[#2c8fa0] text-[#2c8fa0]' : 'border-transparent text-[#6b8f96] hover:text-[#2c8fa0]'
                }`}
              >
                Customer Clinics List ({clinics.length})
              </button>
              <button
                onClick={() => setActiveTab('add-product')}
                className={`py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                  activeTab === 'add-product' ? 'border-[#2c8fa0] text-[#2c8fa0]' : 'border-transparent text-[#6b8f96] hover:text-[#2c8fa0]'
                }`}
              >
                Add Custom Product Catalog Item
              </button>
            </div>

            {/* ---------------- A. INQUIRIES TAB ---------------- */}
            {activeTab === 'inquiries' && (
              <div className="space-y-4">
                <div className="bg-[#f0f8fa] border border-[#2c8fa0]/15 p-4 rounded-xl text-xs text-[#6b8f96]">
                  These are message requests posted through web contact forms. Admins can track clinical needs and trigger direct phone contacts.
                </div>

                <div className="space-y-4">
                  {inquiries.length === 0 ? (
                    <p className="text-center py-6 text-xs text-gray-400">No active enquiries found.</p>
                  ) : (
                    inquiries.map((iq) => (
                      <div key={iq.id} className="border border-[#e1e3e4] rounded-xl p-5 bg-white shadow-xs space-y-4 transition-all hover:border-[#2c8fa0]/35 select-none">
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#6b8f96]">
                          <div>
                            <span className="font-mono text-xs font-bold text-[#1a3a42] bg-[#f0f8fa] border border-[#2c8fa0]/25 px-2 py-0.5 rounded mr-2">
                              {iq.id}
                            </span>
                            <span>Received Date: {iq.date}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                              iq.status === 'new' 
                                ? 'bg-red-50 text-red-600 border-red-100'
                                : iq.status === 'reviewed'
                                ? 'bg-blue-50 text-blue-600 border-blue-100'
                                : 'bg-green-50 text-green-600 border-green-100'
                            }`}>
                              {iq.status}
                            </span>
                          </div>
                        </div>

                        <div>
                          <div className="flex flex-wrap items-baseline gap-2">
                            <h4 className="text-sm font-extrabold text-[#1a3a42]">{iq.name}</h4>
                            <span className="text-xs text-[#6b8f96]">({iq.email})</span>
                            <span className="text-xs text-[#6b8f96]">• {iq.phone}</span>
                          </div>
                          <p className="text-xs text-[#1a3a42] font-medium leading-relaxed mt-2 bg-[#f4f7f9] p-3 rounded-lg border border-gray-150">
                            "{iq.message}"
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                          <div className="flex gap-1.5">
                            <button
                              onClick={() => handleUpdateInquiryStatus(iq.id, 'reviewed')}
                              className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors rounded cursor-pointer"
                            >
                              Mark Reviewed
                            </button>
                            <button
                              onClick={() => handleUpdateInquiryStatus(iq.id, 'quoted')}
                              className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-green-700 bg-green-50 border border-green-200 hover:bg-green-100 transition-colors rounded cursor-pointer"
                            >
                              Issue Sourcing Quote
                            </button>
                          </div>

                          {/* Trigger Impersonation from Inquiry directly! */}
                          {clinics.some(c => c.email.toLowerCase() === iq.email.toLowerCase()) ? (
                            <button
                              onClick={() => {
                                const match = clinics.find(c => c.email.toLowerCase() === iq.email.toLowerCase());
                                if (match) handleImpersonateCustomer(match);
                              }}
                              className="text-xs font-bold text-[#2c8fa0] hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              <span>🔑 Log in as Clinic</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                // Dynamically register as customer and login
                                const newClinic: ClinicAccount = {
                                  id: `CLN-${Math.floor(100 + Math.random() * 900)}`,
                                  name: iq.name.toUpperCase().replace(/[^A-Z]/g, ' ') + ' CLINIC',
                                  email: iq.email,
                                  contactPerson: iq.name,
                                  location: 'Somalia Central Region',
                                  phone: iq.phone,
                                  status: 'active',
                                  recentShipments: [
                                    {
                                      orderId: `ND-ORD-${Math.floor(8000 + Math.random() * 1900)}`,
                                      itemsCount: 16,
                                      amount: '$2,900 USD',
                                      route: 'Dubai -> Mogadishu Depot',
                                      status: 'In Transit',
                                      milestones: [
                                        { status: 'Sourced in Dubai', date: 'Recent', description: 'Consolidation of diagnostic and clinical equipment bundles.', completed: true },
                                        { status: 'Customs Departure', date: 'In Progress', description: 'Manifest cleared.', completed: false },
                                        { status: 'Mogadishu Hangar Audit', date: 'Pending', description: 'Thermal check.', completed: false },
                                        { status: 'Final Clinic Care Dropoff', date: 'Pending', description: 'Liaison delivery.', completed: false }
                                      ]
                                    }
                                  ]
                                };
                                const updatedClinics = [...clinics, newClinic];
                                setClinics(updatedClinics);
                                localStorage.setItem('nordic_clinics', JSON.stringify(updatedClinics));
                                handleImpersonateCustomer(newClinic);
                              }}
                              className="text-xs font-bold text-[#2c8fa0] hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              <span>Register & Log In as Clinic</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* ---------------- B. CUSTOMER CLINICS LIST TAB ---------------- */}
            {activeTab === 'clinics' && (
              <div className="space-y-4 text-xs sm:text-sm text-[#1a3a42]">
                <div className="bg-[#f0f8fa] border border-[#2c8fa0]/15 p-4 rounded-xl text-xs text-[#6b8f96]">
                  <strong>🔑 Logga in till kunden (Admin Impersonation):</strong><br />
                  Below are registered medical and dental clinic partners in Somalia. Click <strong>"🔑 Log in as Clinic"</strong> to masquerade as the selected clinic, track active milestones, or configure custom sourcing options.
                </div>

                <div className="overflow-x-auto border border-[#e1e3e4] rounded-xl bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#f4f7f9] text-[#6b8f96] text-xs font-bold uppercase tracking-wider border-b border-gray-150">
                      <tr>
                        <th className="px-6 py-4">Clinic ID</th>
                        <th className="px-6 py-4">Clinic Partner</th>
                        <th className="px-6 py-4">Sourcing Trajectory</th>
                        <th className="px-6 py-4">Contact</th>
                        <th className="px-6 py-4 text-right">Portal Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150">
                      {clinics.map((c) => (
                        <tr key={c.id} className="hover:bg-[#f0f8fa]/40 transition-colors">
                          <td className="px-6 py-4 font-mono font-bold text-xs text-gray-500">{c.id}</td>
                          <td className="px-6 py-4">
                            <p className="font-extrabold text-[#1a3a42] text-xs sm:text-sm">{c.name}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{c.location}</p>
                          </td>
                          <td className="px-6 py-4 font-semibold text-xs text-[#2c8fa0]">
                            {c.recentShipments[0]?.route || 'Consolidated pipeline setup'}
                          </td>
                          <td className="px-6 py-4 text-xs font-medium text-gray-500">
                            <p>{c.contactPerson}</p>
                            <p className="text-[10px] text-gray-400">{c.email}</p>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleImpersonateCustomer(c)}
                              className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#2c8fa0] hover:bg-[#1a6e7e] transition-all rounded-[6px] cursor-pointer flex items-center justify-center gap-1.5 ml-auto shadow-xs"
                            >
                              <span>🔑 Log in as Clinic</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ---------------- C. ADD CUSTOM PRODUCT TAB ---------------- */}
            {activeTab === 'add-product' && (
              <div className="bg-slate-50 border border-[#e1e3e4] rounded-2xl p-5 sm:p-6 text-xs sm:text-sm">
                
                <div className="mb-6">
                  <h3 className="text-base font-bold text-[#1a3a42]">Add Product to Live Distribution Catalog</h3>
                  <p className="text-xs text-[#6b8f96] mt-1">
                    Procured items are categorized dynamically and updated in real-time in the Product Catalog list pages.
                  </p>
                </div>

                {successMsg && (
                  <div className="bg-green-50 border border-green-200 text-green-800 text-xs px-4 py-3 rounded-xl mb-6">
                    {successMsg}
                  </div>
                )}

                <form onSubmit={handleAddNewProductSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#6b8f96] uppercase tracking-wider mb-1.5">
                        Product Sourcing Label/Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newProdName}
                        onChange={(e) => setNewProdName(e.target.value)}
                        placeholder="e.g. Kulzer Charisma Classic Syringe Kit"
                        className="w-full px-3.5 py-2 rounded-lg border border-[#bfc8ca]/40 text-xs sm:text-sm focus:outline-none focus:border-[#2c8fa0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#6b8f96] uppercase tracking-wider mb-1.5">
                        Clinical Category *
                      </label>
                      <select
                        value={newProdCategory}
                        onChange={(e) => setNewProdCategory(e.target.value as any)}
                        className="w-full px-3.5 py-2 bg-white rounded-lg border border-[#bfc8ca]/40 text-xs sm:text-sm focus:outline-none focus:border-[#2c8fa0]"
                      >
                        {CATEGORIES.map(cat => (
                          <option key={cat.key} value={cat.key}>{cat.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#6b8f96] uppercase tracking-wider mb-1.5">
                        Nordic Reference Catalog Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={newProdRef}
                        onChange={(e) => setNewProdRef(e.target.value)}
                        placeholder="e.g. NG-KL-409"
                        className="w-full px-3.5 py-2 rounded-lg border border-[#bfc8ca]/40 text-xs sm:text-sm focus:outline-none focus:border-[#2c8fa0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#6b8f96] uppercase tracking-wider mb-1.5">
                        Sourcing Hub / Origin *
                      </label>
                      <input
                        type="text"
                        required
                        value={newProdOrigin}
                        onChange={(e) => setNewProdOrigin(e.target.value)}
                        placeholder="e.g. Dubai Trade Hub / Germany Import"
                        className="w-full px-3.5 py-2 rounded-lg border border-[#bfc8ca]/40 text-xs sm:text-sm focus:outline-none focus:border-[#2c8fa0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#6b8f96] uppercase tracking-wider mb-1.5">
                      Core Utility Description *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={newProdDesc}
                      onChange={(e) => setNewProdDesc(e.target.value)}
                      placeholder="High clinical quality light-cure nano composite for anterior and posterior dental restorations..."
                      className="w-full px-3.5 py-2 rounded-lg border border-[#bfc8ca]/40 text-xs sm:text-sm focus:outline-none focus:border-[#2c8fa0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#6b8f96] uppercase tracking-wider mb-1.5">
                      Key Highlights/Features (one feature per line)
                    </label>
                    <textarea
                      rows={3}
                      value={newProdFeatures}
                      onChange={(e) => setNewProdFeatures(e.target.value)}
                      placeholder="Standard microglass filler technology&#10;Highly polishable surface finish&#10;Superior physical mechanical strength"
                      className="w-full px-3.5 py-2 rounded-lg border border-[#bfc8ca]/40 text-xs sm:text-sm focus:outline-none focus:border-[#2c8fa0]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#2c8fa0] hover:bg-[#1a6e7e] text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-[6px] shadow-xs cursor-pointer"
                  >
                    Publish Custom Product
                  </button>
                </form>

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
