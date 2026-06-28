import { Product, CategoryInfo } from './types';

export const CATEGORIES: CategoryInfo[] = [
  {
    key: 'composites',
    title: 'Composites',
    shortDescription: 'Advanced filling materials, restoratives, and aesthetic brackets.',
    fullDescription: 'Our premium line of dental composites and restoration essentials includes nano-hybrid composites, superhydrophilic impression silicones, crystal sapphire ceramic brackets, and high-quality bonding materials.',
    iconName: 'Sparkles',
    imagePlaceholder: 'BG-A'
  },
  {
    key: 'tools',
    title: 'Tools',
    shortDescription: 'Diagnostic hand instruments, turbines, autoclaves, and clinical appliances.',
    fullDescription: 'High-performance diagnostic hand instruments, turbines, autoclaves, dental delivery carts, and precision clinical tools engineered for advanced dental procedures.',
    iconName: 'Activity',
    imagePlaceholder: 'BG-C'
  },
  {
    key: 'imaging',
    title: 'X-Ray & Imaging',
    shortDescription: 'Intraoral radiography sensors and handheld portable x-ray systems.',
    fullDescription: 'Modern diagnostic imaging components providing low radiation dosages alongside ultra-high-resolution sensors for accurate instant clinical diagnostics and analysis.',
    iconName: 'Layers',
    imagePlaceholder: 'BG-D'
  }
];

// =========================================================================
// CUSTOM CLINICAL PRODUCT CATALOG WITH LOCAL IMAGES
// Host your local files in "/public/images/products/" to display them here!
// =========================================================================
export const PRODUCTS: Product[] = [
  // Composites
  {
    id: 'cons-01',
    name: 'Nordic Translucent Ceramic Brackets',
    category: 'composites',
    description: 'Designed for patients demanding high-aesthetic orthodontic treatment, these premium monocrystalline sapphire brackets offer virtual invisibility by blending seamlessly with natural tooth enamel. The ultra-smooth slot surfaces substantially reduce sliding friction for optimized wire mechanics and accelerated tooth movement. This medical-grade appliance provides outstanding color-stability against dietary pigments and is fitted with a specialized mechanical retention base.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1IMAR_U3hqsf4mdiL-OAlkX1AVoC61mNg&sz=w1000',
    features: [
      '100% High-Purity Monocrystalline Sapphire for crystal-clear aesthetics',
      'Micro-porous biological base structure for maximal mechanical adhesion',
      'Extreme slot surface smoothness to reduce orthodontic sliding friction',
      'Impervious to coffee, tea, and everyday dietary staining agents'
    ],
    specifications: {
      'Prescription Type': 'Roth / MBT .022" slot configurations with custom torque metrics',
      'Chassis Material': 'Medical Grade High-Translucency Alumina Sapphire Monocrystal',
      'Retention Engine': 'Anodized micro-porous lock base to prevent bracket shearing',
      'What It Is Used For': 'Aesthetic alignment of crowded or spaced dentition in orthodontic therapies',
      'For Dental Professional': 'Orthodontists and Specialty Orthodontic Clinicians'
    },
    catalogRef: 'NG-OB-201',
    isFeatured: true,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'cons-02',
    name: 'Clinik Universal Nano-Hybrid Composite',
    category: 'composites',
    description: 'A universal light-cure restorative composite utilizing nano-hybrid technology to achieve a perfect balance of mechanical toughness and lifelike aesthetics. Its chameleon-like shade matching adapts seamlessly to the surrounding enamel structure. Extremely low volumetric shrinkage preserves tight marginal seals and prevents secondary recurrent decay.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1JCd6R_9VUTQleuzRULkBPbs99sVPaXWQ&sz=w1000',
    features: [
      '82% inorganic filler density for maximum wear resistance',
      'Excellent polishability and natural opalescence',
      'Non-sticky formulation - easy to sculpt and handle',
      'Perfect shade matching (Chameleon effect)'
    ],
    specifications: {
      'Shades': 'A1, A2, A3, B2',
      'Filler System': 'Barium glass with nano-silica',
      'Cure Time (LED)': '20 seconds per layer',
      'Compressive Strength': '380 MPa',
      'What It Is Used For': 'Direct anterior and posterior restorations of Class I through V cavities',
      'For Dental Professional': 'General Dentists and Restorative Specialists'
    },
    catalogRef: 'NG-RC-302',
    isFeatured: true,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'cons-03',
    name: 'NordicSil Light Body Wash Silicone',
    category: 'composites',
    description: 'An addition-cure correction silicone with superior hydrophilic properties designed to replicate sub-micron prepared tooth structures. The thixotropic fluid stays placed in the sulcus area without running or dripping. Its outstanding tear strength allows the final set impression to be removed from deep undercuts without marginal damage.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1CxZix6a6HbO7ZwX5iavCSVFm0wvOWUPX&sz=w1000',
    features: [
      'Exceptional precision even in moist oral environments',
      'Thixotropic formula – stays where placed without running',
      'High mechanical tear strength without distortion',
      'Ideal for crowns, bridges, and prosthodontics'
    ],
    specifications: {
      'Working Time': '1 minute 30 seconds',
      'Setting Time': '3 minutes total',
      'Mixing Ratio': '1:1 cartridge system',
      'What It Is Used For': 'Highly detailed final correction wash in double-impression steps',
      'For Dental Professional': 'Prosthodontists and General Dental Practitioners'
    },
    catalogRef: 'NG-LB-044',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'cons-04',
    name: 'Premium Micro-Hybrid Restorative Composite Kit',
    category: 'composites',
    description: 'A versatile micro-hybrid composite kit designed to provide dependable durability and polished aesthetics in both load-bearing and anterior regions. Its physical handling allows for easy carving of cusp layouts without slumping. Provides excellent shade-fastness and low contraction stress to extend restoration lifespan.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1V_4AiCpCJB2QJiL_6yZaQY-BxJsriDLX&sz=w1000',
    features: [
      'Minimal polymerisation shrinkage (<1.5%) to prevent microleakage',
      'High filler load (82%) provides excellent physical properties and durability',
      'Polishable to an exceptionally high, natural enamel gloss'
    ],
    specifications: {
      'Curing System': 'LED light-cured (405nm working spectrum)',
      'Compressive Strength': '395 MPa',
      'Filler Size': '0.02 to 2.5 micrometers hybrid blend',
      'What It Is Used For': 'Anterior aesthetic shaping and posterior cavity wall rebuilding',
      'For Dental Professional': 'General Dentists and Aesthetic Restorative Surgeons'
    },
    catalogRef: 'NG-RC-304',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'cons-05',
    name: 'NordicSil Heavy Body Impression Material',
    category: 'composites',
    description: 'A robust hydrophilic addition silicone tray material designed to guide lighter wash silicones directly into sulcus detail crevices. Exceptional dimensional stability retains preparation boundaries perfectly for multiple days. Designed to resist intraoral forces when withdrawing from complex prepared margins.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1_8dgkM3m8iWNY5ARh2QOqZnjA1GGtaIM&sz=w1000',
    features: [
      'Exceptional dimensional stability with near-zero setting distortion',
      'Excellent mechanical properties with high tear resistance',
      'Acts as the perfect primary tray base for light-body dental wash'
    ],
    specifications: {
      'Mixing Ratio': '1:1 cartridge delivery',
      'Working Duration': '2 minutes',
      'Total Setting Time': '4 minutes 30 seconds',
      'What It Is Used For': 'Heavy-grade foundational tray support in fixed prosthodontic impression techniques',
      'For Dental Professional': 'Prosthodontists and Implantologists'
    },
    catalogRef: 'NG-HB-045',
    isFeatured: false,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'cons-06',
    name: 'Nordic Prime Bond & Adhesive System',
    category: 'composites',
    description: 'A single-component, fifth-generation light-cure bonding agent developed to achieve a highly durable interface with enamel and dentin. It utilizes a solvent-free formula that seals dentin tubules to alleviate tooth sensitivity completely. Eliminates clinical mixing steps to ensure highly predictable results.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1D5Vu8BdLkWWAvm8al8TfCTkB0FAFILkr&sz=w1000',
    features: [
      'High bond-strength performance to dentin and enamel (up to 30 MPa)',
      'Solvent-free formulation ensures minimal post-operative sensitivity',
      'Single-bottle application saves valuable clinical chair time'
    ],
    specifications: {
      'Shear Bond Strength': '30.2 MPa on etched enamel',
      'Curing Mode': 'Visible light-cure dental systems (10 seconds)',
      'Storage Condition': 'Refrigerate (2-8°C) for optimal long-term shelf stability',
      'What It Is Used For': 'Robust bonding interface for primary resins, core buildups, and composites',
      'For Dental Professional': 'General Restorative Clinicians and Operative Dentists'
    },
    catalogRef: 'NG-PB-306',
    isFeatured: true,
    origin: 'Gothenburg, Sweden'
  },

  // Instruments
  {
    id: 'inst-01',
    name: 'Professional Diagnostic Instrument Set',
    category: 'composites',
    description: 'A premium-grade surgical stainless steel explorer and diagnostic probe kit. Features rattle-free hollow handles designed to optimize tactile sensations when searching for structural enamel weaknesses. Coated in an anti-glare satin finish to eliminate visual stress under modern high-powered LED clinical illumination.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1gB950I26y7XrFUASxw7k23HcAr3sxVLA&sz=w1000',
    features: [
      'Satin-finish surface eliminates reflections and glare',
      'Includes front-surface mirror, probe, and graduated probe',
      '100% autoclavable up to 134°C',
      'Ergonomic grip design minimizes wrist fatigue'
    ],
    specifications: {
      'Material': 'German SUS440C Surgical Stainless Steel',
      'Contents': 'Probe No 23, CP12 Periodontal Probe, Mouth Mirror No 4, Tweezers',
      'Cleaning': 'Suitable for thermal disinfector and autoclave',
      'Standard': 'CE-certified, FDA, ISO 9001',
      'What It Is Used For': 'Routine intraoral patient examinations, periodontal assessment, and diagnosis',
      'For Dental Professional': 'Dental Hygienists, General Dentists, and Periodontists'
    },
    catalogRef: 'NG-DS-801',
    isFeatured: true,
    origin: 'Solna, Sweden'
  },
  {
    id: 'inst-02',
    name: 'Orthodontic Distal Wire Cutter',
    category: 'composites',
    description: 'Precision surgical pliers with hard Tungsten Carbide cutting edges capable of easily slicing thick braces wires. Features an active holding mechanism to retain cut wire tails safely so they do not fall into the mouth. Designed with a matte coating that avoids direct light reflection.',
    imageUrl: 'https://drive.google.com/thumbnail?id=16Q0XDBb0cLesm6flC99Ukp4Jc1a9Olgo&sz=w1000',
    features: [
      'Tungsten Carbide inserts for extreme durability and cutting sharpness',
      'Cuts archwires up to .021 x .025 inches',
      'Integrated safety hold mechanism protects patients during wire trimming'
    ],
    specifications: {
      'Cutting Edge': 'Tungsten Carbide (TC)',
      'Length': '13 cm',
      'Finish': 'Matte corrosion-resistant steel',
      'What It Is Used For': 'Trimming the rear ends of orthodontic wires flush against molar tubes',
      'For Dental Professional': 'Orthodontists and Specialty Orthodontic Assistants'
    },
    catalogRef: 'NG-PL-510',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'inst-03',
    name: 'Stainless Steel Dental Root Elevator Set',
    category: 'composites',
    description: 'An essential collection of surgical luxative elevators engineered to safely luxate tooth roots. Thin, sharp-pointed blades easily separate periodontal attachment fibers around the roots. The ergonomic hexagonal handle allows clinicians to apply controlled mechanical leverage with minimal stress.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1sr4XMgjjj9OouLkTTUX2dq9QDwQv6nf_&sz=w1000',
    features: [
      'German stainless steel construction with a durable satin luster',
      'Thin, sharp tip profiles designed for gentle, non-traumatic root luxation',
      'Lightweight handles deliver ideal comfort and balanced clinical leverage'
    ],
    specifications: {
      'Material': 'German Biocompatible SUS304 Surgical Stainless Steel',
      'Assortment': 'Includes Straight, Curved, Bein, and Flohr dental styles',
      'Sterilization': 'Fully autoclavable up to 134°C',
      'What It Is Used For': 'Trauma-free luxation of dental roots and bone widening beforehand',
      'For Dental Professional': 'Oral Surgeons, Maxillofacial Specialists, and General Practitioners'
    },
    catalogRef: 'NG-EL-803',
    isFeatured: false,
    origin: 'Solna, Sweden'
  },
  {
    id: 'inst-04',
    name: 'Precision Orthodontic Wire Bender Pliers',
    category: 'composites',
    description: 'Orthodontic loop bender pliers fitted with high-durability Tungsten Carbide inserts to provide reliable wire bending. The box-joint hinge keeps the jaws aligned under heavy grip pressures. Smooth tips block wire scoring, protecting the braces archwire integrity.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1UVghtTG5Eiv5PYZjEPhjG-w5ThWSbPpb&sz=w1000',
    features: [
      'Tungsten Carbide tip inserts offer stellar wear resistance and grip',
      'Zero-slip tip profile ensures precise wire loop bending without scoring',
      'Box-joint precision hinge maintains perfect alignment under load'
    ],
    specifications: {
      'Hinge JointType': 'Preloaded Box-Joint alignment',
      'Max Wire Thickness': '.021 x .025 inches archwire',
      'Instrument Length': '13.5 cm',
      'What It Is Used For': 'Accurate bending, looping, and forming of orthodontic wires',
      'For Dental Professional': 'Orthodontists'
    },
    catalogRef: 'NG-PL-512',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },

  // Equipment
  {
    id: 'equip-01',
    name: 'Fiber-Optic High-Speed Handpiece',
    category: 'composites',
    description: 'A surgical rotary turbine featuring robust daylite LED optics emitting a full 25,000 Lux of daylight. Ceramic ball bearings provide steady, whisper-quiet performance with low micro-vibrations. High-performance 4-port sprays suppress heat buildup to protect pulpal vitality.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1pDrazSjVvFGHqnnhcDW1b6cu7L0Tx500&sz=w1000',
    features: [
      '4-point spray water cooling protects the dental pulp',
      'Anti-retraction head prevents cross-contamination',
      'Ultra-quiet ceramic ball bearings with long service life',
      'Push-button chuck head for fast and secure bur changes'
    ],
    specifications: {
      'Connection': 'Midwest 4-hole',
      'Rotation Speed': '400,000 RPM',
      'Luminosity': '25,000 Lux LED',
      'Noise Level': '<58 dB',
      'What It Is Used For': 'Urgent caries removal, enamel reduction, and tooth preparational sculpting',
      'For Dental Professional': 'General Dentists, Prosthodontists, and Endodontists'
    },
    catalogRef: 'NG-HP-920',
    isFeatured: true,
    origin: 'Västerås, Sweden'
  },
  {
    id: 'equip-02',
    name: 'ProCart Mobile Dental Delivery Trolley',
    category: 'composites',
    description: 'A versatile mobile work station structured with easy-cleaning shelves to accommodate clinical tools. Features heavy silent caster wheels with individual brake locks for easy repositioning. Outfitted with multiple internal power sockets to simplify power distribution.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1nHpHMhPVKjG3Ze7hDEQ9oEW23z-IK-na&sz=w1000',
    features: [
      'Robust steel frame with durable chemical-resistant finish',
      '3-way internal power outlet strip and storage shelves',
      'Hygienic smooth surfaces – easy to wipe-clean and sanitize'
    ],
    specifications: {
      'Dimensions': '50 x 48 x 85 cm',
      'Weight': '14 kg',
      'Castors': '4 lockable swivel castors',
      'What It Is Used For': 'Staging, arranging, and moving equipment easily inside operating areas',
      'For Dental Professional': 'Dental Assistants, Hygienists, and Dental Surgeons'
    },
    catalogRef: 'NG-PC-120',
    isFeatured: false,
    origin: 'Lund, Sweden'
  },
  {
    id: 'equip-03',
    name: 'Classic High-Speed Dental Turbine',
    category: 'composites',
    description: 'An efficient, durable dental turbine designed to deliver reliable rotation speeds up to 380,000 RPM with low mechanical vibrations. An integrated anti-suction design helps control cross-contamination. Built with single-port water cooling for everyday clinical procedures.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1MOWqIy9S5TdcD3e6SB4YL-ucbR163rRh&sz=w1000',
    features: [
      'High speed rotation of up to 380,000 RPM with low vibration',
      'Special diagnostic head prevents water/saliva backup or suction',
      'Quick, secure push-button chuck locking system'
    ],
    specifications: {
      'Pneumatic Drive': '0.22 - 0.25 MPa air pressure',
      'Rotor Torque': 'High torque pneumatic turbine',
      'Coolant Spray': 'Single-port micro-spray jet water line',
      'What It Is Used For': 'Routine restorative cavity preparations and crown removal procedures',
      'For Dental Professional': 'General Restorative Dentists'
    },
    catalogRef: 'NG-HP-910',
    isFeatured: false,
    origin: 'Västerås, Sweden'
  },
  {
    id: 'equip-04',
    name: 'ProCart Standard Dental Utility Workstation',
    category: 'composites',
    description: 'A clinical trolley system constructed from carbon steel with a powder-coated antimicrobial finish. Features three spacious shelves with high protective rims to hold diagnostic and therapeutic setup boxes. Provides lockable silent caster rollers for easy operatory movement.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1S_QfOKhkLthRKwKbhS7uJ7I9u2fAsIbI&sz=w1000',
    features: [
      'Sturdy carbon-steel framing with anti-microbial chemical coating',
      'Built-in 220V multi-outlet strip for clinic accessories',
      'Smooth-rolling caster wheels offer silent workspace re-positioning'
    ],
    specifications: {
      'Organiser Shelves': '3 functional metallic shelves with high rim guards',
      'Total Dimensions': '45 x 45 x 80 cm',
      'Load Capacity': 'Up to 30 kg aggregate load',
      'What It Is Used For': 'General storing, organizing, and transporting dental restorative trays and materials',
      'For Dental Professional': 'Dental Operatory Nurses and Hygienists'
    },
    catalogRef: 'NG-PC-110',
    isFeatured: false,
    origin: 'Lund, Sweden'
  },

  // Imaging
  {
    id: 'img-01',
    name: 'NordicScan USB Intraoral Sensor',
    category: 'composites',
    description: 'An advanced CMOS-driven radiography sensor providing crystal-clear 25 lp/mm resolution imaging. The waterproof IP68 housing stands up to complete clinical decontamination. Its rounded corner shape is comfortable for patients during intraoral exposures.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1DGcpo1pCuz3CjQufwy6T1hjXKAzwLU93&sz=w1000',
    features: [
      'High-resolution images enable accurate instant diagnosis on screen',
      'Rounded corners for optimal patient comfort',
      'Direct high-speed USB interface with plug-and-play capability',
      'Completely dust and waterproof (IP68)'
    ],
    specifications: {
      'Sensor Technology': 'Advanced CMOS with fiber optic scintillator',
      'Theoretical Resolution': '25 lp/mm',
      'Cable Length': '2.7 meters',
      'Software Compatibility': 'DICOM-compliant, works with all major imaging programs',
      'What It Is Used For': 'High-resolution digital digital radiography, caries detection, and bone height checks',
      'For Dental Professional': 'General Dentists, Endodontists, and Periodontists'
    },
    catalogRef: 'NG-IS-601',
    isFeatured: true,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'img-02',
    name: 'DentalScan Portable Handheld X-Ray',
    category: 'composites',
    description: 'A lightweight portable handheld radiography device with a localized exposure focus that yields high-resolution images. Features thick internal lead linings to fully exclude scatter radiation for clinician protection. Equipped with a lithium battery supporting up to 150 exposures per charge.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Ytpabs5_z9yeHcBLcoRnU8xdJXU2ceV4&sz=w1000',
    features: [
      'Lightweight and ergonomically balanced for single-handed use',
      'Double internal lead shielding protects the clinician from scatter',
      'High-capacity lithium battery allows up to 150 exposures per charge'
    ],
    specifications: {
      'Tube Voltage': '60 kV',
      'Tube Current': '2 mA',
      'Focal Spot': '0.4 mm',
      'Weight': '1.8 kg',
      'What It Is Used For': 'Chairside dental radiography without requiring dedicated wall-mounted x-ray arms',
      'For Dental Professional': 'General Practitioners, Mobile Clinicians, and Pediatric Dentists'
    },
    catalogRef: 'NG-PX-440',
    isFeatured: false,
    origin: 'Lund, Sweden'
  },
  {
    id: 'img-03',
    name: 'Elite HD Digital Imaging Sensor',
    category: 'composites',
    description: 'A thin, titanium-framed intraoral radiography sensor with supreme CMOS micro-pixel sensors. Carbon-fiber backplates prevent bending and mechanical cracking. Works securely over standard high-volume diagnostic loads.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1LhKmvkCE_68gJyLAY2P1zJCIQtFM3JN2&sz=w1000',
    features: [
      'Comfortable active sensor surface area suited for diverse patient profiles',
      'Rugged carbon-fiber composite backing prevents mechanical cracking',
      'Interoperable digital imaging driver integrates smoothly with standard software'
    ],
    specifications: {
      'Active Technology': 'High sensitivity active CMOS with direct micro-scintillator',
      'Clarity Resolution': '22 lp/mm detail clarity',
      'Waterproof Rating': 'IP67 moisture and dust seal',
      'What It Is Used For': 'High-fidelity intraoral radiologic scanning for pathology screening',
      'For Dental Professional': 'General Dentists, Endodontists, and Implant Practitioners'
    },
    catalogRef: 'NG-IS-599',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'img-04',
    name: 'DentalScan Pro Handheld Radiography System',
    category: 'composites',
    description: 'An advanced handheld dental X-ray camera system featuring a high penetration 65 kV tube voltage. Features thick internal lead-shield walls to keep operator exposure at zero. Highly recommended for endodontic monitoring, implant seating checks, and caries discovery.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1LEYjkgthKafhVlUvIyR0ViGMtL5K9btV&sz=w1000',
    features: [
      'Double-layer internal lead shield restricts scatter backscatter to zero',
      'Micro-focus focal point generates razor-sharp anatomical outline captures',
      'High capacity Li-ion power pack enables up to 150 exposures per charge'
    ],
    specifications: {
      'Tube Output': '65 kV stability',
      'Safe Shielding': '0.8mm internal safety lead lining',
      'Exposure Control': 'Range between 0.01 and 2.00 seconds',
      'What It Is Used For': 'On-the-spot high-penetration intraoral dental radiography',
      'For Dental Professional': 'Implantologists, Oral Surgeons, and General Clinicians'
    },
    catalogRef: 'NG-PX-450',
    isFeatured: false,
    origin: 'Lund, Sweden'
  },
  {
    id: 'img-05',
    name: 'Nordic Orthopantomograph OPG-3D',
    category: 'imaging',
    description: 'State-of-the-art extraoral 3D OPG system. Panoramic radiographic machine featuring multi-slice Tomosynthesis for razor-sharp dental arch scans and minimal radiation dosage.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1R2y3IPcrcgXduyvT--EZaBiT8gko6eFz&sz=w1000',
    features: [
      'Multi-layer Panomatic technology',
      'Adaptive focal trough alignment',
      'Low-dose clinical scanning profiles'
    ],
    specifications: {
      'Sensor Type': 'Direct-conversion CMOS panoramic',
      'Scan Program': 'Standard panoramic, TMJ, child-pantomography',
      'Expose Duration': '8 - 14 seconds',
      'What It Is Used For': 'Complete radiographic examination of teeth, alveolar bone, and jaw structures',
      'For Dental Professional': 'Maxillofacial surgeons, Orthodontists, and general clinical practices'
    },
    catalogRef: 'NG-OPG-101',
    isFeatured: true,
    origin: 'Stuttgart, Germany'
  },
  {
    id: 'img-06',
    name: 'NordicScan Dental Phosphor Plate System',
    category: 'imaging',
    description: 'Ultra-thin phosphor plate (PSP) reader. Turns high-fidelity analog radiograph plates into digital files in under 10 seconds. Completely covers patients requiring variable dental imaging dimensions.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1SuCIVjrfmUZiLGGDvqH-C5o7RfNosSaA&sz=w1000',
    features: [
      'Compatible with plate size 0 to 4',
      'Rapid diagnostic scan processing',
      'Flexible plates optimized for patient comfort'
    ],
    specifications: {
      'Plate Handling': 'Automatic insertion & erasing loop',
      'Scanner Resolution': 'Up to 40 lp/mm',
      'Scan Process Speed': '6.8 seconds average processing time',
      'What It Is Used For': 'Converting intraoral radiography phosphor plates into high-resolution digital files',
      'For Dental Professional': 'Dental Radiographers, Orthodontists, and General Clinicians'
    },
    catalogRef: 'NG-PSP-202',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'img-07',
    name: 'DentalScan HD Intraoral Camera System',
    category: 'imaging',
    description: 'Ergonomic intraoral wand camera with precise autofocus, built-in glare-free LED illumination, and digital capture integration. Excellent tool for interactive diagnostics and patient treatment walkthroughs.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Ieo-zaHsXR80V9PaJ2WffvwXNya2yvQv&sz=w1000',
    features: [
      'High Definition 1080p sensor resolution',
      '8-point surgical LED visual glow rings',
      'Micro-focus lens resolving 1.0mm-to-infinity details'
    ],
    specifications: {
      'Interface Connect': 'USB 3.0 digital throughput',
      'Wand Grip Design': '95g featherlight ergonomic medical polymer',
      'Resolution Ratio': '1920 x 1080 Active Pixels',
      'What It Is Used For': 'Interactive high-definition intraoral patient diagnosis and case documentation',
      'For Dental Professional': 'Aesthetic Clinicians, General Dentists, and Hygienists'
    },
    catalogRef: 'NG-IC-303',
    isFeatured: false,
    origin: 'Lund, Sweden'
  },
  {
    id: 'img-08',
    name: 'Elite3D Cone Beam Computed Tomography (CBCT)',
    category: 'imaging',
    description: 'Multi-field-of-view clinical CBCT scanner providing true high-resolution isotropic 3D scans. Ideal for precision planning in dental implant placements, endodontic therapy, and orthodontic analysis.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1ElXYjGENHCQj7g_FTZv3WtK3dudc6cAe&sz=w1000',
    features: [
      'Multi FOV capability (up to 12x10cm)',
      'Pulsed-beam x-ray mechanism for ultra-low dose',
      'Interactive DICOM visual reconstruction module'
    ],
    specifications: {
      'Voxel Dimensions': 'Down to 75 micrometers (isotropic)',
      'Scan Duration': '11 seconds quick-scan phase',
      'Compliance Code': 'Certified medical device EN 60601-1',
      'What It Is Used For': 'High-precision 3D diagnostic scanning of dentomaxillofacial anatomy',
      'For Dental Professional': 'Implantologists, Oral Surgeons, and Maxillofacial Radiologists'
    },
    catalogRef: 'NG-CBCT-404',
    isFeatured: true,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'img-09',
    name: 'NordicScan Mobile Cart Imaging Workstation',
    category: 'imaging',
    description: 'Fully integrated clinic-grade mobile imaging console. Unites flat-panel displays, x-ray sensors, and secure diagnostic software onto a chemical-resistant mobile platform.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1o3Zfh9C_SFH_yFQAkulHL7yQsEiXL9PQ&sz=w1000',
    features: [
      'Lockable anti-static wheels with full movement',
      'Adjustable clinical desktop ergonomics',
      'Sealed control panels with touch interaction support'
    ],
    specifications: {
      'Terminal Module': 'Fanless dustproof medical computer',
      'Power Station': 'Integrated battery backup system (UPS)',
      'Chassis Construct': 'High-performance steel with anti-microbial paint',
      'What It Is Used For': 'Centralizing, transporting, and executing chairside dental radiologic imaging',
      'For Dental Professional': 'Dental Assistants, Hygienists, and General Clinicians'
    },
    catalogRef: 'NG-MWS-505',
    isFeatured: false,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'img-10',
    name: 'DentalScan Cephalometric Attachment Module',
    category: 'imaging',
    description: 'Dedicated cephalometric scanning arm designed for panoramic machines. Delivers ultra-sharp skull radiographs for orthodontic tracing, craniomandibular diagnostics, and treatment planning.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1CmK6j0oAqSoELIuEWFWzgfVKQQdzKhXI&sz=w1000',
    features: [
      'One-touch soft-tissue profiling filters',
      'Extremely stable head fixation clamps',
      'Rapid lateral skull capture under 3 seconds'
    ],
    specifications: {
      'Scan Programs': 'Lateral, AP/PA, Waters, and carpus scanning',
      'Focal Spot Setup': '0.5 mm micro-focus',
      'Scan Capture Speed': '2.6 to 4.2 seconds range',
      'What It Is Used For': 'Acquiring lateral and sagittal cranial radiographs for orthodontic skeletal tracing',
      'For Dental Professional': 'Orthodontists and Oral-Maxillofacial Surgeons'
    },
    catalogRef: 'NG-CEP-606',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'img-11',
    name: 'NordicScan Digital Dental Arch Scanner',
    category: 'imaging',
    description: 'High-precision intraoral digital scanner delivering flawless powder-free three-dimensional teeth modeling. Accelerates restorative cycles and enhances clinical workflow productivity.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1b5Pp4vxyjgiYy4Kx79nLEk_pBoNXZa62&sz=w1000',
    features: [
      'Real-time visual rendering showing true dental coloring',
      'Lightweight compact body with autoclavable ends',
      'Full system integration supporting standard CAD/CAM export'
    ],
    specifications: {
      'Scanner Tech': 'High-speed continuous video scanning',
      'CAD Export': 'Direct export of STL, PLY, and OBJ data models',
      'Weight Profile': '210g featherlight handheld wand',
      'What It Is Used For': 'Direct powderless digital impression modeling for CAD/CAM restorations',
      'For Dental Professional': 'Prosthodontists, Orthodontists, and Cosmetic Surgeons'
    },
    catalogRef: 'NG-IOS-707',
    isFeatured: true,
    origin: 'Lund, Sweden'
  },

  // Sterilization
  {
    id: 'ster-01',
    name: 'NordicClave Class B Steam Sterilizer (22L)',
    category: 'composites',
    description: 'An exceptional-capacity Class B pre-vacuum steam sterilizer that meets the highest EN13060 European standards. Equipped with three fractionated vacuum phases to guarantee steam penetration in complex hollow hand instruments. Includes an integrated thermal printer to log biosecurity compliance.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1_JlaYTM3D12meYgEIv_9DaJFYRym5iE_&sz=w1000',
    features: [
      '3-stage fractionated pre-vacuum ensures perfect steam penetration',
      'Integrated thermal printer and USB port for computerized logs',
      'High-efficiency bacterolocial filter included',
      'Double-safety door locking mechanism'
    ],
    specifications: {
      'Chamber Dimensions': '250 mm x 450 mm',
      'Volume': '22 Liters',
      'Sterilization Temps': '121°C and 134°C',
      'Power Consumption': '1950W',
      'What It Is Used For': 'Complete sterilization of surgical instruments, porous materials, and dental turbines',
      'For Dental Professional': 'Infection Control Officers, Dental Auxiliaries, and Dental Hygienists'
    },
    catalogRef: 'NG-NC-22B',
    isFeatured: true,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'ster-02',
    name: 'NordicClave Eco Steam Autoclave (18L)',
    category: 'composites',
    description: 'A compact Class B vacuum steam autoclave engineered with eco cycles to sterilize everyday hand tools in only 22 minutes. Features electronic water sensors to guard against structural dry overheating. Fits three standard instrument trays comfortably, saving clinical countertop space.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Sn3Wzkb8RSk5PaXneZ-if216IKPx4s0z&sz=w1000',
    features: [
      'Eco rapid-sterilisation cycle completes in 22 minutesflat',
      'Advanced mechanical water diagnostics sensor blocks running empty',
      'High-performance fractionated vacuum guarantees complete air removal'
    ],
    specifications: {
      'Sterilization Chamber': '18 Liters medical autoclave chamber',
      'Preset Temperatures': '121°C and 134°C adjustable menus',
      'Safe Max Load': '4.5 kg clinical instruments',
      'What It Is Used For': 'Rapid sterilization of critical dental handpieces and surgical accessories',
      'For Dental Professional': 'Dental Nurses, Assistants, and General Dental Practitioners'
    },
    catalogRef: 'NG-NC-18B',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'ster-03',
    name: 'Digital Ultrasonic Cleaner (3L)',
    category: 'tools',
    description: 'A high-powered digital ultrasonic bath featuring frequency sweep technology to break down cement residues and organic soils. Coated in chemical-resistant steel, it has a built-in heater up to 80°C to speed up decontamination. Essential for safe surgical tool prep before autoclave cycles.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    features: [
      'Industrial ultrasonic transducers generate powerful cavitation',
      'Heater heating up to 80°C accelerates organic material release',
      'Stainless steel basket and lid dampen operational noise'
    ],
    specifications: {
      'Capacity': '3 Liters',
      'Ultrasonic Frequency': '40 kHz',
      'Timer': '1-99 minutes digital setup',
      'What It Is Used For': 'Ultrasonic pre-cleansing of hand tools, burs, files, and scaling tips',
      'For Dental Professional': 'Dental Auxiliaries, Sterilization Technicians, and Surgeons'
    },
    catalogRef: 'NG-UC-303',
    isFeatured: false,
    origin: 'Malmö, Sweden'
  },

  // Office supplies
  {
    id: 'office-01',
    name: 'Custom Printed Patient Record Sheets (A4, 100-pack)',
    category: 'tools',
    description: 'Thick, archive-grade paper patient charts incorporating a pre-printed dental grid for convenient manual clinical notation. Ideal for clinics requiring reliable backup filing. Acid-free and chlorine-free fibers prevent yellowing over decades of records storage.',
    imageUrl: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80',
    features: [
      'Thick 120g archive-grade acid-free paper',
      'Contains complete adult and pediatric dental charting grids',
      'Easy file-cabinet archiving tab pre-printed'
    ],
    specifications: {
      'Size': 'Standard A4',
      'Paper Quality': 'Eco-friendly chlorine-free paper',
      'Quantity': '100 sheets per pack',
      'What It Is Used For': 'Comprehensive patient dental charting, record-keeping, and backup filing',
      'For Dental Professional': 'Clinic Administrators, Dental Assistants, and General Practitioners'
    },
    catalogRef: 'NG-OP-100',
    isFeatured: false,
    origin: 'Malmö, Sweden'
  },
  {
    id: 'office-02',
    name: 'Appointment & Reminder Cards (250-pack)',
    category: 'tools',
    description: 'Classy, double-sided dental appointment cards crafted from premium heavyweight matte cardstock. Features clean appointment entry lines on the front and branding areas on the back. Easy to write on with any standard ballpoint, ink, or gel pen without smudging.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    features: [
      'Premium texturized heavy cardstock paper easy to write on with any pen',
      'Pre-printed fields for Date, Time, Clinician, and cancellation policies'
    ],
    specifications: {
      'Format': '85 x 54 mm (Standard business card size)',
      'Paper Weight': 'Heavy-duty 350g cardstock',
      'What It Is Used For': 'Writing down appointment times and scheduled clinical recalls for patients',
      'For Dental Professional': 'Receptionists, Clinic Reception Staff, and Dental Hygienists'
    },
    catalogRef: 'NG-OP-250',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },

  // NEW TOOLS PAGE ENTRIES WITH SPECIFIC DRIVE LINKS REQUESTED BY USER
  {
    id: 'tool-01',
    name: 'Nordic Explorer Diagnostic Hand Tool',
    category: 'tools',
    description: 'A masterfully balanced dental hand instrument with heat-tempered micro-alloy steel tips. Designed to easily discover subgingival calculus, caries, and hard tissue enamel defects. Hollow cross-milled grips ensure a fatigue-free hand holding and clear tactile feedback.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1DOByGhKYIXgDWhJTOF-iEIf845MDsIAy&sz=w1000',
    features: [
      'Engineered from top-grade heat-tempered micro-alloy steel',
      '9.5mm hollow cross-milled handle offers an optimal tactile response',
      'Expertly balanced structure relieves wrist fatiguing over extended shifts',
      'Withstands repeated high-heat autoclave sterilization'
    ],
    specifications: {
      'Tip Profile': 'Curved hook fine pointed explorer',
      'Handle Pattern': 'Ultralight knurled hollow grip',
      'Material Composition': 'German SUS440C Stainless Steel',
      'Length & Weight': '16.5cm length / 18g total weight',
      'What It Is Used For': 'Routine caries screening, root examination, and crown margin auditing',
      'For Dental Professional': 'General Dentists, Hygienists, and Periodontal Specialists'
    },
    catalogRef: 'NG-UT-701',
    isFeatured: true,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'tool-02',
    name: 'Premium Periodontal Gracey Scale 11/12',
    category: 'tools',
    description: 'A periodontal scaler designed precisely for deep root cleaning on mesial surfaces of the posterior dentition. Dual-ended sharp blades adapt flawlessly to root morphology. Helps specialists and generalists perform periodontal scaling with maximum patient comfort.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1QcOzT4C9ShxMX8-S67PB1f6dFpVgNJuw&sz=w1000',
    features: [
      'Precisely curved neck contours to anatomical molar structure with absolute ease',
      'Satin polish minimizes harsh operational light reflections in the clinic',
      'Tempered blades maintain sharp wedge boundaries through diagnostic cycles'
    ],
    specifications: {
      'Tip Type': 'Double-ended Gracey 11/12 shape',
      'Handle Ergonomics': 'Anti-slip grooved handle core',
      'Approved Standard': 'ISO 13485 surgical device standards',
      'What It Is Used For': 'Deep subgingival scaling, plaque removal, and root planing on posterior teeth',
      'For Dental Professional': 'Periodontists and Dental Hygienists'
    },
    catalogRef: 'NG-UT-702',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'tool-03',
    name: 'High-Definition Rhodium Dental Mirror No. 5',
    category: 'tools',
    description: 'An exceptional-quality mouth mirror coated with Rhodium directly on the front surface to completely prevent ghosting and double-image effects. Polished satin steel stems provide secure diagnostic control and a clear, detailed indirect view of posterior tooth surfaces.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1DcKlsgoZ1TUUVf1PrUen2P4twMlfpcFx&sz=w1000',
    features: [
      'Front Rhodium reflection layer guarantees razor-sharp visual clarity',
      'Teflon-engineered anti-fog shield works smoothly in warm conditions',
      'Perfect weight balancing prevents mouth tissue slippage during exams'
    ],
    specifications: {
      'Lens Style': 'No. 5 standard size flat lens',
      'Mirror Coat': 'Genuine dual-sided front Rhodium plating',
      'Thread Coupling': 'Universal medical screw-on head',
      'What It Is Used For': 'Indirect intraoral visualization, cheek retraction, and diagnostic illuminated transillumination',
      'For Dental Professional': 'All Dental Professionals (Dentists, Hygienists, Assistants)'
    },
    catalogRef: 'NG-UT-703',
    isFeatured: false,
    origin: 'Solna, Sweden'
  },
  {
    id: 'tool-04',
    name: 'Nordic Metric Periodontal Probe CP-12',
    category: 'tools',
    description: 'A premium periodontal measurement hand probe displaying black millimeter markers at 3, 6, 9, 12 mm margins. The micro-rounded blunt tip allows accurate evaluation of pocket depths and bone levels without patient discomfort. Highly resistant to surgical disinfection wear.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1wGYXIYRHBubkjnWvnlT5hDtlIkYdWijC&sz=w1000',
    features: [
      'Crisp high-contrast mark lines at 3, 6, 9, 12 mm margins',
      'Micro-rounded smooth tip ensures pocket assessment without patient pain',
      'Highly resistant to chemical disinfectants'
    ],
    specifications: {
      'Mark Ranges': 'CP-12 metric lines (3, 6, 9, 12 mm)',
      'Probe Stem': 'Standard straight round gauge',
      'Composition': 'High density bio-safe surgical steel',
      'What It Is Used For': 'Measuring active gingival sulcus pockets, bone loss levels, and attachment loss',
      'For Dental Professional': 'Periodontists, Dental Hygienists, and General Clinicians'
    },
    catalogRef: 'NG-UT-704',
    isFeatured: false,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'tool-05',
    name: 'Ergonomic Incisor Extraction Forceps No. 150',
    category: 'tools',
    description: 'Heavy duty surgical premium extraction forceps engineered specifically for upper universal incisors, canines, and dental root segments. Offers high grip mechanical jaw cross-patterns. Contoured beak designs minimize root fracture risks during extraction luxations.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1dqUHGaX0WNcW-kyuzDC8ORe0oyWxVpBL&sz=w1000',
    features: [
      'Textured micro-groove forcep handle prevents slipping inside wet gloves',
      'Preloaded double box hinge resists sideways twisting',
      'Contoured beak profiles reduce bone fracture risk during tooth luxations'
    ],
    specifications: {
      'Anatomical Suitability': 'Upper universal premolar/cuspid geometry',
      'Hinge Assembly': 'Flush micro-rivet box-joint alignment',
      'Certifications': 'Surgical Medical Class A certification',
      'What It Is Used For': 'Surgical extraction, luxation, and removal of upper teeth and roots from sockets',
      'For Dental Professional': 'Oral Surgeons and General Dental Practitioners'
    },
    catalogRef: 'NG-UT-705',
    isFeatured: true,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'tool-06',
    name: 'Straight Luxator root Elevator (Bein 3mm)',
    category: 'tools',
    description: 'A straight root elevator designed to break periodontal fibers safely before extraction. Features a solid hexagonal handle providing extreme mechanical torque and balanced force. Slides smoothly into the periodontal space to preserve cortical bone.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Bgo_Oc64u20OkocvT3Zpbjt-IqbryHo9&sz=w1000',
    features: [
      'Gently curved wedge blade slides into root cavities with zero resistance',
      'Solid handle design stands up to robust clinical rotational forces',
      'Tapered neck delivers ideal ergonomic finger rest placements'
    ],
    specifications: {
      'Blade Width': '3.0mm straight elevator blade',
      'Handle Motif': 'Hexagonal hollow power grip',
      'Corrosion Class': 'Grade A medical steel anti-acid',
      'What It Is Used For': 'Extracting deep dental root residues and loosening teeth before applying forceps',
      'For Dental Professional': 'Oral Surgeons and General Dentists'
    },
    catalogRef: 'NG-UT-706',
    isFeatured: false,
    origin: 'Solna, Sweden'
  },
  {
    id: 'tool-07',
    name: 'Model Composite Sculpting Spatula NG-1',
    category: 'tools',
    description: 'An aesthetic dental spatula coated with gold Titanium Nitride to completely prevent resin sticking. Features thin double-ended flexible modeling paddles to achieve natural cusp contouring. Ergonomically optimized handle reduces fatigue during multi-shade building.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1lw6m_PJOX2zlhMe06zzPYH2f8cMy4ifx&sz=w1000',
    features: [
      'Anti-adhesive gold Titanium Nitride coating for ultimate modeling accuracy',
      'Double-ended flexible blades allow highly detailed anterior tooth sculpting',
      'Extremely lightweight structural balance minimizes clinician thumb stress'
    ],
    specifications: {
      'Active Ends': 'Superficial flat sculpting spade + condenser bulb',
      'Coating Shield': 'Medical gold titanium plasma deposition',
      'Shaft Diameter': '9.5mm circular grip control',
      'What It Is Used For': 'Placing, blending, and detailing direct composite resins in complex restorations',
      'For Dental Professional': 'Cosmetic Dentists and Restorative Clinicians'
    },
    catalogRef: 'NG-UT-707',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'tool-08',
    name: 'Hemingway Spoon Bone Curette (Double-Ended)',
    category: 'tools',
    description: 'A double-ended pocket bone curette with sharp scoop borders to clean extraction sockets. Perfect for extracting cement remnants, necrotic tissue, and bone debris safely. Built from solid German steel, it resists flexing during clinical procedures.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1o8ta_JIGO0A3whJJ1e0W4Ey1CPFWKqMc&sz=w1000',
    features: [
      'Micro-sharp scoop edges capture leftover surgical tissue immediately',
      'Ergonomic stem allows quick posterior pocket entries',
      'German solid metal build stops tool bending under hard contact pressure'
    ],
    specifications: {
      'Scoop Diameter': '2.0mm and 2.5mm opposite dual scoop tips',
      'Finish Method': 'Corrosion-proof electropolish',
      'Approval Standards': 'ISO 9001 and CE medical certificates',
      'What It Is Used For': 'Debriding infected pockets and scraping bone sockets after extractions',
      'For Dental Professional': 'Oral Surgeons and Implantologist Specialists'
    },
    catalogRef: 'NG-UT-708',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'tool-09',
    name: 'College Locking Dressing Tweezers',
    category: 'tools',
    description: 'A heavy-duty locking tweezers featuring angled serrated tips. Equipped with a secure locking pin to grasp paper points, cotton rolls, and small wedges without slippage. The balanced tension spring plate ensures immediate clinical response.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1iInF5aKi91IhcF2LFheEdvNfbOujFTpY&sz=w1000',
    features: [
      'Serrated interior grips prevent cotton roll slide-outs',
      'Precision lock pin aligns tweezer tips perfectly under firm compression',
      'Durable tempered spring plate responds immediately'
    ],
    specifications: {
      'Tip Angle': '45-degree angled beak',
      'Total Length': '15cm utility dental size',
      'Class Certification': 'SUS304 biocompatible steel device',
      'What It Is Used For': 'Holding, picking, and placing cotton rolls, endodontic files, and matrices into the field',
      'For Dental Professional': 'All Dental auxiliary team members and Dentists'
    },
    catalogRef: 'NG-UT-709',
    isFeatured: false,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'tool-10',
    name: 'Finger Plugger obturation Endodontic Kit',
    category: 'tools',
    description: 'A selected set of root canal endodontic finger pluggers. Built with high-grade Nickel-Titanium (NiTi) alloy stems that safely bend to match natural canal structures. The flat-bottomed tips deliver consistent pressure for vertical obturation.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Iuw7sbId7f_VvDs52vZzIb4FoAaPmbVG&sz=w1000',
    features: [
      'Flat condenser face ensures even vertical pressure for filling',
      'Ultra-thin flexible stems navigate curving dental canals with ease',
      'Color-marked handle sections allow quick clinical recognition'
    ],
    specifications: {
      'Assortments': 'ISO standard size bundle (04, 06, 08 sizes)',
      'Core Metal': 'Flex Ni-Ti alloy core with surgical grade cover',
      'Sizing': 'Knurled ergonomic grip handle',
      'What It Is Used For': 'Vertical condensation and compaction of warm gutta-percha fillings during root repairs',
      'For Dental Professional': 'Endodontists and General Practitioners'
    },
    catalogRef: 'NG-UT-710',
    isFeatured: false,
    origin: 'Solna, Sweden'
  },
  {
    id: 'tool-11',
    name: 'Orthodontic Band Contour & bend Pliers',
    category: 'tools',
    description: 'Precision pliers designed to contour and trim orthodontic bands to match natural crown anatomy. Fitted with slightly curved flat jaws to prevent wire scratching while styling. Heavy box-joint alignment ensures long-lasting durability.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1X0PBgwEpNA8fUJmgLQveWLiTCWERVbiY&sz=w1000',
    features: [
      'Curved dynamic jaws model tooth metal borders with minor clinical manual effort',
      'High-rigidity hinges align tips perfectly over years of active duty',
      'Anti-fog matte stainless finish feels exceptionally slip-free'
    ],
    specifications: {
      'Hinge Assembly': 'Frictionless dual-channel boxed joint',
      'Bending Limit': 'Accommodates orthodontic bands up to 0.15mm',
      'Approved Standard': 'FDA-cleared, CE certified clinical steel',
      'What It Is Used For': 'Styling, contouring, and bending metal bands to achieve a snug molar fit',
      'For Dental Professional': 'Orthodontists and Specialty Assistants'
    },
    catalogRef: 'NG-UT-711',
    isFeatured: false,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'tool-12',
    name: 'Precision Ultrasonic scaling Tip Set',
    category: 'tools',
    description: 'A set of high-efficiency piezo ultrasonic scaler insert tips. Fully compatible with major scaling systems and designed to safely disperse calculus. Built with specialized integrated irrigation channels to deliver cooling water directly to the field.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1U9_ZOYuGC2YNSwsf10IkgkaXaaO1r4yw&sz=w1000',
    features: [
      'Slender scaling tips ensure easy access to crowded subgingival structures',
      'Ultra-precise thread coupling prevents water leakage or pressure drops',
      'Steady frequency transmission delivers smooth scaling cycles'
    ],
    specifications: {
      'Thread Fit': 'Universal compatible scaler thread standard (G1/G2/G4)',
      'Substance': 'Titanium alloy bonded surgical steel core',
      'Fluid Line': 'Built-in direct micro-cooling irrigation channel',
      'What It Is Used For': 'Ultrasonic plaque removal, periodontal pocket scaling, and root debridement',
      'For Dental Professional': 'Dental Hygienists and Periodontal Specialists'
    },
    catalogRef: 'NG-UT-712',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'tool-13',
    name: 'Orthodontic Archwire Distal Shear Cutter',
    category: 'tools',
    description: 'Advanced dental distal wire clippers incorporating micro-sharp Tungsten Carbide inserts. Slices orthodontic archwires completely flush to the molar tube. Features an active holding mechanism to catch and retain cut wire tails safely.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1qBeoRSEVZDNMAungMnPTe0WJ5RjJUNiW&sz=w1000',
    features: [
      'Inlaid Tungsten Carbide jaws offer maximum slicing life',
      'Active safety mechanism prevents orthodontic wire segments from jumping off',
      'Beveled outer joints prevent intraoral soft tissue injuries'
    ],
    specifications: {
      'Max Cutting Capacity': 'Up to .021 x .025" heavy-gauge archwires',
      'Blade Edge': 'Flush point distal shear cutter',
      'Joint Design': 'Slightly spring-assisted boxed hinge',
      'What It Is Used For': 'Clipping orthodontic wire ends intraorally while protecting cheeks from loose pieces',
      'For Dental Professional': 'Orthodontists'
    },
    catalogRef: 'NG-UT-713',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'tool-14',
    name: 'Castroviejo Spring Suture Needle Holder',
    category: 'tools',
    description: 'A micro-surgical needle holder equipped with gold-plated spring locks and micro-serrated Tungsten Carbide jaws. Provides a perfect grip on fine 5-0 to 7-0 threads. The rounded, textured handle allows for smooth, seamless rotation during surgical procedures.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1yECSblTaGhZL4Fun4OndgopN5r1qf2Kt&sz=w1000',
    features: [
      'Tungsten Carbide cross-hatched jaws firmly clamp 5-0 to 7-0 micro-surgical sutures',
      'Spring lock mechanism opens instantly with a slight finger squeeze',
      'Round knurled body format allows easy rotation in-hand'
    ],
    specifications: {
      'Lock System': 'Castroviejo automatic spring lock with quick snap-open',
      'Handle Pattern': 'Heavy round knurling texture',
      'Insert material': 'Premium TC (Tungsten Carbide) gold-style plating',
      'What It Is Used For': 'Accurate holding and driving of delicate surgical needles during flap suturing',
      'For Dental Professional': 'Periodontal Surgeons and Oral Implantologists'
    },
    catalogRef: 'NG-UT-714',
    isFeatured: true,
    origin: 'Solna, Sweden'
  },
  {
    id: 'tool-15',
    name: 'Aspirating anesthetic syringe Pen-Style',
    category: 'tools',
    description: 'An aspirating dental syringe designed with an ergonomic pen-style thumb pull-ring. Securely grips 1.8ml glass cartridges, enabling precise, single-handed local anesthetic delivery. Highly durable construction stands up to heavy-duty clinical sterilization.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1cU0ctdxTbDurtTZG0YQ8pMgf5-dvKWTW&sz=w1000',
    features: [
      'Fully mechanical pullback ring ensures convenient aspiration feedback with ease',
      'Secures standard 1.8ml glass cartridges with zero wiggles',
      'Premium medical steel stands up to hundreds of thermal washing cycles'
    ],
    specifications: {
      'Carpule capacity': 'Accepts standard 1.8ml medication glass cartridges',
      'Thread Format': 'Universal standard imperial needle screws',
      'Weight & Fit': 'Optimized 38g balanced pen geometry',
      'What It Is Used For': 'Submucosal and intraosseous delivery of local dental anesthetics',
      'For Dental Professional': 'All clinical licensed Dental Practitioners'
    },
    catalogRef: 'NG-UT-715',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'tool-16',
    name: 'Universal Tofflemire Matrix Band Tensioner',
    category: 'tools',
    description: 'A straight retainer designed to tighten matrix foil ribbons securely around molar boundaries. Simplifies reconstruction of accurate proximal walls during composite or amalgam fillings. Precision-threaded shafts hold foil bands without slipping under tension.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1eo0XvDFV_TJEQMuEJ4x2LlcWUffDGxGX&sz=w1000',
    features: [
      'Double micro-screw shafts tighten foil loops with stellar stability',
      'Slender, burnished design lies comfortably along lateral dental arches',
      'Rust-proof steel prevents binding under mechanical disinfection'
    ],
    specifications: {
      'Tensioner Pattern': 'Straight universal posterior Tofflemire design',
      'Thread Core': 'Micro-brass smooth turning screw post',
      'Steel Grade': 'SUS316 medical high-durability steel block',
      'What It Is Used For': 'Clamping and tensioning stainless steel matrix bands around posterior decayed cavities',
      'For Dental Professional': 'Restorative Clinicians and General Dentists'
    },
    catalogRef: 'NG-UT-716',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'tool-17',
    name: 'Double-Ended Bone Curette Hemingway No. 2/S',
    category: 'tools',
    description: 'A surgical bone curette carrying double-ended curved spoon scoop tips. Optimal for cleaning deep socket walls after teeth extraction, removing necrotic tissue efficiently. Raised knurled bands on the handle guarantee non-slip surgical precision.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1ym5ygH8COPmWkSHl_YhgtsLuDdk_4fRH&sz=w1000',
    features: [
      'Hemingway dual scoop spoons capture bone debris cleanly',
      'Textured center handle stays reliable under wet clinical conditions',
      'Refined design enables quick periodontal cavity accesses'
    ],
    specifications: {
      'Active Spoon size': '2.8mm curved curette scoops',
      'Tool Length': '17.2cm optimal surgical control diameter',
      'Class': 'Surgical Medical tool certificate',
      'What It Is Used For': 'Scraping osseous cavities, debriding extraction sockets, and removing cysts',
      'For Dental Professional': 'Oral Surgeons, Periodontists, and Implantologists'
    },
    catalogRef: 'NG-UT-717',
    isFeatured: false,
    origin: 'Solna, Sweden'
  },
  {
    id: 'tool-18',
    name: 'Interproximal Ward Carver Restore instrument',
    category: 'tools',
    description: 'A thin, flexible interproximal carver carrying flat opposite blade points. Allows clinical carving of composite materials along proximal tooth surfaces, avoiding overhangs. Polished medical steel keeps material from sticking during build-up.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1ym5ygH8COPmWkSHl_YhgtsLuDdk_4fRH&sz=w1000',
    features: [
      'Ultra-thin flexible blades allow precise carving without micro-fracturing material',
      'Expertly curved stems facilitate posterior restoration shaping with absolute comfort',
      'Top-quality medical-grade stainless steel preserves margins over heavy uses'
    ],
    specifications: {
      'Blade Patterns': 'Double-ended Ward 150 blade-shaped active points',
      'Grip Diameter': '9.5mm hollow core for precise clinical feel',
      'Cleaning standard': 'Highly resistant to repeated medical-grade disinfection cycles',
      'What It Is Used For': 'Carving, trimming, and detail profiling of restorative fillings inside interproximal areas',
      'For Dental Professional': 'General Restorative Specialists and Operative Dentists'
    },
    catalogRef: 'NG-UT-718',
    isFeatured: true,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'best-01',
    name: 'Kulzer Charisma E4SY Composite',
    category: 'composites',
    description: 'Universal light-cure hybrid composite by Kulzer. Syringe Assortment 4×4g. Highly polishable, easy handling, and exceptional color matching thanks to Microglass II technology.',
    imageUrl: './images/products/chrisma.png',
    features: [
      'Microglass II filler technology for outstanding shade matching',
      'Excellent polishability to a high, natural gloss',
      'Minimal polymerization shrinkage and high wear resistance',
      'Optimal clinical handling - non-slumping, easy sculptability'
    ],
    specifications: {
      'Brand': 'Kulzer',
      'Type': 'Microglass II Restorative Composite',
      'Pack Size': '4 syringes × 4g (Shades A1, A2, A3, B2)',
      'Compressive Strength': '390 MPa',
      'Cure Time': '20 seconds',
      'What It Is Used For': 'Direct restorations of Class I-V cavities, splinting of teeth, and aesthetic veneers',
      'For Dental Professional': 'Restorative Clinicians, Prosthodontists and General Dentists'
    },
    catalogRef: 'NG-KZ-101',
    isFeatured: true,
    origin: 'Hanau, Germany'
  },
  {
    id: 'best-02',
    name: 'Dentex Den Link Kit',
    category: 'composites',
    description: 'A complete porcelain fracture repair kit including MZ Primer, DX.Bond, PC Primer, and DX.Flow phosphoric etch system. Designed to deliver strong, durable bond interfaces between resins and dental porcelain.',
    imageUrl: './images/products/denlink.png',
    features: [
      'Comprehensive system for chairside porcelain fracture repair',
      'Contains specialized silane and metal primers for high bond strength',
      'Includes DX.Bond 5th-generation adhesive and flowable resin layers',
      'Compatible with all modern light-curing restorative composites'
    ],
    specifications: {
      'Brand': 'Dentex',
      'Type': 'Porcelain Fracture Repair Kit',
      'Contents': '1 x MZ Primer (5ml), 1 x DX.Bond (5ml), 1 x PC Primer (5ml), 1 x DX.Flow Etch, accessories',
      'Bond Strength': 'Up to 32.5 MPa on clinical porcelain',
      'What It Is Used For': 'Clinical repair of fractured ceramic-fused-to-metal crowns, bridge units, and all-ceramic restorations',
      'For Dental Professional': 'Prosthodontists, Restorative Specialists, and General Dentists'
    },
    catalogRef: 'NG-DX-102',
    isFeatured: true,
    origin: 'Dubai, UAE'
  },
  {
    id: 'best-03',
    name: 'Dentex DX.Bond Adhesive',
    category: 'composites',
    description: 'A highly reliable, single-component, fifth-generation light-cure bonding agent developed to achieve a long-lasting, micro-mechanical bond to both enamel and dentin. Fully compatible with total-etch techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    features: [
      'High bond strength (up to 30 MPa) to dentin and etched enamel',
      'Low film thickness prevents visual bonding lines at margins',
      'Reduces post-operative sensitivity by completely sealing open tubules',
      'Excellent wetting and penetration into micro-etched tooth structures'
    ],
    specifications: {
      'Brand': 'Dentex',
      'Type': '5th Generation Light-Cure Adhesive',
      'Volume': '5ml bottle',
      'Shear Strength': '29.8 MPa',
      'Cure Method': 'Light-cured (10 seconds)',
      'What It Is Used For': 'Direct composite restorations, bonding of porcelain/ceramic veneers, and crown core build-ups',
      'For Dental Professional': 'General Practitioners and Operative Dentistry Specialists'
    },
    catalogRef: 'NG-DX-103',
    isFeatured: true,
    origin: 'Dubai, UAE'
  },
  {
    id: 'best-04',
    name: 'Dentex DX.Etch 37% Phosphoric Gel',
    category: 'composites',
    description: 'A premium 37% phosphoric acid etching gel for enamel and dentin conditioning. Features an ideal thixotropic viscosity that allows precise placement without running or dripping, and washes away cleanly with water.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
    features: [
      'Ideal 37% phosphoric acid concentration for optimal micromechanical retention',
      'Thixotropic gel property guarantees exact application without overflowing',
      'Bright blue coloring provides distinct visual contrast against tooth structure',
      'Leaves zero residue on enamel or dentin surfaces after water rinsing'
    ],
    specifications: {
      'Brand': 'Dentex',
      'Type': '37% Phosphoric Acid Etching Gel',
      'Delivery': 'Syringe-tip dispenser system',
      'Etching Duration': '15 seconds for dentin, 20-30 seconds for enamel',
      'Water Solubility': '100% water-soluble for high rinseability',
      'What It Is Used For': 'Micromechanical surface conditioning of enamel and dentin prior to adhesive application',
      'For Dental Professional': 'All Clinical Dentists and Orthodontists'
    },
    catalogRef: 'NG-DX-104',
    isFeatured: true,
    origin: 'Dubai, UAE'
  }
];
