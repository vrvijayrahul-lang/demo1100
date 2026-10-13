import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { DoubleBezelCard } from "@/components/DoubleBezelCard";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | VSM Events",
  description:
    "Privacy Policy for VSM Events. Learn how we handle customer event inquiries, phone numbers, and celebration details securely and confidentially.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-32">
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
            <span>Client Data Protection</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy mb-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-obsidian/60">
            Last updated: October 2026 • VSM Events
          </p>
        </div>

        <DoubleBezelCard innerClassName="p-8 sm:p-12 space-y-8 text-sm text-obsidian/80 leading-relaxed">
          <div>
            <h2 className="font-serif text-xl font-bold text-burgundy mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you submit an event enquiry on the VSM Events website or contact us via WhatsApp or phone, we collect information necessary to plan and coordinate your celebration. This includes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your Full Name</li>
              <li>Phone number and WhatsApp contact details</li>
              <li>Event type, preferred celebration date, and venue location</li>
              <li>Estimated guest count, budget guidelines, and aesthetic decor preferences</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-burgundy mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use this information exclusively to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Contact you regarding your event enquiry and provide decor proposals and quotations.</li>
              <li>Coordinate floral and staging logistics for your confirmed dates.</li>
              <li>Follow up via WhatsApp or phone call regarding your booking timeline.</li>
            </ul>
            <p className="mt-2 font-medium text-burgundy">
              We never sell, rent, or share your contact information with external marketing brokers or third parties.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-burgundy mb-3">
              3. Data Security & Confidentiality
            </h2>
            <p>
              All enquiry data is stored securely in encrypted databases. Access to client personal details is restricted exclusively to authorized senior event coordinators and management personnel at VSM Events.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-burgundy mb-3">
              4. Contact for Privacy Inquiries
            </h2>
            <p>
              If you have any questions about how your information is handled, or wish to request deletion of your enquiry record from our registry, please contact our administrative desk at:
            </p>
            <p className="mt-2 font-medium">
              Email: {siteConfig.contact.email} <br />
              Phone: {siteConfig.contact.primaryPhone}
            </p>
          </div>
        </DoubleBezelCard>
      </section>
    </div>
  );
}
