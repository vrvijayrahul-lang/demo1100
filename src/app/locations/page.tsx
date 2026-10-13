import React from "react";
import { Metadata } from "next";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { DoubleBezelCard } from "@/components/DoubleBezelCard";
import { ButtonInButton } from "@/components/ButtonInButton";
import {
  Sparkles,
  MapPin,
  Phone,
  MessageCircle,
  Building,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas | Chittoor, Tirupati, Vellore & Bengaluru",
  description:
    "VSM Events provides premier event planning and luxury decor services across four major hubs: Chittoor (CTR), Tirupati (TPT), Vellore (VLR), and Bengaluru (BLR). Contact our regional planners today.",
};

export default function LocationsPage() {
  const cityDetails = [
    {
      code: "CTR",
      name: "Chittoor",
      state: "Andhra Pradesh",
      tagline: "Our Home Turf & Heritage Celebrations",
      summary:
        "Rooted in Chittoor for over 15 years, VSM Events is the most trusted household name for grand traditional weddings, house-warmings, and family milestones.",
      venues: [
        "Sri Padmavathi Kalyana Mandapam",
        "Heritage Resorts Kanipakam",
        "Grand Palace Chittoor",
        "Town Hall & Private Agricultural Estates",
      ],
      specialties: [
        "Ancestral courtyard & home wedding transformations",
        "Traditional South Indian Muhurtham decors with fresh jasmine & brass",
        "Auspicious Kanipakam temple wedding logistics",
      ],
      whatsappMsg:
        "Hello VSM Events! I am planning a celebration in Chittoor. Please connect me with your Chittoor planning desk.",
    },
    {
      code: "TPT",
      name: "Tirupati",
      state: "Andhra Pradesh",
      tagline: "Sacred Ceremonies & Divine Decor",
      summary:
        "In the spiritual capital of Tirupati, we specialize in divine floral mandaps, sacred temple-replica stages, and grand reception ceremonies for families from across India.",
      venues: [
        "Marasa Sarovar Premiere",
        "Taj Tirupati",
        "Fortune Select Grand Ridge",
        "Ramee Guestline Hotel",
        "Bhimas Deluxe Banquets",
      ],
      specialties: [
        "Vedic floral mandaps with Tirupati temple carvings",
        "Early morning 4 AM Muhurtham logistical mastery",
        "Large-scale dining hall coordination for 1,000+ devotees & guests",
      ],
      whatsappMsg:
        "Namaste VSM Events! Looking for wedding planning and floral mandap decor in Tirupati.",
    },
    {
      code: "VLR",
      name: "Vellore",
      state: "Tamil Nadu",
      tagline: "Regal Receptions & Elegant Mandaps",
      summary:
        "Serving Vellore, Katpadi, and Ranipet with regal wedding conventions, modern LED light architecture, and lavish multi-day Tamil and Telugu celebrations.",
      venues: [
        "GRT Grand Vellore",
        "Rangalaya Royal Convention Centre",
        "Poigai Convention Centre",
        "Khanna Fiesta Banquets",
      ],
      specialties: [
        "Grand crystal chandelier tunnel entrances",
        "Contemporary rose gold and blush silk stage drapes",
        "High-capacity convention center production management",
      ],
      whatsappMsg:
        "Hi VSM Events, we are planning a wedding/reception in Vellore. Please share your catalog and quotations.",
    },
    {
      code: "BLR",
      name: "Bengaluru",
      state: "Karnataka",
      tagline: "Luxury Destination & Contemporary Extravaganza",
      summary:
        "Executing high-profile luxury weddings, themed kids birthday wonderland galas, and corporate summits across Bengaluru's premier resorts and heritage venues.",
      venues: [
        "The Leela Palace Bengaluru",
        "JW Marriott Bengaluru",
        "The Tamarind Tree",
        "Golden Palms Resort & Spa",
        "Jade 735 & Gari Resort",
      ],
      specialties: [
        "Destination resort multi-day wedding curation",
        "Custom 3D theme fabrication & organic balloon sculptures",
        "Cutting-edge AV, line-array acoustics, and celebrity entertainment",
      ],
      whatsappMsg:
        "Hello VSM Events Bengaluru team! We are planning a luxury celebration in Bangalore. Let's schedule a call.",
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-32">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-5">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Regional Presence</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-burgundy tracking-tight leading-[1.15] mb-6">
          Serving 4 Prime Hubs Across{" "}
          <span className="gold-gradient-text italic font-normal">
            South India.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-obsidian/75 max-w-2xl mx-auto leading-relaxed">
          With localized equipment warehouses, transport fleets, and regional vendor
          alliances, we deliver boutique luxury without destination surcharge.
        </p>
      </section>

      {/* 4 Detailed City Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {cityDetails.map((city) => (
          <div
            key={city.code}
            id={city.code.toLowerCase()}
            className="scroll-mt-32"
          >
            <DoubleBezelCard innerClassName="p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left City Info */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-burgundy text-white tracking-widest shadow-sm">
                      {city.code}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-semibold text-gold-700">
                      {city.state}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy">
                    {city.name}
                  </h2>

                  <p className="font-serif text-lg italic text-gold-700">
                    &ldquo;{city.tagline}&rdquo;
                  </p>

                  <p className="text-sm text-obsidian/75 leading-relaxed">
                    {city.summary}
                  </p>

                  {/* Actions for this city */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={getWhatsAppLink(city.whatsappMsg, city.code)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enquire {city.name} on WhatsApp</span>
                    </a>

                    <a
                      href={getPhoneLink()}
                      className="px-5 py-3 rounded-full bg-ivory-100 hover:bg-ivory-200 text-burgundy text-xs font-semibold border border-gold/30 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Planning Desk</span>
                    </a>
                  </div>
                </div>

                {/* Right Details: Venues & Specialties */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-ivory-50/60 p-6 sm:p-8 rounded-2xl border border-gold/15">
                  {/* Popular Venues */}
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-burgundy mb-3 flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-gold-600" />
                      <span>Major Venues Handled</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-obsidian/80">
                      {city.venues.map((v) => (
                        <li key={v} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-600 shrink-0 mt-1.5" />
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Regional Specialties */}
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-burgundy mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-gold-600" />
                      <span>Regional Specialties</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-obsidian/80">
                      {city.specialties.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </DoubleBezelCard>
          </div>
        ))}
      </section>

      {/* Plan Event CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-24 text-center">
        <div className="p-2 rounded-[2.5rem] bg-gradient-to-r from-gold/30 via-burgundy/20 to-gold/30 border border-gold/30 shadow-luxury">
          <div className="rounded-[calc(2.5rem-0.5rem)] bg-white p-8 sm:p-12 text-center flex flex-col items-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy mb-3">
              Planning in a Different Location?
            </h3>
            <p className="text-sm text-obsidian/75 max-w-lg mb-6 leading-relaxed">
              We frequently travel across South India for exclusive destination
              weddings. Tell us your celebration location to discuss logistics.
            </p>
            <ButtonInButton href="/plan-event" variant="burgundy" size="md">
              Submit Event Enquiry
            </ButtonInButton>
          </div>
        </div>
      </section>
    </div>
  );
}
