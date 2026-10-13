import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { siteConfig, getWhatsAppLink } from "@/data/siteConfig";
import { DoubleBezelCard } from "@/components/DoubleBezelCard";
import { ButtonInButton } from "@/components/ButtonInButton";
import { Sparkles, ArrowRight, MessageCircle, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Event Planning & Decor Services | 12 Signature Disciplines",
  description:
    "Explore VSM Events' comprehensive services: Luxury Wedding Planning, Mandaps, Haldi & Mehendi, Receptions, Birthdays, Anniversaries, Corporate Galas, and Floral Artistry across CTR, TPT, VLR, and BLR.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-32">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-5">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Our Disciplines</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-burgundy tracking-tight leading-[1.15] mb-6">
          Bespoke Event Planning &{" "}
          <span className="gold-gradient-text italic font-normal">
            Master Decor.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-obsidian/75 max-w-2xl mx-auto leading-relaxed">
          From divine South Indian Vedic mandaps to sleek milestone birthday
          spectacles, explore each of our 12 signature event disciplines.
        </p>
      </section>

      {/* 12 Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <DoubleBezelCard
              key={service.id}
              className="hover:-translate-y-2 flex flex-col justify-between"
              innerClassName="p-0 overflow-hidden flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/90 text-burgundy shadow-md">
                  {service.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-gold-700 block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy mb-3 group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-obsidian/75 leading-relaxed line-clamp-3 mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-6">
                    {service.features.slice(0, 3).map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-obsidian/70">
                        <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-semibold text-burgundy hover:text-gold-700 flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    <span>Full Details & FAQs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppLink(
                      `Hi VSM Events, I would like to enquire about "${service.title}". Please share consultation details.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 flex items-center justify-center transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </DoubleBezelCard>
          ))}
        </div>
      </section>

      {/* Plan Event CTA Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-24 text-center">
        <div className="p-2 rounded-[2.5rem] bg-gradient-to-r from-gold/30 via-burgundy/20 to-gold/30 border border-gold/30 shadow-luxury">
          <div className="rounded-[calc(2.5rem-0.5rem)] bg-white p-8 sm:p-12 text-center flex flex-col items-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy mb-3">
              Need a Custom Event Package?
            </h3>
            <p className="text-sm text-obsidian/75 max-w-lg mb-6 leading-relaxed">
              We frequently combine multiple services — such as Wedding Planning,
              Haldi Decor, Floral Mandap, and Sangeet Lighting — into unified multi-day
              packages with privileged milestone pricing.
            </p>
            <ButtonInButton href="/plan-event" variant="burgundy" size="md">
              Request Customized Proposal
            </ButtonInButton>
          </div>
        </div>
      </section>
    </div>
  );
}
