export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  featured: boolean;
  category: "Weddings" | "Decor" | "Milestones" | "Management";
  features: string[];
  inclusions: string[];
  themeHighlights: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "luxury-wedding-planning",
    slug: "luxury-wedding-planning",
    title: "Luxury Wedding Planning",
    subtitle: "Turnkey Bespoke Royal Weddings",
    shortDesc: "End-to-end luxury wedding curation, from concept styling and venue transformation to guest hospitality and bridal coordination.",
    longDesc: "With 15+ years of wedding planning mastery across Chittoor, Tirupati, Vellore, and Bengaluru, VSM Events choreographs every aspect of your wedding with royal precision. We blend time-honored traditional rituals with international luxury aesthetics, ensuring stress-free perfection for families and a cinematic experience for guests.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    category: "Weddings",
    features: [
      "Bespoke Theme Conception & 3D Spatial Visualization",
      "Vendor Orchestration (Photography, Catering, Styling)",
      "Dedicated Day-Of Operations & Bridal Concierge",
      "Hospitality, Logistics & Guest Experience Management",
      "Budget Architecture & Transparent Milestone Costing"
    ],
    inclusions: [
      "Personal Senior Wedding Planner Assigned",
      "Run-of-show minute-by-minute timeline",
      "Complete coordination across all 4 key cities",
      "Custom decor blueprints & mock setups"
    ],
    themeHighlights: ["Royal Rajputana Palace", "Classic South Indian Temple Grandeur", "Contemporary Rose Gold & Ivory Romance", "Whimsical Glasshouse Mandap"],
    faqs: [
      {
        question: "How far in advance should we book wedding planning with VSM Events?",
        answer: "For auspicious wedding dates in Tirupati, Bengaluru, and Chittoor, we recommend booking 3 to 6 months in advance to secure prime dates and custom fabrication materials."
      },
      {
        question: "Do you coordinate multi-day destination weddings?",
        answer: "Yes, we frequently manage multi-day celebrations including Sangeet, Mehendi, Muhurtham, and Reception across resort properties in Bangalore, Tirupati, and Tamil Nadu."
      }
    ]
  },
  {
    id: "wedding-stage-decoration",
    slug: "wedding-stage-decoration",
    title: "Wedding Stage Decoration",
    subtitle: "Grand Mandaps & Royal Backdrops",
    shortDesc: "Grand architectural stages, handcrafted floral mandaps, and ambient illumination tailored for picture-perfect memories.",
    longDesc: "The wedding stage is the sacred center stage where memories are immortalized. VSM Events creates breathtaking mandaps featuring authentic South Indian temple pillars, brass urulis, cascading tuberose and orchids, or contemporary crystal chandeliers and gold-leaf archways that captivate every guest.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    category: "Decor",
    features: [
      "Traditional Temple & Carved Wooden Mandaps",
      "Contemporary Geometric & Floral Archways",
      "Bespoke Backdrops with Monograms & Floral Walls",
      "Specialty Lighting (Warm Spotlights, Gobos, Uplighting)",
      "Stage Carpet, Sofa Furniture & Brass Accessories"
    ],
    inclusions: [
      "Full setup by 50+ master florists & riggers",
      "Fresh exotic flowers imported for prime events",
      "Fire-safe materials & structural safety compliance",
      "On-site maintenance throughout the ceremony"
    ],
    themeHighlights: ["Tirupati Temple Gopuram Concept", "Vedic Floral Dome", "Modern Ivory & Champagne Gold Pillars", "Regal Velvet & Gilded Mirror Stages"],
    faqs: [
      {
        question: "Can we customize the stage colors to match the bride's saree?",
        answer: "Absolutely. We cross-reference color swatches from your bridal lehenga or silk saree to curate harmonious floral blooms and drape palettes."
      }
    ]
  },
  {
    id: "engagement-ceremonies",
    slug: "engagement-ceremonies",
    title: "Engagement Ceremonies",
    subtitle: "Chic Intimate & Grand Ring Ceremonies",
    shortDesc: "Sophisticated ring exchange setups with romantic floral tunnels, personalized ring presentation stages, and ambient acoustic vibes.",
    longDesc: "Mark the prelude to your forever with an engagement setting that radiates intimacy and elegance. From pastel floral gazebos to personalized acrylic name signages and fairy-light canopies, we craft an atmosphere of pure enchantment.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    category: "Weddings",
    features: [
      "Bespoke Ring Stage & Floral Photo Booths",
      "Calligraphy & Neon Monogram Signages",
      "Aisle Walkways with Candle Glassware",
      "Audio-Visual & Acoustic Ambience Coordination",
      "Custom Ring Tray & Floral Ring Cloche Crafting"
    ],
    inclusions: ["Complete photo backdrop", "Welcome easel with custom floral crown", "VIP lounge seating setup"],
    themeHighlights: ["Blush Pink & White Lily Garden", "Boho Tuscan Chic", "Sparkling Mirror & Starlight Ring Stage"],
    faqs: [
      {
        question: "Do you cater to both intimate home engagements and hotel banquets?",
        answer: "Yes, we tailor setups to private lawns, ancestral courtyards, or 5-star banquet halls with equal grandeur and proportion."
      }
    ]
  },
  {
    id: "haldi-mehendi-decorations",
    slug: "haldi-mehendi-decorations",
    title: "Haldi & Mehendi Decorations",
    subtitle: "Vibrant Sunshine Marigolds & Boho Chic",
    shortDesc: "Joyous, vibrant setups featuring traditional genda phool tassels, brass urulis, colorful drapes, customized seating, and festive props.",
    longDesc: "Haldi and Mehendi ceremonies call for uninhibited joy, vivid colors, and heritage celebration. We curate traditional brass urlis for the holy haldi bath, floral swings (jhoolas), hand-painted umbrella canopies, and festive photo booths that bring laughter and energy to life.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    category: "Decor",
    features: [
      "Brass Uruli & Floral Waterfall Setup for Haldi Bath",
      "Handcrafted Floral Jhoolas (Swings) & Diwan Lounges",
      "Marigold Canopies, Rajasthani Umbrellas & Tassels",
      "Mehendi Station with Personalized Henna Lounges",
      "Color Powder, Floral Jewellery & Live Dhol Coordination"
    ],
    inclusions: ["Customized photo opps", "Fresh marigold garlands in saffron & yellow", "Low seating floor cushions & bolster sets"],
    themeHighlights: ["Yellow Sunshine Fiesta", "Boho Pampas Grass & Citrus Dream", "Traditional Tanjore & Marigold Mela"],
    faqs: [
      {
        question: "Do you supply the brass uruli and flower petal shower cones?",
        answer: "Yes, all heritage brass vessels, flower petal cones, and water splash arrangements are part of our turnkey Haldi package."
      }
    ]
  },
  {
    id: "reception-decorations",
    slug: "reception-decorations",
    title: "Reception Decorations",
    subtitle: "Opulent Evening Glamour & Grand Lighting",
    shortDesc: "Glamorous evening gala styling with crystal chandeliers, grand tunnel entrances, LED walls, and lavish banquet table scapes.",
    longDesc: "Transform your wedding reception into a grand royal gala. VSM Events specializes in dramatic lighting architecture, cascading floral ceilings, grand mirror runways, and statement backdrops that create unforgettable first impressions for hundreds of dignitaries and guests.",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    category: "Decor",
    features: [
      "Majestic 60-Foot Tunnel Entrances with Edison Bulb Ceilings",
      "Crystal Chandelier Cascades & Moving Beam Lighting",
      "High-Density Orchid & Hydrangea Floral Walls",
      "Stage Platforms with Hydraulic / LED Elements",
      "VIP Banquet Tablescaping & Centerpieces"
    ],
    inclusions: ["Complete venue ambient lighting", "Stage furniture", "Entrance grand archway"],
    themeHighlights: ["Great Gatsby Crystal Elegance", "Midnight Starry Night Gala", "Royal Burgundy & Champagne Gold Palace"],
    faqs: [
      {
        question: "Can you manage setups in large convention centres in Bengaluru or Tirupati?",
        answer: "Yes, our team is equipped with heavy industrial trussing, sound staging, and generator backups for large capacity venues holding 1,000 to 5,000+ guests."
      }
    ]
  },
  {
    id: "birthday-party-planning",
    slug: "birthday-party-planning",
    title: "Birthday Party Planning",
    subtitle: "Milestone Birthdays & Magical Kids Themes",
    shortDesc: "Extraordinary birthday celebrations ranging from 1st birthday fairytale dreamscapes to stylish 50th golden jubilee galas.",
    longDesc: "Every milestone deserves spectacular flair. Whether it is your child's 1st birthday featuring 3D animal sculptures and organic balloon clouds or an exquisite 25th / 50th birthday dinner with vintage saxophonists and candlelit arches, VSM Events delivers joy with impeccable taste.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    category: "Milestones",
    features: [
      "Custom 3D Theme Characters & Backdrops",
      "Organic Pastel & Chrome Balloon Sculptures",
      "Themed Cake Tables, Treat Displays & Sweet Bars",
      "Interactive Entertainment (Magicians, Emcees, Game Zones)",
      "Bespoke Return Gift Bags & Welcome Displays"
    ],
    inclusions: ["Theme cake backdrop with neon sign", "Welcome board with photo gallery", "Kids table styling"],
    themeHighlights: ["Little Prince / Princess Castle", "Jungle Safari Expedition", "Outer Space Nebula", "Vintage Golden Elegance for Adults"],
    faqs: [
      {
        question: "Do you supply customized theme return gifts and cakes?",
        answer: "Yes, we collaborate with premier patisseries and artisan gifting partners to coordinate the entire theme cohesively."
      }
    ]
  },
  {
    id: "baby-showers-naming-ceremonies",
    slug: "baby-showers-naming-ceremonies",
    title: "Baby Showers & Naming Ceremonies",
    subtitle: "Seemantham, Cradle & Namakaranam Decors",
    shortDesc: "Auspicious traditional South Indian Seemantham settings, floral cradles, and delicate pastel baby shower celebrations.",
    longDesc: "Celebrate the arrival of new life with tender elegance. We create authentic South Indian traditional Seemantham setups featuring mango leaf thoranams, lotus ponds, and customized wooden cradle decors, as well as chic European pastel baby shower brunches.",
    image: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    category: "Milestones",
    features: [
      "Traditional Seemantham Swing & Lotus Uruli Mandap",
      "Bespoke Handcrafted Floral Cradle (Uyyala) Setup",
      "Gender Reveal Balloon Drops & Confetti Cannons",
      "Traditional Brass Kuthuvilakku & Tanjore Accents",
      "Pastel Cloud & Teddy Bear European Brunch Themes"
    ],
    inclusions: ["Cradle floral dressing", "Mother-to-be throne seating", "Entrance welcome signage"],
    themeHighlights: ["Sacred Lotus Pond & Temple Bells", "Sweet Clouds & Hot Air Balloon", "Vedic Heritage Valaikappu Setup"],
    faqs: [
      {
        question: "Can the cradle setup be executed at our home in Chittoor or Vellore?",
        answer: "Yes! We specialize in home transformations, preserving family sanctity while delivering boutique luxury styling."
      }
    ]
  },
  {
    id: "anniversary-celebrations",
    slug: "anniversary-celebrations",
    title: "Anniversary Celebrations",
    subtitle: "Silver, Golden & Intimate Milestones",
    shortDesc: "Heartfelt renewal of vows, 25th silver jubilees, and 50th golden anniversaries marked with timeless sophistication.",
    longDesc: "Honor a lifetime of love with a setting worthy of the journey. From intimate candlelit family banquets to 500-guest golden jubilee galas with retrospective memory tunnels, VSM Events crafts emotional, deeply personal anniversary events.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    category: "Milestones",
    features: [
      "Photo Retrospective Memory Gallery Walkway",
      "Vow Renewal Arch & Stage with Ambient Strings",
      "Gourmet Dining Setup with Fine China & Linen",
      "Custom Champagne Toast & Monogram Lighting",
      "Live Instrumental Music & Emcee Coordination"
    ],
    inclusions: ["Memory wall display", "Couple spotlight stage", "Guest memory book setup"],
    themeHighlights: ["Silver Moonlight Shimmer", "Golden Vintage Romance", "Eternal Rose & Velvet Courtyard"],
    faqs: [
      {
        question: "Can you include a surprise video presentation setup for our parents?",
        answer: "Yes, we integrate high-definition projection screens and surround audio systems for emotional tribute videos and toasts."
      }
    ]
  },
  {
    id: "floral-decorations",
    slug: "floral-decorations",
    title: "Floral Decorations",
    subtitle: "Fresh Exotic Florals & Temple Jasmine Cascades",
    shortDesc: "Master floral artistry featuring fresh Bangalore roses, exotic Thai orchids, fragrant Madurai malli, and imported carnations.",
    longDesc: "Flowers are the soul of Indian celebrations. With dedicated floral cold-chain logistics across Andhra, Tamil Nadu, and Karnataka, our in-house master florists weave fragrant floral chandeliers, floating water rangolis, dense floral walls, and magnificent mandap domes with unmatched freshness.",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    category: "Decor",
    features: [
      "Fresh Exotic Orchid, Lily & Hydrangea Installations",
      "Fragrant Traditional Jasmine (Malli) & Tuberose Drapes",
      "Suspended Floral Ceiling Canopies & Chandeliers",
      "Grand Entrance Floral Arches & Carved Floral Sculptures",
      "Floating Flower Petal Rangolis in Brass Vessels"
    ],
    inclusions: ["Direct farm-fresh flower sourcing", "Pre-event misting & thermal preservation", "Zero-waste floral disposal"],
    themeHighlights: ["Royal White Lily & Gold Oasis", "Crimson Rose Monarchy", "Traditional Temple Marigold & Jasmine Heritage"],
    faqs: [
      {
        question: "How do you ensure flowers stay fresh for a morning Muhurtham?",
        answer: "We receive fresh blossoms the previous evening, condition them in temperature-managed environments, and execute the final setup in the early dawn hours."
      }
    ]
  },
  {
    id: "corporate-events",
    slug: "corporate-events",
    title: "Corporate Events",
    subtitle: "Conferences, Awards Nights & Product Launches",
    shortDesc: "Sleek professional event staging, corporate galas, annual awards, executive summits, and brand activation experiences.",
    longDesc: "When your brand commands the stage, professionalism must be absolute. VSM Events delivers high-impact stage engineering, cutting-edge AV systems, seamless registration desks, and executive networking banquets for leading enterprises in Bengaluru, Tirupati, and across South India.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    category: "Management",
    features: [
      "Curved LED Video Walls & Line Array Sound Systems",
      "Branded Registration Desks, Badging & Turnstiles",
      "Gala Award Stages with Dynamic Intelligent Lighting",
      "VIP Hospitality Lounges & Executive Seating",
      "Live Webcast Streaming & Corporate Hybrid Audio"
    ],
    inclusions: ["Technical director on-site", "Rehearsal day coordination", "Safety certifications"],
    themeHighlights: ["Futuristic Tech Summit", "Black Tie Corporate Excellence Gala", "Green Sustainability Leadership Conference"],
    faqs: [
      {
        question: "Do you provide GST invoices for corporate bookings?",
        answer: "Yes, we provide fully GST-compliant commercial contracts, purchase orders, and itemized corporate billing."
      }
    ]
  },
  {
    id: "customized-theme-decorations",
    slug: "customized-theme-decorations",
    title: "Customized Theme Decorations",
    subtitle: "Your Wildest Imagination Brought to Life",
    shortDesc: "Unique conceptual themes engineered from scratch — from Arabian Nights to Enchanted Forest, Bollywood Retro to Royal Mughal.",
    longDesc: "Have a unique dream that transcends off-the-shelf catalog decors? Our conceptual design studio crafts customized themes from scratch. We sculpt custom styrofoam and fiberglass structures, fabricate specialized lighting, print bespoke tapestries, and transform bare venues into otherworldly landscapes.",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    category: "Decor",
    features: [
      "Custom 3D Concept Moodboards & Renderings",
      "Fiberglass & Timber Sculptural Fabrication",
      "Thematic Drapery, Flooring & Light Immersion",
      "Themed Costumed Character Greeters & Art Installations",
      "Photo Zone Installations Designed for Social Media Virality"
    ],
    inclusions: ["Architectural mockups", "Custom color matching", "Material prototyping"],
    themeHighlights: ["Enchanted Twilight Forest", "Arabian Oasis & Moroccan Lanterns", "Vintage Bollywood Extravaganza", "Celestial Galaxy of Stars"],
    faqs: [
      {
        question: "Can we share Pinterest boards for inspiration?",
        answer: "Yes! We welcome your Pinterest boards, Instagram saves, or personal sketches, and adapt them into real-world structures tailored to your venue dimensions."
      }
    ]
  },
  {
    id: "complete-event-management",
    slug: "complete-event-management",
    title: "Complete Event Management",
    subtitle: "Flawless Orchestration from Start to Finish",
    shortDesc: "Full-scale logistics, permissions, artist bookings, hospitality, crowd management, and multi-day itinerary execution.",
    longDesc: "True luxury is the freedom to be fully present at your own celebration. With Complete Event Management, VSM Events takes custody of the entire puzzle: government permissions, hospitality and airport transfers, catering coordination, live entertainment, security, and minute-by-minute execution.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    category: "Management",
    features: [
      "Turnkey Production & Minute-by-Minute Run-Down",
      "Artist & Celebrity Management (DJs, Singers, Dancers)",
      "Food & Beverage Liaison & Menu Tastings",
      "Guest Transport Logistics & Room Allocation Concierge",
      "Emergency Contingency & Power Redundancy Backups"
    ],
    inclusions: ["Senior command center on-site", "Walkie-talkie coordinated crew of 40+", "Post-event reconciliation"],
    themeHighlights: ["Grand Indian Multi-Day Destination Celebration", "VIP Estate Private Gala", "Cultural Festival & Community Jubilee"],
    faqs: [
      {
        question: "Who is our single point of contact during the event?",
        answer: "You are assigned a dedicated Senior Event Director who leads the entire crew, so you and your family deal with only one trusted professional."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug);
}
