import React from "react";
import { Metadata } from "next";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { DoubleBezelCard } from "@/components/DoubleBezelCard";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  Sparkles,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact VSM Events | Phone, WhatsApp & Office Hubs",
  description:
    "Get in touch with VSM Events. Call or WhatsApp our senior event planning teams in Chittoor, Tirupati, Vellore, and Bengaluru. Available for consultations 7 days a week.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-32">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-5">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>We Are Here For You</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-burgundy tracking-tight leading-[1.15] mb-6">
          Connect With Our{" "}
          <span className="gold-gradient-text italic font-normal">
            Event Designers.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-obsidian/75 max-w-2xl mx-auto leading-relaxed">
          Whether you need a quick quote on WhatsApp or an in-depth in-person
          decor consultation, our team is at your service.
        </p>
      </section>

      {/* Main Grid: Direct Contact Cards on Left, Enquiry Form on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Channels & Hubs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Card */}
            <DoubleBezelCard innerClassName="p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 text-burgundy flex items-center justify-center shrink-0 border border-gold/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gold-700 font-semibold block">
                    Direct Telephone
                  </span>
                  <h3 className="font-serif text-xl font-bold text-burgundy mt-0.5">
                    Call Our Planning Desk
                  </h3>
                  <p className="text-xs text-obsidian/70 mt-1 mb-3">
                    Available 9:00 AM - 9:00 PM for new event inquiries.
                  </p>
                  <a
                    href={getPhoneLink()}
                    className="inline-flex items-center gap-2 text-sm font-bold text-burgundy hover:text-gold-700 transition-colors"
                  >
                    <span>{siteConfig.contact.primaryPhone}</span>
                  </a>
                  <span className="block text-xs text-obsidian/60 mt-0.5">
                    Secondary: {siteConfig.contact.secondaryPhone}
                  </span>
                </div>
              </div>
            </DoubleBezelCard>

            {/* WhatsApp Card */}
            <DoubleBezelCard innerClassName="p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-semibold block">
                    Fastest Response
                  </span>
                  <h3 className="font-serif text-xl font-bold text-burgundy mt-0.5">
                    WhatsApp Concierge
                  </h3>
                  <p className="text-xs text-obsidian/70 mt-1 mb-3">
                    Send venue photos, references, and get immediate availability.
                  </p>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat: {siteConfig.contact.displayWhatsapp}</span>
                  </a>
                </div>
              </div>
            </DoubleBezelCard>

            {/* Email & Office Card */}
            <DoubleBezelCard innerClassName="p-6 sm:p-7">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 text-burgundy flex items-center justify-center shrink-0 border border-gold/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gold-700 font-semibold block">
                    Written Proposals
                  </span>
                  <h3 className="font-serif text-xl font-bold text-burgundy mt-0.5">
                    Official Email
                  </h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-xs font-semibold text-burgundy hover:text-gold-700 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-gold/15 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-obsidian/80">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.address}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-obsidian/80">
                  <Clock className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.businessHours}</span>
                </div>
              </div>
            </DoubleBezelCard>
          </div>

          {/* Right Column: Complete Enquiry Booking Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
