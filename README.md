# Group 7 Life

A dual-app Nx workspace featuring a Next.js storefront (`g7-store-web`) and a Nest-powered API (`g7-store-api`). Shared
TypeScript libs (`libs/shared-*`) keep the product catalogue, DTOs, and config contracts aligned between both sides.

## Getting started

```bash
npm install
npm run start:api # runs Nest on http://localhost:3333/api
npm start        # runs Next on http://localhost:4200
```

Both apps watch the shared libs, so updating `libs/shared-types` or `libs/shared-products` immediately updates the API and UI.

## Environment variables

Create a `.env.local` (frontend) and `.env` (backend) or copy the samples below. Everything funnels through `libs/config` so
keys stay in sync.

```
# apps/g7-store-api/.env
PORT=3333
APP_BASE_URL=http://localhost:4200
API_BASE_URL=http://localhost:3333/api
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
PRINTFUL_API_TOKEN=
```

```
# apps/g7-store-web/.env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:3333/api
```

Without Stripe/Printful secrets, the payments service falls back to mocked URLs so you can develop the flow locally.

## Workspace layout

```
apps/
  g7-store-web           # Next.js storefront (App Router + Tailwind)
  g7-store-web-e2e       # Playwright harness
  g7-store-api           # Nest API (Stripe + Printful orchestration)
  g7-store-api-e2e       # Jest e2e hooks
libs/
  shared-types           # DTO + cart/customer contracts
  shared-products        # Product catalogue + helpers
  config                 # zod-based env loader
  core/utils             # shared UI helpers (cn, currency formatter)
```

## Nx commands

```bash
nx graph               # visualize dependency graph
nx lint                # lint all projects respecting scope tags
nx test g7-store-web   # run Jest on the Next app
nx serve g7-store-api  # run the Nest API with live reload
```

CI can use `nx affected -t lint,test,build,typecheck` to enforce module boundaries (scope tags are already wired up).

## Frontend container (Cloud Run)

The Next.js storefront can be built as a standalone container via `Dockerfile.frontend`. The TikTok embed env values are
baked into the image so Cloud Run only needs the runtime port.

```bash
# build locally (or npm run docker:build:frontend)
docker build -f Dockerfile.frontend -t g7-store-web:local .

# run locally (or npm run docker:run:frontend)
docker run --rm -p 8080:8080 g7-store-web:local

# push the same image for Cloud Run once ready
docker tag g7-store-web:local gcr.io/<project>/g7-store-web:latest
docker push gcr.io/<project>/g7-store-web:latest
```

Cloud Run automatically injects `PORT`; the container listens on 8080 by default and runs `next start dist/apps/g7-store-web`.
