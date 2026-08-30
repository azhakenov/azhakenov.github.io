import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { publicationsByYear } from "@/content/publications";

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((author, i) => (
        <span key={author}>
          {author.startsWith("Zhakenov") ? <strong className="font-semibold text-foreground">{author}</strong> : author}
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </>
  );
}

export function Publications() {
  const years = publicationsByYear();

  return (
    <section id="publications" className="py-14 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-8">Publications</h2>

          <div className="space-y-10">
            {years.map(([year, pubs]) => (
              <div key={year}>
                <h3 className="font-display text-xl font-semibold text-muted-foreground mb-3">{year}</h3>
                <div className="divide-y divide-border/50">
                  {pubs.map((pub) => (
                    <div key={pub.id} className="py-4 first:pt-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div className="space-y-1.5 flex-1">
                          <a
                            href={pub.inspireUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display text-lg font-semibold text-foreground leading-snug hover:text-primary transition-colors"
                          >
                            {pub.title}
                          </a>
                          <p className="text-sm text-muted-foreground">
                            <AuthorList authors={pub.authors} />
                          </p>
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant={pub.journal ? "secondary" : "outline"} className="text-xs">
                              {pub.journal ?? "Preprint"}
                            </Badge>
                            {!pub.journal && (
                              <span className="text-xs text-muted-foreground">arXiv:{pub.arxivId}</span>
                            )}
                            {pub.arxivId && (
                              <a
                                href={`https://arxiv.org/abs/${pub.arxivId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-xs text-primary hover:underline"
                              >
                                arXiv <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                            {pub.doi && (
                              <a
                                href={`https://doi.org/${pub.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-xs text-primary hover:underline"
                              >
                                DOI <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground shrink-0 sm:text-right">
                          {pub.citationCount} {pub.citationCount === 1 ? "citation" : "citations"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
