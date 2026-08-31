import { FileDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/layout/Seo";
import { Button } from "@/components/ui/button";
import { profile, links, cvUpdated } from "@/content/site";

const Cv = () => {
  return (
    <Layout>
      <Seo path="/cv" />
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in-up">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">Curriculum Vitae</p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {profile.role}, {profile.institution} — expected {profile.expectedDefense}.
              The full CV, including publications, talks, teaching, and awards, is
              available as a PDF.
            </p>
            <Button asChild size="lg" className="gap-2">
              <a href={links.cv} target="_blank" rel="noopener noreferrer">
                <FileDown className="h-5 w-5" />
                Download CV (PDF)
              </a>
            </Button>
            {cvUpdated && (
              <p className="text-sm text-muted-foreground">Last updated {cvUpdated}.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cv;
