# Slice 07: Contact And Leads

## Objective

Create a high-conversion contact page and lead capture flow.

## Scope

- `/contacto`
- Contact form.
- WhatsApp CTA.
- Contact cards.
- Optional map embed placeholder.
- Initial static or no-op submit behavior before Supabase.

## Form Fields

- Name.
- Email.
- Phone.
- Project type.
- Message.

## Deliverables

- `app/contacto/page.tsx`
- `components/site/contact-form.tsx`
- Basic validation.
- Clear success/error states.

## Acceptance Criteria

- Form validates required fields.
- User can contact via WhatsApp without form submission.
- Contact information is visible and consistent.
- Final implementation can later store leads in Supabase.

## Verification

- Test empty form validation.
- Test valid form state.
- Test WhatsApp URL.
- `npm run lint`
- `npm run build`

## Dependencies

- Slice 02.
- Slice 03.
