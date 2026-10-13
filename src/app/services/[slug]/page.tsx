import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData, getServiceBySlug } from "@/data/servicesData";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { DoubleBezelCard } from "@/components/DoubleBezelCard";
import { ButtonInButton } from "@/components/ButtonInButton";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  Sparkles,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
  Phone,
  ChevronRight,
  MapPin,
  Calendar,
  Layers,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | VSM Events`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | VSM Events`,
      description: service.shortDesc,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-32">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <nav className="flex items-center gap-2 text-xs text-obsidian/60">
          <Link href="/" className="hover:text-burgundy transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gold-600" />
          <Link href="/services" className="hover:text-burgundy transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gold-600" />
          <span className="text-burgundy font-semibold truncate max-w-[200px] sm:max-w-none">
            {service.title}
          </span>
        </nav>
      </div>

      {/* Hero Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-3 h-3 text-gold-600" />
              <span>{service.category} Discipline</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-burgundy tracking-tight leading-[1.14]">
              {service.title}
            </h1>

            <p className="font-serif text-xl sm:text-2xl italic text-gold-700">
              &ldquo;{service.subtitle}&rdquo;
            </p>

            <p className="text-base sm:text-lg text-obsidian/80 leading-relaxed">
              {service.longDesc}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppLink(
                  `Hi VSM Events, I would like to book a consultation for "${service.title}". Please share available dates and catalog.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>

              <ButtonInButton href="#book-service" variant="burgundy" size="md">
                Plan This Event Online
              </ButtonInButton>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="p-2 rounded-[2.5rem] bg-gradient-to-br from-gold/30 via-white to-gold/20 border border-gold/30 shadow-luxury">
              <div className="relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden aspect-[4/3] sm:aspect-[4/5] bg-obsidian-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Turnkey Inclusions */}
      <section className="py-20 bg-ivory-100/60 border-y border-gold/15 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Features */}
            <DoubleBezelCard innerClassName="p-8">
              <h3 className="font-serif text-2xl font-bold text-burgundy mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-600" />
                <span>Scope of Execution</span>
              </h3>
              <ul className="space-y-4">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-obsidian/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </DoubleBezelCard>

            {/* Inclusions & Themes */}
            <DoubleBezelCard innerClassName="p-8">
              <h3 className="font-serif text-2xl font-bold text-burgundy mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-gold-600" />
                <span>Turnkey Inclusions & Popular Themes</span>
              </h3>

              <div className="space-y-4 mb-8">
                {service.inclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 text-sm text-obsidian/80 list-none">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gold-700 block mb-3">
                  Signature Theme Concepts:
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.themeHighlights.map((theme) => (
                    <span
                      key={theme}
                      className="text-xs px-3 py-1.5 rounded-full bg-ivory-100 border border-gold/25 text-obsidian/80 font-medium"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </DoubleBezelCard>
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-24">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-700 block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gold/20 shadow-sm"
              >
                <h4 className="font-serif text-lg font-bold text-burgundy mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-sm text-obsidian/75 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Online Booking Enquiry Form Pre-Filled with this service */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6" id="book-service">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-700 block mb-2">
            Book Priority Consultation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy mb-3">
            Plan Your {service.title}
          </h2>
          <p className="text-sm text-obsidian/70">
            Tell us your date and venue to receive an itemized proposal.
          </p>
        </div>

        <EnquiryForm initialService={service.title} />
      </section>
    </div>
  );
}
