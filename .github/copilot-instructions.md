# LeadBriefs repo instructions

## Scope
- Keep this repo as a single-page landing site.
- Favor minimal, focused edits over broad refactors.
- Use existing structure in `app/`, `components/sections/`, and `lib/`.

## Compliance guardrails (non-negotiable)
- DM-only language. No call-related wording.
- Manual sending only. No bot or auto-sending claims.
- No LinkedIn scraping claims.
- No outcome promises.
- Proof section must only show real output images (spreadsheets + QA report).

## Copy and content
- Keep all user-facing copy in `lib/copy.ts` when practical.
- Keep URLs, email, and price placeholders in `lib/constants.ts`.
- Preserve exact offer sentence unless explicitly asked to change it.

## UI and implementation
- Use Next.js App Router + TypeScript + Tailwind.
- Use shadcn/ui primitives already in repo.
- Keep animations subtle and minimal; respect reduced motion.
- Use `next/image` for image rendering.
- If proof images are missing, show graceful placeholder text without breaking build.

## SEO and metadata
- Keep metadata in `app/layout.tsx`.
- Keep OG/Twitter image routes in file-convention routes.
- Keep sitemap and robots generated from `SITE_URL`.
