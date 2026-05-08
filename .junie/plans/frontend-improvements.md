---
sessionId: session-260507-235146-qxoy
isActive: true
---

# Requirements



# Overview & Goals

The goal is to identify and plan key improvements for the Yanko frontend to boost performance, user experience, maintainability, accessibility, and developer productivity.

Current strengths: Modern Next.js 16 app router, Tailwind CSS 4, good SEO foundation (sitemap, robots, structured data), responsive design, admin panel with Supabase integration.

Identified opportunities: Image optimization, lack of tests, static data mixed with dynamic, no animations, potential a11y gaps.

## Scope

### In Scope
- Image optimization with `next/Image`.
- Introduce shadcn/ui for consistent UI components.
- Add Framer Motion for subtle animations.
- Implement loading skeletons for dynamic content.
- Add Vitest for component testing.
- Basic accessibility improvements.

### Out of Scope
- Backend/Supabase changes.
- Full redesign.
- E2E tests.
- PWA.

## User Stories

As a site visitor, I want optimized images so pages load faster.

As a developer, I want shadcn/ui components so UI is consistent and maintainable.

As a user, I want smooth animations so the site feels modern.

As a developer, I want tests so changes don't break existing functionality.

## Non-Functional Requirements
- Maintain Lighthouse scores >90 (perf, a11y, best practices).
- No regressions in current functionality.
- TypeScript strict compliance.

# Technical Design



# Current Implementation

- **Routing & Data**: App router with parallel routes (site/admin). Static data in `lib/data/*.ts` (e.g., `projects.ts` hardcodes Unsplash images). Dynamic grids use Supabase via `lib/supabase/public-data.ts`.
- **Styling**: Tailwind CSS 4, custom utilities (`u-container`, `u-btn-*`), partial UI in `components/ui/button.tsx`.
- **Images**: Direct `<img>` tags with external URLs, no `next/Image`.
- **Components**: Reusable site components (`header.tsx`, `footer.tsx`, `dynamic-project-grid.tsx`), admin editors.
- **No tests**, no animations lib, basic loading (no Suspense widespread).

# Key Decisions

- **UI Library**: Introduce shadcn/ui – aligns with existing `components/ui/`, adds accessible primitives, Tailwind-based.
- **Animations**: Framer Motion – lightweight, performant for React/Next.js.
- **Testing**: Vitest – fast, works with Vite (Tailwind compatible), easy Jest migration path.
- **Images**: `next/Image` everywhere – automatic opt, lazy loading.

# Proposed Changes

- Replace all `<img>` with `next/Image` in components/pages (e.g., `ProjectCard`, hero backgrounds).
- Install/configure shadcn/ui, replace custom button, add Card, Skeleton, etc.
- Add Framer Motion to key sections (hero fade-in, grid staggers).
- Wrap dynamic fetches in `Suspense` + Skeleton components.
- Setup Vitest, add tests for core components (e.g., `ProjectCard`, `Header`).
- Run axe/lighthouse audits, fix issues (alt texts, focus management).

# File Structure

**New/Modified:**
- `components/ui/*` (shadcn additions: card.tsx, skeleton.tsx)
- `test/setup.ts`, `test/ProjectCard.test.tsx`
- Update `app/(site)/page.tsx`, `components/site/cards.tsx`, etc.
- `package.json` deps: `shadcn/ui`, `@radix-ui/*`, `framer-motion`, `vitest`, `@testing-library/*`
- `next.config.ts`: image domains.

# Risks

- Image opt may require public/ assets or external domain config.
- shadcn init may conflict with Tailwind 4 (use latest CLI).
Mitigation: Test in staging.

# Testing



# Validation Approach

- Run Lighthouse audits before/after (perf, a11y >90).
- Vitest for unit tests on components.
- Manual verification of animations, loading states.
- Check no regressions on key pages (home, projects, admin).

# Key Scenarios

- Images lazy-load and optimize (Network tab).
- shadcn components style correctly.
- Animations smooth on scroll/interaction.
- Suspense shows skeletons during fetch.
- Tests pass: `npm test`.

# Edge Cases

- Slow network: skeletons appear.
- Missing alt: all images have descriptive alts now.
- Screen reader: headings, buttons announce properly.

# Test Changes

- Add `vitest.config.ts`.
- 5+ component tests.

# Delivery Steps

###   Step 1: 1. Image optimization with next/Image
All images across the site use `next/Image` for automatic optimization, lazy loading, and responsive sizes.

- Audit all `<img>` usages in `components/site/*`, `app/(site)/*` pages.
- Replace with `next/Image`, add `sizes`, `alt` props.
- Update `next.config.ts` with `images.remotePatterns` for Unsplash/domains.
- Test hero background (use `ImageBackground` pattern if needed).

###   Step 2: 2. Setup shadcn/ui and update UI components
shadcn/ui is initialized, providing consistent, accessible UI primitives including Button, Card, Skeleton.

- Run `npx shadcn-ui@latest init`.
- Add `button`, `card`, `skeleton` components.
- Replace custom `button.tsx` and integrate in `cards.tsx`, forms.
- Update Tailwind config if needed.
- Verify styles match current design.

###   Step 3: 3. Add Framer Motion animations and Suspense skeletons
Key sections have smooth enter animations; dynamic content shows skeletons during loading.

- Install `framer-motion`.
- Add `motion.div` to hero, metrics, project grids (staggerChildren).
- Wrap dynamic grids (`dynamic-project-grid.tsx`) in `Suspense` + `Skeleton`.
- Migrate static home data fetches if applicable (use `public-data.ts`).

###   Step 4: 4. Implement Vitest and basic tests + a11y fixes
Vitest setup complete with passing tests for core components; a11y Lighthouse score >90.

- Install `vitest`, `@testing-library/react`, `jsdom`.
- Create `vitest.config.ts`, test utils.
- Add tests: `ProjectCard`, `Header`, `ContactForm`.
- Run Lighthouse/axe, fix alt texts, ARIA, contrast.
- Update `package.json` scripts: `test`, `test:ui`.