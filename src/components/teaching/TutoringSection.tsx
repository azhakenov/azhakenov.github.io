import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";
import { tutoringServices } from "@/content/teaching";

export function TutoringSection() {
  return (
    <section id="tutoring" className="py-16 bg-card scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="font-display text-3xl font-bold mb-4">Private Tutoring</h2>
            <p className="text-muted-foreground">
              I tutor physics and math privately, from high school through graduate
              level, including preparation for physics olympiads.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tutoringServices.map((service) => (
              <Card key={service.title} className="border-border/50 hover:shadow-soft transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-golden" />
                    <h3 className="font-display text-lg font-semibold">{service.title}</h3>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Levels:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.levels.map((level) => (
                        <span key={level} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>

                  {service.topics && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Topics:</p>
                      <ul className="space-y-1">
                        {service.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-sage mt-0.5 shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
