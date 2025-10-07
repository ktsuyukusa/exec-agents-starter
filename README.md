
# exec-agents (TurboRepo Monorepo)

Vercel + Supabase native stack with OpenAI Agent Builder integration.

## Structure
- `apps/chief-of-staff` — Next.js (app router) with API routes and Auth scaffold.
- `packages/shared/agents-core` — agent schemas & tool registry (OpenAI).
- `packages/shared/i18n` — i18n config & extractor checks.
- `packages/shared/utils` — shared TS utils.

## Quick Start
1) `pnpm i`
2) Copy `.env.example` to `.env` in each app and fill values.
3) `pnpm dev`

## Connect to Supabase
- Create a Supabase project (dev/staging/prod).
- In **Supabase → Project Settings → API**, grab `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
- Put them in `apps/chief-of-staff/.env.local`.

## Connect to Vercel (GitHub)
- Import this repo in Vercel.
- Set env vars under Project → Settings → Environment Variables.
- Push to `main` to auto-deploy.

## OpenAI Agent Builder
- Add your OpenAI key and Agent IDs to env.
- Tools are defined under `packages/shared/agents-core`.

## Sora Jobs
- Call Sora API from API routes.
- Save output to Supabase Storage (not Vercel bandwidth).
