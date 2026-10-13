# VSM Events — Premium Event Planning & Luxury Decor Website

> **Creating Unforgettable Celebrations**  
> Serving Chittoor (CTR), Tirupati (TPT), Vellore (VLR), and Bengaluru (BLR)  
> 15+ Years of Experience | 2,000+ Celebrations Mastered

A high-performance digital presence and booking management platform built for **VSM Events**, South India's premier luxury wedding and event planning team.

---

## 🌟 Key Features

1. **Editorial Luxury Aesthetic**:
   - High-end palette: Warm Ivory, Champagne Gold, Deep Burgundy, and Soft Blush Pink.
   - Elegant typography with Cormorant Garamond serif headings and Plus Jakarta Sans body.
   - Double-Bezel nested hardware architecture, kinetic hover physics, and subtle film-grain texture.
   - 100% mobile-first responsive design.

2. **Homepage Experience**:
   - Full-screen cinematic hero with trust badges (15+ Years, 2,000+ Events, 4 Cities).
   - About VSM Events narrative with trust milestones.
   - 12 Visual signature service cards with direct enquiry actions.
   - Featured Events Gallery with category filters and full-screen lightbox.
   - Why Discerning Families Trust Us (No fabricated claims).
   - 4-Step Event Journey (Share Vision, Plan Together, Design & Organize, Celebrate Beautifully).
   - Verified client reviews with ratings and event types.
   - Regional location cards for Chittoor (CTR), Tirupati (TPT), Vellore (VLR), and Bengaluru (BLR).

3. **Event Booking & Enquiry Engine**:
   - Comprehensive multi-field enquiry form: Full Name, Phone, WhatsApp, Event Type, Date, City, Guest Count, Budget, Decor Preferences, and Special Notes.
   - Server-side validation and duplicate submission prevention.
   - Confetti celebration upon saving.
   - Direct WhatsApp message generation from actual form data with 1-click continuation.

4. **Floating WhatsApp & Concierge**:
   - Floating WhatsApp pill button across the website with ambient pulsing gold halo.
   - Quick Enquiry Drawer enabling visitors to customize city, service, and trigger instant WhatsApp chat.
   - Click-to-call direct dialing.

5. **Complete Page Architecture**:
   - `/` — Homepage
   - `/about` — About VSM Events & 15-Year Legacy
   - `/services` — All 12 Signature Services
   - `/services/[slug]` — Individual Service Pages with Scope, FAQs, and Booking Form
   - `/portfolio` & `/gallery` — Filterable High-Resolution Lightbox Showcase
   - `/locations` — Chittoor, Tirupati, Vellore, and Bengaluru City Guides
   - `/testimonials` — Verified Client Reviews
   - `/contact` — Office Hubs, Phone, WhatsApp, and Consultation Desk
   - `/plan-event` — Dedicated Event Booking & Proposal Planner
   - `/privacy-policy` — Professional Privacy Policy
   - `/admin` & `/admin/login` — Secure Administrator CMS

6. **Secure Administrator Dashboard**:
   - Secure password-protected authentication.
   - Live Metrics: Total Inquiries, New Leads, Confirmed Bookings, and Completed Events.
   - Search, filter by status and city.
   - Change enquiry status: `New`, `Contacted`, `Quotation Sent`, `Confirmed`, `Completed`, `Cancelled`.
   - 1-Click WhatsApp chat with prospective client.
   - 1-Click CSV spreadsheet export for Excel and Google Sheets.
   - Gallery CMS: Add and delete portfolio images.
   - Settings CMS: Edit contact phones, WhatsApp numbers, and notification email.

7. **Database Architecture**:
   - **Supabase PostgreSQL Ready**: Full SQL schema provided in `supabase-schema.sql` with Row Level Security (RLS) policies.
   - **Zero-Setup Fallback**: Seamless persistent JSON store enabled out of the box, allowing immediate local and staging operation without waiting for external cloud credentials.

8. **SEO & Performance**:
   - LocalBusiness and EventPlanner Schema.org JSON-LD structured data.
   - Dynamic `sitemap.ts` and `robots.ts`.
   - OpenGraph and Twitter social card metadata.
   - Fast page loads with Next.js App Router and optimized modern images.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Celebration Animations**: Canvas Confetti
- **Database / Backend**: Supabase (PostgreSQL + RLS) with local JSON storage engine fallback
- **Deployment Platform**: Vercel

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Administrator Access

- **Admin Login Route**: `/admin/login`
- **Default Password**: `vsm@luxury2025`
*(Password can be configured in `.env.local` via `ADMIN_PASSWORD`)*

---

## 🗄️ Setting Up Supabase (Optional)

1. Create a project at [supabase.com](https://supabase.com).
2. Go to the SQL Editor in your Supabase dashboard.
3. Paste and run the contents of [supabase-schema.sql](supabase-schema.sql).
4. Copy your Project URL and Anon/Service Role keys into `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```
5. Deploy to Vercel and add the environment variables in your Vercel Project Settings.
