import { inProgress } from "@/content/in-progress";

export function InProgress() {
  return (
    <section id="in-progress" className="py-14 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-2">Work in Progress</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Projects under way, without preprints yet.
          </p>

          <div className="divide-y divide-border/50">
            {inProgress.map((item) => (
              <div key={item.title} className="py-5 first:pt-0">
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {item.title}
                  {item.collaborators && (
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      {item.collaborators}
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
