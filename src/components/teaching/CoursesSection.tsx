import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Beaker, ClipboardCheck } from "lucide-react";
import { rutgersCourses, rutgersTeaching, onlineTeaching } from "@/content/teaching";

export function CoursesSection() {
  const featured = rutgersTeaching.find((item) => item.featured);
  const rest = rutgersTeaching.filter((item) => !item.featured);

  return (
    <section id="courses" className="py-16 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {featured && (
            <Card className="mb-8 border-primary/40 bg-primary/5 shadow-soft">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <Badge className="mb-1">Currently Teaching</Badge>
                    <h2 className="font-display text-2xl font-bold">{featured.title}</h2>
                    <p className="text-sm text-primary font-medium">{featured.institution}</p>
                    <p className="text-muted-foreground">{featured.description}</p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground shrink-0">{featured.period}</span>
                </div>
              </CardContent>
            </Card>
          )}

          <h2 className="font-display text-3xl font-bold mb-8">Teaching at Rutgers</h2>

          <Card className="border-border/50 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">Physics Courses (2021–Present)</h3>
                <Badge variant="secondary">Teaching Assistant</Badge>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> Introductory
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {rutgersCourses.introductory.map((code) => (
                      <Badge key={code} variant="outline" className="font-mono">
                        PHY {code}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                    <Beaker className="h-4 w-4" /> Intermediate
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {rutgersCourses.intermediate.map((code) => (
                      <Badge key={code} variant="outline" className="font-mono">
                        PHY {code}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                    <ClipboardCheck className="h-4 w-4" /> Grading
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {rutgersCourses.grading.map((code) => (
                      <Badge key={code} variant="outline" className="font-mono">
                        PHY {code}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="font-display text-xl font-semibold mb-4">Special Teaching at Rutgers</h3>

          <div className="space-y-4 mb-8">
            {rest.map((item) => (
              <Card key={item.title} className="border-border/50 hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                      <p className="text-sm text-primary">{item.institution}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                      <Badge variant="secondary">{item.type}</Badge>
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="font-display text-xl font-semibold mb-4">Online Teaching</h3>

          <div className="space-y-4">
            {onlineTeaching.map((item) => (
              <Card key={item.title} className="border-border/50 hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                      <p className="text-sm text-primary">{item.institution}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                      <Badge variant="secondary">{item.type}</Badge>
                      <span className="text-sm text-muted-foreground">{item.period}</span>
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
