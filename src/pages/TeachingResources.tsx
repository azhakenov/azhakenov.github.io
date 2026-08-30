import { ArrowUpRight, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/layout/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { teachingResources } from "@/content/teaching";
import { SITE } from "@/config/site";

const TeachingResources = () => {
  return (
    <Layout>
      <Seo
        title="Teaching Resources"
        description="Reference material for Honors Physics III (PHY 273) and private physics tutoring — math toolkits, problem sheets, and homework sets."
        path="/teaching/resources"
      />

      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-5 animate-fade-in-up">
            <Link
              to="/teaching"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Teaching
            </Link>
            <p className="text-primary font-medium tracking-wide uppercase text-sm">Teaching</p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Teaching Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Material I wrote for my own students. Some of it opens as a web page,
              some as a PDF.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {teachingResources.map((group) => (
              <div key={group.group}>
                <h2 className="font-display text-2xl font-bold mb-6">{group.group}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <a
                      key={item.href}
                      href={`${SITE.base}${item.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <Card className="h-full border-border/50 hover:shadow-soft hover:-translate-y-0.5 transition-all">
                        <CardContent className="p-6 space-y-2">
                          <div className="flex items-start justify-between gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mt-2 shrink-0" />
                          </div>
                          <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          <Badge variant="outline" className="text-xs">
                            {item.format}
                          </Badge>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeachingResources;
