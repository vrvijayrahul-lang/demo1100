-- =========================================================
-- VSM Events - Official Supabase Database Schema
-- Production Ready with Row Level Security (RLS)
-- =========================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. ENQUIRIES TABLE
create table if not exists public.enquiries (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  phone text not null,
  whatsapp text not null,
  event_type text not null,
  event_date date not null,
  location text not null,
  guest_count text not null,
  estimated_budget text not null,
  decoration_preferences text,
  additional_requirements text,
  status text not null default 'New' check (status in ('New', 'Contacted', 'Quotation Sent', 'Confirmed', 'Completed', 'Cancelled')),
  admin_notes text,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indexing for fast search & filtering
create index if not exists idx_enquiries_status on public.enquiries(status);
create index if not exists idx_enquiries_location on public.enquiries(location);
create index if not exists idx_enquiries_event_date on public.enquiries(event_date);
create index if not exists idx_enquiries_created_at on public.enquiries(created_at desc);

-- 2. SERVICES TABLE (Dynamic CMS)
create table if not exists public.services (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  subtitle text,
  short_desc text not null,
  long_desc text,
  image text not null,
  featured boolean default false,
  category text not null,
  features jsonb default '[]'::jsonb,
  inclusions jsonb default '[]'::jsonb,
  display_order int default 0,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. GALLERY TABLE
create table if not exists public.gallery_items (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text not null,
  location text not null,
  image_url text not null,
  aspect_ratio text default 'wide',
  description text,
  display_order int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. TESTIMONIALS TABLE
create table if not exists public.testimonials (
  id uuid primary key default uuid_generate_v4(),
  client_name text not null,
  event_title text not null,
  event_type text not null,
  location text not null,
  review_date text not null,
  rating int default 5 check (rating >= 1 and rating <= 5),
  review_text text not null,
  is_verified boolean default true,
  avatar_initials text,
  display_order int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. SITE SETTINGS TABLE (Configurable via Admin)
create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ROW LEVEL SECURITY (RLS) POLICIES
alter table public.enquiries enable row level security;
alter table public.services enable row level security;
alter table public.gallery_items enable row level security;
alter table public.testimonials enable row level security;
alter table public.site_settings enable row level security;

-- Public can submit new enquiries (INSERT only)
create policy "Public can submit enquiries"
  on public.enquiries for insert
  with check (true);

-- Authenticated admins can view, update, delete enquiries
create policy "Authenticated admins have full enquiry access"
  on public.enquiries for all
  using (auth.role() = 'authenticated' or auth.role() = 'service_role');

-- Public can read active services, gallery, testimonials, and settings
create policy "Public can read services"
  on public.services for select
  using (is_active = true);

create policy "Admins can manage services"
  on public.services for all
  using (auth.role() = 'authenticated' or auth.role() = 'service_role');

create policy "Public can read gallery"
  on public.gallery_items for select
  using (true);

create policy "Admins can manage gallery"
  on public.gallery_items for all
  using (auth.role() = 'authenticated' or auth.role() = 'service_role');

create policy "Public can read testimonials"
  on public.testimonials for select
  using (true);

create policy "Admins can manage testimonials"
  on public.testimonials for all
  using (auth.role() = 'authenticated' or auth.role() = 'service_role');

create policy "Public can read site settings"
  on public.site_settings for select
  using (true);

create policy "Admins can manage site settings"
  on public.site_settings for all
  using (auth.role() = 'authenticated' or auth.role() = 'service_role');
