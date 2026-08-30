import snapshot from "./publications.json";

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: string;
  journal: string | null;
  arxivId: string | null;
  doi: string | null;
  citationCount: number;
  inspireUrl: string;
}

export interface PublicationsSnapshot {
  generatedAt: string;
  author: {
    name: string;
    orcid: string | null;
    inspireId: string;
    inspireUrl: string;
    currentAffiliation: string | null;
  };
  metrics: {
    papersCount: number;
    citationsCount: number;
    hIndex: number;
  };
  publications: Publication[];
}

export const publicationsSnapshot = snapshot as PublicationsSnapshot;

export function publicationsByYear() {
  const groups = new Map<string, Publication[]>();
  for (const pub of publicationsSnapshot.publications) {
    const list = groups.get(pub.year) ?? [];
    list.push(pub);
    groups.set(pub.year, list);
  }
  return [...groups.entries()].sort((a, b) => Number(b[0]) - Number(a[0]));
}
