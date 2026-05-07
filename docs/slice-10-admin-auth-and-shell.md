# Slice 10: Admin Auth And Shell

## Objective

Create the protected admin area at `/ynk/admin`.

## Scope

- `/ynk/admin/login`
- `/ynk/admin`
- Admin route protection.
- Admin shell layout.
- Logout flow.
- Basic dashboard.

## Admin Navigation

- Dashboard
- Proyectos
- Servicios
- Sistemas
- Contenido
- Configuracion
- Leads

## Deliverables

- Admin login page.
- Admin layout/shell components.
- Auth guard/middleware or server redirect.
- Dashboard placeholder with summary cards.

## Acceptance Criteria

- Unauthenticated users cannot access `/ynk/admin` pages.
- Authenticated users can access dashboard.
- Public layout does not leak into admin if using separate route layout.
- Logout clears session and redirects to login.

## Verification

- Test unauthenticated access.
- Test login.
- Test logout.
- `npm run lint`
- `npm run build`

## Dependencies

- Slice 09.
