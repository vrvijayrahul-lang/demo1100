import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Sparkles, ShieldCheck, Clock, CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Plan Your Event | Online Booking Enquiry & Proposal",
  description:
    "Submit your wedding or event enquiry with VSM Events. Specify dates, guest count, estimated budget, and decor preferences for events in Chittoor, Tirupati, Vellore, and Bengaluru.",
};

export default function PlanEventPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-32">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-5">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Priority Booking Registry</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-burgundy tracking-tight leading-[1.15] mb-6">
          Plan Your Celebration With{" "}
          <span className="gold-gradient-text italic font-normal">
            VSM Events.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-obsidian/75 max-w-xl mx-auto leading-relaxed">
          Tell us about your celebration. Our senior wedding planners will review
          your venue, dates, and design preferences to prepare a tailored blueprint.
        </p>

        {/* 3 Quick Assurance Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-obsidian/70">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gold-600" />
            <span>Response within 2 hours</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Transparent itemized proposals</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-burgundy" />
            <span>Zero obligation consultation</span>
          </span>
        </div>
      </section>

      {/* The Enquiry Form Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <EnquiryForm />
      </section>
    </div>
  );
}
