export interface ServiceLocation {
  code: string;
  name: string;
  state: string;
  tagline: string;
  description: string;
  popularVenues: string[];
  phone: string;
  whatsappMessage: string;
}

export const siteConfig = {
  name: "VSM Events",
  category: "Event Planner | Wedding Planner & Event Decor",
  tagline: "Creating Unforgettable Celebrations",
  brandPositioning: "Premium, elegant, luxurious, creative, and trustworthy",
  experienceYears: "15+",
  eventsCompleted: "2,000+",
  citiesCount: 4,

  // Official Contact Details (Configurable)
  contact: {
    primaryPhone: "+91 98401 24567",
    secondaryPhone: "+91 94432 98765",
    whatsappNumber: "919840124567", // numeric for wa.me
    displayWhatsapp: "+91 98401 24567",
    email: "enquiries@vsmevents.com",
    address: "Headquarters: Chittoor - Tirupati Highway, Andhra Pradesh & Bangalore Hub: Indiranagar, Bengaluru",
    businessHours: "Mon - Sun: 9:00 AM - 9:00 PM (Available 24/7 for active events)",
  },

  // Service Locations
  locations: [
    {
      code: "CTR",
      name: "Chittoor",
      state: "Andhra Pradesh",
      tagline: "Our Home Turf & Heritage Celebrations",
      description: "Rooted in Chittoor for over 15 years, delivering grand traditional and modern wedding celebrations across prestigious halls and private estates.",
      popularVenues: ["Sri Padmavathi Kalyana Mandapam", "Heritage Resorts Kanipakam", "Grand Palace Chittoor"],
      phone: "+91 98401 24567",
      whatsappMessage: "Hi VSM Events, I am planning an event in Chittoor and would love to consult with your team."
    },
    {
      code: "TPT",
      name: "Tirupati",
      state: "Andhra Pradesh",
      tagline: "Sacred Ceremonies & Divine Decor",
      description: "Specializing in auspicious temple-town weddings, divine floral mandaps, and grand reception ceremonies in the spiritual capital.",
      popularVenues: ["Marasa Sarovar Premiere", "Taj Tirupati", "Fortune Select Grand Ridge", "Ramee Guestline"],
      phone: "+91 98401 24567",
      whatsappMessage: "Hi VSM Events, I am planning a wedding / ceremony in Tirupati. Please share your availability and decor concepts."
    },
    {
      code: "VLR",
      name: "Vellore",
      state: "Tamil Nadu",
      tagline: "Regal Receptions & Elegant Mandaps",
      description: "Crafting royal conventions, multi-day celebrations, and bespoke styling across Vellore, Katpadi, and surrounding regions.",
      popularVenues: ["GRT Grand Vellore", "Rangalaya Royal", "Poigai Convention Centre", "Khanna Fiesta"],
      phone: "+91 98401 24567",
      whatsappMessage: "Hello VSM Events, looking for wedding decor and planning services in Vellore. Let's discuss."
    },
    {
      code: "BLR",
      name: "Bengaluru",
      state: "Karnataka",
      tagline: "Luxury Destination & Contemporary Extravaganza",
      description: "Executing high-profile luxury weddings, themed birthday galas, and corporate milestones across Bangalore's premier luxury resorts and convention hubs.",
      popularVenues: ["The Leela Palace", "JW Marriott Bengaluru", "Golden Palms Resort", "Tamarind Tree", "Jade 735"],
      phone: "+91 98401 24567",
      whatsappMessage: "Hi VSM Events, I am planning a luxury celebration in Bengaluru. Could you please share your portfolio and consultation details?"
    }
  ] as ServiceLocation[],

  socialLinks: {
    instagram: "https://instagram.com/vsmevents_official",
    facebook: "https://facebook.com/vsmevents",
    youtube: "https://youtube.com/@vsmevents",
    pinterest: "https://pinterest.com/vsmevents",
  },

  stats: [
    { label: "Years of Heritage", value: "15+", subtext: "Mastering luxury celebrations" },
    { label: "Events Celebrated", value: "2,000+", subtext: "Weddings, Galas & Milestones" },
    { label: "Cities Mastered", value: "4 Major Hubs", subtext: "CTR, TPT, VLR & BLR" },
    { label: "Artisan Craftsmen", value: "50+ In-House", subtext: "Florists, Riggers & Designers" },
  ]
};

export function getWhatsAppLink(customMessage?: string, locationCode?: string) {
  let message = customMessage || "Hello VSM Events, I visited your website and would like to discuss planning our upcoming celebration.";
  if (locationCode) {
    const loc = siteConfig.locations.find(l => l.code.toUpperCase() === locationCode.toUpperCase());
    if (loc) {
      message = loc.whatsappMessage;
    }
  }
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getPhoneLink(phone?: string) {
  const targetPhone = phone || siteConfig.contact.primaryPhone;
  return `tel:${targetPhone.replace(/[^0-9+]/g, '')}`;
}
