# Localhost Testing Guide

This guide shows how to run the Athena website locally for development and QA.

## Requirements

- Node.js 18+
- npm (or pnpm/bun if you prefer)
- GNU Make (preinstalled on most macOS systems)

## Quick Start

From the project root:

```sh
make install
make dev
```

Then open:

```text
http://localhost:5173
```

## Make Targets

- `make install` - install dependencies
- `make dev` - run Vite dev server on localhost
- `make build` - create production build
- `make preview` - preview production build on localhost
- `make lint` - run ESLint
- `make test` - run tests
- `make clean` - remove build output

## Environment Variables

The website reads `VITE_DASHBOARD_URL` for the dashboard link.

By default, localhost dashboard URLs (like `http://localhost:8080`) are ignored for safety and the site falls back to the production dashboard URL.
To intentionally use a local dashboard URL, set `VITE_ALLOW_LOCAL_DASHBOARD=true`.

Example:

```sh
VITE_DASHBOARD_URL=https://dashboard.athenadatalabs.com make dev
```

Use local dashboard app explicitly:

```sh
VITE_DASHBOARD_URL=http://localhost:8080 VITE_ALLOW_LOCAL_DASHBOARD=true make dev
```

## Troubleshooting

If dependencies fail to install:

```sh
rm -rf node_modules package-lock.json
make install
```

If port 5173 is busy:

```sh
npm run dev -- --port 4173
```
