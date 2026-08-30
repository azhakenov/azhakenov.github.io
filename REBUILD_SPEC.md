# Rebuild spec — abayzhakenov.com

**For:** whoever (or whatever) builds v2 of this site.
**From:** review of the existing Lovable codebase in this folder, August 2026.
**Owner:** Abay Zhakenov — PhD candidate, theoretical condensed matter physics, Rutgers.

Read this whole document before writing code. Section 12 lists the things only Abay
can supply; flag them rather than inventing values.

---

## 1. Why this rebuild exists

The current site was generated in Lovable. It works, but it carries three problems:

1. **It's built for the wrong audience.** Abay is applying for postdoc positions
   through the 2026–27 cycle. The primary reader of this site is a search committee
   member who has thirty seconds, has just read a cover letter, and wants to answer:
   *is this person's work interesting, and are they real?* The current homepage
   answers neither — it shows a name, one line of title, and a photo.
2. **It has a runtime dependency it doesn't need.** Publications are fetched at
   page load through a Supabase edge function. If that call fails, the Publications
   section renders the words "No publications found." On the page a committee reads.
3. **It has live defects.** Enumerated in section 11.

The rebuild targets static hosting on GitHub Pages, no backend, no database, no
secrets in the repo.

---

## 2. Decisions already made

These are settled. Don't relitigate them in the build.

| Decision | Choice |
|---|---|
| Blog / CMS | **Cut entirely.** Delete the Supabase blog, the admin login, the post editor, and the `blog_posts` migrations. Nothing replaces it for now. |
| Supabase | **Removed completely.** No client, no edge functions, no `.env`. |
| Sports page | **Kept, but out of the primary nav.** Reached from the About page and the footer. |
| Hosting | **Not yet decided** between a user site, a custom domain, and a project repo. Build so that switching is a one-line change (section 4). |
| Framework | React + Vite + TypeScript + Tailwind, as now. This is a redesign, not a framework migration. |
| Component library | Keep shadcn/ui, but **prune it**. The repo currently ships ~50 UI primitives; most are unused. Delete every component in `src/components/ui/` that the new site doesn't import. |

---

## 3. Audience and tone

Design every decision against three readers, in priority order:

1. **A search committee member.** Wants, above the fold: what field, what problem,
   what results, is there a CV. Then: publications, with links that work.
2. **A potential collaborator or seminar host.** Wants the research narrative, the
   talks list, and a working email address.
3. **A student Abay tutors or teaches.** Wants the Teaching page.

The tone is a working physicist's, not a startup's. Avoid the register the current
site drifts into — "Exploring the quantum world through integrable systems,"
"Sharing the joy of physics." Say what the work is. Concrete beats warm.

Every claim on the site should be checkable by clicking something.

---

## 4. Stack, build, and hosting

**Stack:** Vite + React 18 + TypeScript + Tailwind + React Router + shadcn/ui + lucide-react.

**GitHub Pages needs three things the current setup lacks:**

1. **A configurable base path.** Put it in one place:

   ```ts
   // src/config/site.ts
   export const SITE = {
     base: import.meta.env.BASE_URL,        // '/' or '/website/'
     url: 'https://abayzhakenov.com',       // canonical origin, no trailing slash
     // ...rest of site config, section 6
   }
   ```

   `vite.config.ts` reads `base` from an env var with `'/'` as the default, so the
   three hosting options differ by one line:
   - user site `abayzhakenov.github.io` → `base: '/'`
   - custom domain `abayzhakenov.com` → `base: '/'` plus a `public/CNAME` file
   - project repo → `base: '/<repo-name>/'`

   Pass the same value to React Router as `basename`.

2. **SPA fallback.** GitHub Pages 404s on a direct hit to `/academic`. Two options —
   pick the second:
   - `HashRouter` (ugly URLs, bad for a CV)
   - **A `public/404.html` that redirects into the SPA** (the standard
     `spa-github-pages` trick), plus the matching restore snippet in `index.html`.
     Keeps clean URLs. Do this one.

3. **A deploy workflow.** `.github/workflows/deploy.yml` — checkout, setup-node,
   `npm ci`, `npm run build`, `actions/deploy-pages` from `dist/`. Trigger on push
   to `main` and on `workflow_dispatch`.

**Also add:** `public/robots.txt` (allow all, point at the sitemap) and a generated
`public/sitemap.xml`.

---

## 5. Information architecture

Five routes. That's it.

```
/            Home
/research    Research  (was /academic)
/teaching    Teaching
/about       About + Sports
/cv          CV (or a direct PDF link — see below)
```

**Primary nav:** Research · Teaching · About. Plus a visually distinct **CV** link.
Home is the wordmark. Sports lives inside About; it is not a nav item.

**Rename `/academic` → `/research`,** and keep a redirect from `/academic` so any
link Abay has already put in an email still resolves.

---

## 6. Content model

All content lives in typed data files under `src/content/`, not inline in
components. This is the single most important structural change: right now the
talks list, the awards list, and the education history are hardcoded inside JSX,
which makes updating the site a code-editing exercise.

```
src/content/
  site.ts          name, title, email, location, links (ORCID, INSPIRE, Scholar, arXiv, GitHub, LinkedIn)
  bio.ts           short bio (2 sentences), medium bio (1 paragraph), long bio (About page)
  research.ts      research areas; the "highlights" narratives
  publications.ts  build-time snapshot from INSPIRE (section 7)
  talks.ts         talks & presentations
  education.ts     degrees
  experience.ts    research positions
  awards.ts        awards & honors
  teaching.ts      courses, teaching history, tutoring
  sports.ts        soccer, wrestling
```

Each exports a typed array. Components render, they don't hold data. Adding a talk
should mean adding one object to one array.

**Carry over verbatim** the existing content in: `Talks.tsx` (9 entries),
`AwardsSection.tsx` (5), `EducationSection.tsx` (3),
`ResearchExperienceSection.tsx` (2), `RecentHighlights.tsx` (2 narratives with
their arXiv/PRB/PRD links and the two figures), `ResearchAreas.tsx` (5),
and the whole `teaching/` and `sports/` trees. This content is good. It's the
*framing* that needs work, not the facts.

**Add to awards** (currently missing):
- Peter Lindenfeld Graduate Fellowship, Rutgers, 2026
- Louis Bevier Dissertation Completion Fellowship — alternate, Rutgers, 2026

**Do not carry over** `RecentUpdates.tsx`. It is dead code containing stale
placeholder text ("New paper on Kondo impurity models, December 2024").

---

## 7. Publications — the important architectural change

**Current:** browser → Supabase edge function → INSPIRE-HEP API, at page load.
Single point of failure, and the failure mode is an empty Publications section.

**New:** three layers, in this order.

1. **Build-time snapshot (the source of truth).** A script, `scripts/fetch-inspire.ts`,
   run via `npm run fetch:publications`, hits INSPIRE directly and writes
   `src/content/publications.json`. That file is **committed to the repo**. The site
   renders it. The site therefore works with no network, no API, no backend.

2. **Refresh on deploy.** The GitHub Action runs the fetch script before building,
   so every deploy picks up new citations. If INSPIRE is down, the script exits
   non-zero *without writing*, the committed snapshot is used, and the build still
   succeeds. Never let a third-party API break a deploy.

3. **Optional live enhancement.** After mount, fetch INSPIRE client-side and, if it
   returns more or newer records, swap them in. INSPIRE's API sends permissive CORS
   headers, so this works from the browser with no proxy. If it fails, nothing
   visible happens — the snapshot is already on screen. This layer is optional;
   skip it if it adds complexity.

**Reuse the existing fetch logic.** `supabase/functions/inspire-hep/index.ts`
already has correct parsing for author metadata, arXiv IDs, DOIs, journal strings,
and h-index. Port it to the Node script and delete the edge function. The values
it needs:

```
INSPIRE author ID:  1799380
Author search key:  a A.Zhakenov.1
API base:           https://inspirehep.net/api
```

**Presentation of the list:**
- Group by year, newest first.
- Bold Abay's name in every author list. This matters more than it sounds —
  it's how a reader locates him in a five-author paper at a glance.
- Show journal reference where published, "arXiv:XXXX.XXXXX" where not.
- Badge preprints as **Preprint** and published work with the journal name.
- Every entry gets arXiv, DOI, and INSPIRE links where available.
- Citation counts: keep them, but make them quiet — small, muted, right-aligned.
  For someone at this career stage the paper titles carry the weight.

---

## 8. Page-by-page

### 8.1 Home

The current homepage is the weakest part of the site. Rebuild it as follows.

**Hero.** Two columns on desktop, stacked on mobile.
- Name, large.
- One line of position: *PhD Candidate in Theoretical Physics, Rutgers University —
  expected May 2027.* The expected date is deliberate; it tells a committee he is
  on the market now.
- **Two or three sentences of actual research content.** Not "exploring the quantum
  world." Something closer to: *I use exact methods — Bethe ansatz, thermodynamic
  Bethe ansatz, generalized hydrodynamics — to study quantum impurities in
  one-dimensional systems. Recent work develops a TBA framework for open boundaries
  with boundary bound modes, and applies it to Kondo physics in superconductors.*
  Abay should write the final wording; draft something in this register.
- **An action row, above the fold:** `CV (PDF)` · `Email` · `arXiv` · `INSPIRE` ·
  `ORCID` · `Google Scholar`. This is the single highest-value addition to the site.
- Profile photo.

**Selected work.** Two or three cards pulling the `RecentHighlights` narratives,
each with its figure and its representative-paper links. These narratives are
genuinely good and are currently buried far down the Academic page. Promote them.

**Three-up section links.** Research · Teaching · About. Keep the card layout but
**give each card a one-line description** — the current cards are a title and an
icon and communicate nothing.

Nothing else. Resist adding a "Recent Updates" feed; it will go stale by November.

### 8.2 Research

Section order, top to bottom, on the reasoning that a committee reads downward
and should hit substance before credentials:

1. **Header** — name, position, email, ORCID, INSPIRE, Scholar, CV link.
2. **Metrics** — papers / citations / h-index. Keep, keep small.
3. **Research overview** — one or two paragraphs of prose. New content. This is the
   closest thing the site has to a research statement and it doesn't exist yet.
4. **Research areas** — the five-card grid from the orphaned `ResearchAreas.tsx`.
   Bring it back.
5. **Selected work / highlights** — the two narratives, in full.
6. **Publications** — grouped by year (section 7).
7. **Talks & presentations** — as now, reverse chronological.
8. **Research experience** — Rutgers CMT, Landau Institute.
9. **Education** — three degrees.
10. **Awards & honors** — with the two 2026 additions.

Keep the `QuickJumpNav`. It's a nice piece of work and this page is long.
Update its section IDs to match the new order.

### 8.3 Teaching

Keep the existing structure and content — hero, courses, teaching history, tutoring.
Two changes:
- Move the data into `src/content/teaching.ts`.
- Rewrite the hero subhead away from "Sharing the joy of physics through teaching,
  tutoring, and mentoring the next generation of scientists." State the actual
  scope: Rutgers TA across intro through intermediate sequences, quantum computation
  lecturer, olympiad coaching, private tutoring. Some postdoc applications ask for a
  teaching statement; this page should be able to stand in for one.

### 8.4 About

A new page, absorbing the personal material.
- Long-form bio: Kazakhstan → MIPT → Landau Institute → Rutgers. The trajectory is
  interesting and the site currently doesn't tell it anywhere.
- Interests outside physics.
- **Sports section** — soccer (goalkeeper, Best GK 2019 and 2021, Goal Diggers,
  Dynamo) and wrestling, with the existing photographs. Carry over
  `SoccerSection.tsx` and `WrestlingSection.tsx` essentially as they are; they're
  the most personable thing on the site and just shouldn't be in the top nav.

### 8.5 CV

Simplest version that works: `public/cv.pdf`, linked from the nav, the home hero,
and the research page header. Put the last-updated date next to the link.

If a `/cv` route is wanted instead, render the education / experience / awards /
publications data as an HTML CV with a prominent "Download PDF" button. Optional.
The PDF is the deliverable; the HTML page is a nicety.

---

## 9. Design direction

The existing palette — warm terracotta primary, sage secondary, gold accent, cream
background, Cormorant Garamond display + Source Sans 3 — is **good and should be
kept**. It's distinctive without being loud, and it already has a working dark mode.
Don't replace it with another blue-and-grey academic template.

What to change:

- **Density.** Nearly every section is `py-20` and every card is `p-6`. The site
  reads as very airy and very samey — you scroll a long way for little information.
  Tighten section padding, vary it by section importance, and let the publications
  and talks lists be denser than the highlight cards.
- **Hierarchy.** Right now a talk, an award, and a paper all render as the same
  bordered card with the same shadow. Differentiate: papers and talks want compact
  list rows; highlights want cards; awards want a simple two-column list.
- **Typographic scale.** Use Cormorant Garamond for headings only, and let it be
  larger and more confident on the home hero. Body text at ~17px, measure capped
  around 68–72 characters.
- **Motion.** Keep `animate-fade-in-up`, but respect `prefers-reduced-motion`.
- **Dark mode.** Keep the toggle. Persist the choice to `localStorage` and default
  to the system preference.

---

## 10. Quality bar

**Accessibility.** Semantic landmarks (`header`/`nav`/`main`/`footer`), one `h1` per
page, visible focus rings, alt text on every image (the figures in the highlights
need real descriptions, not the paper title), and AA contrast in both themes —
check the muted-foreground values, they're marginal in light mode.

**Performance.** The photos in `src/assets/` are up to 400 KB each and are served
at whatever size they were uploaded. Convert to WebP, generate 2–3 widths, lazy-load
everything below the fold. Target: Lighthouse ≥ 95 on all four categories.

**SEO and metadata.** Fix the Lovable leftovers (section 11). Add:
- Per-page `<title>` and `<meta name="description">` — a static SPA needs
  `react-helmet-async` or equivalent.
- Real Open Graph and Twitter card images — a simple card with name, title,
  and institution is fine.
- **JSON-LD `Person` schema** in `index.html`, with `affiliation`, `sameAs`
  (ORCID, INSPIRE, Scholar, arXiv, LinkedIn), and `knowsAbout`. This is what makes
  a search for "Abay Zhakenov physics" resolve to this site rather than to a
  profile page on someone else's domain.
- `sitemap.xml`, `robots.txt`, and a correct `<link rel="canonical">` matching
  whichever hosting option is chosen.

**Repo hygiene.** Delete the Lovable README and write a real one. Remove `.env`,
`bun.lockb` (keep one lockfile), `.DS_Store` files, `src/tailwind.config.lov.json`,
and `public/placeholder.svg`. Add `.env*` and `.DS_Store` to `.gitignore` — neither
is there now.

---

## 11. Defects in the current site — verify each is gone

- [ ] **`src/components/academic/InspireProfile.tsx:89`** — the Google Scholar link
      is `https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID`. Dead
      placeholder, live on the site, on the most-read page.
- [ ] **Publications have no offline fallback** — fixed by section 7.
- [ ] **`/blog` is orphaned** — the route, `BlogHero`, `BlogList`,
      `BlogPostContent`, and three admin pages exist but nothing links to them.
      Resolved by cutting the blog.
- [ ] **`RecentUpdates.tsx` and `ResearchAreas.tsx` are imported by nothing.**
      Delete the first, restore the second.
- [ ] **`index.html` ships Lovable's defaults** — `og:image` and `twitter:image`
      point at `lovable.dev/opengraph-image-p98pqg.png`, `twitter:site` is
      `@Lovable`, and the favicon is hotlinked from a
      `storage.googleapis.com/gpt-engineer-file-uploads/...` URL. Replace all four;
      use the `public/favicon.png` already in the repo.
- [ ] **`<link rel="canonical">` claims `https://abayzhakenov.com`** while the site
      serves from `abayzhakenov.lovable.app`. Make it match reality.
- [ ] **"PhD Student" throughout** — should be "PhD Candidate," with the expected
      May 2027 defense stated on the home hero and the research header.
- [ ] **No CV anywhere on the site.**
- [ ] **Awards list is missing both 2026 fellowships.**
- [ ] **`.env` is committed and not gitignored.** The keys are Vite-public and
      therefore not a secret, but the file shouldn't be in the repo — and after
      section 2 there's no Supabase to configure anyway.

---

## 12. Needs Abay's input — do not invent these

1. **Google Scholar profile ID** — to replace the placeholder.
2. **ORCID** — the code reads it from INSPIRE, but it should also be hardcoded in
   `site.ts` as a fallback and used in the JSON-LD.
3. **`cv.pdf`** — the current version, dropped into `public/`.
4. **Hosting choice** — user site, custom domain, or project repo (section 4).
5. **The home hero research paragraph** and **the research overview prose**
   (section 8.2, item 3). Draft these, but they go out under his name — he edits.
6. **Whether to list the two 2026 fellowships** as awards, and how to phrase the
   Bevier alternate.
7. **Papers in preparation** — memory of the current work suggests there are
   in-progress papers not on INSPIRE. Decide whether the Publications section gets
   an "In preparation" subsection. For a job-market site, usually yes.

---

## 13. Definition of done

- `npm run build` produces a `dist/` that works when served from a subdirectory.
- Every route loads on a hard refresh at its own URL.
- No network request is required for the page to render its content.
- No Supabase, no `.env`, no secrets, no placeholder strings anywhere in `src/`.
- A CV PDF is reachable in one click from the homepage.
- Lighthouse ≥ 95 across the board on the home and research pages.
- Every external link resolves — write a tiny link-check script and run it.
- Dark mode has no unreadable text on any page.
- The site says what Abay works on within the first screen, without scrolling.
