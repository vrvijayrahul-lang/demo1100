"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GalleryItem, galleryCategories } from "@/data/galleryData";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { getWhatsAppLink } from "@/data/siteConfig";

interface GalleryLightboxProps {
  items: GalleryItem[];
  initialCategory?: string;
  showFilters?: boolean;
}

export function GalleryLightbox({
  items,
  initialCategory = "All",
  showFilters = true,
}: GalleryLightboxProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  // Handle keyboard events when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredItems.length]);

  const handlePrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
    );
  };

  const currentItem = activeIndex !== null ? filteredItems[activeIndex] : null;

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-14">
          {galleryCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ease-luxury ${
                  isSelected
                    ? "bg-burgundy text-white shadow-luxury shadow-burgundy/20 border border-burgundy-600 scale-105"
                    : "bg-white/80 hover:bg-white text-obsidian/75 hover:text-burgundy border border-gold/25 hover:border-gold/50 shadow-sm"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Editorial Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item, idx) => {
          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className="group relative cursor-pointer p-1.5 rounded-[2rem] bg-gradient-to-br from-white/90 via-ivory-100/60 to-ivory-200/40 border border-gold/20 hover:border-gold/50 shadow-luxury hover:shadow-luxury-hover transition-all duration-700 ease-luxury hover:-translate-y-1.5"
            >
              <div className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] aspect-[4/3] bg-obsidian-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                />

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-obsidian-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Top Location & Category Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-[0.15em] bg-obsidian-900/70 backdrop-blur-md text-gold-300 border border-gold/30">
                    {item.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/80 backdrop-blur-md text-burgundy flex items-center gap-1 shadow-sm">
                    <MapPin className="w-2.5 h-2.5 text-gold-600" />
                    {item.location}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-bold leading-snug drop-shadow-md text-ivory-50 line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shrink-0 ml-2 group-hover:bg-gold-500 group-hover:text-obsidian transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 text-obsidian/60 text-sm">
          No showcase items found for this category.
        </div>
      )}

      {/* Full-Screen Interactive Lightbox Modal */}
      {activeIndex !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-obsidian-950/95 backdrop-blur-2xl animate-fade-in"
          onClick={() => setActiveIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all z-50 hover:scale-105"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all z-50 hover:scale-105"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all z-50 hover:scale-105"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Container */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* The Image */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-[2rem] overflow-hidden border border-gold/30 shadow-2xl bg-black">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Image Details Caption Bar */}
            <div className="w-full mt-4 p-4 sm:p-5 rounded-2xl bg-obsidian-900/90 border border-gold/20 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold">
                    {currentItem.category}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-xs text-ivory-200 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold-400" />
                    {currentItem.location}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-ivory-50">
                  {currentItem.title}
                </h3>
                <p className="text-xs text-ivory-300/80 mt-1 max-w-2xl">
                  {currentItem.description}
                </p>
              </div>

              {/* Inquire about this specific setup */}
              <a
                href={getWhatsAppLink(
                  `Hi VSM Events, I love this setup: "${currentItem.title}" (${currentItem.location}). Can you share approximate quotation and availability?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire This Setup</span>
              </a>
            </div>

            {/* Pagination indicator */}
            <span className="text-[11px] text-white/50 mt-2">
              {activeIndex + 1} of {filteredItems.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
