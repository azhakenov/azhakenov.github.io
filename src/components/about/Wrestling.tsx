import { ExternalLink } from "lucide-react";
import { wrestling } from "@/content/sports";

export function Wrestling() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="font-display text-2xl font-bold mb-4">Wrestling</h3>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">{wrestling.intro}</p>
      </div>

      <div className="bg-card rounded-2xl p-8 border border-border/50">
        {wrestling.narrative.map((paragraph, i) => (
          <p key={i} className={`text-muted-foreground leading-relaxed ${i > 0 ? "mt-4" : ""}`}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="space-y-8">
        <h4 className="font-display text-xl font-semibold">Journey Timeline</h4>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="space-y-8">
            {wrestling.timeline.map((item) => (
              <div key={item.title} className="relative pl-0 md:pl-12">
                <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background hidden md:block" />
                <div className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-soft transition-shadow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {item.era}
                    </span>
                    <h5 className="font-display font-semibold text-lg">{item.title}</h5>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                  {item.image && (
                    <div className="mt-4">
                      <div className="max-w-md">
                        <img
                          src={item.image.src}
                          alt={item.image.alt}
                          loading="lazy"
                          className="w-full aspect-[4/3] object-cover rounded-lg border border-border/50"
                        />
                        <p className="text-xs text-muted-foreground mt-2 text-center">{item.image.caption}</p>
                      </div>
                      {item.link && (
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary hover:underline"
                        >
                          {item.link.label}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
