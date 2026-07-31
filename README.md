# Kevin6 Main

The public landing page for `kevin6.com`.

The primary action links to `/toolbox`, which is served by the separate
`kevin6-toolbox` project through a more specific Cloudflare Worker route.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The deployable Cloudflare Worker is emitted to `dist/server`, with static
assets in `dist/client`.

For Cloudflare Workers Builds:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy --config dist/server/wrangler.json`
- Production branch: `main`

Attach the main Worker to the `kevin6.com` Custom Domain. Attach the separate
Toolbox Worker to the `kevin6.com/toolbox*` route and configure that project
with the `/toolbox` base path.
