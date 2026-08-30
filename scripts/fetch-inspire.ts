// Build-time snapshot of INSPIRE-HEP data. Run via `npm run fetch:publications`.
//
// Writes src/content/publications.json, which is committed to the repo and is
// what the site actually renders (see REBUILD_SPEC.md §7). On any failure this
// script exits non-zero WITHOUT touching the existing file, so a broken or
// unreachable INSPIRE API never breaks a deploy — the last-known-good snapshot
// just keeps shipping.
//
// Ported from the old supabase/functions/inspire-hep/index.ts edge function.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import type { Publication, PublicationsSnapshot } from "../src/content/publications";

const AUTHOR_ID = "1799380";
const INSPIRE_API_BASE = "https://inspirehep.net/api";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.resolve(__dirname, "../src/content/publications.json");

interface RawAuthorPosition {
  institution: string;
  current?: boolean;
}

interface RawAuthorResponse {
  metadata: {
    name?: { preferred_name?: string; value?: string };
    positions?: RawAuthorPosition[];
    ids?: { schema: string; value: string }[];
  };
}

interface RawPublicationInfo {
  journal_title?: string;
  journal_volume?: string;
  artid?: string;
  page_start?: string;
  year?: number;
}

interface RawPublicationHit {
  id: string;
  metadata: {
    titles?: { title: string }[];
    authors?: { full_name: string }[];
    earliest_date?: string;
    preprint_date?: string;
    arxiv_eprints?: { value: string }[];
    dois?: { value: string }[];
    publication_info?: RawPublicationInfo[];
    citation_count?: number;
  };
}

async function fetchAuthor() {
  const res = await fetch(`${INSPIRE_API_BASE}/authors/${AUTHOR_ID}`);
  if (!res.ok) throw new Error(`author fetch failed: ${res.status}`);
  const data = (await res.json()) as RawAuthorResponse;
  const metadata = data.metadata;
  const current = (metadata.positions ?? []).find((p) => p.current);
  return {
    name: metadata.name?.preferred_name ?? metadata.name?.value ?? "Unknown",
    orcid: metadata.ids?.find((id) => id.schema === "ORCID")?.value ?? null,
    currentAffiliation: current?.institution ?? null,
  };
}

function formatJournal(pubInfo: RawPublicationInfo | undefined) {
  if (!pubInfo?.journal_title) return null;
  const parts = [pubInfo.journal_title];
  if (pubInfo.journal_volume) parts.push(pubInfo.journal_volume);
  const pageOrArtid = pubInfo.page_start ?? pubInfo.artid;
  let journal = parts.join(" ");
  if (pageOrArtid) journal += `, ${pageOrArtid}`;
  if (pubInfo.year) journal += ` (${pubInfo.year})`;
  return journal;
}

async function fetchPublications(): Promise<Publication[]> {
  const res = await fetch(`${INSPIRE_API_BASE}/literature?sort=mostrecent&size=100&q=a%20A.Zhakenov.1`);
  if (!res.ok) throw new Error(`publications fetch failed: ${res.status}`);
  const data = (await res.json()) as { hits?: { hits?: RawPublicationHit[] } };
  const hits = data.hits?.hits ?? [];

  return hits.map((hit) => {
    const m = hit.metadata;
    const pubInfo = m.publication_info?.[0];
    return {
      id: hit.id,
      title: m.titles?.[0]?.title ?? "Untitled",
      authors: (m.authors ?? []).map((a) => a.full_name),
      year: (m.earliest_date ?? m.preprint_date ?? "").slice(0, 4),
      journal: formatJournal(pubInfo),
      arxivId: m.arxiv_eprints?.[0]?.value ?? null,
      doi: m.dois?.[0]?.value ?? null,
      citationCount: m.citation_count ?? 0,
      inspireUrl: `https://inspirehep.net/literature/${hit.id}`,
    };
  });
}

function computeHIndex(publications: Publication[]): number {
  const sorted = publications.map((p) => p.citationCount).sort((a, b) => b - a);
  let h = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] >= i + 1) h = i + 1;
    else break;
  }
  return h;
}

async function main() {
  const [author, publications] = await Promise.all([fetchAuthor(), fetchPublications()]);

  if (publications.length === 0) {
    throw new Error("INSPIRE returned zero publications — refusing to overwrite the committed snapshot");
  }

  const snapshot: PublicationsSnapshot = {
    generatedAt: new Date().toISOString(),
    author: {
      name: author.name,
      orcid: author.orcid,
      inspireId: AUTHOR_ID,
      inspireUrl: `https://inspirehep.net/authors/${AUTHOR_ID}`,
      currentAffiliation: author.currentAffiliation,
    },
    metrics: {
      papersCount: publications.length,
      citationsCount: publications.reduce((sum, p) => sum + p.citationCount, 0),
      hIndex: computeHIndex(publications),
    },
    publications,
  };

  writeFileSync(OUTPUT_PATH, JSON.stringify(snapshot, null, 2) + "\n");
  console.log(
    `Wrote ${publications.length} publications, ${snapshot.metrics.citationsCount} citations, h-index ${snapshot.metrics.hIndex} to ${OUTPUT_PATH}`,
  );
}

main().catch((err) => {
  console.error("fetch-inspire failed, leaving committed snapshot untouched:", err);
  process.exit(1);
});
