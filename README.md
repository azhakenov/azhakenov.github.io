# abayzhakenov.com

Personal / academic site for Abay Zhakenov — PhD candidate in theoretical
condensed-matter physics, Rutgers University. Static site, no backend, no
database, no secrets in the repo. See [`REBUILD_SPEC.md`](./REBUILD_SPEC.md)
for the design rationale; this file is just how to run and deploy it.

## Stack

Vite + React 18 + TypeScript + Tailwind + React Router + shadcn/ui.

## Getting started

```sh
npm install
npm run dev
```

## Content

All copy and structured data (talks, publications, education, awards,
teaching history, sports) lives in typed files under `src/content/`, not
inline in components. Update the site by editing an array there, not by
hunting through JSX.

Publications are the one exception that's generated rather than hand-edited:
`src/content/publications.json` is a build-time snapshot fetched from
INSPIRE-HEP, committed to the repo. To refresh it:

```sh
npm run fetch:publications
```

`npm run build` does this automatically before building (via
`fetch:publications:safe`), and if INSPIRE is unreachable the build still
succeeds using the last committed snapshot — a third-party API outage should
never break a deploy.

## Link checking

```sh
npm run check-links
```

Scans `src/content/**` for `http(s)://` URLs and reports any that don't
return 2xx/3xx. Some publishers (journals.aps.org in particular) block
scripted requests with a 403 even though the link works in a real browser —
treat those as "verify manually," not as confirmed-dead.

## Hosting / base path

The site is built to work from any of the three standard GitHub Pages setups
without a code change — see `src/config/site.ts` and `vite.config.ts`.
Default is root-relative (`base: "/"`), which covers a user site
(`abayzhakenov.github.io`) or a custom domain (`abayzhakenov.com`). For a
project repo instead, set `VITE_BASE_PATH=/<repo-name>/` when building, and
update `basename` accordingly (it already reads from the same value) and the
redirect target in `public/404.html`.

If serving from a custom domain, add a `public/CNAME` file containing the
domain.

Deployment is `.github/workflows/deploy.yml` — builds and publishes `dist/`
to GitHub Pages on every push to `main`, or on demand via
`workflow_dispatch`.

## Still needed (see REBUILD_SPEC.md §12)

- **Hero paragraph and research overview prose** — drafted in
  `src/content/bio.ts` (`heroSummary`, `researchOverview`). Written in Abay's
  voice per the spec, but goes out under his name — review before shipping.
- **Hosting choice** — user site vs. custom domain vs. project repo, see
  above.
- **"In preparation" publications** — not included; add a section to
  `src/content/publications.ts` / the Publications component if wanted.
