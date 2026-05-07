# Slice 00: Project Baseline

## Objective

Prepare the repository for feature work without changing product behavior beyond removing the starter template.

## Scope

- Read relevant local Next.js documentation.
- Confirm App Router conventions for Next.js `16.2.5`.
- Remove unused starter UI from `app/page.tsx`.
- Confirm Tailwind CSS 4 is wired through `app/globals.css` and `postcss.config.mjs`.
- Keep the current package manager and scripts.

## Deliverables

- Clean baseline app page.
- Confirmed Tailwind usage.
- No broken imports from starter assets.
- Optional `docs/implementation-notes.md` entry for Next.js 16 discoveries.

## Acceptance Criteria

- `npm run lint` passes.
- `npm run build` passes.
- Visiting `/` renders a minimal placeholder or initial landing shell.
- No unnecessary starter logos or Vercel links remain.

## Verification

Run:

```bash
npm run lint
npm run build
```

## Dependencies

None.
