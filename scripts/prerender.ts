// Writes one static HTML file per route into dist/, each with its own head.
// Run after `vite build` (see the "build" script in package.json).
//
// Why: the site is client-rendered, so anything <Seo> sets happens only after
// JavaScript runs. Google executes JS; Slack, LinkedIn, iMessage and most other
// link-preview scrapers do not — they read the raw HTML and stop. Without this
// step every route serves index.html's head, so a link to /research previews as
// the homepage and declares the homepage as its canonical URL.
//
// This rewrites the head only. The body is still rendered by React on load, so
// this is not full SSR; it is the metadata half, which is the half crawlers use.
//
// A useful side effect: because dist/research/index.html now exists, GitHub
// Pages serves it directly instead of falling through to the 404.html redirect,
// so deep links land without a bounce. 404.html still covers unknown paths.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { canonicalPath, fullTitle, routes } from "../src/content/routes.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const indexPath = join(dist, "index.html");

/** Escape for use inside a double-quoted HTML attribute. */
function attr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function text(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Replace a tag's attribute value in place. Throws if the tag is missing, so a
 * change to index.html that drops one of these can never silently produce
 * pages with a stale head.
 */
function replaceTag(
  html: string,
  description: string,
  pattern: RegExp,
  replacement: string,
): string {
  if (!pattern.test(html)) {
    throw new Error(
      `prerender: could not find ${description} in dist/index.html — ` +
        `index.html changed shape, and the prerendered pages would be wrong.`,
    );
  }
  return html.replace(pattern, replacement);
}

function buildPage(template: string, path: string, title: string, description: string, url: string) {
  let html = template;

  html = replaceTag(html, "<title>", /<title>[\s\S]*?<\/title>/, `<title>${text(title)}</title>`);

  const metas: Array<[string, string, string]> = [
    ["name", "description", description],
    ["property", "og:title", title],
    ["property", "og:description", description],
    ["property", "og:url", url],
    ["name", "twitter:title", title],
    ["name", "twitter:description", description],
  ];

  for (const [keyAttr, keyValue, value] of metas) {
    const pattern = new RegExp(`<meta\\s+${keyAttr}="${keyValue}"\\s+content="[^"]*"\\s*/?>`);
    html = replaceTag(
      html,
      `<meta ${keyAttr}="${keyValue}">`,
      pattern,
      `<meta ${keyAttr}="${keyValue}" content="${attr(value)}" />`,
    );
  }

  html = replaceTag(
    html,
    '<link rel="canonical">',
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${attr(url)}" />`,
  );

  return html;
}

function main() {
  const template = readFileSync(indexPath, "utf8");

  // The canonical origin is whatever index.html already declares, so this
  // script never needs its own copy of the site URL to fall out of sync.
  const originMatch = template.match(/<link\s+rel="canonical"\s+href="([^"]*)"/);
  if (!originMatch) throw new Error("prerender: no canonical link in dist/index.html");
  const origin = new URL(originMatch[1]).origin;

  let written = 0;
  for (const route of routes) {
    const title = fullTitle(route);
    const url = new URL(canonicalPath(route), origin).toString();
    const html = buildPage(template, route.path, title, route.description, url);

    // "/" overwrites dist/index.html; everything else gets its own directory.
    const outPath =
      route.path === "/"
        ? indexPath
        : join(dist, route.path.replace(/^\//, ""), "index.html");

    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf8");
    written += 1;
    console.log(`  ${route.path.padEnd(22)} -> ${outPath.slice(dist.length + 1)}`);
  }

  console.log(`prerender: wrote ${written} page${written === 1 ? "" : "s"}`);
}

main();
