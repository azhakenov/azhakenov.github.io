import { useEffect } from "react";
import { SITE } from "@/config/site";
import { canonicalPath, fullTitle, routeByPath } from "@/content/routes";

interface SeoProps {
  /** Route path, matching an entry in src/content/routes.ts. */
  path: string;
}

/**
 * Keeps the document head in sync with the current route.
 *
 * scripts/prerender.ts writes the same values into a static HTML file per
 * route at build time, so a crawler that never runs JavaScript already sees
 * the right head; this hook covers client-side navigation after that.
 *
 * (This replaced react-helmet-async, which silently wrote nothing here — no
 * data-rh tags in the head, so every route shipped the homepage's title and
 * canonical. There is no SSR in this app, so Helmet had nothing to offer.)
 */
function upsert(
  tag: "meta" | "link",
  keyAttr: string,
  keyValue: string,
  valueAttr: "content" | "href",
  value: string,
) {
  let el = document.head.querySelector<HTMLElement>(`${tag}[${keyAttr}="${keyValue}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(keyAttr, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute(valueAttr, value);
}

export function Seo({ path }: SeoProps) {
  const route = routeByPath(path);

  useEffect(() => {
    if (!route) return;
    const url = new URL(canonicalPath(route).replace(/^\//, ""), SITE.url + "/").toString();
    const title = fullTitle(route);

    document.title = title;
    upsert("meta", "name", "description", "content", route.description);
    upsert("meta", "property", "og:title", "content", title);
    upsert("meta", "property", "og:description", "content", route.description);
    upsert("meta", "property", "og:url", "content", url);
    upsert("meta", "name", "twitter:title", "content", title);
    upsert("meta", "name", "twitter:description", "content", route.description);
    upsert("link", "rel", "canonical", "href", url);
  }, [route]);

  return null;
}
