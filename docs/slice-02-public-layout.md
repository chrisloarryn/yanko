# Slice 02: Public Layout

## Objective

Implement the public shell used by all marketing pages.

## Scope

- Header with top contact bar.
- Sticky navigation.
- Mobile navigation.
- Footer with services, contact, social links, and CTA.
- Floating WhatsApp CTA.
- Shared public layout components.

## Public Navigation

- Inicio: `/`
- Nosotros: `/nosotros`
- Servicios: `/servicios`
- Sistemas de Construccion: `/sistemas-de-construccion`
- Proyectos: `/proyectos`
- Contacto: `/contacto`

## Contact Data

- Phone: `+56 9 6878 7200`
- Email: `ventascasasrm@gmail.com`
- Address: `Av. Lonquen Sur 6300, Parcela 7, Talagante`
- WhatsApp CTA should use the phone number.

## Deliverables

- `components/site/top-bar.tsx`
- `components/site/header.tsx`
- `components/site/footer.tsx`
- `components/site/whatsapp-button.tsx`
- Public layout integration in `app/layout.tsx` or route group layout.

## Acceptance Criteria

- Header and footer appear on all public pages.
- Admin routes do not inherit the marketing header/footer if that becomes undesirable.
- Mobile navigation is usable.
- WhatsApp button is accessible and visible without blocking content.

## Verification

- Check desktop and mobile widths.
- `npm run lint`
- `npm run build`

## Dependencies

- Slice 01.
