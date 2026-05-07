# Slice 06: Projects Experience

## Objective

Build a polished projects section with filters, listing cards, and project detail pages.

## Scope

- `/proyectos`
- `/proyectos/[slug]`
- Category filters.
- Featured visual cards.
- Detail gallery placeholder support.

## Categories

- Todos
- Construccion
- Remodelaciones
- Ampliaciones

## Listing Card Fields

- Cover image or placeholder.
- Project title.
- Location.
- Category.
- Short excerpt.
- Link to detail.

## Detail Page Fields

- Title.
- Category.
- Location.
- Description.
- Gallery.
- Features.
- CTA to quote a similar project.

## Deliverables

- `app/proyectos/page.tsx`
- `app/proyectos/[slug]/page.tsx`
- `components/site/project-card.tsx`
- Project filtering UX.

## Acceptance Criteria

- Listing works with all static projects.
- Detail pages work for all project slugs.
- Missing images use an elegant placeholder.
- Page remains SEO-friendly.

## Verification

- Manually test project filters.
- Manually test project detail pages.
- `npm run lint`
- `npm run build`

## Dependencies

- Slice 02.
- Slice 03.
