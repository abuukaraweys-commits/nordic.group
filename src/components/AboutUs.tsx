import { Award, ShieldCheck, Truck, Users, Landmark, FileText } from 'lucide-react';

interface AboutUsProps {
  onNavigateToContact: () => void;
}

export default function AboutUs({ onNavigateToContact }: AboutUsProps) {
  const whyChooseUs = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#41808F]" />,
      title: 'Highest Medical Standard',
      desc: 'All our products are CE-certified and approved under strict European standards such as ISO 13485.'
    },
    {
      icon: <Truck className="w-6 h-6 text-[#41808F]" />,
      title: 'Unbroken Supply Chain',
      desc: 'We coordinate freight direct from our hub in Gothenburg to Mogadishu, with temperature-controlled shipping for sensitive filling materials.'
    },
    {
      icon: <Landmark className="w-6 h-6 text-[#41808F]" />,
      title: 'Local Customs Clearance',
      desc: 'Our local office in Mogadishu handles all processing on the ground, eliminating time-consuming custom delays and hidden fees.'
    },
    {
      icon: <FileText className="w-6 h-6 text-[#41808F]" />,
      title: 'Customized B2B Agreements',
      desc: 'We offer fully tailored procurement plans and clinical quotes matching your specific dentistry capacity and patient workflow.'
    }
  ];

  const whatWeOffer = [
    'Direct supply of premium filling composites, A-silicones, and light-cure hybrids.',
    'Sourcing and acquisition of precision hand instruments forged in Swedish and German biomedical steel.',
    'Quality-certified sterilization appliances, Class-B steam autoclaves, and hygiene items.',
    'Custom print clinical paperwork, patient charts, and appointment reminder cards.',
    'High-velocity intraoral radiography sensors and CE-certified x-ray generators with low radiation dosages.'
  ];

  const teamMembers = [
    {
      name: 'Michael Sundström',
      role: 'Sourcing Director & Co-Founder (Dubai)',
      location: 'Deira, Dubai',
      description: 'Responsible for securing regulatory compliance, quality audits, and procurement from top-tier international manufacturers.'
    },
    {
      name: 'Abukar Awes',
      role: 'Operations & Logistics Manager (Somalia)',
      location: 'Mogadishu, Somalia',
      description: 'Leads the local team in Mogadishu, manages customs procedures at ports, and handles final door-to-door clinic distribution.'
    }
  ];

  return (
    <div id="about-us-page" className="py-16 bg-[#f4f7f9] animate-in fade-in duration-350">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page title header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-[#2c8fa0] bg-[#f0f8fa] border border-[#2c8fa0]/20 px-3.5 py-1.5 rounded-full uppercase tracking-widest block w-max mx-auto mb-4">
            Our Sourcing & Logistics Heritage
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#1a3a42] tracking-tight">
            About Nordic Group
          </h1>
          <p className="text-sm text-[#6b8f96] mt-3 leading-relaxed">
            We equip modern dental clinics in Somalia and East Africa with secure, premium clinical materials sourced from leading manufacturers.
          </p>
        </div>

        {/* Vår historia */}
        <section id="our-history" className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-sans font-extrabold text-2xl text-[#1a3a42] tracking-tight border-b border-[#e1e3e4] pb-2">
              Our History
            </h2>
            <p className="text-xs sm:text-sm text-[#6b8f96] leading-relaxed">
              Nordic Group was established in 2022 with a singular vision: to democratize access to reliable, certified clinical dental consumables and precision models in East Africa. We realized that a shortage of medical-grade steel instruments and temperature-controlled materials presented a hurdle for clinic safety.
            </p>
            <p className="text-xs sm:text-sm text-[#6b8f96] leading-relaxed">
              With our main sourcing operations placed in Deira, Dubai (UAE) and complemented by our own local clearing offices in Mogadishu, we streamline the complete supply pipeline from Dubai directly to Somalia. Every batch undergoes strict mechanical checks before departure – enabling dental surgeons to practice with complete peace of mind.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#e1e3e4] border-t-[3px] border-t-[#2c8fa0] shadow-[0_2px_12px_rgba(0,0,0,0.07)] rounded-2xl p-8 space-y-5">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#f0f8fa] text-[#2c8fa0] flex items-center justify-center shrink-0 border border-[#2c8fa0]/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a3a42]">Certified High Quality Standards</h3>
                <p className="text-xs text-[#6b8f96] mt-1">We put biological patient protection and material safety first in every batch.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#f0f8fa] text-[#2c8fa0] flex items-center justify-center shrink-0 border border-[#2c8fa0]/20">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a3a42]">Collaborative Clinic Partnerships</h3>
                <p className="text-xs text-[#6b8f96] mt-1">We establish stable, long-term procurement frameworks with physical clinics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vad vi erbjuder (lista) */}
        <section id="what-we-offer" className="mb-16 py-10 px-8 bg-white border border-[#e1e3e4] border-t-[3px] border-t-[#2c8fa0] shadow-[0_2px_12px_rgba(0,0,0,0.07)] rounded-2xl">
          <h2 className="font-sans font-extrabold text-2xl text-[#1a3a42] tracking-tight mb-6">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {whatWeOffer.map((offer, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2c8fa0] shrink-0 mt-1.5" />
                <p className="text-xs sm:text-sm text-[#6b8f96] leading-relaxed font-medium">
                  {offer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Varför välja oss (3-4 punkter) */}
        <section id="why-choose-us" className="mb-16">
          <h2 className="font-sans font-extrabold text-2xl text-[#1a3a42] tracking-tight mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((point, i) => (
              <div key={i} className="bg-white border border-[#bfc8ca]/35 border-t-[3px] border-t-[#2c8fa0] rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:translate-y-[-2px] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#f0f8fa] flex items-center justify-center mb-4 border border-[#2c8fa0]/15">
                  {point.icon}
                </div>
                <h3 className="text-sm font-bold text-[#1a3a42] tracking-tight mb-2">
                  {point.title}
                </h3>
                <p className="text-xs text-[#6b8f96] leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Vårt team (valfritt) */}
        <section id="our-team" className="mb-12 border-t border-[#e1e3e4] pt-12">
          <h2 className="font-sans font-extrabold text-2xl text-[#1a3a42] tracking-tight mb-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-white border border-[#e1e3e4] border-t-[3px] border-t-[#2c8fa0] shadow-[0_2px_12px_rgba(0,0,0,0.07)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-base font-extrabold text-[#1a3a42] tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-[#2c8fa0] mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#6b8f96] leading-relaxed italic">
                    "{member.description}"
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center text-[11px] text-[#6b8f96]">
                  <span className="font-semibold text-[#1a3a42]">Station {i + 1}</span>
                  <span>{member.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trigger bottom quote request */}
        <div className="text-center pt-8 border-t border-[#e1e3e4]">
          <button
            onClick={onNavigateToContact}
            className="px-6 py-3 bg-[#2c8fa0] hover:bg-[#1a6e7e] text-white rounded-[6px] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            Contact Us Regarding Sourcing
          </button>
        </div>

      </div>
    </div>
  );
}
