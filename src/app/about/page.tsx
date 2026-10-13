import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { DoubleBezelCard } from "@/components/DoubleBezelCard";
import { ButtonInButton } from "@/components/ButtonInButton";
import {
  Sparkles,
  CheckCircle2,
  MapPin,
  Clock,
  Heart,
  Palette,
  ShieldCheck,
  Award,
  Crown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | 15+ Years of Event Planning Legacy",
  description:
    "Discover the story of VSM Events. Over 15 years and 2,000+ celebrations across Chittoor, Tirupati, Vellore, and Bengaluru. Learn about our master florists, design philosophy, and dedication to excellence.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Crown,
      title: "Royal Aesthetic & Cultural Sanctity",
      desc: "We honor ancient Vedic rituals, traditional South Indian heritage, and blend them seamlessly with contemporary European luxury aesthetics.",
    },
    {
      icon: Palette,
      title: "Bespoke Spatial Design",
      desc: "Every stage, mandap, and lighting setup is custom fabricated for your venue dimensions. No generic templates or repetitive setups.",
    },
    {
      icon: Clock,
      title: "Punctuality & Turnkey Execution",
      desc: "Morning Muhurthams at 4:30 AM or midnight reception wraps — our crew of 50+ in-house artisans works with military precision so you never feel rushed.",
    },
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality & Freshness",
      desc: "We operate dedicated floral cold-chains sourcing fresh blooms from Bangalore estates and Madurai markets, guaranteeing vibrant beauty throughout your event.",
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-32">
      {/* Editorial Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-5">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Our Heritage & Philosophy</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-burgundy tracking-tight leading-[1.15] mb-6">
          We Turn Special Moments Into{" "}
          <span className="gold-gradient-text italic font-normal">
            Extraordinary Memories.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-obsidian/75 max-w-2xl mx-auto leading-relaxed">
          For over fifteen years, VSM Events has stood at the crossroads of
          cultural devotion and artistic luxury, creating benchmarks in event
          planning across South India.
        </p>
      </section>

      {/* Narrative & Visual Bento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-24 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-sm sm:text-base text-obsidian/80 leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy">
              From Humble Origins in Chittoor to South India&apos;s Grandest Stages
            </h2>
            <p>
              VSM Events was founded with a singular conviction: that a celebration
              is not merely an event, but a once-in-a-lifetime tapestry of emotions,
              family blessings, and cherished memories.
            </p>
            <p>
              Starting in Chittoor, Andhra Pradesh, our team quickly earned a reputation
              for meticulous attention to detail, uncompromising flower freshness,
              and heartfelt client relationships. Over 15 years, our footprint has
              expanded into Tirupati&apos;s sacred temple-town celebrations, Vellore&apos;s
              grand reception halls, and Bengaluru&apos;s high-profile luxury resorts.
            </p>
            <p>
              With more than <strong>2,000 successful events</strong> celebrated to date,
              our team brings immense technical wisdom, reliable vendor relationships,
              and a calm, reassuring presence that allows host families to truly
              enjoy their celebrations without stress.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <ButtonInButton href="/plan-event" variant="burgundy">
                Plan Your Celebration
              </ButtonInButton>
              <ButtonInButton href="/portfolio" variant="outline">
                Explore Our Portfolio
              </ButtonInButton>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="p-2 rounded-[2.5rem] bg-gradient-to-br from-gold/30 via-white to-gold/20 border border-gold/30 shadow-luxury">
              <div className="relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-obsidian-900">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
                  alt="VSM Events Founders & Craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Overlaid Trust Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-5 rounded-2xl bg-white border border-gold/25 shadow-sm text-center">
                <span className="block font-serif text-3xl font-bold text-burgundy">
                  15+ Years
                </span>
                <span className="text-[11px] uppercase tracking-wider text-obsidian/60 mt-1 block">
                  Unbroken Track Record
                </span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gold/25 shadow-sm text-center">
                <span className="block font-serif text-3xl font-bold text-burgundy">
                  2,000+
                </span>
                <span className="text-[11px] uppercase tracking-wider text-obsidian/60 mt-1 block">
                  Weddings & Milestones
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="py-20 bg-ivory-100/60 border-y border-gold/15 mb-24 sm:mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-700 block mb-2">
              Our Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy">
              The Pillars Behind Every VSM Event
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <DoubleBezelCard key={pillar.title} innerClassName="p-6 sm:p-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gold/15 text-burgundy flex items-center justify-center mb-6 border border-gold/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-burgundy mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-obsidian/75 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </DoubleBezelCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-2 rounded-[2.5rem] bg-gradient-to-r from-gold/30 via-burgundy/20 to-gold/30 border border-gold/30 shadow-luxury">
          <div className="rounded-[calc(2.5rem-0.5rem)] bg-white p-8 sm:p-14 text-center flex flex-col items-center">
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-burgundy mb-4">
              Meet Our Senior Event Directors
            </h3>
            <p className="text-sm sm:text-base text-obsidian/75 max-w-lg mb-8 leading-relaxed">
              We welcome you to visit our planning offices or request a personalized
              phone consultation to discuss dates, venue blueprints, and decor concepts.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md transition-all"
              >
                Connect on WhatsApp ({siteConfig.contact.displayWhatsapp})
              </a>
              <a
                href={getPhoneLink()}
                className="px-6 py-3.5 rounded-full bg-ivory-100 hover:bg-ivory-200 text-burgundy text-xs font-semibold border border-gold/30 transition-all"
              >
                Call: {siteConfig.contact.primaryPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
