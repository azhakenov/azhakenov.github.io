import { Card, CardContent } from "@/components/ui/card";
import { researchAreas } from "@/content/research";

export function Areas() {
  return (
    <section className="py-10 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">Research Areas</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {researchAreas.map((area) => (
              <Card key={area.title} className="border-border/50 hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
