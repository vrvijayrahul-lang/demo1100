"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";
import { ButtonInButton } from "./ButtonInButton";
import {
  Calendar,
  Clock,
  Sparkles,
  Phone,
  MessageCircle,
  MapPin,
  Users,
  IndianRupee,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface EnquiryFormProps {
  initialService?: string;
  initialLocation?: string;
  className?: string;
}

export function EnquiryForm({
  initialService,
  initialLocation,
  className,
}: EnquiryFormProps) {
  // Form State
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [whatsapp, setWhatsapp] = useState("");
  const [eventType, setEventType] = useState(
    initialService || "Luxury Wedding Planning"
  );
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState(initialLocation || "Tirupati");
  const [otherLocation, setOtherLocation] = useState("");
  const [guestCount, setGuestCount] = useState("300 - 600 Guests");
  const [estimatedBudget, setEstimatedBudget] = useState("₹10 Lakhs - ₹20 Lakhs");
  const [decorationPreferences, setDecorationPreferences] = useState("");
  const [additionalRequirements, setAdditionalRequirements] = useState("");

  // Submission State
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [whatsappFollowupUrl, setWhatsappFollowupUrl] = useState("");

  const budgetOptions = [
    "₹2 Lakhs - ₹5 Lakhs",
    "₹5 Lakhs - ₹10 Lakhs",
    "₹10 Lakhs - ₹20 Lakhs",
    "₹20 Lakhs - ₹35 Lakhs",
    "₹35 Lakhs+ (Ultra Luxury)",
    "Need Guidance on Budgeting",
  ];

  const guestCountOptions = [
    "Under 100 Guests (Intimate)",
    "100 - 300 Guests",
    "300 - 600 Guests",
    "600 - 1,200 Guests (Grand)",
    "1,200+ Guests (Royal Concourse)",
  ];

  const popularThemePills = [
    "Temple Floral Mandap",
    "Crystal & Chandelier Ballroom",
    "Traditional Brass & Marigold",
    "Royal Rajputana Palace",
    "Pastel Blush Romantic Garden",
    "Edison Starlight Canopy",
  ];

  const handleAddPreference = (pill: string) => {
    if (!decorationPreferences) {
      setDecorationPreferences(pill);
    } else if (!decorationPreferences.includes(pill)) {
      setDecorationPreferences(`${decorationPreferences}, ${pill}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validation
    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMsg("Please enter your full name (at least 2 letters).");
      return;
    }

    const cleanPhone = phone.trim().replace(/[^0-9+]/g, "");
    if (cleanPhone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!eventDate) {
      setErrorMsg("Please select your preferred celebration date.");
      return;
    }

    const finalLocation = location === "Other" && otherLocation.trim()
      ? `Other (${otherLocation.trim()})`
      : location;

    const payload = {
      full_name: fullName.trim(),
      phone: phone.trim(),
      whatsapp: sameAsPhone ? phone.trim() : (whatsapp.trim() || phone.trim()),
      event_type: eventType,
      event_date: eventDate,
      location: finalLocation,
      guest_count: guestCount,
      estimated_budget: estimatedBudget,
      decoration_preferences: decorationPreferences.trim(),
      additional_requirements: additionalRequirements.trim(),
    };

    setLoading(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      // Success
      setSubmitted(true);
      setWhatsappFollowupUrl(data.whatsappUrl || "");

      // Trigger Confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C5A059", "#4A0E1A", "#DFC17B", "#FAF7F2"],
        });
      } catch {
        // Confetti fallback
      }
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please try again or chat with us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-2 rounded-[2rem] bg-gradient-to-br from-gold/30 via-white to-gold/20 border border-gold/40 shadow-2xl animate-fade-in">
        <div className="rounded-[calc(2rem-0.5rem)] bg-white p-8 sm:p-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-6 shadow-sm">
            <CheckCircle2 className="w-8 h-8" strokeWidth={1.5} />
          </div>

          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gold-700">
            Booking Request Received & Saved
          </span>

          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-burgundy mt-2 mb-4">
            Thank You, {fullName}!
          </h3>

          <p className="text-sm sm:text-base text-obsidian/80 max-w-lg leading-relaxed mb-6">
            Your event details for <span className="font-semibold text-burgundy">{eventType}</span> on{" "}
            <span className="font-semibold text-burgundy">{new Date(eventDate).toLocaleDateString("en-IN", { day: 'numeric', month: 'long', year: 'numeric' })}</span> in{" "}
            <span className="font-semibold text-burgundy">{location}</span> have been safely recorded in our priority booking registry.
          </p>

          <div className="p-4 rounded-2xl bg-ivory-100/70 border border-gold/20 max-w-md w-full text-xs text-obsidian/70 flex items-center gap-3 mb-8 text-left">
            <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0" />
            <span>
              A dedicated VSM Event Director will review your requirements and call you at{" "}
              <strong className="text-obsidian">{phone}</strong> within 2 hours.
            </span>
          </div>

          {/* Direct WhatsApp Follow-up CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
            {whatsappFollowupUrl && (
              <a
                href={whatsappFollowupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Instantly on WhatsApp</span>
              </a>
            )}

            <button
              onClick={() => {
                setSubmitted(false);
                setFullName("");
                setPhone("");
                setEventDate("");
                setDecorationPreferences("");
                setAdditionalRequirements("");
              }}
              className="w-full sm:w-auto py-3 px-6 rounded-full bg-ivory-100 hover:bg-ivory-200 text-obsidian text-xs font-semibold border border-gold/30 transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-1.5 sm:p-2 rounded-[2rem] bg-gradient-to-br from-gold/30 via-white to-gold/20 border border-gold/30 shadow-luxury ${className}`}
    >
      <div className="rounded-[calc(2rem-0.375rem)] sm:rounded-[calc(2rem-0.5rem)] bg-white p-6 sm:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
        {/* Form Eyebrow */}
        <div className="flex items-center justify-between border-b border-gold/20 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-gold-700">
              Online Booking & Priority Consultation
            </span>
          </div>
          <span className="text-[11px] text-obsidian/60 hidden sm:block">
            Instant Quote Assessment
          </span>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-3">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Full Name & Primary Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-obsidian/80 mb-2">
                Full Name <span className="text-burgundy">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anand Reddy"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-gold/30 focus:border-gold-600 focus:ring-1 focus:ring-gold-500/30 focus:outline-none bg-ivory-50/50 placeholder:text-obsidian/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-obsidian/80 mb-2">
                Phone Number <span className="text-burgundy">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  placeholder="+91 98400 12345"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gold/30 focus:border-gold-600 focus:ring-1 focus:ring-gold-500/30 focus:outline-none bg-ivory-50/50 placeholder:text-obsidian/30 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Row 2: WhatsApp Number Toggle */}
          <div className="p-3.5 rounded-xl bg-ivory-100/60 border border-gold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <label className="flex items-center gap-2.5 text-xs text-obsidian/80 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={sameAsPhone}
                onChange={(e) => setSameAsPhone(e.target.checked)}
                className="w-4 h-4 rounded border-gold/40 text-burgundy focus:ring-gold-500 accent-burgundy"
              />
              <span className="font-medium">
                WhatsApp number is the same as contact phone number
              </span>
            </label>

            {!sameAsPhone && (
              <div className="w-full sm:w-64">
                <input
                  type="tel"
                  placeholder="WhatsApp: +91 98400 12345"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-gold/30 focus:border-gold-600 focus:outline-none bg-white"
                />
              </div>
            )}
          </div>

          {/* Row 3: Event Type & Preferred Event Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-obsidian/80 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                Event Type <span className="text-burgundy">*</span>
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-gold/30 focus:border-gold-600 focus:ring-1 focus:ring-gold-500/30 focus:outline-none bg-ivory-50/50 transition-all font-medium"
              >
                {servicesData.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other Customized Celebration">Other Customized Celebration</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-obsidian/80 mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold-600" />
                Preferred Event Date <span className="text-burgundy">*</span>
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-gold/30 focus:border-gold-600 focus:ring-1 focus:ring-gold-500/30 focus:outline-none bg-ivory-50/50 transition-all font-medium"
              />
            </div>
          </div>

          {/* Row 4: Event Location */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-obsidian/80 mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              Event Location <span className="text-burgundy">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {[
                { code: "CTR", label: "Chittoor (CTR)" },
                { code: "TPT", label: "Tirupati (TPT)" },
                { code: "VLR", label: "Vellore (VLR)" },
                { code: "BLR", label: "Bengaluru (BLR)" },
                { code: "Other", label: "Other City" },
              ].map((loc) => {
                const isSelected =
                  location === loc.code ||
                  (loc.code === "CTR" && location === "Chittoor") ||
                  (loc.code === "TPT" && location === "Tirupati") ||
                  (loc.code === "VLR" && location === "Vellore") ||
                  (loc.code === "BLR" && location === "Bengaluru");

                return (
                  <button
                    key={loc.code}
                    type="button"
                    onClick={() => setLocation(loc.code)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      isSelected
                        ? "bg-burgundy text-white border-burgundy shadow-sm"
                        : "bg-ivory-50/60 text-obsidian/80 border-gold/25 hover:border-gold/60 hover:bg-ivory-100"
                    }`}
                  >
                    {loc.label}
                  </button>
                );
              })}
            </div>

            {location === "Other" && (
              <div className="mt-2.5">
                <input
                  type="text"
                  placeholder="Please specify city/district name"
                  value={otherLocation}
                  onChange={(e) => setOtherLocation(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-gold/30 focus:border-gold-600 focus:outline-none bg-ivory-50/50"
                />
              </div>
            )}
          </div>

          {/* Row 5: Expected Guest Count & Estimated Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-obsidian/80 mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-gold-600" />
                Expected Guest Count <span className="text-burgundy">*</span>
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-gold/30 focus:border-gold-600 focus:ring-1 focus:ring-gold-500/30 focus:outline-none bg-ivory-50/50 transition-all font-medium"
              >
                {guestCountOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-obsidian/80 mb-2 flex items-center gap-1.5">
                <IndianRupee className="w-3.5 h-3.5 text-gold-600" />
                Estimated Budget <span className="text-burgundy">*</span>
              </label>
              <select
                value={estimatedBudget}
                onChange={(e) => setEstimatedBudget(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-gold/30 focus:border-gold-600 focus:ring-1 focus:ring-gold-500/30 focus:outline-none bg-ivory-50/50 transition-all font-medium"
              >
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 6: Decoration Preferences & Quick Pills */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-obsidian/80 mb-2">
              Decoration Preferences (Mandap, Colors, Lighting)
            </label>
            <input
              type="text"
              placeholder="e.g. Temple mandap with gold pillars, Madurai jasmine & soft ambient lighting"
              value={decorationPreferences}
              onChange={(e) => setDecorationPreferences(e.target.value)}
              className="w-full px-4 py-3 text-sm rounded-xl border border-gold/30 focus:border-gold-600 focus:ring-1 focus:ring-gold-500/30 focus:outline-none bg-ivory-50/50 placeholder:text-obsidian/30 transition-all mb-2"
            />
            {/* Quick Suggestions */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[10px] text-obsidian/50 uppercase tracking-wider py-1 mr-1">
                Popular Themes:
              </span>
              {popularThemePills.map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => handleAddPreference(pill)}
                  className="text-[11px] py-1 px-2.5 rounded-full bg-ivory-100 hover:bg-gold/15 text-obsidian/70 border border-gold/20 hover:border-gold/50 transition-colors"
                >
                  + {pill}
                </button>
              ))}
            </div>
          </div>

          {/* Row 7: Additional Requirements */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-obsidian/80 mb-2">
              Additional Requirements or Questions
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your venue name, specific rituals, guest hospitality needs, or special design ideas..."
              value={additionalRequirements}
              onChange={(e) => setAdditionalRequirements(e.target.value)}
              className="w-full px-4 py-3 text-sm rounded-xl border border-gold/30 focus:border-gold-600 focus:ring-1 focus:ring-gold-500/30 focus:outline-none bg-ivory-50/50 placeholder:text-obsidian/30 transition-all resize-y"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gold/15">
            <div className="flex items-center gap-2 text-xs text-obsidian/60">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>We respect your privacy. No spam or commercial sharing.</span>
            </div>

            <ButtonInButton
              type="submit"
              variant="burgundy"
              size="lg"
              disabled={loading}
              className="w-full sm:w-auto"
            >
              {loading ? "Recording Details..." : "Submit Event Enquiry"}
            </ButtonInButton>
          </div>
        </form>
      </div>
    </div>
  );
}
