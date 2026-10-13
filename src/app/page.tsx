import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { servicesData } from "@/data/servicesData";
import { galleryData } from "@/data/galleryData";
import { testimonialsData } from "@/data/testimonialsData";
import { Hero } from "@/components/Hero";
import { DoubleBezelCard } from "@/components/DoubleBezelCard";
import { ButtonInButton } from "@/components/ButtonInButton";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Star,
  Users,
  Compass,
  Palette,
  HeartHandshake,
  Layers,
} from "lucide-react";

export default function HomePage() {
  const processSteps = [
    {
      step: "01",
      title: "Share Your Vision",
      desc: "Tell us about your celebration, preferred dates, venue ideas, and guest requirements over tea or a virtual discovery call.",
      icon: Compass,
    },
    {
      step: "02",
      title: "Plan Together",
      desc: "We discuss bespoke themes, color palettes, stage fabrications, and transparent itemized budgets tailored to your expectations.",
      icon: Palette,
    },
    {
      step: "03",
      title: "Design & Organize",
      desc: "Our master artisans, florists, and production managers coordinate every decoration element and logistical detail seamlessly.",
      icon: Layers,
    },
    {
      step: "04",
      title: "Celebrate Beautifully",
      desc: "Enjoy your special day immersed in joy with your family, while our dedicated event directors handle every minute of the execution.",
      icon: HeartHandshake,
    },
  ];

  const whyChooseHighlights = [
    {
      title: "15+ Years Event Legacy",
      desc: "Established heritage crafting memorable weddings and celebrations with deep cultural understanding.",
    },
    {
      title: "2,000+ Celebrations Completed",
      desc: "Proven track record managing events ranging from intimate 50-guest gatherings to grand 5,000+ royal receptions.",
    },
    {
      title: "Creative & Customized Concepts",
      desc: "Every design is curated bespoke for you. No cookie-cutter packages or generic recycled templates.",
    },
    {
      title: "Attention to Every Fine Detail",
      desc: "From temple jasmine freshness to millimeter-precise stage draping and warm theatrical lighting.",
    },
    {
      title: "Professional Event Coordination",
      desc: "Dedicated on-site command center and event directors ensuring flawless minute-by-minute execution.",
    },
    {
      title: "Serving CTR, TPT, VLR & BLR",
      desc: "In-house fleet, warehouses, and master artisans operating seamlessly across Andhra, Tamil Nadu, and Karnataka.",
    },
    {
      title: "Transparent Quotations",
      desc: "Itemized milestone proposals with zero hidden costs or last-minute surprises on your auspicious day.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. ABOUT VSM EVENTS SECTION */}
      <section className="py-24 sm:py-36 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage with Double-Bezel Hardware Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image Card */}
              <div className="p-2 rounded-[2.5rem] bg-gradient-to-br from-gold/30 via-white to-gold/20 border border-gold/30 shadow-luxury">
                <div className="relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden aspect-[4/5] bg-obsidian-900">
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
                    alt="VSM Events Wedding Decor Mastery"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-transparent" />

                  {/* Floating Stat Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-gold/30 shadow-xl flex items-center justify-between">
                    <div>
                      <span className="block font-serif text-2xl font-bold text-burgundy">
                        15+ Years
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-obsidian/70">
                        Of Wedding Artistry
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gold/15 text-gold-700 flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Accent Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 p-1.5 rounded-2xl bg-white/95 border border-gold/40 shadow-2xl backdrop-blur-md">
                <div className="rounded-xl overflow-hidden aspect-square relative">
                  <Image
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80"
                    alt="Floral Mandap Detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2 text-center">
                  <span className="text-[9px] uppercase tracking-widest font-semibold text-burgundy block">
                    2,000+ Celebrations
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Editorial Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-6">
              <Sparkles className="w-3 h-3 text-gold-600" />
              <span>About VSM Events</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy leading-[1.18] mb-6">
              We Turn Special Moments Into{" "}
              <span className="gold-gradient-text italic font-normal">
                Extraordinary Memories.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-obsidian/80 leading-relaxed font-normal mb-6">
              At <strong>VSM Events</strong>, we believe every celebration is a sacred milestone that deserves royal devotion. For over 15 years, our team of visionary event designers, master florists, and logistical planners has brought dreams to life across Chittoor, Tirupati, Vellore, and Bengaluru.
            </p>

            <p className="text-sm sm:text-base text-obsidian/70 leading-relaxed mb-8">
              Whether you are planning a magnificent temple mandap in Tirupati, a royal evening reception in Bengaluru, a joyous Haldi in Chittoor, or a milestone birthday party, we handle every detail with creative finesse, obsessive precision, and heartfelt hospitality.
            </p>

            {/* Core Values / Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-ivory-100/70 border border-gold/15">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-burgundy">Customized Concepts</h4>
                  <p className="text-xs text-obsidian/70 mt-0.5">Themes designed around your unique love story and family traditions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-ivory-100/70 border border-gold/15">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-burgundy">Master Floristry</h4>
                  <p className="text-xs text-obsidian/70 mt-0.5">Cold-chain sourced Bangalore roses, Thai orchids, and fresh jasmine.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-ivory-100/70 border border-gold/15">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-burgundy">Turnkey Coordination</h4>
                  <p className="text-xs text-obsidian/70 mt-0.5">Single point of contact for stage, lighting, AV, and hospitality.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-ivory-100/70 border border-gold/15">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-burgundy">Transparent Quotations</h4>
                  <p className="text-xs text-obsidian/70 mt-0.5">Clear milestone pricing with zero surprise charges.</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <ButtonInButton href="/about" variant="burgundy" size="md">
                Discover Our Story
              </ButtonInButton>

              <ButtonInButton href="/plan-event" variant="outline" size="md">
                Plan With Us
              </ButtonInButton>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION (All 12 Visual Cards) */}
      <section className="py-24 sm:py-36 bg-ivory-100/50 border-y border-gold/15 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-4">
              <Sparkles className="w-3 h-3 text-gold-600" />
              <span>Tailored Curations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy mb-5">
              Our Signature Services
            </h2>
            <p className="text-base sm:text-lg text-obsidian/75 leading-relaxed font-normal">
              From majestic South Indian mandaps to sleek milestone birthday
              galas, explore our full spectrum of event planning and decor disciplines.
            </p>
          </div>

          {/* 12 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service) => (
              <DoubleBezelCard
                key={service.id}
                className="hover:-translate-y-2 flex flex-col justify-between"
                innerClassName="p-0 overflow-hidden flex flex-col h-full"
              >
                {/* Service Card Top Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/90 text-burgundy shadow-md">
                    {service.category}
                  </span>
                </div>

                {/* Service Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-gold-700 block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy mb-3 group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-obsidian/75 leading-relaxed line-clamp-3 mb-6">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Explore Service CTA */}
                  <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-semibold text-burgundy hover:text-gold-700 flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-300"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={getWhatsAppLink(
                        `Hi VSM Events, I am interested in exploring "${service.title}". Please share details and pricing.`
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

          {/* Bottom All Services Link */}
          <div className="mt-14 text-center">
            <ButtonInButton href="/services" variant="burgundy" size="lg">
              View All 12 Services & Details
            </ButtonInButton>
          </div>
        </div>
      </section>

      {/* 4. FEATURED EVENTS GALLERY */}
      <section className="py-24 sm:py-36 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-4">
            <Sparkles className="w-3 h-3 text-gold-600" />
            <span>Masterpiece Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy mb-5">
            Featured Celebrations Gallery
          </h2>
          <p className="text-base sm:text-lg text-obsidian/75 leading-relaxed">
            Witness the craftsmanship, floral grandeur, and ambient illumination
            curated for our discerning clients across CTR, TPT, VLR, and BLR.
          </p>
        </div>

        {/* Interactive Filterable Gallery with Lightbox */}
        <GalleryLightbox items={galleryData} />

        {/* Gallery CTA */}
        <div className="mt-14 text-center">
          <ButtonInButton href="/portfolio" variant="outline" size="md">
            View Complete Gallery & Themes
          </ButtonInButton>
        </div>
      </section>

      {/* 5. WHY CHOOSE US? */}
      <section className="py-24 sm:py-36 bg-obsidian-950 text-ivory-100 relative overflow-hidden border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Header & Mission */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-400 text-[11px] uppercase tracking-[0.2em] font-semibold mb-6">
                <Sparkles className="w-3 h-3 text-gold-400" />
                <span>The VSM Standard</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-50 leading-[1.18] mb-6">
                Why Discerning Families{" "}
                <span className="gold-gradient-text italic font-normal">
                  Trust VSM Events.
                </span>
              </h2>

              <p className="text-base text-ivory-300/80 leading-relaxed mb-8">
                Your wedding or milestone celebration happens once in a lifetime.
                We honor your trust with unwavering craftsmanship, punctuality, and
                genuine care for your family and guests.
              </p>

              <div className="p-6 rounded-2xl bg-obsidian-900/80 border border-gold/20 mb-8 w-full">
                <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block mb-2">
                  15+ Years • 2,000+ Celebrations
                </span>
                <p className="text-xs text-ivory-300/70 leading-relaxed">
                  Authentic experience backed by our own in-house warehouses, floral cold-chains, and fabrication teams across Chittoor, Tirupati, Vellore, and Bengaluru.
                </p>
              </div>

              <ButtonInButton href="/plan-event" variant="gold" size="md">
                Consult Our Wedding Planners
              </ButtonInButton>
            </div>

            {/* Right Grid of Highlights */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {whyChooseHighlights.map((item, idx) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-obsidian-900/60 border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/15 text-gold-400 flex items-center justify-center text-xs font-serif font-bold mb-3 border border-gold/30">
                    0{idx + 1}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-ivory-100 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ivory-300/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR FOUR-STEP PROCESS */}
      <section className="py-24 sm:py-36 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-4">
            <Sparkles className="w-3 h-3 text-gold-600" />
            <span>Stress-Free Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy mb-5">
            How We Bring Your Dream to Life
          </h2>
          <p className="text-base sm:text-lg text-obsidian/75 leading-relaxed">
            Our structured 4-step event orchestration makes planning effortless,
            transparent, and deeply enjoyable.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {processSteps.map((item) => {
            const Icon = item.icon;
            return (
              <DoubleBezelCard
                key={item.step}
                className="hover:-translate-y-2 flex flex-col justify-between"
                innerClassName="p-6 sm:p-7 flex flex-col h-full justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-gold-600/40">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gold/15 text-burgundy flex items-center justify-center border border-gold/30">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-burgundy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-obsidian/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gold/15">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-gold-700">
                    Step {item.step} of 04
                  </span>
                </div>
              </DoubleBezelCard>
            );
          })}
        </div>
      </section>

      {/* 7. VERIFIED TESTIMONIALS SECTION */}
      <section className="py-24 sm:py-36 bg-ivory-100/60 border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-4">
              <Sparkles className="w-3 h-3 text-gold-600" />
              <span>Client Voices</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy mb-5">
              Celebrated by Families
            </h2>
            <p className="text-base sm:text-lg text-obsidian/75 leading-relaxed">
              Read verified feedback from couples and families whose special
              occasions we had the honor of orchestrating.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsData.slice(0, 3).map((test) => (
              <DoubleBezelCard
                key={test.id}
                innerClassName="p-6 sm:p-8 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Rating Stars & Location */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-gold-600">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gold/15 text-burgundy flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5" />
                      {test.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-obsidian/80 leading-relaxed italic mb-6">
                    &ldquo;{test.reviewText}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/15 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-burgundy text-champagne flex items-center justify-center font-serif font-bold text-xs shrink-0 shadow-sm">
                    {test.avatarText}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-burgundy">
                      {test.clientName}
                    </h4>
                    <span className="text-[11px] text-obsidian/60 block">
                      {test.eventType} • {test.date}
                    </span>
                  </div>
                </div>
              </DoubleBezelCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-xs font-semibold text-burgundy hover:text-gold-700 transition-colors uppercase tracking-wider"
            >
              <span>Read More Verified Client Stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. SERVICE AREAS (CTR, TPT, VLR, BLR) */}
      <section className="py-24 sm:py-36 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-4">
            <Sparkles className="w-3 h-3 text-gold-600" />
            <span>Regional Foothold</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy mb-5">
            Serving 4 Prime Hubs
          </h2>
          <p className="text-base sm:text-lg text-obsidian/75 leading-relaxed">
            Local warehouses, artisan florists, and rapid on-site logistics
            tailored to each city&apos;s finest convention halls and resort venues.
          </p>
        </div>

        {/* 4 Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.locations.map((loc) => (
            <DoubleBezelCard
              key={loc.code}
              className="hover:-translate-y-2 flex flex-col justify-between"
              innerClassName="p-6 sm:p-7 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-burgundy text-white tracking-widest">
                    {loc.code}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gold-700 font-semibold">
                    {loc.state}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-burgundy mb-1">
                  {loc.name}
                </h3>
                <span className="text-[11px] text-gold-700 font-medium block mb-3">
                  {loc.tagline}
                </span>

                <p className="text-xs text-obsidian/70 leading-relaxed mb-6">
                  {loc.description}
                </p>

                {/* Popular Venues */}
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-obsidian/60 block mb-2">
                    Popular Venues Served:
                  </span>
                  <ul className="text-xs text-obsidian/80 space-y-1">
                    {loc.popularVenues.slice(0, 2).map((venue) => (
                      <li key={venue} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-gold-600 shrink-0" />
                        <span className="truncate">{venue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons for this location */}
              <div className="pt-4 border-t border-gold/15 flex flex-col gap-2">
                <a
                  href={getWhatsAppLink(loc.whatsappMessage, loc.code)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire {loc.code} on WhatsApp</span>
                </a>

                <Link
                  href={`/locations#${loc.code.toLowerCase()}`}
                  className="text-center text-[11px] text-burgundy hover:text-gold-700 font-medium py-1 transition-colors"
                >
                  View City Details & Venues
                </Link>
              </div>
            </DoubleBezelCard>
          ))}
        </div>
      </section>

      {/* 9. EMBEDDED EVENT ENQUIRY SECTION */}
      <section className="py-24 sm:py-36 bg-ivory-100/50 border-t border-gold/15" id="enquiry">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-4">
              <Sparkles className="w-3 h-3 text-gold-600" />
              <span>Priority Consultation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy mb-4">
              Reserve Your Celebration Date
            </h2>
            <p className="text-base sm:text-lg text-obsidian/75 max-w-xl mx-auto leading-relaxed">
              Fill out your requirements below to receive a personalized decor concept
              and milestone quotation from our senior planning team.
            </p>
          </div>

          {/* Fully Interactive Enquiry Form with Confetti & Direct WhatsApp Follow-up */}
          <EnquiryForm />
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION (CTA BANNER) */}
      <section className="py-24 sm:py-32 bg-burgundy-900 text-ivory-100 relative overflow-hidden border-t border-gold/30">
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-radial-gradient from-gold/10 via-burgundy/20 to-burgundy-950/90 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-champagne mb-4 block">
            Your Dream Wedding Awaits
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory-50 max-w-3xl leading-[1.15] mb-6">
            Let&apos;s Make Your Next Celebration{" "}
            <span className="gold-gradient-text italic font-normal">
              Unforgettable.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-ivory-200/90 max-w-2xl mb-10 font-light leading-relaxed">
            Tell us your dream. We&apos;ll help bring it to life across Chittoor,
            Tirupati, Vellore, and Bengaluru.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Discuss Your Event on WhatsApp</span>
            </a>

            <a
              href={getPhoneLink()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-gold/40 text-ivory-50 font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5 text-gold-400" />
              <span>Call Our Team: {siteConfig.contact.primaryPhone}</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-ivory-300/60 flex items-center justify-center gap-4">
            <span>✓ 15+ Years Experience</span>
            <span>•</span>
            <span>✓ 2,000+ Events</span>
            <span>•</span>
            <span>✓ 4 Major Cities</span>
          </div>
        </div>
      </section>
    </div>
  );
}
