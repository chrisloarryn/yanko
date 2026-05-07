# Slice 13: QA, Performance, And Deploy

## Objective

Finalize the site for client review and production deployment.

## Scope

- Responsive QA.
- Accessibility pass.
- SEO validation.
- Performance pass.
- Error states.
- Deployment readiness.

## QA Checklist

- Home renders on mobile, tablet, and desktop.
- Navigation works on mobile and desktop.
- All public routes load.
- Unknown dynamic slugs return 404.
- Contact form validates correctly.
- WhatsApp links work.
- Admin routes are protected.
- Admin CRUD works.
- No console errors in normal usage.

## Performance Checklist

- Use optimized images where possible.
- Avoid unnecessary client components.
- Keep above-the-fold content server-rendered.
- Avoid heavy animation libraries unless justified.
- Check Lighthouse performance and SEO.

## SEO Checklist

- Unique title and description per route.
- Sitemap works.
- Robots works.
- JSON-LD validates.
- One `h1` per page.
- Descriptive image alt text.

## Deployment Checklist

- Vercel project configured.
- Supabase env vars configured.
- Production URL reflected in metadata base.
- Storage bucket policies confirmed.
- Admin user created.

## Acceptance Criteria

- `npm run lint` passes.
- `npm run build` passes.
- Lighthouse SEO score is 90+ for public pages.
- No known critical mobile layout issues.
- Site is ready for client review.

## Verification

Run:

```bash
npm run lint
npm run build
```

Then run browser QA against the deployed or local site.

## Dependencies

- All prior slices.
