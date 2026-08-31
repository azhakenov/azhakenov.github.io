// Single source of truth for per-route head metadata.
//
// Both the runtime <Seo> component and scripts/prerender.ts read this, so the
// title and description a crawler sees in the static HTML can never drift from
// the one React sets after hydration.
//
// Deliberately free of imports: the prerender script loads this file directly
// under tsx, where Vite's "@/" alias and import.meta.env do not exist.

export interface RouteMeta {
  /** Route path, exactly as registered in App.tsx. */
  path: string;
  /** Page title, before the name is appended. */
  title: string;
  description: string;
}

export const NAME = "Abay Zhakenov";

/**
 * The homepage leads with the name — it is the result people search for, and it
 * should read as an identity rather than a section. Sub-pages put the section
 * first so a row of open tabs stays distinguishable.
 */
export function fullTitle(route: RouteMeta): string {
  return route.path === "/" ? `${NAME} — ${route.title}` : `${route.title} | ${NAME}`;
}

export const routes: RouteMeta[] = [
  {
    path: "/",
    title: "Theoretical Physicist",
    description:
      "Abay Zhakenov — PhD candidate in theoretical condensed-matter physics at Rutgers University. Integrable systems, quantum impurities, and the thermodynamic Bethe ansatz.",
  },
  {
    path: "/research",
    title: "Research",
    description:
      "Publications, talks, and research areas — integrable systems, quantum impurities, and the thermodynamic Bethe ansatz.",
  },
  {
    path: "/teaching",
    title: "Teaching",
    description:
      "Lecturer for Honors Physics III at Rutgers, teaching assistant across the physics sequences, quantum computation lecturer, physics olympiad coach, and private tutor.",
  },
  {
    path: "/teaching/resources",
    title: "Teaching Resources",
    description:
      "Reference material for Honors Physics III (PHY 273) and private physics tutoring — math toolkits, problem sheets, and homework sets.",
  },
  {
    path: "/about",
    title: "About",
    description:
      "Background — Kazakhstan, MIPT, the Landau Institute, Rutgers — plus soccer and judo.",
  },
  {
    path: "/cv",
    title: "CV",
    description: `Curriculum vitae for ${NAME} — publications, talks, teaching, and awards.`,
  },
];

/**
 * The URL a route is actually served at.
 *
 * Static hosts (GitHub Pages, `vite preview`) serve these pages as directory
 * indexes — dist/research/index.html answers /research/, and a request for
 * /research redirects to it. Canonical links and the sitemap therefore use the
 * trailing-slash form, so they name the URL that returns the page directly
 * rather than one that redirects.
 */
export function canonicalPath(route: RouteMeta): string {
  return route.path === "/" ? "/" : `${route.path}/`;
}

export function routeByPath(path: string): RouteMeta | undefined {
  return routes.find((r) => r.path === path);
}
