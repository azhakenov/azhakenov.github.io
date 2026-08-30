import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/content/education";

export function Education() {
  return (
    <section id="education" className="py-14 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-7 w-7 text-primary" />
            <h2 className="font-display text-3xl font-bold">Education</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="relative sm:pl-12">
                  <div className="absolute left-2.5 top-6 h-3 w-3 rounded-full bg-primary hidden sm:block" />
                  <Card className="border-border/50 hover:shadow-soft transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="font-display text-lg font-semibold">{edu.degree}</h3>
                          <p className="text-primary font-medium">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground">{edu.location}</p>
                          <p className="text-sm text-muted-foreground">{edu.details}</p>
                          {edu.advisor && (
                            <p className="text-sm">
                              <span className="text-muted-foreground">Advisor:</span>{" "}
                              <span className="font-medium">{edu.advisor}</span>
                            </p>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                          <Badge variant="outline">{edu.period}</Badge>
                          {edu.gpa && <Badge variant="secondary">GPA: {edu.gpa}</Badge>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
