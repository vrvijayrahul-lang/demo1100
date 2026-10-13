import React from "react";
import { Metadata } from "next";
import { testimonialsData } from "@/data/testimonialsData";
import { DoubleBezelCard } from "@/components/DoubleBezelCard";
import { ButtonInButton } from "@/components/ButtonInButton";
import { Sparkles, Star, MapPin, CheckCircle, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | Verified Experiences",
  description:
    "Read genuine reviews and experiences from families who trusted VSM Events with their weddings, receptions, haldi ceremonies, and birthday celebrations in Chittoor, Tirupati, Vellore, and Bengaluru.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-32">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-800 text-[11px] uppercase tracking-[0.2em] font-semibold mb-5">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Verified Client Feedback</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-burgundy tracking-tight leading-[1.15] mb-6">
          Treasured Words from{" "}
          <span className="gold-gradient-text italic font-normal">
            Grateful Families.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-obsidian/75 max-w-2xl mx-auto leading-relaxed">
          Over 2,000 celebrations have given us relationships that last a lifetime.
          Here is what our clients share about our dedication, decor elegance, and
          seamless coordination.
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((test) => (
            <DoubleBezelCard
              key={test.id}
              className="hover:-translate-y-1.5"
              innerClassName="p-8 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold-600">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified Client
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="font-serif text-base font-bold text-burgundy">
                    {test.eventTitle}
                  </h4>
                  <span className="text-[11px] text-gold-700 font-medium flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {test.location} • {test.eventType}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-obsidian/80 leading-relaxed italic mb-6">
                  &ldquo;{test.reviewText}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gold/15 flex items-center justify-between text-xs text-obsidian/60">
                <span className="font-serif font-bold text-sm text-burgundy">
                  {test.clientName}
                </span>
                <span>{test.date}</span>
              </div>
            </DoubleBezelCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-24 text-center">
        <div className="p-2 rounded-[2.5rem] bg-gradient-to-r from-gold/30 via-burgundy/20 to-gold/30 border border-gold/30 shadow-luxury">
          <div className="rounded-[calc(2.5rem-0.5rem)] bg-white p-8 sm:p-12 text-center flex flex-col items-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy mb-3">
              Ready to Craft Your Own Unforgettable Story?
            </h3>
            <p className="text-sm text-obsidian/75 max-w-lg mb-6 leading-relaxed">
              Join thousands of delighted families who trusted VSM Events with their most sacred and joyous milestones.
            </p>
            <ButtonInButton href="/plan-event" variant="burgundy" size="md">
              Plan Your Celebration Now
            </ButtonInButton>
          </div>
        </div>
      </section>
    </div>
  );
}
