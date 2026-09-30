# NaijaGov Web

The frontend web app for NaijaGov: a marketing landing page plus a signed-in
user area. This repo is presentation-layer only — no backend, no real
authentication, no extension code. See [CLAUDE.md](CLAUDE.md) for the full
scope and conventions.

## Prerequisites

- **Node 20.9 or newer** (required by Next.js 16). Check with `node -v`.
- **npm** (the project is set up with an `npm` lockfile — don't mix in yarn/pnpm/bun).

## Setup

```bash
git clone <this-repo-url>
cd Web-client
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The landing page is
served from `src/app/page.tsx`, and edits hot-reload.

There is no `.env` to configure and nothing to seed — all data is mocked in
`src/mocks/` and served through `src/lib/api/`.

### Seeing the signed-in area

Auth is simulated: a mock session in React context, with no real login. In
development, a **dev: signed in / signed out** toggle floats in the bottom-left
corner of every page (it does not render in production builds) — use it to
flip into the signed-in state and reach `/app/profile`, `/app/information`,
`/app/activity`, and `/app/settings`.

## Scripts

```bash
npm run dev        # next dev — local development server
npm run build      # next build — production build, typechecks as part of it
npm run start      # serve the production build (run `build` first)
npm run lint       # eslint (flat config, eslint-config-next)
```

There is no `npm run test` script yet; see the note on the test stack in
[CLAUDE.md](CLAUDE.md#stack).

## Project structure

See the [Structure](CLAUDE.md#structure) section of `CLAUDE.md` for the
directory layout, routing conventions, and where things belong.
