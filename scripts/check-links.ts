// Tiny link checker (REBUILD_SPEC.md §13: "every external link resolves").
// Scans src/content/** for http(s) URLs and HEAD/GETs each one once.
//
// Run: npm run check-links
//
// Note: some publishers (e.g. journals.aps.org, which arxiv DOIs redirect to)
// block scripted requests with a 403 even though the link works fine in a
// real browser. Treat 403s here as "verify manually", not as proof the link
// is dead.

import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.resolve(__dirname, "../src/content");

const URL_RE = /https?:\/\/[^\s"'`)>\]]+/g;

function collectUrls(): Set<string> {
  const urls = new Set<string>();
  for (const file of readdirSync(CONTENT_DIR)) {
    if (!/\.(ts|tsx|json)$/.test(file)) continue;
    const text = readFileSync(path.join(CONTENT_DIR, file), "utf8");
    for (const match of text.matchAll(URL_RE)) {
      urls.add(match[0].replace(/[.,;]+$/, ""));
    }
  }
  return urls;
}

async function checkUrl(url: string): Promise<{ url: string; status: number | string }> {
  try {
    const res = await fetch(url, { method: "GET", redirect: "follow" });
    return { url, status: res.status };
  } catch (err) {
    return { url, status: err instanceof Error ? err.message : "error" };
  }
}

async function main() {
  const urls = [...collectUrls()].sort();
  console.log(`Checking ${urls.length} URLs found in src/content/...\n`);

  const results = await Promise.all(urls.map(checkUrl));
  const broken = results.filter((r) => typeof r.status === "string" || (r.status as number) >= 400);
  const ok = results.filter((r) => !broken.includes(r));

  for (const r of ok) console.log(`  OK   ${r.status}  ${r.url}`);
  if (broken.length) {
    console.log("\nNeeds attention:");
    for (const r of broken) console.log(`  ??   ${r.status}  ${r.url}`);
    console.log(`\n${broken.length} URL(s) did not return 2xx/3xx. Some may be false positives from bot-blocking (see header comment) — verify manually before "fixing".`);
  } else {
    console.log("\nAll URLs returned 2xx/3xx.");
  }
}

main();
