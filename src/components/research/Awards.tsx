import { Award as AwardIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { awards } from "@/content/awards";

export function Awards() {
  return (
    <section id="awards" className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <AwardIcon className="h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl font-bold">Awards & Honors</h2>
          </div>

          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {awards.map((award) => (
              <div key={award.title} className="flex items-start justify-between gap-3 py-2 border-b border-border/50">
                <div>
                  <p className="font-medium text-foreground leading-snug">{award.title}</p>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </div>
                <Badge variant="outline" className="shrink-0">
                  {award.year}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
