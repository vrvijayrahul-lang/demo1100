"use client";

import React, { useState, useEffect } from "react";
import Link from "next/navigation";
import { usePathname } from "next/navigation";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { ButtonInButton } from "./ButtonInButton";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import NextLink from "next/link";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Locations", href: "/locations" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-luxury px-3 sm:px-6 ${
          scrolled ? "pt-2 sm:pt-3" : "pt-4 sm:pt-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Floating Pill Container */}
          <div
            className={`w-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 ease-luxury ${
              scrolled
                ? "bg-white/90 backdrop-blur-2xl border border-gold/30 shadow-luxury"
                : "bg-white/80 backdrop-blur-xl border border-gold/20 shadow-md"
            }`}
          >
            {/* Brand Logo */}
            <NextLink href="/" className="group flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-burgundy to-burgundy-900 border border-gold/40 flex items-center justify-center text-champagne shadow-sm group-hover:scale-105 transition-transform duration-500">
                <Sparkles className="w-4 h-4 text-champagne-light" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-burgundy">
                    VSM
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-gold-700">
                    EVENTS
                  </span>
                </div>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-obsidian/60 -mt-1 hidden sm:block">
                  CTR • TPT • VLR • BLR
                </span>
              </div>
            </NextLink>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <NextLink
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-burgundy bg-gold/15 font-semibold"
                        : "text-obsidian/80 hover:text-burgundy hover:bg-ivory-200/60"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-600" />
                    )}
                  </NextLink>
                );
              })}
            </nav>

            {/* Actions: Phone, WhatsApp & CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Quick WhatsApp Link */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/60 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              </a>

              {/* Quick Call Link (Desktop/Tablet) */}
              <a
                href={getPhoneLink()}
                title="Call VSM Events Team"
                className="hidden sm:flex w-9 h-9 rounded-full bg-gold/10 hover:bg-gold/20 text-burgundy border border-gold/30 items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
              </a>

              {/* Plan Your Event CTA */}
              <div className="hidden md:block">
                <ButtonInButton
                  href="/plan-event"
                  variant="burgundy"
                  size="sm"
                  className="py-2 px-4 text-xs font-semibold"
                >
                  Plan Your Event
                </ButtonInButton>
              </div>

              {/* Mobile Hamburger Morph Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="lg:hidden w-9 h-9 rounded-full bg-ivory-100 border border-gold/30 flex flex-col items-center justify-center gap-1.5 relative z-50 focus:outline-none"
              >
                <span
                  className={`w-4 h-0.5 bg-burgundy rounded-full transition-all duration-300 ease-luxury ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-burgundy rounded-full transition-all duration-300 ease-luxury ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-burgundy rounded-full transition-all duration-300 ease-luxury ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Screen-Filling Glass Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ease-luxury ${
          isOpen
            ? "opacity-100 pointer-events-auto backdrop-blur-3xl bg-ivory-50/95"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col justify-between pt-28 pb-10 px-8 max-w-md mx-auto">
          {/* Staggered Navigation Links */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gold-700">
              Menu Navigation
            </span>
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <NextLink
                  key={link.href}
                  href={link.href}
                  className={`text-2xl sm:text-3xl font-serif transition-all duration-500 ease-luxury transform ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  } ${
                    isActive
                      ? "text-burgundy font-bold pl-2 border-l-2 border-gold-600"
                      : "text-obsidian hover:text-burgundy"
                  }`}
                  style={{ transitionDelay: `${isOpen ? idx * 40 + 100 : 0}ms` }}
                >
                  {link.label}
                </NextLink>
              );
            })}
          </div>

          {/* Mobile Bottom CTA & Contacts */}
          <div
            className={`flex flex-col gap-4 pt-6 border-t border-gold/20 transition-all duration-700 delay-300 transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <ButtonInButton
              href="/plan-event"
              variant="burgundy"
              size="md"
              className="w-full justify-between"
            >
              Plan Your Event
            </ButtonInButton>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-emerald-600 text-white text-xs font-medium shadow-sm hover:bg-emerald-700"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={getPhoneLink()}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gold-600 text-obsidian text-xs font-semibold shadow-sm hover:bg-gold-500"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>

            <p className="text-center text-[11px] text-obsidian/60 pt-2">
              Serving Chittoor, Tirupati, Vellore & Bengaluru
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
