# Yanko Website Specification

This folder contains the spec-driven development plan for rebuilding and improving the Casas RM style website in the current `yanko` Next.js repository.

The work is split into independent, executable slices. Each slice should be implemented, reviewed, verified, and committed separately when possible.

## Product Goal

Build a modern construction company website with strong SEO, premium visual design, green-led branding, editable content, project showcases, lead capture, and a protected admin area at `/ynk/admin`.

The final product should preserve the useful content and information architecture from `https://casasrm.cl`, but improve the visual quality, UX, maintainability, and conversion paths.

## Current Repository Baseline

- Next.js `16.2.5`
- React `19.2.4`
- App Router enabled
- Tailwind CSS `4.2.4`
- TypeScript enabled
- Initial `create-next-app` template still present

Before implementing app behavior, read the relevant local Next.js docs under `node_modules/next/dist/docs/`, as required by `AGENTS.md`.

## Slice Order

1. [Slice 00: Project Baseline](./slice-00-project-baseline.md)
2. [Slice 01: Public Design System](./slice-01-public-design-system.md)
3. [Slice 02: Public Layout](./slice-02-public-layout.md)
4. [Slice 03: Static Content Model](./slice-03-static-content-model.md)
5. [Slice 04: Home Page](./slice-04-home-page.md)
6. [Slice 05: Public Content Pages](./slice-05-public-content-pages.md)
7. [Slice 06: Projects Experience](./slice-06-projects-experience.md)
8. [Slice 07: Contact And Leads](./slice-07-contact-and-leads.md)
9. [Slice 08: SEO Foundation](./slice-08-seo-foundation.md)
10. [Slice 09: Supabase Integration](./slice-09-supabase-integration.md)
11. [Slice 10: Admin Auth And Shell](./slice-10-admin-auth-and-shell.md)
12. [Slice 11: Admin Maintainers](./slice-11-admin-maintainers.md)
13. [Slice 12: Dynamic Public Data](./slice-12-dynamic-public-data.md)
14. [Slice 13: QA, Performance, And Deploy](./slice-13-qa-performance-deploy.md)

## Definition Of Done

- The page renders correctly on desktop and mobile.
- Public content is server-rendered when SEO matters.
- `npm run lint` passes.
- `npm run build` passes.
- No private Supabase keys are exposed to the browser.
- Each route has meaningful metadata.
- All CTAs work or intentionally point to a documented placeholder.

## Recommended Execution Strategy

Start with static data and a polished public site. Then add Supabase and admin maintainers. This reduces risk and produces a client-reviewable version early.
