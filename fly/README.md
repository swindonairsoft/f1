# Fly.io Deployment

Two services need to be deployed: `api` and `realtime`.

## Prerequisites
Install flyctl: https://fly.io/docs/hands-on/install-flyctl/
Then login: `fly auth login`

## Deploy API service

```bash
fly launch --config fly/fly.api.toml --no-deploy
fly secrets set ORIGIN=https://your-vercel-url.vercel.app --config fly/fly.api.toml
fly deploy --config fly/fly.api.toml
```

Note the URL (e.g. https://chriszulu-f1-api.fly.dev)

## Deploy Realtime service

```bash
fly launch --config fly/fly.realtime.toml --no-deploy
fly secrets set ORIGIN=https://your-vercel-url.vercel.app --config fly/fly.realtime.toml
fly deploy --config fly/fly.realtime.toml
```

Note the URL (e.g. https://chriszulu-f1-realtime.fly.dev)

## Update Vercel env vars

In your Vercel project settings, update:
- `API_URL` = https://chriszulu-f1-api.fly.dev
- `NEXT_PUBLIC_LIVE_URL` = https://chriszulu-f1-realtime.fly.dev

Then redeploy on Vercel.
