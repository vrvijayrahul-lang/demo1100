import React from "react";
import { Metadata } from "next";
import { galleryData } from "@/data/galleryData";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { ButtonInButton } from "@/components/ButtonInButton";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Events Portfolio & Gallery | Royal Mandaps & Receptions",
  description:
    "Browse VSM Events' luxury portfolio: grand wedding stages, sacred floral mandaps, reception lighting, traditional Haldi setups, and themed birthday celebrations across Chittoor, Tirupati, Vellore, and Bengaluru.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-32">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-5">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Curated Portfolio</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-burgundy tracking-tight leading-[1.15] mb-6">
          A Legacy of{" "}
          <span className="gold-gradient-text italic font-normal">
            Breathtaking Celebrations.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-obsidian/75 max-w-2xl mx-auto leading-relaxed">
          Filter our work by celebration category. Click any photo for full-screen
          view and instant design consultation.
        </p>
      </section>

      {/* Full-Featured Lightbox Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <GalleryLightbox items={galleryData} showFilters={true} />
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-24 text-center">
        <div className="p-2 rounded-[2.5rem] bg-gradient-to-r from-gold/30 via-burgundy/20 to-gold/30 border border-gold/30 shadow-luxury">
          <div className="rounded-[calc(2.5rem-0.5rem)] bg-white p-8 sm:p-12 text-center flex flex-col items-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy mb-3">
              Inspired by Our Work?
            </h3>
            <p className="text-sm text-obsidian/75 max-w-lg mb-6 leading-relaxed">
              We can adapt any of these themes to your venue&apos;s architectural layout,
              or design an entirely bespoke concept from your Pinterest board.
            </p>
            <ButtonInButton href="/plan-event" variant="burgundy" size="md">
              Start Planning Your Event
            </ButtonInButton>
          </div>
        </div>
      </section>
    </div>
  );
}
