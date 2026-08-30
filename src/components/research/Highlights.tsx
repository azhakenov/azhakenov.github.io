import { Sparkles } from "lucide-react";
import { highlights } from "@/content/research";
import { HighlightCard } from "@/components/research/HighlightCard";

export function Highlights() {
  return (
    <section id="recent-highlights" className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl font-bold">Selected Work</h2>
          </div>
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <HighlightCard key={highlight.title} highlight={highlight} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
