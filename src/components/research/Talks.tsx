import { Calendar, MapPin } from "lucide-react";
import { talks } from "@/content/talks";

export function Talks() {
  return (
    <section id="talks" className="py-14 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-8">Talks & Presentations</h2>

          <div className="divide-y divide-border/50">
            {talks.map((talk) => (
              <div key={`${talk.title}-${talk.date}`} className="py-4 first:pt-0 space-y-1.5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">{talk.title}</h3>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap shrink-0">
                    {talk.type}
                  </span>
                </div>
                {talk.link ? (
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary hover:underline transition-colors inline-block"
                  >
                    {talk.event}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{talk.event}</p>
                )}
                {talk.note && <p className="text-sm text-muted-foreground italic">{talk.note}</p>}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {talk.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {talk.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
