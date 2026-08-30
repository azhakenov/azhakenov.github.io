import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Highlight } from "@/content/research";

interface HighlightCardProps {
  highlight: Highlight;
  reverse?: boolean;
}

export function HighlightCard({ highlight, reverse }: HighlightCardProps) {
  return (
    <Card className="border-border/50 hover:shadow-soft transition-shadow overflow-hidden">
      <CardContent className="p-0">
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
          <div className="md:w-1/3 aspect-video md:aspect-auto bg-background flex items-center justify-center p-4">
            <img
              src={highlight.image}
              alt={highlight.imageAlt}
              className="w-full h-auto object-contain max-h-64"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3 p-6 flex flex-col justify-center">
            <h3 className="font-display text-xl font-semibold mb-3">{highlight.title}</h3>
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
              {highlight.description}
            </div>
            {highlight.links.length > 0 && (
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">Representative works:</p>
                <ul className="space-y-1">
                  {highlight.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                      >
                        – {link.label}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
