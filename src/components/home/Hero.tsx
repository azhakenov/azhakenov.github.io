import profilePhoto from "@/assets/profile-photo.jpg";
import { profile, links } from "@/content/site";
import { heroSummary } from "@/content/bio";

const actions = [
  { label: "CV (PDF)", href: links.cv, external: false },
  { label: "Email", href: links.email, external: false },
  { label: "arXiv", href: links.arxiv, external: true },
  { label: "INSPIRE", href: links.inspire, external: true },
  { label: "ORCID", href: links.orcid, external: true },
  ...(links.scholar ? [{ label: "Google Scholar", href: links.scholar, external: true }] : []),
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-warm py-14 lg:py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div className="space-y-5 animate-fade-in-up">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">{profile.name}</span>
            </h1>
            <p className="text-lg font-medium text-foreground/90">
              {profile.role}, {profile.institution} — expected {profile.expectedDefense}
            </p>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">{heroSummary}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              {actions.map((action) =>
                action.external ? (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium rounded-full border border-border bg-background/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    {action.label}
                  </a>
                ) : (
                  <a
                    key={action.label}
                    href={action.href}
                    className="px-4 py-2 text-sm font-medium rounded-full border border-border bg-background/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    {action.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="relative animate-fade-in lg:justify-self-end">
            <div className="relative aspect-square w-full max-w-xs mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" />
              <div className="relative h-full w-full rounded-3xl bg-card shadow-medium border border-border overflow-hidden">
                <img
                  src={profilePhoto}
                  alt={`${profile.name}, smiling, standing in a stone archway`}
                  className="h-full w-full object-cover"
                  width={644}
                  height={848}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
