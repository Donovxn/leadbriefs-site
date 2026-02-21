# LeadBriefs landing page (v1)

Single-page site for LeadBriefs, built with Next.js App Router + TypeScript + Tailwind + shadcn/ui.

## Local development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Build check

```bash
pnpm build
pnpm start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, create a new project and import the repo.
3. Keep default build settings for Next.js.
4. Deploy.
5. After first deploy, update `SITE_URL` in `lib/constants.ts` to your production URL and redeploy.

## Required manual edits

1. Update placeholders in `lib/constants.ts`:
	- `SITE_URL`
	- `LINKEDIN_PROFILE_URL`
	- `STRIPE_DEMO_URL`
	- `SUPPORT_EMAIL`
	- `DEMO_PRICE`
	- `WEEK_PRICE`
2. Add proof images to `public/proof/`:
	- `sample_overview.png`
	- `sample_copy.png`
	- `qa_micro_report.png`
	- `demo_card.png`

## LinkedIn preview refresh

After deploying updates to metadata or OG images:

1. Open LinkedIn Post Inspector.
2. Paste your page URL.
3. Click Inspect to refresh LinkedIn's cached preview.
