# Slice 05: Public Content Pages

## Objective

Implement the non-project public pages using the static content model.

## Scope

- `/nosotros`
- `/servicios`
- `/servicios/[slug]`
- `/sistemas-de-construccion`
- `/sistemas-de-construccion/[slug]`

## Page Requirements

Nosotros:

- Company story.
- Mission.
- Vision.
- Values.
- Commitment block.

Servicios index:

- All services as cards.
- Clear CTA to contact.

Service detail:

- Title.
- Summary.
- Benefits.
- Process.
- Related CTA.

Construction systems index/detail:

- System explanation.
- Benefits.
- Suitable project types.
- CTA.

## Deliverables

- Public route files.
- Shared internal page components.
- Static params for dynamic pages.

## Acceptance Criteria

- Dynamic routes return valid pages for all local slugs.
- Unknown slugs return `notFound()`.
- Each page has a single clear `h1`.
- Navigation between related pages works.

## Verification

- Visit every route manually.
- `npm run lint`
- `npm run build`

## Dependencies

- Slice 02.
- Slice 03.
