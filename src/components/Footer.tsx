import React from "react";
import Link from "next/link";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { servicesData } from "@/data/servicesData";
import { Sparkles, Phone, MessageCircle, Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-obsidian-950 text-ivory-100 pt-20 sm:pt-28 pb-12 overflow-hidden border-t border-gold/20">
      {/* Decorative ambient radial gold orb in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-gold/10 via-burgundy/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Highlight Banner: 4 Cities */}
        <div className="p-1 rounded-[2rem] bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 border border-gold/30 mb-16 shadow-2xl">
          <div className="rounded-[calc(2rem-0.25rem)] bg-obsidian-900/90 backdrop-blur-xl px-6 py-8 sm:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {siteConfig.locations.map((loc) => (
              <div key={loc.code} className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gold-400">
                  {loc.code}
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold text-ivory-50 mt-1">
                  {loc.name}
                </span>
                <span className="text-[11px] text-ivory-300/70 mt-0.5 max-w-[180px]">
                  {loc.state}
                </span>
                <a
                  href={getWhatsAppLink(loc.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-[11px] text-champagne hover:text-white transition-colors"
                >
                  <span>WhatsApp Enquiries</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-ivory-100/10">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-burgundy to-burgundy-900 border border-gold/40 flex items-center justify-center text-champagne shadow-sm">
                <Sparkles className="w-5 h-5 text-champagne-light" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-2xl font-bold tracking-tight text-ivory-50">
                    VSM
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] font-medium text-gold-400">
                    EVENTS
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-ivory-300/60 -mt-1">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-ivory-300/80 leading-relaxed max-w-sm">
              Creating unforgettable celebrations across South India for over 15 years.
              Specializing in luxury royal weddings, exquisite floral mandaps, and bespoke
              milestone occasions.
            </p>

            {/* Quick Metrics */}
            <div className="flex items-center gap-6 pt-2">
              <div>
                <span className="block font-serif text-2xl font-bold text-gold-400">
                  {siteConfig.experienceYears}
                </span>
                <span className="text-[11px] text-ivory-400 uppercase tracking-wider">
                  Years of Heritage
                </span>
              </div>
              <div className="w-px h-8 bg-ivory-100/20" />
              <div>
                <span className="block font-serif text-2xl font-bold text-gold-400">
                  {siteConfig.eventsCompleted}
                </span>
                <span className="text-[11px] text-ivory-400 uppercase tracking-wider">
                  Celebrations
                </span>
              </div>
              <div className="w-px h-8 bg-ivory-100/20" />
              <div>
                <span className="block font-serif text-2xl font-bold text-gold-400">
                  4
                </span>
                <span className="text-[11px] text-ivory-400 uppercase tracking-wider">
                  Cities Served
                </span>
              </div>
            </div>
          </div>

          {/* Key Services (col 3) */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400">
              Our Services
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-ivory-300/80">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-gold-300 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-gold-400 font-medium hover:underline inline-flex items-center gap-1"
                >
                  View All 12 Services <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation (col 4) */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400">
              Explore
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-ivory-300/80">
              <li>
                <Link href="/about" className="hover:text-gold-300 transition-colors">
                  About VSM Events
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gold-300 transition-colors">
                  Featured Portfolio
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-gold-300 transition-colors">
                  Service Locations
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-gold-300 transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="/plan-event" className="hover:text-gold-300 transition-colors">
                  Plan Your Event
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gold-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact (col 5) */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400">
              Direct Inquiries
            </span>
            <div className="flex flex-col gap-3 text-xs text-ivory-300/80">
              <a
                href={getPhoneLink(siteConfig.contact.primaryPhone)}
                className="flex items-center gap-2.5 hover:text-gold-300 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-gold/15 text-gold-400 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{siteConfig.contact.primaryPhone}</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span>{siteConfig.contact.displayWhatsapp} (WhatsApp)</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 hover:text-gold-300 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-gold/15 text-gold-400 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{siteConfig.contact.email}</span>
              </a>

              <div className="flex items-start gap-2.5 pt-1 text-[11px] text-ivory-300/60">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Admin Portal Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400/60">
          <p>© {new Date().getFullYear()} VSM Events. All rights reserved. Registered Event Planner & Decorator.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-ivory-100/20">•</span>
            <Link
              href="/admin/login"
              className="text-ivory-400/50 hover:text-gold-400 transition-colors text-[11px]"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
