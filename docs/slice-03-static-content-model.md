# Slice 03: Static Content Model

## Objective

Create a local content source that mirrors the future database schema, allowing fast public-site implementation before Supabase is connected.

## Scope

- Add typed local data under `lib/data/`.
- Model projects, services, construction systems, values, metrics, contact data, and site copy.
- Use URL-safe slugs.
- Keep this structure close to the future Supabase schema.

## Content To Include

Services:

- Construccion de Casas
- Ampliaciones y Remodelaciones
- Asesorias para Construccion, Ampliaciones y Remodelaciones
- Instalacion y Proyectos de Alcantarillado Rural
- Obras Menores

Construction systems:

- Albanileria
- Enchape de Ladrillo
- Madera Tipo Tronco
- Siding Northway
- Vinil Siding

Projects:

- Proyecto Pirque
- Proyecto El Duraznal
- Proyecto Papagayo
- Proyecto El Oliveto
- Proyecto Peninsula El Quisco
- Proyecto Laguna de Aculeo
- Proyecto Lonquimay
- Proyecto Pucon
- Proyecto Fundo El Principal
- Proyecto Codigua

Values:

- Calidad
- Compromiso
- Transparencia
- Responsabilidad

## Deliverables

- `lib/data/site.ts`
- `lib/data/projects.ts`
- `lib/data/services.ts`
- `lib/data/systems.ts`
- `lib/types/content.ts`

## Acceptance Criteria

- Public pages can import typed content.
- Slugs are stable and SEO-friendly.
- Data contains enough fields for home, listing, and detail pages.
- No database dependency yet.

## Verification

- TypeScript build validates content shape.
- `npm run lint`
- `npm run build`

## Dependencies

- Slice 00.
