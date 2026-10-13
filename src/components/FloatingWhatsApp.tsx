"use client";

import React, { useState } from "react";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { MessageCircle, Phone, X, Sparkles, ArrowRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("CTR");
  const [selectedService, setSelectedService] = useState("Luxury Wedding Planning");
  const [userName, setUserName] = useState("");

  const handleStartChat = () => {
    const locObj = siteConfig.locations.find((l) => l.code === selectedLocation);
    const locName = locObj ? locObj.name : "South India";

    let msg = `Hello VSM Events! I am interested in *${selectedService}* in *${locName}*.`;
    if (userName.trim()) {
      msg = `Hello VSM Events! My name is *${userName.trim()}*. I am interested in *${selectedService}* in *${locName}*. Please share your available dates and decor catalog.`;
    }

    const url = getWhatsAppLink(msg);
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end">
      {/* Quick Consultation Popup Card */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] p-1.5 rounded-[2rem] bg-gradient-to-br from-gold/30 via-white to-gold/20 border border-gold/40 shadow-2xl animate-fade-up">
          <div className="rounded-[calc(2rem-0.375rem)] bg-white p-5 sm:p-6 shadow-inner-light flex flex-col gap-4 text-obsidian">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-gold/15 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-burgundy flex items-center gap-1.5">
                    VSM Events Concierge
                    <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  </h4>
                  <p className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Online • Typically replies in 5 mins
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-ivory-100 hover:bg-ivory-200 text-obsidian/70 flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-obsidian/80 leading-relaxed">
              Plan your dream celebration with our senior wedding designers. Select your details for instant WhatsApp enquiry:
            </p>

            {/* Quick Form */}
            <div className="flex flex-col gap-3">
              {/* Name */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-obsidian/70 mb-1">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Reddy"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-gold/30 focus:border-gold-600 focus:outline-none bg-ivory-50/60"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-obsidian/70 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-gold-600" />
                  Celebration Type
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-gold/30 focus:border-gold-600 focus:outline-none bg-ivory-50/60"
                >
                  <option value="Luxury Wedding Planning">Luxury Wedding Planning</option>
                  <option value="Wedding Stage Decoration">Wedding Stage Decoration</option>
                  <option value="Engagement Ceremonies">Engagement Ceremonies</option>
                  <option value="Haldi & Mehendi Decorations">Haldi & Mehendi Decorations</option>
                  <option value="Reception Decorations">Reception Decorations</option>
                  <option value="Birthday Party Planning">Birthday Party Planning</option>
                  <option value="Baby Showers & Naming Ceremonies">Baby Showers & Naming Ceremonies</option>
                  <option value="Floral Decorations">Floral Decorations</option>
                  <option value="Complete Event Management">Complete Event Management</option>
                </select>
              </div>

              {/* Location Selection */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-obsidian/70 mb-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gold-600" />
                  Event Location
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {siteConfig.locations.map((loc) => (
                    <button
                      key={loc.code}
                      type="button"
                      onClick={() => setSelectedLocation(loc.code)}
                      className={`py-1.5 px-2 text-center rounded-lg text-xs font-semibold border transition-all ${
                        selectedLocation === loc.code
                          ? "bg-burgundy text-white border-burgundy shadow-sm"
                          : "bg-ivory-100 text-obsidian/80 border-gold/20 hover:border-gold/50"
                      }`}
                    >
                      {loc.code}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <button
                type="button"
                onClick={handleStartChat}
                className="w-full py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Wedding Designer</span>
              </button>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <a
                  href={getPhoneLink()}
                  className="py-2 px-3 rounded-full bg-ivory-100 hover:bg-ivory-200 text-burgundy font-medium border border-gold/30 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call Directly</span>
                </a>
                <Link
                  href="/plan-event"
                  onClick={() => setIsOpen(false)}
                  className="py-2 px-3 rounded-full bg-ivory-100 hover:bg-ivory-200 text-burgundy font-medium border border-gold/30 flex items-center justify-center gap-1 transition-colors"
                >
                  <span>Detailed Form</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="relative group">
        {/* Subtle pulsating gold halo */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 via-gold-500 to-emerald-600 opacity-60 blur-sm group-hover:opacity-100 animate-pulse transition duration-500" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open WhatsApp conversation"
          className="relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 active:scale-95 border border-emerald-400/40"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white/20" strokeWidth={1.5} />
          <span className="text-xs sm:text-sm font-semibold tracking-wide hidden sm:inline-block">
            {isOpen ? "Close Concierge" : "Enquire on WhatsApp"}
          </span>
          <span className="sm:hidden text-xs font-semibold">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
