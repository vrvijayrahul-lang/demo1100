"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { ButtonInButton } from "./ButtonInButton";
import {
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=90",
      alt: "Luxury Indian Wedding Reception Banquet",
      subtitle: "Royal Banquets & Evening Receptions",
    },
    {
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=90",
      alt: "Grand Indian Temple Mandap & Floral Decoration",
      subtitle: "Sacred Vedic Mandaps & Temple Grandeur",
    },
    {
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=2000&q=90",
      alt: "Opulent Chandeliers and Floral Stage",
      subtitle: "Bespoke Stage Fabrication & Lighting Architecture",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Slideshow with Cinematic Ken Burns & Smooth Fade */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-luxury ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className="object-cover transition-transform duration-[7000ms] ease-out"
            />
          </div>
        ))}

        {/* Sophisticated Dual Gradient & Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/45 to-obsidian-950/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-obsidian-950/30 to-obsidian-950/80" />
      </div>

      {/* Main Content Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-champagne mb-6 animate-fade-in shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-champagne-light" strokeWidth={1.5} />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] font-medium text-ivory-50">
            South India's Premier Event & Wedding Planners
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ivory-50 max-w-4xl leading-[1.12] mb-6 drop-shadow-lg">
          Your Vision. Our Creation.{" "}
          <span className="gold-gradient-text block sm:inline italic font-normal">
            Unforgettable Celebrations.
          </span>
        </h1>

        {/* Supporting Subtext */}
        <p className="text-sm sm:text-lg md:text-xl text-ivory-200/90 max-w-2xl font-light leading-relaxed mb-10 drop-shadow">
          From dream weddings to extraordinary birthdays, VSM Events transforms
          your special moments into beautiful memories with bespoke artistry and
          royal hospitality.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <ButtonInButton
            href="/plan-event"
            variant="gold"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            Plan Your Event
          </ButtonInButton>

          <ButtonInButton
            href="/portfolio"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto min-w-[200px] text-white hover:text-burgundy"
          >
            Explore Our Work
          </ButtonInButton>
        </div>

        {/* Trust Indicators Pill Container */}
        <div className="w-full max-w-3xl p-1 rounded-2xl sm:rounded-full bg-white/10 backdrop-blur-xl border border-gold/30 shadow-2xl">
          <div className="rounded-xl sm:rounded-full bg-obsidian-900/60 px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center text-ivory-100">
            {/* Stat 1 */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 text-gold-400 flex items-center justify-center shrink-0 border border-gold/30">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-gold-400 leading-none">
                  {siteConfig.experienceYears}
                </span>
                <span className="text-[11px] text-ivory-300/80 uppercase tracking-wider">
                  Years of Experience
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center justify-center gap-3 sm:border-x sm:border-white/10 sm:px-4">
              <div className="w-10 h-10 rounded-full bg-gold/15 text-gold-400 flex items-center justify-center shrink-0 border border-gold/30">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-gold-400 leading-none">
                  {siteConfig.eventsCompleted}
                </span>
                <span className="text-[11px] text-ivory-300/80 uppercase tracking-wider">
                  Events Celebrated
                </span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 text-gold-400 flex items-center justify-center shrink-0 border border-gold/30">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-gold-400 leading-none">
                  CTR • TPT • VLR • BLR
                </span>
                <span className="text-[11px] text-ivory-300/80 uppercase tracking-wider">
                  Serving 4 Major Cities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.25em] text-ivory-200">
          Scroll to Discover
        </span>
        <ChevronDown className="w-4 h-4 text-gold-400 animate-bounce" />
      </div>
    </section>
  );
}
