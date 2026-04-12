import bentoCommercialRef from '../assets/reference/bento-commercial.jpg';
import bentoCurtainsRef from '../assets/reference/bento-curtains.jpg';
import bentoManufacturingRef from '../assets/reference/bento-manufacturing.jpg';
import bentoRestorationRef from '../assets/reference/bento-restoration.jpg';
import contactTextureFabricsRef from '../assets/reference/contact-texture-fabrics.jpg';
import contactTextureStitchingRef from '../assets/reference/contact-texture-stitching.jpg';
import contactTextureToolsRef from '../assets/reference/contact-texture-tools.jpg';
import contactTextureVelvetRef from '../assets/reference/contact-texture-velvet.jpg';
import fabricAntiqueTanHideRef from '../assets/reference/fabric-antique-tan-hide.jpg';
import fabricAtelierCollectionRef from '../assets/reference/fabric-atelier-collection.jpg';
import fabricGraftonHerringboneRef from '../assets/reference/fabric-grafton-herringbone.jpg';
import fabricImperialEmeraldVelvetRef from '../assets/reference/fabric-imperial-emerald-velvet.jpg';
import fabricMidCenturyGeoRef from '../assets/reference/fabric-mid-century-geo.jpg';
import fabricNocturneBoucleRef from '../assets/reference/fabric-nocturne-boucle.jpg';
import fabricOrnateSilkDamaskRef from '../assets/reference/fabric-ornate-silk-damask.jpg';
import fabricTuscanSunLinenRef from '../assets/reference/fabric-tuscan-sun-linen.jpg';
import heroRef from '../assets/reference/hero.jpg';
import materialLibraryRef from '../assets/reference/material-library.jpg';
import philosophyAccentRef from '../assets/reference/philosophy-accent.jpg';
import philosophyPrimaryRef from '../assets/reference/philosophy-primary.jpg';
import portfolioClubLoungeRef from '../assets/reference/portfolio-club-lounge.jpg';
import portfolioFeaturedAfterRef from '../assets/reference/portfolio-featured-after.jpg';
import portfolioFeaturedBeforeRef from '../assets/reference/portfolio-featured-before.jpg';
import portfolioLeatherDetailRef from '../assets/reference/portfolio-leather-detail.jpg';
import portfolioModularRef from '../assets/reference/portfolio-modular.jpg';
import servicesAntiqueRestorationRef from '../assets/reference/services-antique-restoration.jpg';
import servicesCustomHeadboardsRef from '../assets/reference/services-custom-headboards.jpg';
import servicesFurnitureReupholsteryRef from '../assets/reference/services-furniture-reupholstery.jpg';
import servicesTextileLibraryRef from '../assets/reference/services-textile-library.jpg';

export const companyInfo = {
  name: 'Swar Upholstery Inc',
  shortName: 'Swar Upholstery',
  owner: 'Abd Swar',
  phoneDisplay: '343-987-8888',
  phoneHref: 'tel:+13439878888',
  email: 'swarupholstery@gmail.com',
  emailHref: 'mailto:swarupholstery@gmail.com',
  address: '1487 Lagan Way (off Belfast Rd.), Ottawa, ON K1B 3S4',
  location: 'Ottawa, Ontario',
  summary:
    'Premium upholstery, restoration, and interior refresh work for automotive and furniture projects across Ottawa.',
  businessHours: [
    { days: 'Monday - Friday', hours: '8:00 AM - 5:30 PM' },
    { days: 'Saturday', hours: 'By appointment' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  socialLinks: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Houzz', href: '#' },
  ],
};

export const headerNavigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/gallery' },
  { label: 'Fabrics', to: '/fabrics' },
  { label: 'Contact', to: '/contact' },
];

export const footerUtilityLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Sustainability', href: '#' },
  { label: 'Care Guide', href: '#' },
];

export const designReferenceImages = {
  hero: heroRef,
  philosophyPrimary: philosophyPrimaryRef,
  philosophyAccent: philosophyAccentRef,
  bentoManufacturing: bentoManufacturingRef,
  bentoRestoration: bentoRestorationRef,
  bentoCurtains: bentoCurtainsRef,
  bentoCommercial: bentoCommercialRef,
  materialLibrary: materialLibraryRef,
};

export const homeHeroSlides = [
  {
    id: 'atelier-hero',
    image: heroRef,
    alt: 'Master craftsman hand-stitching premium upholstery in a luxury atelier',
  },
  {
    id: 'atelier-materials',
    image: materialLibraryRef,
    alt: 'Luxury upholstery materials and fabric swatches displayed in the atelier',
  },
  {
    id: 'atelier-craft',
    image: servicesFurnitureReupholsteryRef,
    alt: 'Statement upholstery piece showcasing premium craftsmanship and restoration detail',
  },
];

export const homeBrandPartners = [
  { name: 'Sunbrella', meta: 'Performance Fabric' },
  { name: 'Ultrafabrics', meta: 'Premium Upholstery' },
  { name: 'Maharam', meta: 'Design Textiles' },
  { name: 'Kvadrat', meta: 'Architectural Fabric' },
  { name: 'Camira', meta: 'Wool & Contract' },
  { name: 'Alcantara', meta: 'Automotive Finish' },
  { name: 'Crypton', meta: 'Protected Textile' },
  { name: 'Richloom', meta: 'Decorator Fabrics' },
  { name: 'Stacy Garcia', meta: 'Luxury Textiles' },
  { name: 'Brisa', meta: 'High-End Leather' },
];

export const homePhilosophyPoints = [
  {
    number: '01',
    title: 'Sustainable Sourcing',
    description:
      'Only the finest ethical fabrics and premium materials selected for comfort, durability, and long-term character.',
  },
  {
    number: '02',
    title: 'Master Joinery',
    description:
      'Structural restoration and upholstery rebuilding handled with the kind of care that makes the finish feel intentional and lasting.',
  },
];

export const homeBentoServices = [
  {
    title: 'Bespoke Manufacturing',
    subtitle: 'Custom pieces from concept to creation',
    image: designReferenceImages.bentoManufacturing,
    to: '/services',
    span: 'wide',
    tone: 'light',
  },
  {
    title: 'Heritage Restoration',
    subtitle: 'Reviving worn interiors and furniture with care',
    image: designReferenceImages.bentoRestoration,
    to: '/gallery',
    tone: 'dark',
  },
  {
    title: 'Soft Furnishings',
    subtitle: 'Fabrics, detailing, and comfort-led refinements',
    image: designReferenceImages.bentoCurtains,
    to: '/services',
    tone: 'light',
  },
  {
    title: 'Commercial Spaces',
    subtitle: 'Hospitality and premium interior environments',
    image: designReferenceImages.bentoCommercial,
    to: '/contact',
    span: 'wide',
    tone: 'light',
  },
];

export const materialLibraryTags = [
  'Italian Leather',
  'Belgian Linen',
  'Silk Velvet',
  'Organic Wool',
];

export const featuredTestimonial = {
  quote:
    "Swar transformed my grandmother's heirloom chair into a contemporary masterpiece. The attention to detail in the hidden stitching is simply unparalleled.",
  author: 'Elena Moretti',
  role: 'Principal Architect, Studio Moretti',
};

export const servicesPageIntro = {
  eyebrow: 'Artisan Craftsmanship',
  title: 'Tailored',
  accent: 'Transformations.',
  description:
    'Where heritage techniques meet contemporary aesthetic. We redefine luxury through the meticulous restoration and creation of bespoke upholstery pieces.',
};

export const servicesEditorialCards = [
  {
    eyebrow: 'Core Service',
    title: 'Furniture Re-upholstery',
    description:
      'Breathe new life into your cherished pieces with our comprehensive re-upholstery service. We strip back to the frame, ensuring structural integrity before applying the finest fabrics.',
    ctaLabel: 'Discover the process',
    to: '/contact',
    image: servicesFurnitureReupholsteryRef,
    imageAlt: 'Luxury velvet chair re-upholstery',
  },
  {
    eyebrow: 'Bespoke Design',
    title: 'Custom Headboards',
    description:
      "Create a focal point of unparalleled elegance. From traditional deep-buttoning to contemporary geometric paneling, we craft headboards tailored to your sanctuary's exact dimensions.",
    ctaLabel: 'Start your commission',
    to: '/contact',
    image: servicesCustomHeadboardsRef,
    imageAlt: 'Custom tufted headboard',
    offset: true,
  },
  {
    eyebrow: 'Heritage Care',
    title: 'Antique Restoration',
    description:
      'Preserving history through precision. Our restoration experts utilize period-correct materials and techniques, including traditional horsehair stuffing and hand-tied springs, to honor the original craft.',
    ctaLabel: 'Preservation portfolio',
    to: '/gallery',
    image: servicesAntiqueRestorationRef,
    imageAlt: 'Antique sofa restoration',
  },
];

export const servicesTextileLibrary = {
  eyebrow: 'The Textile Library',
  title: 'Curated Textures for the',
  accent: 'Modern Interior.',
  description:
    "Access an exclusive collection of luxury fabrics from the world's most renowned mills. From Belgian linens to Italian silks, we source the foundation of your comfort.",
  tags: ['French Velvet', 'English Linen', 'Pure Silk', 'Top Grain Leather'],
  image: servicesTextileLibraryRef,
  imageAlt: 'Luxury fabric swatches',
  statValue: '500+',
  statLabel: 'Premium Swatches',
};

export const servicesFinalCta = {
  title: 'Every stitch is a',
  middle: 'commitment to',
  accent: 'excellence.',
  primaryLabel: 'Request an estimate',
  primaryTo: '/contact',
  secondaryLabel: 'View our gallery',
  secondaryTo: '/gallery',
};

export const portfolioPageIntro = {
  eyebrow: 'Curated Craftsmanship',
  title: 'The Gallery',
  accent: 'of Revival.',
  description:
    'Explore our portfolio of bespoke transformations. From heritage heirlooms to contemporary statements, every stitch tells a story of structural integrity and tactile luxury.',
};

export const portfolioFeaturedCaseStudy = {
  eyebrow: 'Case Study No. 012',
  title: 'The Victorian',
  accent: 'Emerald Wingback',
  description:
    'A complete structural restoration using 18th-century traditional techniques. Hand-lashed springs, coconut fiber padding, and finished in a custom-dyed Italian silk velvet.',
  tags: ['Silk Velvet', 'Traditional Tufting', 'Gilded Wood'],
  ctaLabel: 'Explore details',
  ctaTo: '/contact',
  afterImage: portfolioFeaturedAfterRef,
  afterAlt: 'Luxury restored emerald wingback chair',
  beforeImage: portfolioFeaturedBeforeRef,
  beforeAlt: 'Before restoration antique chair frame',
};

export const portfolioBentoItems = [
  {
    type: 'project',
    title: 'The Contemporary Modular',
    subtitle: 'Linen & Ash Wood • Residential Project',
    image: portfolioModularRef,
    imageAlt: 'Modern minimalist living room with bespoke modular sofa',
    span: 'wide',
  },
  {
    type: 'detail',
    title: 'Tactile Excellence',
    description:
      'Every material in our library is selected for its longevity and sensory profile. We specialize in working with rare textiles that demand specialized handling.',
    icon: 'texture',
    swatches: ['#eddec5', '#cba72f', '#717973'],
  },
  {
    type: 'project',
    title: 'Leather Detail',
    subtitle: 'Full Grain • Saddlery Stitching',
    image: portfolioLeatherDetailRef,
    imageAlt: 'Close up detail of hand-stitched leather seams',
  },
  {
    type: 'project',
    title: 'The Mayfair Club Lounge',
    subtitle: 'Commercial • Wool Blends',
    image: portfolioClubLoungeRef,
    imageAlt: 'High-end commercial lounge with bespoke armchairs',
    span: 'wide',
  },
];

export const portfolioGalleryItems = [
  {
    type: 'project',
    title: 'The Contemporary Modular',
    subtitle: 'Linen & Ash Wood • Residential Project',
    description:
      'A tailored residential commission built around quiet lines, deep comfort, and durable upholstery selected for daily living.',
    tags: ['Linen', 'Ash Wood', 'Residential'],
    image: portfolioModularRef,
    imageAlt: 'Modern minimalist living room with bespoke modular sofa',
    span: 'wide',
  },
  {
    type: 'detail',
    title: 'Tactile Excellence',
    description:
      'Every material in our library is selected for its longevity and sensory profile. We specialize in working with rare textiles that demand specialized handling.',
    icon: 'texture',
    swatches: [
      {
        color: '#eddec5',
        label: 'Natural Linen',
        title: 'Quiet Warmth',
        description:
          'Belgian-inspired neutrals that soften large seating compositions and keep modern interiors calm and breathable.',
      },
      {
        color: '#cba72f',
        label: 'Golden Accent',
        title: 'Statement Contrast',
        description:
          'Accent tones used to introduce warmth, piping, and subtle luxury detailing without overpowering the main upholstery fabric.',
      },
      {
        color: '#717973',
        label: 'Charcoal Structure',
        title: 'Architectural Balance',
        description:
          'Cool structural tones that pair beautifully with leather, wool blends, and commercial lounge seating applications.',
      },
    ],
  },
  {
    type: 'project',
    title: 'Leather Detail',
    subtitle: 'Full Grain • Saddlery Stitching',
    description:
      'Close-detail craftsmanship focused on seam accuracy, panel consistency, and hand-finished leather edges.',
    tags: ['Full Grain', 'Saddlery Stitching', 'Detail Work'],
    image: portfolioLeatherDetailRef,
    imageAlt: 'Close up detail of hand-stitched leather seams',
  },
  {
    type: 'project',
    title: 'The Mayfair Club Lounge',
    subtitle: 'Commercial • Wool Blends',
    description:
      'A hospitality seating refresh designed for high traffic, tonal elegance, and long-term durability across a refined lounge setting.',
    tags: ['Commercial', 'Wool Blends', 'Hospitality'],
    image: portfolioClubLoungeRef,
    imageAlt: 'High-end commercial lounge with bespoke armchairs',
    span: 'wide',
  },
];

export const portfolioMethodology = [
  {
    icon: 'architecture',
    title: 'Structural Integrity',
    description:
      'Stripped to the bone. Every frame is reinforced, joints tightened, and webbing replaced.',
  },
  {
    icon: 'palette',
    title: 'Fabric Curation',
    description:
      'Collaborative selection from our global library of over 4,000 textile swatches.',
  },
  {
    icon: 'handyman',
    title: 'Bespoke Finish',
    description:
      'Final stitching performed by master artisans with over 30 years of workshop experience.',
  },
];

export const portfolioFinalCta = {
  title: 'Start Your Transformation',
  description:
    'Your furniture is a vessel for history. Let us help you write the next chapter with unparalleled craftsmanship.',
  primaryLabel: 'Request Quote',
  primaryTo: '/contact',
  secondaryLabel: 'Order Fabric Swatches',
  secondaryTo: '/contact',
};

export const fabricsPageIntro = {
  eyebrow: 'The Material Library',
  title: 'Bespoke',
  accent: 'Textiles',
  mobileInline: true,
  description:
    'Explore our curated selection of global linens, velvet piles, and heritage weaves. Each specimen is selected for its structural integrity and tactile elegance.',
};

export const fabricsCategories = [
  'All Materials',
  'Heritage Velvet',
  'Washed Linen',
  'Italian Leather',
  'Silk Brocade',
  'Performance Weaves',
];

export const fabricsCollection = [
  {
    title: 'Imperial Emerald Velvet',
    subtitle: '100% Mohair • Heavy Domestic',
    reference: 'Ref: SV-001',
    image: fabricImperialEmeraldVelvetRef,
    imageAlt: 'Imperial emerald velvet fabric close-up',
    layout: 'featuredLarge',
    category: 'Heritage Velvet',
  },
  {
    title: 'Tuscan Sun Linen',
    subtitle: 'Stonewashed • Breathable',
    image: fabricTuscanSunLinenRef,
    imageAlt: 'Natural beige linen fabric close-up',
    layout: 'standard',
    category: 'Washed Linen',
  },
  {
    title: 'Grafton Herringbone',
    subtitle: 'Virgin Wool • Heritage',
    image: fabricGraftonHerringboneRef,
    imageAlt: 'Deep charcoal herringbone wool fabric',
    layout: 'standard',
    category: 'Performance Weaves',
  },
  {
    title: 'Ornate Silk Damask',
    subtitle: 'Jacquard • Decorative',
    image: fabricOrnateSilkDamaskRef,
    imageAlt: 'Champagne gold silk damask fabric',
    layout: 'standard',
    category: 'Silk Brocade',
  },
  {
    title: 'Antique Tan Hide',
    subtitle: 'Full Grain • Aniline',
    image: fabricAntiqueTanHideRef,
    imageAlt: 'Supple antique tan leather texture',
    layout: 'standard',
    category: 'Italian Leather',
  },
  {
    title: 'The Atelier Collection',
    subtitle: 'Limited Edition',
    image: fabricAtelierCollectionRef,
    imageAlt: 'Roll of forest green velvet on cutting table',
    layout: 'featuredWide',
    category: 'Heritage Velvet',
  },
  {
    title: 'Nocturne Bouclé',
    subtitle: 'Textured • Modernist',
    image: fabricNocturneBoucleRef,
    imageAlt: 'Midnight blue boucle fabric detail',
    layout: 'standard',
    category: 'Performance Weaves',
  },
  {
    title: 'Mid-Century Geo',
    subtitle: 'Cotton Blend • Patterned',
    image: fabricMidCenturyGeoRef,
    imageAlt: 'Geometric woven fabric in mustard and navy',
    layout: 'standard',
    category: 'Performance Weaves',
  },
];

export const fabricsSampleCta = {
  eyebrow: "Can't decide on a material?",
  title: 'Request a',
  accent: 'Sample Swatch Kit',
  description:
    "Curated by our designers, our sample kits include 5 textures of your choice to experience in your home's unique light.",
  primaryLabel: 'Order Sample Kit',
  primaryTo: '/contact',
  secondaryLabel: 'View Care Guide',
  secondaryTo: '/contact',
};

export const contactPageIntro = {
  eyebrow: 'The Digital Atelier',
  title: 'Connect with our Master Artisans.',
  description:
    'Whether you seek a bespoke commission or a delicate restoration, our studio is dedicated to the preservation of craftsmanship and timeless elegance.',
};

export const contactProjectTypes = [
  'Bespoke Furniture Upholstery',
  'Antique Restoration',
  'Commercial Fit-out',
  'Material Sourcing',
];

export const contactCalendarPreview = {
  initialMonthOffset: 0,
  minAdvanceDays: 1,
  maxAdvanceMonths: 6,
  timezoneLabel: 'Ottawa (ET)',
  weekdaySlots: {
    1: ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'],
    2: ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'],
    3: ['09:30 AM', '12:00 PM', '02:30 PM', '05:00 PM'],
    4: ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'],
    5: ['09:00 AM', '11:00 AM', '01:30 PM', '03:30 PM'],
    6: ['10:00 AM', '12:30 PM'],
  },
  blockedDates: [],
  specialSlots: {},
};

export const contactStudioDetails = [
  {
    icon: 'location_on',
    title: 'Main Studio',
    lines: ['1487 Lagan Way (off Belfast Rd.)', 'Ottawa, ON K1B 3S4'],
  },
  {
    icon: 'mail',
    title: 'Direct Correspondence',
    lines: ['swarupholstery@gmail.com', '343-987-8888'],
  },
  {
    icon: 'schedule',
    title: 'Studio Hours',
    lines: ['Mon - Fri: 08:00 - 17:30', 'Sat: By Appointment Only'],
  },
];

export const contactStudioMap = {
  embedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.794182037136!2d-75.6292572!3d45.4134898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0fb68f631d13%3A0x4841edd553f43f4c!2sSWAR%20UPHOLSTERY%20INC.!5e0!3m2!1sen!2sfr!4v1775898027961!5m2!1sen!2sfr',
  title: 'SWAR UPHOLSTERY INC. map',
};

export const contactTextureShowcase = [
  {
    image: contactTextureVelvetRef,
    imageAlt: 'Extreme close-up of premium forest green velvet fabric',
  },
  {
    image: contactTextureStitchingRef,
    imageAlt: 'Artisan hands using traditional needles to stitch upholstery',
  },
  {
    image: contactTextureToolsRef,
    imageAlt: 'Collection of brass upholstery tacks and tools',
  },
  {
    image: contactTextureFabricsRef,
    imageAlt: 'Rolls of high-end silk and brocade fabrics',
  },
];

export const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: companyInfo.name,
  email: companyInfo.email,
  telephone: companyInfo.phoneDisplay,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1487 Lagan Way (off Belfast Rd.)',
    addressLocality: 'Ottawa',
    addressRegion: 'ON',
    postalCode: 'K1B 3S4',
    addressCountry: 'CA',
  },
};
