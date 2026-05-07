# Slice 08: SEO Foundation

## Objective

Implement strong technical SEO for the public website.

## Scope

- Global metadata.
- Per-page metadata.
- Open Graph data.
- Sitemap.
- Robots.
- Local business JSON-LD.
- Image alt text conventions.

## Target Keywords

- construccion de casas en Chile
- construccion de casas en Talagante
- ampliaciones y remodelaciones
- constructora de casas
- alcantarillado rural
- casas personalizadas
- remodelacion de viviendas

## Deliverables

- Updated `app/layout.tsx` metadata.
- Page-level `metadata` or `generateMetadata`.
- `app/sitemap.ts`.
- `app/robots.ts`.
- JSON-LD helper or component.

## Acceptance Criteria

- Every public page has a unique title and description.
- Dynamic project and service pages have slug-specific metadata.
- Sitemap includes static and dynamic routes.
- Robots allows public pages and can disallow admin routes.
- JSON-LD describes the local construction business.

## Verification

- Inspect generated page metadata.
- Visit `/sitemap.xml`.
- Visit `/robots.txt`.
- `npm run lint`
- `npm run build`

## Dependencies

- Slice 03.
- Slice 04.
- Slice 05.
- Slice 06.
