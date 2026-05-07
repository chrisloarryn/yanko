# Slice 12: Dynamic Public Data

## Objective

Switch public pages from local static data to Supabase-backed content while preserving SEO and build reliability.

## Scope

- Read published projects from Supabase.
- Read published services from Supabase.
- Read site settings from Supabase.
- Keep local fallback data where useful for dev resilience.
- Update sitemap to include DB-backed slugs.

## Deliverables

- Data access functions under `lib/data/` or `lib/supabase/queries.ts`.
- Public pages consuming DB-backed content.
- Fallback handling for empty tables.
- Updated `generateStaticParams` or dynamic rendering strategy.

## Acceptance Criteria

- Public pages only show published content.
- Admin edits are visible publicly after refresh or revalidation.
- Empty DB states do not crash the site.
- SEO metadata still works for dynamic content.

## Verification

- Create a project in admin and verify public listing/detail.
- Update mission/vision and verify `/nosotros`.
- Check sitemap includes dynamic routes.
- `npm run lint`
- `npm run build`

## Dependencies

- Slice 09.
- Slice 11.
