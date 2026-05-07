-- Yanko website schema for Supabase.
-- Run this in the Supabase SQL editor after creating a project.

create extension if not exists "pgcrypto";

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text not null,
  location text,
  excerpt text,
  description text,
  cover_image_url text,
  gallery jsonb default '[]'::jsonb,
  features jsonb default '[]'::jsonb,
  is_featured boolean default false,
  is_published boolean default false,
  sort_order integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  description text,
  benefits jsonb default '[]'::jsonb,
  process jsonb default '[]'::jsonb,
  icon text,
  cover_image_url text,
  is_published boolean default false,
  sort_order integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value jsonb not null,
  updated_at timestamptz default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  message text not null,
  source text,
  created_at timestamptz default now()
);

alter table public.projects enable row level security;
alter table public.services enable row level security;
alter table public.site_settings enable row level security;
alter table public.leads enable row level security;

create policy "Public can read published projects"
on public.projects for select
using (is_published = true);

create policy "Public can read published services"
on public.services for select
using (is_published = true);

create policy "Public can read site settings"
on public.site_settings for select
using (true);

create policy "Public can create leads"
on public.leads for insert
with check (true);
