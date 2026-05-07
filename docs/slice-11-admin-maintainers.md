# Slice 11: Admin Maintainers

## Objective

Build maintainers for editable website content.

## Scope

- Project CRUD.
- Service CRUD.
- Construction system CRUD or settings-based editor.
- Mission, vision, values, metrics, and contact settings.
- Lead listing.

## Required Admin Pages

- `/ynk/admin/proyectos`
- `/ynk/admin/servicios`
- `/ynk/admin/sistemas`
- `/ynk/admin/contenido`
- `/ynk/admin/configuracion`
- `/ynk/admin/leads`

## Project Maintainer Fields

- Title.
- Slug.
- Category.
- Location.
- Excerpt.
- Description.
- Cover image.
- Gallery.
- Features.
- Featured flag.
- Published flag.
- Sort order.

## Content Maintainer Fields

- Home hero title/subtitle.
- Mission.
- Vision.
- Values.
- Metrics.
- Contact information.
- Social links.

## Deliverables

- Admin list pages.
- Admin create/edit forms.
- Server actions or route handlers for mutations.
- Delete or archive behavior.
- Publish/unpublish behavior.

## Acceptance Criteria

- Admin can create, edit, publish, unpublish, and delete projects.
- Admin can edit mission, vision, values, metrics, and contact data.
- Forms show loading, success, and error states.
- Invalid slugs and required fields are validated.
- Public users cannot call privileged mutations.

## Verification

- Manual CRUD test for each maintainer.
- `npm run lint`
- `npm run build`

## Dependencies

- Slice 10.
