# Slice 09: Supabase Integration

## Objective

Connect the app to Supabase for cheap/free persistence and future admin-managed content.

## Scope

- Install Supabase client dependencies if not already present.
- Add environment variable examples.
- Create browser/server Supabase clients following current Next.js guidance.
- Create SQL schema for core tables.
- Configure storage bucket plan for images.

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

For the GitHub Pages static export, use the publishable key from browser-safe clients. Do not add a service role key to client-side code.

## Tables

```sql
projects
- id uuid primary key
- title text not null
- slug text unique not null
- category text not null
- location text
- excerpt text
- description text
- cover_image_url text
- gallery jsonb
- features jsonb
- is_featured boolean default false
- is_published boolean default false
- sort_order int default 0
- created_at timestamptz default now()
- updated_at timestamptz default now()
```

```sql
services
- id uuid primary key
- title text not null
- slug text unique not null
- excerpt text
- description text
- benefits jsonb
- process jsonb
- icon text
- cover_image_url text
- is_published boolean default false
- sort_order int default 0
- created_at timestamptz default now()
- updated_at timestamptz default now()
```

```sql
site_settings
- id uuid primary key
- key text unique not null
- value jsonb not null
- updated_at timestamptz default now()
```

```sql
leads
- id uuid primary key
- name text not null
- email text
- phone text
- message text not null
- source text
- created_at timestamptz default now()
```

## Deliverables

- Supabase dependency installed.
- `.env.example`.
- `lib/supabase/client.ts`.
- `lib/supabase/server.ts`.
- `docs/supabase-schema.sql`.

## Acceptance Criteria

- App builds without real env vars when DB features are not invoked.
- Server-only key is never imported into client components.
- Schema can be pasted into Supabase SQL editor.

## Verification

- `npm run lint`
- `npm run build`
- Optional: run schema in Supabase project.

## Dependencies

- Slice 03.
