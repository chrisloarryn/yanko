# Slice 01: Public Design System

## Objective

Create the visual foundation for a premium, green-led construction company website.

## Scope

- Define CSS theme tokens in `app/globals.css` using Tailwind CSS 4 patterns.
- Establish colors, typography, spacing, surfaces, shadows, borders, and focus states.
- Create reusable base utilities for sections, containers, buttons, badges, cards, and forms.
- Keep the visual language aligned with construction, trust, nature, and craftsmanship.

## Visual Direction

- Primary colors: emerald, forest green, olive.
- Supporting colors: warm white, stone, charcoal, muted gold/wood accents.
- Mood: trustworthy, premium, natural, solid, client-facing.
- Avoid generic SaaS styling.

## Deliverables

- Updated `app/globals.css`.
- Shared classes or components for:
  - container
  - section spacing
  - primary CTA
  - secondary CTA
  - card surface
  - input surface
- Mobile-safe typography scale.

## Acceptance Criteria

- Components can be built without repeating long class strings everywhere.
- Color contrast is readable.
- Focus states are visible.
- Layout supports both light and premium earthy sections.

## Verification

- Visual smoke test in browser.
- `npm run lint`
- `npm run build`

## Dependencies

- Slice 00.
