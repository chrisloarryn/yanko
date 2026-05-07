# QA And Deploy Report

Date: 2026-05-07

## Verification

- `npm run lint`: pass
- `npm run build`: pass
- Static export generates 42 pages.
- GitHub Pages compatibility:
  - `output: "export"` enabled.
  - `trailingSlash: true` enabled.
  - Workflow writes `out/.nojekyll`.

## Public Routes

- `/`
- `/nosotros/`
- `/servicios/`
- `/servicios/[slug]/`
- `/sistemas-de-construccion/`
- `/sistemas-de-construccion/[slug]/`
- `/proyectos/`
- `/proyectos/[slug]/`
- `/contacto/`
- `/sitemap.xml`
- `/robots.txt`

## Admin Routes

- `/ynk/admin/`
- `/ynk/admin/login/`
- `/ynk/admin/proyectos/`
- `/ynk/admin/servicios/`
- `/ynk/admin/sistemas/`
- `/ynk/admin/contenido/`
- `/ynk/admin/configuracion/`
- `/ynk/admin/leads/`
- `/proyectos/ynk/admin/` redirects to `/ynk/admin/`.

## Supabase Status

- Browser and server helpers are configured with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
- Contact form attempts to insert into `leads` and falls back to `localStorage` if Supabase/RLS is not ready.
- Project and service listings hydrate from Supabase published rows when available, with static local fallback for SEO and resilience.

## Known Static Export Constraint

GitHub Pages has no server runtime. Because of that:

- Middleware, server actions, request cookies, and protected server-side admin auth are not available.
- Admin edits can be stored in the browser or sent to Supabase only if safe RLS/auth policies are configured.
- Public pages keep static fallback content and can hydrate published Supabase rows client-side.

For fully protected admin CRUD, move deployment to a server-capable host or add Supabase Auth/RLS policies and use browser-authenticated writes.
