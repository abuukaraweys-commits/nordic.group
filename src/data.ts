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
  },
  {
    key: 'collections',
    title: 'Collections',
    shortDescription: 'Clinic record files, patient appointment cards, and organization sets.',
    fullDescription: 'A premium compiled collection of grade-certified clinic administrative stationery, patient files, appointment cards, organization grids, and clinical hygiene accessories.',
    iconName: 'Briefcase',
    imagePlaceholder: 'BG-B'
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
    description: 'Premium aesthetic monocrystalline sapphire brackets with an completely transparent chassis that blends harmoniously with natural tooth enamel. Features a precision micro-porous mechanical retention base for reliable bond retention and highly polished, ultra-low profile edges to prevent clinical soft-tissue irritation.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
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
      'Frictional Force': 'Minimised through ultra-fine mechanical polishing of the slot',
      'Quality Compliance': 'Sourced via Deira Trade Hub under ISO 13485 & CE Directives'
    },
    catalogRef: 'NG-OB-201',
    isFeatured: true,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'cons-02',
    name: 'Clinik Universal Nano-Hybrid Composite',
    category: 'composites',
    description: 'Universal light-cure nano-hybrid composite with high filler weight and minimal shrinkage (<1.6%).',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
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
      'Compressive Strength': '380 MPa'
    },
    catalogRef: 'NG-RC-302',
    isFeatured: true,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'cons-03',
    name: 'NordicSil Light Body Wash Silicone',
    category: 'composites',
    description: 'Superhydrophilic correction silicone (A-silicone) with excellent flow properties for high-precision dental impressions.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
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
      'Packaging': '2 x 50ml cartridges + mixing tips'
    },
    catalogRef: 'NG-LB-044',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'cons-04',
    name: 'Premium Micro-Hybrid Restorative Composite Kit',
    category: 'composites',
    description: 'High-performance restorative composite kit with superior sculptability and minimal polymerization shrinkage for pristine anterior and posterior procedures.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
    imageUrl: 'https://drive.google.com/thumbnail?id=1V_4AiCpCJB2QJiL_6yZaQY-BxJsriDLX&sz=w1000',
    features: [
       'Minimal polymerisation shrinkage (<1.5%) to prevent microleakage',
       'High filler load (82%) provides excellent physical properties and durability',
       'Polishable to an exceptionally high, natural enamel gloss'
    ],
    specifications: {
      'Curing System': 'LED light-cured (405nm working spectrum)',
      'Compressive Strength': '395 MPa',
      'Filler Size': '0.02 to 2.5 micrometers hybrid blend'
    },
    catalogRef: 'NG-RC-304',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'cons-05',
    name: 'NordicSil Heavy Body Impression Material',
    category: 'composites',
    description: 'High-viscosity hydrophilic A-silicone designed for precise double-mix impressions, crown/bridge foundations, and perfect anatomical transfers.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
    imageUrl: 'https://drive.google.com/thumbnail?id=1_8dgkM3m8iWNY5ARh2QOqZnjA1GGtaIM&sz=w1000',
    features: [
       'Exceptional dimensional stability with near-zero setting distortion',
       'Excellent mechanical properties with high tear resistance',
       'Acts as the perfect primary tray base for light-body dental wash'
    ],
    specifications: {
      'Mixing Ratio': '1:1 cartridge delivery',
      'Working Duration': '2 minutes',
      'Total Setting Time': '4 minutes 30 seconds'
    },
    catalogRef: 'NG-HB-045',
    isFeatured: false,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'cons-06',
    name: 'Nordic Prime Bond & Adhesive System',
    category: 'composites',
    description: 'Light-cure, single-component dental adhesive system engineered for superior micro-mechanical lock bonding strength with all direct composite restorations.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
    imageUrl: 'https://drive.google.com/thumbnail?id=1D5Vu8BdLkWWAvm8al8TfCTkB0FAFILkr&sz=w1000',
    features: [
       'High bond-strength performance to dentin and enamel (up to 30 MPa)',
       'Solvent-free formulation ensures minimal post-operative sensitivity',
       'Single-bottle application saves valuable clinical chair time'
    ],
    specifications: {
      'Shear Bond Strength': '30.2 MPa on etched enamel',
      'Curing Mode': 'Visible light-cure dental systems (10 seconds)',
      'Storage Condition': 'Refrigerate (2-8°C) for optimal long-term shelf stability'
    },
    catalogRef: 'NG-PB-306',
    isFeatured: true,
    origin: 'Gothenburg, Sweden'
  },

  // Instruments
  {
    id: 'inst-01',
    name: 'Professional Diagnostic Instrument Set',
    category: 'tools',
    description: 'Complete diagnostic set in high-quality surgical stainless steel with rattle-free hollow handles for perfect balance.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
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
      'Standard': 'CE-certified, FDA, ISO 9001'
    },
    catalogRef: 'NG-DS-801',
    isFeatured: true,
    origin: 'Solna, Sweden'
  },
  {
    id: 'inst-02',
    name: 'Orthodontic Distal Wire Cutter',
    category: 'tools',
    description: 'Specialty pliers with Tungsten Carbide inserts that cut archwires flush to the terminal tube and hold the loose end.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
    imageUrl: 'https://drive.google.com/thumbnail?id=16Q0XDBb0cLesm6flC99Ukp4Jc1a9Olgo&sz=w1000',
    features: [
       'Tungsten Carbide inserts for extreme durability and cutting sharpness',
       'Cuts archwires up to .021 x .025 inches',
       'Integrated safety hold mechanism protects patients during wire trimming'
    ],
    specifications: {
      'Cutting Edge': 'Tungsten Carbide (TC)',
      'Length': '13 cm',
      'Finish': 'Matte corrosion-resistant steel'
    },
    catalogRef: 'NG-PL-510',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'inst-03',
    name: 'Stainless Steel Dental Root Elevator Set',
    category: 'tools',
    description: 'Ergonomic luxation instruments engineered with hexagonal hollow handles to enable precise tactile feedback during extractions.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
    imageUrl: 'https://drive.google.com/thumbnail?id=1sr4XMgjjj9OouLkTTUX2dq9QDwQv6nf_&sz=w1000',
    features: [
       'German stainless steel construction with a durable satin luster',
       'Thin, sharp tip profiles designed for gentle, non-traumatic root luxation',
       'Lightweight handles deliver ideal comfort and balanced clinical leverage'
    ],
    specifications: {
      'Material': 'German Biocompatible SUS304 Surgical Stainless Steel',
      'Assortment': 'Includes Straight, Curved, Bein, and Flohr dental styles',
      'Sterilization': 'Fully autoclavable up to 134°C'
    },
    catalogRef: 'NG-EL-803',
    isFeatured: false,
    origin: 'Solna, Sweden'
  },
  {
    id: 'inst-04',
    name: 'Precision Orthodontic Wire Bender Pliers',
    category: 'tools',
    description: 'Surgical-grade wire twisting Pliers fitted with high-hardness Tungsten Carbide inserts for detailed orthodontic adjustments.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
    imageUrl: 'https://drive.google.com/thumbnail?id=1UVghtTG5Eiv5PYZjEPhjG-w5ThWSbPpb&sz=w1000',
    features: [
       'Tungsten Carbide tip inserts offer stellar wear resistance and grip',
       'Zero-slip tip profile ensures precise wire loop bending without scoring',
       'Box-joint precision hinge maintains perfect alignment under load'
    ],
    specifications: {
      'Hinge JointType': 'Preloaded Box-Joint alignment',
      'Max Wire Thickness': '.021 x .025 inches archwire',
      'Instrument Length': '13.5 cm'
    },
    catalogRef: 'NG-PL-512',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },
 
  // Equipment
  {
    id: 'equip-01',
    name: 'Fiber-Optic High-Speed Handpiece',
    category: 'tools',
    description: 'Advanced dental turbine featuring 4-point spray cooling, ceramic bearings, and brilliant daylight fiber optics.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
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
      'Noise Level': '<58 dB'
    },
    catalogRef: 'NG-HP-920',
    isFeatured: true,
    origin: 'Västerås, Sweden'
  },
  {
    id: 'equip-02',
    name: 'ProCart Mobile Dental Delivery Trolley',
    category: 'tools',
    description: 'Mobile clinical procedure cart with integrated electrical sockets, smooth minimalist lines, and silent castor wheels.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
    imageUrl: 'https://drive.google.com/thumbnail?id=1nHpHMhPVKjG3Ze7hDEQ9oEW23z-IK-na&sz=w1000',
    features: [
       'Robust steel frame with durable chemical-resistant finish',
       '3-way internal power outlet strip and storage shelves',
       'Hygienic smooth surfaces – easy to wipe-clean and sanitize'
    ],
    specifications: {
      'Dimensions': '50 x 48 x 85 cm',
      'Weight': '14 kg',
      'Castors': '4 lockable swivel castors'
    },
    catalogRef: 'NG-PC-120',
    isFeatured: false,
    origin: 'Lund, Sweden'
  },
  {
    id: 'equip-03',
    name: 'Classic High-Speed Dental Turbine',
    category: 'tools',
    description: 'High-speed handpiece unit providing steady mechanical power delivery, high-grade steel bearings, and single-port cooling.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
    imageUrl: 'https://drive.google.com/thumbnail?id=1MOWqIy9S5TdcD3e6SB4YL-ucbR163rRh&sz=w1000',
    features: [
       'High speed rotation of up to 380,000 RPM with low vibration',
       'Special diagnostic head prevents water/saliva backup or suction',
       'Quick, secure push-button chuck locking system'
    ],
    specifications: {
      'Pneumatic Drive': '0.22 - 0.25 MPa air pressure',
      'Rotor Torque': 'High torque pneumatic turbine',
      'Coolant Spray': 'Single-port micro-spray jet water line'
    },
    catalogRef: 'NG-HP-910',
    isFeatured: false,
    origin: 'Västerås, Sweden'
  },
  {
    id: 'equip-04',
    name: 'ProCart Standard Dental Utility Workstation',
    category: 'tools',
    description: 'Hygienic dental clinic trolley system with three organizing steel shelves, safety sidebars, and dual-lock silent caster wheels.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
    imageUrl: 'https://drive.google.com/thumbnail?id=1S_QfOKhkLthRKwKbhS7uJ7I9u2fAsIbI&sz=w1000',
    features: [
       'Sturdy carbon-steel framing with anti-microbial chemical coating',
       'Built-in 220V multi-outlet strip for clinic accessories',
       'Smooth-rolling caster wheels offer silent workspace re-positioning'
    ],
    specifications: {
      'Organiser Shelves': '3 functional metallic shelves with high rim guards',
      'Total Dimensions': '45 x 45 x 80 cm',
      'Load Capacity': 'Up to 30 kg aggregate load'
    },
    catalogRef: 'NG-PC-110',
    isFeatured: false,
    origin: 'Lund, Sweden'
  },
 
  // Imaging
  {
    id: 'img-01',
    name: 'NordicScan USB Intraoral Sensor',
    category: 'imaging',
    description: 'Digital intraoral radiography sensor with extreme high resolution (25 lp/mm) and a highly durable waterproof casing.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
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
      'Software Compatibility': 'DICOM-compliant, works with all major imaging programs'
    },
    catalogRef: 'NG-IS-601',
    isFeatured: true,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'img-02',
    name: 'DentalScan Portable Handheld X-Ray',
    category: 'imaging',
    description: 'Handheld portable dental X-ray device with low exposure profiles and a large color screen for sharp diagnostic imaging.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
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
      'Weight': '1.8 kg'
    },
    catalogRef: 'NG-PX-440',
    isFeatured: false,
    origin: 'Lund, Sweden'
  },
  {
    id: 'img-03',
    name: 'Elite HD Digital Imaging Sensor',
    category: 'imaging',
    description: 'Ultra-thin clinical digital dental sensor (Size 1) encapsulated inside a durable titanium-reinforced frame.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
    imageUrl: 'https://drive.google.com/thumbnail?id=1LhKmvkCE_68gJyLAY2P1zJCIQtFM3JN2&sz=w1000',
    features: [
       'Comfortable active sensor surface area suited for diverse patient profiles',
       'Rugged carbon-fiber composite backing prevents mechanical cracking',
       'Interoperable digital imaging driver integrates smoothly with standard software'
    ],
    specifications: {
      'Active Technology': 'High sensitivity active CMOS with direct micro-scintillator',
      'Clarity Resolution': '22 lp/mm detail clarity',
      'Waterproof Rating': 'IP67 moisture and dust seal'
    },
    catalogRef: 'NG-IS-599',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'img-04',
    name: 'DentalScan Pro Handheld Radiography System',
    category: 'imaging',
    description: 'Clinical-grade portable handheld dental X-ray camera system featuring low radiation output and micro-focus clarity.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
    imageUrl: 'https://drive.google.com/thumbnail?id=1LEYjkgthKafhVlUvIyR0ViGMtL5K9btV&sz=w1000',
    features: [
       'Double-layer internal lead shield restricts scatter backscatter to zero',
       'Micro-focus focal point generates razor-sharp anatomical outline captures',
       'High capacity Li-ion power pack enables up to 150 exposures per charge'
    ],
    specifications: {
      'Tube Output': '65 kV stability',
      'Safe Shielding': '0.8mm internal safety lead lining',
      'Exposure Control': 'Range between 0.01 and 2.00 seconds'
    },
    catalogRef: 'NG-PX-450',
    isFeatured: false,
    origin: 'Lund, Sweden'
  },
 
  // Sterilization
  {
    id: 'ster-01',
    name: 'NordicClave Class B Steam Sterilizer (22L)',
    category: 'tools',
    description: 'Class-B vacuum autoclave meeting the most stringent EN13060 European standards. Eco quick-cycles save clinical time.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
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
      'Power Consumption': '1950W'
    },
    catalogRef: 'NG-NC-22B',
    isFeatured: true,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'ster-02',
    name: 'NordicClave Eco Steam Autoclave (18L)',
    category: 'tools',
    description: 'Compact Class B vacuum autoclave featuring efficient thermal quick-sterilization cycles and full biosecurity parameter compliance.',
    // UPDATED WITH CLIENT DRIVE ASSET LINK:
    imageUrl: 'https://drive.google.com/thumbnail?id=1Sn3Wzkb8RSk5PaXneZ-if216IKPx4s0z&sz=w1000',
    features: [
       'Eco rapid-sterilisation cycle completes in 22 minutesflat',
       'Advanced mechanical water diagnostics sensor blocks running empty',
       'High-performance fractionated vacuum guarantees complete air removal'
    ],
    specifications: {
      'Sterilization Chamber': '18 Liters medical autoclave chamber',
      'Preset Temperatures': '121°C and 134°C adjustable menus',
      'Safe Max Load': '4.5 kg clinical instruments'
    },
    catalogRef: 'NG-NC-18B',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'ster-03',
    name: 'Digital Ultrasonic Cleaner (3L)',
    category: 'tools',
    description: 'Digital ultrasonic cleaning bath with integrated heater, frequency sweep, and timer for thorough cement and contaminant removal.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    features: [
       'Industrial ultrasonic transducers generate powerful cavitation',
       'Heater heating up to 80°C accelerates organic material release',
       'Stainless steel basket and lid dampen operational noise'
    ],
    specifications: {
      'Capacity': '3 Liters',
      'Ultrasonic Frequency': '40 kHz',
      'Timer': '1-99 minutes digital setup'
    },
    catalogRef: 'NG-UC-303',
    isFeatured: false,
    origin: 'Malmö, Sweden'
  },
 
  // Office supplies
  {
    id: 'office-01',
    name: 'Custom Printed Patient Record Sheets (A4, 100-pack)',
    category: 'collections',
    description: 'Professionally designed paper dental charts featuring a visual dental grid for quick mechanical notations.',
    imageUrl: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80',
    features: [
       'Thick 120g archive-grade acid-free paper',
       'Contains complete adult and pediatric dental charting grids',
       'Easy file-cabinet archiving tab pre-printed'
    ],
    specifications: {
      'Size': 'Standard A4',
      'Paper Quality': 'Eco-friendly chlorine-free paper',
      'Quantity': '100 sheets per pack'
    },
    catalogRef: 'NG-OP-100',
    isFeatured: false,
    origin: 'Malmö, Sweden'
  },
  {
    id: 'office-02',
    name: 'Appointment & Reminder Cards (250-pack)',
    category: 'collections',
    description: 'Premium clinical recall cards with clinic identity on the back and convenient appointment grids on the front.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    features: [
       'Premium matte texture easy to write on with any pen',
       'Pre-printed fields for Date, Time, Clinician, and cancellation policies'
    ],
    specifications: {
      'Format': '85 x 54 mm (Standard business card size)',
      'Paper Weight': 'Heavy-duty 350g cardstock'
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
    description: 'Premium diagnostic hand explorer designed to discover hard enamel structural lesions and tooth surface abnormalities. Fabricated with medical titanium-hardened stainless steel tips to retain structural perfection over heavy-duty diagnostic procedures.',
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
      'Length & Weight': '16.5cm length / 18g total weight'
    },
    catalogRef: 'NG-UT-701',
    isFeatured: true,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'tool-02',
    name: 'Premium Periodontal Gracey Scale 11/12',
    category: 'tools',
    description: 'Specialized periodontal scaling tool optimal for subgingival calculus and plaque debridement along mesial surfaces of the lower and upper posterior molars.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1QcOzT4C9ShxMX8-S67PB1f6dFpVgNJuw&sz=w1000',
    features: [
      'Precisely curved neck contours to anatomical molar structure with absolute ease',
      'Satin polish minimizes harsh operational light reflections in the clinic',
      'Tempered blades maintain sharp wedge boundaries through diagnostic cycles'
    ],
    specifications: {
      'Tip Type': 'Double-ended Gracey 11/12 shape',
      'Handle Ergonomics': 'Anti-slip grooved handle core',
      'Approved Standard': 'ISO 13485 surgical device standards'
    },
    catalogRef: 'NG-UT-702',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'tool-03',
    name: 'High-Definition Rhodium Dental Mirror No. 5',
    category: 'tools',
    description: 'Surgical reflective mouth mirror featuring direct front-surface coating of Rhodium to prevent double image vision. Paired with a texturized grip for clear indirect teeth viewing.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1DcKlsgoZ1TUUVf1PrUen2P4twMlfpcFx&sz=w1000',
    features: [
      'Front Rhodium reflection layer guarantees razor-sharp visual clarity',
      'Teflon-engineered anti-fog shield works smoothly in warm conditions',
      'Perfect weight balancing prevents mouth tissue slippage during exams'
    ],
    specifications: {
      'Lens Style': 'No. 5 standard size flat lens',
      'Mirror Coat': 'Genuine dual-sided front Rhodium plating',
      'Thread Coupling': 'Universal medical screw-on head'
    },
    catalogRef: 'NG-UT-703',
    isFeatured: false,
    origin: 'Solna, Sweden'
  },
  {
    id: 'tool-04',
    name: 'Nordic Metric Periodontal Probe CP-12',
    category: 'tools',
    description: 'Precision measurement probe designed to quickly evaluate gingival pocket depths. Marked clearly with contrast indicators for fast identification on sight.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1wGYXIYRHBubkjnWvnlT5hDtlIkYdWijC&sz=w1000',
    features: [
      'Crisp high-contrast mark lines at 3, 6, 9, 12 mm margins',
      'Micro-rounded smooth tip ensures pocket assessment without patient pain',
      'Highly resistant to chemical disinfectants'
    ],
    specifications: {
      'Mark Ranges': 'CP-12 metric lines (3, 6, 9, 12 mm)',
      'Probe Stem': 'Standard straight round gauge',
      'Composition': 'High density bio-safe surgical steel'
    },
    catalogRef: 'NG-UT-704',
    isFeatured: false,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'tool-05',
    name: 'Ergonomic Incisor Extraction Forceps No. 150',
    category: 'tools',
    description: 'Heavy duty surgical premium extraction forceps engineered specifically for upper universal incisors, canines, and dental root segments. Offers high grip mechanical jaw cross-patterns.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1dqUHGaX0WNcW-kyuzDC8ORe0oyWxVpBL&sz=w1000',
    features: [
      'Textured micro-groove forcep handle prevents slipping inside wet gloves',
      'Preloaded double box hinge resists sideways twisting',
      'Contoured beak profiles reduce bone fracture risk during tooth luxations'
    ],
    specifications: {
      'Anatomical Suitability': 'Upper universal premolar/cuspid geometry',
      'Hinge Assembly': 'Flush micro-rivet box-joint alignment',
      'Certifications': 'Surgical Medical Class A certification'
    },
    catalogRef: 'NG-UT-705',
    isFeatured: true,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'tool-06',
    name: 'Straight Luxator root Elevator (Bein 3mm)',
    category: 'tools',
    description: 'Robust luxation dental root elevator featuring a sturdy hexagonal handle. Slides seamlessly into periodontal margins to release fibers before socket removals.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Bgo_Oc64u20OkocvT3Zpbjt-IqbryHo9&sz=w1000',
    features: [
      'Gently curved wedge blade slides into root cavities with zero resistance',
      'Solid handle design stands up to robust clinical rotational forces',
      'Tapered neck delivers ideal ergonomic finger rest placements'
    ],
    specifications: {
      'Blade Width': '3.0mm straight elevator blade',
      'Handle Motif': 'Hexagonal hollow power grip',
      'Corrosion Class': 'Grade A medical steel anti-acid'
    },
    catalogRef: 'NG-UT-706',
    isFeatured: false,
    origin: 'Solna, Sweden'
  },
  {
    id: 'tool-07',
    name: 'Model Composite Sculpting Spatula NG-1',
    category: 'tools',
    description: 'Aesthetic non-stick restorative spatula tool. Plated with specialized gold titanium layers to shape composite resins seamlessly without sticking or pulling material.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1lw6m_PJOX2zlhMe06zzPYH2f8cMy4ifx&sz=w1000',
    features: [
      'Anti-adhesive gold Titanium Nitride coating for ultimate modeling accuracy',
      'Double-ended flexible blades allow highly detailed anterior tooth sculpting',
      'Extremely lightweight structural balance minimizes clinician thumb stress'
    ],
    specifications: {
      'Active Ends': 'Superficial flat sculpting spade + condenser bulb',
      'Coating Shield': 'Medical gold titanium plasma deposition',
      'Shaft Diameter': '9.5mm circular grip control'
    },
    catalogRef: 'NG-UT-707',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'tool-08',
    name: 'Hemingway Spoon Bone Curette (Double-Ended)',
    category: 'tools',
    description: 'Pre-contoured scoop surgical curette optimized for cavity debridement and socket cleaning. Double-ended curved spoon design ensures high efficiency in small areas.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1o8ta_JIGO0A3whJJ1e0W4Ey1CPFWKqMc&sz=w1000',
    features: [
      'Micro-sharp scoop edges capture leftover surgical tissue immediately',
      'Ergonomic stem allows quick posterior pocket entries',
      'German solid metal build stops tool bending under hard contact pressure'
    ],
    specifications: {
      'Scoop Diameter': '2.0mm and 2.5mm opposite dual scoop tips',
      'Finish Method': 'Corrosion-proof electropolish',
      'Approval Standards': 'ISO 9001 and CE medical certificates'
    },
    catalogRef: 'NG-UT-708',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'tool-09',
    name: 'College Locking Dressing Tweezers',
    category: 'tools',
    description: 'Dental diagnostic dressing tweezers with premium spring plates. Tips are serrated on the inner surface and include a locking pin to hold paper points, cotton, and matrices firmly.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1iInF5aKi91IhcF2LFheEdvNfbOujFTpY&sz=w1000',
    features: [
      'Serrated interior grips prevent cotton roll slide-outs',
      'Precision lock pin aligns tweezer tips perfectly under firm compression',
      'Durable tempered spring plate responds immediately'
    ],
    specifications: {
      'Tip Angle': '45-degree angled beak',
      'Total Length': '15cm utility dental size',
      'Class Certification': 'SUS304 biocompatible steel device'
    },
    catalogRef: 'NG-UT-709',
    isFeatured: false,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'tool-10',
    name: 'Finger Plugger obturation Endodontic Kit',
    category: 'tools',
    description: 'Specialized root canal obturation hand condensers. Flat-bottomed tips allow vertical condensation of warm gutta-percha fillings inside narrow tooth canal chambers.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Iuw7sbId7f_VvDs52vZzIb4FoAaPmbVG&sz=w1000',
    features: [
      'Flat condenser face ensures even vertical pressure for filling',
      'Ultra-thin flexible stems navigate curving dental canals with ease',
      'Color-marked handle sections allow quick clinical recognition'
    ],
    specifications: {
      'Assortments': 'ISO standard size bundle (04, 06, 08 sizes)',
      'Core Metal': 'Flex Ni-Ti alloy core with surgical grade cover',
      'Sizing': 'Knurled ergonomic grip handle'
    },
    catalogRef: 'NG-UT-710',
    isFeatured: false,
    origin: 'Solna, Sweden'
  },
  {
    id: 'tool-11',
    name: 'Orthodontic Band Contour & bend Pliers',
    category: 'tools',
    description: 'Surgical pliers crafted with custom curved tip ends to easily trim, adapt, and contour steel molar bands or clinical crown templates.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1X0PBgwEpNA8fUJmgLQveWLiTCWERVbiY&sz=w1000',
    features: [
      'Curved dynamic jaws model tooth metal borders with minor clinical manual effort',
      'High-rigidity hinges align tips perfectly over years of active duty',
      'Anti-fog matte stainless finish feels exceptionally slip-free'
    ],
    specifications: {
      'Hinge Assembly': 'Frictionless dual-channel boxed joint',
      'Bending Limit': 'Accommodates orthodontic bands up to 0.15mm',
      'Approved Standard': 'FDA-cleared, CE certified clinical steel'
    },
    catalogRef: 'NG-UT-711',
    isFeatured: false,
    origin: 'Uppsala, Sweden'
  },
  {
    id: 'tool-12',
    name: 'Precision Ultrasonic scaling Tip Set',
    category: 'tools',
    description: 'Threaded high-impact ultrasonic piezo scaler inserts designed for fast plaque removal. Fits all modern ultrasonic handpieces comfortably.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1U9_ZOYuGC2YNSwsf10IkgkaXaaO1r4yw&sz=w1000',
    features: [
      'Slender scaling tips ensure easy access to crowded subgingival structures',
      'Ultra-precise thread coupling prevents water leakage or pressure drops',
      'Steady frequency transmission delivers smooth scaling cycles'
    ],
    specifications: {
      'Thread Fit': 'Universal compatible scaler thread standard (G1/G2/G4)',
      'Substance': 'Titanium alloy bonded surgical steel core',
      'Fluid Line': 'Built-in direct micro-cooling irrigation channel'
    },
    catalogRef: 'NG-UT-712',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'tool-13',
    name: 'Orthodontic Archwire Distal Shear Cutter',
    category: 'tools',
    description: 'Surgical orthodontic clipper equipped with extreme-hardness Tungsten Carbide blades. Instantly clips orthodontic archwires and holds loose cut ends safely using an active retention mechanism.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1qBeoRSEVZDNMAungMnPTe0WJ5RjJUNiW&sz=w1000',
    features: [
      'Inlaid Tungsten Carbide jaws offer maximum slicing life',
      'Active safety mechanism prevents orthodontic wire segments from jumping off',
      'Beveled outer joints prevent intraoral soft tissue injuries'
    ],
    specifications: {
      'Max Cutting Capacity': 'Up to .021 x .025" heavy-gauge archwires',
      'Blade Edge': 'Flush point distal shear cutter',
      'Joint Design': 'Slightly spring-assisted boxed hinge'
    },
    catalogRef: 'NG-UT-713',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'tool-14',
    name: 'Castroviejo Spring Suture Needle Holder',
    category: 'tools',
    description: 'Micro-surgical gold-plated needle driver featuring locking spring bars. Perfect for meticulous periodontal suturing and soft-tissue dental grafting micro-procedures.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1yECSblTaGhZL4Fun4OndgopN5r1qf2Kt&sz=w1000',
    features: [
      'Tungsten Carbide cross-hatched jaws firmly clamp 5-0 to 7-0 micro-surgical sutures',
      'Spring lock mechanism opens instantly with a slight finger squeeze',
      'Round knurled body format allows easy rotation in-hand'
    ],
    specifications: {
      'Lock System': 'Castroviejo automatic spring lock with quick snap-open',
      'Handle Pattern': 'Heavy round knurling texture',
      'Insert material': 'Premium TC (Tungsten Carbide) gold-style plating'
    },
    catalogRef: 'NG-UT-714',
    isFeatured: true,
    origin: 'Solna, Sweden'
  },
  {
    id: 'tool-15',
    name: 'Aspirating anesthetic syringe Pen-Style',
    category: 'tools',
    description: 'Surgical aspirating dental injection syringe. Allows precise single-handed local anesthetic administration using standard 1.8ml ampoules.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1cU0ctdxTbDurtTZG0YQ8pMgf5-dvKWTW&sz=w1000',
    features: [
      'Fully mechanical pullback ring ensures convenient aspiration feedback with ease',
      'Secures standard 1.8ml glass cartridges with zero wiggles',
      'Premium medical steel stands up to hundreds of thermal washing cycles'
    ],
    specifications: {
      'Carpule capacity': 'Accepts standard 1.8ml medication glass cartridges',
      'Thread Format': 'Universal standard imperial needle screws',
      'Weight & Fit': 'Optimized 38g balanced pen geometry'
    },
    catalogRef: 'NG-UT-715',
    isFeatured: false,
    origin: 'Stockholm, Sweden'
  },
  {
    id: 'tool-16',
    name: 'Universal Tofflemire Matrix Band Tensioner',
    category: 'tools',
    description: 'Straight matrix band retainer designed to clip and tighten thin metal foil strips securely around cavity edges, creating exact posterior walls during direct composite modeling.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1eo0XvDFV_TJEQMuEJ4x2LlcWUffDGxGX&sz=w1000',
    features: [
      'Double micro-screw shafts tighten foil loops with stellar stability',
      'Slender, burnished design lies comfortably along lateral dental arches',
      'Rust-proof steel prevents binding under mechanical disinfection'
    ],
    specifications: {
      'Tensioner Pattern': 'Straight universal posterior Tofflemire design',
      'Thread Core': 'Micro-brass smooth turning screw post',
      'Steel Grade': 'SUS316 medical high-durability steel block'
    },
    catalogRef: 'NG-UT-716',
    isFeatured: false,
    origin: 'Gothenburg, Sweden'
  },
  {
    id: 'tool-17',
    name: 'Double-Ended Bone Curette Hemingway No. 2/S',
    category: 'tools',
    description: 'Cast metal dental bone scraper curette featuring opposing reverse angles of spoon scoopers. Outstanding ergonomics for quick post-extraction cleaning.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1ym5ygH8COPmWkSHl_YhgtsLuDdk_4fRH&sz=w1000',
    features: [
      'Hemingway dual scoop spoons capture bone debris cleanly',
      'Textured center handle stays reliable under wet clinical conditions',
      'Refined design enables quick periodontal cavity accesses'
    ],
    specifications: {
      'Active Spoon size': '2.8mm curved curette scoops',
      'Tool Length': '17.2cm optimal surgical control diameter',
      'Class': 'Surgical Medical tool certificate'
    },
    catalogRef: 'NG-UT-717',
    isFeatured: false,
    origin: 'Solna, Sweden'
  },
  {
    id: 'tool-18',
    name: 'Interproximal Ward Carver Restore instrument',
    category: 'tools',
    description: 'Thin and highly flexible opposite-bladed carving instrument. Perfect to shape restorative composites and amalgams along proximal walls.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1ym5ygH8COPmWkSHl_YhgtsLuDdk_4fRH&sz=w1000',
    features: [
      'Ultra-thin flexible blades allow precise carving without micro-fracturing material',
      'Expertly curved stems facilitate posterior restoration shaping with absolute comfort',
      'Top-quality medical-grade stainless steel preserves margins over heavy uses'
    ],
    specifications: {
      'Blade Patterns': 'Double-ended Ward 150 blade-shaped active points',
      'Grip Diameter': '9.5mm hollow core for precise clinical feel',
      'Cleaning standard': 'Highly resistant to repeated medical-grade disinfection cycles'
    },
    catalogRef: 'NG-UT-718',
    isFeatured: true,
    origin: 'Uppsala, Sweden'
  }
];
