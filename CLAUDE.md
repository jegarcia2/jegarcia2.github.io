# Portfolio — Claude Context

Professional web portfolio for Jose Garcia (jegarcia2).

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 |
| UI Library | Ant Design 6 (available, use when useful) |
| Fonts | Geist Sans + Geist Mono (CSS variables) |
| React | v19 with React Compiler enabled |

## Conventions

- Path alias `@/*` → `src/*`
- Components live in `src/components/<Name>/index.tsx`
- Add `'use client'` only when the component uses hooks or browser APIs
- Prefer `next/image` over `<img>` for all images
- Dark-first: background is `#0B0F19`, avoid hardcoding light-mode assumptions
- No comments unless the WHY is non-obvious

## Project structure

```
src/
  app/
    layout.tsx        # Root layout, metadata, Geist fonts
    page.tsx          # Home page — composes all sections in order
    globals.css       # Tailwind import + CSS custom properties
  components/
    Navbar/           # Fixed top nav with anchor links
    Hero/             # Full-screen intro section
    Skills/           # Skills grid with proficiency bars
    Projects/         # Project cards (image, tags, links)
    Testimonials/     # Quote cards with author info
    Contact/          # Contact form (wire up email service when ready)
  data/
    portfolio.ts      # All editable content: skills[], projects[], testimonials[]
  types/
    index.ts          # Shared TS interfaces: Skill, Project, Testimonial
```

## Sections & IDs

Each section has an `id` that matches the Navbar anchor links:

| Component | Section ID |
|---|---|
| Hero | `#hero` |
| Skills | `#skills` |
| Projects | `#projects` |
| Testimonials | `#testimonials` |
| Contact | `#contact` |

## Content to fill in

All real content lives in `src/data/portfolio.ts` — edit there, not inside components.
Placeholder `TODO` comments mark copy, photo, and email-service integration points.

## Contact form

The `Contact` component has a fake async submit stub. Wire it up to a real email service when ready — good options: **Resend**, **EmailJS**, **Formspree**. The submit handler is in `src/components/Contact/index.tsx`.

## Commands

```bash
npm run dev     # start dev server on http://localhost:3000
npm run build   # production build
npm run lint    # ESLint check
```
