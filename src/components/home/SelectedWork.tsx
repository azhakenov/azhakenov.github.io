import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { highlights } from "@/content/research";
import { HighlightCard } from "@/components/research/HighlightCard";

export function SelectedWork() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl font-bold">Selected Work</h2>
            <Link
              to="/research#recent-highlights"
              className="hidden sm:flex items-center text-sm font-medium text-primary hover:underline"
            >
              All research <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <HighlightCard key={highlight.title} highlight={highlight} reverse={index % 2 === 1} />
            ))}
          </div>

          <Link
            to="/research#recent-highlights"
            className="flex sm:hidden items-center justify-center text-sm font-medium text-primary hover:underline mt-6"
          >
            All research <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
