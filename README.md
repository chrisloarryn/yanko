# Yanko

Yanko is a modern website for a construction company (inspired by [Casas RM](https://casasrm.cl)). Built with **Next.js 16** (App Router), **Tailwind CSS 4**, **React 19**, and **Supabase** for dynamic content and leads.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- [Supabase](https://supabase.com) account

### 1. Clone & Install
```bash
git clone https://github.com/cristobalcontreras/yanko.git
cd yanko
npm ci
```

### 2. Supabase Setup
- Create project at [supabase.com](https://supabase.com)
- Run `docs/supabase-schema.sql` in SQL Editor (creates `projects`, `services`, `site_settings`, `leads`)
- Note URL and `anon/public` key

### 3. Environment
Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

### 4. Run
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## ✨ Features
- Responsive site: Home, Projects (`/proyectos`), Services (`/servicios`), Contact
- Dynamic content from Supabase (published items) with static fallbacks (`lib/data/`)
- Contact form → `leads` table (or localStorage fallback)
- Admin panel: `/ynk/admin` (leads view, local editors for projects/services/settings)
- SEO: sitemap, robots.txt, metadata
- Tailwind 4 utilities, custom `u-*` classes

## 📋 Content Management
- **Supabase**: Insert to `projects`/`services`/`site_settings` (RLS: public read published)
- **Admin**: Local edits → JSON export or Supabase sync (auth pending)
- **Static**: Edit `lib/data/*.ts`

## 🛠 Scripts
- `npm run dev` - Development
- `npm run build` - Production build
- `npm run lint` - Lint
- `npm start` - Production server

**Next.js Custom**: Read `node_modules/next/dist/docs/` per `AGENTS.md`.

## 📚 Specification
[docs/README.md](docs/README.md) - Slice-based dev plan.

## 🚀 Deploy
**Vercel** (rec.):
- GitHub → Vercel
- Add env vars
- Auto-deploys

## Learn More
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
