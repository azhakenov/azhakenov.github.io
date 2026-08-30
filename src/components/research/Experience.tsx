import { FlaskConical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="research-experience" className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FlaskConical className="h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl font-bold">Research Experience</h2>
          </div>

          <div className="space-y-6">
            {experience.map((exp) => (
              <Card key={exp.position + exp.institution} className="border-border/50 hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{exp.position}</h3>
                      {exp.institutionLink ? (
                        <a
                          href={exp.institutionLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-medium hover:underline"
                        >
                          {exp.institution}
                        </a>
                      ) : (
                        <p className="text-primary font-medium">{exp.institution}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge variant="outline">{exp.period}</Badge>
                      <p className="text-sm">
                        <span className="text-muted-foreground">Advisor:</span>{" "}
                        <span className="font-medium">{exp.advisor}</span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Research Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
