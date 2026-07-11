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
    name: 'DX. Incisal',
    category: 'composites',
    description: 'Light Curing Composite Resin family, the first choice for tooth restoration',

    imageUrl: 'https://drive.google.com/thumbnail?id=1IMAR_U3hqsf4mdiL-OAlkX1AVoC61mNg&sz=w1000',
    features: [
      'Suitable for most adult enamel margin',
      'Suitable for the enamel margin of middle-age and old people',
      'Suitable for teenager enamel margin',
    ],
    specifications: {
      'Specification' : '4g/pcs',
      'Shade': 'Clear(CL) Amber Blue',
    },
    catalogRef: 'NG-OB-201',
    isFeatured: true,
    origin: 'China'
  },
  {
    id: 'cons-02',
    name: 'DX. Flow-base',
    category: 'composites',
    description: 'Porcelain restoration  Other whitening restoration  Masking discolored tooth',
    imageUrl: 'https://drive.google.com/thumbnail?id=1JCd6R_9VUTQleuzRULkBPbs99sVPaXWQ&sz=w1000',
    features: [
      'Better whitening effect in veneer bonding',
      'WH and TW with different whiteness and masking ability to meet the dentist’s Request for different cases',
      'Good color stability',
      'Good physical performance and impact resistance',
      'Low shrinkage'
    ],
    specifications: {
       'Specification': '3g',
      'Shades': 'A1, A2, A3, OA2',
      

    },
    catalogRef: 'NG-RC-302',
    isFeatured: true,
    origin: 'China'
  },
  {
    id: 'cons-03',
    name: 'DX. Flow',
    category: 'composites',
    description: 'It is suitable for restorations of class III, Class V and small class IV cavities, especially for restoration of minor defects.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1CxZix6a6HbO7ZwX5iavCSVFm0wvOWUPX&sz=w1000',
    features: [
      'Unique patent oligomer technology resulting in excellent strength and elastic modulus',
      'High radio opacity',
      'Fluoride release to effectively prevent from secondary caries',
      
    ],
    specifications: {
      'Visosity': 'High Flow, Medium Flow, Low Flow, Super Low Flow',
      'Specification': '2.0gx2，3.0g',
      'Shade': 'A1、A2、A3、A3.5、B1、B2',
     
    },
    catalogRef: 'NG-LB-044',
    isFeatured: false,
    origin: 'China'
  },
  {
    id: 'cons-04',
    name: 'DEN LINK Kit',
    category: 'composites',
    description: 'Porcelain fracture repair kit is a simple repair kit designed for the repair of porcelain and zirconia restorations. It can be used for bonding silicate glass, alluminia ceramic, zirconia ceramic, metals and alloys',
    imageUrl: 'https://drive.google.com/thumbnail?id=1V_4AiCpCJB2QJiL_6yZaQY-BxJsriDLX&sz=w1000',
    features: [
      'High bonding strength with primer treatment',
      'Quick and great aesthetic restoration with the masking of flowable opaque composite',
   
    ],
    specifications: {
      'PC Primer': '5.0ml/bottle',
      'DX.Flow-opaque OA2': '2.0g/pcs',
      'DX.Flow-Low Flow A2': '2.0g/pcs',
      'DX.Bond VII': '3.0ml/bottle',
      'Brush': '20pcs/box',
      'Tips': '5pcs/box(blue), 10pcs/box(black)',
      
    },
    catalogRef: 'NG-RC-304',
    isFeatured: false,
    origin: 'China'
  },
  {
    id: 'cons-05',
    name: 'DX. BOND VII',
    category: 'composites',
    description: 'Suitable for self-etch enamel/dentin, all classes direct restorations and the indirect restoration of porcelain veneer, crown and inlay/onlay.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1_8dgkM3m8iWNY5ARh2QOqZnjA1GGtaIM&sz=w1000',
    features: [
      'Combining etching and adhesive into one step to improve operation consistence and efficiency',
      'Unique patent technology serviced for disinfection',
      'Better dentin tubule penetration with DMP-wet adhesion technology resulting in an increase of the bonding strength and less post-operation sensitivity'
    ],
    specifications: {
      '3.0ml/bottle，brush': '10pcs/box ',
      '5.0ml/bottle，brush': '20pcs/box',
      
     
    },
    catalogRef: 'NG-HB-045',
    isFeatured: false,
    origin: 'China'
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

    {
    id: 'cons-07',
    name: 'DX. CORE',
    category: 'composites',
    description: 'Dual-cure core build-up composite for core build up, bonding of crowns, bridges, inlays and onlays, and filling of special deep cavity restorations.',
    indications: 'Suitable for core build up, bonding for crown, bridge, inlay/onlay, and filling for special deep cavity restoration.',
    features: [
      'High compressive strength and flexural strength',
      'Dual curing — light curing for 20 seconds, self curing for 5 minutes',
      'DX.Bond V is required after etching when using DX.CORE for bonding',
    ],
    specifications: {
      'Specification': '8g',
      'Shade': 'A2, A3',
    },
    imageUrl: '/images/products/dx-core.png',
    catalogRef: 'NG-DX-107',
    isFeatured: false,
    origin: 'China',
  },

  // Instruments
  {
    id: 'inst-01',
    name: 'DX. Flow-Opaque',
    category: 'composites',
    description: 'Great opacity to cover metal or discolored tooth, especially for exposed metal in ceramic tooth and the color tooth caused by tetracycline.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1gB950I26y7XrFUASxw7k23HcAr3sxVLA&sz=w1000',
    features: [
      'Multiple shades to match different tooth color',
      'Suitable flowability to reach all areas',
      
    ],
    specifications: {
      'Specification': '2g/pcs',
      'Shade': 'OA2、OA3',
     
   

    },
    catalogRef: 'NG-DS-801',
    isFeatured: true,
    origin: 'China'
  },
  {
    id: 'inst-02',
    name: 'DX. Posterior',
    category: 'composites',
    description: 'Light Curing Composite Resins family, the first choice for reconstruction of tooth defects.',
    imageUrl: 'https://drive.google.com/thumbnail?id=16Q0XDBb0cLesm6flC99Ukp4Jc1a9Olgo&sz=w1000',
    features: [
      'High filler loading up to 82%w/w, high compressive and flexural strength',
      'Suitable visible light opacity for dentin layer',
      'High strength and good wear-resistance, good handling feel, non-sticky to equipments',
      'Low shrinkage resulting in less microleakage',
    ],
    specifications: {
      'Specification': '4g/pcs',
      'Shade': 'DA1、DA2、DA3、DA3.5、DB1、DB2',
      


    },
    catalogRef: 'NG-PL-510',
    isFeatured: false,
    origin: 'china'
  },
  {
    id: 'inst-03',
    name: 'DX. BOND UNI',
    category: 'composites',
    description: 'BOND UNI Self-etching adhesives (General), a new generation adhesive with the combination of the pretreatment function and self-etching.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1sr4XMgjjj9OouLkTTUX2dq9QDwQv6nf_&sz=w1000',
    features: [
      'BOND UNI is universal adhesive for silicate glass, zirconia ceramics, metal and resin composite',
      'Simplified operation process with less post-operation sensitivity',
      'Light curable single-component dental adhesive, low film thickness'
    ],
    specifications: {
      'Specification': '',
      '3.0ml/bottle，brush': '10pcs/box ',
      '5.0ml/bottle，brush': '20pcs/box',
      
    },
    catalogRef: 'NG-EL-803',
    isFeatured: false,
    origin: 'China'
  },
  {
    id: 'inst-04',
    name: 'DX. CORE',
    category: 'composites',
    description: 'Core build up  Bonding for crown, bridge, inlay/ onlay  Filling for special deep cavity restoration  ',
    imageUrl: 'https://drive.google.com/thumbnail?id=1UVghtTG5Eiv5PYZjEPhjG-w5ThWSbPpb&sz=w1000',
    features: [
      'High compressive strength and flexural strength',
      'Dual curing, light curing for 20s, self curing for 5min',
      'DX.Bond V is required after etching if using for DX.CORE for bonding'
    ],
    specifications: {
      'Specification': '8g',
      'Shade': 'A2、A3',
     
      
      
    },
    catalogRef: 'NG-PL-512',
    isFeatured: false,
    origin: 'China'
  },

  // Equipment
  {
    id: 'equip-01',
    name: 'DX. Etch',
    category: 'composites',
    description: 'Increase the wetting effect and bonding area of the adhesive, and improve the bonding strength',
    imageUrl: 'https://drive.google.com/thumbnail?id=1pDrazSjVvFGHqnnhcDW1b6cu7L0Tx500&sz=w1000',
    features: [
      'Blue gel, easy to identify',
      'Thixotropic flow, strong adhesion, less flowability, easy to use',
      'Smooth extrusion without gel block',
      'Easy to remove and clean without residual'
    ],
    specifications: {
      'Specification': 'Phosphoric acid content: 37%，20%',
      'Shade': 'light blue（37%），blue（20%）2.5ml、5.0ml、10.0ml、50.0ml',
      


      
    },
    catalogRef: 'NG-HP-920',
    isFeatured: true,
    origin: 'China'
  },
  {
    id: 'equip-02',
    name: 'DX. Whiten',
    category: 'composites',
    description: 'Esthetic white, to rebuild nature tooth layer.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1nHpHMhPVKjG3Ze7hDEQ9oEW23z-IK-na&sz=w1000',
    features: [
      'Three shades of stratified filling to rebuild the layering of tooth ',
      'Ideal viscosity, easily to shape ',
      'High simulation, natural esthetic ',
      'Excellent polishing effect and wear resistance'
    ],
    specifications: {
      'Specification': '4g/pcs',
      'Shade': 'EXW、EW、BL',
     

    },
    catalogRef: 'NG-PC-120',
    isFeatured: false,
    origin: 'China'
  },
  {
    id: 'equip-03',
    name: 'Light Curing Composite Resins',
    category: 'composites',
    description: ' Used for repairing ceramics',
    imageUrl: 'https://drive.google.com/thumbnail?id=1MOWqIy9S5TdcD3e6SB4YL-ucbR163rRh&sz=w1000',
    features: [
      '',
      
    ],
    specifications: {
      'Specification': '4g/pcs',
      ' Color': 'white'

      
     
    },
    catalogRef: 'NG-HP-910',
    isFeatured: false,
    origin: 'China'
  },
  {
    id: 'equip-04',
    name: 'DX. Universal',
    category: 'composites',
    description: 'Light-curing composite resin family, the first choice for reconstruction of tooth defects. DX. Universal Composite is a light-curable composite for anterior and posterior dentine and enamel restorations. The inorganic filler loading is 82% w/w, with particle size from 0.002 to 5 microns.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1S_QfOKhkLthRKwKbhS7uJ7I9u2fAsIbI&sz=w1000',
    features: [
      'High versatility. It takes care of either dentin or enamel restorations',
      'Moderate viscosity and non-sticky handling',
      'Excellent plasticity and great handling',
      'High radio opacity'
    ],
    specifications: {
      'Specification': '4g/pcs',
      'Shade': 'A1、A2、A3、A3.5、A4、B1、B2、B3、C2、C3',
      


    },
    catalogRef: 'NG-PC-110',
    isFeatured: false,
    origin: 'China'
  },

  // Imaging
  {
    id: 'img-01',
    name: 'DX.Ceram',
    category: 'composites',
    description: 'DX.Ceram Capsule compreises not only conventional, but also Zirconia fillers.Using ceramic technology, all performances are improved and the curing depth is increased up to 5mm.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1DGcpo1pCuz3CjQufwy6T1hjXKAzwLU93&sz=w1000',
    features: [
      'Curing depth up to 5 mm, to improve practice efficiency',
      'High abrasion resistance, low shrinkage, easy polishing, great coloration',
      'High radio opaque',
      'Single use to eliminate contamination and safe'
    ],
    specifications: {
      'Specification': 'Standard Kit',
      'Capsules': '0.3g/Capsulesx60 Capsules（A1x5Capsules、A2 x20 Capsules、A3x20 Capsules、A3.5x10 Capsules、A4x5 Capsules）BOND VII 3ML, Brush 20pcs',
      'Specification': 'Intro Kit',
      'Capsules': '0.3g/Capsulesx10 Capsules（A1x1 Capsules、A2 x3 Capsules、A3x3 Capsules、A3.5x2 Capsules、A4x1 Capsules）',
      
      
    },
    catalogRef: 'NG-IS-601',
    isFeatured: true,
    origin: 'China'
  },
  {
    id: 'img-02',
    name: 'Veneer/Inlay/Onlay Luting Kit ',
    category: 'composites',
    description: 'This kit is specially designed for various types of porcelain veneer and inlay/onlya and also meet different requirements for restoration bonding',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Ytpabs5_z9yeHcBLcoRnU8xdJXU2ceV4&sz=w1000',
    features: [
      'Porcelain veneer, inlay try-in, color matching, and bonding together with one kit',
      'Aesthetic restoration of the upper tooth part',
      'Multi-purpose, complete configuration'
    ],
    specifications: {
      'Try-in paste': 'BB (Clear), A1,A2,A3,OA2',
      'DX.Flow Veneer': 'BB (Clear), A1,A2,A3,OA2',
      'DX.CORE dental cement 8g': '',
      'PC porcelain primer': '5ml',
      'MZ metal/zirconia primer': '5ml',
      'Hydrofluoric acid etchant': '2.5g',
      'DX.etch 37% etchant': '2.5ml',
      'DX.BOND V': '5ml',
      'DX.AIR-BLOCK Oxgen Isolation Gel': '2.5ml',
      'White brush': '20pcs',
      'Purple brush holder': '1pcs',
      'Tip:mixed tis : 5pcs; black tip': '30pcs; type 1 blue tip:10pcs; type 2 tip:5pcs',
      'Shading box:': '1'
    },
    catalogRef: 'NG-PX-440',
    isFeatured: false,
    origin: 'China'
  },
  {
    id: 'img-03',
    name: 'DEN CEM Ⅰ',
    category: 'composites',
    description: 'DEN CEM l is a self etching, self adhesion, dual cure resincement with automix syringe. It is suitable for all kinds ofpermanent cementation of restorations.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1LhKmvkCE_68gJyLAY2P1zJCIQtFM3JN2&sz=w1000',
    features: [
      'Simplified steps. Etching, bonding & cementation completed in one step by applyingDEN CEMI.',
      'Dual cure. Light curing and self curing for easy handling upon case requirement.',
      'Low solubility. A long restoration and durability.',
      'Radiopaque. Easy identification on radiographs for diagnosis.',
      'Fluoride releasing. Effective preventing recurrent caries.'
    ],
    specifications: {
      'Specification': '8g',
      'Shade': 'OA2、A1、A2、A3、T、W',
      

    },
    catalogRef: 'NG-IS-599',
    isFeatured: false,
    origin: 'China'
  },
  {
    id: 'img-04',
    name: 'DX. Flow-Color',
    category: 'composites',
    description: 'Light Curing Composite Resin family, first choice tooth restoration.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1LEYjkgthKafhVlUvIyR0ViGMtL5K9btV&sz=w1000',
    features: [
      'Nice dyeing effect, good color stability',
      'Less material, better dyeing effect',
      'Great flowability to reach anywhere with a brush and tip',
      'Various color shades for different combinations without impact the curability'
    ],
    specifications: {
      'Specification': '1.5g/pcs',
      'Shade': 'WH (milky white)，DY (orange brown) ，TR (brown)，YE (yellow) ，DR (crimson)，CY (blue)，BL (back) ，BB (clear). ',
      
     
      
    },
    catalogRef: 'NG-PX-450',
    isFeatured: false,
    origin: 'China'
  },
  {
    id: 'img-05',
    name: 'Digital Imaging Plate Scanner',
    category: 'imaging',
    description: 'A compact and high-performance PSP scanner that delivers fast, high-resolution digital dental images with an efficient workflow.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1R2y3IPcrcgXduyvT--EZaBiT8gko6eFz&sz=w1000',
    features: [
      'High-quality digital images',
      'Fast image processing',
      'Compatible with reusable PSP plates',
      'Compact and easy to use',
      'Cost-effective digital imaging'
    ],
    specifications: {
      'Spec': '1Pcs',
      
    },
    catalogRef: 'NG-OPG-101',
    isFeatured: true,
    origin: 'China'
  },
  {
    id: 'img-06',
    name: 'Portable Dental X-Ray Unit',
    category: 'imaging',
    description: 'A lightweight and portable dental X-ray unit designed to deliver fast, high-quality images for accurate diagnosis in any clinical setting.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1SuCIVjrfmUZiLGGDvqH-C5o7RfNosSaA&sz=w1000',
    features: [
      'Lightweight and portable',
      'High-quality X-ray imaging',
      'Fast and easy operation',
      'Rechargeable battery',
      'Ideal for chairside and mobile use'
    ],
    specifications: {
      'Spec': '1Pcs',
     
    },
    catalogRef: 'NG-PSP-202',
    isFeatured: false,
    origin: 'China'
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
    name: 'DX.CAL',
    category: 'composites',
    description: 'DX.CAL  Calcium Hydroxied Paste is for temporary root canal treatment, pulp curettage and pulpotomy',
    imageUrl: 'https://drive.google.com/thumbnail?id=1_JlaYTM3D12meYgEIv_9DaJFYRym5iE_&sz=w1000',
    features: [
      'Excellent antimicrobial effect PH>12',
      'High water solubility,easy to be cleaned and removed ',
      'Ready to use'
     
    ],
    specifications: {
      'Specification': '2g',
      
    },
    catalogRef: 'NG-NC-22B',
    isFeatured: true,
    origin: 'China'
  },
  {
    id: 'ster-02',
    name: 'DX. BOND V',
    category: 'composites',
    description: 'BOND V dental adhesive is a single component for total etch technology.It can be used wildly in dental clinic for all direct and indirect restoration. It also works well for enamel with total etching technique',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Sn3Wzkb8RSk5PaXneZ-if216IKPx4s0z&sz=w1000',
    features: [
      'Great stability, compatible with other resins',
      'Super bonding, durable adhesion performance'
    ],
    specifications: {
      'Specification': '5.0ml/bottle',
      
    },
    catalogRef: 'NG-NC-18B',
    isFeatured: false,
    origin: 'China'
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
    name: 'Disposable Micro-Applicators',
    category: 'tools',
    description: 'Flexible dental applicators designed for precise and controlled application of bonding agents, etchants, primers, and other dental materials in hard-to-reach areas. Suitable for various restorative and cosmetic dental procedures.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1DOByGhKYIXgDWhJTOF-iEIf845MDsIAy&sz=w1000',
    features: [
      'Provides accurate and controlled material placement',
      'Flexible tip adapts easily to different tooth surfaces',
      'Reduces material waste and improves efficiency',
      'Disposable design ensures hygiene and prevents cross-contamination',
      'Ideal for bonding, etching, and restorative procedures'
    ],
    specifications: {
      'Spec': '100Pcs',
      'Color': 'Multi color',
     
    },
    catalogRef: 'NG-UT-701',
    isFeatured: true,
    origin: 'China'
  },
  {
    id: 'tool-02',
    name: 'Sectional contoured metal Matrices',
    category: 'tools',
    description: 'Pre-shaped metal matrix bands designed to restore the natural contour and shape of posterior teeth during composite restorations. They help create accurate proximal contacts and proper anatomical tooth form.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1QcOzT4C9ShxMX8-S67PB1f6dFpVgNJuw&sz=w1000',
    features: [
      'Provides natural tooth contour and accurate restoration shape',
      'Helps achieve tight and precise proximal contacts',
      'Easy placement and removal during restorative procedures',
      'Improves isolation and reduces excess composite material',
      'Suitable for Class II posterior composite restorations'
    ],
    specifications: {
      'Spec': '100Pcs',
      
    },
    catalogRef: 'NG-UT-702',
    isFeatured: false,
    origin: 'China'
  },
  {
    id: 'tool-03',
    name: 'Dental Bracket',
    category: 'tools',
    description: 'Orthodontic components bonded to the surface of teeth to hold and guide orthodontic wires. They apply controlled forces to gradually move teeth into the desired position during orthodontic treatment.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1DcKlsgoZ1TUUVf1PrUen2P4twMlfpcFx&sz=w1000',
    features: [
      'Enables precise tooth movement and alignment',
      'Provides strong bonding and reliable performance',
      'Available in different designs for various orthodontic needs',
      'Improves treatment efficiency and patient comfort',
      'Suitable for a wide range of orthodontic procedures'
    ],
    specifications: {
      'Spec': '100pcs',
      
    },
    catalogRef: 'NG-UT-703',
    isFeatured: false,
    origin: 'China'
  },
  {
    id: 'tool-04',
    name: 'Absorbent Paper Pionts',
    category: 'tools',
    description: 'Absorbent Paper Points are used in endodontic procedures to absorb moisture and fluids from root canals after cleaning and irrigation. They help prepare the canal for effective root canal filling.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1wGYXIYRHBubkjnWvnlT5hDtlIkYdWijC&sz=w1000',
    features: [
      'Provides efficient absorption of moisture and fluids',
      'Helps create a dry environment before root canal filling',
      'High precision with a thin and flexible design',
      'Sterile and hygienic for safe clinical use',
      'Available in different sizes to fit various root canals'
    ],
    specifications: {
      'Spec': '100Pcs',
     
    },
    catalogRef: 'NG-UT-704',
    isFeatured: false,
    origin: 'Korea'
  },
  {
    id: 'tool-05',
    name: 'Mouth Mirror',
    category: 'tools',
    description: 'Mouth mirrors are dental instruments used for indirect vision, retraction of soft tissues, and illumination during dental examinations and procedures. They help dentists access and view areas of the mouth that are difficult to see directly.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1dqUHGaX0WNcW-kyuzDC8ORe0oyWxVpBL&sz=w1000',
    features: [
      'Provides clear view of hard-to-reach areas',
      'Helps with accurate diagnosis and treatment',
      'Enables easy soft tissue retraction'
    ],
    specifications: {
      'Spec': '12Pcs',
     
    },
    catalogRef: 'NG-UT-705',
    isFeatured: true,
    origin: 'China'
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
